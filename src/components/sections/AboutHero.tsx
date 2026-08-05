"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { BUSINESS } from "@/lib/constants";

// ─── Set this to your image or video filename in /public/ ─────────────────────
//     e.g. HERO_IMAGE = "/images/contact-hero.jpg" or HERO_VIDEO = "/videos/contact-hero.mp4"
//     Set to null to fall back to the plain dark gradient.
const HERO_IMAGE: string | null = "/images/about-hero.jpg";
const HERO_VIDEO: string | null = null;

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0A0A 0%, #111111 55%, #1A1A1A 100%)",
        paddingTop: "calc(var(--header-height) + 3.5rem)",
        paddingBottom: "3.5rem",
      }}
      aria-label="About Amal Uniforms"
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

      {/* Dot-grid texture (only without media) */}
      {!HERO_IMAGE && !HERO_VIDEO && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      )}

      {/* Radial glow accent */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          zIndex: 2,
          background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom relative" style={{ zIndex: 3 }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-display text-white mb-6 leading-tight">
              Crafting Saudi Arabia&rsquo;s{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #A0A0A0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Finest Uniforms
              </span>
            </h1>

            <div className="gold-line-center mb-7" />

            <p className="text-body-large text-white/60 leading-relaxed max-w-2xl mx-auto mb-4">
              {BUSINESS.description}
            </p>
            <p className="text-body text-white/40 max-w-xl mx-auto">
              Founded on a commitment to quality, precision, and pride — Amal
              Uniforms has been dressing Saudi Arabia&rsquo;s finest organisations
              for over 15 years.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
