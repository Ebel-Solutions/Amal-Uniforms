import { Metadata } from "next";
import { securityData } from "@/data/security";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Security Guard Uniforms | Tactical & Patrol Wear | Amal Uniforms",
  description:
    "Professional security guard uniforms, patrol attire, tactical apparel, and epaulette shirts manufactured in Riyadh for Saudi security firms.",
};

export default function SecurityIndustryPage() {
  return <IndustryPageContent data={securityData} />;
}
