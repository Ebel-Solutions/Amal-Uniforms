"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, BUSINESS } from "@/lib/constants";
import { Phone, ChevronDown, Menu, Globe } from "lucide-react";
import MobileNav from "./MobileNav";
import { useLanguage } from "@/lib/LanguageContext";

// Map of English nav labels → translation key path within translations.nav
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

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { t, toggleLanguage, language, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Transparent gradient header allowed only on Home, About, Gallery, and Contact pages when at top
  const isTransparentAllowed =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/gallery" ||
    pathname === "/contact";

  const isBlackHeader = isScrolled || !isTransparentAllowed;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 transition-colors duration-300"
        style={{
          zIndex: 9000,
          background: isBlackHeader ? "#000000" : "transparent",
          borderBottom: isBlackHeader ? "1px solid rgba(255,255,255,0.1)" : "none",
          boxShadow: isBlackHeader ? "0 4px 20px rgba(0,0,0,0.8)" : "none",
        }}
        role="banner"
      >
        {/* Full-width nav row */}
        <div
          className="flex lg:grid h-[72px] lg:h-20 w-full px-6 lg:px-10 justify-between lg:justify-normal items-center"
          style={{ gridTemplateColumns: "1fr auto 1fr" }}
        >
          {/* Logo + Language Toggle — left column */}
          <div className="flex items-center gap-3 justify-self-start self-center">
            <a href="/" className="flex items-center gap-2">
              <img
                src="/images/logo/amal-logo.png"
                alt="Amal Uniforms Logo"
                className="h-10 lg:h-12 w-auto object-contain invert"
              />
            </a>
            {/* Desktop Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
              className="hidden lg:flex items-center gap-1.5"
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "none",
                color: "rgba(255,255,255,0.85)",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily:
                  language === "en"
                    ? "'Noto Sans Arabic', 'Segoe UI', sans-serif"
                    : undefined,
              }}
            >
              <Globe size={14} />
              {language === "en" ? "عربي" : "EN"}
            </button>
          </div>

          {/* Desktop Navigation — dead center of viewport */}
          <nav
            className="hidden lg:flex items-center gap-0.5 justify-self-center self-center"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const translatedLabel = NAV_LABEL_MAP[item.label]
                ? t(NAV_LABEL_MAP[item.label])
                : item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200 whitespace-nowrap"
                    style={{ fontFamily: isRTL ? "'Noto Sans Arabic', 'Segoe UI', sans-serif" : undefined }}
                  >
                    {translatedLabel}
                    {hasChildren && (
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </a>

                  {/* Multi-column Dropdown */}
                  {hasChildren && activeDropdown === item.label && (
                    <div
                      className="absolute top-full pt-2 z-50"
                      style={{
                        width: "max-content",
                        left: item.children!.length > 25 ? "50%" : "0%",
                        transform: item.children!.length > 25 ? "translateX(-50%)" : "none",
                      }}
                    >
                      <div
                        className="bg-white rounded-2xl shadow-2xl border border-warm-200/80 p-3 backdrop-blur-md"
                        style={{ width: "max-content" }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns:
                              item.children!.length > 25
                                ? "repeat(4, max-content)"
                                : item.children!.length > 10
                                  ? "repeat(2, max-content)"
                                  : "repeat(1, max-content)",
                            gap: "2px 14px",
                          }}
                        >
                          {item.children!.map((child) => {
                            const childTranslated = t(`subnav.${child.label}`);
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                className="flex items-center px-3 py-1.5 text-[13px] font-medium text-gray-800 hover:bg-black hover:text-white rounded-lg transition-colors whitespace-nowrap"
                                style={{ fontFamily: isRTL ? "'Noto Sans Arabic', 'Segoe UI', sans-serif" : undefined, textAlign: isRTL ? "right" : "left" }}
                              >
                                {childTranslated}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop CTA — extreme right (or left in RTL) */}
          <div className="hidden lg:flex items-center gap-3 justify-self-end self-center">
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call ${BUSINESS.phoneFormatted}`}
              title={`Call ${BUSINESS.phoneFormatted}`}
              className="p-2.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 border border-white/20 transition-colors flex items-center justify-center"
            >
              <Phone size={16} />
            </a>
            <a href="/contact#quote" className="btn btn-primary !py-2 !px-5 !text-sm whitespace-nowrap">
              {t("nav.requestQuote")}
            </a>
          </div>

          {/* Mobile: Call icon & hamburger */}
          <div
            className="flex lg:hidden items-center gap-2"
            style={{ position: "relative", zIndex: 9001 }}
          >
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
              style={{
                padding: "6px 10px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "none",
                color: "rgba(255,255,255,0.85)",
                fontSize: "11px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontFamily:
                  language === "en"
                    ? "'Noto Sans Arabic', 'Segoe UI', sans-serif"
                    : undefined,
              }}
            >
              <Globe size={12} />
              {language === "en" ? "عربي" : "EN"}
            </button>

            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call ${BUSINESS.phoneFormatted}`}
              title={`Call ${BUSINESS.phoneFormatted}`}
              style={{ touchAction: "manipulation" }}
              className="p-2 rounded-full text-white/90 border border-white/20 flex items-center justify-center"
            >
              <Phone size={17} />
            </a>
            <button
              id="mobile-menu-btn"
              type="button"
              style={{ touchAction: "manipulation", position: "relative", zIndex: 9001 }}
              className="p-2.5 rounded-lg text-white flex items-center justify-center bg-white/10"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}
