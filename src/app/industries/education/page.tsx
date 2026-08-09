import { Metadata } from "next";
import { educationData } from "@/data/education";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "School & Academic Uniforms | University & Staff Apparel | Amal Uniforms",
  description:
    "Custom school uniforms, college apparel, university graduation gowns, and educational staff wear manufactured in Saudi Arabia.",
};

export default function EducationIndustryPage() {
  return <IndustryPageContent data={educationData} />;
}
