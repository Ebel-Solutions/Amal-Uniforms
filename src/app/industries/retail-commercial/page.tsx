import { Metadata } from "next";
import { retailCommercialData } from "@/data/retail-commercial";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Retail & Commercial Staff Uniforms | Branded Apparel | Amal Uniforms",
  description:
    "Custom retail staff polo shirts, shopping mall staff uniforms, cashier attire, and store manager apparel manufactured in Saudi Arabia.",
};

export default function RetailCommercialIndustryPage() {
  return <IndustryPageContent data={retailCommercialData} />;
}
