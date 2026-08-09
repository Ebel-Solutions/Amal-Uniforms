"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { embroideryData } from "@/data/embroidery";
import ServiceCtaBanner from "@/components/sections/ServiceCtaBanner";
import { useLanguage } from "@/lib/LanguageContext";
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

const EMBROIDERY_ARABIC_MAP: Record<string, string> = {
  // Hero & Section Header
  "Professional Embroidery Services": "خدمات التطريز المحوسب الاحترافية",
  "Precision machine embroidery for uniforms, corporate apparel, and promotional garments — crafted in Riyadh with world-class equipment and vibrant thread quality.":
    "تطريز آلي محوسب عالي الدقة للزي الموحد والملابس المؤسسية والترويجية — صُنع في الرياض بمعدات عالمية وخيوط راقية ثابتة الألوان.",
  "View All Services": "عرض جميع خدمات التطريز",
  "Get a Quote": "طلب عرض سعر",
  "High-Density Stitching": "كثافة غرز عالية ودقيقة",
  "Pantone Color Matching": "مطابقة دقيقة لألوان بانتون",
  "ISO Quality Standards": "معايير جودة ISO معتمدة",

  "Our Embroidery Services": "خدمات التطريز لدينا",
  "From classic flat embroidery to 3D puff designs, we offer a comprehensive range of precision embroidery solutions for every garment type and branding need.":
    "من التطريز المسطح الكلاسيكي إلى التصاميم ثلاثية الأبعاد (3D Puff)، نقدم مجموعة متكاملة من حلول التطريز الدقيق لكافة أنواع الملابس والهويات.",

  // All 12 Services Titles & Descriptions
  "Computerized Embroidery": "التطريز المحوسب",
  "State-of-the-art multi-head computerized embroidery machines delivering pixel-perfect logo and design replication on any fabric type with consistent quality across bulk orders.":
    "آلات تطريز محوسبة متطورة متعددة الرؤوس تُنفذ الشعار والتصميم بدقة متناهية على أي نوع قماش وبجودة ثابتة في كافة الطلبات.",

  "Name Embroidery": "تطريز الأسماء",
  "Personalized name stitching on uniforms, workwear, and corporate shirts in a wide range of fonts and thread colors. Perfect for staff identification and team branding.":
    "تطريز أسماء الموظفين والكادر على السكراب والقمصان والسترات بمجموعة واسعة من الخطوط والألوان لمظهر مهني منظم.",

  "Cap Embroidery": "تطريز القبعات (الكابات)",
  "Structured cap and baseball hat embroidery with precise tension control for curved surfaces. Ideal for corporate caps, sports teams, and event merchandise.":
    "تطريز القبعات البيسبول والرياضية مع ضبط دقيق للشد على الأسطح المنحنية. مثالي لقبعات الشركات والفرق والفعاليات.",

  "Polo Shirt Embroidery": "تطريز قمصان البولو",
  "Clean, professional logo embroidery on polo shirts for retail staff, corporate teams, and promotional events. Perfectly positioned left-chest, sleeve, or back placement.":
    "تطريز شعار رسمي وأنيق على قمصان البولو لموظفي المتاجر وفرق الشركات في مواقع الصدر أو الأكمام أو الظهر.",

  "3D Puff Embroidery": "التطريز ثلاثي الأبعاد (3D Puff)",
  "Bold, raised 3D embroidery using foam underlay beneath the stitching — creating striking dimensional logos and text with premium texture and visual impact.":
    "تطريز ثلاثي الأبعاد بارز وجريء باستخدام طبقات الفوم تحت الخياطة — يمنح الشعار مجسمات ونفرات ممتازة تجذب الانتباه.",

  "Woven Labels & Badges": "الشارات والبطاقات المنسوجة المخصصة",
  "Custom woven fabric labels and badges for branding, size labels, care labels, and uniform identification — produced on high-density looms for sharp, crisp detail.":
    "بطاقات وشارات أقمشة منسوجة مخصصة للهوية وأحجام الملابس ومعلومات العناية بشعارات عالية الكثافة والدقة.",

  "Corporate Logo Embroidery": "تطريز شعارات الشركات",
  "Exact brand-standard logo replication with pantone-matched thread colors and high stitch density. Used across executive shirts, blazers, and corporate workwear programs.":
    "تطبيق دقيق لمعايير العلامة التجارية بألوان خيوط مطابقة لبانتون وكثافة غرز عالية للبدلات والقمصان والزي المؤسسي.",

  "Monogram Embroidery": "تطريز المونوغرام والأحرف",
  "Elegant monogram and initial embroidery for premium garments, hospitality uniforms, and executive wear — adding a distinguished, personalized touch to every piece.":
    "تطريز المونوغرام والأحرف الأولى الأنيق لملابس الضيافة الفاخرة وكبار التنفيذيين يضفي لمسة مخصصة متميزة.",

  "Jacket Embroidery": "تطريز السترات والجاكيتات",
  "Heavy-duty embroidery on work jackets, safety jackets, and corporate outerwear. Reinforced backing and dense stitching ensure durability through years of daily use.":
    "تطريز ثقيل على سترات العمل وجاكيتات السلامة والملابس الخارجية مع حشوات مقواة تضمن المتانة والتحمل اليومي.",

  "Uniform Badge Embroidery": "تطريز الشارات العسكرية والأمنية",
  "Rank badges, department patches, and authority identifiers embroidered directly onto uniforms or as removable Velcro-backed patches for security, aviation, and military use.":
    "شارات الرتب وشعارات الأقسام وأوسمة الهيئة المباشرة أو اللاصقة بالفيلكرو للاستخدام في قطاعات الأمن والطيران والدوريات.",

  "Custom Embroidery Patches": "شارات التطريز المخصصة (Patches)",
  "Fully custom shaped embroidery patches with iron-on, sew-on, or Velcro backing — designed to your artwork with border merrowing and vibrant color fills.":
    "شارات مطرزة مخصصة بالكامل بأشكال وحواف مختلفة مع خيارات التثبيت بالكي أو الخياطة أو الفيلكرو.",

  "Embroidered Emblems": "الشعارات والأوسمة المطرزة الفاخرة",
  "Detailed embroidered emblems and crests for school blazers, sports clubs, corporate identity, and ceremonial uniforms — capturing intricate artwork with exceptional fidelity.":
    "شعارات وأوسمة فاخرة مفصلة لبلازرات المدارس والنوادي الرياضية والزي الأكاديمي والاحتفالي مع دقة فائقة للتفاصيل.",

  // Process Steps
  "How Our Embroidery Process Works": "كيف تعمل عملية التطريز لدينا",
  "From artwork submission to final delivery — a seamless 5-step quality process.":
    "من تقديم التصميم حتى التسليم النهائي — 5 خطوات منظمة تضمن أعلى مستويات الجودة.",

  "Submit Your Artwork": "إرسال التصميم والشعار",
  "Send us your logo or design file in any format (AI, PDF, PNG, JPG). Our digitizing team converts it into an optimized embroidery DST/PES file.":
    "أرسل لنا ملف التصميم أو الشعار بأي صيغة (AI, PDF, PNG, JPG)، ويقوم فريق البرمجة لدينا بتحويله إلى ملف تطريز محوسب ممتاز (DST/PES).",

  "Digitizing & Stitch Planning": "البرمجة وتخطيط الغرز",
  "Our expert digitizers optimize stitch paths, density, underlay, and thread colors to ensure perfect replication of your design on any fabric.":
    "يحسن خبراء البرمجة لدينا مسارات الغرز والكثافة والحشوة وألوان الخيوط لضمان تطابق الشعار بدقة على أي نوع من الأقمشة.",

  "Sample Approval": "اعتماد العينة الأولية",
  "We produce a physical stitch-out sample for your review and approval before committing to full production — ensuring 100% brand accuracy.":
    "ننتج عينة تطريز فعلية لمراجعتك واعتماها قبل البدء في الإنتاج الكلي لضمان مطابقة الهوية بنسبة 100%.",

  "Full Production Run": "تشغيل الإنتاج الكامل",
  "Our multi-head machines run your approved design across your full order quantity with consistent tension, color, and registration.":
    "تُنفذ آلاتنا متعددة الرؤوس تصميمك المعتمد على جميع الكميات المطلوبة بثبات تام في الشد والألوان والتطابق.",

  "Quality Inspection & Delivery": "فحص الجودة والتسليم",
  "Every embroidered piece passes thread-count, pull-test, and visual inspection before packaging and delivery across Saudi Arabia.":
    "تخضع كل قطعة مطرزة لفحص شد الخيط واختبار المتانة والفحص البصري قبل التعبئة والتوصيل لجميع مناطق المملكة.",

  // Why Choose Section
  "Why Choose Amal Embroidery?": "لماذا تختار أمل للتطريز؟",

  "Computerized Precision": "دقة محوسبة فائقة",
  "Multi-head Tajima and Barudan machines with up to 15-needle heads delivering sharp, consistent stitching at high production speed.":
    "آلات تطريز Tajima و Barudan متعددة الرؤوس حتى 15 إبرة لكل رأس لتقديم غرز حادة ومتناسقة بسرعة إنتاجية عالية.",

  "1,000+ Thread Colors": "أكثر من 1,000 لون خيط",
  "Pantone-matched Madeira and Isacord thread library with metallic, glow-in-dark, and specialty options for any brand requirement.":
    "مكتبة خيوط Madeira و Isacord مطابقة لألوان بانتون تشمل الخيوط المعدنية واللامعة والمخصصة لكافة متطلبات الهوية.",

  "Durable & Colourfast": "متانة وثبات ألوان عالي",
  "Embroidery that withstands 60°C industrial washing, UV exposure, and years of daily wear without fading, pilling, or thread breakage.":
    "تطريز يتحمل الغسيل الصناعي عند 60 درجة مئوية، وأشعة الشمس والتعرض اليومي لسنوات دون بهتان أو انقطاع في الخيوط.",

  "Fast Bulk Turnaround": "سرعة تنفيذ الطلبات الكبيرة",
  "Production capacity of 10,000+ pieces per week with 48-hour sample turnaround and on-time delivery guaranteed across the Kingdom.":
    "طاقة إنتاجية تزيد عن 10,000 قطعة أسبوعياً مع تسليم العينات خلال 48 ساعة والتزام تام بالمواعيد في كافة أنحاء المملكة.",

  // Trust Badges
  "Trusted by 500+ Saudi Businesses": "محل ثقة أكثر من 500 منشأة سعودية",
  "ISO Certified Embroidery Quality": "جودة تطريز معتمدة بمواصفات ISO",
  "Tajima & Barudan Machines": "آلات Tajima & Barudan الأحدث عالمياً",
  "Free Digitizing Consultation": "استشارة وبرمجة مجانية للشعار",

  // Feature Tags
  "Multi-head machines": "آلات متعددة الرؤوس",
  "Consistent bulk output": "إنتاج بالجملة متناسق",
  "Any fabric type": "مناسب لجميع أنواع الأقمشة",
  "Digital file support": "دعم الملفات الرقمية",
  "Custom fonts & scripts": "خطوط مخصصة ومتنوعة",
  "Gold & metallic threads": "خيوط ذهبية ومعدنية",
  "Any garment position": "في أي موضع للملابس",
  "Fast turnaround": "سرعة التنفيذ والتسليم",
  "Curved surface expertise": "خبرة في الأسطح المنحنية",
  "Flat & 3D options": "خيارات مسطحة وثلاثية الأبعاد",
  "Structured & unstructured caps": "قبعات هيكلية وغير هيكلية",
  "Bulk discounts": "خصومات للكميات الكبيرة",
  "Left-chest & sleeve placement": "تثبيت الصدر الأيسر والأكمام",
  "Retail & corporate grade": "درجة تجارية ومؤسسية",
  "Colourfast threads": "خيوط ثابتة الألوان",
  "Wholesale pricing": "أسعار جملة تنافسية",
  "Foam underlay technique": "تقنية الحشوة الفوم",
  "Bold raised lettering": "حروف بارزة وجريئة",
  "Premium visual impact": "تأثير بصرّي فاخر",
  "Cap & apparel ready": "جاهز للقبعات والملابس",
  "Woven & printed options": "خيارات منسوجة ومطبوعة",
  "Care & size labels": "بطاقات العناية والمقاس",
  "Uniform ID patches": "شارات تعريف الزي الموحد",
  "Custom shapes & sizes": "أشكال وأحجام مخصصة",
  "Pantone thread matching": "مطابقة خيوط بانتون",
  "High stitch density": "كثافة غرز عالية",
  "Brand guideline compliance": "مطابقة إرشادات العلامة",
  "Sample approval process": "عملية اعتماد العينات",
  "Classic & modern scripts": "خطوط كلاسيكية وعصرية",
  "Gold & silver thread": "خيوط ذهبية وفضية",
  "Hospitality & VIP wear": "ملابس الضيافة وكبار الشخصيات",
  "Bespoke letter styles": "أنماط حروف مخصصة",
  "Reinforced backing": "بطانة مقواة متينة",
  "Heavy fabric capable": "قدرة على التعامل مع الأقمشة الثقيلة",
  "Safety & corporate jackets": "سترات السلامة والشركات",
  "Long-lasting stitching": "غرز طويلة الأمد",
  "Velcro-backed patches": "شارات بخلفية فيلكرو",
  "Direct stitch-on badges": "شارات تطريز مباشر",
  "Rank & department IDs": "معرفات الرتب والأقسام",
  "Security & aviation grade": "معتمد للأمن والطيران",
  "Custom shapes & borders": "أشكال وحواف مخصصة",
  "Iron-on / sew-on / Velcro": "كي / خياطة / فيلكرو",
  "Vibrant color fills": "تعبئة ألوان زاهية",
  "Minimum 50 pieces": "حد أدنى 50 قطعة",
  "Intricate crest details": "تفاصيل شعار دقيقة",
  "School & club blazers": "بلازرات المدارس والنوادي",
  "Ceremonial uniforms": "زي الاحتفالات الرسمية",
  "Archive-quality threads": "خيوط ذات جودة عالية",
};

function getIcon(name: string, className: string = "w-5 h-5") {
  const props = { className };
  switch (name) {
    case "Cpu": return <Cpu {...props} />;
    case "Palette": return <Palette {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Briefcase": return <Briefcase {...props} />;
    case "Award": return <Award {...props} />;
    case "UserCheck": return <UserCheck {...props} />;
    case "Headphones": return <Headphones {...props} />;
    case "Shirt": return <Shirt {...props} />;
    case "Scissors": return <Scissors {...props} />;
    case "Clock": return <Clock className={className} />;
    case "Building2": return <Building2 {...props} />;
    case "Layers": return <Layers {...props} />;
    case "Tag": return <Tag {...props} />;
    case "Star": return <Star {...props} />;
    case "Zap": return <Zap {...props} />;
    case "Gem": return <Gem {...props} />;
    case "Upload": return <Upload {...props} />;
    case "CheckCircle": return <CheckCircle {...props} />;
    case "Settings": return <Settings {...props} />;
    case "Truck": return <Truck {...props} />;
    case "Users": return <Users {...props} />;
    default: return <Sparkles {...props} />;
  }
}

export default function EmbroideryPageContent() {
  const { t, isRTL } = useLanguage();
  const { hero, section, services, process, whyChoose, ctaBanner, trustBadges, theme } =
    embroideryData;

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  const translate = (text: string) => {
    if (!isRTL) return text;
    if (EMBROIDERY_ARABIC_MAP[text]) return EMBROIDERY_ARABIC_MAP[text];
    const subnavTr = t(`subnav.${text}`);
    if (subnavTr && subnavTr !== `subnav.${text}`) return subnavTr;
    const embTr = t(`embroidery.${text}`);
    if (embTr && embTr !== `embroidery.${text}`) return embTr;
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
              alt="Professional embroidery services"
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
                const crumbLabel = crumb.label === "Home" ? t("nav.home") : t("nav.embroidery");
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-600/20 border border-violet-500/30 rounded-full text-violet-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span style={fontStyle}>{isRTL ? "تطريز فاخر محوسب بالرياض" : "Riyadh Embroidery Facility"}</span>
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-violet-600 text-white font-semibold text-sm rounded-xl hover:bg-violet-500 transition-all shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 group"
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
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-violet-400/40 transition-all duration-300 flex flex-col overflow-hidden"
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
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-violet-600 shadow-md border border-slate-200/80 flex items-center justify-center">
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
                        <span>{isRTL ? "طلب عرض سعر تطريز" : "Request Embroidery Quote"}</span>
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
              <div className="hidden lg:block absolute top-[52px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {process.steps.map((step) => (
                  <div key={step.step} className="flex flex-col items-center text-center space-y-3">
                    <div className="relative flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-full ${theme.badgeBg} border-2 ${theme.badgeBorder} ${theme.badgeText} flex items-center justify-center shadow-sm bg-white`}>
                        {getIcon(step.icon, "w-6 h-6")}
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
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
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-violet-200 transition-all duration-300 space-y-3"
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
            title: isRTL ? "هل تحتاج إلى خياطة وتطريز شعارات لشركتك؟" : ctaBanner.title,
            subtitle: isRTL ? "تواصل مع قسم التطريز لدينا بالرياض للحصول على عينات الغرز ومواصفات خيوط الألوان." : ctaBanner.subtitle,
          }}
          primaryBtnClass={theme.ctaPrimaryBtn}
          imageAlt="Computerized embroidery facility"
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
