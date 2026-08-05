// ─── Sports & Events Industry Page Data ───────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface SportsEventsSubcategory {
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

export const sportsEventsData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Sports & Events page (Electric Active Red)
  theme: {
    accentName: "red", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange), Construction (yellow), Security (blue), Education (purple), Aviation (sky), Retail (emerald), FM (cyan)
    badgeBg: "bg-red-500/15",
    badgeText: "text-red-950 font-bold",
    badgeBorder: "border-red-500/30",
    dividerBar: "bg-red-600",
    cardHoverText: "group-hover:text-red-800",
    cardLinkText: "text-red-700 hover:text-red-900",
    ctaPrimaryBtn: "bg-red-600 text-white hover:bg-red-700 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Sports & Events", href: "/industries/sports-events" },
    ],
    title: "Sports & Event Apparel",
    subtitle:
      "High-performance sublimated sports jerseys, custom team kits, event crew polo shirts, tournament merchandise, and promotional apparel.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/sports-events-catalog.pdf",
    },
    highlights: [
      { icon: "Trophy", label: "Full Dye Sublimation Printing" },
      { icon: "Sparkles", label: "Moisture-Wicking & Breathable" },
      { icon: "ShieldCheck", label: "Custom Names & Player Numbers" },
    ],
    heroImage: "/images/sports-events/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Sports & Event Apparel",
    description:
      "Designed for athletic clubs, sports academies, tournament organizers, corporate marathons, exhibition staff, and promotional event crews across Saudi Arabia.",
  },

  // 5 exact subcategories from user image
  subcategories: [
    {
      id: "sports-jerseys",
      title: "Sports Jerseys",
      description:
        "Full-sublimation football, basketball, cricket, and running jerseys with custom sponsor logos, names, and numbers.",
      image: "/images/sports-events/sports-jerseys.png",
      badgeIcon: "Trophy",
      href: "/contact#quote",
    },
    {
      id: "team-uniforms",
      title: "Team Uniforms",
      description:
        "Matching activewear sets including tracksuits, warm-up jackets, training bibs, and shorts for sports teams.",
      image: "/images/sports-events/team-uniforms.png",
      badgeIcon: "Users",
      href: "/contact#quote",
    },
    {
      id: "event-staff-uniforms",
      title: "Event Staff Uniforms",
      description:
        "High-visibility event crew polo shirts, lanyard vests, coordinator jackets, and usher apparel for concerts, expos, and festivals.",
      image: "/images/sports-events/event-staff.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
    {
      id: "promotional-apparel",
      title: "Promotional Apparel",
      description:
        "Custom printed t-shirts, caps, hoodies, and totes for brand activation campaigns, product launches, and giveaways.",
      image: "/images/sports-events/promotional-apparel.png",
      badgeIcon: "ShoppingBag",
      href: "/contact#quote",
    },
    {
      id: "tournament-kits",
      title: "Tournament Kits",
      description:
        "Complete championship packages including athlete jerseys, referee kits, medal ribbons, and organizer merchandise.",
      image: "/images/sports-events/tournament-kits.png",
      badgeIcon: "Award",
      href: "/contact#quote",
    },
  ] as SportsEventsSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Sports & Event Apparel?",
    items: [
      {
        icon: "Trophy",
        title: "Pro-Grade Sublimation",
        description:
          "Vibrant, fade-proof full garment dye sublimation that never cracks or peels during intense athletic wear.",
      },
      {
        icon: "ShieldCheck",
        title: "Dry-Fit Moisture Wicking",
        description:
          "Advanced honeycomb micro-polyester fabrics engineered to pull sweat away from the body during peak performance.",
      },
      {
        icon: "Sparkles",
        title: "Custom Roster Printing",
        description:
          "Personalized player names, squad numbers, sponsor logos, and high-precision heat transfer printing.",
      },
      {
        icon: "Clock",
        title: "Fast Tournament Turnaround",
        description:
          "Rapid production timelines guaranteed to deliver large tournament and event orders before kickoff day.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Planning a Tournament or Major Corporate Event?",
    subtitle:
      "Contact our sports apparel designers for custom jersey mockups, fabric samples, and tournament package discounts.",
    bgImage: "/images/sports-events/cta-bg.png",
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
      text: "Trusted by 200+ Sports Clubs & Event Firms",
    },
    {
      icon: "Award",
      text: "ISO Certified Athletic Garment Standards",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Eco-Friendly Sublimation Inks",
    },
    {
      icon: "Headphones",
      text: "Dedicated Tournament Account Support",
    },
  ] as TrustBadge[],
};
