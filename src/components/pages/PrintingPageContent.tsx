"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { printingData } from "@/data/printing";
import ServiceCtaBanner from "@/components/sections/ServiceCtaBanner";
import { useLanguage } from "@/lib/LanguageContext";
import {
  ChevronRight,
  ArrowRight,
  Download,
  Printer,
  Palette,
  ShieldCheck,
  Sparkles,
  Award,
  Headphones,
  Shirt,
  Scissors,
  Layers,
  Tag,
  Zap,
  Cpu,
  Upload,
  CheckCircle,
  Factory,
  Truck,
  Building2,
  Boxes,
  UserCheck,
  Hash,
  Flame,
  Droplets,
  Activity,
} from "lucide-react";

const PRINTING_ARABIC_MAP: Record<string, string> = {
  // Hero & Section Header
  "Professional Garment Printing Services": "خدمات طباعة الملابس الاحترافية",
  "Full-spectrum garment and textile printing in Riyadh — screen printing, DTG digital printing, heat transfer, and sublimation for corporate uniforms, promotional apparel, and branded workwear.":
    "خدمات طباعة شاملة للملابس والأنسجة بالرياض — طباعة حريرية، طباعة رقمية DTG، نقل حراري، وطباعة تسامي للزي الموحد، والملابس الترويجية.",
  "Explore Printing Services": "استعرض خدمات الطباعة",
  "Get a Printing Quote": "طلب عرض سعر طباعة",
  "4 Printing Technologies": "4 تقنيات طباعة حديثة",
  "Pantone Color Matching": "مطابقة دقيقة لألوان بانتون",
  "Wash-Fast Guaranteed": "ثبات الألوان ومقاومة الغسيل",

  "Our Printing Services": "خدمات الطباعة لدينا",
  "From precision logo screen printing to photorealistic DTG digital prints, sublimation sportswear, and reflective heat transfers — 18 specialist printing services for every garment and branding need.":
    "من الطباعة الحريرية الدقيقة للشعارات إلى الطباعة الرقمية DTG فائقة الدقة، ملابس التسامي الرياضية، والتطبيقات الحرارية العاكسة — 18 خدمة طباعة تخصصية لكافة احتياجاتك.",

  // Stats
  "Printing Services": "خدمات طباعة",
  "Print Technologies": "تقنيات طباعة",
  "Pantone Matched": "مطابقة بانتون 100%",
  "Day Turnaround": "أيام مدة التنفيذ",

  // 4 Categories Titles & Descriptions
  "Screen Printing": "الطباعة الحريرية (Silkscreen)",
  "The gold standard for bold, durable bulk garment printing. Ideal for logos, text, and spot-color designs on uniforms, workwear, and promotional t-shirts.":
    "الخيار الأول لطباعة الجملة الجريئة والمتينة على الملابس. مثالية للشعارات والنصوص والألوان المحددة على الزي الموحد وتيشيرتات الفعاليات.",

  "Digital Printing": "الطباعة الرقمية (Digital Printing)",
  "Next-generation inkjet and DTG digital printing for photorealistic graphics, personalized prints, and small-run orders with no screen setup costs.":
    "طباعة رقمية ونفث حبر حديثة (DTG) للتصاميم الفوتوغرافية، الطباعات المخصصة للأسماء، والطلبات الصغرى بدون تكاليف شاشات.",

  "Heat Transfer Printing": "طباعة النقل الحراري",
  "Precision heat-applied transfers for logos, numbers, and reflective details on sports jerseys, workwear, and corporate garments with a smooth, durable finish.":
    "تطبيقات حرارية دقيقة للشعارات والأرقام والتفاصيل العاكسة على القمصان الرياضية وملابس العمل والشركات بمظهر أملس ومتين.",

  "Sublimation Printing": "طباعة التسامي (Sublimation)",
  "Premium dye sublimation printing for all-over full-color sportswear, promotional apparel, and custom uniforms with vibrant fade-proof colors that become part of the fabric.":
    "طباعة تسامي صبغي فاخرة وشاملة للملابس الرياضية والترويجية والزي الموحد بألوان زاهية غير قابلة للبهتان تندمج تماماً مع القماش.",

  // Process Steps
  "Our 5-Step Printing Process": "عملية الطباعة لدينا في 5 خطوات",
  "From artwork submission to final delivery — a streamlined, quality-assured workflow.":
    "من تقديم التصميم حتى التسليم النهائي — سير عمل منظم يضمن أعلى مستويات الجودة.",

  "Artwork Submission": "تقديم التصميم الفني",
  "Submit your logo or design file in any format (AI, EPS, PDF, PNG). Our pre-press team reviews it and prepares it for your chosen printing method.":
    "أرسل ملف الشعار أو التصميم بأي صيغة (AI, EPS, PDF, PNG)، حيث يفحصه فريق التجهيز ويهيئه لتقنية الطباعة المختارة.",

  "Print Method Selection": "اختيار تقنية الطباعة المناسبة",
  "We advise the best printing technology — screen, DTG, heat transfer, or sublimation — based on your design, garment type, quantity, and budget.":
    "نوصي بأفضل تقنية طباعة (حريرية، DTG، نقل حراري، أو تسامي) بناءً على تصميمك ونوع القماش والكمية والميزانية.",

  "Strike-Off Sample": "إنتاج عينة الطباعة (Strike-Off)",
  "A physical print strike-off is produced on your garment for color accuracy and quality approval before full production is authorized.":
    "ننتج عينة طباعة فعلية على الملبس المعتمد للتحقق من دقة الألوان والجودة قبل إعطاء الإذن بالإنتاج الكلي.",

  "Full Production Run": "تشغيل الإنتاج الكامل",
  "Your approved design is printed across your full order quantity with inline quality checks for registration, color density, and ink adhesion.":
    "يتم طباعة تصميمك المعتمد على جميع كميات الطلب مع فحص آلي دقيق لثبات الحبر ودقة المحاذاة وكثافة الألوان.",

  "Inspection & KSA Delivery": "الفحص والتوصيل بالمملكة",
  "Every garment is inspected for print quality, then individually packaged and dispatched across Saudi Arabia with tracking and account support.":
    "تخضع كل قطعة ملابس لفحص شامل لجودة الطباعة، ثم تُغلف وتُشحن لجميع مناطق المملكة مع تتبع ودعم مباشر.",

  // Why Choose Section
  "Why Choose Amal for Garment Printing?": "لماذا تختار أمل لطباعة الملابس؟",

  "Exact brand color reproduction using Pantone-matched inks across all printing methods — critical for corporate identity consistency.":
    "مطابقة دقيقة لألوان العلامة التجارية باستخدام أحبار بانتون لكافة طرق الطباعة لضمان اتساق الهوية المؤسسية.",

  "Wash-Fast Guarantee": "ضمان ثبات الألوان والغسيل",
  "All prints tested to withstand 60-wash cycles without fading, cracking, or peeling — industrial-grade ink and transfer formulations.":
    "اختبار جميع المطبوعات للتحمل حتى 60 غسلة صناعية دون بهتان أو تشقق أو تقشير بأحبار عالية المتانة.",

  "Fast Turnaround": "سرعة التنفيذ والتسليم",
  "Screen and DTG print runs completed in 5–10 business days. Rush production available for urgent event and campaign deadlines.":
    "إنجاز طلبات الطباعة الحريرية و DTG خلال 5 إلى 10 أيام عمل مع توفر خدمة التثبيت السريع للفعاليات العاجلة.",

  "Bulk Capacity": "طاقة استيعابية للطلبات الضخمة",
  "From 50-piece small runs to 50,000+ unit enterprise orders — competitive bulk pricing and consistent quality at any scale.":
    "من الطلبات الصغرى 50 قطعة إلى الطلبات المؤسسية الضخمة التي تتجاوز 50,000 قطعة بأسعار تنافسية وثبات في الجودة.",

  // Trust Badges
  "Trusted by 500+ KSA Brands": "محل ثقة أكثر من 500 علامة بالمملكة",
  "Pantone Certified Color Matching": "مطابقة ألوان بانتون معتمدة",
  "4 Professional Print Technologies": "4 تقنيات طباعة احترافية",
  "Free Strike-Off Sample": "عينة طباعة مجانية للاعتماد",

  // 18 Services Titles & Descriptions
  "Logo Screen Printing": "طباعة الشعار الحريرية",
  "Precision spot-color logo printing directly onto uniforms and corporate garments. Produces sharp, vibrant, wash-resistant prints that maintain brand accuracy across bulk orders.":
    "طباعة دقيقة للشعار بألوان محددة على الزي الموحد والملابس المؤسسية. تُنتج مطبوعات حادة وزاهية ومقاومة للغسيل تحافظ على ألوان العلامة التجارية في الطلبات الكبيرة.",
  "Uniform Screen Printing": "طباعة الزي الموحد الحريرية",
  "Enterprise-scale screen printing for complete uniform programs — department names, company logos, and safety text printed consistently across thousands of garments.":
    "طباعة حريرية بمقاييس المؤسسات الكبرى لبرامج الزي الموحد الشاملة — أسماء الأقسام، شعارات الشركات، ونصوص السلامة المطبوعة بدقة وتطابق عبر آلاف القطع.",
  "Promotional T-Shirt Printing": "طباعة التيشيرتات الترويجيّة",
  "High-impact promotional t-shirt printing for events, exhibitions, and brand campaigns — vibrant multi-color graphics printed fast and at competitive bulk pricing.":
    "طباعة تيشيرتات ترويجية عالية التأثير للفعاليات والمعارض والحملات التسويقية — رسومات ملوّنة زاهية تنفذ بسرعة وأسعار تنافسية بالجملة.",
  "Multi-Color Screen Printing": "الطباعة الحريرية متعددة الألوان",
  "Advanced carousel screen printing using multiple screens and ink layers to produce complex multi-color artwork with precise registration and stunning visual depth.":
    "طباعة حريرية متطورة باستخدام شاشات متعددة وطبقات حبر لإخراج التصاميم المعقدة متعددة الألوان بدقة دائرية وتطابق مذهل.",
  "Reflective Screen Printing": "الطباعة الحريرية العاكسة",
  "Safety-grade reflective ink printing on high-visibility vests, safety jackets, and workwear — meeting Saudi SASO and international EN ISO 20471 visibility standards.":
    "طباعة حبر عاكس مطابق لمعايير السلامة على سترات الوضوح العالي وجاكيتات السلامة وملابس العمل — مطابقة لمواصفات SASO ومعايير ISO 20471 الدولية.",
  "Direct-to-Garment (DTG) Printing": "الطباعة الرقمية المباشرة (DTG)",
  "State-of-the-art DTG inkjet printing delivers photorealistic, full-color designs directly onto fabric — ideal for personalized prints, small runs, and complex photographic artwork.":
    "طباعة رقمية نفث الحبر متطورة تقدم تصاميم ملوّنة واقعية مباشرة على القماش — مثالية للطباعات الشخصية، الكميات الصغرى، والتصاميم الفوتوغرافية.",
  "Digital Textile Printing": "الطباعة الرقمية للمنسوجات",
  "Wide-format reactive digital textile printing on fabric rolls — suitable for all-over uniform patterns, fashion fabric, custom print yardage, and interior textiles.":
    "طباعة رقمية واسعة المجال على رولات الأقمشة — مناسبة لأنماط الزي الكاملة، أقمشة الموضة، والمنسوجات المخصصة.",
  "High-Resolution Graphic Printing": "طباعة الرسومات عالية الدقة",
  "Ultra-sharp, high-DPI digital graphic printing for apparel requiring fine detail reproduction — technical diagrams, photographic images, and intricate vector artwork.":
    "طباعة جرافيك رقمية فائقة الدقة للملابس التي تطلب تفاصيل دقيقة — المخططات الفنية، الصور الفوتوغرافية، والتصاميم المتجهة الدقيقة.",
  "Personalized Name & Number Printing": "طباعة الأسماء والأرقام المخصصة",
  "Variable data digital printing for individualized staff uniforms — each piece printed with a unique name, employee ID, or jersey number from a single automated print run.":
    "طباعة رقمية متغيرة البيانات لزي الموظفين الفردي — تطبع كل قطعة باسم فريد أو رقم وظيفي أو رقم رياضّي في تشغيل آلي واحد.",
  "Variable Data Printing": "طباعة البيانات المتغيرة",
  "Automated digital printing that changes text, barcodes, serial numbers, or QR codes on each garment — perfect for employee uniforms with individual identifiers.":
    "طباعة رقمية متطورة تغير النصوص، الباركود، الأرقام التسلسلية، أو رموز QR على كل قطعة ملابس — مثالية لزي الموظفين المعلم بمعرفات فريدة.",
  "Vinyl Heat Transfer": "طباعة الفينيل الحراري",
  "Cut-vinyl heat transfer printing for sharp, solid-color logos and lettering on garments — smooth, professional finish ideal for sports jerseys, corporate polos, and workwear.":
    "طباعة النقل الحراري بالفينيل المقصوص لشعارات ونصوص حادة وصافية الألوان — مظهر ملس ومحترف مثالي للقمصان الرياضية وبولو الشركات.",
  "Reflective Heat Transfer": "النقل الحراري العاكس للضوء",
  "Reflective film heat transfers for safety garments — applied logos, stripes, and text that provide high retroreflectivity and comply with industrial safety standards.":
    "شرائط ونقل حراري عاكس لملابس السلامة — تثبيت الشعارات والشرائط العاكسة المطابقة لمعايير السلامة الصناعية.",
  "Sports Jersey Number Printing": "طباعة أرقام القمصان الرياضية",
  "Heat-applied player number and name transfers for sports jerseys and team kits — bold, flexible, and resistant to cracking through rigorous athletic use and repeated washing.":
    "طباعة حريرية وحرارية لأرقام وأسماء اللاعبين على الأطقم الرياضية — بارزة ومرنة ومقاومة للتطرق والتشقق مع الغسيل.",
  "Logo Heat Transfer": "النقل الحراري للشعارات",
  "Full-color photographic-quality logo heat transfers applied to garments — suitable for complex gradient logos and multi-color artwork without screen printing setup costs.":
    "نقل حراري كامل الألوان بجودة تصويرية للشعارات — مناسب للشعارات المتدرجة والتصاميم المعقدة دون تكاليف تجهيز شاشات.",
  "Full Garment Sublimation": "طباعة التسامي الشاملة للقطعة",
  "Edge-to-edge full-garment dye sublimation printing — all-over vibrant patterns and graphics permanently infused into polyester fabric for a seamless, premium finish.":
    "طباعة تسامي صبغية كاملة من الحافة إلى الحافة — ألوان زاهية وأنماط ممتدة تندمج دائماً مع القماش البوليستر لمظهر ممتاز.",
  "Sportswear Sublimation": "طباعة التسامي لملابس الرياضة",
  "Custom sublimated sportswear for football, basketball, cricket, and athletics teams — lightweight moisture-wicking jerseys and kits with photo-quality team graphics.":
    "ملابس رياضية مخصصة بالتسامي لفرق كرة القدم والسلة والألعاب الرياضية — قمصان خفيفة ماصة للرطوبة بتصاميم وشعارات عالية الجودة.",
  "Dye Sublimation Printing": "طباعة التسامي الصبغي",
  "Professional dye sublimation printing for custom corporate uniforms, polo shirts, and event apparel with unlimited color reproduction and permanent color-fastness.":
    "طباعة تسامي صبغي احترافية للزي المؤسسي وقمصان البولو وملابس الفعاليات بألوان غير محدودة وثبات دائم.",
  "Promotional Apparel Printing": "طباعة الملابس الترويجيّة",
  "Sublimated promotional garments for corporate events, trade shows, and brand campaigns — custom all-over printed caps, t-shirts, tote bags, and branded event wear.":
    "ملابس ترويجية بالتسامي للفعاليات والمؤتمرات والحملات — قبعات وتيشيرتات وحقائب مطبوعة بالكامل للهوية.",

  // Feature Tags
  "Spot-color accuracy": "دقة الألوان المحددة",
  "Bulk order efficiency": "كفاءة الإنتاج بالجملة",
  "Durable ink formula": "تركيبة حبر متينة",
  "Consistent bulk output": "إنتاج بالجملة متناسق",
  "All garment types": "كافة أنواع الملابس",
  "Department text support": "دعم نصوص الأقسام",
  "Production QC": "ضبط جودة الإنتاج",
  "Event & campaign ready": "جاهز للفعاليات والحملات",
  "Fast turnaround": "سرعة التنفيذ والتسليم",
  "Multi-color designs": "تصاميم متعددة الألوان",
  "Competitive bulk rates": "أسعار جملة تنافسية",
  "Up to 8-color prints": "طباعة حتى 8 ألوان",
  "Precise registration": "تطابق ومحاذاة دقيقة",
  "Gradient effects": "تأثيرات الألوان المتدرجة",
  "Complex artwork capable": "قدرة على تنفيذ التصاميم المعقدة",
  "ISO 20471 compliant": "مطابق لمعيار ISO 20471",
  "Hi-vis safety garments": "ملابس سلامة عالية الوضوح",
  "Retroreflective inks": "أحبار عاكسة للضوء",
  "Industrial grade": "جودة صناعية ثقيلة",
  "Photorealistic output": "دقة تصويرية واقعية",
  "No minimum order": "بدون حد أدنى للطلب",
  "Full-color artwork": "رسومات ملوّنة بالكامل",
  "No screen fees": "بدون رسوم شاشات",
  "All-over patterns": "أنماط ممتدة بالكامل",
  "Fabric roll printing": "طباعة على رولات الأقمشة",
  "Wide-format capable": "مجال طباعة عريض",
  "Reactive & pigment inks": "أحبار تفاعلية وصبغية",
  "Ultra-high DPI": "دقة تفاصيل فائقة",
  "Fine detail accuracy": "دقة التفاصيل الصغيرة",
  "Vector & photo art": "رسومات فيكتور وتصويرية",
  "Color-managed output": "إخراج ألوان محكوم دقيق",
  "Variable data per piece": "بيانات متغيرة لكل قطعة",
  "Name & number sets": "مجموعات الأسماء والأرقام",
  "Sports & staff uniforms": "زي الرياضة والكادر",
  "Fast batch output": "إنتاج دفعات سريع",
  "Unique per-piece data": "بيانات فريدة لكل قطعة",
  "Barcode & QR support": "دعم الباركود والـ QR",
  "Automated batch runs": "تشغيل دفعات آلي",
  "Corporate ID garments": "ملابس الهوية المؤسسية",
  "Crisp sharp edges": "حواف حادة ونظيفة",
  "Solid color fills": "تعبئة ألوان صافية",
  "Flexible & durable": "مرن ومتين",
  "Sports & workwear grade": "معتمد للرياضة والعمل",
  "Safety-grade reflective": "عاكس بمواصفات السلامة",
  "Stripe & logo transfers": "شرائط وشعارات عاكسة",
  "EN ISO 20471 ready": "مطابق لمواصفات ISO 20471",
  "Survives industrial wash": "يتحمل الغسيل الصناعي",
  "Athletic flex material": "خامة رياضية مرنة",
  "Bold number styles": "أنماط أرقام بارزة",
  "Crack-resistant finish": "طبقة مقاومة للتشقق",
  "Full-color logos": "شعارات كاملة الألوان",
  "Photo-quality transfer": "نقل بجودة التصوير الفوتوغرافي",
  "No screen setup": "بدون تجهيز شاشات",
  "Fast small-run capable": "تنفيذ سريع للكميات الصغرى",
  "Edge-to-edge coverage": "تغطية من الحافة للحافة",
  "Fade-proof colors": "ألوان غير قابلة للبهتان",
  "Seamless pattern wrap": "أنماط متصلة بلا فواصل",
  "Polyester & blends": "بوليستر ومخاليط أقمشة",
  "Team jerseys & kits": "قمصان وأطقم الفرق",
  "Moisture-wicking fabric": "قماش ماص للرطوبة",
  "Custom team graphics": "تصاميم مخصصة للفرق",
  "Lightweight & breathable": "خفيف الوزن وقابل للتهوية",
  "Unlimited color palette": "لوحة ألوان غير محدودة",
  "No color limitations": "بدون قيود على الألوان",
  "Corporate & event wear": "ملابس الشركات والفعاليات",
  "Permanent colorfast": "ثبات ألوان دائم",
  "Event & trade show gear": "تجهيزات الفعاليات والمعارض",
  "All-over branding": "علامة تجارية شاملة",
  "Caps, tees & bags": "قبعات وتيشيرتات وحقائب",
  "Fast campaign turnaround": "تنفيذ سريع للحملات التسويقية",
};

function getIcon(name: string, className: string = "w-5 h-5") {
  const props = { className };
  switch (name) {
    case "Printer": return <Printer {...props} />;
    case "Palette": return <Palette {...props} />;
    case "ShieldCheck": return <ShieldCheck {...props} />;
    case "Sparkles": return <Sparkles {...props} />;
    case "Award": return <Award {...props} />;
    case "Headphones": return <Headphones {...props} />;
    case "Shirt": return <Shirt {...props} />;
    case "Scissors": return <Scissors {...props} />;
    case "Layers": return <Layers {...props} />;
    case "Tag": return <Tag {...props} />;
    case "Zap": return <Zap {...props} />;
    case "Cpu": return <Cpu {...props} />;
    case "Upload": return <Upload {...props} />;
    case "CheckCircle": return <CheckCircle {...props} />;
    case "Factory": return <Factory {...props} />;
    case "Truck": return <Truck {...props} />;
    case "Building2": return <Building2 {...props} />;
    case "Boxes": return <Boxes {...props} />;
    case "UserCheck": return <UserCheck {...props} />;
    case "Hash": return <Hash {...props} />;
    case "Flame": return <Flame {...props} />;
    case "Droplets": return <Droplets {...props} />;
    case "Activity": return <Activity {...props} />;
    default: return <Printer {...props} />;
  }
}

export default function PrintingPageContent() {
  const { t, isRTL } = useLanguage();
  const { hero, section, categories, process, whyChoose, ctaBanner, trustBadges, theme, stats } =
    printingData;

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  const translate = (text: string) => {
    if (!isRTL) return text;
    if (PRINTING_ARABIC_MAP[text]) return PRINTING_ARABIC_MAP[text];
    const subnavTr = t(`subnav.${text}`);
    if (subnavTr && subnavTr !== `subnav.${text}`) return subnavTr;
    const printTr = t(`printing.${text}`);
    if (printTr && printTr !== `printing.${text}`) return printTr;
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
              alt="Professional garment printing services"
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
                const crumbLabel = crumb.label === "Home" ? t("nav.home") : t("nav.printing");
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-300 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
                <Printer className="w-3.5 h-3.5" />
                <span style={fontStyle}>{isRTL ? "منشأة الطباعة بالرياض" : "Riyadh Printing Facility"}</span>
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 text-white font-semibold text-sm rounded-xl hover:bg-orange-400 transition-all shadow-lg shadow-orange-900/40 hover:shadow-orange-900/60 group"
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

        {/* ── 2. Stats Bar ─────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
              {stats.map((stat) => (
                <div key={stat.label} className="py-6 px-6 text-center">
                  <p className="text-3xl font-bold text-navy-950 font-display" style={fontStyle}>{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1" style={fontStyle}>{translate(stat.label)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Services by Category ──────────────────────────────────────── */}
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

            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category.id} id={category.id}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-xl ${theme.accentBg} ${theme.accentIcon} ${theme.accentBorder} border flex items-center justify-center shrink-0`}>
                      {getIcon(category.icon, "w-6 h-6")}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl sm:text-3xl font-bold text-navy-950" style={fontStyle}>
                          {translate(category.title)}
                        </h3>
                        <span className={`hidden sm:inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-full ${theme.accentBg} ${theme.accentIcon} border ${theme.accentBorder}`} style={fontStyle}>
                          {category.services.length} {isRTL ? "خدمات" : "services"}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1 max-w-2xl" style={fontStyle}>{translate(category.description)}</p>
                    </div>
                  </div>

                  <div className={`h-0.5 w-full bg-gradient-to-r from-orange-200 via-orange-100 to-transparent mb-8 rounded-full`} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {category.services.map((service) => (
                      <div
                        key={service.id}
                        id={service.id}
                        className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-400/40 transition-all duration-300 flex flex-col overflow-hidden"
                      >
                        <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-orange-600 shadow-md border border-slate-200/80 flex items-center justify-center">
                            {getIcon(service.badgeIcon, "w-5 h-5")}
                          </div>
                          <div className="absolute top-3 right-3 px-2 py-1 bg-orange-500/90 backdrop-blur-sm text-white text-[10px] font-bold rounded-md uppercase tracking-wide" style={fontStyle}>
                            {translate(category.title)}
                          </div>
                        </div>

                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <h4 className={`text-lg font-bold text-navy-950 ${theme.cardHoverText} transition-colors`} style={fontStyle}>
                              {translate(service.title)}
                            </h4>
                            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3" style={fontStyle}>
                              {translate(service.description)}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5">
                            {service.features.map((feat) => (
                              <span
                                key={feat}
                                className="inline-flex items-center px-2.5 py-1 bg-orange-50 text-orange-700 border border-orange-100 text-xs font-medium rounded-full"
                                style={fontStyle}
                              >
                                {translate(feat)}
                              </span>
                            ))}
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <Link
                              href={service.href || "/contact#quote"}
                              className={`inline-flex items-center gap-1.5 text-sm font-semibold ${theme.cardLinkText} group/link`}
                              style={fontStyle}
                            >
                              <span>{isRTL ? "طلب عرض سعر طباعة" : "Request a Printing Quote"}</span>
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
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Process Section ───────────────────────────────────────────── */}
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
              <div className="hidden lg:block absolute top-[52px] left-[calc(10%+24px)] right-[calc(10%+24px)] h-px bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
                {process.steps.map((step) => (
                  <div key={step.step} className="flex flex-col items-center text-center space-y-3">
                    <div className="relative flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-full ${theme.badgeBg} border-2 ${theme.badgeBorder} ${theme.badgeText} flex items-center justify-center shadow-sm bg-white`}>
                        {getIcon(step.icon, "w-6 h-6")}
                      </div>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
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

        {/* ── 5. Why Choose Section ────────────────────────────────────────── */}
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
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-orange-200 transition-all duration-300 space-y-3"
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

        {/* ── 6. CTA Banner ────────────────────────────────────────────────── */}
        <ServiceCtaBanner
          ctaBanner={{
            ...ctaBanner,
            title: isRTL ? "هل تبحث عن خدمات طباعة مخصصة للزي الموحد؟" : ctaBanner.title,
            subtitle: isRTL ? "تواصل مع فريق الطباعة لدينا بالرياض للحصول على استشارة فنية وعروض أسعار تنافسية." : ctaBanner.subtitle,
          }}
          primaryBtnClass={theme.ctaPrimaryBtn}
          imageAlt="Professional garment printing facility"
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
