// ─── Corporate Industry Page Data ─────────────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface CorporateSubcategory {
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

export const corporateData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Corporate page (Gold / Amber theme)
  theme: {
    accentName: "amber", // Distinct from Healthcare's "teal"
    badgeBg: "bg-amber-500/15",
    badgeText: "text-amber-800",
    badgeBorder: "border-amber-500/30",
    dividerBar: "bg-amber-600",
    cardHoverText: "group-hover:text-amber-700",
    cardLinkText: "text-amber-700 hover:text-amber-900",
    ctaPrimaryBtn: "bg-amber-500 text-navy-950 hover:bg-amber-400",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Corporate", href: "/industries/corporate" },
    ],
    title: "Corporate Uniforms",
    subtitle:
      "Tailored business attire that projects professionalism, elegance, and brand identity for executive teams.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/corporate-catalog.pdf",
    },
    highlights: [
      { icon: "Sparkles", label: "Bespoke Tailoring" },
      { icon: "ShieldCheck", label: "Wrinkle-Resistant" },
      { icon: "Briefcase", label: "Custom Branding" },
    ],
    heroImage: "/images/corporate/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Corporate Uniforms",
    description:
      "From executive suites to front-line customer service, we craft premium corporate apparel tailored to elevate your corporate image.",
  },

  // 6 exact subcategories from user image
  subcategories: [
    {
      id: "office-staff-uniforms",
      title: "Office Staff Uniforms",
      description:
        "Smart, comfortable corporate attire for daily office environment and administrative professionals.",
      image: "/images/corporate/office-staff.png",
      badgeIcon: "Briefcase",
      href: "/contact#quote",
    },
    {
      id: "executive-wear",
      title: "Executive Wear",
      description:
        "Premium tailored blazers, suits, and executive outfits designed for senior management and C-suite leaders.",
      image: "/images/corporate/executive-wear.png",
      badgeIcon: "Award",
      href: "/contact#quote",
    },
    {
      id: "reception-uniforms",
      title: "Reception Uniforms",
      description:
        "Elegant front-desk uniforms that make an exceptional first impression on clients and guests.",
      image: "/images/corporate/reception-uniforms.png",
      badgeIcon: "UserCheck",
      href: "/contact#quote",
    },
    {
      id: "customer-service-uniforms",
      title: "Customer Service Uniforms",
      description:
        "Polished, comfortable uniforms for front-facing service personnel and client relations teams.",
      image: "/images/corporate/customer-service.png",
      badgeIcon: "Headphones",
      href: "/contact#quote",
    },
    {
      id: "administrative-staff-uniforms",
      title: "Administrative Staff Uniforms",
      description:
        "Versatile formal business shirts and trousers tailored for office operations and admin teams.",
      image: "/images/corporate/admin-staff.png",
      badgeIcon: "Users",
      href: "/contact#quote",
    },
    {
      id: "corporate-shirts-suits",
      title: "Corporate Shirts & Suits",
      description:
        "High-grade woven shirts, trousers, and custom 2-piece/3-piece suits with logo embroidery.",
      image: "/images/corporate/shirts-suits.png",
      badgeIcon: "Shirt",
      href: "/contact#quote",
    },
  ] as CorporateSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Corporate Uniforms?",
    items: [
      {
        icon: "Scissors",
        title: "Bespoke Precision Fit",
        description:
          "Custom sizing and pattern-making ensuring perfect fit, comfort, and professional drape for every team member.",
      },
      {
        icon: "ShieldCheck",
        title: "Premium Fabrics",
        description:
          "High-grade breathable, stain-resistant, and low-maintenance fabrics crafted for daily workplace wear.",
      },
      {
        icon: "Palette",
        title: "Brand Matching",
        description:
          "Exact pantone color matching and high-density logo embroidery to reinforce your corporate identity.",
      },
      {
        icon: "Clock",
        title: "On-Time Bulk Delivery",
        description:
          "Streamlined production lines capable of fulfilling enterprise orders on time across Saudi Arabia and the Middle East.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Need a Custom Corporate Attire Solution for Your Enterprise?",
    subtitle:
      "Our team is ready to design and manufacture bespoke corporate uniforms tailored to your brand standards.",
    bgImage: "/images/corporate/cta-bg.png",
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
      text: "Trusted by 400+ Enterprise Companies",
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
      text: "Dedicated Account Support",
    },
  ] as TrustBadge[],
};
