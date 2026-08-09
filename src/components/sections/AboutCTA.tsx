"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BUSINESS } from "@/lib/constants";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutCTA() {
  const { t, isRTL } = useLanguage();

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  return (
    <section
      className="section-padding bg-navy-950 relative overflow-hidden"
      aria-label="Work with Amal Uniforms"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/industries/corporatess.png"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-950/80" />
      </div>

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl">
            <span className="text-label text-gold-400 block mb-5" style={fontStyle}>
              {t("about.ctaLabel")}
            </span>

            <h2 className="text-heading-1 text-white mb-6 leading-tight" style={fontStyle}>
              {t("about.ctaTitle")}
            </h2>

            <div className="gold-line mb-8" />

            <p className="text-body-large text-white/60 mb-10 max-w-2xl leading-relaxed" style={fontStyle}>
              {t("about.ctaSubtitle")}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="/contact#quote"
                id="about-cta-quote"
                className="btn btn-primary group gap-2.5 !px-8 !py-4"
                style={fontStyle}
              >
                {t("about.getQuote")}
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                  style={isRTL ? { transform: "rotate(180deg)" } : {}}
                />
              </a>
              <a
                href={BUSINESS.phoneHref}
                id="about-cta-call"
                className="btn btn-secondary gap-2.5 !px-8 !py-4"
                style={fontStyle}
              >
                <Phone size={18} />
                {t("about.callUsNow")}
              </a>
            </div>

            {/* Quick contact strip */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <Phone size={15} />
                {BUSINESS.phoneFormatted}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <Mail size={15} />
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
