// ─── Healthcare Industry Page Data ─────────────────────────────────────────────
// Easily edit text, titles, descriptions, features, and images here.

export interface HealthcareSubcategory {
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

export const healthcareData = {
  // ── Theme ──────────────────────────────────────────────────────────────────
  theme: {
    ctaPrimaryBtn: "bg-teal-500 text-navy-950 hover:bg-teal-400 font-bold",
  },

  // ── Hero Section ─────────────────────────────────────────────────────────────
  hero: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Industries", href: "/#industries" },
      { label: "Healthcare", href: "/industries/healthcare" },
    ],
    title: "Healthcare Uniforms",
    subtitle:
      "Professional. Functional. Comfortable. Uniforms designed to support those who care for others.",
    primaryBtn: {
      text: "Explore Collection",
      href: "#subcategories",
    },
    secondaryBtn: {
      text: "Download Catalog",
      href: "/contact#quote",
    },
    highlights: [
      { icon: "Layers", label: "Premium Fabrics" },
      { icon: "ShieldCheck", label: "Hygienic & Safe" },
      { icon: "Sparkles", label: "Durable & Reliable" },
    ],
    heroImage: "/images/healthcare/hero.png",
  },

  // ── Subcategories Section (From Image 2 & 1) ──────────────────────────────────
  section: {
    title: "Healthcare Uniforms",
    description:
      "From doctors to support staff, we provide a wide range of healthcare uniforms that combine comfort, durability and a professional look.",
  },

  subcategories: [
    {
      id: "doctor-coats",
      title: "Doctor Coats",
      description:
        "High quality lab coats and jackets designed for medical specialists and clinical physicians.",
      image: "/images/healthcare/doctor-coats.png",
      badgeIcon: "Stethoscope",
      href: "/contact#quote",
    },
    {
      id: "medical-scrubs",
      title: "Medical Scrubs",
      description:
        "Comfortable scrubs designed for long hours and ease of movement during demanding shifts.",
      image: "/images/healthcare/medical-scrubs.png",
      badgeIcon: "Shirt",
      href: "/contact#quote",
    },
    {
      id: "nurse-uniforms",
      title: "Nurse Uniforms",
      description:
        "Practical and stylish uniforms for nurses with functional pockets and modern design.",
      image: "/images/healthcare/nurse-uniforms.png",
      badgeIcon: "HeartPulse",
      href: "/contact#quote",
    },
    {
      id: "lab-coats",
      title: "Lab Coats",
      description:
        "High quality lab coats for doctors, specialists and laboratory medical staff.",
      image: "/images/healthcare/lab-coats.png",
      badgeIcon: "UserCheck",
      href: "/contact#quote",
    },
    {
      id: "pharmacy-uniforms",
      title: "Pharmacy Uniforms",
      description:
        "Professional and hygienic apparel tailored for pharmacists and pharmacy staff.",
      image: "/images/healthcare/pharmacy-uniforms.png",
      badgeIcon: "Pill",
      href: "/contact#quote",
    },
    {
      id: "hospital-staff-uniforms",
      title: "Hospital Staff Uniforms",
      description:
        "Durable uniforms for housekeeping, administration, orderlies and support staff.",
      image: "/images/healthcare/hospital-staffs.png",
      badgeIcon: "Users",
      href: "/contact#quote",
    },
    {
      id: "healthcare-ppe-apparel",
      title: "Healthcare PPE Apparel",
      description:
        "Sterile and protective surgical wear and gowns for maximum safety and compliance.",
      image: "/images/healthcare/ppe-apparels.png",
      badgeIcon: "ShieldAlert",
      href: "/contact#quote",
    },
  ] as HealthcareSubcategory[],

  // ── Why Choose Section ───────────────────────────────────────────────────────
  whyChoose: {
    title: "Why Choose Amal Uniforms?",
    items: [
      {
        icon: "Layers",
        title: "Premium Quality",
        description:
          "High quality fabrics that ensure comfort, durability and easy maintenance throughout demanding hospital shifts.",
      },
      {
        icon: "ShieldCheck",
        title: "Hygienic & Safe",
        description:
          "Antimicrobial materials that meet healthcare safety standards and withstand frequent thermal sterilization.",
      },
      {
        icon: "Palette",
        title: "Customizable",
        description:
          "Custom colors, tailored fits, and high-precision logo embroidery to match your hospital or clinic brand identity.",
      },
      {
        icon: "Clock",
        title: "Timely Delivery",
        description:
          "Reliable production capacity and on-time delivery across Saudi Arabia and the Middle East you can count on.",
      },
    ] as FeatureItem[],
  },

  // ── CTA Banner ───────────────────────────────────────────────────────────────
  ctaBanner: {
    title: "Need a Custom Uniform Solution for Your Healthcare Team?",
    subtitle:
      "We're here to help you create the perfect uniform for your hospital, clinic, or medical organization.",
    bgImage: "/images/healthcare/cta-bg.png",
    primaryBtn: {
      text: "Get a Quote",
      href: "/contact#quote",
    },
    secondaryBtn: {
      text: "Contact Our Team",
      href: "/contact",
    },
  },

  // ── Bottom Trust Bar ────────────────────────────────────────────────────────
  trustBadges: [
    {
      icon: "Building2",
      text: "Trusted by 500+ Healthcare Organizations",
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
      text: "Dedicated Customer Support",
    },
  ] as TrustBadge[],
};
