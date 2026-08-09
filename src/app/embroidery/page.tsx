import { Metadata } from "next";
import EmbroideryPageContent from "@/components/pages/EmbroideryPageContent";

export const metadata: Metadata = {
  title: "Embroidery Services | Logo, Name & Custom Embroidery | Amal Uniforms",
  description:
    "Professional computerized embroidery services in Riyadh — corporate logo embroidery, name stitching, cap embroidery, 3D puff, woven labels, patches and more. Bulk orders across Saudi Arabia.",
};

export default function EmbroideryPage() {
  return <EmbroideryPageContent />;
}
