// ─── Education Industry Page Data ─────────────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface EducationSubcategory {
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

export const educationData = {
  // ── Theme Configuration ──────────────────────────────────────────────────────
  // Distinct accent theme for Education page (Royal Academic Purple)
  theme: {
    accentName: "purple", // Distinct from Healthcare (teal), Corporate (amber), Hospitality (rose), Industrial (orange), Construction (yellow), Security (blue)
    badgeBg: "bg-purple-500/15",
    badgeText: "text-purple-950 font-bold",
    badgeBorder: "border-purple-500/30",
    dividerBar: "bg-purple-700",
    cardHoverText: "group-hover:text-purple-800",
    cardLinkText: "text-purple-700 hover:text-purple-900",
    ctaPrimaryBtn: "bg-purple-700 text-white hover:bg-purple-800 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Education", href: "/industries/education" },
    ],
    title: "Educational Uniforms",
    subtitle:
      "Comfortable, colorfast, and durable school uniforms, college blazers, university wear, athletic kits, and graduation gowns.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/downloads/education-catalog.pdf",
    },
    highlights: [
      { icon: "GraduationCap", label: "Academic Heritage Design" },
      { icon: "ShieldCheck", label: "Colorfast & Shrink Resistant" },
      { icon: "Sparkles", label: "Custom School Crest Embroidery" },
    ],
    heroImage: "/images/education/hero.png",
  },

  // ── Subcategories Section (From User Image) ───────────────────────────────────
  section: {
    title: "Educational Uniforms",
    description:
      "From kindergarten and K-12 private schools to colleges, universities, faculty staff, and athletic teams across Saudi Arabia.",
  },

  // 6 exact subcategories from user image
  subcategories: [
    {
      id: "school-uniforms",
      title: "School Uniforms",
      description:
        "Comfortable, breathable K-12 shirts, skirts, trousers, and pinafores designed for active school days.",
      image: "/images/education/school-uniforms.png",
      badgeIcon: "BookOpen",
      href: "/contact#quote",
    },
    {
      id: "college-uniforms",
      title: "College Uniforms",
      description:
        "Smart casual college shirts, blazers, and polo shirts tailored for higher education institutions.",
      image: "/images/education/college-uniforms.png",
      badgeIcon: "GraduationCap",
      href: "/contact#quote",
    },
    {
      id: "university-uniforms",
      title: "University Uniforms",
      description:
        "Prestigious university apparel, lab coats, faculty blazers, and custom varsity sweaters with crest embroidery.",
      image: "/images/education/university-uniforms.png",
      badgeIcon: "Award",
      href: "/contact#quote",
    },
    {
      id: "staff-uniforms",
      title: "Staff Uniforms",
      description:
        "Professional attire for teachers, administrative faculty, librarians, and campus support personnel.",
      image: "/images/education/staff-uniforms.png",
      badgeIcon: "Users",
      href: "/contact#quote",
    },
    {
      id: "sports-uniforms",
      title: "Sports Uniforms",
      description:
        "Moisture-wicking athletic jerseys, P.E. shorts, tracksuits, and team sportswear customized with school colors.",
      image: "/images/education/sports-uniforms.png",
      badgeIcon: "Trophy",
      href: "/contact#quote",
    },
    {
      id: "graduation-apparel",
      title: "Graduation Apparel",
      description:
        "Premium academic graduation gowns, caps (mortarboards), velvet hoods, and stoles for commencement ceremonies.",
      image: "/images/education/graduation-apparel.png",
      badgeIcon: "Sparkles",
      href: "/contact#quote",
    },
  ] as EducationSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Educational Uniforms?",
    items: [
      {
        icon: "GraduationCap",
        title: "Scholarly Excellence",
        description:
          "Dignified designs and crisp tailoring that foster school spirit, discipline, and unity among students.",
      },
      {
        icon: "ShieldCheck",
        title: "Kid-Safe & Hypoallergenic",
        description:
          "High-grade OEKO-TEX certified skin-friendly cotton blends free of harsh chemicals or irritants.",
      },
      {
        icon: "Sparkles",
        title: "Custom Crest Embroidery",
        description:
          "High-density computerized school badge embroidery and custom striped ties, collars, and cuffs.",
      },
      {
        icon: "Clock",
        title: "Bulk Academic Season Delivery",
        description:
          "Guaranteed on-time bulk manufacturing for new academic year intake and graduation ceremonies.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Partner with Us for Your Institution's Uniform Needs",
    subtitle:
      "Contact our educational uniform specialists for custom fabric samples, size fitting sessions, and bulk school pricing.",
    bgImage: "/images/education/cta-bg.png",
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
      text: "Trusted by 200+ Schools & Universities",
    },
    {
      icon: "Award",
      text: "ISO Certified Educational Apparel",
    },
    {
      icon: "Leaf",
      text: "Sustainable & Ethical Manufacturing",
    },
    {
      icon: "Headphones",
      text: "Dedicated School Account Support",
    },
  ] as TrustBadge[],
};
