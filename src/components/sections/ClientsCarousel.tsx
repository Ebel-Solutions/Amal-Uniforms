"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function ClientsCarousel() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif" }
    : {};

  // ─── Client Data ─────────────────────────────────────────────────────────────
  // Drop logo files into /public/images/clients/ matching the `logo` filenames.
  const clients = [
    { id: "naqel",         name: t("clients.naqel"),         logo: "/images/clients/naqel.png" },
    { id: "noon",          name: t("clients.noon"),          logo: "/images/clients/noon.png" },
    { id: "goldenChicken", name: t("clients.goldenChicken"), logo: "/images/clients/golden-chicken.png" },
    { id: "fonte",         name: t("clients.fonte"),         logo: "/images/clients/fonte.png" },
    { id: "tanmiah",       name: t("clients.tanmiah"),       logo: "/images/clients/tanmiah.png" },
    { id: "exa",           name: t("clients.exa"),           logo: "/images/clients/exa.png" },
    { id: "altanfeethi",   name: t("clients.altanfeethi"),   logo: "/images/clients/altanfeethi.png" },
    { id: "initial",       name: t("clients.initial"),       logo: "/images/clients/initial-saudi.png" },
    { id: "sixFlags",      name: t("clients.sixFlags"),      logo: "/images/clients/six-flags.png" },
    { id: "shell",         name: t("clients.shell"),         logo: "/images/clients/shell.png" },
    { id: "shellHyundai",  name: t("clients.shellHyundai"),  logo: "/images/clients/shell-hyundai.png" },
    { id: "gmc",           name: t("clients.gmc"),           logo: "/images/clients/gmc.png" },
  ];

  // Duplicate for seamless infinite loop
  const track = [...clients, ...clients];

  return (
    <section
      id="clients"
      className="clients-section"
      aria-label={t("sections.clients.title")}
    >
      {/* Header */}
      <AnimatedSection className="container-custom text-center clients-header">
        <span className="text-label clients-label" style={fontStyle}>
          {t("sections.clients.label")}
        </span>
        <h2 className="text-heading-2 clients-title" style={fontStyle}>
          {t("sections.clients.title")}
        </h2>
        <div className="gold-line gold-line-center clients-divider" />
        <p className="text-body clients-subtitle" style={fontStyle}>
          {t("sections.clients.subtitle")}
        </p>
      </AnimatedSection>

      {/* Infinite scrolling track */}
      <div className="clients-marquee-wrapper" aria-hidden="true">
        {/* Fade edges */}
        <div className="clients-fade clients-fade--left" />
        <div className="clients-fade clients-fade--right" />

        <div
          className="clients-marquee-track"
          style={isRTL ? { animationDirection: "reverse" } : {}}
        >
          {track.map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="clients-card"
              title={client.name}
            >
              <div className="clients-logo-wrap">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="clients-logo-img"
                  sizes="120px"
                />
              </div>
              <span className="clients-name" style={fontStyle}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
