import { Metadata } from "next";
import { healthcareData } from "@/data/healthcare";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Healthcare Uniforms | Doctor Coats, Scrubs & Lab Coats | Amal Uniforms",
  description:
    "Explore our complete range of healthcare uniforms, doctor coats, medical scrubs, nurse uniforms, lab coats, and PPE apparel manufactured in Saudi Arabia.",
};

export default function HealthcareIndustryPage() {
  return <IndustryPageContent data={healthcareData} />;
}
