"use client";

import { BUSINESS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactMain() {
  const { t, isRTL } = useLanguage();

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  const contactItems = [
    {
      id: "phone",
      icon: <Phone size={20} />,
      label: t("contact.phone"),
      primary: BUSINESS.phoneFormatted,
      secondary: isRTL ? "الأحد – الخميس، 8:00 صباحاً – 6:00 مساءً" : "Sun – Thu, 8:00 AM – 6:00 PM",
      href: BUSINESS.phoneHref,
    },
    {
      id: "email",
      icon: <Mail size={20} />,
      label: t("contact.email"),
      primary: BUSINESS.email,
      secondary: t("contact.replyTime"),
      href: BUSINESS.emailHref,
    },
    {
      id: "address",
      icon: <MapPin size={20} />,
      label: t("contact.showroom"),
      primary: BUSINESS.address.street,
      secondary: `${BUSINESS.address.area}, ${BUSINESS.address.city}`,
      href: BUSINESS.mapsUrl,
    },
    {
      id: "hours",
      icon: <Clock size={20} />,
      label: t("contact.workingHours"),
      primary: t("contact.workingDays"),
      secondary: t("contact.workingTime"),
      href: null,
    },
  ];

  const reasons = [
    t("contact.competitivePricing"),
    t("contact.customDesignConsultation"),
    t("contact.freeFabricSamples"),
    isRTL ? "مدير حساب مخصص من اليوم الأول" : "Dedicated account manager from day one",
    t("contact.noObligation"),
  ];

  return (
    <>
      {/* ── Section 1: Request a Quote + Contact Info ─────────────────────── */}
      <section
        id="quote"
        className="section-padding bg-warm-50"
        aria-label="Request a quote"
      >
        <div className="container-custom">
          <SectionHeading
            label={t("sections.finalCta.label")}
            title={t("sections.finalCta.title")}
            subtitle={t("contact.fillOutForm")}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* ── Quote Form ── */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white rounded-2xl border border-warm-200 p-6 md:p-8 lg:p-10 shadow-[var(--shadow-card)]">
                  <QuoteForm />
                </div>
              </AnimatedSection>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="sticky top-28 space-y-6">
                  {/* Contact info card */}
                  <div className="bg-navy-950 rounded-2xl p-7 lg:p-8 text-white">
                    <h2 className="font-display text-xl font-semibold mb-1" style={fontStyle}>
                      {t("contact.contactInfo")}
                    </h2>
                    <p className="text-sm text-white/50 mb-6" style={fontStyle}>
                      {isRTL ? "تفضل التواصل معنا مباشرة؟ إليك الطرق." : "Prefer to reach us directly? Here's how."}
                    </p>

                    <div className="space-y-5">
                      {contactItems.map((item) => {
                        const Inner = (
                          <>
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold-500/20">
                              <span className="text-gold-400">{item.icon}</span>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[11px] uppercase tracking-widest text-white/40 mb-0.5 font-medium" style={fontStyle}>
                                {item.label}
                              </div>
                              <div className="text-sm font-medium text-white truncate transition-colors group-hover:text-gold-400" style={fontStyle}>
                                {item.primary}
                              </div>
                              <div className="text-xs text-white/50 mt-0.5" style={fontStyle}>
                                {item.secondary}
                              </div>
                            </div>
                          </>
                        );

                        return item.href ? (
                          <a
                            key={item.id}
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-start gap-4 group"
                          >
                            {Inner}
                          </a>
                        ) : (
                          <div key={item.id} className="flex items-start gap-4">
                            {Inner}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Why request a quote */}
                  <div className="bg-white rounded-xl border border-warm-200 p-6 shadow-[var(--shadow-card)]">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-navy-950 flex items-center justify-center">
                        <MessageSquare size={15} className="text-gold-400" />
                      </div>
                      <h3 className="font-medium text-navy-950 text-sm" style={fontStyle}>
                        {t("contact.whyRequestQuote")}
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {reasons.map((reason) => (
                        <li key={reason} className="flex items-start gap-2.5">
                          <span
                            className="mt-1.5 w-4 h-4 rounded-full bg-navy-950 flex items-center justify-center shrink-0"
                            aria-hidden="true"
                          >
                            <span className="block w-1.5 h-1.5 rounded-full bg-gold-400" />
                          </span>
                          <span className="text-sm text-charcoal-light/70" style={fontStyle}>
                            {reason}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Store Location + Map ──────────────────────────────── */}
      <section
        id="find-us"
        className="section-padding bg-white"
        aria-label="Store location and map"
      >
        <div className="container-custom">
          <SectionHeading
            label={isRTL ? "موقعنا" : "Find Us"}
            title={isRTL ? "تفضل بزيارة معرضنا" : "Visit Our Showroom"}
            subtitle={isRTL ? "تعال لمشاهدة عينات الأقمشة والالتقاء بالفريق ومناقشة متطلباتك شخصياً في معرضنا بالرياض." : "Come see our fabric samples, meet the team, and discuss your requirements in person at our Riyadh showroom."}
          />

          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-warm-200 shadow-[var(--shadow-elevated)] grid grid-cols-1 lg:grid-cols-5">
              {/* Info panel */}
              <div className="lg:col-span-2 bg-navy-950 text-white p-8 lg:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="text-label text-gold-400 mb-4" style={fontStyle}>
                    {isRTL ? "عنوان المعرض" : "Showroom Address"}
                  </div>
                  <address className="not-italic space-y-2 mb-6">
                    <p className="text-lg font-display font-semibold leading-snug" style={fontStyle}>
                      {BUSINESS.address.street}
                    </p>
                    <p className="text-white/60 text-sm" style={fontStyle}>
                      {BUSINESS.address.area}, {BUSINESS.address.city}
                    </p>
                    <p className="text-white/60 text-sm" style={fontStyle}>
                      {BUSINESS.address.country}
                    </p>
                  </address>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-6" />

                  <div className="space-y-5">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1 font-medium" style={fontStyle}>
                        {t("contact.workingHours")}
                      </div>
                      <div className="text-sm text-white font-medium" style={fontStyle}>
                        {t("contact.workingDays")}
                      </div>
                      <div className="text-sm text-white/60" style={fontStyle}>
                        {t("contact.workingTime")}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1 font-medium" style={fontStyle}>
                        {t("contact.phone")}
                      </div>
                      <a
                        href={BUSINESS.phoneHref}
                        className="text-sm text-white hover:text-gold-400 transition-colors font-medium"
                      >
                        {BUSINESS.phoneFormatted}
                      </a>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1 font-medium" style={fontStyle}>
                        {t("contact.email")}
                      </div>
                      <a
                        href={BUSINESS.emailHref}
                        className="text-sm text-white hover:text-gold-400 transition-colors font-medium"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center gap-2"
                  style={fontStyle}
                >
                  <ExternalLink size={16} />
                  {isRTL ? "افتح في خرائط جوجل" : "Open in Google Maps"}
                </a>
              </div>

              {/* Embedded map */}
              <div className="lg:col-span-3 min-h-[420px] lg:min-h-[560px] relative">
                <iframe
                  id="store-map"
                  title="Amal Uniforms Showroom Location"
                  src={BUSINESS.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "420px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing Amal Uniforms showroom location on Malik Faisal Bin Abdul Aziz Street, Al Dheera, Riyadh"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Section 3: Direct Contact CTA strip ────────────────────────── */}
      <section
        className="bg-navy-950 py-16"
        aria-label="Direct contact options"
      >
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-label text-gold-400 mb-2" style={fontStyle}>
                  {isRTL ? "تفضل تواصل مباشر؟" : "Prefer a direct conversation?"}
                </p>
                <h2 className="text-heading-2 text-white" style={fontStyle}>
                  {isRTL ? "دعنا نتحدث عن الزي الموحد" : "Let's Talk Uniforms"}
                </h2>
                <p className="text-white/50 text-sm mt-2 max-w-md" style={fontStyle}>
                  {isRTL ? "فريقنا متاح من الأحد إلى الخميس. اتصل بنا للحصول على مساعدة فورية." : "Our team is available Sunday to Thursday. Call us or send an email for instant assistance."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href={BUSINESS.phoneHref}
                  id="contact-call-btn"
                  className="btn btn-primary gap-2.5 !px-8"
                  style={fontStyle}
                >
                  <Phone size={18} />
                  {isRTL ? "اتصل الآن" : "Call Now"}
                </a>
                <a
                  href={BUSINESS.emailHref}
                  id="contact-email-btn"
                  className="btn btn-secondary gap-2.5 !px-8"
                  style={fontStyle}
                >
                  <Mail size={18} />
                  {t("nav.emailUs")}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
