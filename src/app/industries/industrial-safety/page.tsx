import { Metadata } from "next";
import { industrialSafetyData } from "@/data/industrial-safety";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Industrial & Safety Workwear | Coveralls & Flame Resistant Wear | Amal Uniforms",
  description:
    "Heavy-duty industrial coveralls, factory uniforms, high-visibility clothing, and flame-resistant safety apparel manufactured in Saudi Arabia.",
};

export default function IndustrialSafetyIndustryPage() {
  return <IndustryPageContent data={industrialSafetyData} />;
}
