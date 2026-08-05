import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { retailCommercialData } from "@/data/retail-commercial";
import {
  ChevronRight,
  ArrowRight,
  Download,
  Layers,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Building2,
  Award,
  Receipt,
  Users,
  Palette,
  Clock,
  Leaf,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & Commercial Uniforms | Store Staff, Cashier & Sales Attire | Amal Uniforms",
  description:
    "Explore stylish retail staff uniforms, shopping mall concierge attire, sales executive suits, cashier aprons, and store associate wear manufactured in Saudi Arabia.",
};

// Helper icon mapper for dynamic data rendering
function getIcon(name: string, className: string = "w-5 h-5") {
  switch (name) {
    case "Layers":
      return <Layers className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "ShoppingBag":
      return <ShoppingBag className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "Award":
      return <Award className={className} />;
    case "Receipt":
      return <Receipt className={className} />;
    case "Users":
      return <Users className={className} />;
    case "Palette":
      return <Palette className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Headphones":
      return <Headphones className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export default function RetailCommercialIndustryPage() {
  const { hero, section, subcategories, whyChoose, ctaBanner, trustBadges, theme } =
    retailCommercialData;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
      <Header />

      <main className="flex-1 pt-18 lg:pt-20">
        {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-100 border-b border-slate-200/60 min-h-[380px] lg:min-h-[440px] flex items-center">
          {/* Seamless Full-Width Background Photo (Retail team on right background) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={hero.heroImage}
              alt="Retail & Commercial Uniforms"
              fill
              priority
              className="object-cover object-[80%_20%] lg:object-[88%_20%]"
              sizes="100vw"
            />
            {/* White/light gradient overlay on left for high contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/65 lg:to-transparent w-full lg:w-[65%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
            {/* Breadcrumbs */}
            <nav
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-4 lg:mb-5"
              aria-label="Breadcrumb"
            >
              {hero.breadcrumbs.map((crumb, idx) => (
                <div key={crumb.label} className="flex items-center gap-2">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                  <Link
                    href={crumb.href}
                    className="hover:text-slate-900 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="max-w-xl space-y-4 sm:space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-navy-950 tracking-tight leading-[1.1]">
                {hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                {hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#subcategories"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-950 text-white font-semibold text-sm rounded-xl hover:bg-black transition-all shadow-md hover:shadow-lg group cursor-pointer"
                >
                  <span>{hero.primaryBtn.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={hero.secondaryBtn.href}
                  download="retail-commercial-catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-xs text-navy-950 border border-slate-300 font-semibold text-sm rounded-xl hover:bg-white transition-all hover:border-slate-400 shadow-xs cursor-pointer"
                >
                  <span>{hero.secondaryBtn.text}</span>
                  <Download className="w-4 h-4 text-navy-900" />
                </a>
              </div>

              {/* Highlights Pills - Emerald Green Theme */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-slate-300/70">
                {hero.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold"
                  >
                    <div className={`w-7 h-7 rounded-lg ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border flex items-center justify-center`}>
                      {getIcon(item.icon, "w-4 h-4 text-emerald-700")}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Subcategories Section ────────────────────────────────────────── */}
        <section id="subcategories" className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                {section.title}
              </h2>
              {/* Emerald Green Divider Bar */}
              <div className={`w-12 h-1 ${theme.dividerBar} mx-auto rounded-full`} />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Grid of Subcategories (5 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
              {subcategories.map((cat) => (
                <div
                  key={cat.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Card Image Container */}
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Floating Icon Badge with Emerald Green accent */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-emerald-700 shadow-md border border-slate-200/80 flex items-center justify-center">
                      {getIcon(cat.badgeIcon, "w-5 h-5")}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className={`text-xl font-bold text-navy-950 ${theme.cardHoverText} transition-colors mb-2`}>
                        {cat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href={cat.href || "/contact#quote"}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${theme.cardLinkText} group/link`}
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Why Choose Section ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950">
                {whyChoose.title}
              </h2>
              <div className={`w-12 h-1 ${theme.dividerBar} mx-auto rounded-full`} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-2">
                    {getIcon(item.icon, "w-6 h-6")}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CTA Banner Section ───────────────────────────────────────────── */}
        <section className="bg-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[220px]">
            <div className="relative w-full lg:w-[42%] min-h-[220px] lg:min-h-0 shrink-0 overflow-hidden">
              <Image
                src={ctaBanner.bgImage}
                alt="Retail commercial uniforms"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-950/30 to-navy-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent lg:hidden" />
            </div>
            <div className="flex-1 flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-14 lg:pl-6 lg:pr-10 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                {ctaBanner.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg">
                {ctaBanner.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={ctaBanner.primaryBtn.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 ${theme.ctaPrimaryBtn} font-bold text-sm rounded-xl transition-colors shadow-md group`}
                >
                  <span>{ctaBanner.primaryBtn.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={ctaBanner.secondaryBtn.href}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-white/40 font-medium text-sm rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <span>{ctaBanner.secondaryBtn.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Bottom Trust Badges Bar ──────────────────────────────────────── */}
        <section className="bg-white py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    {getIcon(badge.icon, "w-4 h-4")}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center sm:text-left leading-tight">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
