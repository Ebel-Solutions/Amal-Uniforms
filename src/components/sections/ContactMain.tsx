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

// ─── Contact Information cards ───────────────────────────────────────────────

const CONTACT_ITEMS = [
  {
    id: "phone",
    icon: <Phone size={20} />,
    label: "Phone",
    primary: BUSINESS.phoneFormatted,
    secondary: "Sun – Thu, 8:00 AM – 6:00 PM",
    href: BUSINESS.phoneHref,
  },
  {
    id: "email",
    icon: <Mail size={20} />,
    label: "Email",
    primary: BUSINESS.email,
    secondary: "We reply within 24 hours",
    href: BUSINESS.emailHref,
  },
  {
    id: "address",
    icon: <MapPin size={20} />,
    label: "Showroom",
    primary: BUSINESS.address.street,
    secondary: `${BUSINESS.address.area}, ${BUSINESS.address.city}`,
    href: "https://maps.google.com/?q=Malik+Faisal+Bin+Abdul+Aziz+Street+Al+Dheera+Riyadh",
  },
  {
    id: "hours",
    icon: <Clock size={20} />,
    label: "Working Hours",
    primary: "Sunday – Thursday",
    secondary: "8:00 AM – 6:00 PM AST",
    href: null,
  },
] as const;

// ─── Why Contact section items ─────────────────────────────────────────────

const REASONS = [
  "Competitive pricing tailored to your order size",
  "Custom design consultation at no extra charge",
  "Free fabric samples before production",
  "Dedicated account manager from day one",
  "No obligation — just a comprehensive quote",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactMain() {
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
            label="Get Started"
            title="Request a Quote"
            subtitle="Fill out the form and our team will prepare a competitive quote within 24 hours — no obligation."
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
                    <h2 className="font-display text-xl font-semibold mb-1">
                      Contact Information
                    </h2>
                    <p className="text-sm text-white/50 mb-6">
                      Prefer to reach us directly? Here&apos;s how.
                    </p>

                    <div className="space-y-5">
                      {CONTACT_ITEMS.map((item) => {
                        const Inner = (
                          <>
                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-gold-500/20">
                              <span className="text-gold-400">{item.icon}</span>
                            </div>
                            <div className="min-w-0">
                              <div className="text-[11px] uppercase tracking-widest text-white/40 mb-0.5 font-medium">
                                {item.label}
                              </div>
                              <div className="text-sm font-medium text-white truncate transition-colors group-hover:text-gold-400">
                                {item.primary}
                              </div>
                              <div className="text-xs text-white/50 mt-0.5">
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
                      <h3 className="font-medium text-navy-950 text-sm">
                        Why request a quote?
                      </h3>
                    </div>
                    <ul className="space-y-2.5">
                      {REASONS.map((reason) => (
                        <li key={reason} className="flex items-start gap-2.5">
                          <span
                            className="mt-1.5 w-4 h-4 rounded-full bg-navy-950 flex items-center justify-center shrink-0"
                            aria-hidden="true"
                          >
                            <span className="block w-1.5 h-1.5 rounded-full bg-gold-400" />
                          </span>
                          <span className="text-sm text-charcoal-light/70">
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
            label="Find Us"
            title="Visit Our Showroom"
            subtitle="Come see our fabric samples, meet the team, and discuss your requirements in person at our Riyadh showroom."
          />

          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-warm-200 shadow-[var(--shadow-elevated)] grid grid-cols-1 lg:grid-cols-5">
              {/* Info panel */}
              <div className="lg:col-span-2 bg-navy-950 text-white p-8 lg:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="text-label text-gold-400 mb-4">
                    Showroom Address
                  </div>
                  <address className="not-italic space-y-2 mb-6">
                    <p className="text-lg font-display font-semibold leading-snug">
                      {BUSINESS.address.street}
                    </p>
                    <p className="text-white/60 text-sm">
                      {BUSINESS.address.area}, {BUSINESS.address.city}
                    </p>
                    <p className="text-white/60 text-sm">
                      {BUSINESS.address.country}
                    </p>
                  </address>

                  {/* Divider */}
                  <div className="border-t border-white/10 my-6" />

                  <div className="space-y-5">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1 font-medium">
                        Working Hours
                      </div>
                      <div className="text-sm text-white font-medium">
                        Sunday – Thursday
                      </div>
                      <div className="text-sm text-white/60">
                        8:00 AM – 6:00 PM (AST)
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1 font-medium">
                        Phone
                      </div>
                      <a
                        href={BUSINESS.phoneHref}
                        className="text-sm text-white hover:text-gold-400 transition-colors font-medium"
                      >
                        {BUSINESS.phoneFormatted}
                      </a>
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-white/40 mb-1 font-medium">
                        Email
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
                  href="https://maps.google.com/?q=Malik+Faisal+Bin+Abdul+Aziz+Street+Al+Dheera+Riyadh+Saudi+Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Open in Google Maps
                </a>
              </div>

              {/* Embedded map */}
              <div className="lg:col-span-3 min-h-[420px] lg:min-h-[560px] relative">
                <iframe
                  id="store-map"
                  title="Amal Uniforms Showroom Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6898327700847!2d46.71476!3d24.68225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03090e254b77%3A0x9a6d1f92e6b8a8b7!2sMalik%20Faisal%20Bin%20Abdul%20Aziz%20Street%2C%20Al%20Dheera%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1690000000000"
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
                <p className="text-label text-gold-400 mb-2">
                  Prefer a direct conversation?
                </p>
                <h2 className="text-heading-2 text-white">
                  Let&rsquo;s Talk Uniforms
                </h2>
                <p className="text-white/50 text-sm mt-2 max-w-md">
                  Our team is available Sunday to Thursday. Call us or send a
                  WhatsApp message for instant assistance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href={BUSINESS.phoneHref}
                  id="contact-call-btn"
                  className="btn btn-primary gap-2.5 !px-8"
                >
                  <Phone size={18} />
                  Call Now
                </a>
                <a
                  href={BUSINESS.emailHref}
                  id="contact-email-btn"
                  className="btn btn-secondary gap-2.5 !px-8"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
