import { Metadata } from "next";
import { corporateData } from "@/data/corporate";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Corporate Uniforms | Executive Wear, Suits & Office Staff | Amal Uniforms",
  description:
    "Explore custom corporate uniforms, executive wear, reception attire, office staff shirts, and suits manufactured in Saudi Arabia by Amal Uniforms.",
};

export default function CorporateIndustryPage() {
  return <IndustryPageContent data={corporateData} />;
}
