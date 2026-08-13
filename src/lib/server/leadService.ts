/**
 * Lead Service — creates and updates quote leads in Firestore.
 *
 * Collection: quoteRequests
 * Server-side only. Never import from client components.
 */

import { getDb } from "@/lib/server/firebase";
import { FieldValue } from "firebase-admin/firestore";

// ─── Lead Status ─────────────────────────────────────────────────────────────

export type LeadStatus =
  | "new"
  | "contacted"
  | "quotation_sent"
  | "negotiation"
  | "won"
  | "lost";

export type LeadSource = "Website - Request Quote";

// ─── Lead Document Shape ──────────────────────────────────────────────────────

export interface LeadDocument {
  quoteId: string;

  // Customer info
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;

  // Quote details
  industry: string;
  products: string;
  quantity: string;
  timeline: string;
  customisation?: string;
  notes?: string;

  // Metadata
  source: LeadSource;
  status: LeadStatus;
  createdAt: FirebaseFirestore.FieldValue | Date;
  updatedAt: FirebaseFirestore.FieldValue | Date;

  // Integration status
  googleSheetsSynced: boolean;
  emailSent: boolean;

  // Optional extras
  referenceFileUrl?: string;
  deliveryLocation?: string;
}

// ─── Quote ID Generator ───────────────────────────────────────────────────────

/**
 * Generates a short unique quote ID like QR-7F3K9P
 */
export function generateQuoteId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // unambiguous charset
  const randomPart = Array.from({ length: 6 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");
  return `QR-${randomPart}`;
}

// ─── Create Lead ──────────────────────────────────────────────────────────────

export interface CreateLeadInput {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  products: string;
  quantity: string;
  timeline: string;
  customisation?: string;
  notes?: string;
  source: LeadSource;
  referenceFileUrl?: string;
  deliveryLocation?: string;
}

/**
 * Creates a new lead document in Firestore.
 * Returns the quoteId on success.
 * Throws on Firestore failure.
 */
export async function createLead(input: CreateLeadInput): Promise<string> {
  const db = getDb();
  const quoteId = generateQuoteId();

  const doc: LeadDocument = {
    quoteId,
    companyName: input.companyName,
    contactPerson: input.contactPerson,
    email: input.email,
    phone: input.phone,
    industry: input.industry,
    products: input.products,
    quantity: input.quantity,
    timeline: input.timeline,
    customisation: input.customisation ?? "",
    notes: input.notes ?? "",
    referenceFileUrl: input.referenceFileUrl ?? "",
    deliveryLocation: input.deliveryLocation ?? "",
    source: input.source,
    status: "new",
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
    googleSheetsSynced: false,
    emailSent: false,
  };

  await db.collection("quoteRequests").doc(quoteId).set(doc);

  console.log(`[LeadService] Lead created: ${quoteId} | Source: ${input.source}`);
  return quoteId;
}

// ─── Update Integration Status ────────────────────────────────────────────────

export interface LeadIntegrationPatch {
  googleSheetsSynced?: boolean;
  emailSent?: boolean;
  status?: LeadStatus;
}

/**
 * Patches integration status fields on an existing lead.
 * Silently fails (logs error) if the document doesn't exist or Firestore fails.
 */
export async function updateLeadIntegrationStatus(
  quoteId: string,
  patch: LeadIntegrationPatch
): Promise<void> {
  try {
    const db = getDb();
    await db
      .collection("quoteRequests")
      .doc(quoteId)
      .update({
        ...patch,
        updatedAt: FieldValue.serverTimestamp(),
      });
    console.log(`[LeadService] Updated status for ${quoteId}:`, patch);
  } catch (err) {
    console.error(`[LeadService] Failed to update status for ${quoteId}:`, err);
  }
}

// ─── Get Lead ─────────────────────────────────────────────────────────────────

/**
 * Retrieves a lead document by quoteId.
 * Returns null if not found.
 */
export async function getLeadById(quoteId: string): Promise<LeadDocument | null> {
  try {
    const db = getDb();
    const snap = await db.collection("quoteRequests").doc(quoteId).get();
    if (!snap.exists) return null;
    return snap.data() as LeadDocument;
  } catch (err) {
    console.error(`[LeadService] Failed to fetch lead ${quoteId}:`, err);
    return null;
  }
}
