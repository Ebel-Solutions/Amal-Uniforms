/**
 * Google Sheets Service — appends quote leads as rows.
 *
 * Uses the Google Sheets API v4 via the `googleapis` package.
 * Server-side only. Never import from client components.
 *
 * Sheet columns (in order):
 * Quote ID | Date | Name | Company | Phone | Email | Industry | Product |
 * Quantity | Timeline | Customisation | Delivery | Notes | Source | Status
 */

import { google } from "googleapis";
import type { LeadDocument } from "@/lib/server/leadService";

// ─── Auth ─────────────────────────────────────────────────────────────────────

function getGoogleAuth() {
  const email =
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey =
    process.env.GOOGLE_PRIVATE_KEY || process.env.FIREBASE_PRIVATE_KEY;

  if (!email || !privateKey) {
    throw new Error(
      "[GoogleSheets] Missing Google or Firebase service account credentials"
    );
  }

  return new google.auth.JWT({
    email,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

// ─── Append Row ───────────────────────────────────────────────────────────────

export interface SheetSyncResult {
  ok: boolean;
  error?: string;
}

/**
 * Appends a lead as a new row to the configured Google Sheet.
 * Returns { ok: false, error } on failure — never throws.
 */
export async function appendLeadToSheet(
  lead: LeadDocument
): Promise<SheetSyncResult> {
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!sheetId) {
    const msg = "[GoogleSheets] Missing GOOGLE_SHEET_ID — skipping sync";
    console.warn(msg);
    return { ok: false, error: msg };
  }

  try {
    // Ensure header row exists before appending
    await ensureSheetHeaders();

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const timestamp =
      lead.createdAt instanceof Date
        ? lead.createdAt.toISOString()
        : new Date().toISOString();

    const row = [
      lead.quoteId,
      timestamp,
      lead.contactPerson,
      lead.companyName,
      lead.phone,
      lead.email,
      lead.industry,
      lead.products,
      lead.quantity,
      lead.timeline,
      lead.customisation ?? "",
      lead.deliveryLocation ?? "",
      lead.notes ?? "",
      lead.source,
      lead.status,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:O",
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [row] },
    });

    console.log(`[GoogleSheets] Appended lead ${lead.quoteId} to sheet`);
    return { ok: true };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error(`[GoogleSheets] Failed to append lead ${lead.quoteId}:`, error);
    return { ok: false, error };
  }
}

// ─── Ensure Header Row ────────────────────────────────────────────────────────

/**
 * Writes the header row if the sheet is empty (row 1 is blank).
 * Safe to call on every startup — checks first before writing.
 */
export async function ensureSheetHeaders(): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!sheetId) return;

  try {
    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!A1:O1",
    });

    const hasHeader =
      existing.data.values &&
      existing.data.values[0] &&
      existing.data.values[0][0] === "Quote ID";

    if (!hasHeader) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Sheet1!A1:O1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "Quote ID",
              "Date",
              "Contact Person",
              "Company",
              "Phone",
              "Email",
              "Industry",
              "Product",
              "Quantity",
              "Timeline",
              "Customisation",
              "Delivery Location",
              "Notes",
              "Source",
              "Status",
            ],
          ],
        },
      });
      console.log("[GoogleSheets] Header row written");
    }
  } catch (err) {
    console.error("[GoogleSheets] Failed to ensure headers:", err);
  }
}
