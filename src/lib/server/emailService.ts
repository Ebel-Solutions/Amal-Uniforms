/**
 * Email Service — sends quote notification emails via Resend.
 *
 * Server-side only. Never import from client components.
 */

import { Resend } from "resend";
import type { LeadDocument } from "@/lib/server/leadService";

// ─── Resend Client ────────────────────────────────────────────────────────────

function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("[Email] Missing RESEND_API_KEY environment variable");
  }
  return new Resend(key);
}

// ─── Result Type ──────────────────────────────────────────────────────────────

export interface EmailResult {
  ok: boolean;
  error?: string;
}

// ─── Email Template ───────────────────────────────────────────────────────────

function buildEmailHtml(lead: LeadDocument, timestamp: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Quote Request</title></head>
<body style="font-family:Inter,system-ui,sans-serif;background:#f5f5f5;margin:0;padding:24px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">

    <!-- Header -->
    <div style="background:#000000;padding:24px 32px;">
      <h1 style="color:#ffffff;margin:0;font-size:20px;font-weight:600;">
        New Uniform Quote Request
      </h1>
      <p style="color:#aaaaaa;margin:4px 0 0;font-size:14px;">
        Reference ID: <strong style="color:#ffffff;">${lead.quoteId}</strong>
      </p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">

      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${row("Quote ID", lead.quoteId)}
        ${row("Submitted", timestamp)}
        ${row("Contact Person", lead.contactPerson)}
        ${row("Company", lead.companyName)}
        ${row("Phone", lead.phone)}
        ${row("Email", lead.email)}
        ${row("Industry / Service", lead.industry)}
        ${row("Product Interest", lead.products)}
        ${row("Estimated Quantity", lead.quantity)}
        ${row("Timeline", lead.timeline)}
        ${lead.customisation ? row("Customisation", lead.customisation) : ""}
        ${lead.deliveryLocation ? row("Delivery Location", lead.deliveryLocation) : ""}
        ${lead.notes ? row("Additional Notes", lead.notes) : ""}
        ${lead.referenceFileUrl ? row("Reference File", `<a href="${lead.referenceFileUrl}">${lead.referenceFileUrl}</a>`) : ""}
        ${row("Lead Source", lead.source)}
        ${row("Lead Status", lead.status)}
      </table>

      <div style="margin-top:24px;padding:16px;background:#f9f9f9;border-radius:6px;font-size:13px;color:#666;">
        <strong>Next step:</strong> Contact the customer within 24 hours.
      </div>
    </div>

    <!-- Footer -->
    <div style="background:#f0f0f0;padding:16px 32px;font-size:12px;color:#999;text-align:center;">
      Amal Uniforms — Internal Quote Notification — Do not reply to this email.
    </div>
  </div>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;color:#666;width:40%;font-weight:500;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:8px 0 8px 16px;border-bottom:1px solid #f0f0f0;color:#111;vertical-align:top;">
        ${value}
      </td>
    </tr>`;
}

// ─── Send Notification ────────────────────────────────────────────────────────

/**
 * Sends a quote notification email to the configured business address.
 * Returns { ok: false, error } on failure — never throws.
 */
export async function sendQuoteNotification(
  lead: LeadDocument
): Promise<EmailResult> {
  const toEmail = process.env.QUOTE_NOTIFICATION_EMAIL;
  let fromEmail = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";

  // Use default onboarding@resend.dev if placeholder or unverified domain is set
  if (fromEmail.includes("placeholder") || fromEmail.includes("amaluniforms.com")) {
    fromEmail = "onboarding@resend.dev";
  }

  if (!toEmail || toEmail.includes("placeholder")) {
    const msg = "[Email] Missing or placeholder QUOTE_NOTIFICATION_EMAIL — skipping";
    console.warn(msg);
    return { ok: false, error: msg };
  }

  try {
    const resend = getResendClient();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Riyadh",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const subject = `New Uniform Quote Request – ${lead.companyName}`;
    const html = buildEmailHtml(lead, timestamp);

    const { error } = await resend.emails.send({
      from: `Amal Uniforms Quotes <${fromEmail}>`,
      to: [toEmail],
      subject,
      html,
    });

    if (error) {
      console.error(`[Email] Resend API error for ${lead.quoteId}:`, error);
      return { ok: false, error: error.message };
    }

    console.log(`[Email] Notification sent for ${lead.quoteId} → ${toEmail}`);
    return { ok: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error(`[Email] Failed to send notification for ${lead.quoteId}:`, error);
    return { ok: false, error };
  }
}
