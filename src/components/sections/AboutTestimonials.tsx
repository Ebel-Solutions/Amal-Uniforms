"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";

// Star renderer
function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gold-500"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function AboutTestimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
      aria-label="Client testimonials"
    >
      <div className="container-custom">
        <SectionHeading
          label="Client Stories"
          title="Trusted Across the Kingdom"
          subtitle="Our uniforms speak for themselves — but we'll let our clients tell the story."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <article className="flex flex-col h-full bg-warm-50 border border-warm-200 rounded-2xl p-7 lg:p-8 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-350">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-navy-950 text-white flex items-center justify-center shrink-0">
                    <Quote size={18} />
                  </div>
                  <Stars />
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-body text-charcoal-light/75 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <footer className="pt-5 border-t border-warm-200 flex items-center gap-3">
                  {/* Avatar placeholder with initials */}
                  <div className="w-10 h-10 rounded-full bg-navy-950 text-white text-sm font-bold flex items-center justify-center shrink-0 font-display">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-950 text-sm leading-tight">
                      {t.name}
                    </div>
                    <div className="text-xs text-charcoal-light/55 mt-0.5">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </footer>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
