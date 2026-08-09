"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bannerSlides } from "@/data/banner-slides";

// Fallback duration (ms) used only for IMAGE slides — videos advance on `ended`
const IMAGE_SLIDE_INTERVAL = 2500;

// ── Per-slide background ───────────────────────────────────────────────────────
// Renders video for video slides, or image for image-only slides.
// Duration (ms) for mobile image slides — should match mobileKenBurns CSS duration
const MOBILE_SLIDE_INTERVAL = 5000;

function SlideBackground({
  slide,
  isActive,
  animationKey,
  onEnded,
}: {
  slide: (typeof bannerSlides)[number];
  isActive: boolean;
  /** Changes each time this slide becomes active — forces animation restart */
  animationKey: number;
  onEnded: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.currentTime = 0;
      video.play().catch(() => {
        fallbackTimerRef.current = setTimeout(onEnded, IMAGE_SLIDE_INTERVAL);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [isActive, onEnded]);

  return (
    <>
      {/* ── Mobile image (shown only on screens < 768 px) ────────────────── */}
      {slide.bgImageMobile && (
        <div
          key={`mob-${animationKey}`}
          className={`block md:hidden absolute inset-0 overflow-hidden${
            isActive ? " mobile-ken-burns" : ""
          }`}
        >
          <Image
            src={slide.bgImageMobile}
            alt={slide.title}
            fill
            priority={isActive}
            quality={80}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      )}

      {/* ── Desktop: video ────────────────────────────────────────────────── */}
      {slide.bgVideo && (
        <video
          ref={videoRef}
          src={slide.bgVideo}
          muted
          playsInline
          preload={isActive ? "auto" : "none"}
          onEnded={onEnded}
          className={`banner-video absolute inset-0 w-full h-full object-cover object-center${
            slide.bgImageMobile ? " hidden md:block" : ""
          }`}
          aria-hidden="true"
        />
      )}

      {/* ── Desktop fallback: static image (no video, no mobile img) ──────── */}
      {!slide.bgVideo && slide.bgImage && (
        <Image
          src={slide.bgImage}
          alt={slide.title}
          fill
          priority={isActive}
          quality={80}
          className={`object-cover object-center${
            slide.bgImageMobile ? " hidden md:block" : ""
          }`}
          sizes="100vw"
        />
      )}
    </>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = bannerSlides.length;
  const imageTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // For image-only slides, advance with timer. Videos advance on `onEnded`.
  useEffect(() => {
    const currentSlide = bannerSlides[current];
    if (currentSlide.bgVideo) return; // video handles timing
    imageTimerRef.current = setTimeout(next, IMAGE_SLIDE_INTERVAL);
    return () => {
      if (imageTimerRef.current) clearTimeout(imageTimerRef.current);
    };
  }, [current, next]);

  // Mobile auto-advance: when a slide has a mobile image (& a desktop video that
  // is hidden on mobile), drive the timer from the Ken Burns duration so slides
  // advance after the zoom animation completes.
  const mobileTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const currentSlide = bannerSlides[current];
    if (!currentSlide.bgImageMobile) return; // no mobile image — nothing to do
    mobileTimerRef.current = setTimeout(next, MOBILE_SLIDE_INTERVAL);
    return () => {
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
    };
  }, [current, next]);

  const slide = bannerSlides[current];

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[500px] max-h-[900px] overflow-hidden bg-black"
      aria-label="Hero banner"
    >
      {/* ── Slides ──────────────────────────────────────────────────────────── */}
      {bannerSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 ${i === current ? "z-10" : "z-0"}`}
          aria-hidden={i !== current}
        >
          <SlideBackground
            slide={s}
            isActive={i === current}
            animationKey={i === current ? current : -1}
            onEnded={next}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        </div>
      ))}

      {/* ── Slide Content ────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full text-center px-6 pb-28">
        <h1
          key={`title-${current}`}
          className="banner-title"
          style={{ animation: "bannerFadeUp 0.75s ease both" }}
        >
          {slide.title}
        </h1>

        <p
          key={`sub-${current}`}
          className="banner-subtitle"
          style={{ animation: "bannerFadeUp 0.65s 0.1s ease both" }}
        >
          {slide.subtitle}
        </p>

        <a
          key={`btn-${current}`}
          href={slide.buttonLink}
          className="banner-cta mt-6"
          style={{ animation: "bannerFadeUp 0.75s 0.2s ease both" }}
        >
          {slide.buttonText}
        </a>
      </div>

      {/* ── Prev / Next arrows ───────────────────────────────────────────────── */}
      <button onClick={prev} className="banner-arrow banner-arrow--left" aria-label="Previous slide">
        <ChevronLeft size={28} strokeWidth={1.5} />
      </button>
      <button onClick={next} className="banner-arrow banner-arrow--right" aria-label="Next slide">
        <ChevronRight size={28} strokeWidth={1.5} />
      </button>

      {/* ── Dot indicators ───────────────────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-400 rounded-full ${i === current
              ? "w-8 h-[3px] bg-white"
              : "w-[3px] h-[3px] bg-white/45 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
