// ─── Construction Industry Page Data ───────────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface ConstructionSubcategory {
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

export const constructionData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Construction page (Construction Safety Yellow)
  theme: {
    accentName: "yellow", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange)
    badgeBg: "bg-yellow-500/15",
    badgeText: "text-yellow-950 font-bold",
    badgeBorder: "border-yellow-500/40",
    dividerBar: "bg-yellow-500",
    cardHoverText: "group-hover:text-yellow-800",
    cardLinkText: "text-amber-700 hover:text-amber-900",
    ctaPrimaryBtn: "bg-yellow-500 text-navy-950 hover:bg-yellow-400 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Construction", href: "/industries/construction" },
    ],
    title: "Construction Uniforms",
    subtitle:
      "Heavy-duty construction workwear, high-visibility safety vests, coveralls, and site engineer uniforms built for job site protection.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/construction-catalog.pdf",
    },
    highlights: [
      { icon: "HardHat", label: "Hard Hat & Site Certified" },
      { icon: "Sun", label: "High-Visibility 360°" },
      { icon: "ShieldCheck", label: "Tear & Weather Resistant" },
    ],
    heroImage: "/images/construction/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Construction Uniforms",
    description:
      "Engineered for building contractors, site managers, civil engineers, and heavy labor crews working in challenging job site conditions across Saudi Arabia.",
  },

  // 6 exact subcategories from user image
  subcategories: [
    {
      id: "construction-workwear",
      title: "Construction Workwear",
      description:
        "Reinforced work trousers, utility shirts, and heavy-canvas jackets designed for daily construction tasks.",
      image: "/images/construction/construction-workwear.png",
      badgeIcon: "Hammer",
      href: "/contact#quote",
    },
    {
      id: "safety-vests",
      title: "Safety Vests",
      description:
        "High-visibility neon yellow and orange reflective safety vests with multi-pocket storage and zip closures.",
      image: "/images/construction/safety-vests.png",
      badgeIcon: "Sun",
      href: "/contact#quote",
    },
    {
      id: "reflective-jackets",
      title: "Reflective Jackets",
      description:
        "All-weather high-visibility reflective coats, bomber jackets, and windbreakers for night construction shifts.",
      image: "/images/construction/reflective-jackets.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "site-engineer-uniforms",
      title: "Site Engineer Uniforms",
      description:
        "Professional executive site engineer polos, safety helmets, and smart work trousers for project managers.",
      image: "/images/construction/site-engineer.png",
      badgeIcon: "HardHat",
      href: "/contact#quote",
    },
    {
      id: "protective-coveralls",
      title: "Protective Coveralls",
      description:
        "Full-body cotton and poly-cotton protective jumpsuits with high-density double stitching and reflective bands.",
      image: "/images/construction/protective-coveralls.png",
      badgeIcon: "Shirt",
      href: "/contact#quote",
    },
    {
      id: "safety-apparel",
      title: "Safety Apparel",
      description:
        "Comprehensive PPE apparel including safety boots, gloves, hard hat liners, and protective accessories.",
      image: "/images/construction/safety-apparel.png",
      badgeIcon: "ShieldCheck",
      href: "/contact#quote",
    },
  ] as ConstructionSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Construction Workwear?",
    items: [
      {
        icon: "HardHat",
        title: "Site Safety Compliant",
        description:
          "Meets OSHA and Saudi Arabian Ministry of Human Resources site safety apparel specifications.",
      },
      {
        icon: "ShieldCheck",
        title: "Extreme Durability",
        description:
          "Crafted from heavy 240-300 GSM cotton drill and poly-cotton fabrics resistant to tearing and abrasion.",
      },
      {
        icon: "Sun",
        title: "High Visibility",
        description:
          "Certified reflective tape ensuring maximum visibility under direct sunlight, dust storms, and night lighting.",
      },
      {
        icon: "Clock",
        title: "Bulk Contractor Delivery",
        description:
          "Fast fulfillment for large-scale mega projects, infrastructure developers, and contracting firms.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Equip Your Construction Site Crew with Premium Safety Workwear",
    subtitle:
      "Get custom logo embroidery, screen printing, and special contractor pricing for bulk site orders.",
    bgImage: "/images/construction/cta-bg.png",
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
      text: "Trusted by 500+ Construction & Civil Firms",
    },
    {
      icon: "Award",
      text: "ISO Certified Quality & Safety Standards",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated Project Account Support",
    },
  ] as TrustBadge[],
};
