"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { GALLERY_CATEGORIES } from "@/data/gallery";
import { useLanguage } from "@/lib/LanguageContext";

// ─── Set this to your image or video filename in /public/ ─────────────────────
//     e.g. HERO_IMAGE = "/images/gallery-hero.jpg" or HERO_VIDEO = "/videos/gallery-hero.mp4"
//     Set to null to fall back to the plain dark gradient.
const HERO_IMAGE: string | null = "/images/gallery-hero.jpg";
const HERO_VIDEO: string | null = null;

export default function GalleryHero() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #111111 55%, #1A1A1A 100%)",
        paddingTop: "calc(var(--header-height) + 3.5rem)",
        paddingBottom: "3.5rem",
      }}
      aria-label="Gallery page hero"
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
          {/* Dark overlay so text stays readable */}
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

      {/* Dot-grid texture (only shown without media) */}
      {!HERO_IMAGE && !HERO_VIDEO && (
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      )}

      {/* Top-centre radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom relative" style={{ zIndex: 3 }}>
        <AnimatedSection className="text-center">
          <h1 className="text-display text-white mb-6 max-w-3xl mx-auto leading-tight" style={fontStyle}>
            {t("galleryPage.heroTitle")}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #909090 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("galleryPage.heroTitleHighlight")}
            </span>
          </h1>

          <div className="gold-line-center mb-6" />

          <p className="text-body-large text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed" style={fontStyle}>
            {t("galleryPage.heroDescription")}
          </p>

          {/* Category pill strip */}
          <div className="flex flex-wrap justify-center gap-3">
            {GALLERY_CATEGORIES.map((cat) => {
              let label = cat.label;
              if (isRTL) {
                if (cat.id === "store") label = "المعرض والمتاجر";
                else if (cat.id === "uniforms") label = "الزي الموحد";
                else if (cat.id === "shoes") label = "الأحذية";
                else if (cat.id === "embroidery") label = "التطريز";
              }
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/8 border border-white/12 text-white/70 text-sm hover:bg-white/15 hover:text-white hover:border-white/25 transition-all duration-250"
                  style={fontStyle}
                >
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
