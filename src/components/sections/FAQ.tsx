"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, isRTL } = useLanguage();

  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const faqItems = [
    { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
    { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
    { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
    { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
    { question: t("faq.q5.question"), answer: t("faq.q5.answer") },
    { question: t("faq.q6.question"), answer: t("faq.q6.answer") },
    { question: t("faq.q7.question"), answer: t("faq.q7.answer") },
    { question: t("faq.q8.question"), answer: t("faq.q8.answer") },
  ];

  return (
    <section
      id="faq"
      className="section-padding bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.faq.label")}
          title={t("sections.faq.title")}
          subtitle={t("sections.faq.subtitle")}
        />

        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div
                className={`border-b border-warm-200 ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between py-5 lg:py-6 text-left group cursor-pointer"
                  style={isRTL ? { textAlign: "right" } : {}}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-[15px] lg:text-base font-medium text-navy-950 pr-8 group-hover:text-navy-700 transition-colors"
                    style={fontStyle}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-navy-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    openIndex === index
                      ? "max-h-64 opacity-100 pb-5 lg:pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p
                    className="text-body text-charcoal-light/70 leading-relaxed pr-12"
                    style={fontStyle}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
