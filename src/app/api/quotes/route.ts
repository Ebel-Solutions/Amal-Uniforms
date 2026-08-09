/**
 * POST /api/quotes
 *
 * Accepts a quote request, validates it server-side, saves to Firestore,
 * then attempts Google Sheets sync and email notification (non-blocking).
 *
 * A Firestore failure aborts and returns 500.
 * Sheets/email failures are logged but do NOT fail the response.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createLead, updateLeadIntegrationStatus } from "@/lib/server/leadService";
import { appendLeadToSheet } from "@/lib/server/googleSheetsService";
import { sendQuoteNotification } from "@/lib/server/emailService";

// ─── Server-side Validation Schema ───────────────────────────────────────────

const quoteApiSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100)
    .trim(),
  contactPerson: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(100)
    .trim(),
  phone: z
    .string()
    .min(9, "Phone number too short")
    .max(20, "Phone number too long")
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number format"),
  email: z.string().email("Invalid email address").max(254).toLowerCase().trim(),
  industry: z.string().min(1, "Industry is required").max(100),
  products: z.string().min(1, "Product selection is required").max(200),
  quantity: z.string().min(1, "Quantity is required").max(50),
  timeline: z.string().min(1, "Timeline is required").max(50),
  customisation: z.string().max(2000).optional().default(""),
  notes: z.string().max(2000).optional().default(""),
  deliveryLocation: z.string().max(200).optional().default(""),
});

// ─── Simple In-Memory Rate Limiter ────────────────────────────────────────────
// Limits to 5 submissions per IP per 10 minutes
// For production, use Redis/Upstash instead

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 10 * 60 * 1000; // 10 minutes
  const limit = 5;

  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + window });
    return false;
  }

  if (entry.count >= limit) return true;

  entry.count += 1;
  return false;
}

// Clean up old rate-limit entries every 15 minutes to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of rateLimitStore.entries()) {
    if (now > val.resetAt) rateLimitStore.delete(key);
  }
}, 15 * 60 * 1000);

// ─── POST Handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // ── 1. Rate limiting ──────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    console.warn(`[QuoteAPI] Rate limit hit for IP: ${ip}`);
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Please try again in a few minutes.",
      },
      { status: 429 }
    );
  }

  // ── 2. Parse request body ─────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // ── 3. Server-side validation ─────────────────────────────────────────────
  const parsed = quoteApiSchema.safeParse(body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const field = issue.path[0] as string;
      if (field) fieldErrors[field] = issue.message;
    });
    return NextResponse.json(
      {
        success: false,
        message: "Please correct the highlighted fields.",
        errors: fieldErrors,
      },
      { status: 422 }
    );
  }

  const data = parsed.data;
  console.log(`[QuoteAPI] New quote request from ${data.companyName} (IP: ${ip})`);

  // ── 4. Save to Firestore (primary — must succeed) ─────────────────────────
  let quoteId: string;
  try {
    quoteId = await createLead({
      ...data,
      source: "Website - Request Quote",
    });
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error("[QuoteAPI] Firestore save FAILED:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't submit your request right now. Please try again or contact our team directly.",
      },
      { status: 500 }
    );
  }

  console.log(`[QuoteAPI] Firestore saved: ${quoteId}`);

  // ── 5. Google Sheets sync (non-blocking) ──────────────────────────────────
  const leadDoc = {
    quoteId,
    ...data,
    source: "Website - Request Quote" as const,
    status: "new" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    googleSheetsSynced: false,
    emailSent: false,
  };

  const sheetsResult = await appendLeadToSheet(leadDoc);
  if (sheetsResult.ok) {
    await updateLeadIntegrationStatus(quoteId, { googleSheetsSynced: true });
  } else {
    console.warn(`[QuoteAPI] Sheets sync failed for ${quoteId}:`, sheetsResult.error);
  }

  // ── 6. Email notification (non-blocking) ──────────────────────────────────
  const emailResult = await sendQuoteNotification(leadDoc);
  if (emailResult.ok) {
    await updateLeadIntegrationStatus(quoteId, { emailSent: true });
  } else {
    console.warn(`[QuoteAPI] Email failed for ${quoteId}:`, emailResult.error);
  }

  // ── 7. Success response ───────────────────────────────────────────────────
  console.log(
    `[QuoteAPI] ${quoteId} complete — sheets:${sheetsResult.ok} email:${emailResult.ok}`
  );

  return NextResponse.json(
    {
      success: true,
      quoteId,
      message: "Your quote request has been received. Our team will contact you shortly.",
    },
    { status: 201 }
  );
}

// ─── GET — method not allowed ─────────────────────────────────────────────────

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
