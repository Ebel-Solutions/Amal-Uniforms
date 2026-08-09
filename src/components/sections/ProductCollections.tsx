"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProductCollections() {
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const products = [
    {
      id: "corporate-suits",
      title: t("products.corporateSuits.title"),
      category: t("products.corporateSuits.category"),
      description: t("products.corporateSuits.description"),
      image: "/images/corporate/shirts-suits.png",
      href: "/industries/corporate",
    },
    {
      id: "medical-scrubs",
      title: t("products.medicalScrubs.title"),
      category: t("products.medicalScrubs.category"),
      description: t("products.medicalScrubs.description"),
      image: "/images/healthcare/medical-scrubs.png",
      href: "/industries/healthcare",
    },
    {
      id: "chef-wear",
      title: t("products.chefWear.title"),
      category: t("products.chefWear.category"),
      description: t("products.chefWear.description"),
      image: "/images/hospitality/chef-jackets.png",
      href: "/industries/hospitality",
    },
    {
      id: "security-uniforms",
      title: t("products.securityUniforms.title"),
      category: t("products.securityUniforms.category"),
      description: t("products.securityUniforms.description"),
      image: "/images/security/security-guard.png",
      href: "/industries/security",
    },
    {
      id: "coveralls",
      title: t("products.coveralls.title"),
      category: t("products.coveralls.category"),
      description: t("products.coveralls.description"),
      image: "/images/construction/protective-coveralls.png",
      href: "/industries/industrial-safety",
    },
    {
      id: "polo-shirts",
      title: t("products.poloShirts.title"),
      category: t("products.poloShirts.category"),
      description: t("products.poloShirts.description"),
      image: "/images/retail-commercial/retail-staff.png",
      href: "/industries/retail-commercial",
    },
  ];

  return (
    <section
      id="products"
      className="section-padding bg-warm-50"
      aria-label="Product collections"
    >
      <div className="container-custom">
        <SectionHeading
          label={t("sections.products.label")}
          title={t("sections.products.title")}
          subtitle={t("sections.products.subtitle")}
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <div className="card-base group overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <Link href={product.href || "/contact#quote"} className="relative aspect-[4/3] overflow-hidden bg-slate-100 block">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-navy-950/85 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-sm" style={fontStyle}>
                      {product.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-950 mb-2 group-hover:text-navy-800 transition-colors" style={fontStyle}>
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={product.href || "/contact#quote"}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors group/link"
                      style={fontStyle}
                    >
                      <span>{t("common.learnMore")}</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-1"
                        style={isRTL ? { transform: "rotate(180deg)" } : {}}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
