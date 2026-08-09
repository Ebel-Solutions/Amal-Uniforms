"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { customManufacturingData } from "@/data/custom-manufacturing";
import ServiceCtaBanner from "@/components/sections/ServiceCtaBanner";
import { useLanguage } from "@/lib/LanguageContext";
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

const MANUFACTURING_ARABIC_MAP: Record<string, string> = {
  // Hero
  "Custom Uniform Design & Manufacturing": "تصميم وتصنيع الزي الموحد المخصص",
  "Bespoke uniform manufacturing in Riyadh, Saudi Arabia — from initial concept sketches and fabric sourcing to precision pattern making, prototyping, and enterprise bulk production.":
    "إنتاج الزي الموحد المخصص في الرياض، المملكة العربية السعودية — من الرسوم التخطيطية الأولى وتأمين الأقمشة إلى صياغة الأنماط، تطوير العينات، والإنتاج الضخم للشركات.",
  "View Manufacturing Services": "عرض خدمات التصنيع",
  "Request Manufacturing Quote": "طلب عرض سعر تصنيع",
  "Riyadh Production Facility": "مصنع الإنتاج بالرياض",
  "Bespoke Pattern Design": "تصميم أنماط خياطة مخصصة",
  "ISO 9001 Certified Quality": "جودة معتمدة بمواصفات ISO 9001",

  // Section Header
  "Our Manufacturing Capabilities": "إمكانيات التصنيع لدينا",
  "From single prototype development to enterprise-scale production runs of 50,000+ units, our Riyadh facility delivers end-to-end custom apparel manufacturing tailored to your brand standards.":
    "من تطوير العينة الأولى حتى طلبات الإنتاج التجاري الضخم لأكثر من 50,000 قطعة، يقدم مصنعنا بالرياض خدمات تصنيع الملابس المخصصة المتكاملة والمطابقة لمعايير هويتك.",

  // Services Titles & Descriptions
  "Full-scope bespoke uniform creation from brand conceptualization, technical flat sketches, and fabric selection to complete garment manufacturing aligned with your corporate identity.":
    "إنتاج متكامل للزي الموحد من ابتكار مفهوم الهوية، الرسومات الفنية التفصيلية، وتحديد الأقمشة حتى التصنيع النهائي المطابق لهويتك المؤسسية.",

  "Bulk Uniform Production": "إنتاج الزي الموحد بالجملة",
  "Large-scale commercial garment production capable of producing thousands of uniform units per week with strict color consistency, stitch quality, and bulk order pricing.":
    "إنتاج ملابس تجاري ضخم قادر على تصنيع آلاف القطع أسبوعياً مع تطابق صارم للألوان، جودة الخياطة، وأسعار توريد تنافسية للجملة.",

  "Sample Development & Prototyping": "تطوير العينات والنماذج الأولية",
  "Rapid pre-production sample creation allowing clients to physically inspect fabric quality, fit, drape, and logo placement before authorizing full production runs.":
    "إنتاج عينات أولية سريعة تتيح للعملاء معاينة جودة القماش، المقاس، وانسيابية القطعة ومكان الشعار قبل اعتماد خط الإنتاج الكامل.",

  "Custom Sizing & Fitting Services": "خدمات القياس وأخذ المقاسات المخصصة",
  "On-site measurement sessions across Saudi Arabia and custom size grading to ensure every team member receives a perfectly fitted garment for maximum comfort.":
    "جلسات أخذ مقاسات ميدانية في كافة مناطق المملكة العربية السعودية وتدريج للمقاسات لضمان أن يحصل كل موظف على مقاس مثالي ومريح.",

  "Private Label Manufacturing": "التصنيع بالعلامة التجارية الخاصة (Private Label)",
  "Complete OEM/ODM private label manufacturing including custom neck labels, size tags, care instructions, branded hangtags, and custom packaging.":
    "تصنيع كامل بالعلامة الخاصة OEM/ODM يشمل بطاقات الرقبة المنسوجة، ملصقات المقاسات والعناية، الكروت المعلّمة، والتغليف المخصص.",

  "Made-to-Order Uniforms": "الزي الموحد حسب الطلب",
  "Tailored on-demand manufacturing for executive suits, specialized medical apparel, and VIP hospitality wear — crafted piece-by-piece to individual specifications.":
    "خياطة وتفصيل حسب الطلب لبدلات كبار التنفيذيين، ملابس الكوادر الطبية المتخصصة، وزي الضيافة الفاخرة — صُنعت قطعةً بقطعة وفق المواصفات الخاصة.",

  "Pattern Making & CAD Grading": "صناعة الأنماط وتدريج الـ CAD",
  "Computer-aided CAD pattern creation, digital pattern grading, and marker optimization to minimize fabric waste while delivering ergonomic, movement-friendly garment cuts.":
    "تصميم الأنماط بنظام CAD الرقمي، تدريج المقاسات بالكمبيوتر، وتقليل هدر الأقمشة مع تقديم قصات عمل مريحة ومطابقة للحركة.",

  // Feature Tags
  "Concept to creation": "من الفكرة حتى التنفيذ",
  "Brand color matching": "مطابقة ألوان العلامة التجارية",
  "Technical flat sketches": "رسومات فنية تفصيلية",
  "End-to-end production": "إنتاج متكامل من البداية للنهاية",
  "High-volume capacity": "طاقة إنتاجية ضخمة",
  "Strict quality control": "ضبط جودة صارم",
  "Kingdom-wide delivery": "توصيل لجميع مناطق المملكة",
  "Bulk pricing tiers": "شرائح أسعار للجملة",
  "Rapid prototype turn": "إنتاج عينات سريع",
  "Physical sample review": "معاينة عينة فعلية",
  "Fit & fabric testing": "اختبار المقاس والأقمشة",
  "Revisions included": "تعديلات متاح إجراؤها",
  "On-site measuring team": "فريق أخذ مقاسات بموقعك",
  "Inclusive size grading": "تدريج شامل لكافة المقاسات",
  "Custom length adjustments": "تعديلات الأطوال المخصصة",
  "Size chart support": "دعم جداول المقاسات",
  "Custom woven neck tags": "بطاقات رقبة منسوجة مخصصة",
  "Branded hangtags": "كروت معلّمة بالشعار",
  "Custom polybag packing": "تغليف أكياس مخصص",
  "OEM/ODM services": "خدمات التصنيع OEM/ODM",
  "On-demand tailoring": "خياطة وتفصيل حسب الطلب",
  "VIP & executive grade": "درجة فاخرة للتنفيذيين",
  "Bespoke fabric choices": "خيارات أقمشة مخصصة",
  "Individual packaging": "تغليف فردي لكل قطعة",
  "CAD pattern drafting": "رسم الأنماط بنظام CAD",
  "Digital size grading": "تدريج المقاسات رقمياً",
  "Ergonomic cuts": "قصات مريحة ومطابقة للحركة",
  "Zero-waste marker layout": "تقليل هدر الأقمشة إلى الصفر",

  // Process Section
  "Our 6-Step Manufacturing Process": "خطوات التصنيع الست لدينا",
  "A streamlined, transparent production lifecycle ensuring perfection from concept to delivery.":
    "دورة إنتاج منظمة وشفافة تضمن أقصى درجات الإتقان من الفكرة وحتى التسليم.",

  "Consultation & Briefing": "الاستشارة وتحديد المتطلبات",
  "We analyze your brand guidelines, team size, climate requirements, and working environment to define the exact uniform specifications.":
    "نحلل دليلك البصري، حجم الفريق، متطلبات المناخ، وبيئة العمل لتحديد المواصفات الدقيقة للزي الموحد.",

  "Design & Technical Specs": "التصميم والمواصفات الفنية",
  "Our design studio drafts technical flat sketches, Pantone color palettes, and fabric swatch combinations for client review.":
    "يقوم استوديو التصميم بإعداد رسومات فنية تفصيلية، درجات ألوان بانتون، وتشكيلات عينات الأقمشة لمراجعة العملاء.",

  "Sample Prototyping": "إنتاج العينة الأولية",
  "We craft a physical prototype sample garment for your team to inspect fit, fabric weight, stitching, and logo embroidery.":
    "نقوم بتصنيع عينة أولية فعلية ليتسنى لفريقك معاينة المقاس، وزن القماش، جودة الخياطة، وتطريز الشعار.",

  "Pattern Grading & Cutting": "تدريج الأنماط والقص الآلي",
  "CAD pattern markers are graded for all sizes and precision automated cutting machines process fabric rolls with minimal waste.":
    "تُدرج أنماط CAD لكافة المقاسات وتُقص رول الأقمشة بواسطة آلات قص كمبيوترية عالية الدقة بأقل نسبة هدر.",

  "Stitching & Quality Control": "الخياطة وضبط الجودة",
  "Garments move through specialized assembly lines with inline quality inspections for seam strength, measurements, and finishing.":
    "تنتقل الملابس عبر خطوط تجميع تخصصية مع فحص دقيق لقوة الخياطة، الأبعاد، واللمسات النهائية.",

  "KSA Delivery & Support": "التسليم داخل المملكة والدعم",
  "Finished uniforms are individually polybagged, boxed by department, and dispatched across Saudi Arabia with dedicated account support.":
    "تُغلف الملابس الجاهزة أكياساً فردية، وتُعبأ في كراتين حسب الأقسام، وتُشحن لمختلف مناطق المملكة مع دعم حساب مخصص.",

  // Why Choose Section
  "Why Partner with Amal for Custom Manufacturing?": "لماذا تختار أمل للشراكة في تصنيع الزي الموحد؟",

  "Saudi-Based Facility": "مصنع محلي بالمملكة",
  "Our Riyadh manufacturing plant guarantees fast turnaround times, direct oversight, and zero import tariff delays for KSA clients.":
    "يضمن مصنعنا بالرياض سرعة التنفيذ، الإشراف المباشر، وعدم وجود أي تأخير في الجمارك أو الاستيراد لعملائنا في المملكة.",

  "Saudi Climate Fabrics": "أقمشة ملائمة للمناخ السعودي",
  "We source breathable, moisture-wicking, anti-bacterial, and UV-resistant fabrics engineered specifically for Saudi Arabia's environment.":
    "نوفر أقمشة مريحة للتنفس، طاردة للرطوبة، مضادة للبكتيريا ومقاومة للأشعة فوق البنفسجية مصممة خصيصاً لبيئة المملكة.",

  "Enterprise Capacity": "طاقة إنتاجية ضخمة للشركات",
  "Equipped to fulfill monthly production orders from 50 to 50,000+ units with guaranteed delivery schedules and dedicated account management.":
    "مجهزون لتلبية طلبات الإنتاج الشهرية من 50 حتى 50,000+ قطعة مع الالتزام بمواعيد التسليم ودعم مخصص لكل عميل.",

  // Trust Badges
  "Trusted by 500+ KSA Enterprises": "محل ثقة أكثر من 500 مؤسسة بالمملكة",
  "ISO 9001 Quality Certified": "جودة معتمدة شهادة ISO 9001",
  "Direct Riyadh Factory Production": "إنتاج مباشر من مصنعنا بالرياض",
  "Dedicated Account Support": "دعم وإشراف مباشر للحسابات",
};

function getIcon(name: string, className: string = "w-5 h-5") {
  const props = { className };
  switch (name) {
    case "Factory": return <Factory {...props} />;
    case "Scissors": return <Scissors {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "Palette": return <Palette {...props} />;
    case "Boxes": return <Boxes {...props} />;
    case "Layers": return <Layers {...props} />;
    case "Ruler": return <Ruler {...props} />;
    case "Tag": return <Tag {...props} />;
    case "Shirt": return <Shirt {...props} />;
    case "Cpu": return <Cpu {...props} />;
    case "FileText": return <FileText {...props} />;
    case "Truck": return <Truck {...props} />;
    case "Building2": return <Building2 {...props} />;
    case "Award": return <Award {...props} />;
    case "Headphones": return <Headphones {...props} />;
    case "Clock": return <Clock {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    default: return <Factory {...props} />;
  }
}

export default function CustomManufacturingPageContent() {
  const { t, isRTL } = useLanguage();
  const { hero, section, services, process, whyChoose, ctaBanner, trustBadges, theme } =
    customManufacturingData;

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  const translate = (text: string) => {
    if (!isRTL) return text;
    if (MANUFACTURING_ARABIC_MAP[text]) return MANUFACTURING_ARABIC_MAP[text];
    const subnavTr = t(`subnav.${text}`);
    if (subnavTr && subnavTr !== `subnav.${text}`) return subnavTr;
    const mfTr = t(`customManufacturing.${text}`);
    if (mfTr && mfTr !== `customManufacturing.${text}`) return mfTr;
    return text;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
      <Header />

      <main className="flex-1 pt-18 lg:pt-20">
        {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-900 min-h-[400px] lg:min-h-[480px] flex items-center">
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
              {hero.breadcrumbs.map((crumb, idx) => {
                const crumbLabel = crumb.label === "Home" ? t("nav.home") : t("nav.customManufacturing");
                return (
                  <div key={crumb.label} className="flex items-center gap-2">
                    {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                    <Link href={crumb.href} className="hover:text-white transition-colors" style={fontStyle}>
                      {crumbLabel}
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div className="max-w-2xl space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <Factory className="w-3.5 h-3.5" />
                <span style={fontStyle}>{isRTL ? "منشأة التصنيع بالسعودية" : "Saudi Manufacturing Facility"}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.08]" style={fontStyle}>
                {translate(hero.title)}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed" style={fontStyle}>
                {translate(hero.subtitle)}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href={hero.primaryBtn.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-semibold text-sm rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 group"
                  style={fontStyle}
                >
                  <span>{isRTL ? t("common.requestQuote") : translate(hero.primaryBtn.text)}</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    style={isRTL ? { transform: "rotate(180deg)" } : {}}
                  />
                </Link>
                <Link
                  href={hero.secondaryBtn.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold text-sm rounded-xl hover:bg-white/20 transition-all group"
                  style={fontStyle}
                >
                  <span>{isRTL ? t("common.downloadCatalog") : translate(hero.secondaryBtn.text)}</span>
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
                    <span style={fontStyle}>{translate(item.label)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Services Section ───────────────────────────────────────────── */}
        <section id="services" className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight" style={fontStyle}>
                {translate(section.title)}
              </h2>
              <div className={`w-12 h-1 ${theme.dividerBar} mx-auto rounded-full`} />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={fontStyle}>
                {translate(section.description)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400/40 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-blue-600 shadow-md border border-slate-200/80 flex items-center justify-center">
                      {getIcon(service.badgeIcon, "w-5 h-5")}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className={`text-xl font-bold text-navy-950 ${theme.cardHoverText} transition-colors`} style={fontStyle}>
                        {translate(service.title)}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3" style={fontStyle}>
                        {translate(service.description)}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href={service.href || "/contact#quote"}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${theme.cardLinkText} group/link`}
                        style={fontStyle}
                      >
                        <span>{isRTL ? "طلب عرض سعر تصنيع" : "Request Manufacturing Quote"}</span>
                        <ArrowRight
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                          style={isRTL ? { transform: "rotate(180deg)" } : {}}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Process Section ───────────────────────────────────────────── */}
        <section className="py-14 lg:py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 tracking-tight" style={fontStyle}>
                {translate(process.title)}
              </h2>
              <div className={`w-12 h-1 ${theme.dividerBar} mx-auto rounded-full`} />
              <p className="text-base text-slate-600 leading-relaxed" style={fontStyle}>{translate(process.subtitle)}</p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[52px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {process.steps.map((step) => (
                  <div key={step.step} className="flex flex-col items-center text-center space-y-3">
                    <div className="relative flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-full ${theme.badgeBg} border-2 ${theme.badgeBorder} ${theme.badgeText} flex items-center justify-center shadow-sm bg-white`}>
                        {getIcon(step.icon, "w-6 h-6")}
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-navy-950" style={fontStyle}>{translate(step.title)}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed" style={fontStyle}>{translate(step.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Why Choose Section ────────────────────────────────────────── */}
        <section className="py-14 lg:py-20 bg-white border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950" style={fontStyle}>
                {translate(whyChoose.title)}
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
                  <h3 className="text-lg font-bold text-navy-950" style={fontStyle}>{translate(item.title)}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>{translate(item.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. CTA Banner ────────────────────────────────────────────────── */}
        <ServiceCtaBanner
          ctaBanner={{
            ...ctaBanner,
            title: isRTL ? "هل تبحث عن مصنع زي موحد متخصص لمشروعك؟" : ctaBanner.title,
            subtitle: isRTL ? "تواصل مع مهندسي الإنتاج لدينا بالرياض لبدء تطوير العينات وتأمين الكميات المطلوب بالجدول الزمني المحدد." : ctaBanner.subtitle,
          }}
          primaryBtnClass={theme.ctaPrimaryBtn}
          imageAlt="Custom uniform manufacturing facility"
        />

        {/* ── 6. Trust Badges Bar ──────────────────────────────────────────── */}
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
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center sm:text-left leading-tight" style={fontStyle}>
                    {translate(badge.text)}
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
