"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { BUSINESS } from "@/lib/constants";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function AboutCTA() {
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
            <span className="text-label text-gold-400 block mb-5">
              Ready to Get Started?
            </span>

            <h2 className="text-heading-1 text-white mb-6 leading-tight">
              Partner with Saudi Arabia&rsquo;s Most Trusted Uniform Manufacturer
            </h2>

            <div className="gold-line mb-8" />

            <p className="text-body-large text-white/60 mb-10 max-w-2xl leading-relaxed">
              Whether you need 50 uniforms or 50,000 — our team is ready to
              bring your vision to life. Request a quote today and receive a
              detailed response within 24 hours, at no obligation.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="/contact#quote"
                id="about-cta-quote"
                className="btn btn-primary group gap-2.5 !px-8 !py-4"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={BUSINESS.phoneHref}
                id="about-cta-call"
                className="btn btn-secondary gap-2.5 !px-8 !py-4"
              >
                <Phone size={18} />
                Call Us Now
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
