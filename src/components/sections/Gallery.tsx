"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const INDUSTRY_KEY_MAP: Record<string, string> = {
  corporate: "industryCards.corporate.title",
  healthcare: "industryCards.healthcare.title",
  hospitality: "industryCards.hospitality.title",
  industrial: "industryCards.industrial.title",
  security: "industryCards.security.title",
  education: "industryCards.education.title",
  aviation: "industryCards.aviation.title",
  retail: "industryCards.retail.title",
  "facility-management": "industryCards.facilityManagement.title",
  "sports-events": "industryCards.sportsEvents.title",
  construction: "industryCards.construction.title",
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ id: string; title: string; category: string; image: string } | null>(null);
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const galleryItems = INDUSTRIES.slice(0, 6).map((industry, i) => ({
    id: `gallery-${i}`,
    title: `${INDUSTRY_KEY_MAP[industry.id] ? t(INDUSTRY_KEY_MAP[industry.id]) : industry.title} ${isRTL ? "— الزي الموحد" : "Uniforms"}`,
    category: INDUSTRY_KEY_MAP[industry.id] ? t(INDUSTRY_KEY_MAP[industry.id]) : industry.title,
    image: industry.image,
  }));

  return (
    <section
      id="gallery"
      className="section-padding bg-white"
      aria-label="Gallery"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.gallery.label")}
          title={t("sections.gallery.title")}
          subtitle={t("sections.gallery.subtitle")}
        />

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {galleryItems.map((item, index) => (
            <StaggerItem key={item.id}>
              <button
                onClick={() => setSelectedImage(item)}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${index === 0 || index === 5
                    ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full"
                    : "aspect-square"
                  }`}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-small font-medium text-white" style={fontStyle}>
                    {item.title}
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${selectedImage.title}`}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label={t("common.close")}
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div
            className="absolute bottom-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-lg font-display" style={fontStyle}>
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
