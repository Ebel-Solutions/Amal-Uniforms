"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { ArrowRight, Paintbrush, Shirt } from "lucide-react";

export default function Customisation() {
  return (
    <section className="section-padding bg-warm-50" aria-label="Customisation services">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/manufacturing/embroidery.png"
              alt="Custom embroidery service at Amal Uniforms"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
            <div className="max-w-2xl">
              <AnimatedSection>
                <span className="text-label text-gold-400 mb-4 block">
                  Customisation
                </span>
                <h2 className="text-heading-1 text-white mb-6">
                  Your Brand, Perfectly Embroidered
                </h2>
                <p className="text-body-large text-white/70 mb-8 max-w-xl">
                  From logo embroidery and screen printing to custom colour
                  matching and bespoke design — we bring your brand identity to
                  life on every garment.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold-400">
                      <Paintbrush size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Logo Embroidery
                      </div>
                      <div className="text-xs text-white/50">
                        Machine & hand stitching
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-gold-400">
                      <Shirt size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">
                        Custom Colours
                      </div>
                      <div className="text-xs text-white/50">
                        Pantone matching
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <a
                  href="/#quote"
                  className="btn btn-primary group"
                >
                  Discuss Customisation
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
