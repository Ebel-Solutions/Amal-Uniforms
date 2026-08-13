"use client";

import { BUSINESS, NAV_ITEMS, INDUSTRIES } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const NAV_LABEL_MAP: Record<string, string> = {
  Home: "nav.home",
  Industries: "nav.industries",
  Printing: "nav.printing",
  Embroidery: "nav.embroidery",
  "Custom Manufacturing": "nav.customManufacturing",
  Profession: "nav.profession",
  Gallery: "nav.gallery",
  About: "nav.about",
  Contact: "nav.contact",
};

const INDUSTRY_KEY_MAP: Record<string, string> = {
  corporate: "industryCards.corporate.title",
  healthcare: "industryCards.healthcare.title",
  hospitality: "industryCards.hospitality.title",
  industrial: "industryCards.industrial.title",
  security: "industryCards.security.title",
  education: "industryCards.education.title",
  aviation: "industryCards.aviation.title",
  retail: "industryCards.retail.title",
  "facility-management": "industryCards.facilityManagement.title",
  "sports-events": "industryCards.sportsEvents.title",
  construction: "industryCards.construction.title",
};

export default function Footer() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  return (
    <footer
      className="bg-navy-950 text-white"
      role="contentinfo"
    >
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/images/logo/Amal%20Logo.png"
                alt="Amal Uniforms Logo"
                className="h-24 w-auto object-contain invert"
              />
            </div>
            <p className="text-body text-white/60 mb-6 max-w-xs" style={fontStyle}>
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Phone size={16} className="shrink-0" />
                {BUSINESS.phoneFormatted}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                {BUSINESS.email}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span style={fontStyle}>{BUSINESS.address.full}</span>
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-label text-gold-400 mb-5" style={fontStyle}>
              {t("nav.industries")}
            </h3>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <a
                    href={industry.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={fontStyle}
                  >
                    {INDUSTRY_KEY_MAP[industry.id]
                      ? t(INDUSTRY_KEY_MAP[industry.id])
                      : industry.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-label text-gold-400 mb-5" style={fontStyle}>
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={fontStyle}
                  >
                    {NAV_LABEL_MAP[item.label] ? t(NAV_LABEL_MAP[item.label]) : item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact#quote"
                  className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium"
                  style={fontStyle}
                >
                  {t("nav.requestAQuote")}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-label text-gold-400 mb-5" style={fontStyle}>
              {t("nav.contact")}
            </h3>
            <p className="text-sm text-white/60 mb-6" style={fontStyle}>
              {t("footer.description")}
            </p>
            <a
              href="/contact#quote"
              className="btn btn-primary !text-sm w-full sm:w-auto"
              style={fontStyle}
            >
              {t("nav.requestAQuote")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-small text-white/40" style={fontStyle}>
            © {new Date().getFullYear()} {BUSINESS.registeredName}. {t("footer.allRightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-small text-white/40 hover:text-white/60 transition-colors"
              style={fontStyle}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-small text-white/40 hover:text-white/60 transition-colors"
              style={fontStyle}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
