"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCtaBanner from "@/components/sections/ServiceCtaBanner";
import { useLanguage } from "@/lib/LanguageContext";
import { BUSINESS } from "@/lib/constants";
import { industryCategories } from "@/data/industry-categories";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Stethoscope,
  UtensilsCrossed,
  HardHat,
  ShieldAlert,
  GraduationCap,
  Plane,
  ShoppingBag,
  Wrench,
  Trophy,
  Award,
  Clock,
  Truck,
  CheckCircle2,
  Users,
  Factory,
  Layers,
} from "lucide-react";

const INDUSTRY_KEY_MAP: Record<string, string> = {
  corporate: "industryCards.corporate",
  healthcare: "industryCards.healthcare",
  hospitality: "industryCards.hospitality",
  industrial: "industryCards.industrial",
  security: "industryCards.security",
  education: "industryCards.education",
  aviation: "industryCards.aviation",
  retail: "industryCards.retail",
  "facility-management": "industryCards.facilityManagement",
  "sports-events": "industryCards.sportsEvents",
  construction: "industryCards.construction",
};

const INDUSTRY_SUBCATEGORIES_MAP: Record<string, string[]> = {
  corporate: [
    "Executive Suits & Blazers",
    "Office Staff Shirts & Blouses",
    "Front Desk & Reception Apparel",
    "Administrative Team Uniforms",
  ],
  healthcare: [
    "Medical Scrubs & Tunics",
    "Doctor & Lab Coats",
    "Nursing Staff Apparel",
    "Clinic & Hospital Attire",
  ],
  hospitality: [
    "Chef Jackets & Aprons",
    "Waitstaff & Banquet Attire",
    "Hotel Front Desk & Concierge",
    "Housekeeping Uniforms",
  ],
  industrial: [
    "Heavy-Duty Cotton Coveralls",
    "Flame-Resistant (FR) Apparel",
    "High-Visibility Safety Vests",
    "Factory & Workshop Apparel",
  ],
  security: [
    "Security Guard Uniforms",
    "Patrol & Tactical Shirts",
    "Custom Badges & Epaulettes",
    "Security Outerwear & Caps",
  ],
  education: [
    "School Uniform Sets",
    "University & College Attire",
    "PE & Sports Team Uniforms",
    "Teacher & Staff Apparel",
  ],
  aviation: [
    "Pilot & Cabin Crew Uniforms",
    "Airport Ground Crew Attire",
    "Logistics & Transport Apparel",
    "Customer Service Desk Staff",
  ],
  retail: [
    "Custom Branded Polo Shirts",
    "Store Staff & Cashier Apparel",
    "Sales Executive Uniforms",
    "Mall Operations Attire",
  ],
  "facility-management": [
    "Cleaning & Janitorial Attire",
    "Maintenance Tech Coveralls",
    "Property Management Apparel",
    "Outdoor & Grounds Staff",
  ],
  "sports-events": [
    "Custom Sports Jerseys",
    "Event Staff & Host Attire",
    "Promotional T-Shirts",
    "Tournament & Team Kits",
  ],
  construction: [
    "Site Engineer & Supervisor Apparel",
    "High-Vis Construction Vests",
    "Heavy-Duty Work Pants",
    "Roadworks Safety Apparel",
  ],
};

const SUBCATEGORY_ARABIC_MAP: Record<string, string> = {
  // Corporate
  "Executive Suits & Blazers": "بدلات وبلازرات التنفيذيين",
  "Office Staff Shirts & Blouses": "قمصان وبلوزات موظفي المكاتب",
  "Front Desk & Reception Apparel": "زي موظفي الاستقبال",
  "Administrative Team Uniforms": "زي الفريق الإداري",

  // Healthcare
  "Medical Scrubs & Tunics": "السكراب الطبي والستر الطبية",
  "Doctor & Lab Coats": "معاطف الأطباء والمختبرات",
  "Nursing Staff Apparel": "ملابس كادر التمريض",
  "Clinic & Hospital Attire": "زي المستشفيات والعيادات",

  // Hospitality
  "Chef Jackets & Aprons": "جاكيتات ومآزر الطهاة",
  "Waitstaff & Banquet Attire": "زي النوادل وطواقم الولائم",
  "Hotel Front Desk & Concierge": "زي الاستقبال والكونسيرج الفندقي",
  "Housekeeping Uniforms": "زي التدبير المنزلي والنظافة",

  // Industrial
  "Heavy-Duty Cotton Coveralls": "أوفرولات قطنية ثقيلة الاستخدام",
  "Flame-Resistant (FR) Apparel": "ملابس مقاومة للحريق والشرار (FR)",
  "High-Visibility Safety Vests": "سترات سلامة عالية الوضوح",
  "Factory & Workshop Apparel": "ملابس المصانع والورش",

  // Security
  "Security Guard Uniforms": "زي حراس الأمن",
  "Patrol & Tactical Shirts": "قمصان الدوريات والزي التكتيكي",
  "Custom Badges & Epaulettes": "شارات وأكتاف مخصصة",
  "Security Outerwear & Caps": "معاطف وقبعات الأمن",

  // Education
  "School Uniform Sets": "أطقم الزي المدرسي",
  "University & College Attire": "زي الجامعات والكليات",
  "PE & Sports Team Uniforms": "الزي الرياضي المدرسي",
  "Teacher & Staff Apparel": "زي المعلمين والكادر الأكاديمي",

  // Aviation
  "Pilot & Cabin Crew Uniforms": "زي الطيارين وطاقم الضيافة الجوية",
  "Airport Ground Crew Attire": "زي موظفي الخدمات الأرضية بالمطار",
  "Logistics & Transport Apparel": "زي السائقين والخدمات اللوجستية",
  "Customer Service Desk Staff": "زي موظفي الاستعلامات ورعاية الركاب",

  // Retail
  "Custom Branded Polo Shirts": "قمصان بولو معلّمة بالشعار",
  "Store Staff & Cashier Apparel": "زي موظفي المتاجر وأمناء الصندوق",
  "Sales Executive Uniforms": "زي تنفيذي المبيعات",
  "Mall Operations Attire": "زي موظفي العمليات بالمراكز التجارية",

  // Facility Management
  "Cleaning & Janitorial Attire": "زي طواقم النظافة والتطهير",
  "Maintenance Tech Coveralls": "أوفرولات فنيي الصيانة",
  "Property Management Apparel": "زي إداريي ومفيشي العقارات",
  "Outdoor & Grounds Staff": "زي عمال المساحات الخارجية",

  // Sports & Events
  "Custom Sports Jerseys": "قمصان رياضية مخصصة",
  "Event Staff & Host Attire": "زي منظمي ومضيفي الفعاليات",
  "Promotional T-Shirts": "تيشيرتات ترويجية مطبوعة",
  "Tournament & Team Kits": "أطقم البطولات والفرق الرياضية",

  // Construction
  "Site Engineer & Supervisor Apparel": "زي مهندسي ومشرفي المواقع",
  "High-Vis Construction Vests": "سترات البناء عالية الوضوح",
  "Heavy-Duty Work Pants": "بنطال عمل ثقيل الاستخدام",
  "Roadworks Safety Apparel": "ملابس سلامة الطرق والتشييد",
};

function getIndustryIcon(id: string, className: string = "w-5 h-5") {
  switch (id) {
    case "corporate":
      return <Building2 className={className} />;
    case "healthcare":
      return <Stethoscope className={className} />;
    case "hospitality":
    case "spa":
      return <UtensilsCrossed className={className} />;
    case "industrial":
      return <Factory className={className} />;
    case "security":
      return <ShieldAlert className={className} />;
    case "education":
      return <GraduationCap className={className} />;
    case "aviation":
      return <Plane className={className} />;
    case "retail":
    case "retail-commercial":
      return <ShoppingBag className={className} />;
    case "facility-management":
      return <Wrench className={className} />;
    case "sports-events":
      return <Trophy className={className} />;
    case "construction":
      return <HardHat className={className} />;
    default:
      return <Building2 className={className} />;
  }
}

export default function IndustriesPageContent() {
  const { t, isRTL } = useLanguage();

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  // Filter unique categories by href to avoid duplicates
  const uniqueCategories = industryCategories.filter(
    (cat, index, self) => index === self.findIndex((c) => c.href === cat.href)
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
      <Header />

      <main className="flex-1 pt-18 lg:pt-20">
        {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-navy-950 min-h-[420px] lg:min-h-[480px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/industries/corporatess.png"
              alt="Professional Uniforms for Saudi Arabia Industries"
              fill
              priority
              className="object-cover object-center opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
            {/* Breadcrumbs */}
            <nav
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-300/80 mb-5"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white transition-colors" style={fontStyle}>
                {t("nav.home")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-semibold" style={fontStyle}>
                {t("nav.industries")}
              </span>
            </nav>

            <div className="max-w-2xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span style={fontStyle}>
                  {isRTL ? "صناعة وتوريد الزي الموحد بالمملكة" : "Saudi Arabia's Premier Uniform Manufacturer"}
                </span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-[1.15]"
                style={fontStyle}
              >
                {isRTL
                  ? "زي موحد مخصص لجميع القطاعات في المملكة"
                  : "Professional Uniforms Tailored for Every Industry"}
              </h1>

              <p
                className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
                style={fontStyle}
              >
                {isRTL
                  ? "نصمم وننتج حلول الزي الموحد عالي الجودة للشركات، الرعاية الصحية، الضيافة، الأمن، السلامة الصناعية، والتعليم بجميع أنحاء المملكة العربية السعودية."
                  : "We design, manufacture, and deliver high-performance custom uniforms for corporate teams, healthcare facilities, hotel staff, security services, industrial workwear, and educational institutes across KSA."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/contact#quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 text-navy-950 font-bold text-sm rounded-xl hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20 group cursor-pointer"
                  style={fontStyle}
                >
                  <span>{t("nav.requestQuote")}</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    style={isRTL ? { transform: "rotate(180deg)" } : {}}
                  />
                </a>

                <a
                  href="#industry-sectors"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold text-sm rounded-xl hover:bg-white/20 transition-all cursor-pointer"
                  style={fontStyle}
                >
                  <span>{isRTL ? "استعرض القطاعات" : "Explore Industry Sectors"}</span>
                </a>
              </div>

              {/* Highlights Pills */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{isRTL ? "11+ قطاعاً تخصصياً" : "11+ Specialized Sectors"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{isRTL ? "تصنيع محلي في الرياض" : "Saudi Factory in Riyadh"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{isRTL ? "قدرة تصنيع بالجملة" : "Enterprise Bulk Capacity"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Industries Sector Grid ────────────────────────────────────────── */}
        <section id="industry-sectors" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span
                className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/80 inline-block"
                style={fontStyle}
              >
                {t("sections.industries.label")}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold font-display text-navy-950 tracking-tight"
                style={fontStyle}
              >
                {t("sections.industries.title")}
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={fontStyle}>
                {t("sections.industries.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uniqueCategories.map((industry) => {
                const translationKey = INDUSTRY_KEY_MAP[industry.id];
                const cardTitle = translationKey
                  ? t(`${translationKey}.title`)
                  : industry.title;
                const cardDesc = translationKey
                  ? t(`${translationKey}.description`)
                  : industry.description;
                const subcategories = INDUSTRY_SUBCATEGORIES_MAP[industry.id] || [];

                return (
                  <div
                    key={industry.id}
                    className="group bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 w-full bg-slate-200 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={cardTitle}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      {/* Floating Icon Badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-navy-950 shadow-md border border-slate-200/80 flex items-center justify-center">
                        {getIndustryIcon(industry.id, "w-5 h-5 text-amber-600")}
                      </div>

                      {/* Card Title over image */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold font-display text-white drop-shadow-sm" style={fontStyle}>
                          {cardTitle}
                        </h3>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-4">
                        <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                          {cardDesc}
                        </p>

                        {/* Subcategory Highlights Bullet List */}
                        {subcategories.length > 0 && (
                          <div className="pt-3 border-t border-slate-200/80 space-y-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400" style={fontStyle}>
                              {isRTL ? "أبرز منتجات القطاع:" : "Popular Offerings:"}
                            </span>
                            <ul className="space-y-1.5">
                              {subcategories.map((sub, i) => {
                                const subText = isRTL ? (SUBCATEGORY_ARABIC_MAP[sub] || sub) : sub;
                                return (
                                  <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                    <span style={fontStyle}>{subText}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Card Action Link */}
                      <div className="pt-3 border-t border-slate-200">
                        <Link
                          href={industry.href || "/contact#quote"}
                          className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white hover:bg-navy-950 text-navy-950 hover:text-white border border-slate-200 hover:border-navy-950 font-semibold text-sm transition-all group/btn"
                          style={fontStyle}
                        >
                          <span>{isRTL ? "عرض تفاصيل القطاع" : "View Industry Apparel"}</span>
                          <ArrowRight
                            className="w-4 h-4 text-amber-500 group-hover/btn:translate-x-1 transition-transform"
                            style={isRTL ? { transform: "rotate(180deg)" } : {}}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. Why Choose Amal Uniforms for Your Industry ─────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-100 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-amber-600" style={fontStyle}>
                {t("sections.whyAmal.label")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-navy-950" style={fontStyle}>
                {t("sections.whyAmal.title")}
              </h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full" />
              <p className="text-base text-slate-600" style={fontStyle}>
                {t("sections.whyAmal.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950" style={fontStyle}>
                  {t("valueProps.saudiBasedManufacturing.title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                  {t("valueProps.saudiBasedManufacturing.description")}
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950" style={fontStyle}>
                  {t("valueProps.premiumMaterials.title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                  {t("valueProps.premiumMaterials.description")}
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950" style={fontStyle}>
                  {t("valueProps.customBranding.title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                  {t("valueProps.customBranding.description")}
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-950" style={fontStyle}>
                  {t("valueProps.fastTurnaround.title")}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                  {t("valueProps.fastTurnaround.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. CTA Banner Section ───────────────────────────────────────────── */}
        <ServiceCtaBanner
          ctaBanner={{
            bgImage: "/images/industries/corporatess.png",
            title: isRTL
              ? "هل تحتاج زي موحد مخصص لشركتك أو منشأتك؟"
              : "Need Custom Industry Uniforms for Your Enterprise?",
            subtitle: isRTL
              ? "فريقنا المتخصص بالرياض جاهز لمساعدتك في التكلفة والتصنيع والتصميم بأعلى معايير الجودة."
              : "Contact our Riyadh team today for bespoke design samples, fabric swatches, and competitive bulk pricing.",
            primaryBtn: {
              text: t("nav.requestQuote"),
              href: "/contact#quote",
            },
            secondaryBtn: {
              text: t("nav.callUs"),
              href: BUSINESS.phoneHref,
            },
          }}
          primaryBtnClass="bg-amber-500 text-navy-950 hover:bg-amber-400 font-bold"
          imageAlt="Custom uniform manufacturing KSA"
        />

        {/* ── 5. Bottom Trust Badges Bar ──────────────────────────────────────── */}
        <section className="bg-white py-10 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700" style={fontStyle}>
                  {isRTL ? "15+ عاماً من الخبرة" : "15+ Years Industry Experience"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700" style={fontStyle}>
                  {isRTL ? "مصنع محلي في الرياض" : "Local Factory in Riyadh"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700" style={fontStyle}>
                  {isRTL ? "توصيل لكافة مدن المملكة" : "Delivery Across KSA"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700" style={fontStyle}>
                  {isRTL ? "أعلى معايير الجودة والقماش" : "Certified Premium Quality"}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
