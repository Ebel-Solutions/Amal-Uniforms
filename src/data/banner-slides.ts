// ─── Banner Slides Data ───────────────────────────────────────────────────────
// All banner slides are stored here for easy access and editing.
// Each slide can use a background image or video (swap `bgImage` for `bgVideo`).

export interface BannerSlide {
  id: number;
  /** Small label text shown below the title */
  subtitle: string;
  /** Main headline */
  title: string;
  /** CTA button label */
  buttonText: string;
  /** CTA button href */
  buttonLink: string;

  /**
   * Path to a background IMAGE (relative to /public).
   * Example: "/images/banner/slide-1.jpg"
   * Used when bgVideo is not set.
   */
  bgImage?: string;

  /**
   * Path to a background IMAGE shown ONLY on mobile devices (relative to /public).
   * Example: "/images/banner/mobile/slide-1.jpg"
   * When set, this image replaces the bgVideo/bgImage on screens < 768 px.
   */
  bgImageMobile?: string;

  /**
   * Path to a background VIDEO (relative to /public).
   * Example: "/images/vid.mp4"
   * Supported formats: mp4, webm.
   * When set, the video plays automatically, muted, and loops.
   * bgVideo takes priority over bgImage if both are set.
   */
  bgVideo?: string;
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    subtitle: "Corporate Uniform",
    title: "The Visual Language of Business",
    buttonText: "Shop Now",
    buttonLink: "/#products",
    bgVideo: "/images/banner_videos/suit.mp4",
    // ↓ Replace with your actual mobile image path inside /public
    bgImageMobile: "/images/banner/mobile/slide-1.png",
  },
  {
    id: 2,
    subtitle: "Healthcare Uniform",
    title: "Dressed for Care, Built for Comfort",
    buttonText: "Explore Collection",
    buttonLink: "/#products",
    bgVideo: "/images/banner_videos/doctor.mp4",
    // ↓ Replace with your actual mobile image path inside /public
    bgImageMobile: "/images/banner/mobile/slide-2.png",
  },
  {
    id: 3,
    subtitle: "Industrial Workwear",
    title: "Protection Meets Professionalism",
    buttonText: "Get a Quote",
    buttonLink: "/contact#quote",
    bgVideo: "/images/banner_videos/engineer.mp4",
    // ↓ Replace with your actual mobile image path inside /public
    bgImageMobile: "/images/banner/mobile/slide-3.png",
  },
];
