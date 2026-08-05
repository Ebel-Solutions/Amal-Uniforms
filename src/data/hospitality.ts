// ─── Hospitality Industry Page Data ───────────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface HospitalitySubcategory {
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

export const hospitalityData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Hospitality page (Rose / Burgundy luxury theme)
  theme: {
    accentName: "rose", // Distinct from Healthcare (teal) and Corporate (amber)
    badgeBg: "bg-rose-500/15",
    badgeText: "text-rose-800",
    badgeBorder: "border-rose-500/30",
    dividerBar: "bg-rose-600",
    cardHoverText: "group-hover:text-rose-700",
    cardLinkText: "text-rose-700 hover:text-rose-900",
    ctaPrimaryBtn: "bg-rose-600 text-white hover:bg-rose-700",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Hospitality", href: "/industries/hospitality" },
    ],
    title: "Hospitality Uniforms",
    subtitle:
      "Elegant hotel, restaurant, and resort uniforms designed to elevate guest experiences and project luxury service standards.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/hospitality-catalog.pdf",
    },
    highlights: [
      { icon: "Sparkles", label: "Luxury Design" },
      { icon: "ShieldCheck", label: "Stain & Heat Resistant" },
      { icon: "Utensils", label: "Culinary & Front-Desk" },
    ],
    heroImage: "/images/hospitality/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Hospitality Uniforms",
    description:
      "From fine dining chefs and concierges to housekeeping and catering staff, we provide high-grade hospitality attire for 5-star hotels and restaurants.",
  },

  // 7 exact subcategories from user image
  subcategories: [
    {
      id: "hotel-staff-uniforms",
      title: "Hotel Staff Uniforms",
      description:
        "Sophisticated front-desk, management, and lobby personnel attire that enhances guest perception.",
      image: "/images/hospitality/hotel-staff.png",
      badgeIcon: "Building2",
      href: "/contact#quote",
    },
    {
      id: "restaurant-uniforms",
      title: "Restaurant Uniforms",
      description:
        "Stylish restaurant team attire designed for high movement, comfort, and cohesive dining room aesthetics.",
      image: "/images/hospitality/restaurant-uniforms.png",
      badgeIcon: "Utensils",
      href: "/contact#quote",
    },
    {
      id: "chef-jackets",
      title: "Chef Jackets",
      description:
        "Professional double-breasted chef coats, aprons, and kitchen executive jackets engineered for heat resistance.",
      image: "/images/hospitality/chef-jackets.png",
      badgeIcon: "ChefHat",
      href: "/contact#quote",
    },
    {
      id: "waiter-waitress-uniforms",
      title: "Waiter & Waitress Uniforms",
      description:
        "Durable, stain-resistant waistcoats, shirts, and aprons tailored for servers and banquet staff.",
      image: "/images/hospitality/waiter-waitress.png",
      badgeIcon: "Coffee",
      href: "/contact#quote",
    },
    {
      id: "housekeeping-uniforms",
      title: "Housekeeping Uniforms",
      description:
        "Ergonomic, breathable uniforms for hotel room attendants and maintenance teams for maximum flexibility.",
      image: "/images/hospitality/housekeeping.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "catering-uniforms",
      title: "Catering Uniforms",
      description:
        "Clean, professional catering and event staff apparel suitable for indoor and outdoor hospitality occasions.",
      image: "/images/hospitality/catering-uniforms.png",
      badgeIcon: "Wine",
      href: "/contact#quote",
    },
    {
      id: "concierge-uniforms",
      title: "Concierge Uniforms",
      description:
        "Impeccable tailored suits, blazers, and accessories for hotel concierges, doormen, and bellhops.",
      image: "/images/hospitality/concierge-uniforms.png",
      badgeIcon: "UserCheck",
      href: "/contact#quote",
    },
  ] as HospitalitySubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Hospitality Uniforms?",
    items: [
      {
        icon: "Sparkles",
        title: "5-Star Elegance",
        description:
          "High-end fabrics and refined tailoring that match the luxury aesthetic of premier hotels, resorts, and fine dining venues.",
      },
      {
        icon: "ShieldCheck",
        title: "Stain & Heat Resistant",
        description:
          "Advanced fabric technology resistant to kitchen spills, heat, and frequent commercial laundering.",
      },
      {
        icon: "Palette",
        title: "Custom Embroidery & Colors",
        description:
          "Custom crests, logo embroidery, and pantone-matched color schemes to complement your interior decor.",
      },
      {
        icon: "Clock",
        title: "Rapid Replenishment",
        description:
          "Fast fulfillment and dependable bulk production ensuring your staff is always immaculately uniformed.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Elevate Your Hotel & Dining Experience with Custom Uniforms",
    subtitle:
      "Our design specialists work directly with hospitality managers to create bespoke uniform collections.",
    bgImage: "/images/hospitality/cta-bg.png",
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
      text: "Trusted by 350+ Hotels & Restaurants",
    },
    {
      icon: "Award",
      text: "ISO Certified Quality Standards",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated Hospitality Support",
    },
  ] as TrustBadge[],
};
