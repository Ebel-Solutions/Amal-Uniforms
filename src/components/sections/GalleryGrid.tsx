"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GALLERY_CATEGORIES, type GalleryImage, type GalleryCategory } from "@/data/gallery";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ArrowUpRight,
} from "lucide-react";

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const image = images[index];

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.94)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${image.alt}`}
    >
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10">
        <span className="text-white/40 text-sm font-medium tabular-nums">
          {index + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
          aria-label="Close lightbox (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
        aria-label="Previous image (Arrow Left)"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-14 md:mx-24"
        style={{ maxHeight: "82vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ maxHeight: "82vh", aspectRatio: "auto" }}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1067}
            className="object-contain w-full rounded-xl"
            style={{ maxHeight: "78vh", width: "auto", margin: "0 auto", display: "block" }}
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
            {image.alt}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all"
        aria-label="Next image (Arrow Right)"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

// ─── Grid card ────────────────────────────────────────────────────────────────

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

function GalleryCard({ image, onClick }: GalleryCardProps) {
  const isWide = image.span === "wide";
  const isTall = image.span === "tall";

  return (
    <button
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-500 w-full h-full"
      aria-label={`Open: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-350" />

      {/* Hover label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
          <ZoomIn size={18} className="text-white" />
        </div>
        <p className="text-white text-xs font-medium text-center leading-snug max-w-[90%] line-clamp-2">
          {image.alt}
        </p>
      </div>
    </button>
  );
}

// ─── Category section ─────────────────────────────────────────────────────────

interface CategorySectionProps {
  category: GalleryCategory;
  onImageClick: (images: GalleryImage[], index: number) => void;
}

function CategorySection({ category, onImageClick }: CategorySectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-28"
      aria-label={`${category.label} gallery section`}
    >
      {/* Section header */}
      <AnimatedSection className="mb-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="text-label text-gold-600 block mb-2">
              {category.label}
            </span>
            <h2 className="text-heading-2 text-navy-950">{category.label}</h2>
            <div className="gold-line mt-3 mb-4" />
            <p className="text-body text-charcoal-light/65 max-w-xl">
              {category.description}
            </p>
          </div>
          <div className="shrink-0 text-sm text-charcoal-light/40 font-medium tabular-nums">
            {category.images.length} photo{category.images.length !== 1 ? "s" : ""}
          </div>
        </div>
      </AnimatedSection>

      {/* Mobile Horizontal Slide Track (Visible on < md) */}
      <div className="md:hidden">
        <div className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none">
          {category.images.map((image, idx) => (
            <div
              key={image.id}
              className="flex-none w-[84vw] max-w-[320px] aspect-[4/3] snap-start relative gallery-card-appear rounded-2xl overflow-hidden shadow-card"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <GalleryCard
                image={image}
                onClick={() => onImageClick(category.images, idx)}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-charcoal-light/50 px-1 pt-1">
          <span>Swipe photos right &rarr;</span>
          <span className="tabular-nums font-medium">{category.images.length} photo{category.images.length !== 1 ? "s" : ""}</span>
        </div>
      </div>

      {/* Desktop Grid (Visible on >= md) */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gridAutoRows: "260px",
          gridAutoFlow: "dense",
          gap: "1rem",
        }}
      >
        {category.images.map((image, idx) => {
          const isWide = image.span === "wide";
          const isTall = image.span === "tall";
          return (
            <div
              key={image.id}
              style={{
                gridColumn: isWide ? "span 2" : "span 1",
                gridRow: isTall ? "span 2" : "span 1",
                position: "relative",
                animationDelay: `${idx * 60}ms`,
              }}
              className="gallery-card-appear"
            >
              <GalleryCard
                image={image}
                onClick={() => onImageClick(category.images, idx)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main GalleryGrid ─────────────────────────────────────────────────────────

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
  } | null>(null);

  const openLightbox = useCallback((images: GalleryImage[], index: number) => {
    setLightbox({ images, index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }
        : null
    );
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((prev) =>
      prev
        ? { ...prev, index: (prev.index + 1) % prev.images.length }
        : null
    );
  }, []);

  return (
    <>
      <div className="section-padding bg-warm-50">
        <div className="container-custom space-y-20">

          {/* Render each category as its own section */}
          {GALLERY_CATEGORIES.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              onImageClick={openLightbox}
            />
          ))}

          {/* Bottom CTA */}
          <AnimatedSection>
            <div className="border-t border-warm-200 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-navy-950 mb-1">
                  Like what you see?
                </h3>
                <p className="text-sm text-charcoal-light/55">
                  Request a quote and we&apos;ll craft something equally impressive for your team.
                </p>
              </div>
              <a
                href="/contact#quote"
                className="btn btn-primary shrink-0 gap-2 !px-7"
              >
                Request a Quote
                <ArrowUpRight size={16} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Lightbox portal */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
