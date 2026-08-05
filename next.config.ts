import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536, 1920, 2560],
    minimumCacheTTL: process.env.NODE_ENV === "development" ? 0 : 86400,
  },

  // Add long-lived cache headers for static assets (images, videos, fonts)
  async headers() {
    return [
      {
        // Videos and large static media — cache aggressively
        source: "/images/banner_videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // All images in /images — cache for 7 days
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        // All videos in /videos — cache aggressively
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
