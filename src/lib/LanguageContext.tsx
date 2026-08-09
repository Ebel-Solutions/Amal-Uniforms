"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Language } from "@/lib/translations";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LanguageContextValue {
  language: Language;
  isRTL: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  /** Translate a dot-notated key, e.g. t("nav.home") */
  t: (key: string) => string;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ─── Helper: resolve nested key from translations object ──────────────────────

function resolveKey(obj: Record<string, unknown>, parts: string[]): string {
  let current: unknown = obj;
  for (const part of parts) {
    if (typeof current !== "object" || current === null) return parts.join(".");
    current = (current as Record<string, unknown>)[part];
  }
  if (typeof current === "object" && current !== null) {
    // leaf: { en: "...", ar: "..." }
    return current as unknown as string;
  }
  return parts.join(".");
}

// ─── Provider ────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  // On mount, load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("amal-language") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  // Keep <html> lang in sync — do NOT set dir on html (that flips the entire layout)
  useEffect(() => {
    const html = document.documentElement;
    html.lang = language;
    // Persist
    localStorage.setItem("amal-language", language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const parts = key.split(".");
      // Navigate to the leaf which should be { en: string; ar: string }
      let current: unknown = translations;
      for (const part of parts) {
        if (typeof current !== "object" || current === null) return key;
        current = (current as Record<string, unknown>)[part];
      }
      if (typeof current === "object" && current !== null) {
        const leaf = current as Record<string, string>;
        return leaf[language] ?? leaf["en"] ?? key;
      }
      return key;
    },
    [language]
  );

  const value: LanguageContextValue = {
    language,
    isRTL: language === "ar",
    toggleLanguage,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
