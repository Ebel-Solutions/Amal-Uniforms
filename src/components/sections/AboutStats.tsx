"use client";

import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Briefcase, Building2, Shirt } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const STAT_ICONS = [
  <Award key="award" size={24} className="text-gold-400" />,
  <Briefcase key="briefcase" size={24} className="text-gold-400" />,
  <Building2 key="building" size={24} className="text-gold-400" />,
  <Shirt key="shirt" size={24} className="text-gold-400" />,
];

export default function AboutStats() {
  const { t, isRTL } = useLanguage();

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "center" as const }
    : {};

  const stats = [
    { value: "15+", label: t("trust.yearsExperience") },
    { value: "12", label: t("trust.industriesServed") },
    { value: "500+", label: t("trust.businessClients") },
    { value: "100K+", label: t("trust.uniformsDelivered") },
  ];

  return (
    <section className="py-16 md:py-20 bg-navy-950 text-white relative overflow-hidden" aria-label="Our Achievements in Numbers">
      {/* Background subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          label={t("about.statsLabel")}
          title={t("about.statsTitle")}
          subtitle={t("about.statsSubtitle")}
          light
        />

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <StaggerItem key={stat.label}>
              <div className="group text-center bg-white/5 border border-white/10 hover:border-gold-400/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {STAT_ICONS[idx % STAT_ICONS.length]}
                </div>
                <div
                  className="font-display font-bold text-white mb-2 tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", ...fontStyle }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs md:text-sm uppercase tracking-widest text-white/50 font-medium group-hover:text-gold-400 transition-colors"
                  style={fontStyle}
                >
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
