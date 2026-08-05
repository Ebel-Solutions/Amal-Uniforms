"use client";

import { VALUE_PROPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  MapPin,
  Gem,
  Award,
  BarChart3,
  Clock,
  UserCheck,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin size={24} />,
  Gem: <Gem size={24} />,
  Award: <Award size={24} />,
  BarChart3: <BarChart3 size={24} />,
  Clock: <Clock size={24} />,
  UserCheck: <UserCheck size={24} />,
};

export default function WhyAmal() {
  return (
    <section
      id="why-amal"
      className="section-padding bg-navy-950 relative overflow-hidden"
      aria-label="Why choose Amal Uniforms"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Why Choose Us"
          title="The Amal Advantage"
          subtitle="We combine Saudi-based manufacturing with premium materials and dedicated service to deliver uniforms that set your team apart."
          light
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VALUE_PROPS.map((prop) => (
            <StaggerItem key={prop.title}>
              <div className="p-7 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                  {iconMap[prop.icon]}
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-body text-white/55 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
