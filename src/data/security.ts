// ─── Security Industry Page Data ───────────────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface SecuritySubcategory {
  id: string;
  title: string;
  description: string;
  image: string;
  badgeIcon: string;
  href?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export const securityData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Security page (Tactical Steel / Deep Blue)
  theme: {
    accentName: "blue", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange), Construction (yellow)
    badgeBg: "bg-blue-500/15",
    badgeText: "text-blue-950 font-bold",
    badgeBorder: "border-blue-500/30",
    dividerBar: "bg-blue-700",
    cardHoverText: "group-hover:text-blue-800",
    cardLinkText: "text-blue-700 hover:text-blue-900",
    ctaPrimaryBtn: "bg-blue-700 text-white hover:bg-blue-800 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Security", href: "/industries/security" },
    ],
    title: "Security Uniforms",
    subtitle:
      "Commanding, durable security guard attire, tactical uniforms, patrol wear, and protective gear engineered for maximum authority and discipline.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/security-catalog.pdf",
    },
    highlights: [
      { icon: "ShieldAlert", label: "Authoritative & Command Fit" },
      { icon: "ShieldCheck", label: "Ripstop & Weatherproof" },
      { icon: "Award", label: "Custom Badging & Epaulettes" },
    ],
    heroImage: "/images/security/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Security Uniforms",
    description:
      "Engineered for private security firms, facility protection teams, event security, tactical units, and residential patrol personnel across Saudi Arabia.",
  },

  // 6 exact subcategories from user image
  subcategories: [
    {
      id: "security-guard-uniforms",
      title: "Security Guard Uniforms",
      description:
        "Formal security shirts, trousers, and blazers featuring custom epaulettes, badge holders, and pocket loops.",
      image: "/images/security/security-guard.png",
      badgeIcon: "ShieldAlert",
      href: "/contact#quote",
    },
    {
      id: "patrol-uniforms",
      title: "Patrol Uniforms",
      description:
        "Durable, climate-controlled patrol shirts and cargo pants built for long mobile shifts and outdoor security.",
      image: "/images/security/patrol-uniforms.png",
      badgeIcon: "Radio",
      href: "/contact#quote",
    },
    {
      id: "tactical-uniforms",
      title: "Tactical Uniforms",
      description:
        "Heavy-duty ripstop tactical shirts, BDU pants, combat boots, and modular utility vests for high-security details.",
      image: "/images/security/tactical-uniforms.png",
      badgeIcon: "ShieldCheck",
      href: "/contact#quote",
    },
    {
      id: "security-shirts-pants",
      title: "Security Shirts & Pants",
      description:
        "Woven long-sleeve and short-sleeve security dress shirts with military creases paired with reinforced formal trousers.",
      image: "/images/security/shirts-pants.png",
      badgeIcon: "Shirt",
      href: "/contact#quote",
    },
    {
      id: "security-jackets",
      title: "Security Jackets",
      description:
        "Windproof high-visibility reflective windbreakers, bomber jackets, and heavy winter coats with Security back patches.",
      image: "/images/security/security-jackets.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "security-caps-accessories",
      title: "Security Caps & Accessories",
      description:
        "Peak caps, berets, lanyard cords, rank insignias, brass badges, waist belts, and tactical duty belts.",
      image: "/images/security/caps-accessories.png",
      badgeIcon: "Award",
      href: "/contact#quote",
    },
  ] as SecuritySubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Security Apparel?",
    items: [
      {
        icon: "ShieldAlert",
        title: "Authoritative Design",
        description:
          "Sharp tailoring, military-style creases, and immaculate finish that projects command, discipline, and trust.",
      },
      {
        icon: "ShieldCheck",
        title: "Tactical Ripstop Fabric",
        description:
          "High-tensile strength poly-cotton ripstop fabrics engineered to endure rough physical demands and frequent laundering.",
      },
      {
        icon: "Award",
        title: "Custom Emblems & Embroidery",
        description:
          "High-density corporate logo embroidery, custom shoulder patches, velcro badge holders, and metal pin attachments.",
      },
      {
        icon: "Clock",
        title: "Enterprise Guard Supply",
        description:
          "Rapid bulk production lines capable of outfitting hundreds of security officers on fast timelines across Saudi Arabia.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Equip Your Security Force with Authoritative & Tactical Wear",
    subtitle:
      "Contact our security uniform specialists for custom sample development, emblem designs, and enterprise quotes.",
    bgImage: "/images/security/cta-bg.png",
    primaryBtn: {
      text: "Get a Quote",
      href: "/contact#quote",
    },
    secondaryBtn: {
      text: "Contact Our Team",
      href: "/contact",
    },
  },

  // ── Bottom Trust Badges Bar ────────────────────────────────────────────────────────
  trustBadges: [
    {
      icon: "Building2",
      text: "Trusted by 450+ Security & Protection Firms",
    },
    {
      icon: "Award",
      text: "ISO Certified Quality & Uniform Standards",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated Security Account Support",
    },
  ] as TrustBadge[],
};
