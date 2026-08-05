// ─── Aviation & Transport Industry Page Data ─────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface AviationTransportSubcategory {
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

export const aviationTransportData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Aviation & Transport page (Aviation Sky Blue)
  theme: {
    accentName: "sky", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange), Construction (yellow), Security (blue), Education (purple)
    badgeBg: "bg-sky-500/15",
    badgeText: "text-sky-950 font-bold",
    badgeBorder: "border-sky-500/30",
    dividerBar: "bg-sky-600",
    cardHoverText: "group-hover:text-sky-800",
    cardLinkText: "text-sky-700 hover:text-sky-900",
    ctaPrimaryBtn: "bg-sky-600 text-white hover:bg-sky-700 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Aviation & Transport", href: "/industries/aviation-transport" },
    ],
    title: "Aviation & Transportation Uniforms",
    subtitle:
      "Prestigious airline pilot uniforms, cabin crew attire, ground handling outfits, logistics apparel, and driver uniforms crafted to international aviation standards.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/aviation-transport-catalog.pdf",
    },
    highlights: [
      { icon: "Plane", label: "IATA Aviation Standard" },
      { icon: "ShieldCheck", label: "Crease-Resistant Fabrics" },
      { icon: "Award", label: "Custom Epaulettes & Wings" },
    ],
    heroImage: "/images/aviation-transport/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Aviation & Transportation Uniforms",
    description:
      "From commercial airline pilots and flight attendants to airport ground handling, logistics dispatchers, and corporate chauffeurs across Saudi Arabia.",
  },

  // 6 exact subcategories from user image
  subcategories: [
    {
      id: "airline-crew-uniforms",
      title: "Airline Crew Uniforms",
      description:
        "Complete airline crew collections combining formal blazers, skirts, trousers, vests, and branded neck scarves.",
      image: "/images/aviation-transport/airline-crew.png",
      badgeIcon: "Plane",
      href: "/contact#quote",
    },
    {
      id: "pilot-uniforms",
      title: "Pilot Uniforms",
      description:
        "Precision tailored captain and first officer dress shirts, blazers, trousers, tie clips, and gold/silver braid epaulettes.",
      image: "/images/aviation-transport/pilot-uniforms.png",
      badgeIcon: "Award",
      href: "/contact#quote",
    },
    {
      id: "cabin-crew-uniforms",
      title: "Cabin Crew Uniforms",
      description:
        "Elegant, stretch-fit flight attendant dresses, waistcoats, blazers, and apron sets engineered for high comfort during long-haul flights.",
      image: "/images/aviation-transport/cabin-crew.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "airport-staff-uniforms",
      title: "Airport Staff Uniforms",
      description:
        "High-visibility airport ground crew vests, check-in desk uniforms, baggage handling workwear, and security personnel attire.",
      image: "/images/aviation-transport/airport-staff.png",
      badgeIcon: "Building2",
      href: "/contact#quote",
    },
    {
      id: "logistics-staff-uniforms",
      title: "Logistics Staff Uniforms",
      description:
        "Durable polo shirts, cargo pants, and reflective jackets for cargo dispatchers, warehouse crews, and freight handlers.",
      image: "/images/aviation-transport/logistics-staff.png",
      badgeIcon: "Truck",
      href: "/contact#quote",
    },
    {
      id: "driver-uniforms",
      title: "Driver Uniforms",
      description:
        "Smart chauffeur suits, bus driver shirts, delivery fleet polos, and transport officer uniforms tailored for professional mobility.",
      image: "/images/aviation-transport/driver-uniforms.png",
      badgeIcon: "UserCheck",
      href: "/contact#quote",
    },
  ] as AviationTransportSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Aviation & Transport Apparel?",
    items: [
      {
        icon: "Plane",
        title: "IATA Aviation Excellence",
        description:
          "High-end poly-wool and crease-free stretch blends tailored for long flights, heat resistance, and impeccable presentation.",
      },
      {
        icon: "ShieldCheck",
        title: "Durable & Stain Resistant",
        description:
          "Advanced stain-shield fabric coatings to keep flight crews and drivers looking immaculate through rigorous travel shifts.",
      },
      {
        icon: "Award",
        title: "Custom Wings & Epaulettes",
        description:
          "Precision bullion embroidery, pilot wings, rank epaulette bars, custom caps, and airline logo neckties.",
      },
      {
        icon: "Clock",
        title: "Fleet & Airline Supply",
        description:
          "Dependable bulk production and rapid replenishment for commercial airlines, private jet charters, and logistics fleets.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Outfit Your Airline Crew & Transport Fleet with Premier Apparel",
    subtitle:
      "Contact our aviation uniform specialists for custom fabric swatches, sizing kits, and commercial airline proposals.",
    bgImage: "/images/aviation-transport/cta-bg.png",
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
      text: "Trusted by 150+ Airlines & Fleet Operators",
    },
    {
      icon: "Award",
      text: "ISO Certified Aviation Apparel Standards",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated Fleet Account Support",
    },
  ] as TrustBadge[],
};
