// ─── Retail & Commercial Industry Page Data ─────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface RetailCommercialSubcategory {
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

export const retailCommercialData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Retail & Commercial page (Commercial Emerald Green)
  theme: {
    accentName: "emerald", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange), Construction (yellow), Security (blue), Education (purple), Aviation (sky)
    badgeBg: "bg-emerald-500/15",
    badgeText: "text-emerald-950 font-bold",
    badgeBorder: "border-emerald-500/30",
    dividerBar: "bg-emerald-600",
    cardHoverText: "group-hover:text-emerald-800",
    cardLinkText: "text-emerald-700 hover:text-emerald-900",
    ctaPrimaryBtn: "bg-emerald-600 text-white hover:bg-emerald-700 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Retail & Commercial", href: "/industries/retail-commercial" },
    ],
    title: "Retail & Commercial Uniforms",
    subtitle:
      "Stylish retail polo shirts, shopping mall staff apparel, sales executive suits, cashier aprons, and store associate uniforms crafted for brand elegance.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/retail-commercial-catalog.pdf",
    },
    highlights: [
      { icon: "ShoppingBag", label: "Modern Retail Branding" },
      { icon: "ShieldCheck", label: "Wrinkle-Free & Stain Resistant" },
      { icon: "Sparkles", label: "Custom Embroidery & Badges" },
    ],
    heroImage: "/images/retail-commercial/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Retail & Commercial Uniforms",
    description:
      "From high-street fashion boutiques and department stores to shopping mall concierges, supermarket cashiers, and commercial sales teams.",
  },

  // 5 exact subcategories from user image
  subcategories: [
    {
      id: "retail-staff-uniforms",
      title: "Retail Staff Uniforms",
      description:
        "Vibrant, comfortable retail polo shirts, aprons, and trousers tailored for boutique and department store associates.",
      image: "/images/retail-commercial/retail-staff.png",
      badgeIcon: "ShoppingBag",
      href: "/contact#quote",
    },
    {
      id: "shopping-mall-uniforms",
      title: "Shopping Mall Uniforms",
      description:
        "Polished concierge, security, customer service desk, and facility management attire for shopping centers and commercial complexes.",
      image: "/images/retail-commercial/shopping-mall.png",
      badgeIcon: "Building2",
      href: "/contact#quote",
    },
    {
      id: "sales-executive-uniforms",
      title: "Sales Executive Uniforms",
      description:
        "Sharp formal suits, blazers, and dress shirts for commercial sales representatives, showroom managers, and account leads.",
      image: "/images/retail-commercial/sales-executive.png",
      badgeIcon: "Award",
      href: "/contact#quote",
    },
    {
      id: "cashier-uniforms",
      title: "Cashier Uniforms",
      description:
        "Ergonomic, low-maintenance cashier shirts, waist aprons, and name tag holders designed for checkout counter efficiency.",
      image: "/images/retail-commercial/cashier-uniforms.png",
      badgeIcon: "Receipt",
      href: "/contact#quote",
    },
    {
      id: "store-staff-uniforms",
      title: "Store Staff Uniforms",
      description:
        "Cohesive store floor team t-shirts, caps, and vests embroidered with brand logos for easy customer identification.",
      image: "/images/retail-commercial/store-staff.png",
      badgeIcon: "Users",
      href: "/contact#quote",
    },
  ] as RetailCommercialSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Retail & Commercial Apparel?",
    items: [
      {
        icon: "ShoppingBag",
        title: "Modern Brand Image",
        description:
          "Contemporary cuts, vibrant fabric dyes, and precision logo embroidery that align perfectly with your retail brand identity.",
      },
      {
        icon: "ShieldCheck",
        title: "Durable & Easy Care",
        description:
          "Wrinkle-resistant cotton-poly blends engineered to maintain a fresh, crisp appearance through long retail shifts.",
      },
      {
        icon: "Sparkles",
        title: "Pantone Color Matching",
        description:
          "Exact brand color dyeing and high-density logo embroidery across caps, aprons, polos, and blazers.",
      },
      {
        icon: "Clock",
        title: "Chain Store Rollouts",
        description:
          "Scalable bulk production capable of outfitting multi-branch retail chains across Saudi Arabia and the GCC.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Elevate Your Retail Store Presence with Custom Staff Uniforms",
    subtitle:
      "Contact our commercial uniform consultants for custom fabric swatches, logo embroidery proofs, and retail chain quotes.",
    bgImage: "/images/retail-commercial/cta-bg.png",
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
      text: "Trusted by 300+ Retail Brands & Malls",
    },
    {
      icon: "Award",
      text: "ISO Certified Retail Apparel Quality",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated Retail Account Support",
    },
  ] as TrustBadge[],
};
