"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  Heart,
  Shield,
  Lightbulb,
  Users,
  Leaf,
  Star,
} from "lucide-react";

const VALUES = [
  {
    icon: <Star size={26} />,
    title: "Uncompromising Quality",
    description:
      "Every garment leaves our facility only after passing rigorous quality checks. We hold ourselves to the highest standard because your brand depends on it.",
    accent: "#111111",
  },
  {
    icon: <Heart size={26} />,
    title: "Client-First Service",
    description:
      "We listen before we design. Our dedicated account managers ensure every requirement — from sizing to brand colours — is captured and delivered perfectly.",
    accent: "#111111",
  },
  {
    icon: <Shield size={26} />,
    title: "Integrity in Every Stitch",
    description:
      "Honest pricing, transparent timelines, and no hidden charges. We build long-term relationships by delivering exactly what we promise.",
    accent: "#111111",
  },
  {
    icon: <Lightbulb size={26} />,
    title: "Innovative Design",
    description:
      "Our design team stays ahead of trends while respecting cultural sensitivities — creating uniforms that are modern, functional, and distinctly Saudi.",
    accent: "#111111",
  },
  {
    icon: <Users size={26} />,
    title: "Community & Pride",
    description:
      "As a Saudi-owned, Saudi-operated business we invest in local talent, train skilled artisans, and take pride in contributing to the Kingdom's growth.",
    accent: "#111111",
  },
  {
    icon: <Leaf size={26} />,
    title: "Responsible Sourcing",
    description:
      "We source fabrics from certified suppliers that meet quality and environmental standards, ensuring our garments are safe for people and the planet.",
    accent: "#111111",
  },
];

export default function AboutValues() {
  return (
    <section
      id="our-values"
      className="section-padding bg-navy-950 relative overflow-hidden"
      aria-label="Our values"
    >
      {/* Decorative dot matrix */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow top-right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-custom relative z-10">
        <SectionHeading
          label="Our Values"
          title="What Drives Everything We Do"
          subtitle="Six core principles guide every decision at Amal Uniforms — from how we design to how we deliver."
          light
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {VALUES.map((value, i) => (
            <StaggerItem key={value.title}>
              <div className="group relative p-7 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/15 transition-all duration-400 h-full flex flex-col overflow-hidden">
                {/* Top accent line that reveals on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-white/0 group-hover:bg-white/20 transition-all duration-500"
                  style={{ transitionDelay: `${i * 30}ms` }}
                />

                <div className="w-12 h-12 rounded-xl bg-white/8 text-white flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors duration-300">
                  {value.icon}
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-white/50 leading-relaxed flex-1 group-hover:text-white/65 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
