// ─── Industrial & Safety Industry Page Data ─────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface IndustrialSafetySubcategory {
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

export const industrialSafetyData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Industrial & Safety page (High-Vis Safety Orange)
  theme: {
    accentName: "orange", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose)
    badgeBg: "bg-orange-500/15",
    badgeText: "text-orange-800",
    badgeBorder: "border-orange-500/30",
    dividerBar: "bg-orange-600",
    cardHoverText: "group-hover:text-orange-700",
    cardLinkText: "text-orange-700 hover:text-orange-900",
    ctaPrimaryBtn: "bg-orange-600 text-white hover:bg-orange-700",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Industrial & Safety", href: "/industries/industrial-safety" },
    ],
    title: "Industrial & Safety Uniforms",
    subtitle:
      "Heavy-duty workwear, high-visibility PPE, coveralls, and flame-resistant apparel engineered for maximum site safety and performance.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/industrial-safety-catalog.pdf",
    },
    highlights: [
      { icon: "ShieldCheck", label: "EN & ISO Safety Certified" },
      { icon: "Flame", label: "Flame & Arc Resistant" },
      { icon: "HardHat", label: "Heavy Duty & Durable" },
    ],
    heroImage: "/images/industrial-safety/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Industrial & Safety Uniforms",
    description:
      "From factory technicians and mechanics to oil rig engineers and construction crews, we supply certified protective industrial workwear across Saudi Arabia.",
  },

  // 8 exact subcategories from user image
  subcategories: [
    {
      id: "industrial-workwear",
      title: "Industrial Workwear",
      description:
        "Durable jackets, cargo trousers, and heavy-duty shirts engineered for tough shop floor conditions.",
      image: "/images/industrial-safety/industrial-workwear.png",
      badgeIcon: "Wrench",
      href: "/contact#quote",
    },
    {
      id: "factory-uniforms",
      title: "Factory Uniforms",
      description:
        "Breathable, tear-resistant technician uniforms built for assembly lines and manufacturing plants.",
      image: "/images/industrial-safety/factory-uniforms.png",
      badgeIcon: "Factory",
      href: "/contact#quote",
    },
    {
      id: "coveralls",
      title: "Coveralls",
      description:
        "Full-body protective boiler suits and heavy cotton/poly coveralls with reinforced stitching and utility pockets.",
      image: "/images/industrial-safety/coveralls.png",
      badgeIcon: "Shirt",
      href: "/contact#quote",
    },
    {
      id: "high-visibility-safety-wear",
      title: "High-Visibility Safety Wear",
      description:
        "EN ISO 20471 certified high-vis vests, shirts, and trousers with premium 3M reflective striping.",
      image: "/images/industrial-safety/hi-vis-safety-wear.png",
      badgeIcon: "Sun",
      href: "/contact#quote",
    },
    {
      id: "reflective-jackets",
      title: "Reflective Jackets",
      description:
        "Weatherproof, high-visibility reflective parkas, windbreakers, and safety jackets for night-shift crews.",
      image: "/images/industrial-safety/reflective-jackets.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "flame-resistant-clothing",
      title: "Flame Resistant Clothing",
      description:
        "NFPA 2112 certified flame-retardant (FR) coveralls, shirts, and trousers for electrical and thermal hazard protection.",
      image: "/images/industrial-safety/flame-resistant.png",
      badgeIcon: "Flame",
      href: "/contact#quote",
    },
    {
      id: "mechanical-workshop-uniforms",
      title: "Mechanical Workshop Uniforms",
      description:
        "Oil and stain-resistant mechanic overalls, aprons, and workshop shirts designed for automotive and heavy machinery repair.",
      image: "/images/industrial-safety/mechanical-workshop.png",
      badgeIcon: "Cog",
      href: "/contact#quote",
    },
    {
      id: "oil-gas-uniforms",
      title: "Oil & Gas Uniforms",
      description:
        "Anti-static, chemical-resistant, and arc-rated safety suits engineered for offshore rigs and refinery operations.",
      image: "/images/industrial-safety/oil-gas.png",
      badgeIcon: "Droplets",
      href: "/contact#quote",
    },
  ] as IndustrialSafetySubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Industrial & Safety Apparel?",
    items: [
      {
        icon: "ShieldCheck",
        title: "Certified Safety Standards",
        description:
          "Compliant with international OSHA, EN ISO 20471, and NFPA 2112 safety standards for maximum worker protection.",
      },
      {
        icon: "HardHat",
        title: "Heavy-Duty Durability",
        description:
          "Triple-stitched seams, reinforced knees, and heavy-oz ripstop fabrics built to survive harsh industrial environments.",
      },
      {
        icon: "Sun",
        title: "High-Visibility Reflective",
        description:
          "3M Scotchlite reflective tape offering 360-degree visibility for low-light construction and traffic conditions.",
      },
      {
        icon: "Clock",
        title: "Enterprise Supply Lines",
        description:
          "Rapid bulk production and scheduled deliveries for contractors, refineries, and factories across the Middle East.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Equip Your Workforce with Certified Industrial & Safety Wear",
    subtitle:
      "Contact our safety apparel consultants for custom fabric specs, FR ratings, and bulk corporate pricing.",
    bgImage: "/images/industrial-safety/cta-bg.png",
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
      text: "Trusted by 600+ Industrial & Energy Firms",
    },
    {
      icon: "Award",
      text: "ISO & EN Certified Safety Apparel",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "24/7 Safety Support & Consultation",
    },
  ] as TrustBadge[],
};
