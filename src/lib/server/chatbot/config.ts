/**
 * Chatbot Configuration
 *
 * All configurable content for the WhatsApp chatbot lives here.
 * Categories and company info are sourced from the existing website constants.
 */

// ─── Company Info ─────────────────────────────────────────────────────────────

export const COMPANY = {
  name: "Amal Uniforms",
  tagline: "Premium Uniform Manufacturer — Saudi Arabia",
  phone: "+966 572 429 905",
  email: "info@amaluniforms.com",
  website: "https://www.amaluniforms.com",
  location: "Riyadh, Saudi Arabia",
};

// ─── Uniform Categories ───────────────────────────────────────────────────────

export const UNIFORM_CATEGORIES = [
  { id: "corporate",    label: "Corporate",              emoji: "👔" },
  { id: "healthcare",   label: "Healthcare",             emoji: "🏥" },
  { id: "hospitality",  label: "Hospitality",            emoji: "🏨" },
  { id: "industrial",   label: "Industrial & Safety",    emoji: "🦺" },
  { id: "security",     label: "Security",               emoji: "🛡️" },
  { id: "education",    label: "Education",              emoji: "🎓" },
  { id: "aviation",     label: "Aviation & Transport",   emoji: "✈️" },
  { id: "sports",       label: "Sports & Events",        emoji: "⚽" },
  { id: "retail",       label: "Retail & Commercial",    emoji: "🛍️" },
  { id: "facility",     label: "Facility Management",    emoji: "🏢" },
  { id: "construction", label: "Construction",           emoji: "🏗️" },
  { id: "printing",     label: "Printing Services",      emoji: "🖨️" },
  { id: "embroidery",   label: "Embroidery Services",    emoji: "🪡" },
  { id: "custom",       label: "Custom Manufacturing",   emoji: "⚙️" },
];

// ─── Lead Status ──────────────────────────────────────────────────────────────

export const LEAD_STATUS = {
  NEW: "new",
  CONTACTED: "contacted",
  QUOTATION_SENT: "quotation_sent",
  NEGOTIATION: "negotiation",
  WON: "won",
  LOST: "lost",
} as const;

// ─── Chatbot Flow States ──────────────────────────────────────────────────────

export const FLOW_STATE = {
  // Entry
  IDLE: "IDLE",
  MAIN_MENU: "MAIN_MENU",

  // Uniform Enquiry flow
  ENQUIRY_INDUSTRY: "ENQUIRY_INDUSTRY",
  ENQUIRY_UNIFORM: "ENQUIRY_UNIFORM",
  ENQUIRY_QUANTITY: "ENQUIRY_QUANTITY",
  ENQUIRY_LOGO: "ENQUIRY_LOGO",
  ENQUIRY_LOCATION: "ENQUIRY_LOCATION",

  // Shared contact collection
  COLLECT_NAME: "COLLECT_NAME",
  COLLECT_COMPANY: "COLLECT_COMPANY",
  COLLECT_EMAIL: "COLLECT_EMAIL",
  COLLECT_PHONE: "COLLECT_PHONE",

  // Outcomes
  CATEGORIES: "CATEGORIES",
  CORPORATE_ORDERS: "CORPORATE_ORDERS",
  HUMAN_HANDOFF: "HUMAN_HANDOFF",
  QUOTE_SUBMITTED: "QUOTE_SUBMITTED",
  DONE: "DONE",
} as const;

export type FlowState = (typeof FLOW_STATE)[keyof typeof FLOW_STATE];

// ─── Message Templates ────────────────────────────────────────────────────────

export const MSG = {
  welcome: (name: string) => `👋 Hello${name ? ` ${name}` : ""}! Welcome to *${COMPANY.name}*.

We are Saudi Arabia's trusted uniform manufacturer — supplying corporate, healthcare, hospitality, industrial, and more.

How can we help you today?

1️⃣ Uniform Enquiry
2️⃣ Request a Quote
3️⃣ Browse Uniform Categories
4️⃣ Corporate / Bulk Orders
5️⃣ Talk to Sales

_Reply with a number (1–5) or type your question._`,

  categoriesList: () => {
    const cats = UNIFORM_CATEGORIES.map(
      (c, i) => `${i + 1}. ${c.emoji} ${c.label}`
    ).join("\n");
    return `📋 *Our Uniform Categories*\n\n${cats}\n\nReply with a number to learn more, or type *menu* to go back.`;
  },

  enquiryIndustry: () =>
    `🏭 What *industry* are you looking for uniforms in?\n\nFor example: Healthcare, Hospitality, Corporate, Security, Education, Construction...\n\nPlease type your industry.`,

  enquiryUniform: (industry: string) =>
    `Great! For *${industry}* — what *type of uniform* are you looking for?\n\nE.g., scrubs, chef coats, blazers, coveralls, etc.`,

  enquiryQuantity: () =>
    `📦 What is the *approximate quantity* you need?\n\nE.g., 50 pieces, 200 uniforms, etc.`,

  enquiryLogo: () =>
    `🪡 Do you require *logo embroidery or customisation*?\n\nReply *yes* or *no*.`,

  enquiryLocation: () =>
    `📍 What is your *delivery location*?\n\nE.g., Riyadh, Jeddah, Dammam...`,

  collectName: () =>
    `👤 Great! Let's capture your details.\n\nWhat is your *full name*?`,

  collectCompany: () =>
    `🏢 What is your *company name*?`,

  collectEmail: () =>
    `📧 What is your *email address*?\n\nWe'll send the quote details to this email.`,

  collectPhone: () =>
    `📱 What is your *WhatsApp/phone number*?\n\nInclude country code, e.g. +966 5X XXX XXXX`,

  quoteSaved: (quoteId: string) =>
    `✅ *Thank you! Your enquiry has been received.*\n\n📋 *Reference ID:* ${quoteId}\n\nOur sales team will review your requirements and contact you shortly — usually within 24 hours.\n\nIs there anything else we can help with? Reply *menu* to start over.`,

  humanHandoff: () =>
    `🤝 *Connecting you with our Sales Team*\n\nSure! Our sales team will be happy to assist you personally.\n\nPlease share your requirement here and a team member will contact you shortly.\n\nYou can also reach us at:\n📞 ${COMPANY.phone}\n📧 ${COMPANY.email}`,

  corporateOrders: () =>
    `🏢 *Corporate & Bulk Orders*\n\nAmal Uniforms specialises in large-scale corporate uniform supply across Saudi Arabia.\n\n✅ Minimum orders from 50 units\n✅ Custom branding & embroidery\n✅ Multi-location delivery\n✅ Dedicated account manager\n✅ Competitive bulk pricing\n\nWould you like to request a quote or talk to our corporate sales team?\n\n1️⃣ Request a Quote\n2️⃣ Talk to Sales\n3️⃣ Back to Main Menu`,

  unknown: () =>
    `🤔 I didn't quite get that. Please reply with a number from the menu or type *menu* to see the options again.`,

  menu: () =>
    `🔄 *Main Menu*\n\n1️⃣ Uniform Enquiry\n2️⃣ Request a Quote\n3️⃣ Browse Uniform Categories\n4️⃣ Corporate / Bulk Orders\n5️⃣ Talk to Sales\n\n_Reply with a number (1–5)._`,
};
