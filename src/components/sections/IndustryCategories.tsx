"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { industryCategories } from "@/data/industry-categories";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDE_INTERVAL = 2500; // ms between auto-slides

export default function IndustryCategories() {
  const total = industryCategories.length;
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll track to the card at `index` using its real offsetLeft ──────────
  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = (index + total) % total;
      setCurrent(clamped);
      scrollToCard(clamped);
    },
    [total, scrollToCard]
  );

  const next = useCallback(
    () => goTo(current + 1),
    [current, goTo]
  );
  const prev = useCallback(
    () => goTo(current - 1),
    [current, goTo]
  );

  // Auto-slide
  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next]);

  return (
    <section
      id="industries"
      className="industry-slider-section"
      aria-label="Industries we serve"
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="industry-slider-header">
        <div className="industry-slider-header__text">
          <span className="industry-slider-label">Industries</span>
          <h2 className="industry-slider-title">Uniforms for Every Sector</h2>
        </div>

        {/* Arrow controls */}
        <div className="industry-slider-controls">
          <button onClick={prev} className="industry-arrow" aria-label="Previous industries">
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <button onClick={next} className="industry-arrow" aria-label="Next industries">
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Slider track — browser scroll handles the actual offset ────── */}
      <div className="industry-slider-viewport">
        <div ref={trackRef} className="industry-slider-track">
          {industryCategories.map((industry, i) => (
            <a
              key={industry.id}
              href={industry.href ?? "/#quote"}
              className="industry-card"
              aria-label={`${industry.title} uniforms`}
            >
              {/* Image */}
              <Image
                src={industry.image}
                alt={`${industry.title} uniforms`}
                fill
                priority={i < 3}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient overlay */}
              <div className="industry-card__overlay" />

              {/* Text */}
              <div className="industry-card__content">
                <h3 className="industry-card__title">{industry.title}</h3>
                <p className="industry-card__desc">{industry.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Dot indicators ─────────────────────────────────────────────── */}
      <div className="industry-dots">
        {industryCategories.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`industry-dot ${i === current ? "industry-dot--active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
