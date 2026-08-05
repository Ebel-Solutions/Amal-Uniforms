// ─── Custom Manufacturing Page Data ──────────────────────────────────────────

export interface ManufacturingService {
  id: string;
  title: string;
  description: string;
  image: string;
  badgeIcon: string;
  features: string[];
  href?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
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

export const customManufacturingData = {
  // ── Theme ─────────────────────────────────────────────────────────────────────
  theme: {
    accentName: "blue",
    badgeBg: "bg-blue-500/15",
    badgeText: "text-blue-800",
    badgeBorder: "border-blue-500/30",
    dividerBar: "bg-blue-600",
    cardHoverText: "group-hover:text-blue-700",
    cardLinkText: "text-blue-700 hover:text-blue-900",
    ctaPrimaryBtn: "bg-blue-600 text-white hover:bg-blue-500",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-200",
    accentIcon: "text-blue-700",
  },

  // ── Hero ──────────────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#custom-manufacturing" },
      { label: "Custom Manufacturing", href: "/custom-manufacturing" },
    ],
    title: "Custom Uniform Design & Manufacturing",
    subtitle:
      "Bespoke uniform manufacturing in Riyadh, Saudi Arabia — from initial concept sketches and fabric sourcing to precision pattern making, prototyping, and enterprise bulk production.",
    primaryBtn: {
      text: "View Manufacturing Services",
      href: "#services",
    },
    secondaryBtn: {
      text: "Request Manufacturing Quote",
      href: "/contact#quote",
    },
    highlights: [
      { icon: "Factory", label: "Riyadh Production Facility" },
      { icon: "Scissors", label: "Bespoke Pattern Design" },
      { icon: "ShieldCheck", label: "ISO 9001 Certified Quality" },
    ],
    heroImage: "/images/manufacturing/workshop.png",
  },

  // ── Section Header ────────────────────────────────────────────────────────────
  section: {
    title: "Our Manufacturing Capabilities",
    description:
      "From single prototype development to enterprise-scale production runs of 50,000+ units, our Riyadh facility delivers end-to-end custom apparel manufacturing tailored to your brand standards.",
  },

  // ── All 7 Custom Manufacturing Services ───────────────────────────────────────
  services: [
    {
      id: "custom-uniform-design",
      title: "Custom Uniform Design & Manufacturing",
      description:
        "Full-scope bespoke uniform creation from brand conceptualization, technical flat sketches, and fabric selection to complete garment manufacturing aligned with your corporate identity.",
      image: "/images/manufacturing/custom-uniform-design.png",
      badgeIcon: "Palette",
      features: ["Concept to creation", "Brand color matching", "Technical flat sketches", "End-to-end production"],
      href: "/contact#quote",
    },
    {
      id: "bulk-uniform-production",
      title: "Bulk Uniform Production",
      description:
        "Large-scale commercial garment production capable of producing thousands of uniform units per week with strict color consistency, stitch quality, and bulk order pricing.",
      image: "/images/manufacturing/bulk-production.png",
      badgeIcon: "Boxes",
      features: ["High-volume capacity", "Strict quality control", "Kingdom-wide delivery", "Bulk pricing tiers"],
      href: "/contact#quote",
    },
    {
      id: "sample-development",
      title: "Sample Development & Prototyping",
      description:
        "Rapid pre-production sample creation allowing clients to physically inspect fabric quality, fit, drape, and logo placement before authorizing full production runs.",
      image: "/images/manufacturing/sample-development.png",
      badgeIcon: "Layers",
      features: ["Rapid prototype turn", "Physical sample review", "Fit & fabric testing", "Revisions included"],
      href: "/contact#quote",
    },
    {
      id: "custom-sizing-fitting",
      title: "Custom Sizing & Fitting Services",
      description:
        "On-site measurement sessions across Saudi Arabia and custom size grading to ensure every team member receives a perfectly fitted garment for maximum comfort.",
      image: "/images/manufacturing/custom-sizing-fitting.png",
      badgeIcon: "Ruler",
      features: ["On-site measuring team", "Inclusive size grading", "Custom length adjustments", "Size chart support"],
      href: "/contact#quote",
    },
    {
      id: "private-label-manufacturing",
      title: "Private Label Manufacturing",
      description:
        "Complete OEM/ODM private label manufacturing including custom neck labels, size tags, care instructions, branded hangtags, and custom packaging.",
      image: "/images/manufacturing/private-label.png",
      badgeIcon: "Tag",
      features: ["Custom woven neck tags", "Branded hangtags", "Custom polybag packing", "OEM/ODM services"],
      href: "/contact#quote",
    },
    {
      id: "made-to-order-uniforms",
      title: "Made-to-Order Uniforms",
      description:
        "Tailored on-demand manufacturing for executive suits, specialized medical apparel, and VIP hospitality wear — crafted piece-by-piece to individual specifications.",
      image: "/images/manufacturing/made-to-order.png",
      badgeIcon: "Shirt",
      features: ["On-demand tailoring", "VIP & executive grade", "Bespoke fabric choices", "Individual packaging"],
      href: "/contact#quote",
    },
    {
      id: "pattern-making",
      title: "Pattern Making & CAD Grading",
      description:
        "Computer-aided CAD pattern creation, digital pattern grading, and marker optimization to minimize fabric waste while delivering ergonomic, movement-friendly garment cuts.",
      image: "/images/manufacturing/pattern-making.png",
      badgeIcon: "Scissors",
      features: ["CAD pattern drafting", "Digital size grading", "Ergonomic cuts", "Zero-waste marker layout"],
      href: "/contact#quote",
    },
  ] as ManufacturingService[],

  // ── Process Steps ─────────────────────────────────────────────────────────────
  process: {
    title: "Our 6-Step Manufacturing Process",
    subtitle: "A streamlined, transparent production lifecycle ensuring perfection from concept to delivery.",
    steps: [
      {
        step: 1,
        title: "Consultation & Briefing",
        description:
          "We analyze your brand guidelines, team size, climate requirements, and working environment to define the exact uniform specifications.",
        icon: "FileText",
      },
      {
        step: 2,
        title: "Design & Technical Specs",
        description:
          "Our design studio drafts technical flat sketches, Pantone color palettes, and fabric swatch combinations for client review.",
        icon: "Palette",
      },
      {
        step: 3,
        title: "Sample Prototyping",
        description:
          "We craft a physical prototype sample garment for your team to inspect fit, fabric weight, stitching, and logo embroidery.",
        icon: "Scissors",
      },
      {
        step: 4,
        title: "Pattern Grading & Cutting",
        description:
          "CAD pattern markers are graded for all sizes and precision automated cutting machines process fabric rolls with minimal waste.",
        icon: "Cpu",
      },
      {
        step: 5,
        title: "Stitching & Quality Control",
        description:
          "Garments move through specialized assembly lines with inline quality inspections for seam strength, measurements, and finishing.",
        icon: "ShieldCheck",
      },
      {
        step: 6,
        title: "KSA Delivery & Support",
        description:
          "Finished uniforms are individually polybagged, boxed by department, and dispatched across Saudi Arabia with dedicated account support.",
        icon: "Truck",
      },
    ] as ProcessStep[],
  },

  // ── Why Choose ────────────────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Partner with Amal for Custom Manufacturing?",
    items: [
      {
        icon: "Factory",
        title: "Saudi-Based Facility",
        description:
          "Our Riyadh manufacturing plant guarantees fast turnaround times, direct oversight, and zero import tariff delays for KSA clients.",
      },
      {
        icon: "Layers",
        title: "Saudi Climate Fabrics",
        description:
          "We source breathable, moisture-wicking, anti-bacterial, and UV-resistant fabrics engineered specifically for Saudi Arabia's environment.",
      },
      {
        icon: "ShieldCheck",
        title: "ISO 9001 Certified Quality",
        description:
          "Strict quality control at every stage — fabric inspection, tensile strength testing, seam durability, and colorfastness validation.",
      },
      {
        icon: "Clock",
        title: "Enterprise Capacity",
        description:
          "Equipped to fulfill monthly production orders from 50 to 50,000+ units with guaranteed delivery schedules and dedicated account management.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ────────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Need Custom Uniform Manufacturing for Your Organization?",
    subtitle:
      "Contact our Riyadh manufacturing team today for a free design consultation, fabric swatches, and a competitive enterprise quote.",
    bgImage: "/images/manufacturing/workshop.png",
    primaryBtn: {
      text: "Request a Manufacturing Quote",
      href: "/contact#quote",
    },
    secondaryBtn: {
      text: "Contact Our Factory Team",
      href: "/contact",
    },
  },

  // ── Trust Badges ──────────────────────────────────────────────────────────────
  trustBadges: [
    { icon: "Building2", text: "Trusted by 500+ KSA Enterprises" },
    { icon: "Award", text: "ISO 9001 Quality Certified" },
    { icon: "Factory", text: "Direct Riyadh Factory Production" },
    { icon: "Headphones", text: "Dedicated Account Support" },
  ] as TrustBadge[],
};
