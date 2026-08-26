"use client";

import Script from "next/script";
import { motion } from "framer-motion";

interface GooglePreferredBadgeProps {
  /** Wrap the official button in a subtle animated container for visual polish */
  className?: string;
}

/**
 * Google Preferred Sources – official implementation.
 *
 * Uses Google's publisher.js library (https://news.google.com/swg/js/v1/publisher.js).
 * The library renders its own button inside the <div google-add-preferred-source-button> element,
 * handles localization, light/dark theming, and the source-selection overlay automatically.
 *
 * Docs: https://developers.google.com/search/docs/appearance/preferred-sources
 */
export default function GooglePreferredBadge({ className = "" }: GooglePreferredBadgeProps) {
  return (
    <>
      {/* Load Google's official Preferred Sources library once per page */}
      <Script
        src="https://news.google.com/swg/js/v1/publisher.js"
        strategy="afterInteractive"
      />

      {/* Animated wrapper — Google's library replaces the inner div's content */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={className}
      >
        {/*
          This is the official Google hook element.
          The publisher.js script finds this attribute and injects its button here.
          Do NOT rename the attribute or wrap it in anything that could prevent discovery.
        */}
        <div google-add-preferred-source-button=""></div>
      </motion.div>
    </>
  );
}
