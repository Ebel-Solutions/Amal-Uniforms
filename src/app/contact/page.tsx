import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/ContactHero";
import ContactMain from "@/components/sections/ContactMain";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with Amal Uniforms — Request a quote for custom uniforms or visit our showroom at ${BUSINESS.address.full}. We respond within 24 hours.`,
  keywords: [
    "contact Amal Uniforms",
    "uniform quote Riyadh",
    "custom uniform enquiry",
    "Amal Uniforms address",
    "uniform supplier contact Saudi Arabia",
  ],
  alternates: {
    canonical: `${BUSINESS.url}/contact`,
  },
  openGraph: {
    title: "Contact Amal Uniforms — Request a Quote",
    description:
      "Reach out to Saudi Arabia's premier uniform manufacturer. Request a competitive quote, visit our showroom, or simply ask a question.",
    url: `${BUSINESS.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <ContactHero />
        <ContactMain />
      </main>
      <Footer />
    </>
  );
}
