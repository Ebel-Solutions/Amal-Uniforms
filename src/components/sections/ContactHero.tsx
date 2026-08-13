"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { BUSINESS } from "@/lib/constants";

// ─── Set this to your image or video filename in /public/ ─────────────────────
//     e.g. HERO_IMAGE = "/images/contact-hero.jpg" or HERO_VIDEO = "/videos/contact-hero.mp4"
//     Set to null to fall back to the plain dark gradient.
const HERO_IMAGE: string | null = "/images/contact.jpg"; 
const HERO_VIDEO: string | null = null;

export default function ContactHero() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #1A1A1A 100%)",
        paddingTop: "calc(var(--header-height) + 4rem)",
        paddingBottom: "5rem",
      }}
      aria-label="Contact page hero"
    >
      {/* ── Background image or video ─────────────────────────────────────── */}
      {HERO_IMAGE ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.80) 100%)",
            }}
          />
        </>
      ) : HERO_VIDEO ? (
        <>
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.60) 60%, rgba(0,0,0,0.80) 100%)",
            }}
          />
        </>
      ) : null}

      {/* Subtle grid texture (only without media) */}
      {!HERO_IMAGE && !HERO_VIDEO && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      )}

      {/* Radial glow behind heading */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          zIndex: 2,
          background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative" style={{ zIndex: 3 }}>
        <AnimatedSection className="text-center">
          {/* Heading */}
          <h1 className="text-display text-white mb-6 max-w-3xl mx-auto" style={fontStyle}>
            {t("contactPage.heroTitle")}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #C0C0C0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("contactPage.heroTitleHighlight")}
            </span>
          </h1>

          {/* Decorative line */}
          <div className="gold-line-center mb-6" />

          <p className="text-body-large text-white/60 max-w-2xl mx-auto mb-12" style={fontStyle}>
            {t("contactPage.heroDescription")}
          </p>
        </AnimatedSection>

        {/* Quick-stat strip */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Clock size={20} />, label: t("contact.responseTime"), value: t("contact.within24Hours") },
              { icon: <Phone size={20} />, label: t("contact.phone"), value: BUSINESS.phoneFormatted },
              { icon: <Mail size={20} />, label: t("contact.email"), value: "Info@amaluniform.com" },
              { icon: <MapPin size={20} />, label: isRTL ? "الموقع" : "Location", value: isRTL ? "الرياض، المملكة" : "Riyadh, KSA" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 text-gold-400">
                  {item.icon}
                </div>
                <div className="text-label text-white/40 mb-1" style={fontStyle}>{item.label}</div>
                <div className="text-sm font-medium text-white leading-tight" style={fontStyle}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
