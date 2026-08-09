"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutProcess() {
  const { t, isRTL } = useLanguage();

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  const steps = [
    { step: 1, title: t("manufacturingSteps.consultation.title"), description: t("manufacturingSteps.consultation.description") },
    { step: 2, title: t("manufacturingSteps.design.title"), description: t("manufacturingSteps.design.description") },
    { step: 3, title: t("manufacturingSteps.fabricSelection.title"), description: t("manufacturingSteps.fabricSelection.description") },
    { step: 4, title: t("manufacturingSteps.manufacturing.title"), description: t("manufacturingSteps.manufacturing.description") },
    { step: 5, title: t("manufacturingSteps.qualityControl.title"), description: t("manufacturingSteps.qualityControl.description") },
    { step: 6, title: t("manufacturingSteps.delivery.title"), description: t("manufacturingSteps.delivery.description") },
  ];

  const chips = [
    { v: "50+", l: isRTL ? "أدنى كمية" : "Min Order" },
    { v: isRTL ? "2–4 أسابيع" : "2–4 wks", l: isRTL ? "مدة التسليم" : "Turnaround" },
    { v: "100%", l: isRTL ? "مفحوص بالجودة" : "QC Inspected" },
  ];

  return (
    <section
      id="our-process"
      className="section-padding bg-warm-50"
      aria-label="Our manufacturing process"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("about.processLabel")}
          title={t("about.processTitle")}
          subtitle={t("about.processSubtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Timeline ── */}
          <div className="space-y-0">
            {steps.map((step, index) => (
              <AnimatedSection
                key={step.step}
                delay={index * 0.08}
                className="relative pl-14 pb-10 last:pb-0"
              >
                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[21px] top-11 bottom-0 w-px bg-gradient-to-b from-navy-950/30 to-transparent" />
                )}

                {/* Step bubble */}
                <div className="absolute left-0 top-0 w-[42px] h-[42px] rounded-full bg-navy-950 text-white text-sm font-bold font-display flex items-center justify-center shadow-[0_0_0_4px_#F0F0F0]">
                  {step.step}
                </div>

                <h3 className="font-display text-lg font-semibold text-navy-950 mb-1.5 leading-snug" style={fontStyle}>
                  {step.title}
                </h3>
                <p className="text-body text-charcoal-light/65 leading-relaxed" style={fontStyle}>
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* ── Image stack ── */}
          <AnimatedSection direction="right" className="sticky top-28">
            <div className="space-y-4">
              {/* Primary image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                <Image
                  src="/images/manufacturing/workshop.png"
                  alt="Amal Uniforms production floor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs rounded-xl px-3 py-1.5 font-medium" style={fontStyle}>
                  {isRTL ? "منطقة الإنتاج الرئيسي — الرياض" : "Production Floor — Riyadh"}
                </div>
              </div>

              {/* Secondary image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <Image
                  src="/images/manufacturing/embroidery.png"
                  alt="Logo embroidery precision work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs rounded-xl px-3 py-1.5 font-medium" style={fontStyle}>
                  {isRTL ? "دقة التطريز للشعارات" : "Embroidery Detail Work"}
                </div>
              </div>

              {/* Inline stat chips */}
              <div className="grid grid-cols-3 gap-3">
                {chips.map((s) => (
                  <div
                    key={s.l}
                    className="bg-white border border-warm-200 rounded-xl p-4 text-center shadow-[var(--shadow-card)]"
                  >
                    <div className="font-display font-bold text-navy-950 text-lg" style={fontStyle}>
                      {s.v}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-charcoal-light/50 mt-0.5" style={fontStyle}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
