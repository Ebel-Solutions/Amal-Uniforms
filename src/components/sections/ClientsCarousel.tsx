"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

// ─── Client Data ──────────────────────────────────────────────────────────────
// Drop your logo files into /public/images/clients/ and update the `logo` paths.
const clients = [
  {
    id: "naqel",
    name: "Naqel Express",
    logo: "/images/clients/naqel.png",
  },
  {
    id: "noon",
    name: "Noon Online Shopping",
    logo: "/images/clients/noon.png",
  },
  {
    id: "golden-chicken",
    name: "Golden Chicken",
    logo: "/images/clients/golden-chicken.png",
  },
  {
    id: "fonte",
    name: "Fonte KSA",
    logo: "/images/clients/fonte.png",
  },
  {
    id: "tanmiah",
    name: "Tanmiah Chicken",
    logo: "/images/clients/tanmiah.png",
  },
  {
    id: "exa",
    name: "Exa Ceramics",
    logo: "/images/clients/exa.png",
  },
  {
    id: "altanfeethi",
    name: "ALTANFEETHI",
    logo: "/images/clients/altanfeethi.png",
  },
  {
    id: "initial",
    name: "Initial Saudi Group",
    logo: "/images/clients/initial-saudi.png",
  },
  {
    id: "sixflags",
    name: "Six Flags Qiddiya City",
    logo: "/images/clients/six-flags.png",
  },
  {
    id: "shell",
    name: "Shell Global",
    logo: "/images/clients/shell.png",
  },
  {
    id: "shell-hyundai",
    name: "Shell & Hyundai",
    logo: "/images/clients/shell-hyundai.png",
  },
  {
    id: "gmc",
    name: "GMC KSA",
    logo: "/images/clients/gmc.png",
  },
];

// Duplicate the array to create a seamless infinite loop
const track = [...clients, ...clients];

export default function ClientsCarousel() {
  return (
    <section
      id="clients"
      className="clients-section"
      aria-label="Our clients"
    >
      {/* Header */}
      <AnimatedSection className="container-custom text-center clients-header">
        <span className="text-label clients-label">Trusted By</span>
        <h2 className="text-heading-2 clients-title">Our Clients</h2>
        <div className="gold-line gold-line-center clients-divider" />
        <p className="text-body clients-subtitle">
          Proud to serve leading brands across Saudi Arabia and the wider GCC
          region.
        </p>
      </AnimatedSection>

      {/* Infinite scrolling track */}
      <div className="clients-marquee-wrapper" aria-hidden="true">
        {/* Fade edges */}
        <div className="clients-fade clients-fade--left" />
        <div className="clients-fade clients-fade--right" />

        <div className="clients-marquee-track">
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
              <span className="clients-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
