"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Palette,
  Boxes,
  Sparkles,
  Layers,
  Ruler,
  Truck,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={28} />,
  Boxes: <Boxes size={28} />,
  Sparkles: <Sparkles size={28} />,
  Layers: <Layers size={28} />,
  Ruler: <Ruler size={28} />,
  Truck: <Truck size={28} />,
};

export default function FeaturedServices() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const services = [
    { id: "custom-design", icon: "Palette", title: t("services.customDesign.title"), description: t("services.customDesign.description") },
    { id: "bulk-orders", icon: "Boxes", title: t("services.bulkOrders.title"), description: t("services.bulkOrders.description") },
    { id: "logo-embroidery", icon: "Sparkles", title: t("services.logoEmbroidery.title"), description: t("services.logoEmbroidery.description") },
    { id: "fabric-selection", icon: "Layers", title: t("services.premiumFabrics.title"), description: t("services.premiumFabrics.description") },
    { id: "tailored-fitting", icon: "Ruler", title: t("services.tailoredFitting.title"), description: t("services.tailoredFitting.description") },
    { id: "delivery", icon: "Truck", title: t("services.ksaDelivery.title"), description: t("services.ksaDelivery.description") },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-white"
      aria-label="Our services"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.services.label")}
          title={t("sections.services.title")}
          subtitle={t("sections.services.subtitle")}
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group p-7 lg:p-8 rounded-xl border border-warm-200 hover:border-navy-200 bg-warm-50 hover:bg-white transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]">
                <div className="w-14 h-14 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-display text-lg lg:text-xl font-semibold text-navy-950 mb-3" style={fontStyle}>
                  {service.title}
                </h3>
                <p className="text-body text-charcoal-light/70 leading-relaxed" style={fontStyle}>
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
