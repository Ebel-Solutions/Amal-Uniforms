"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white" aria-label="Frequently asked questions">
      <div className="container-custom">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our uniform services, ordering process, and delivery."
        />

        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((faq, index) => (
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
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-[15px] lg:text-base font-medium text-navy-950 pr-8 group-hover:text-navy-700 transition-colors">
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
                  <p className="text-body text-charcoal-light/70 leading-relaxed pr-12">
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
