import { Metadata } from "next";
import { hospitalityData } from "@/data/hospitality";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Hospitality Uniforms | Hotel Staff, Chef Jackets & Waiter Wear | Amal Uniforms",
  description:
    "Custom hotel and restaurant uniforms, chef jackets, waiter/waitress attire, housekeeping wear, and catering apparel manufactured in Riyadh.",
};

export default function HospitalityIndustryPage() {
  return <IndustryPageContent data={hospitalityData} />;
}
