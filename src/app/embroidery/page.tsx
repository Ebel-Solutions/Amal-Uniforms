import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { embroideryData } from "@/data/embroidery";
import {
  ChevronRight,
  ArrowRight,
  Download,
  Cpu,
  Palette,
  ShieldCheck,
  Sparkles,
  Briefcase,
  Award,
  UserCheck,
  Headphones,
  Shirt,
  Scissors,
  Clock,
  Building2,
  Layers,
  Tag,
  Star,
  Zap,
  Gem,
  Upload,
  CheckCircle,
  Settings,
  Truck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Embroidery Services | Logo, Name & Custom Embroidery | Amal Uniforms",
  description:
    "Professional computerized embroidery services in Riyadh — corporate logo embroidery, name stitching, cap embroidery, 3D puff, woven labels, patches and more. Bulk orders across Saudi Arabia.",
};

function getIcon(name: string, className: string = "w-5 h-5") {
  const props = { className };
  switch (name) {
    case "Cpu":       return <Cpu {...props} />;
    case "Palette":   return <Palette {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "Sparkles":  return <Sparkles {...props} />;
    case "Briefcase": return <Briefcase {...props} />;
    case "Award":     return <Award {...props} />;
    case "UserCheck": return <UserCheck {...props} />;
    case "Headphones": return <Headphones {...props} />;
    case "Shirt":     return <Shirt {...props} />;
    case "Scissors":  return <Scissors {...props} />;
    case "Clock":     return <Clock {...props} />;
    case "Building2": return <Building2 {...props} />;
    case "Layers":    return <Layers {...props} />;
    case "Tag":       return <Tag {...props} />;
    case "Star":      return <Star {...props} />;
    case "Zap":       return <Zap {...props} />;
    case "Gem":       return <Gem {...props} />;
    case "Upload":    return <Upload {...props} />;
    case "CheckCircle": return <CheckCircle {...props} />;
    case "Settings":  return <Settings {...props} />;
    case "Truck":     return <Truck {...props} />;
    case "Users":     return <Users {...props} />;
    default:          return <Sparkles {...props} />;
  }
}

export default function EmbroideryPage() {
  const { hero, section, services, process, whyChoose, ctaBanner, trustBadges, theme } =
    embroideryData;

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
              alt="Professional embroidery services"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Left-side readability gradient */}
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Embroidery</span>
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-violet-600 text-white font-semibold text-sm rounded-xl hover:bg-violet-500 transition-all shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 group"
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
                { value: "12", label: "Embroidery Services" },
                { value: "500+", label: "Corporate Clients" },
                { value: "1000+", label: "Thread Colors" },
                { value: "48h", label: "Sample Turnaround" },
              ].map((stat) => (
                <div key={stat.label} className="py-6 px-6 text-center">
                  <p className="text-3xl font-bold text-navy-950 font-display">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. All Services Grid ─────────────────────────────────────────── */}
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

            {/* Services Grid — 3 columns on large, 2 on medium, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-violet-400/40 transition-all duration-300 flex flex-col overflow-hidden"
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
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    {/* Badge Icon */}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-violet-700 shadow-md border border-slate-200/80 flex items-center justify-center">
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
                          className="inline-flex items-center px-2.5 py-1 bg-violet-50 text-violet-700 border border-violet-100 text-xs font-medium rounded-full"
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
                        <span>Request a Quote</span>
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

            {/* Steps — horizontal flow */}
            <div className="relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-[52px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {process.steps.map((step, idx) => (
                  <div key={step.step} className="flex flex-col items-center text-center space-y-3">
                    {/* Step Number Circle */}
                    <div className="relative flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-full ${theme.badgeBg} border-2 ${theme.badgeBorder} ${theme.badgeText} flex items-center justify-center shadow-sm bg-white`}>
                        {getIcon(step.icon, "w-6 h-6")}
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy-950">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
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
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-violet-200 transition-all duration-300 space-y-3"
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
        <section className="bg-navy-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch min-h-[220px]">
            {/* Left — Embroidery Image */}
            <div className="relative w-full lg:w-[42%] min-h-[220px] lg:min-h-0 shrink-0 overflow-hidden">
              <Image
                src={ctaBanner.bgImage}
                alt="Professional embroidery services"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-950/30 to-navy-950" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Right — Text & Buttons */}
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
