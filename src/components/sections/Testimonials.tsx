"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const testimonials = [
    {
      id: "t1",
      name: t("testimonials.t1.name"),
      role: t("testimonials.t1.role"),
      company: t("testimonials.t1.company"),
      text: t("testimonials.t1.text"),
    },
    {
      id: "t2",
      name: t("testimonials.t2.name"),
      role: t("testimonials.t2.role"),
      company: t("testimonials.t2.company"),
      text: t("testimonials.t2.text"),
    },
    {
      id: "t3",
      name: t("testimonials.t3.name"),
      role: t("testimonials.t3.role"),
      company: t("testimonials.t3.company"),
      text: t("testimonials.t3.text"),
    },
  ];

  return (
    <section
      className="section-padding bg-warm-50"
      aria-label="Client testimonials"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.testimonials.label")}
          title={t("sections.testimonials.title")}
          subtitle={t("sections.testimonials.subtitle")}
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="p-7 lg:p-8 rounded-xl bg-white border border-warm-200 hover:border-navy-100 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-lg bg-gold-50 text-gold-500 flex items-center justify-center mb-5">
                  <Quote size={20} />
                </div>

                {/* Quote text */}
                <p className="text-body text-charcoal-light/80 leading-relaxed mb-6 flex-1 italic" style={fontStyle}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-warm-200">
                  <div className="font-medium text-navy-950 text-sm" style={fontStyle}>
                    {testimonial.name}
                  </div>
                  <div className="text-small text-charcoal-light/60" style={fontStyle}>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
