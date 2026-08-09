import { Metadata } from "next";
import { sportsEventsData } from "@/data/sports-events";
import IndustryPageContent from "@/components/pages/IndustryPageContent";

export const metadata: Metadata = {
  title: "Sports & Event Staff Uniforms | Team & Event Apparel | Amal Uniforms",
  description:
    "Custom team uniforms, event staff attire, exhibition apparel, and volunteer t-shirts manufactured in Saudi Arabia.",
};

export default function SportsEventsIndustryPage() {
  return <IndustryPageContent data={sportsEventsData} />;
}
