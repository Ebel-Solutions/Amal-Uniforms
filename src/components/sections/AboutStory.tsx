"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const STORY_HIGHLIGHTS = [
  "Founded in Riyadh with a single sewing machine and a vision",
  "Grew to serve 500+ businesses across the Kingdom",
  "Expanded into 12 industries including healthcare, aviation, and hospitality",
  "Invested in industrial-grade equipment for large-scale precision manufacturing",
  "Trusted by government entities, hospitals, hotels, and Fortune-500 companies",
];

export default function AboutStory() {
  return (
    <section
      id="our-story"
      className="section-padding bg-white"
      aria-label="Our story"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Image column ── */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <Image
                src="/images/manufacturing/workshop.png"
                alt="Amal Uniforms manufacturing workshop in Riyadh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle dark vignette at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-white/10 text-white rounded-2xl px-5 py-4">
                <div className="font-display text-3xl font-bold text-white">15+</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-0.5">
                  Years of Craftsmanship
                </div>
              </div>
            </div>

            {/* Decorative offset accent */}
            <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-warm-100 rounded-3xl -z-10 hidden lg:block" />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-navy-950 rounded-2xl -z-10 hidden lg:block opacity-10" />
          </AnimatedSection>

          {/* ── Text column ── */}
          <div className="space-y-8">
            <AnimatedSection direction="right">
              <span className="text-label text-gold-600 block mb-4">Who We Are</span>
              <h2 className="text-heading-1 text-navy-950 mb-6">
                A Legacy Built on Quality & Precision
              </h2>
              <div className="gold-line mb-8" />
              <div className="space-y-4 text-body text-charcoal-light/75 leading-relaxed">
                <p>
                  Amal Uniforms began as a small tailoring atelier in the heart of
                  Riyadh, built on a simple belief: that every professional
                  deserves a uniform they are proud to wear. Over 15 years, that
                  belief has shaped everything we do.
                </p>
                <p>
                  Today we operate a full-scale manufacturing facility on{" "}
                  <strong className="text-navy-950 font-medium">
                    Malik Faisal Bin Abdul Aziz Street, Al Dheera
                  </strong>
                  , serving organisations across Saudi Arabia — from hospitals and
                  hotels to airlines and government entities.
                </p>
                <p>
                  Our team of experienced designers, pattern-makers, and tailors
                  work with industrial-grade precision while preserving the
                  artisanal care that sets our garments apart.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <ul className="space-y-3">
                {STORY_HIGHLIGHTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-navy-950 mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-charcoal-light/70">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
