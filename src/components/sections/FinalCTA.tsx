"use client";

import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FinalCTA() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  return (
    <section
      id="quote"
      className="section-padding bg-warm-50"
      aria-label="Request a quote"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.finalCta.label")}
          title={t("sections.finalCta.title")}
          subtitle={t("sections.finalCta.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-warm-200 p-6 md:p-8 lg:p-10 shadow-[var(--shadow-card)]">
                <QuoteForm />
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.2}>
              <div className="sticky top-28 space-y-8">
                {/* Contact card */}
                <div className="bg-navy-950 rounded-2xl p-7 lg:p-8 text-white">
                  <h3 className="font-display text-xl font-semibold mb-6" style={fontStyle}>
                    {t("contact.contactInfo")}
                  </h3>

                  <div className="space-y-5">
                    <a
                      href={BUSINESS.phoneHref}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                        <Phone size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-small text-white/50 mb-0.5" style={fontStyle}>{t("contact.phone")}</div>
                        <div className="text-sm font-medium group-hover:text-gold-400 transition-colors">
                          {BUSINESS.phoneFormatted}
                        </div>
                      </div>
                    </a>

                    <a
                      href={BUSINESS.emailHref}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                        <Mail size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-small text-white/50 mb-0.5" style={fontStyle}>{t("contact.email")}</div>
                        <div className="text-sm font-medium group-hover:text-gold-400 transition-colors">
                          {BUSINESS.email}
                        </div>
                      </div>
                    </a>

                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group/addr"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover/addr:bg-gold-500/20 transition-colors">
                        <MapPin size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-small text-white/50 mb-0.5" style={fontStyle}>{t("contact.address")}</div>
                        <div className="text-sm text-white/80 group-hover/addr:text-white transition-colors">
                          {BUSINESS.address.street}
                          <br />
                          {BUSINESS.address.area}, {BUSINESS.address.city}
                          <br />
                          {BUSINESS.address.country}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-small text-white/50 mb-0.5" style={fontStyle}>
                          {t("contact.responseTime")}
                        </div>
                        <div className="text-sm text-white/80" style={fontStyle}>
                          {t("contact.within24Hours")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick note */}
                <div className="bg-gold-50 rounded-xl p-6 border border-gold-200">
                  <h4 className="font-medium text-navy-950 mb-2 text-sm" style={fontStyle}>
                    {t("contact.whyRequestQuote")}
                  </h4>
                  <ul className="space-y-2 text-small text-charcoal-light/70">
                    <li className="flex items-start gap-2" style={fontStyle}>
                      <span className="text-gold-600 mt-1">•</span>
                      {t("contact.competitivePricing")}
                    </li>
                    <li className="flex items-start gap-2" style={fontStyle}>
                      <span className="text-gold-600 mt-1">•</span>
                      {t("contact.customDesignConsultation")}
                    </li>
                    <li className="flex items-start gap-2" style={fontStyle}>
                      <span className="text-gold-600 mt-1">•</span>
                      {t("contact.freeFabricSamples")}
                    </li>
                    <li className="flex items-start gap-2" style={fontStyle}>
                      <span className="text-gold-600 mt-1">•</span>
                      {t("contact.noObligation")}
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
