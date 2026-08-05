import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryHero from "@/components/sections/GalleryHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Browse Amal Uniforms' portfolio — professional uniforms, our Riyadh showroom, and footwear collections crafted for businesses across Saudi Arabia.`,
  keywords: [
    "uniform gallery Saudi Arabia",
    "Amal Uniforms portfolio",
    "custom uniform photos Riyadh",
    "corporate uniform samples KSA",
    "uniform showroom photos",
  ],
  alternates: {
    canonical: `${BUSINESS.url}/gallery`,
  },
  openGraph: {
    title: "Gallery — Amal Uniforms Portfolio",
    description:
      "Explore our portfolio of premium uniforms, store interiors, and footwear collections crafted for 500+ Saudi businesses.",
    url: `${BUSINESS.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </>
  );
}
