"use client";

import { SERVICES } from "@/lib/constants";
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

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={28} />,
  Boxes: <Boxes size={28} />,
  Sparkles: <Sparkles size={28} />,
  Layers: <Layers size={28} />,
  Ruler: <Ruler size={28} />,
  Truck: <Truck size={28} />,
};

export default function FeaturedServices() {
  return (
    <section id="services" className="section-padding bg-white" aria-label="Our services">
      <div className="container-custom">
        <SectionHeading
          label="Services"
          title="End-to-End Uniform Solutions"
          subtitle="From initial design consultation to final delivery, we handle every aspect of your uniform programme."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group p-7 lg:p-8 rounded-xl border border-warm-200 hover:border-navy-200 bg-warm-50 hover:bg-white transition-all duration-300 hover:shadow-[var(--shadow-card-hover)]">
                <div className="w-14 h-14 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-display text-lg lg:text-xl font-semibold text-navy-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-body text-charcoal-light/70 leading-relaxed">
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
