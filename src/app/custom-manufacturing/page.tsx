import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { customManufacturingData } from "@/data/custom-manufacturing";
import ServiceCtaBanner from "@/components/sections/ServiceCtaBanner";
import {
  ChevronRight,
  ArrowRight,
  Download,
  Factory,
  Scissors,
  ShieldCheck,
  Palette,
  Boxes,
  Layers,
  Ruler,
  Tag,
  Shirt,
  Cpu,
  FileText,
  Truck,
  Building2,
  Award,
  Headphones,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Uniform Manufacturing | Design, Patterning & Bulk Production | Amal Uniforms",
  description:
    "End-to-end custom uniform manufacturing in Riyadh, Saudi Arabia — custom design, prototyping, sample development, CAD pattern making, private labeling, and enterprise bulk production.",
};

function getIcon(name: string, className: string = "w-5 h-5") {
  const props = { className };
  switch (name) {
    case "Factory":      return <Factory {...props} />;
    case "Scissors":     return <Scissors {...props} />;
    case "ShieldCheck":  return <ShieldCheck {...props} />;
    case "Palette":      return <Palette {...props} />;
    case "Boxes":        return <Boxes {...props} />;
    case "Layers":       return <Layers {...props} />;
    case "Ruler":        return <Ruler {...props} />;
    case "Tag":          return <Tag {...props} />;
    case "Shirt":        return <Shirt {...props} />;
    case "Cpu":          return <Cpu {...props} />;
    case "FileText":     return <FileText {...props} />;
    case "Truck":        return <Truck {...props} />;
    case "Building2":    return <Building2 {...props} />;
    case "Award":        return <Award {...props} />;
    case "Headphones":   return <Headphones {...props} />;
    case "Clock":        return <Clock {...props} />;
    case "Sparkles":     return <Sparkles {...props} />;
    default:             return <Factory {...props} />;
  }
}

export default function CustomManufacturingPage() {
  const { hero, section, services, process, whyChoose, ctaBanner, trustBadges, theme } =
    customManufacturingData;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
      <Header />

      <main className="flex-1 pt-18 lg:pt-20">

        {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 min-h-[400px] lg:min-h-[480px] flex items-center">
          {/* Hero background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={hero.heroImage}
              alt="Custom uniform manufacturing"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent lg:to-transparent w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full">
            {/* Breadcrumbs */}
            <nav
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 mb-5"
              aria-label="Breadcrumb"
            >
              {hero.breadcrumbs.map((crumb, idx) => (
                <div key={crumb.label} className="flex items-center gap-2">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </nav>

            <div className="max-w-2xl space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <Factory className="w-3.5 h-3.5" />
                <span>Saudi Manufacturing Facility</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.08]">
                {hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={hero.primaryBtn.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 group"
                >
                  <span>{hero.primaryBtn.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={hero.secondaryBtn.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold text-sm rounded-xl hover:bg-white/20 transition-all group"
                >
                  <span>{hero.secondaryBtn.text}</span>
                  <Download className="w-4 h-4" />
                </Link>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-white/10">
                {hero.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-slate-200 text-xs sm:text-sm font-semibold"
                  >
                    <div className={`w-7 h-7 rounded-lg ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder} border flex items-center justify-center`}>
                      {getIcon(item.icon, "w-4 h-4")}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Stats Bar ─────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
              {[
                { value: "7", label: "Manufacturing Services" },
                { value: "50K+", label: "Monthly Garment Capacity" },
                { value: "100%", label: "Saudi Quality Inspection" },
                { value: "Riyadh", label: "Local KSA Production Plant" },
              ].map((stat) => (
                <div key={stat.label} className="py-6 px-6 text-center">
                  <p className="text-3xl font-bold text-navy-950 font-display">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Services Grid ─────────────────────────────────────────────── */}
        <section id="services" className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
                {section.title}
              </h2>
              <div className={`w-12 h-1 ${theme.dividerBar} mx-auto rounded-full`} />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 flex flex-col overflow-hidden"
                >

                  {/* Card Image */}
                  <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-blue-700 shadow-md border border-slate-200/80 flex items-center justify-center">
                      {getIcon(service.badgeIcon, "w-5 h-5")}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className={`text-xl font-bold text-navy-950 ${theme.cardHoverText} transition-colors`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-100 text-xs font-medium rounded-full"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href={service.href || "/contact#quote"}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${theme.cardLinkText} group/link`}
                      >
                        <span>Request Manufacturing Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Process Section ───────────────────────────────────────────── */}
        <section className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight">
                {process.title}
              </h2>
              <div className={`w-12 h-1 ${theme.dividerBar} mx-auto rounded-full`} />
              <p className="text-base text-slate-600 leading-relaxed">{process.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.steps.map((step) => (
                <div
                  key={step.step}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} flex items-center justify-center`}>
                      {getIcon(step.icon, "w-6 h-6")}
                    </div>
                    <span className="text-2xl font-bold font-display text-slate-300">
                      0{step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-950">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Why Choose Section ────────────────────────────────────────── */}
        <section className="py-14 lg:py-20 bg-white border-t border-slate-200/60">
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
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 space-y-3"
                >
                  <div className={`w-12 h-12 rounded-xl ${theme.accentBg} ${theme.accentIcon} ${theme.accentBorder} border flex items-center justify-center mb-2`}>
                    {getIcon(item.icon, "w-6 h-6")}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. CTA Banner ────────────────────────────────────────────────── */}
        <ServiceCtaBanner
          ctaBanner={ctaBanner}
          primaryBtnClass={theme.ctaPrimaryBtn}
          imageAlt="Custom uniform manufacturing facility"
        />

        {/* ── 7. Trust Badges Bar ──────────────────────────────────────────── */}
        <section className="bg-white py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2"
                >
                  <div className={`w-9 h-9 rounded-full ${theme.accentBg} ${theme.accentIcon} flex items-center justify-center shrink-0`}>
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
