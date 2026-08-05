// ─── Industry Categories Data ─────────────────────────────────────────────────
// All industry cards are stored here for easy access and editing.
// Swap `image` for any path under /public/images/industries/.

export interface IndustryCategory {
  id: string;
  /** Card title */
  title: string;
  /** Short one-liner shown beneath the title on the card */
  description: string;
  /**
   * Path to the card background image (relative to /public).
   * Replace with your own photo at any time.
   */
  image: string;
  /** Optional — href for the card link (defaults to "#quote") */
  href?: string;
}

export const industryCategories: IndustryCategory[] = [
  {
    id: "corporate",
    title: "Corporate Uniform",
    description: "Smart corporate uniforms for a confident office presence",
    image: "/images/industries/corporatess.png",
    href: "/industries/corporate",
  },
  {
    id: "healthcare",
    title: "Healthcare Uniform",
    description: "Comfortable medical uniforms built for long shifts",
    image: "/images/industries/healthcares.png",
    href: "/industries/healthcare",
  },
  {
    id: "hospitality",
    title: "Hotel Uniform",
    description: "Wholesale hotel uniform manufacturer & supplier",
    image: "/images/industries/hotels.png",
    href: "/industries/hospitality",
  },
  {
    id: "industrial",
    title: "Industrial & Safety Uniform",
    description: "Durable workwear engineered for safety on the floor",
    image: "/images/industries/engineers.png",
    href: "/industries/industrial-safety",
  },
  {
    id: "security",
    title: "Security Uniform",
    description: "Authoritative uniforms that command respect and visibility",
    image: "/images/industries/securitiess.png",
    href: "/industries/security",
  },
  {
    id: "education",
    title: "School Uniform",
    description: "Smart school uniforms that foster unity and pride",
    image: "/images/industries/students.png",
    href: "/industries/education",
  },
  {
    id: "aviation",
    title: "Aviation & Transport Uniform",
    description: "Sophisticated airline & transport crew uniforms for premium carriers",
    image: "/images/industries/pilots.png",
    href: "/industries/aviation-transport",
  },
  {
    id: "spa",
    title: "Spa & Salon Uniform",
    description: "Look comfortable and relaxed with spa & salon uniforms",
    image: "/images/industries/spa.png",
    href: "/industries/hospitality",
  },
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Functional workwear for facility and maintenance operations",
    image: "/images/industries/engineers.png",
    href: "/industries/facility-management",
  },
  {
    id: "sports-events",
    title: "Sports & Events Uniform",
    description: "Custom activewear and staff attire for sports and major events",
    image: "/images/industries/corporatess.png",
    href: "/industries/sports-events",
  },
  {
    id: "construction",
    title: "Construction Uniform",
    description: "High-visibility and heavy-duty apparel for construction sites",
    image: "/images/industries/engineers.png",
    href: "/industries/construction",
  },
  {
    id: "retail-commercial",
    title: "Retail & Commercial Uniform",
    description: "Stylish retail staff attire and shopping mall uniforms for commercial brands",
    image: "/images/industries/corporatess.png",
    href: "/industries/retail-commercial",
  },
];
