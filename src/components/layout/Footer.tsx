import { BUSINESS, NAV_ITEMS, INDUSTRIES } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                AMAL
              </span>
              <span className="block text-xs tracking-[0.25em] uppercase text-gold-400">
                UNIFORMS
              </span>
            </div>
            <p className="text-body text-white/60 mb-6 max-w-xs">
              {BUSINESS.description}
            </p>
            <div className="space-y-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Phone size={16} className="shrink-0" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.emailHref}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold-400 transition-colors"
              >
                <Mail size={16} className="shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>{BUSINESS.address.full}</span>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-label text-gold-400 mb-5">Industries</h3>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <a
                    href={industry.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {industry.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-label text-gold-400 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact#quote"
                  className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-label text-gold-400 mb-5">Get in Touch</h3>
            <p className="text-sm text-white/60 mb-6">
              Ready to outfit your team? Contact us for a free consultation and
              competitive pricing on custom uniforms.
            </p>
            <a
              href="/contact#quote"
              className="btn btn-primary !text-sm w-full sm:w-auto"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-small text-white/40">
            © {new Date().getFullYear()} {BUSINESS.registeredName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-small text-white/40 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-small text-white/40 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
