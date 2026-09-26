"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

/** Official Google "G" multicolor SVG */
function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.332 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107" />
      <path d="M6.306 14.691l6.571 4.819C14.655 15.108 19.001 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00" />
      <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.308 0-9.818-3.416-11.424-8.122l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50" />
      <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2" />
    </svg>
  );
}

interface GooglePreferredBadgeProps {
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Google Preferred Sources badge.
 *
 * Shows a visible "Find us on Google" fallback badge at all times (links to Google
 * Business Profile). The official publisher.js div is kept hidden — when Google
 * enrolls the domain, its injected button will take over automatically.
 *
 * Docs: https://developers.google.com/search/docs/appearance/preferred-sources
 */
export default function GooglePreferredBadge({
  variant = "dark",
  className = "",
}: GooglePreferredBadgeProps) {
  const isDark = variant === "dark";
  const { isRTL } = useLanguage();

  return (
    <>
      {/* Official Google Preferred Sources library — activates when domain is enrolled */}
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="afterInteractive"
      />

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={className}
      >
        {/* Official hook — Google fills this when domain is approved */}
        <div google-add-preferred-source-button=""></div>

        {/* Always-visible fallback badge — deep link to Google Preferred Sources */}
        <motion.a
          href={BUSINESS.preferredSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isRTL ? "أضف أمال للزي الموحد كمصدر مفضل على جوجل" : "Add Amal Uniforms as a Google Preferred Source"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={[
            "inline-flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-all duration-300 cursor-pointer no-underline select-none",
            isDark
              ? "border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25"
              : "border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow",
          ].join(" ")}
        >
          <GoogleG size={20} />

          <div className={["flex flex-col leading-tight", isRTL ? "text-right" : ""].join(" ")}>
            <span className={["font-semibold text-xs tracking-wide", isDark ? "text-white/90" : "text-gray-800"].join(" ")}>
              {isRTL ? "أضف كمصدر مفضل" : "Add as Preferred Source"}
            </span>
            <span className={["text-[10px] mt-0.5", isDark ? "text-white/45" : "text-gray-400"].join(" ")}>
              {isRTL ? "شاهدنا أولاً على جوجل" : "See us first on Google"}
            </span>
          </div>

          <svg
            width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className={isDark ? "text-white/30 ml-auto shrink-0" : "text-gray-400 ml-auto shrink-0"}
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </motion.a>
      </motion.div>
    </>
  );
}
