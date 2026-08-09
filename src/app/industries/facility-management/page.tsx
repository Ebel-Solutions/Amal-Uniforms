import { Metadata } from "next";
import { facilityManagementData } from "@/data/facility-management";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Facility Management Uniforms | Cleaning & Maintenance Staff | Amal Uniforms",
  description:
    "Cleaning staff uniforms, maintenance workwear, janitorial apparel, and facility management attire manufactured in Riyadh.",
};

export default function FacilityManagementIndustryPage() {
  return <IndustryPageContent data={facilityManagementData} />;
}
