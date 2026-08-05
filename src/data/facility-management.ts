// ─── Facility Management Industry Page Data ─────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface FacilityManagementSubcategory {
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

export const facilityManagementData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Facility Management page (Fresh Mint Cyan)
  theme: {
    accentName: "cyan", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange), Construction (yellow), Security (blue), Education (purple), Aviation (sky), Retail (emerald)
    badgeBg: "bg-cyan-500/15",
    badgeText: "text-cyan-950 font-bold",
    badgeBorder: "border-cyan-500/30",
    dividerBar: "bg-cyan-600",
    cardHoverText: "group-hover:text-cyan-800",
    cardLinkText: "text-cyan-700 hover:text-cyan-900",
    ctaPrimaryBtn: "bg-cyan-600 text-white hover:bg-cyan-700 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Facility Management", href: "/industries/facility-management" },
    ],
    title: "Facility Management Uniforms",
    subtitle:
      "Durable cleaning staff tunics, maintenance technician workwear, housekeeping uniforms, and facility management supervisor apparel.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/facility-management-catalog.pdf",
    },
    highlights: [
      { icon: "Sparkles", label: "Stain & Spill Resistant" },
      { icon: "Wrench", label: "Ergonomic & Flexible Fit" },
      { icon: "ShieldCheck", label: "Heavy Commercial Wash Safe" },
    ],
    heroImage: "/images/facility-management/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Facility Management Uniforms",
    description:
      "Designed for facility management companies, commercial property maintenance crews, janitorial services, and corporate housekeeping teams across Saudi Arabia.",
  },

  // 4 exact subcategories from user image
  subcategories: [
    {
      id: "cleaning-staff-uniforms",
      title: "Cleaning Staff Uniforms",
      description:
        "Lightweight, chemical-resistant tunics, polo shirts, and elastic waist trousers tailored for janitorial and sanitization crews.",
      image: "/images/facility-management/cleaning-staff.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "maintenance-staff-uniforms",
      title: "Maintenance Staff Uniforms",
      description:
        "Tear-resistant work shirts, cargo pants, and multi-pocket utility vests for HVAC, electrical, and MEP maintenance technicians.",
      image: "/images/facility-management/maintenance-staff.png",
      badgeIcon: "Wrench",
      href: "/contact#quote",
    },
    {
      id: "housekeeping-uniforms",
      title: "Housekeeping Uniforms",
      description:
        "Ergonomic housekeeping dresses, tops, and pants engineered for comfort, quick drying, and ease of movement.",
      image: "/images/facility-management/housekeeping-uniforms.png",
      badgeIcon: "Shirt",
      href: "/contact#quote",
    },
    {
      id: "facility-management-apparel",
      title: "Facility Management Apparel",
      description:
        "Smart executive polos, blazers, and supervisory shirts embroidered with company logos for FM managers and supervisors.",
      image: "/images/facility-management/facility-apparel.png",
      badgeIcon: "Building2",
      href: "/contact#quote",
    },
  ] as FacilityManagementSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Facility Management Apparel?",
    items: [
      {
        icon: "Sparkles",
        title: "Clean & Professional Image",
        description:
          "Crisp, hygienic designs and stain-shield fabrics that keep maintenance and cleaning crews looking sharp all day.",
      },
      {
        icon: "ShieldCheck",
        title: "Commercial Wash Resistance",
        description:
          "High-tensile poly-cotton fabrics engineered to endure heavy industrial wash cycles without fading or shrinking.",
      },
      {
        icon: "Wrench",
        title: "Utilitarian Functionality",
        description:
          "Reinforced tool pockets, breathable mesh underarm panels, and elasticated waistbands for physical tasks.",
      },
      {
        icon: "Clock",
        title: "Enterprise Fleet Fulfillment",
        description:
          "Reliable bulk manufacturing and scheduled replenishment for commercial property managers and FM contractors.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Outfitting Your Facility Maintenance & Janitorial Workforce?",
    subtitle:
      "Contact our facility apparel specialists for custom fabric swatches, logo embroidery proofs, and commercial contract quotes.",
    bgImage: "/images/facility-management/cta-bg.png",
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
      text: "Trusted by 250+ FM & Maintenance Firms",
    },
    {
      icon: "Award",
      text: "ISO Certified Facility Apparel Quality",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated FM Account Support",
    },
  ] as TrustBadge[],
};
