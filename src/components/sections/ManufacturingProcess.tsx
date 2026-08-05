"use client";

import { MANUFACTURING_STEPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function ManufacturingProcess() {
  return (
    <section
      id="manufacturing"
      className="section-padding bg-white"
      aria-label="Manufacturing process"
    >
      <div className="container-custom">
        <SectionHeading
          label="Process"
          title="From Concept to Delivery"
          subtitle="Our streamlined manufacturing process ensures quality at every stage, from initial consultation to final delivery."
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
            {MANUFACTURING_STEPS.map((step, index) => (
              <AnimatedSection
                key={step.step}
                delay={index * 0.1}
                className="relative pl-12 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {index < MANUFACTURING_STEPS.length - 1 && (
                  <div className="absolute left-[18px] top-10 bottom-0 w-px bg-warm-300" />
                )}

                {/* Step number circle */}
                <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-navy-950 text-gold-400 text-sm font-bold flex items-center justify-center">
                  {step.step}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-navy-950 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-body text-charcoal-light/70">
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
