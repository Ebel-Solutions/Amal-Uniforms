// ─── Printing Services Page Data ──────────────────────────────────────────────

export interface PrintingService {
  id: string;
  title: string;
  description: string;
  image: string;
  badgeIcon: string;
  features: string[];
  href?: string;
  category: string;
}

export interface PrintingCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  services: PrintingService[];
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

export const printingData = {
  // ── Theme ─────────────────────────────────────────────────────────────────────
  theme: {
    accentName: "orange",
    badgeBg: "bg-orange-500/15",
    badgeText: "text-orange-800",
    badgeBorder: "border-orange-500/30",
    dividerBar: "bg-orange-500",
    cardHoverText: "group-hover:text-orange-700",
    cardLinkText: "text-orange-700 hover:text-orange-900",
    ctaPrimaryBtn: "bg-orange-500 text-white hover:bg-orange-400",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-200",
    accentIcon: "text-orange-700",
    categoryBadge: "bg-orange-500/20 border-orange-500/30 text-orange-300",
  },

  // ── Hero ──────────────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#printing" },
      { label: "Printing Services", href: "/printing" },
    ],
    title: "Professional Garment Printing Services",
    subtitle:
      "Full-spectrum garment and textile printing in Riyadh — screen printing, DTG digital printing, heat transfer, and sublimation for corporate uniforms, promotional apparel, and branded workwear.",
    primaryBtn: {
      text: "Explore Printing Services",
      href: "#services",
    },
    secondaryBtn: {
      text: "Get a Printing Quote",
      href: "/contact#quote",
    },
    highlights: [
      { icon: "Printer", label: "4 Printing Technologies" },
      { icon: "Palette", label: "Pantone Color Matching" },
      { icon: "ShieldCheck", label: "Wash-Fast Guaranteed" },
    ],
    heroImage: "/images/printing/logo-screen-printing.png",
  },

  // ── Section Header ────────────────────────────────────────────────────────────
  section: {
    title: "Our Printing Services",
    description:
      "From precision logo screen printing to photorealistic DTG digital prints, sublimation sportswear, and reflective heat transfers — 18 specialist printing services for every garment and branding need.",
  },

  // ── 4 Printing Categories with subcategory services ───────────────────────────
  categories: [
    {
      id: "screen-printing",
      title: "Screen Printing",
      icon: "Layers",
      description:
        "The gold standard for bold, durable bulk garment printing. Ideal for logos, text, and spot-color designs on uniforms, workwear, and promotional t-shirts.",
      services: [
        {
          id: "logo-screen-printing",
          title: "Logo Screen Printing",
          category: "Screen Printing",
          description:
            "Precision spot-color logo printing directly onto uniforms and corporate garments. Produces sharp, vibrant, wash-resistant prints that maintain brand accuracy across bulk orders.",
          image: "/images/printing/logo-screen-printing.png",
          badgeIcon: "Award",
          features: ["Spot-color accuracy", "Pantone matching", "Bulk order efficiency", "Durable ink formula"],
          href: "/contact#quote",
        },
        {
          id: "uniform-screen-printing",
          title: "Uniform Screen Printing",
          category: "Screen Printing",
          description:
            "Enterprise-scale screen printing for complete uniform programs — department names, company logos, and safety text printed consistently across thousands of garments.",
          image: "/images/printing/uniform-screen-printing.png",
          badgeIcon: "Shirt",
          features: ["Consistent bulk output", "All garment types", "Department text support", "Production QC"],
          href: "/contact#quote",
        },
        {
          id: "promo-tshirt-printing",
          title: "Promotional T-Shirt Printing",
          category: "Screen Printing",
          description:
            "High-impact promotional t-shirt printing for events, exhibitions, and brand campaigns — vibrant multi-color graphics printed fast and at competitive bulk pricing.",
          image: "/images/printing/promo-tshirt-printing.png",
          badgeIcon: "Tag",
          features: ["Event & campaign ready", "Fast turnaround", "Multi-color designs", "Competitive bulk rates"],
          href: "/contact#quote",
        },
        {
          id: "multicolor-screen-printing",
          title: "Multi-Color Screen Printing",
          category: "Screen Printing",
          description:
            "Advanced carousel screen printing using multiple screens and ink layers to produce complex multi-color artwork with precise registration and stunning visual depth.",
          image: "/images/printing/multicolor-screen-printing.png",
          badgeIcon: "Palette",
          features: ["Up to 8-color prints", "Precise registration", "Gradient effects", "Complex artwork capable"],
          href: "/contact#quote",
        },
        {
          id: "reflective-screen-printing",
          title: "Reflective Screen Printing",
          category: "Screen Printing",
          description:
            "Safety-grade reflective ink printing on high-visibility vests, safety jackets, and workwear — meeting Saudi SASO and international EN ISO 20471 visibility standards.",
          image: "/images/printing/reflective-screen-printing.png",
          badgeIcon: "Zap",
          features: ["ISO 20471 compliant", "Hi-vis safety garments", "Retroreflective inks", "Industrial grade"],
          href: "/contact#quote",
        },
      ] as PrintingService[],
    },
    {
      id: "digital-printing",
      title: "Digital Printing",
      icon: "Printer",
      description:
        "Next-generation inkjet and DTG digital printing for photorealistic graphics, personalized prints, and small-run orders with no screen setup costs.",
      services: [
        {
          id: "dtg-printing",
          title: "Direct-to-Garment (DTG) Printing",
          category: "Digital Printing",
          description:
            "State-of-the-art DTG inkjet printing delivers photorealistic, full-color designs directly onto fabric — ideal for personalized prints, small runs, and complex photographic artwork.",
          image: "/images/printing/dtg-printing.png",
          badgeIcon: "Cpu",
          features: ["Photorealistic output", "No minimum order", "Full-color artwork", "No screen fees"],
          href: "/contact#quote",
        },
        {
          id: "digital-textile-printing",
          title: "Digital Textile Printing",
          category: "Digital Printing",
          description:
            "Wide-format reactive digital textile printing on fabric rolls — suitable for all-over uniform patterns, fashion fabric, custom print yardage, and interior textiles.",
          image: "/images/printing/digital-textile-printing.png",
          badgeIcon: "Layers",
          features: ["All-over patterns", "Fabric roll printing", "Wide-format capable", "Reactive & pigment inks"],
          href: "/contact#quote",
        },
        {
          id: "high-res-graphic-printing",
          title: "High-Resolution Graphic Printing",
          category: "Digital Printing",
          description:
            "Ultra-sharp, high-DPI digital graphic printing for apparel requiring fine detail reproduction — technical diagrams, photographic images, and intricate vector artwork.",
          image: "/images/printing/high-res-graphic-printing.png",
          badgeIcon: "Sparkles",
          features: ["Ultra-high DPI", "Fine detail accuracy", "Vector & photo art", "Color-managed output"],
          href: "/contact#quote",
        },
        {
          id: "personalized-name-number",
          title: "Personalized Name & Number Printing",
          category: "Digital Printing",
          description:
            "Variable data digital printing for individualized staff uniforms — each piece printed with a unique name, employee ID, or jersey number from a single automated print run.",
          image: "/images/printing/personalized-name-number.png",
          badgeIcon: "UserCheck",
          features: ["Variable data per piece", "Name & number sets", "Sports & staff uniforms", "Fast batch output"],
          href: "/contact#quote",
        },
        {
          id: "variable-data-printing",
          title: "Variable Data Printing",
          category: "Digital Printing",
          description:
            "Automated digital printing that changes text, barcodes, serial numbers, or QR codes on each garment — perfect for employee uniforms with individual identifiers.",
          image: "/images/printing/variable-data-printing.png",
          badgeIcon: "Hash",
          features: ["Unique per-piece data", "Barcode & QR support", "Automated batch runs", "Corporate ID garments"],
          href: "/contact#quote",
        },
      ] as PrintingService[],
    },
    {
      id: "heat-transfer-printing",
      title: "Heat Transfer Printing",
      icon: "Flame",
      description:
        "Precision heat-applied transfers for logos, numbers, and reflective details on sports jerseys, workwear, and corporate garments with a smooth, durable finish.",
      services: [
        {
          id: "vinyl-heat-transfer",
          title: "Vinyl Heat Transfer",
          category: "Heat Transfer Printing",
          description:
            "Cut-vinyl heat transfer printing for sharp, solid-color logos and lettering on garments — smooth, professional finish ideal for sports jerseys, corporate polos, and workwear.",
          image: "/images/printing/vinyl-heat-transfer.png",
          badgeIcon: "Scissors",
          features: ["Crisp sharp edges", "Solid color fills", "Flexible & durable", "Sports & workwear grade"],
          href: "/contact#quote",
        },
        {
          id: "reflective-heat-transfer",
          title: "Reflective Heat Transfer",
          category: "Heat Transfer Printing",
          description:
            "Reflective film heat transfers for safety garments — applied logos, stripes, and text that provide high retroreflectivity and comply with industrial safety standards.",
          image: "/images/printing/reflective-heat-transfer.png",
          badgeIcon: "Zap",
          features: ["Safety-grade reflective", "Stripe & logo transfers", "EN ISO 20471 ready", "Survives industrial wash"],
          href: "/contact#quote",
        },
        {
          id: "sports-jersey-number",
          title: "Sports Jersey Number Printing",
          category: "Heat Transfer Printing",
          description:
            "Heat-applied player number and name transfers for sports jerseys and team kits — bold, flexible, and resistant to cracking through rigorous athletic use and repeated washing.",
          image: "/images/printing/sports-jersey-number.png",
          badgeIcon: "Hash",
          features: ["Athletic flex material", "Bold number styles", "Name & number sets", "Crack-resistant finish"],
          href: "/contact#quote",
        },
        {
          id: "logo-heat-transfer",
          title: "Logo Heat Transfer",
          category: "Heat Transfer Printing",
          description:
            "Full-color photographic-quality logo heat transfers applied to garments — suitable for complex gradient logos and multi-color artwork without screen printing setup costs.",
          image: "/images/printing/logo-heat-transfer.png",
          badgeIcon: "Palette",
          features: ["Full-color logos", "Photo-quality transfer", "No screen setup", "Fast small-run capable"],
          href: "/contact#quote",
        },
      ] as PrintingService[],
    },
    {
      id: "sublimation-printing",
      title: "Sublimation Printing",
      icon: "Droplets",
      description:
        "Premium dye sublimation printing for all-over full-color sportswear, promotional apparel, and custom uniforms with vibrant fade-proof colors that become part of the fabric.",
      services: [
        {
          id: "full-garment-sublimation",
          title: "Full Garment Sublimation",
          category: "Sublimation Printing",
          description:
            "Edge-to-edge full-garment dye sublimation printing — all-over vibrant patterns and graphics permanently infused into polyester fabric for a seamless, premium finish.",
          image: "/images/printing/full-garment-sublimation.png",
          badgeIcon: "Sparkles",
          features: ["Edge-to-edge coverage", "Fade-proof colors", "Seamless pattern wrap", "Polyester & blends"],
          href: "/contact#quote",
        },
        {
          id: "sportswear-sublimation",
          title: "Sportswear Sublimation",
          category: "Sublimation Printing",
          description:
            "Custom sublimated sportswear for football, basketball, cricket, and athletics teams — lightweight moisture-wicking jerseys and kits with photo-quality team graphics.",
          image: "/images/printing/sportswear-sublimation.png",
          badgeIcon: "Activity",
          features: ["Team jerseys & kits", "Moisture-wicking fabric", "Custom team graphics", "Lightweight & breathable"],
          href: "/contact#quote",
        },
        {
          id: "dye-sublimation-printing",
          title: "Dye Sublimation Printing",
          category: "Sublimation Printing",
          description:
            "Professional dye sublimation printing for custom corporate uniforms, polo shirts, and event apparel with unlimited color reproduction and permanent color-fastness.",
          image: "/images/printing/dye-sublimation-printing.png",
          badgeIcon: "Droplets",
          features: ["Unlimited color palette", "No color limitations", "Corporate & event wear", "Permanent colorfast"],
          href: "/contact#quote",
        },
        {
          id: "promotional-apparel-printing",
          title: "Promotional Apparel Printing",
          category: "Sublimation Printing",
          description:
            "Sublimated promotional garments for corporate events, trade shows, and brand campaigns — custom all-over printed caps, t-shirts, tote bags, and branded event wear.",
          image: "/images/printing/promotional-apparel-printing.png",
          badgeIcon: "Tag",
          features: ["Event & trade show gear", "All-over branding", "Caps, tees & bags", "Fast campaign turnaround"],
          href: "/contact#quote",
        },
      ] as PrintingService[],
    },
  ] as PrintingCategory[],

  // ── Process Steps ─────────────────────────────────────────────────────────────
  process: {
    title: "Our 5-Step Printing Process",
    subtitle: "From artwork submission to final delivery — a streamlined, quality-assured workflow.",
    steps: [
      {
        step: 1,
        title: "Artwork Submission",
        description:
          "Submit your logo or design file in any format (AI, EPS, PDF, PNG). Our pre-press team reviews it and prepares it for your chosen printing method.",
        icon: "Upload",
      },
      {
        step: 2,
        title: "Print Method Selection",
        description:
          "We advise the best printing technology — screen, DTG, heat transfer, or sublimation — based on your design, garment type, quantity, and budget.",
        icon: "Printer",
      },
      {
        step: 3,
        title: "Strike-Off Sample",
        description:
          "A physical print strike-off is produced on your garment for color accuracy and quality approval before full production is authorized.",
        icon: "CheckCircle",
      },
      {
        step: 4,
        title: "Full Production Run",
        description:
          "Your approved design is printed across your full order quantity with inline quality checks for registration, color density, and ink adhesion.",
        icon: "Factory",
      },
      {
        step: 5,
        title: "Inspection & KSA Delivery",
        description:
          "Every garment is inspected for print quality, then individually packaged and dispatched across Saudi Arabia with tracking and account support.",
        icon: "Truck",
      },
    ] as ProcessStep[],
  },

  // ── Why Choose ────────────────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal for Garment Printing?",
    items: [
      {
        icon: "Palette",
        title: "Pantone Color Matching",
        description:
          "Exact brand color reproduction using Pantone-matched inks across all printing methods — critical for corporate identity consistency.",
      },
      {
        icon: "ShieldCheck",
        title: "Wash-Fast Guarantee",
        description:
          "All prints tested to withstand 60-wash cycles without fading, cracking, or peeling — industrial-grade ink and transfer formulations.",
      },
      {
        icon: "Zap",
        title: "Fast Turnaround",
        description:
          "Screen and DTG print runs completed in 5–10 business days. Rush production available for urgent event and campaign deadlines.",
      },
      {
        icon: "Boxes",
        title: "Bulk Capacity",
        description:
          "From 50-piece small runs to 50,000+ unit enterprise orders — competitive bulk pricing and consistent quality at any scale.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ────────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Need Professional Garment Printing for Your Business?",
    subtitle:
      "Contact our Riyadh printing team for a free strike-off sample, color consultation, and competitive quote for your printing project.",
    bgImage: "/images/printing/logo-screen-printing.png",
    primaryBtn: {
      text: "Request a Printing Quote",
      href: "/contact#quote",
    },
    secondaryBtn: {
      text: "Contact Our Print Team",
      href: "/contact",
    },
  },

  // ── Trust Badges ──────────────────────────────────────────────────────────────
  trustBadges: [
    { icon: "Building2", text: "Trusted by 500+ KSA Brands" },
    { icon: "Award", text: "Pantone Certified Color Matching" },
    { icon: "Printer", text: "4 Professional Print Technologies" },
    { icon: "Headphones", text: "Free Strike-Off Sample" },
  ] as TrustBadge[],

  // ── Stats ─────────────────────────────────────────────────────────────────────
  stats: [
    { value: "18", label: "Printing Services" },
    { value: "4", label: "Print Technologies" },
    { value: "100%", label: "Pantone Matched" },
    { value: "5–10", label: "Day Turnaround" },
  ],
};
