import { Metadata } from "next";
import { aviationTransportData } from "@/data/aviation-transport";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Aviation & Transport Uniforms | Airline Crew & Pilot Wear | Amal Uniforms",
  description:
    "Airline crew uniforms, pilot suits, cabin crew attire, airport ground staff wear, and logistics driver uniforms manufactured in Riyadh.",
};

export default function AviationTransportIndustryPage() {
  return <IndustryPageContent data={aviationTransportData} />;
}
