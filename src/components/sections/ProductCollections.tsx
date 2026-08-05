"use client";

import { PRODUCTS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCollections() {
  return (
    <section id="products" className="section-padding bg-warm-50" aria-label="Product collections">
      <div className="container-custom">
        <SectionHeading
          label="Products"
          title="Our Uniform Collections"
          subtitle="Explore our range of professionally crafted uniforms, each designed for specific industry needs and working environments."
        />

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product) => (
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
                    <span className="px-3 py-1 bg-navy-950/85 backdrop-blur-sm text-white text-xs font-medium rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-950 mb-2 group-hover:text-navy-800 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={product.href || "/contact#quote"}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors group/link"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-1"
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
