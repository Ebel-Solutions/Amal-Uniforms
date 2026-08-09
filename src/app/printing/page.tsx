import { Metadata } from "next";
import PrintingPageContent from "@/components/pages/PrintingPageContent";

export const metadata: Metadata = {
  title: "Printing Services | Screen, DTG, Heat Transfer & Sublimation | Amal Uniforms",
  description:
    "Professional garment printing services in Riyadh, Saudi Arabia — logo screen printing, DTG digital printing, heat transfer, and sublimation printing for corporate uniforms, promotional apparel, and branded workwear.",
};

export default function PrintingPage() {
  return <PrintingPageContent />;
}
