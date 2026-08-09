import type { Metadata } from "next";
import IndustriesPageContent from "@/components/pages/IndustriesPageContent";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industry Uniforms | Corporate, Healthcare, Hospitality, Security & Workwear | Amal Uniforms",
  description:
    "Explore custom uniform solutions for corporate offices, medical facilities, hotels, security teams, school academic wear, and industrial job sites in Riyadh & across Saudi Arabia.",
  keywords: [
    "industry uniforms Saudi Arabia",
    "corporate uniforms Riyadh",
    "healthcare medical scrubs KSA",
    "hotel hospitality uniforms",
    "security guard apparel Saudi Arabia",
    "industrial workwear coveralls",
    "school academic uniforms",
    "custom uniform manufacturer Riyadh",
  ],
  alternates: {
    canonical: `${BUSINESS.url}/industries`,
  },
  openGraph: {
    title: "Industry Uniform Solutions | Amal Uniforms Saudi Arabia",
    description:
      "Custom uniform design, manufacturing, and supply for corporate, healthcare, hospitality, security, and industrial sectors across KSA.",
    url: `${BUSINESS.url}/industries`,
  },
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
