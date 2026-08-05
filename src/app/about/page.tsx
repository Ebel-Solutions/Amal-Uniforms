import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/AboutHero";
import AboutStory from "@/components/sections/AboutStory";
import AboutStats from "@/components/sections/AboutStats";
import AboutValues from "@/components/sections/AboutValues";
import AboutProcess from "@/components/sections/AboutProcess";
import AboutTestimonials from "@/components/sections/AboutTestimonials";
import AboutCTA from "@/components/sections/AboutCTA";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn the story behind ${BUSINESS.tradingName} — Saudi Arabia's premier uniform manufacturer. ${BUSINESS.description}`,
  keywords: [
    "about Amal Uniforms",
    "uniform manufacturer Saudi Arabia",
    "Riyadh uniform factory",
    "Saudi uniform company history",
    "Tailor Amal Omar Sulaiman",
    "custom uniform manufacturer KSA",
  ],
  alternates: {
    canonical: `${BUSINESS.url}/about`,
  },
  openGraph: {
    title: "About Amal Uniforms — Saudi Arabia's Premier Uniform Manufacturer",
    description:
      "Discover the craftsmanship, values, and 15+ years of experience behind Amal Uniforms — proudly manufacturing premium uniforms from Riyadh.",
    url: `${BUSINESS.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <AboutHero />
        <AboutStory />
        <AboutStats />
        <AboutValues />
        <AboutProcess />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
