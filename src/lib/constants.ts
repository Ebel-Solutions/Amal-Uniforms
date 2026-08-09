// ─── Business Information ────────────────────────────────────────────────────

export const BUSINESS = {
  tradingName: "Amal Uniforms",
  registeredName: "Tailor Amal Omar Sulaiman",
  tagline: "Crafting Saudi Arabia's Finest Professional Uniforms",
  description:
    "Premium uniform manufacturer based in Riyadh, Saudi Arabia. We design, manufacture, and deliver custom professional uniforms for businesses across the Kingdom.",
  phone: "0572429905",
  phoneFormatted: "+966 572 429 905",
  phoneHref: "tel:+966572429905",
  email: "Info@amaluniform.com",
  emailHref: "mailto:Info@amaluniform.com",
  address: {
    street: "Malik Faisal Bin Abdul Aziz Street",
    area: "Al Dheera",
    city: "Riyadh",
    country: "Kingdom of Saudi Arabia",
    full: "Malik Faisal Bin Abdul Aziz Street, Al Dheera, Riyadh, Kingdom of Saudi Arabia",
  },
  mapsUrl: "https://www.google.com/maps/place/Amal+Uniforms/@24.6286336,46.7187667,19z/data=!4m6!3m5!1s0x3e2f05000827b5b3:0xc799bd52d71d008c!8m2!3d24.6286336!4d46.7187667",
  embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.1354411150041!2d46.71876670136348!3d24.628633636066827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05000827b5b3%3A0xc799bd52d71d008c!2sAmal%20Uniforms!5e0!3m2!1sen!2sus!4v1786264149015!5m2!1sen!2sus",
  url: "https://www.amaluniform.com",
} as const;

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Corporate", href: "/industries/corporate" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "Industrial & Safety", href: "/industries/industrial-safety" },
      { label: "Security", href: "/industries/security" },
      { label: "Education", href: "/industries/education" },
      { label: "Aviation & Transport", href: "/industries/aviation-transport" },
      { label: "Retail & Commercial", href: "/industries/retail-commercial" },
      { label: "Facility Management", href: "/industries/facility-management" },
      { label: "Sports & Events", href: "/industries/sports-events" },
      { label: "Construction", href: "/industries/construction" },
    ],
  },
  {
    label: "Printing",
    href: "/printing",
    children: [
      { label: "Screen Printing", href: "/printing#screen-printing" },
      { label: "Digital Printing", href: "/printing#digital-printing" },
      { label: "Heat Transfer Printing", href: "/printing#heat-transfer-printing" },
      { label: "Sublimation Printing", href: "/printing#sublimation-printing" },
    ],
  },
  {
    label: "Embroidery",
    href: "/embroidery",
    children: [
      { label: "Computerized Embroidery", href: "/embroidery#computerized-embroidery" },
      { label: "Name Embroidery", href: "/embroidery#name-embroidery" },
      { label: "Cap Embroidery", href: "/embroidery#cap-embroidery" },
      { label: "Polo Shirt Embroidery", href: "/embroidery#polo-shirt-embroidery" },
      { label: "3D Puff Embroidery", href: "/embroidery#3d-puff-embroidery" },
      { label: "Woven Labels & Badges", href: "/embroidery#woven-labels-badges" },
      { label: "Corporate Logo Embroidery", href: "/embroidery#corporate-logo-embroidery" },
      { label: "Monogram Embroidery", href: "/embroidery#monogram-embroidery" },
      { label: "Jacket Embroidery", href: "/embroidery#jacket-embroidery" },
      { label: "Uniform Badge Embroidery", href: "/embroidery#uniform-badge-embroidery" },
      { label: "Custom Embroidery Patches", href: "/embroidery#custom-embroidery-patches" },
      { label: "Embroidered Emblems", href: "/embroidery#embroidered-emblems" },
    ],
  },
  {
    label: "Custom Manufacturing",
    href: "/custom-manufacturing",
    children: [
      { label: "Custom Uniform Design & Manufacturing", href: "/custom-manufacturing#custom-uniform-design" },
      { label: "Bulk Uniform Production", href: "/custom-manufacturing#bulk-uniform-production" },
      { label: "Sample Development", href: "/custom-manufacturing#sample-development" },
      { label: "Custom Sizing & Fitting", href: "/custom-manufacturing#custom-sizing-fitting" },
      { label: "Private Label Manufacturing", href: "/custom-manufacturing#private-label-manufacturing" },
      { label: "Made-to-Order Uniforms", href: "/custom-manufacturing#made-to-order-uniforms" },
      { label: "Pattern Making", href: "/custom-manufacturing#pattern-making" },
    ],
  },
  {
    label: "Profession",
    href: "/#profession",
    children: [
      { label: "Office Staff Uniforms", href: "/industries/corporate#subcategories" },
      { label: "Executive Wear", href: "/industries/corporate#subcategories" },
      { label: "Reception Uniforms", href: "/industries/corporate#subcategories" },
      { label: "Customer Service Uniforms", href: "/industries/corporate#subcategories" },
      { label: "Administrative Staff Uniforms", href: "/industries/corporate#subcategories" },
      { label: "Corporate Shirts & Suits", href: "/industries/corporate#subcategories" },
      { label: "Doctor Coats", href: "/industries/healthcare#subcategories" },
      { label: "Medical Scrubs", href: "/industries/healthcare#subcategories" },
      { label: "Nurse Uniforms", href: "/industries/healthcare#subcategories" },
      { label: "Lab Coats", href: "/industries/healthcare#subcategories" },
      { label: "Pharmacy Uniforms", href: "/industries/healthcare#subcategories" },
      { label: "Hospital Staff Uniforms", href: "/industries/healthcare#subcategories" },
      { label: "Healthcare PPE Apparel", href: "/industries/healthcare#subcategories" },
      { label: "Hotel Staff Uniforms", href: "/industries/hospitality#subcategories" },
      { label: "Restaurant Uniforms", href: "/industries/hospitality#subcategories" },
      { label: "Chef Jackets", href: "/industries/hospitality#subcategories" },
      { label: "Waiter & Waitress Uniforms", href: "/industries/hospitality#subcategories" },
      { label: "Housekeeping Uniforms", href: "/industries/hospitality#subcategories" },
      { label: "Catering Uniforms", href: "/industries/hospitality#subcategories" },
      { label: "Concierge Uniforms", href: "/industries/hospitality#subcategories" },
      { label: "Industrial Workwear", href: "/industries/industrial-safety#subcategories" },
      { label: "Factory Uniforms", href: "/industries/industrial-safety#subcategories" },
      { label: "Construction Workwear", href: "/industries/construction#subcategories" },
      { label: "Site Engineer Uniforms", href: "/industries/construction#subcategories" },
      { label: "Security Guard Uniforms", href: "/industries/security#subcategories" },
      { label: "Patrol Uniforms", href: "/industries/security#subcategories" },
      { label: "Tactical Uniforms", href: "/industries/security#subcategories" },
      { label: "School Uniforms", href: "/industries/education#subcategories" },
      { label: "College Uniforms", href: "/industries/education#subcategories" },
      { label: "University Uniforms", href: "/industries/education#subcategories" },
      { label: "Staff Uniforms", href: "/industries/education#subcategories" },
      { label: "Sports Uniforms", href: "/industries/education#subcategories" },
      { label: "Graduation Apparel", href: "/industries/education#subcategories" },
      { label: "Airline Crew Uniforms", href: "/industries/aviation-transport#subcategories" },
      { label: "Pilot Uniforms", href: "/industries/aviation-transport#subcategories" },
      { label: "Cabin Crew Uniforms", href: "/industries/aviation-transport#subcategories" },
      { label: "Airport Staff Uniforms", href: "/industries/aviation-transport#subcategories" },
      { label: "Logistics Staff Uniforms", href: "/industries/aviation-transport#subcategories" },
      { label: "Driver Uniforms", href: "/industries/aviation-transport#subcategories" },
      { label: "Retail Staff Uniforms", href: "/industries/retail-commercial#subcategories" },
      { label: "Shopping Mall Uniforms", href: "/industries/retail-commercial#subcategories" },
      { label: "Sales Executive Uniforms", href: "/industries/retail-commercial#subcategories" },
      { label: "Cashier Uniforms", href: "/industries/retail-commercial#subcategories" },
      { label: "Store Staff Uniforms", href: "/industries/retail-commercial#subcategories" },
      { label: "Cleaning Staff Uniforms", href: "/industries/facility-management#subcategories" },
      { label: "Maintenance Staff Uniforms", href: "/industries/facility-management#subcategories" },
      { label: "Facility Management Apparel", href: "/industries/facility-management#subcategories" },
      { label: "Team Uniforms", href: "/industries/sports-events#subcategories" },
      { label: "Event Staff Uniforms", href: "/industries/sports-events#subcategories" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// ─── Industries ──────────────────────────────────────────────────────────────

export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "corporate",
    title: "Corporate",
    description: "Tailored business attire that projects professionalism and brand identity",
    image: "/images/industries/corporate.png",
    href: "/industries/corporate",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Medical scrubs and lab coats designed for comfort and hygiene",
    image: "/images/industries/healthcare.png",
    href: "/industries/healthcare",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Elegant hotel and restaurant uniforms that elevate guest experience",
    image: "/images/industries/hospitality.png",
    href: "/industries/hospitality",
  },
  {
    id: "industrial",
    title: "Industrial & Safety",
    description: "Durable workwear engineered for safety and performance",
    image: "/images/industries/industrial.png",
    href: "/industries/industrial-safety",
  },
  {
    id: "security",
    title: "Security",
    description: "Authoritative uniforms that command respect and ensure visibility",
    image: "/images/industries/security.png",
    href: "/industries/security",
  },
  {
    id: "education",
    title: "Education",
    description: "Smart, comfortable school uniforms that foster unity and pride",
    image: "/images/industries/education.png",
    href: "/industries/education",
  },
  {
    id: "aviation",
    title: "Aviation & Transport",
    description: "Sophisticated airline, ground crew, and transport uniforms",
    image: "/images/industries/aviation.png",
    href: "/industries/aviation-transport",
  },
  {
    id: "retail",
    title: "Retail & Commercial",
    description: "Branded retail and commercial staff uniforms that strengthen your store identity",
    image: "/images/industries/corporate.png",
    href: "/industries/retail-commercial",
  },
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Functional workwear for facility and maintenance operations",
    image: "/images/industries/industrial.png",
    href: "/industries/facility-management",
  },
  {
    id: "sports-events",
    title: "Sports & Events",
    description: "Custom activewear and staff attire for sports and major events",
    image: "/images/industries/corporate.png",
    href: "/industries/sports-events",
  },
  {
    id: "construction",
    title: "Construction",
    description: "High-visibility and heavy-duty apparel for construction sites",
    image: "/images/industries/industrial.png",
    href: "/industries/construction",
  },
];

// ─── Services ────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "custom-design",
    title: "Custom Design",
    description:
      "Bespoke uniform design tailored to your brand guidelines, from concept sketches to final production samples.",
    icon: "Palette",
  },
  {
    id: "bulk-orders",
    title: "Bulk Orders",
    description:
      "Large-scale manufacturing capabilities with consistent quality across thousands of units. Competitive bulk pricing.",
    icon: "Boxes",
  },
  {
    id: "logo-embroidery",
    title: "Logo Embroidery",
    description:
      "Precision machine and hand embroidery for logos, names, and custom branding on all uniform types.",
    icon: "Sparkles",
  },
  {
    id: "fabric-selection",
    title: "Premium Fabrics",
    description:
      "Curated selection of performance fabrics — breathable, durable, and suitable for Saudi Arabia's climate.",
    icon: "Layers",
  },
  {
    id: "tailored-fitting",
    title: "Tailored Fitting",
    description:
      "On-site measurement services and custom sizing to ensure every team member looks and feels their best.",
    icon: "Ruler",
  },
  {
    id: "delivery",
    title: "KSA Delivery",
    description:
      "Reliable delivery across the Kingdom of Saudi Arabia with order tracking and dedicated account support.",
    icon: "Truck",
  },
];

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "corporate-suits",
    title: "Corporate Suits & Executive Wear",
    category: "Corporate",
    description: "Premium tailored suits, blazers, and shirts for executive teams and front-office staff.",
    image: "/images/corporate/shirts-suits.png",
    href: "/industries/corporate",
  },
  {
    id: "medical-scrubs",
    title: "Medical Scrubs & Lab Coats",
    category: "Healthcare",
    description: "Comfortable, antimicrobial scrubs and doctor coats designed for long medical shifts.",
    image: "/images/healthcare/medical-scrubs.png",
    href: "/industries/healthcare",
  },
  {
    id: "chef-wear",
    title: "Chef Jackets & Hotel Staff Wear",
    category: "Hospitality",
    description: "Professional chef jackets, aprons, and restaurant staff attire built for heat and movement.",
    image: "/images/hospitality/chef-jackets.png",
    href: "/industries/hospitality",
  },
  {
    id: "security-uniforms",
    title: "Security & Patrol Uniforms",
    category: "Security",
    description: "Authoritative, durable uniforms with custom badges and epaulettes for security personnel.",
    image: "/images/security/security-guard.png",
    href: "/industries/security",
  },
  {
    id: "coveralls",
    title: "Protective Coveralls & Workwear",
    category: "Industrial & Safety",
    description: "Heavy-duty cotton coveralls and high-vis safety apparel engineered for job site protection.",
    image: "/images/construction/protective-coveralls.png",
    href: "/industries/industrial-safety",
  },
  {
    id: "polo-shirts",
    title: "Branded Polo Shirts & Staff Wear",
    category: "Retail & Commercial",
    description: "Custom-branded polo shirts and commercial staff attire that strengthen store identity.",
    image: "/images/retail-commercial/retail-staff.png",
    href: "/industries/retail-commercial",
  },
];

// ─── Manufacturing Steps ─────────────────────────────────────────────────────

export interface ManufacturingStep {
  step: number;
  title: string;
  description: string;
}

export const MANUFACTURING_STEPS: ManufacturingStep[] = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We begin with a detailed discussion to understand your requirements, brand guidelines, and team sizing needs.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Our design team creates custom uniform concepts aligned with your brand identity and functional requirements.",
  },
  {
    step: 3,
    title: "Fabric Selection",
    description:
      "We source premium fabrics optimized for Saudi Arabia's climate — breathable, durable, and colour-fast.",
  },
  {
    step: 4,
    title: "Manufacturing",
    description:
      "Precision cutting and stitching in our Riyadh facility using industrial-grade equipment for consistent quality.",
  },
  {
    step: 5,
    title: "Quality Control",
    description:
      "Every garment undergoes rigorous inspection — checking stitching, measurements, fabric quality, and branding accuracy.",
  },
  {
    step: 6,
    title: "Delivery",
    description:
      "Packaged and delivered across Saudi Arabia with tracking and dedicated account manager support.",
  },
];

// ─── Why Amal ────────────────────────────────────────────────────────────────

export interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "Saudi-Based Manufacturing",
    description: "Proudly based in Riyadh with local manufacturing, ensuring faster turnaround and direct oversight.",
    icon: "MapPin",
  },
  {
    title: "Premium Materials",
    description: "We use only high-grade fabrics selected for durability, comfort, and climate suitability.",
    icon: "Gem",
  },
  {
    title: "Custom Branding",
    description: "Full embroidery and printing services for logos, names, and corporate identity elements.",
    icon: "Award",
  },
  {
    title: "Bulk Order Specialists",
    description: "Equipped to handle orders from 50 to 50,000+ units with consistent quality across every piece.",
    icon: "BarChart3",
  },
  {
    title: "Fast Turnaround",
    description: "Streamlined production processes ensure timely delivery without compromising on craftsmanship.",
    icon: "Clock",
  },
  {
    title: "Dedicated Account Manager",
    description: "Every client receives a dedicated point of contact for seamless communication and service.",
    icon: "UserCheck",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmed Al-Rashid",
    role: "Procurement Director",
    company: "Al Marai Group",
    text: "Amal Uniforms transformed our corporate image. The quality of tailoring and attention to detail in every suit exceeded our expectations. Their team handled our order of 500+ units flawlessly.",
  },
  {
    id: "t2",
    name: "Sarah Al-Otaibi",
    role: "HR Manager",
    company: "King Fahad Medical City",
    text: "We switched to Amal for our medical scrubs and the difference is remarkable. The fabric quality is superior, and their customisation with our hospital logo was perfect.",
  },
  {
    id: "t3",
    name: "Mohammed Al-Harbi",
    role: "Operations Manager",
    company: "Riyadh Marriott Hotel",
    text: "Our hospitality staff uniforms from Amal receive compliments from guests regularly. The elegant design and comfortable fit make our team proud to wear them.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum order quantity starts at 50 pieces per style. For custom-designed uniforms, we recommend ordering at least 100 units to optimise per-unit costs. Contact us for specific pricing based on your requirements.",
    category: "Ordering",
  },
  {
    question: "How long does production take?",
    answer:
      "Standard orders are completed within 2–4 weeks from design approval. Bulk orders of 1,000+ units may require 4–6 weeks. Rush orders can be accommodated with prior arrangement.",
    category: "Ordering",
  },
  {
    question: "Can you match our exact brand colours?",
    answer:
      "Absolutely. We use Pantone colour matching to ensure your uniforms perfectly reflect your brand identity. We provide fabric swatches for approval before production begins.",
    category: "Customisation",
  },
  {
    question: "Do you offer on-site measurements?",
    answer:
      "Yes, we provide on-site measurement services across Riyadh and surrounding areas. For clients outside Riyadh, we provide detailed measurement guides and video consultations.",
    category: "Customisation",
  },
  {
    question: "What fabrics do you use?",
    answer:
      "We source premium fabrics from trusted suppliers — including polycotton blends, 100% cotton, performance polyester, and speciality medical-grade materials. All fabrics are selected for Saudi Arabia's climate.",
    category: "Quality",
  },
  {
    question: "Do you deliver across Saudi Arabia?",
    answer:
      "Yes, we deliver to all major cities and regions across the Kingdom of Saudi Arabia. Delivery timelines vary by location but typically range from 2–5 business days after production.",
    category: "Delivery",
  },
  {
    question: "Can you add our company logo?",
    answer:
      "We offer both machine embroidery and screen printing for company logos, employee names, and department identifiers. We can work with your vector files or help recreate your logo for optimal embroidery results.",
    category: "Customisation",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, company purchase orders, and major credit cards. For large orders, we offer flexible payment terms with 50% advance and 50% on delivery.",
    category: "Ordering",
  },
];

// ─── Trust Indicators ────────────────────────────────────────────────────────

export interface TrustStat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const TRUST_STATS: TrustStat[] = [
  { value: "15+", numericValue: 15, suffix: "+", label: "Years of Experience" },
  { value: "12", numericValue: 12, suffix: "", label: "Industries Served" },
  { value: "500+", numericValue: 500, suffix: "+", label: "Business Clients" },
  { value: "100K+", numericValue: 100, suffix: "K+", label: "Uniforms Delivered" },
];

// ─── Form Options ────────────────────────────────────────────────────────────

export const INDUSTRY_OPTIONS = [
  "Corporate",
  "Healthcare",
  "Hospitality",
  "Industrial & Safety",
  "Security",
  "Education",
  "Aviation & Transport",
  "Retail & Commercial",
  "Facility Management",
  "Sports & Events",
  "Construction",
  "Printing Services",
  "Embroidery Services",
  "Custom Manufacturing",
  "Other",
] as const;

export const PRODUCTS_BY_INDUSTRY: Record<string, string[]> = {
  Corporate: [
    "Office Staff Uniforms",
    "Executive Wear",
    "Reception Uniforms",
    "Customer Service Uniforms",
    "Administrative Staff Uniforms",
    "Corporate Shirts & Suits",
    "Other",
  ],
  Healthcare: [
    "Medical Scrubs",
    "Doctor Lab Coats",
    "Nursing Uniforms",
    "Surgical Gowns & Attire",
    "Reception & Admin Wear",
    "Clinic Staff Outfits",
    "Other",
  ],
  Hospitality: [
    "Chef Coats & Aprons",
    "Waitstaff Uniforms",
    "Front Desk & Concierge",
    "Housekeeping Attire",
    "Bar & Lounge Uniforms",
    "Banqueting & Event Wear",
    "Other",
  ],
  "Industrial & Safety": [
    "Heavy-Duty Coveralls",
    "High-Visibility Vests",
    "Flame-Resistant (FR) Wear",
    "Work Wear Trousers & Shirts",
    "Safety Footwear & Gear",
    "Factory & Workshop Apparel",
    "Other",
  ],
  Security: [
    "Security Guard Uniforms",
    "Patrol Uniforms",
    "Tactical Uniforms",
    "Security Shirts & Pants",
    "Security Jackets",
    "Security Caps & Accessories",
    "Other",
  ],
  Education: [
    "Primary School Uniforms",
    "High School & Blazer Kits",
    "PE & Sports Wear",
    "University & Graduation Attire",
    "Staff & Teacher Apparel",
    "Kindergarten Uniforms",
    "Other",
  ],
  "Aviation & Transport": [
    "Pilot & Flight Crew Uniforms",
    "Cabin Crew Wear",
    "Airport Ground Handling Staff",
    "Driver & Logistics Uniforms",
    "Maintenance & Hangar Tech Wear",
    "Customer Service Desk Staff",
    "Other",
  ],
  "Retail & Commercial": [
    "Retail Staff Uniforms",
    "Shopping Mall Uniforms",
    "Sales Executive Uniforms",
    "Cashier Uniforms",
    "Store Staff Uniforms",
    "Supermarket Apparel",
    "Other",
  ],
  "Facility Management": [
    "Cleaning & Janitorial Wear",
    "Maintenance & Tech Coveralls",
    "Property Management Staff",
    "Landscaping & Outdoor Staff",
    "Waste Management Apparel",
    "Front Desk Staff",
    "Other",
  ],
  "Sports & Events": [
    "Sports Jerseys",
    "Team Uniforms",
    "Event Staff Uniforms",
    "Promotional Apparel",
    "Tournament Kits",
    "Referee & Official Attire",
    "Other",
  ],
  Construction: [
    "Construction Coveralls",
    "High-Vis Safety Jackets & Vests",
    "Site Engineer & Supervisor Attire",
    "Heavy Work Trousers",
    "Protective Work Wear",
    "Roadworks & Utility Uniforms",
    "Other",
  ],
  "Printing Services": [
    "Screen Printing",
    "Digital Printing",
    "Heat Transfer Printing",
    "Sublimation Printing",
    "UV Printing",
    "Reflective & Safety Printing",
    "Other",
  ],
  "Embroidery Services": [
    "Logo Embroidery",
    "Name & Badge Embroidery",
    "Patch & Emblem Embroidery",
    "3D / Puff Embroidery",
    "Flat Embroidery",
    "Metallic Thread Embroidery",
    "Other",
  ],
  "Custom Manufacturing": [
    "Custom Fabric Development",
    "Cut & Sew Manufacturing",
    "Bespoke Design & Prototyping",
    "Bulk Uniform Production",
    "Custom Sizing & Tailoring",
    "Private Label Manufacturing",
    "Other",
  ],
  Other: [
    "General Uniform Enquiry",
    "Multiple Service Package",
    "Custom Product Request",
    "Other",
  ],
};

export const PRODUCT_OPTIONS = Array.from(
  new Set(Object.values(PRODUCTS_BY_INDUSTRY).flat())
);

export const TIMELINE_OPTIONS = [
  "Urgent (Within 2 weeks)",
  "Standard (2–4 weeks)",
  "Flexible (4–6 weeks)",
  "Planning ahead (6+ weeks)",
];

export const QUANTITY_OPTIONS = [
  "50–100 units",
  "100–500 units",
  "500–1,000 units",
  "1,000–5,000 units",
  "5,000+ units",
];
