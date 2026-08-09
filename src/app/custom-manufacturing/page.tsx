import { Metadata } from "next";
import CustomManufacturingPageContent from "@/components/pages/CustomManufacturingPageContent";

export const metadata: Metadata = {
  title: "Custom Uniform Manufacturing | Design, Patterning & Bulk Production | Amal Uniforms",
  description:
    "End-to-end custom uniform manufacturing in Riyadh, Saudi Arabia — custom design, prototyping, sample development, CAD pattern making, private labeling, and enterprise bulk production.",
};

export default function CustomManufacturingPage() {
  return <CustomManufacturingPageContent />;
}
