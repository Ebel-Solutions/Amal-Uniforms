"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/LanguageContext";

const GALLERY_IMAGES = [
  // Uniforms
  { src: "/images/gallery/uniforms/u1.jpg", label: "Corporate Uniform" },
  { src: "/images/gallery/uniforms/u2.jpg", label: "Healthcare Uniform" },
  { src: "/images/gallery/uniforms/u3.jpg", label: "Hospitality Uniform" },
  { src: "/images/gallery/uniforms/u4.jpg", label: "Industrial Workwear" },
  { src: "/images/gallery/uniforms/u5.jpg", label: "Security Uniform" },
  { src: "/images/gallery/uniforms/u6.jpg", label: "Education Uniform" },
  { src: "/images/gallery/uniforms/u7.jpg", label: "Corporate Uniform" },
  { src: "/images/gallery/uniforms/u8.jpg", label: "Healthcare Uniform" },
  { src: "/images/gallery/uniforms/u9.jpg", label: "Aviation Uniform" },
  { src: "/images/gallery/uniforms/u10.jpg", label: "Hospitality Uniform" },
  { src: "/images/gallery/uniforms/u11.jpg", label: "Construction Workwear" },
  { src: "/images/gallery/uniforms/u12.jpg", label: "Security Uniform" },
  { src: "/images/gallery/uniforms/u13.jpg", label: "Retail Uniform" },
  { src: "/images/gallery/uniforms/u14.jpg", label: "Corporate Uniform" },
  { src: "/images/gallery/uniforms/u15.jpg", label: "Healthcare Uniform" },
  { src: "/images/gallery/uniforms/u16.jpg", label: "Industrial Workwear" },
  { src: "/images/gallery/uniforms/u17.jpg", label: "Hospitality Uniform" },
  { src: "/images/gallery/uniforms/u18.jpg", label: "Education Uniform" },
  { src: "/images/gallery/uniforms/u19.jpg", label: "Sports Uniform" },
  { src: "/images/gallery/uniforms/u20.jpg", label: "Corporate Uniform" },
  { src: "/images/gallery/uniforms/u21.jpg", label: "Security Uniform" },
  // Store & Showroom
  { src: "/images/gallery/store/st1.jpg", label: "Our Showroom" },
  { src: "/images/gallery/store/st2.jpg", label: "Our Showroom" },
  { src: "/images/gallery/store/st3.jpg", label: "Our Store" },
  { src: "/images/gallery/store/st4.jpg", label: "Our Store" },
  { src: "/images/gallery/store/st5.jpg", label: "Our Showroom" },
  { src: "/images/gallery/store/st6.jpg", label: "Our Showroom" },
  // Shoes
  { src: "/images/gallery/shoes/s1.jpg", label: "Uniform Footwear" },
  { src: "/images/gallery/shoes/s2.jpg", label: "Uniform Footwear" },
  { src: "/images/gallery/shoes/s3.jpg", label: "Uniform Footwear" },
  { src: "/images/gallery/shoes/s4.jpg", label: "Safety Footwear" },
  { src: "/images/gallery/shoes/s5.jpg", label: "Safety Footwear" },
  { src: "/images/gallery/shoes/s6.jpg", label: "Uniform Footwear" },
  { src: "/images/gallery/shoes/s7.jpg", label: "Uniform Footwear" },
  { src: "/images/gallery/shoes/s8.jpg", label: "Safety Footwear" },
  { src: "/images/gallery/shoes/s9.jpg", label: "Uniform Footwear" },
  // Embroidery
  { src: "/images/gallery/embroidery/e1.jpg", label: "Embroidery Work" },
  { src: "/images/gallery/embroidery/e2.jpg", label: "Embroidery Work" },
];

// Duplicate for seamless infinite loop
const ITEMS = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

const CARD_W = 300;
const CARD_GAP = 12;
const STEP = CARD_W + CARD_GAP;
const HALF = GALLERY_IMAGES.length * STEP;

export default function Gallery() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic','Segoe UI',sans-serif", textAlign: "right" as const }
    : {};

  const trackRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const [dragging, setDragging] = useState(false);

  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  // Seamless loop guard
  const loopCheck = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    if (t.scrollLeft >= HALF) t.scrollLeft -= HALF;
    else if (t.scrollLeft <= 0) t.scrollLeft += HALF;
  }, []);

  // Auto-scroll at ~75px/s (~1.2px per 16ms frame)
  useEffect(() => {
    autoRef.current = setInterval(() => {
      if (pausedRef.current) return;
      const el = trackRef.current;
      if (!el) return;
      el.scrollLeft += 0.6;
      loopCheck();
    }, 16);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [loopCheck]);

  // Manual arrow click
  const manualStep = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    pausedRef.current = true;
    el.scrollTo({ left: el.scrollLeft + dir * STEP * 3, behavior: "smooth" });
    setTimeout(() => { loopCheck(); pausedRef.current = false; }, 650);
  }, [loopCheck]);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = true;
    pausedRef.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
    setDragging(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!draggingRef.current || !trackRef.current) return;
    trackRef.current.scrollLeft = dragStartScroll.current + (dragStartX.current - e.clientX);
  };
  const onMouseUp = () => {
    draggingRef.current = false;
    setDragging(false);
    loopCheck();
    setTimeout(() => { pausedRef.current = false; }, 800);
  };

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    pausedRef.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    trackRef.current.scrollLeft = dragStartScroll.current + (dragStartX.current - e.touches[0].clientX);
  };
  const onTouchEnd = () => {
    loopCheck();
    setTimeout(() => { pausedRef.current = false; }, 800);
  };

  return (
    <section id="gallery" className="section-padding bg-white" aria-label="Uniform Gallery">

      {/* Heading */}
      <div className="container-custom mb-10">
        <SectionHeading
          label={t("sections.gallery.label")}
          title={t("sections.gallery.title")}
          subtitle={t("sections.gallery.subtitle")}
        />
      </div>

      {/* Strip */}
      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => manualStep(-1)}
          className="gallery-strip-arrow gallery-strip-arrow--left"
          aria-label="Scroll gallery left"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => manualStep(1)}
          className="gallery-strip-arrow gallery-strip-arrow--right"
          aria-label="Scroll gallery right"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="gallery-strip-track"
          style={{ cursor: dragging ? "grabbing" : "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {ITEMS.map((img, i) => (
            <button
              key={i}
              className="gallery-strip-card group"
              onClick={() => { if (!dragging) setLightbox(img); }}
              aria-label={"View " + img.label}
              draggable={false}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
                priority={i < 7}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
              {/* Zoom icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={26} className="text-white drop-shadow-lg" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* View full gallery CTA */}
      <div className="container-custom mt-10 flex justify-center">
        <a
          href="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3 border border-black text-black text-sm font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300 rounded-sm"
          style={fontStyle}
        >
          {isRTL ? "عرض المعرض الكامل" : "View Full Gallery"}
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={30} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = GALLERY_IMAGES.findIndex(g => g.src === lightbox.src);
              setLightbox(GALLERY_IMAGES[(idx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = GALLERY_IMAGES.findIndex(g => g.src === lightbox.src);
              setLightbox(GALLERY_IMAGES[(idx + 1) % GALLERY_IMAGES.length]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl aspect-[4/3] max-h-[82vh] rounded-md overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.label}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-5 text-white/80 text-sm tracking-wide" style={fontStyle}>
            {lightbox.label}
          </p>
        </div>
      )}
    </section>
  );
}
