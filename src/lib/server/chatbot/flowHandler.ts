/**
 * Chatbot Flow Handler
 *
 * Rule-based state machine for the WhatsApp chatbot.
 * Processes an incoming message + current session, returns a reply and updates state.
 *
 * To add AI/NLP later: replace the intent detection in this file without
 * touching the session or WhatsApp service layers.
 */

import {
  FLOW_STATE,
  UNIFORM_CATEGORIES,
  MSG,
  type FlowState,
} from "@/lib/server/chatbot/config";
import {
  getSession,
  updateSession,
  resetSession,
  type ChatSession,
} from "@/lib/server/chatbot/sessionService";
import { createLead } from "@/lib/server/leadService";
import { appendLeadToSheet } from "@/lib/server/googleSheetsService";
import { sendQuoteNotification } from "@/lib/server/emailService";
import { updateLeadIntegrationStatus } from "@/lib/server/leadService";

// ─── Result ───────────────────────────────────────────────────────────────────

export interface FlowResult {
  reply: string;
  nextState: FlowState;
}

// ─── Helper: normalize input ──────────────────────────────────────────────────

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function isMenuTrigger(text: string): boolean {
  const t = normalize(text);
  return ["menu", "start", "hi", "hello", "hey", "مرحبا", "مرحبًا"].includes(t);
}

// ─── Category list lookup ─────────────────────────────────────────────────────

function getCategoryByIndex(input: string): string | null {
  const n = parseInt(input.trim(), 10);
  if (isNaN(n) || n < 1 || n > UNIFORM_CATEGORIES.length) return null;
  return UNIFORM_CATEGORIES[n - 1].label;
}

// ─── Save WhatsApp Lead to Firebase ──────────────────────────────────────────

async function saveWhatsAppLead(session: ChatSession): Promise<string> {
  const quoteId = await createLead({
    companyName: session.companyName || "N/A",
    contactPerson: session.contactName || session.name,
    email: session.email || "",
    phone: session.phone || session.waId,
    industry: session.industry || "Not specified",
    products: session.uniformType || "General Enquiry",
    quantity: session.quantity || "Not specified",
    timeline: "Flexible (4–6 weeks)",
    customisation: session.logoRequired === "yes" ? "Logo embroidery required" : "",
    notes: "",
    deliveryLocation: session.deliveryLocation || "",
    source: "WhatsApp",
  });

  // Non-blocking integrations
  const leadDoc = {
    quoteId,
    companyName: session.companyName || "N/A",
    contactPerson: session.contactName || session.name,
    email: session.email || "",
    phone: session.phone || session.waId,
    industry: session.industry || "Not specified",
    products: session.uniformType || "General Enquiry",
    quantity: session.quantity || "Not specified",
    timeline: "Flexible (4–6 weeks)",
    customisation: session.logoRequired === "yes" ? "Logo embroidery required" : "",
    notes: "",
    deliveryLocation: session.deliveryLocation || "",
    source: "WhatsApp" as const,
    status: "new" as const,
    createdAt: new Date(),
    updatedAt: new Date(),
    googleSheetsSynced: false,
    emailSent: false,
  };

  const [sheetsResult, emailResult] = await Promise.allSettled([
    appendLeadToSheet(leadDoc),
    sendQuoteNotification(leadDoc),
  ]);

  const sheetsOk =
    sheetsResult.status === "fulfilled" && sheetsResult.value.ok;
  const emailOk =
    emailResult.status === "fulfilled" && emailResult.value.ok;

  await updateLeadIntegrationStatus(quoteId, {
    googleSheetsSynced: sheetsOk,
    emailSent: emailOk,
  });

  return quoteId;
}

// ─── Main Handler ─────────────────────────────────────────────────────────────

/**
 * Processes an incoming WhatsApp message and returns a reply + next state.
 * Also mutates the session in the store via updateSession / resetSession.
 */
export async function handleMessage(
  waId: string,
  displayName: string,
  incomingText: string
): Promise<FlowResult> {
  const session = getSession(waId, displayName);
  const text = incomingText.trim();
  const norm = normalize(text);

  // ── Global: "menu" resets to main menu from anywhere ─────────────────────
  if (isMenuTrigger(text) || session.state === FLOW_STATE.IDLE) {
    updateSession(waId, { state: FLOW_STATE.MAIN_MENU });
    return { reply: MSG.welcome(session.name), nextState: FLOW_STATE.MAIN_MENU };
  }

  // ── MAIN MENU ─────────────────────────────────────────────────────────────
  if (session.state === FLOW_STATE.MAIN_MENU) {
    switch (norm) {
      case "1":
      case "uniform enquiry":
        updateSession(waId, { state: FLOW_STATE.ENQUIRY_INDUSTRY, subFlow: "enquiry" });
        return { reply: MSG.enquiryIndustry(), nextState: FLOW_STATE.ENQUIRY_INDUSTRY };

      case "2":
      case "request a quote":
      case "quote":
        updateSession(waId, { state: FLOW_STATE.ENQUIRY_INDUSTRY, subFlow: "quote" });
        return { reply: MSG.enquiryIndustry(), nextState: FLOW_STATE.ENQUIRY_INDUSTRY };

      case "3":
      case "categories":
        updateSession(waId, { state: FLOW_STATE.CATEGORIES });
        return { reply: MSG.categoriesList(), nextState: FLOW_STATE.CATEGORIES };

      case "4":
      case "corporate":
      case "bulk orders":
        updateSession(waId, { state: FLOW_STATE.CORPORATE_ORDERS });
        return { reply: MSG.corporateOrders(), nextState: FLOW_STATE.CORPORATE_ORDERS };

      case "5":
      case "sales":
      case "talk to sales":
        updateSession(waId, { state: FLOW_STATE.HUMAN_HANDOFF });
        return { reply: MSG.humanHandoff(), nextState: FLOW_STATE.HUMAN_HANDOFF };

      default:
        return { reply: MSG.unknown(), nextState: FLOW_STATE.MAIN_MENU };
    }
  }

  // ── CATEGORIES ────────────────────────────────────────────────────────────
  if (session.state === FLOW_STATE.CATEGORIES) {
    const category = getCategoryByIndex(text);
    if (category) {
      const cat = UNIFORM_CATEGORIES.find((c) => c.label === category)!;
      const reply = `${cat.emoji} *${cat.label} Uniforms*\n\nAmal Uniforms supplies premium ${cat.label.toLowerCase()} uniforms tailored to your brand and operational requirements.\n\nWould you like to request a quote or enquire further?\n\n1️⃣ Request a Quote\n2️⃣ Talk to Sales\n3️⃣ Back to Main Menu`;
      updateSession(waId, { state: FLOW_STATE.MAIN_MENU, industry: category });
      return { reply, nextState: FLOW_STATE.MAIN_MENU };
    }
    if (norm === "menu" || norm === "back" || norm === "3") {
      updateSession(waId, { state: FLOW_STATE.MAIN_MENU });
      return { reply: MSG.menu(), nextState: FLOW_STATE.MAIN_MENU };
    }
    return { reply: MSG.unknown(), nextState: FLOW_STATE.CATEGORIES };
  }

  // ── CORPORATE ORDERS ──────────────────────────────────────────────────────
  if (session.state === FLOW_STATE.CORPORATE_ORDERS) {
    if (norm === "1" || norm === "quote" || norm === "request a quote") {
      updateSession(waId, { state: FLOW_STATE.ENQUIRY_INDUSTRY, subFlow: "quote" });
      return { reply: MSG.enquiryIndustry(), nextState: FLOW_STATE.ENQUIRY_INDUSTRY };
    }
    if (norm === "2" || norm === "sales") {
      updateSession(waId, { state: FLOW_STATE.HUMAN_HANDOFF });
      return { reply: MSG.humanHandoff(), nextState: FLOW_STATE.HUMAN_HANDOFF };
    }
    if (norm === "3" || norm === "menu") {
      updateSession(waId, { state: FLOW_STATE.MAIN_MENU });
      return { reply: MSG.menu(), nextState: FLOW_STATE.MAIN_MENU };
    }
    return { reply: MSG.unknown(), nextState: FLOW_STATE.CORPORATE_ORDERS };
  }

  // ── HUMAN HANDOFF ─────────────────────────────────────────────────────────
  if (session.state === FLOW_STATE.HUMAN_HANDOFF) {
    if (isMenuTrigger(text) || norm === "menu") {
      updateSession(waId, { state: FLOW_STATE.MAIN_MENU });
      return { reply: MSG.menu(), nextState: FLOW_STATE.MAIN_MENU };
    }
    // Any message in handoff state: acknowledge and keep state
    return {
      reply: `📩 Your message has been noted. A member of our team will reach out to you shortly.\n\nReply *menu* to go back to the main menu.`,
      nextState: FLOW_STATE.HUMAN_HANDOFF,
    };
  }

  // ── ENQUIRY FLOW: Industry ────────────────────────────────────────────────
  if (session.state === FLOW_STATE.ENQUIRY_INDUSTRY) {
    updateSession(waId, { industry: text, state: FLOW_STATE.ENQUIRY_UNIFORM });
    return { reply: MSG.enquiryUniform(text), nextState: FLOW_STATE.ENQUIRY_UNIFORM };
  }

  // ── ENQUIRY FLOW: Uniform type ────────────────────────────────────────────
  if (session.state === FLOW_STATE.ENQUIRY_UNIFORM) {
    updateSession(waId, { uniformType: text, state: FLOW_STATE.ENQUIRY_QUANTITY });
    return { reply: MSG.enquiryQuantity(), nextState: FLOW_STATE.ENQUIRY_QUANTITY };
  }

  // ── ENQUIRY FLOW: Quantity ────────────────────────────────────────────────
  if (session.state === FLOW_STATE.ENQUIRY_QUANTITY) {
    updateSession(waId, { quantity: text, state: FLOW_STATE.ENQUIRY_LOGO });
    return { reply: MSG.enquiryLogo(), nextState: FLOW_STATE.ENQUIRY_LOGO };
  }

  // ── ENQUIRY FLOW: Logo ────────────────────────────────────────────────────
  if (session.state === FLOW_STATE.ENQUIRY_LOGO) {
    const logoVal = norm.startsWith("y") ? "yes" : "no";
    updateSession(waId, { logoRequired: logoVal, state: FLOW_STATE.ENQUIRY_LOCATION });
    return { reply: MSG.enquiryLocation(), nextState: FLOW_STATE.ENQUIRY_LOCATION };
  }

  // ── ENQUIRY FLOW: Location ────────────────────────────────────────────────
  if (session.state === FLOW_STATE.ENQUIRY_LOCATION) {
    updateSession(waId, { deliveryLocation: text, state: FLOW_STATE.COLLECT_NAME });
    return { reply: MSG.collectName(), nextState: FLOW_STATE.COLLECT_NAME };
  }

  // ── CONTACT COLLECTION: Name ──────────────────────────────────────────────
  if (session.state === FLOW_STATE.COLLECT_NAME) {
    updateSession(waId, { contactName: text, state: FLOW_STATE.COLLECT_COMPANY });
    return { reply: MSG.collectCompany(), nextState: FLOW_STATE.COLLECT_COMPANY };
  }

  // ── CONTACT COLLECTION: Company ───────────────────────────────────────────
  if (session.state === FLOW_STATE.COLLECT_COMPANY) {
    updateSession(waId, { companyName: text, state: FLOW_STATE.COLLECT_EMAIL });
    return { reply: MSG.collectEmail(), nextState: FLOW_STATE.COLLECT_EMAIL };
  }

  // ── CONTACT COLLECTION: Email ─────────────────────────────────────────────
  if (session.state === FLOW_STATE.COLLECT_EMAIL) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      return {
        reply:
          "⚠️ That doesn't look like a valid email address. Please try again.\n\nExample: name@company.com",
        nextState: FLOW_STATE.COLLECT_EMAIL,
      };
    }
    updateSession(waId, { email: text, state: FLOW_STATE.COLLECT_PHONE });
    return { reply: MSG.collectPhone(), nextState: FLOW_STATE.COLLECT_PHONE };
  }

  // ── CONTACT COLLECTION: Phone → Submit Lead ───────────────────────────────
  if (session.state === FLOW_STATE.COLLECT_PHONE) {
    updateSession(waId, { phone: text });

    // Re-fetch updated session for saving
    const updatedSession = getSession(waId, displayName);

    try {
      const quoteId = await saveWhatsAppLead(updatedSession);
      resetSession(waId);
      return {
        reply: MSG.quoteSaved(quoteId),
        nextState: FLOW_STATE.DONE,
      };
    } catch (err) {
      console.error("[FlowHandler] Failed to save WhatsApp lead:", err);
      resetSession(waId);
      return {
        reply:
          "⚠️ We encountered an issue saving your enquiry. Please contact us directly:\n\n📞 " +
          (process.env.COMPANY_PHONE ?? "+966 55 123 4567") +
          "\n📧 info@amaluniforms.com",
        nextState: FLOW_STATE.DONE,
      };
    }
  }

  // ── DONE / FALLBACK ───────────────────────────────────────────────────────
  updateSession(waId, { state: FLOW_STATE.MAIN_MENU });
  return { reply: MSG.menu(), nextState: FLOW_STATE.MAIN_MENU };
}
