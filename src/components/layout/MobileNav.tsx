"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NAV_ITEMS, BUSINESS } from "@/lib/constants";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
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

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { t, isRTL } = useLanguage();

  const arabicFontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif" }
    : {};

  // Mount only after hydration so document is available
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll on both html + body (required for iOS Safari)
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen, mounted]);

  // Close sub-menu when menu closes
  useEffect(() => {
    if (!isOpen) setOpenSubMenu(null);
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const content = (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99990,
          backgroundColor: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
          display: undefined,
        }}
        className="lg:hidden"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          maxHeight: "85vh",
          backgroundColor: "#000000",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "0 0 16px 16px",
          overflow: "hidden",
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "transform 0.3s ease, opacity 0.3s ease",
          willChange: "transform",
          direction: isRTL ? "rtl" : "ltr",
        }}
        className="lg:hidden"
      >
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.1)", flexShrink: 0 }}>
          <a href="/" onClick={onClose} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <img src="/images/logo/amal-logo.png" alt="Amal Uniforms Logo" className="h-10 w-auto object-contain invert" />
          </a>
          <button
            type="button"
            onClick={onClose}
            onTouchEnd={(e) => { e.preventDefault(); onClose(); }}
            style={{ padding: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "none", color: "rgba(255,255,255,0.9)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", touchAction: "manipulation" }}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav
          style={{ flex: 1, overflowY: "auto", padding: "8px 24px", WebkitOverflowScrolling: "touch" }}
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isExpanded = openSubMenu === item.label;
            const translatedLabel = NAV_LABEL_MAP[item.label]
              ? t(NAV_LABEL_MAP[item.label])
              : item.label;

            return (
              <div key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "10px 0" }}>
                {hasChildren ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenSubMenu(isExpanded ? null : item.label)}
                      aria-expanded={isExpanded}
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", background: "none", border: "none", color: "#ffffff", fontSize: "16px", fontWeight: 600, padding: "4px 0", cursor: "pointer", touchAction: "manipulation", textAlign: isRTL ? "right" : "left", ...arabicFontStyle }}
                    >
                      <span>{translatedLabel}</span>
                      <ChevronDown
                        size={18}
                        style={{ transition: "transform 0.2s", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", color: "#ffffff" }}
                      />
                    </button>
                    <div style={{ overflow: "hidden", maxHeight: isExpanded ? "2500px" : "0", opacity: isExpanded ? 1 : 0, transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
                      <div
                        style={{
                          paddingLeft: isRTL ? "0" : "12px",
                          paddingRight: isRTL ? "12px" : "0",
                          paddingTop: "8px",
                          paddingBottom: "6px",
                          display: "grid",
                          gridTemplateColumns: item.children!.length > 10 ? "repeat(2, 1fr)" : "1fr",
                          gap: "8px 10px",
                        }}
                      >
                        {item.children!.map((child) => {
                          const childTranslated = t(`subnav.${child.label}`);
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={onClose}
                              style={{
                                fontSize: "13.5px",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.9)",
                                textDecoration: "none",
                                display: "block",
                                lineHeight: 1.3,
                                ...arabicFontStyle,
                              }}
                            >
                              {childTranslated}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={onClose}
                    style={{ display: "block", padding: "4px 0", fontSize: "16px", fontWeight: 600, color: "#ffffff", textDecoration: "none", ...arabicFontStyle }}
                  >
                    {translatedLabel}
                  </a>
                )}
              </div>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div style={{ padding: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.95)", borderRadius: "0 0 16px 16px", flexShrink: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
            <a
              href={BUSINESS.phoneHref}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px 12px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "12px", fontWeight: 500, color: "#ffffff", textDecoration: "none", ...arabicFontStyle }}
            >
              <Phone size={14} />
              <span>{t("nav.callUs")}</span>
            </a>
            <a
              href={BUSINESS.emailHref}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "10px 12px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "12px", fontWeight: 500, color: "#ffffff", textDecoration: "none", ...arabicFontStyle }}
            >
              <Mail size={14} />
              <span>{t("nav.emailUs")}</span>
            </a>
          </div>
          <a
            href="/contact#quote"
            onClick={onClose}
            className="btn btn-primary"
            style={{ display: "block", textAlign: "center", width: "100%", padding: "10px", fontSize: "12px", fontWeight: 600, ...arabicFontStyle }}
          >
            {t("nav.requestAQuote")}
          </a>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
}



