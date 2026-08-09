import { Metadata } from "next";
import { constructionData } from "@/data/construction";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Construction Workwear | Heavy Duty & High Vis Apparel | Amal Uniforms",
  description:
    "Heavy-duty construction site workwear, engineer uniforms, high-visibility vests, and safety apparel manufactured in Riyadh.",
};

export default function ConstructionIndustryPage() {
  return <IndustryPageContent data={constructionData} />;
}
