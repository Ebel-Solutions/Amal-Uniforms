"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function ManufacturingProcess() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const steps = [
    { step: 1, title: t("manufacturingSteps.consultation.title"), description: t("manufacturingSteps.consultation.description") },
    { step: 2, title: t("manufacturingSteps.design.title"), description: t("manufacturingSteps.design.description") },
    { step: 3, title: t("manufacturingSteps.fabricSelection.title"), description: t("manufacturingSteps.fabricSelection.description") },
    { step: 4, title: t("manufacturingSteps.manufacturing.title"), description: t("manufacturingSteps.manufacturing.description") },
    { step: 5, title: t("manufacturingSteps.qualityControl.title"), description: t("manufacturingSteps.qualityControl.description") },
    { step: 6, title: t("manufacturingSteps.delivery.title"), description: t("manufacturingSteps.delivery.description") },
  ];

  return (
    <section
      id="manufacturing"
      className="section-padding bg-white"
      aria-label="Manufacturing process"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.manufacturing.label")}
          title={t("sections.manufacturing.title")}
          subtitle={t("sections.manufacturing.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <Image
                src="/images/manufacturing/workshop.png"
                alt="Amal Uniforms manufacturing workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-100 rounded-2xl -z-10 hidden lg:block" />
          </AnimatedSection>

          {/* Timeline */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.step}
                delay={index * 0.1}
                className="relative pl-12 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[18px] top-10 bottom-0 w-px bg-warm-300" />
                )}

                {/* Step number circle */}
                <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-navy-950 text-gold-400 text-sm font-bold flex items-center justify-center">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-navy-950 mb-1.5" style={fontStyle}>
                  {step.title}
                </h3>
                <p className="text-body text-charcoal-light/70" style={fontStyle}>
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
