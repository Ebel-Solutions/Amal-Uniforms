"use client";

import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-50" aria-label="Client testimonials">
      <div className="container-custom">
        <SectionHeading
          label="Testimonials"
          title="Trusted by Leading Saudi Businesses"
          subtitle="Hear from our clients about their experience working with Amal Uniforms."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <div className="p-7 lg:p-8 rounded-xl bg-white border border-warm-200 hover:border-navy-100 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-lg bg-gold-50 text-gold-500 flex items-center justify-center mb-5">
                  <Quote size={20} />
                </div>

                {/* Quote text */}
                <p className="text-body text-charcoal-light/80 leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-warm-200">
                  <div className="font-medium text-navy-950 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-small text-charcoal-light/60">
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
