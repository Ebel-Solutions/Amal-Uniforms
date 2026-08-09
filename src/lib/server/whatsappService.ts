/**
 * WhatsApp Cloud API Service
 *
 * Handles sending messages, webhook verification, and payload parsing.
 * Server-side only. Never import from client components.
 *
 * Docs: https://developers.facebook.com/docs/whatsapp/cloud-api
 */

import crypto from "crypto";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WhatsAppTextMessage {
  waId: string;       // Sender's WhatsApp ID (phone number without +)
  name: string;       // Sender's display name
  text: string;       // Message text
  messageId: string;  // Unique message ID
  timestamp: number;  // Unix timestamp
}

export interface WhatsAppWebhookPayload {
  object: string;
  entry: Array<{
    id: string;
    changes: Array<{
      field: string;
      value: {
        messaging_product: string;
        metadata: { display_phone_number: string; phone_number_id: string };
        contacts?: Array<{ profile: { name: string }; wa_id: string }>;
        messages?: Array<{
          from: string;
          id: string;
          timestamp: string;
          type: string;
          text?: { body: string };
        }>;
        statuses?: Array<{ id: string; status: string }>;
      };
    }>;
  }>;
}

// ─── Send Text Message ────────────────────────────────────────────────────────

export async function sendWhatsAppMessage(
  to: string,
  text: string
): Promise<{ ok: boolean; error?: string }> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const apiVersion = process.env.WHATSAPP_API_VERSION ?? "v19.0";

  if (!token || !phoneNumberId) {
    const msg =
      "[WhatsApp] Missing WHATSAPP_ACCESS_TOKEN or WHATSAPP_PHONE_NUMBER_ID";
    console.warn(msg);
    return { ok: false, error: msg };
  }

  try {
    const url = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { preview_url: false, body: text },
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error(`[WhatsApp] API error (${res.status}):`, errBody);
      return { ok: false, error: `API error ${res.status}: ${errBody}` };
    }

    return { ok: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error("[WhatsApp] Failed to send message:", error);
    return { ok: false, error };
  }
}

// ─── Webhook Verification ─────────────────────────────────────────────────────

/**
 * Validates a GET request from Meta's webhook verification handshake.
 * Returns the challenge string if valid, null otherwise.
 */
export function verifyWebhookChallenge(
  mode: string | null,
  token: string | null,
  challenge: string | null
): string | null {
  const expectedToken = process.env.WHATSAPP_VERIFY_TOKEN;

  if (!expectedToken) {
    console.error("[WhatsApp] WHATSAPP_VERIFY_TOKEN is not set");
    return null;
  }

  if (mode === "subscribe" && token === expectedToken && challenge) {
    console.log("[WhatsApp] Webhook verification successful");
    return challenge;
  }

  console.warn("[WhatsApp] Webhook verification failed — token mismatch");
  return null;
}

/**
 * Validates the X-Hub-Signature-256 header from Meta's POST webhook.
 * Returns true if the signature matches; false otherwise.
 */
export function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null
): boolean {
  const appSecret = process.env.WHATSAPP_APP_SECRET;

  // If no app secret is configured, skip signature validation (dev mode)
  if (!appSecret) {
    console.warn("[WhatsApp] WHATSAPP_APP_SECRET not set — skipping signature check");
    return true;
  }

  if (!signatureHeader || !signatureHeader.startsWith("sha256=")) {
    console.warn("[WhatsApp] Missing or malformed X-Hub-Signature-256 header");
    return false;
  }

  try {
    const expectedSig = crypto
      .createHmac("sha256", appSecret)
      .update(rawBody, "utf8")
      .digest("hex");

    const receivedSig = signatureHeader.slice("sha256=".length);

    // Timing-safe comparison
    const isValid = crypto.timingSafeEqual(
      Buffer.from(expectedSig, "hex"),
      Buffer.from(receivedSig, "hex")
    );

    if (!isValid) {
      console.warn("[WhatsApp] Signature verification failed");
    }

    return isValid;
  } catch (err) {
    console.error("[WhatsApp] Signature comparison error:", err);
    return false;
  }
}

// ─── Parse Incoming Message ───────────────────────────────────────────────────

/**
 * Extracts the first text message from a WhatsApp webhook payload.
 * Returns null if no text message is found (e.g., status updates, media, etc.)
 */
export function parseIncomingMessage(
  payload: WhatsAppWebhookPayload
): WhatsAppTextMessage | null {
  try {
    const change = payload.entry?.[0]?.changes?.[0]?.value;
    if (!change) return null;

    const message = change.messages?.[0];
    if (!message || message.type !== "text") return null;

    const contact = change.contacts?.[0];
    const text = message.text?.body?.trim() ?? "";

    if (!text) return null;

    return {
      waId: message.from,
      name: contact?.profile?.name ?? message.from,
      text,
      messageId: message.id,
      timestamp: parseInt(message.timestamp, 10),
    };
  } catch (err) {
    console.error("[WhatsApp] Failed to parse webhook payload:", err);
    return null;
  }
}
