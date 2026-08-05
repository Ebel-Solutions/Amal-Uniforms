// ─── Gallery Data ─────────────────────────────────────────────────────────────
//
// HOW TO ADD IMAGES:
// 1. Drop your image file into the matching folder inside /public/images/gallery/
//    ├── /public/images/gallery/store/       ← store / showroom photos
//    ├── /public/images/gallery/uniforms/    ← uniform photos
//    └── /public/images/gallery/shoes/       ← shoes / footwear photos
//
// 2. Add an entry below in the correct category array.
//    Required fields:  id (unique), src (path from /public), alt (description)
//    Optional fields:  span ("wide" makes the card span 2 columns on desktop)
//
// 3. Save — the gallery page updates automatically.
// ─────────────────────────────────────────────────────────────────────────────

export type GallerySpan = "normal" | "wide" | "tall";

export interface GalleryImage {
  /** Unique ID — used as React key and for accessibility */
  id: string;
  /** Path relative to /public, e.g. "/images/gallery/store/showroom-1.jpg" */
  src: string;
  /** Descriptive alt text for accessibility and SEO */
  alt: string;
  /**
   * Optional layout span hint:
   *   "normal" — standard 1×1 card (default)
   *   "wide"   — spans 2 columns (use for landscape hero shots)
   *   "tall"   — spans 2 rows (use for portrait detail shots)
   */
  span?: GallerySpan;
}

export interface GalleryCategory {
  /** URL-safe slug used for tab routing, e.g. "store" */
  id: string;
  /** Display name shown on the tab pill */
  label: string;
  /** Short description shown under the section heading */
  description: string;
  /** All images in this category */
  images: GalleryImage[];
}

// ─── ADD / EDIT CATEGORIES HERE ──────────────────────────────────────────────

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  // ── Store / Showroom ─────────────────────────────────────────────────────
  {
    id: "store",
    label: "Store & Showroom",
    description:
      "Take a look inside our Riyadh showroom — where clients browse fabrics, review samples, and consult with our design team.",
    images: [
      {
        id: "store-1",
        src: "/images/gallery/store/st1.jpg",
        alt: "Amal Uniforms showroom interior — fabric display area",
        span: "wide",
      },
      {
        id: "store-2",
        src: "/images/gallery/store/st2.jpg",
        alt: "Embroidery machine at Amal Uniforms workshop",
        span: "wide"
      },
      {
        id: "store-3",
        src: "/images/gallery/store/st3.jpg",
        alt: "Corporate uniform display at Amal Uniforms showroom",
        span: "wide"
      },
      {
        id: "store-4",
        src: "/images/gallery/store/st4.jpg",
        alt: "Hospitality uniform samples in the showroom",
        span: "wide"
      },
      {
        id: "store-5",
        src: "/images/gallery/store/st5.jpg",
        alt: "Security uniform display",
        span: "wide"
      },
      {
        id: "store-6",
        src: "/images/gallery/store/st6.jpg",
        alt: "Security uniform display",
        span: "wide",
      },
    ],
  },

  // ── Uniforms ─────────────────────────────────────────────────────────────
  {
    id: "uniforms",
    label: "Uniforms",
    description:
      "A showcase of our custom uniform work across industries — corporate, healthcare, hospitality, and more.",
    images: [
      {
        id: "uniform-1",
        src: "/images/gallery/uniforms/u1.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-2",
        src: "/images/gallery/uniforms/u2.jpg",
        alt: "Medical scrubs for healthcare professionals",
      },
      {
        id: "uniform-3",
        src: "/images/gallery/uniforms/u3.jpg",
        alt: "Hospitality uniforms for hotel and restaurant staff",
      },
      {
        id: "uniform-4",
        src: "/images/gallery/uniforms/u4.jpg",
        alt: "Security uniforms — durable and authoritative",
      },
      {
        id: "uniform-5",
        src: "/images/gallery/uniforms/u5.jpg",
        alt: "Industrial workwear and coveralls",
      },
      {
        id: "uniform-6",
        src: "/images/gallery/uniforms/u6.jpg",
        alt: "School uniforms for educational institutions",
      },
      {
        id: "uniform-7",
        src: "/images/gallery/uniforms/u7.jpg",
        alt: "Aviation uniforms for airline crew",
        span: "wide",
      },
      {
        id: "uniform-8",
        src: "/images/gallery/uniforms/u8.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-9",
        src: "/images/gallery/uniforms/u9.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-10",
        src: "/images/gallery/uniforms/u10.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-11",
        src: "/images/gallery/uniforms/u11.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-12",
        src: "/images/gallery/uniforms/u12.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-13",
        src: "/images/gallery/uniforms/u13.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-14",
        src: "/images/gallery/uniforms/u14.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-15",
        src: "/images/gallery/uniforms/u15.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-16",
        src: "/images/gallery/uniforms/u16.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-17",
        src: "/images/gallery/uniforms/u17.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-18",
        src: "/images/gallery/uniforms/u18.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-19",
        src: "/images/gallery/uniforms/u19.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-20",
        src: "/images/gallery/uniforms/u20.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
      {
        id: "uniform-21",
        src: "/images/gallery/uniforms/u21.jpg",
        alt: "Corporate suits and blazers for executive teams",
        span: "tall",
      },
    ],
  },

  // ── Shoes / Footwear ─────────────────────────────────────────────────────
  {
    id: "shoes",
    label: "Shoes",
    description:
      "Complementing every uniform — professional footwear options available to complete the look for your team.",
    images: [
      {
        id: "shoes-1",
        src: "/images/gallery/shoes/s1.jpg",
        alt: "Formal black Oxford shoes for corporate teams",
        span: "wide",
      },
      {
        id: "shoes-2",
        src: "/images/gallery/shoes/s2.jpg",
        alt: "Safety boots for industrial and security personnel",
      },
      {
        id: "shoes-3",
        src: "/images/gallery/shoes/s3.jpg",
        alt: "Medical clogs and non-slip footwear for healthcare staff",
      },
      {
        id: "shoes-4",
        src: "/images/gallery/shoes/s4.jpg",
        alt: "Elegant court shoes for hospitality teams",
      },
      {
        id: "shoes-5",
        src: "/images/gallery/shoes/s5.jpg",
        alt: "Elegant court shoes for hospitality teams",
      },
      {
        id: "shoes-6",
        src: "/images/gallery/shoes/s6.jpg",
        alt: "Elegant court shoes for hospitality teams",
      },
      {
        id: "shoes-7",
        src: "/images/gallery/shoes/s7.jpg",
        alt: "Elegant court shoes for hospitality teams",
      },
      {
        id: "shoes-8",
        src: "/images/gallery/shoes/s8.jpg",
        alt: "Elegant court shoes for hospitality teams",
      },
      {
        id: "shoes-9",
        src: "/images/gallery/shoes/s9.jpg",
        alt: "Elegant court shoes for hospitality teams",
      },
    ],
  },

  {
    id: "embroidery",
    label: "Embroidery",
    description:
      "Complementing every uniform — professional embroidery options available to complete the look for your team.",
    images: [
      {
        id: "embroidery-1",
        src: "/images/gallery/embroidery/e1.jpg",
        alt: "Formal black Oxford shoes for corporate teams",
        span: "wide",
      },
      {
        id: "embroidery-2",
        src: "/images/gallery/embroidery/e2.jpg",
        alt: "Safety boots for industrial and security personnel",
      },
    ],
  },
];

// ─── Helper: get a category by id ────────────────────────────────────────────
export function getGalleryCategory(id: string): GalleryCategory | undefined {
  return GALLERY_CATEGORIES.find((c) => c.id === id);
}

// ─── Helper: get all images across every category (for "All" tab) ─────────────
export function getAllGalleryImages(): GalleryImage[] {
  return GALLERY_CATEGORIES.flatMap((c) =>
    c.images.map((img) => ({ ...img, id: `${c.id}-${img.id}` }))
  );
}
