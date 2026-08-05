// ─── Embroidery Services Page Data ────────────────────────────────────────────

export interface EmbroideryService {
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

export const embroideryData = {
  // ── Theme ─────────────────────────────────────────────────────────────────────
  theme: {
    accentName: "purple",
    badgeBg: "bg-violet-500/15",
    badgeText: "text-violet-800",
    badgeBorder: "border-violet-500/30",
    dividerBar: "bg-violet-600",
    cardHoverText: "group-hover:text-violet-700",
    cardLinkText: "text-violet-700 hover:text-violet-900",
    ctaPrimaryBtn: "bg-violet-600 text-white hover:bg-violet-500",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-200",
    accentIcon: "text-violet-700",
  },

  // ── Hero ──────────────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#embroidery" },
      { label: "Embroidery", href: "/embroidery" },
    ],
    title: "Professional Embroidery Services",
    subtitle:
      "Precision machine embroidery for uniforms, corporate apparel, and promotional garments — crafted in Riyadh with world-class equipment and vibrant thread quality.",
    primaryBtn: {
      text: "View All Services",
      href: "#services",
    },
    secondaryBtn: {
      text: "Get a Quote",
      href: "/contact#quote",
    },
    highlights: [
      { icon: "Sparkles", label: "High-Density Stitching" },
      { icon: "Palette", label: "Pantone Color Matching" },
      { icon: "ShieldCheck", label: "ISO Quality Standards" },
    ],
    heroImage: "/images/manufacturing/embroidery.png",
  },

  // ── Section Header ────────────────────────────────────────────────────────────
  section: {
    title: "Our Embroidery Services",
    description:
      "From classic flat embroidery to 3D puff designs, we offer a comprehensive range of precision embroidery solutions for every garment type and branding need.",
  },

  // ── All 12 Embroidery Services ────────────────────────────────────────────────
  services: [
    {
      id: "computerized-embroidery",
      title: "Computerized Embroidery",
      description:
        "State-of-the-art multi-head computerized embroidery machines delivering pixel-perfect logo and design replication on any fabric type with consistent quality across bulk orders.",
      image: "/images/embroidery/computerized-embroidery.png",
      badgeIcon: "Cpu",
      features: ["Multi-head machines", "Consistent bulk output", "Any fabric type", "Digital file support"],
      href: "/contact#quote",
    },
    {
      id: "name-embroidery",
      title: "Name Embroidery",
      description:
        "Personalized name stitching on uniforms, workwear, and corporate shirts in a wide range of fonts and thread colors. Perfect for staff identification and team branding.",
      image: "/images/embroidery/name-embroidery.png",
      badgeIcon: "UserCheck",
      features: ["Custom fonts & scripts", "Gold & metallic threads", "Any garment position", "Fast turnaround"],
      href: "/contact#quote",
    },
    {
      id: "cap-embroidery",
      title: "Cap Embroidery",
      description:
        "Structured cap and baseball hat embroidery with precise tension control for curved surfaces. Ideal for corporate caps, sports teams, and event merchandise.",
      image: "/images/embroidery/cap-embroidery.png",
      badgeIcon: "Tag",
      features: ["Curved surface expertise", "Flat & 3D options", "Structured & unstructured caps", "Bulk discounts"],
      href: "/contact#quote",
    },
    {
      id: "polo-shirt-embroidery",
      title: "Polo Shirt Embroidery",
      description:
        "Clean, professional logo embroidery on polo shirts for retail staff, corporate teams, and promotional events. Perfectly positioned left-chest, sleeve, or back placement.",
      image: "/images/embroidery/polo-shirt-embroidery.png",
      badgeIcon: "Shirt",
      features: ["Left-chest & sleeve placement", "Retail & corporate grade", "Colourfast threads", "Wholesale pricing"],
      href: "/contact#quote",
    },
    {
      id: "3d-puff-embroidery",
      title: "3D Puff Embroidery",
      description:
        "Bold, raised 3D embroidery using foam underlay beneath the stitching — creating striking dimensional logos and text with premium texture and visual impact.",
      image: "/images/embroidery/3d-puff-embroidery.png",
      badgeIcon: "Layers",
      features: ["Foam underlay technique", "Bold raised lettering", "Premium visual impact", "Cap & apparel ready"],
      href: "/contact#quote",
    },
    {
      id: "woven-labels-badges",
      title: "Woven Labels & Badges",
      description:
        "Custom woven fabric labels and badges for branding, size labels, care labels, and uniform identification — produced on high-density looms for sharp, crisp detail.",
      image: "/images/embroidery/woven-labels-badges.png",
      badgeIcon: "Award",
      features: ["Woven & printed options", "Care & size labels", "Uniform ID patches", "Custom shapes & sizes"],
      href: "/contact#quote",
    },
    {
      id: "corporate-logo-embroidery",
      title: "Corporate Logo Embroidery",
      description:
        "Exact brand-standard logo replication with pantone-matched thread colors and high stitch density. Used across executive shirts, blazers, and corporate workwear programs.",
      image: "/images/embroidery/corporate-logo-embroidery.png",
      badgeIcon: "Building2",
      features: ["Pantone thread matching", "High stitch density", "Brand guideline compliance", "Sample approval process"],
      href: "/contact#quote",
    },
    {
      id: "monogram-embroidery",
      title: "Monogram Embroidery",
      description:
        "Elegant monogram and initial embroidery for premium garments, hospitality uniforms, and executive wear — adding a distinguished, personalized touch to every piece.",
      image: "/images/embroidery/monogram-embroidery.png",
      badgeIcon: "Star",
      features: ["Classic & modern scripts", "Gold & silver thread", "Hospitality & VIP wear", "Bespoke letter styles"],
      href: "/contact#quote",
    },
    {
      id: "jacket-embroidery",
      title: "Jacket Embroidery",
      description:
        "Heavy-duty embroidery on work jackets, safety jackets, and corporate outerwear. Reinforced backing and dense stitching ensure durability through years of daily use.",
      image: "/images/embroidery/jacket-embroidery.png",
      badgeIcon: "Zap",
      features: ["Reinforced backing", "Heavy fabric capable", "Safety & corporate jackets", "Long-lasting stitching"],
      href: "/contact#quote",
    },
    {
      id: "uniform-badge-embroidery",
      title: "Uniform Badge Embroidery",
      description:
        "Rank badges, department patches, and authority identifiers embroidered directly onto uniforms or as removable Velcro-backed patches for security, aviation, and military use.",
      image: "/images/embroidery/uniform-badge-embroidery.png",
      badgeIcon: "ShieldCheck",
      features: ["Velcro-backed patches", "Direct stitch-on badges", "Rank & department IDs", "Security & aviation grade"],
      href: "/contact#quote",
    },
    {
      id: "custom-embroidery-patches",
      title: "Custom Embroidery Patches",
      description:
        "Fully custom shaped embroidery patches with iron-on, sew-on, or Velcro backing — designed to your artwork with border merrowing and vibrant color fills.",
      image: "/images/embroidery/custom-embroidery-patches.png",
      badgeIcon: "Scissors",
      features: ["Custom shapes & borders", "Iron-on / sew-on / Velcro", "Vibrant color fills", "Minimum 50 pieces"],
      href: "/contact#quote",
    },
    {
      id: "embroidered-emblems",
      title: "Embroidered Emblems",
      description:
        "Detailed embroidered emblems and crests for school blazers, sports clubs, corporate identity, and ceremonial uniforms — capturing intricate artwork with exceptional fidelity.",
      image: "/images/embroidery/embroidered-emblems.png",
      badgeIcon: "Gem",
      features: ["Intricate crest details", "School & club blazers", "Ceremonial uniforms", "Archive-quality threads"],
      href: "/contact#quote",
    },
  ] as EmbroideryService[],

  // ── Process Steps ─────────────────────────────────────────────────────────────
  process: {
    title: "How Our Embroidery Process Works",
    subtitle: "From artwork submission to final delivery — a seamless 5-step quality process.",
    steps: [
      {
        step: 1,
        title: "Submit Your Artwork",
        description:
          "Send us your logo or design file in any format (AI, PDF, PNG, JPG). Our digitizing team converts it into an optimized embroidery DST/PES file.",
        icon: "Upload",
      },
      {
        step: 2,
        title: "Digitizing & Stitch Planning",
        description:
          "Our expert digitizers optimize stitch paths, density, underlay, and thread colors to ensure perfect replication of your design on any fabric.",
        icon: "Cpu",
      },
      {
        step: 3,
        title: "Sample Approval",
        description:
          "We produce a physical stitch-out sample for your review and approval before committing to full production — ensuring 100% brand accuracy.",
        icon: "CheckCircle",
      },
      {
        step: 4,
        title: "Full Production Run",
        description:
          "Our multi-head machines run your approved design across your full order quantity with consistent tension, color, and registration.",
        icon: "Settings",
      },
      {
        step: 5,
        title: "Quality Inspection & Delivery",
        description:
          "Every embroidered piece passes thread-count, pull-test, and visual inspection before packaging and delivery across Saudi Arabia.",
        icon: "Truck",
      },
    ] as ProcessStep[],
  },

  // ── Why Choose ────────────────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Embroidery?",
    items: [
      {
        icon: "Cpu",
        title: "Computerized Precision",
        description:
          "Multi-head Tajima and Barudan machines with up to 15-needle heads delivering sharp, consistent stitching at high production speed.",
      },
      {
        icon: "Palette",
        title: "1,000+ Thread Colors",
        description:
          "Pantone-matched Madeira and Isacord thread library with metallic, glow-in-dark, and specialty options for any brand requirement.",
      },
      {
        icon: "ShieldCheck",
        title: "Durable & Colourfast",
        description:
          "Embroidery that withstands 60°C industrial washing, UV exposure, and years of daily wear without fading, pilling, or thread breakage.",
      },
      {
        icon: "Clock",
        title: "Fast Bulk Turnaround",
        description:
          "Production capacity of 10,000+ pieces per week with 48-hour sample turnaround and on-time delivery guaranteed across the Kingdom.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ────────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Ready to Add Precision Embroidery to Your Uniforms?",
    subtitle:
      "Get a free digitizing sample and competitive quote for your embroidery order — no minimums for samples, bulk pricing from 50 pieces.",
    bgImage: "/images/manufacturing/embroidery.png",
    primaryBtn: {
      text: "Request a Free Sample",
      href: "/contact#quote",
    },
    secondaryBtn: {
      text: "Contact Our Team",
      href: "/contact",
    },
  },

  // ── Trust Badges ──────────────────────────────────────────────────────────────
  trustBadges: [
    { icon: "Building2", text: "Trusted by 500+ Saudi Businesses" },
    { icon: "Award", text: "ISO Certified Embroidery Quality" },
    { icon: "Cpu", text: "Tajima & Barudan Machines" },
    { icon: "Headphones", text: "Free Digitizing Consultation" },
  ] as TrustBadge[],
};
