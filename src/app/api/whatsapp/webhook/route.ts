/**
 * GET /api/whatsapp/webhook  — Meta webhook verification challenge
 * POST /api/whatsapp/webhook — Incoming WhatsApp message events
 *
 * Docs: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks
 */

import { NextRequest, NextResponse } from "next/server";
import {
  verifyWebhookChallenge,
  verifyWebhookSignature,
  parseIncomingMessage,
  sendWhatsAppMessage,
  type WhatsAppWebhookPayload,
} from "@/lib/server/whatsappService";
import { handleMessage } from "@/lib/server/chatbot/flowHandler";

// ─── GET — Webhook Verification ───────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const challengeValue = verifyWebhookChallenge(mode, token, challenge);

  if (challengeValue) {
    // Respond with plain text challenge string as required by Meta
    return new NextResponse(challengeValue, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.json({ message: "Verification failed" }, { status: 403 });
}

// ─── POST — Incoming Messages ─────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // ── 1. Read raw body for signature verification ───────────────────────────
  let rawBody: string;
  try {
    rawBody = await req.text();
  } catch {
    return NextResponse.json({ message: "Invalid body" }, { status: 400 });
  }

  // ── 2. Verify webhook signature ───────────────────────────────────────────
  const signature = req.headers.get("x-hub-signature-256");
  if (!verifyWebhookSignature(rawBody, signature)) {
    console.warn("[WhatsAppWebhook] Signature verification failed — rejecting request");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // ── 3. Parse payload ──────────────────────────────────────────────────────
  let payload: WhatsAppWebhookPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  // ── 4. Confirm it's a WhatsApp event ─────────────────────────────────────
  if (payload.object !== "whatsapp_business_account") {
    // Meta sends other event types; acknowledge but ignore them
    return NextResponse.json({ status: "ignored" }, { status: 200 });
  }

  // ── 5. Extract incoming message ───────────────────────────────────────────
  const message = parseIncomingMessage(payload);

  if (!message) {
    // Status updates, media, reactions, etc. — acknowledge and return
    return NextResponse.json({ status: "ok" }, { status: 200 });
  }

  console.log(
    `[WhatsAppWebhook] Message from ${message.name} (${message.waId}): "${message.text}"`
  );

  // ── 6. Process through chatbot flow ──────────────────────────────────────
  try {
    const { reply } = await handleMessage(
      message.waId,
      message.name,
      message.text
    );

    // ── 7. Send reply ───────────────────────────────────────────────────────
    const sendResult = await sendWhatsAppMessage(message.waId, reply);

    if (!sendResult.ok) {
      console.error(
        `[WhatsAppWebhook] Failed to send reply to ${message.waId}:`,
        sendResult.error
      );
    }
  } catch (err) {
    // Never let an exception propagate to Meta — they'll retry repeatedly
    console.error("[WhatsAppWebhook] Unhandled error in flow handler:", err);
  }

  // ── 8. Always return 200 to Meta to prevent retries ──────────────────────
  return NextResponse.json({ status: "ok" }, { status: 200 });
}
