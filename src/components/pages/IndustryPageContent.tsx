"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceCtaBanner from "@/components/sections/ServiceCtaBanner";
import { useLanguage } from "@/lib/LanguageContext";
import {
  ChevronRight,
  ArrowRight,
  Download,
  Layers,
  ShieldCheck,
  Sparkles,
  Briefcase,
  Award,
  UserCheck,
  Headphones,
  Users,
  Shirt,
  Scissors,
  Palette,
  Clock,
  Building2,
  Leaf,
  Stethoscope,
  HeartPulse,
  Pill,
  ShieldAlert,
  GraduationCap,
  HardHat,
  Truck,
  Plane,
  ShoppingBag,
  Wrench,
  Trophy,
} from "lucide-react";

function getIcon(name: string, className: string = "w-5 h-5") {
  switch (name) {
    case "Layers": return <Layers className={className} />;
    case "ShieldCheck": return <ShieldCheck className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "Award": return <Award className={className} />;
    case "UserCheck": return <UserCheck className={className} />;
    case "Headphones": return <Headphones className={className} />;
    case "Users": return <Users className={className} />;
    case "Shirt": return <Shirt className={className} />;
    case "Scissors": return <Scissors className={className} />;
    case "Palette": return <Palette className={className} />;
    case "Clock": return <Clock className={className} />;
    case "Building2": return <Building2 className={className} />;
    case "Leaf": return <Leaf className={className} />;
    case "Stethoscope": return <Stethoscope className={className} />;
    case "HeartPulse": return <HeartPulse className={className} />;
    case "Pill": return <Pill className={className} />;
    case "ShieldAlert": return <ShieldAlert className={className} />;
    case "GraduationCap": return <GraduationCap className={className} />;
    case "HardHat": return <HardHat className={className} />;
    case "Truck": return <Truck className={className} />;
    case "Plane": return <Plane className={className} />;
    case "ShoppingBag": return <ShoppingBag className={className} />;
    case "Wrench": return <Wrench className={className} />;
    case "Trophy": return <Trophy className={className} />;
    default: return <Sparkles className={className} />;
  }
}

// Master English -> Arabic translation dictionary for all industry pages
const ARABIC_TEXT_MAP: Record<string, string> = {
  // Breadcrumbs & Common Nav Labels
  "Corporate": "الشركات",
  "Healthcare": "الرعاية الصحية",
  "Hospitality": "الضيافة",
  "Industrial & Safety": "الصناعة والسلامة",
  "Security": "الأمن",
  "Education": "التعليم",
  "Aviation & Transport": "الطيران والنقل",
  "Retail & Commercial": "التجزئة والتجارة",
  "Facility Management": "إدارة المرافق",
  "Sports & Events": "الرياضة والفعاليات",
  "Construction": "البناء والتشييد",

  // Page Titles
  "Corporate Uniforms": "الزي الموحد للشركات",
  "Healthcare Uniforms": "زي الرعاية الصحية والطبية",
  "Hospitality Uniforms": "زي الضيافة والفنادق",
  "Industrial & Safety Workwear": "ملابس العمل الصناعية والسلامة",
  "Security Uniforms": "زي الأمن والدوريات",
  "School & Academic Uniforms": "الزي المدرسي والأكاديمي",
  "Aviation & Transport Uniforms": "زي الطيران والنقل",
  "Retail & Commercial Staff Apparel": "زي موظفي التجزئة والتجارة",
  "Facility Management Apparel": "زي إدارة المرافق والتنظيف",
  "Sports & Event Staff Apparel": "زي الرياضة والفعاليات",
  "Construction Workwear & Apparel": "ملابس ومعدات البناء والتشييد",

  // Hero Subtitles
  "Tailored business attire that projects professionalism, elegance, and brand identity for executive teams.":
    "ملابس عمل مؤسسية مخصصة تعكس الاحترافية والأناقة وهوية العلامة التجارية لفرق الإدارة والموظفين.",
  "Comfortable, hygienic, and antimicrobial medical scrubs, doctor coats, and hospital staff uniforms engineered for demanding clinical environments.":
    "سكراب طبي ومقاصب طبية مريحة ومعقمة ومضادة للميكروبات مصممة للبيئات الطبية والصحية.",
  "Elegant hotel, restaurant, and resort uniforms designed to elevate guest experiences and project luxury service standards.":
    "زي فندقي ومطعمي أنيق مُصمم لرفع مستوى تجربة الضيوف وعكس معايير الخدمة الفاخرة.",
  "Heavy-duty cotton coveralls, high-visibility safety apparel, and flame-resistant workwear engineered for rugged industrial environments.":
    "بذلات قطنية ثقيلة الاستخدام وملابس سلامة عالية الوضوح ومقاومة للحريق مخصصة للبيئات الصناعية.",
  "Authoritative, durable security guard uniforms, tactical attire, and patrol apparel designed to command respect and ensure high visibility.":
    "زي موحد رسمي ومتين لحراس الأمن والدوريات والزي التكتيكي يعزز الهيبة والوضوح.",
  "Smart, durable, and comfortable school uniforms, PE activewear, and academic gowns designed to foster unity and pride.":
    "زي مدرسي ورداء أكاديمي أنيق ومريح يعزز روح الفخر والوحدة في المؤسسات التعليمية.",
  "Sophisticated pilot uniforms, cabin crew attire, ground handling workwear, and driver apparel crafted for premium logistics and transport fleets.":
    "زي موحد فاخر للطيارين وطاقم الضيافة الجوية وموظفي الخدمات الأرضية والسائقين.",
  "Stylish retail staff uniforms, branded polo shirts, cashier attire, and shopping mall uniforms designed to strengthen store identity.":
    "زي موظفي متاجر وتجزئة أنيق، قمصان بولو معلّمة، وزي أمناء الصندوق لتعزيز هوية المتاجر.",
  "Functional workwear, cleaning staff uniforms, and maintenance coveralls engineered for operational efficiency.":
    "ملابس عمل عملية وزي عمال النظافة وأوفرولات الصيانة لرفع كفاءة التشغيل.",
  "Custom athletic jerseys, team uniforms, event host attire, and exhibition staff shirts for sports leagues and major events.":
    "قمصان رياضية مخصصة، زي الفرق، وزي منظمي ومضيفي الفعاليات والمعارض الكبرى.",
  "Heavy-duty protective coveralls, EN-certified high-visibility vests, and site engineer uniforms for construction projects.":
    "أوفرولات واقية ثقيلة الاستخدام وسترات عاكسة معتمدة وزي مهندسي المواقع للمشاريع.",

  // Hero Highlights & Pills
  "Bespoke Tailoring": "خياطة مخصصة",
  "Wrinkle-Resistant": "مقاوم للتجاعيد",
  "Custom Branding": "علامة تجارية مخصصة",
  "Antimicrobial": "مضاد للميكروبات",
  "Breathable Fabrics": "أقمشة قابلة للتهوية",
  "Stain Resistant": "مقاوم للبقع",
  "Luxury Design": "تصميم فاخر",
  "Stain & Heat Resistant": "مقاوم للبقع والحرارة",
  "Culinary & Front-Desk": "للطهاة والاستقبال",
  "Heavy Duty Stitching": "خياطة عالية التحمل",
  "High Visibility": "عالي الوضوح",
  "Climate Optimized": "مُصمم لمناخ المملكة",
  "Durable Fabrics": "أقمشة متينة",
  "Badge Compatible": "متوافق مع الشارات",
  "School Grade Quality": "جودة عالية للمدارس",
  "Easy Care": "سهل الغسيل والعناية",
  "Durable & Comfortable": "متين ومريح",
  "Airline Standard": "معتمد لمعايير الطيران",
  "Tailored Fit": "مقاسات دقيقة",
  "Comfortable & Stylish": "أنيق ومريح",
  "Color Fastness": "ألوان ثابتة",
  "Industrial Grade": "جودة صناعية متينة",
  "Moisture Wicking": "ماص للرطوبة",
  "Quick Dry": "سريع الجفاف",
  "High Vis Standards": "معايير السلامة للوضوح",

  // Section Descriptions
  "From executive suites to front-line customer service, we craft premium corporate apparel tailored to elevate your corporate image.":
    "من الأجنحة التنفيذية إلى موظفي خدمة العملاء، نصنع ملابس مؤسسية راقية ترفع من الصورة الذهنية لشركتك.",
  "From doctors and surgical teams to clinical staff and lab technicians, we craft high-grade medical attire for hospitals and clinics.":
    "من الأطباء والجراحين إلى التمريض والفنيين، نصنع ملابس طبية عالية الجودة للمستشفيات والعيادات.",
  "From fine dining chefs and concierges to housekeeping and catering staff, we provide high-grade hospitality attire for 5-star hotels and restaurants.":
    "من طهاة المطاعم الفاخرة وموظفي الاستقبال إلى فرق التنظيف والإعاشة، نوفر زياً موحداً راقياً للفنادق والمطاعم.",
  "From manufacturing plants and oil & gas facilities to workshop technicians, we supply certified industrial workwear across Saudi Arabia.":
    "من المصانع ومصافي النفط والغاز إلى الفنيين، نوفر ملابس عمل معتمدة للسلامة في جميع أنحاء المملكة.",
  "From corporate security and residential patrol to event guards and tactical officers, we provide high-visibility, authoritative uniforms.":
    "من الأمن المؤسسي والحراسات إلى رجال الدوريات، نوفر زياً أمنياً رسمياً ومتيناً يعزز الهيبة.",
  "From primary schools and high school academies to universities and faculty staff, we manufacture durable, comfortable academic attire.":
    "من المدارس الابتدائية والتعليم الثانوي إلى الجامعات والكادر التعليمي، نصنع زياً أكاديمياً متيناً ومريحاً.",
  "From flight deck officers and cabin attendants to airport ground handlers and logistics drivers, we supply premium transport uniforms.":
    "من طاقم الطيران والضيافة الجوية إلى موظفي المطار وسائقي اللوجستيات، نوفر زياً راقياً للنقل.",
  "From boutique sales associates and supermarket staff to mall concierge and cashier teams, we produce vibrant commercial uniforms.":
    "من المتاجر الفاخرة والمراكز التجارية إلى أمناء الصندوق، ننتج زياً تجارياً متناسقاً وجذاباً.",
  "From janitorial teams and maintenance engineers to landscaping and waste management staff, we deliver functional facility workwear.":
    "من فرق النظافة وفنيي الصيانة إلى مشرفي المرافق، نقدم ملابس عمل مخصصة لرفع الكفاءة التشغيلية.",
  "From professional sports teams and stadium staff to event hosts and promotional brand ambassadors, we craft custom activewear.":
    "من الفرق الرياضية وموظفي الملاعب إلى منظمي الفعاليات والمعارض، نصنع زياً مخصصاً ورياضياً.",
  "From general site labor and heavy machinery operators to site engineers and safety officers, we manufacture rugged construction workwear.":
    "من عمال المواقع ومشغلي الآلات إلى مهندسي ومفتشي الموقع، نصنع ملابس بناء متينة وعالية الحماية.",

  // Subcategory Titles & Descriptions
  "Office Staff Uniforms": "زي موظفي المكاتب",
  "Smart, comfortable corporate attire for daily office environment and administrative professionals.":
    "ملابس عمل رسمية أنيقة ومريحة للبيئة المكتبية اليومية والموظفين الإداريين.",
  "Executive Wear": "ملابس كبار الشخصيات والتنفيذيين",
  "Premium tailored blazers, suits, and executive outfits designed for senior management and C-suite leaders.":
    "بدلات وجاكيتات راقية مخصصة لكبار الإداريين والتنفيذيين.",
  "Reception Uniforms": "زي موظفي الاستقبال",
  "Elegant front-desk uniforms that make an exceptional first impression on clients and guests.":
    "زي أنيق لموظفي الاستقبال يترك انطباعاً أولياً ممتازاً لدى العملاء والضيوف.",
  "Customer Service Uniforms": "زي خدمة العملاء",
  "Polished, comfortable uniforms for front-facing service personnel and client relations teams.":
    "زي أنيق ومريح لموظفي الخدمة المباشرة وفريق العلاقات العامة.",
  "Administrative Staff Uniforms": "زي الموظفين الإداريين",
  "Versatile formal business shirts and trousers tailored for office operations and admin teams.":
    "قمصان وبدلات عمل رسمية مخصصة لعمليات المكتب والفرق الإدارية.",
  "Corporate Shirts & Suits": "قمصان وبدلات الشركات",
  "High-grade woven shirts, trousers, and custom 2-piece/3-piece suits with logo embroidery.":
    "قمصان وبدلات فاخرة مكونة من قطعتين أو ثلاث مع تطريز الشعار.",

  "Medical Scrubs": "السكراب الطبي",
  "Antimicrobial, breathable scrub tops and pants designed for doctors, nurses, and technicians.":
    "قمصان وبنطال سكراب مريح ومضاد للميكروبات للأطباء والممرضين.",
  "Doctor & Lab Coats": "معاطف الأطباء والمختبر",
  "Tailored white doctor coats and lab jackets with stain-release fabrics and functional pocket storage.":
    "معاطف أطباء بيضاء مخصصة بأقمشة مقاومة للبقع وجيوب عملية.",
  "Nurse Uniforms": "زي التمريض",
  "Ergonomic nursing uniforms crafted for flexibility, easy washing, and maximum comfort during long shifts.":
    "زي تمريض عملي ومريح يمنح حرية الحركة والغسيل السهل في المناوبات.",
  "Pharmacy Uniforms": "زي الصيدليات",
  "Clean, professional lab jackets and shirts for pharmacists and pharmacy assistant staff.":
    "معاطف وقمصان رسمية مخصصة للصيادلة وموظفي الصيدليات.",
  "Hospital Staff Uniforms": "زي موظفي المستشفيات",
  "Durable workwear for hospital administration, patient care coordinators, and facility workers.":
    "زي متين لموظفي الإدارة الطبية ورعاية المرضى وعمال الصيانة.",
  "Healthcare PPE Apparel": "ملابس الحماية الطبية (PPE)",
  "Reusable surgical gowns, protective caps, and isolation apparel compliant with healthcare safety standards.":
    "ثياب جراحية وقبعات حماية وأثواب عزل مطابقة لمعايير السلامة الطبية.",

  // Healthcare Page Exact Strings
  "Professional. Functional. Comfortable. Uniforms designed to support those who care for others.":
    "احترافي، عملي، ومريح. زي موحد مُصمم لدعم أولئك الذين يخدمون ويعتنون بالآخرين.",
  "Durable & Reliable": "متين وموثوق",
  "From doctors to support staff, we provide a wide range of healthcare uniforms that combine comfort, durability and a professional look.":
    "من الأطباء إلى موظفي الدعم، نوفر مجموعة واسعة من أزياء الرعاية الصحية تجمع بين الراحة والمتانة والمظهر المهني الراقي.",
  "Doctor Coats": "معاطف الأطباء",
  "High quality lab coats and jackets designed for medical specialists and clinical physicians.":
    "معاطف وجاكيتات طبية عالية الجودة مُصممة للأطباء والاستشاريين والمشرفين الصحيين.",
  "Comfortable scrubs designed for long hours and ease of movement during demanding shifts.":
    "أطقم سكراب مريحة مصممة للساعات الطويلة وسهولة الحركة أثناء المناوبات الشاقة.",
  "Practical and stylish uniforms for nurses with functional pockets and modern design.":
    "زي عملي وأنيق للتمريض مزود بجيوب عملية وتصميم عصري يسهل الحركة.",
  "Lab Coats": "معاطف المختبرات",
  "High quality lab coats for doctors, specialists and laboratory medical staff.":
    "معاطف مختبر عالية الجودة للأطباء والأخصائيين وفنيي المختبرات الطبية.",
  "Professional and hygienic apparel tailored for pharmacists and pharmacy staff.":
    "ملابس مخصصة ومريحة ونظيفة للصيادلة وموظفي الصيدليات.",
  "Durable uniforms for housekeeping, administration, orderlies and support staff.":
    "زي متين لموظفي الإدارة الطبية والخدمات المساندة والتدبير المنزلي في المستشفيات.",
  "Sterile and protective surgical wear and gowns for maximum safety and compliance.":
    "ملابس وأثواب جراحية معقمة وواقية لأقصى درجات السلامة والالتزام بالمعايير الطبية.",
  "Need a Custom Uniform Solution for Your Healthcare Team?":
    "هل تحتاج إلى حل زي موحد مخصص لفريق الرعاية الصحية لديك؟",
  "We're here to help you create the perfect uniform for your hospital, clinic, or medical organization.":
    "نحن هنا لمساعدتك في تصميم وتصنيع الزي المثالي لمستشفاك أو عيادتك أو مؤسستك الطبية.",
  "Trusted by 500+ Healthcare Organizations": "محل ثقة أكثر من 500 منشأة ومؤسسة صحية",

  "Hotel Staff Uniforms": "زي موظفي الفنادق",
  "Sophisticated front-desk, management, and lobby personnel attire that enhances guest perception.":
    "زي راقٍ لموظفي الاستقبال والإدارة والبهو يعزز انطباع الضيوف.",
  "Restaurant Uniforms": "زي المطاعم",
  "Stylish restaurant team attire designed for high movement, comfort, and cohesive dining room aesthetics.":
    "زي أنيق لفرق المطاعم مصمم للحركة المريحة والمظهر المتناسق.",
  "Chef Jackets": "جاكيتات الطهاة",
  "Professional double-breasted chef coats, aprons, and kitchen executive jackets engineered for heat resistance.":
    "جاكيتات ومآزر طهاة احترافية مخصصة لتحمل حرارة المطبخ.",
  "Waiter & Waitress Uniforms": "زي النوادل والنديمات",
  "Durable, stain-resistant waistcoats, shirts, and aprons tailored for servers and banquet staff.":
    "سترات وقمصان ومآزر متينة ومقاومة للبقع لطاقم الضيافة والولائم.",
  "Housekeeping Uniforms": "زي التدبير المنزلي والنظافة",
  "Ergonomic, breathable uniforms for hotel room attendants and maintenance teams for maximum flexibility.":
    "زي مريح وعملي لموظفي خدمة الغرف والصيانة للحركة المرنة.",
  "Catering Uniforms": "زي خدمات الإعاشة",
  "Clean, professional catering and event staff apparel suitable for indoor and outdoor hospitality occasions.":
    "ملابس مخصصة لموظفي الحفلات والفعاليات والتموين الداخلي والخارجي.",
  "Concierge Uniforms": "زي موظفي الاستقبال والكونسيرج",
  "Impeccable tailored suits, blazers, and accessories for hotel concierges, doormen, and bellhops.":
    "بدلات واكسسوارات فاخرة لموظفي الاستقبال وحراس الأبواب وحاملي الحقائب.",

  "Industrial Workwear": "ملابس العمل الصناعية",
  "Heavy-duty work shirts and cargo trousers built for factory floors and heavy mechanical machinery operations.":
    "قمصان وبنطال عمل ثقيل مخصص للمصانع والتشغيل الميكانيكي.",
  "Factory Uniforms": "زي المكاتب والمصانع",
  "Comfortable, tear-resistant uniforms for assembly line workers, technicians, and factory supervisors.":
    "زي مريح ومقاوم للتمزق لعمال خطوط التجميع والفنيين ومشرفي المصانع.",
  "Construction Workwear": "ملابس البناء والتشييد",
  "High-vis safety jackets, reinforced work trousers, and site apparel designed for tough job conditions.":
    "جاكيتات سلامة عالية الوضوح وبنطال مقوى لمواقع البناء الشاقة.",
  "Site Engineer Uniforms": "زي مهندسي الموقع",
  "Professional engineering shirts, safety vests, and trousers designed for site managers and inspectors.":
    "قمصان مهندسين وسترات سلامة لمشرفي ومفتشي الموقع.",
  "Protective Coveralls": "الأوفرولات الواقية (Coveralls)",
  "Flame-resistant, anti-static, and cotton coveralls engineered for oil & gas, mining, and utility sites.":
    "أوفرولات مقاومة للحريق والكهرباء الساكنة لقطاعات النفط والغاز والتعدين.",
  "High-Vis Safety Apparel": "ملابس السلامة عالية الوضوح",
  "EN ISO 20471 compliant high-visibility vests, jackets, and reflective apparel for night and site safety.":
    "سترات وجاكيتات عاكسة ومطابقة لمعايير السلامة للعمل الليلي والموقعي.",

  "Security Guard Uniforms": "زي حراس الأمن",
  "Authoritative formal security shirts, trousers, and caps for corporate building and facility guards.":
    "قمصان وبنطال وقبعات رسمية لحراس المباني والمنشآت.",
  "Patrol Uniforms": "زي الدوريات الأمنية",
  "Durable patrol shirts, cargo pants, and all-weather jackets for mobile security officers.":
    "ملابس وجاكيتات متينة لدوريات ومفتشي الأمن الميدانيين.",
  "Tactical Uniforms": "الزي التكتيكي",
  "Heavy-duty ripstop tactical shirts, pants, and utility vests for specialized security response teams.":
    "قمصان وبنطال تكتيكي مقاوم للتمزق لفرق الاستجابة الأمنية.",
  "Security Outerwear & Accessories": "معاطف واكسسوارات الأمن",
  "High-vis security jackets, epaulettes, badges, belts, and caps for full team outfit consistency.":
    "جاكيتات عاكسة وشارات وأكتاف وقبعات تضمن تطابق فريق الأمن.",

  "School Uniforms": "الزي المدرسي",
  "Durable primary and secondary school polo shirts, trousers, skirts, and blazers built for daily wear.":
    "قمصان بولو وبنطال وتنانير وبلازرات مدرسية متينة للاستخدام اليومي.",
  "College & University Apparel": "زي الكليات والجامعات",
  "Polished campus apparel, faculty coats, and university staff uniforms for higher education institutes.":
    "ملابس وأرواب جامعية راقية لموظفي وكوادر التعليم العالي.",
  "PE & Sports Uniforms": "الزي الرياضي المدرسي",
  "Breathable athletic shorts, tracksuits, and PE t-shirts engineered for active physical education.":
    "قمصان وبنطال رياضية تنفسية مخصصة للتربية البدنية والأنشطة.",
  "Graduation Apparel": "ملابس التخرج والأرواب",
  "High-grade graduation gowns, caps, and stoles for university and school commencement ceremonies.":
    "أرواب وقبعات تخرج فاخرة لحفلات التخرج المدرسية والجامعية.",

  "Airline Crew Uniforms": "زي طاقم الطيران والضيافة",
  "Impeccable cabin crew suits, dresses, and scarves designed to represent airline brand elegance.":
    "بدلات وفساتين أنيقة لطواقم الضيافة الجوية تعكس فخامة شركات الطيران.",
  "Pilot Uniforms": "زي الطيارين",
  "Tailored pilot shirts, epaulettes, blazers, and trousers crafted to international aviation standards.":
    "قمصان وبدلات وشارات طيارين مخصصة وفق المعايير الدولية.",
  "Airport Staff Uniforms": "زي موظفي المطار",
  "Professional customer service desk, check-in, and lounge staff attire for international airports.":
    "زي لموظفي خدمات الركاب وتسجيل الوصول والصالات بالمطارات.",
  "Logistics & Driver Uniforms": "زي السائقين واللوجستيات",
  "Durable, comfortable polo shirts, jackets, and trousers for fleet drivers and logistics coordinators.":
    "قمصان بولو وجاكيتات متينة لموظفي الأسطول والسائقين.",

  "Retail Staff Uniforms": "زي موظفي التجزئة",
  "Branded polo shirts, aprons, and staff shirts that create a welcoming shopping environment.":
    "قمصان بولو ومآزر معلّمة تضفي بيئة تسوق مرحبة وجذابة.",
  "Shopping Mall Uniforms": "زي موظفي المراكز التجارية",
  "Cohesive uniforms for mall customer service, information desks, and operations personnel.":
    "زي متناسق لموظفي الاستعلامات والعمليات في المراكز التجارية.",
  "Sales Executive Uniforms": "زي تنفيذي المبيعات",
  "Polished blazers, shirts, and trousers for boutique sales reps and commercial account managers.":
    "بدلات وقمصان راقية لممثلي المبيعات في المتاجر الفاخرة.",
  "Store & Cashier Uniforms": "زي أمناء الصندوق والمتاجر",
  "Comfortable, easy-care shirts and waistcoats for cashiers and inventory staff.":
    "قمصان وسديريات مريحة وسهلة الغسيل لأمناء الصندوق والمخازن.",

  // Security Page Exact Strings
  "Commanding, durable security guard attire, tactical uniforms, patrol wear, and protective gear engineered for maximum authority and discipline.":
    "زي أمني متين ورسمي، بدلات تكتيكية، ملابس دوريات، ومعدات حماية مصممة لأقصى درجات الهيبة والانضباط.",
  "Authoritative & Command Fit": "قصة رسمية متميزة وهيبة",
  "Ripstop & Weatherproof": "مقاوم للتمزق والطقس",
  "Custom Badging & Epaulettes": "شارات ورتب مخصصة",
  "Engineered for private security firms, facility protection teams, event security, tactical units, and residential patrol personnel across Saudi Arabia.":
    "مُصمم لشركات الأمن الخاصة، وفرق حماية المنشآت، وأمن الفعاليات، والوحدات التكتيكية، وحراس الدوريات في كافة أنحاء المملكة.",

  "Formal security shirts, trousers, and blazers featuring custom epaulettes, badge holders, and pocket loops.":
    "قمصان وبنطال وبلازرات أمنية رسمية مع رتب أكتاف وحوامل شارات مخصصة.",
  "Durable, climate-controlled patrol shirts and cargo pants built for long mobile shifts and outdoor security.":
    "قمصان وبنطال كارجو متينة ومناسبة للمناخ مصممة لمناوبات الدوريات الميدانية الطويلة.",
  "Heavy-duty ripstop tactical shirts, BDU pants, combat boots, and modular utility vests for high-security details.":
    "قمصان وبنطال تكتيكية ثقيلة مقاومة للتمزق، أحذية ميدانية، وسترات حماية متعددة الاستخدامات.",
  "Security Shirts & Pants": "قمصان وبنطال الأمن",
  "Woven long-sleeve and short-sleeve security dress shirts with military creases paired with reinforced formal trousers.":
    "قمصان رسمية بأكمام طويلة وقصيرة بكسرات عسكرية مع بنطال رسمي مقوى.",
  "Security Jackets": "جاكيتات الأمن",
  "Windproof high-visibility reflective windbreakers, bomber jackets, and heavy winter coats with Security back patches.":
    "سترات وجاكيتات عاكسة واقية من الرياح ومعاطف شتوية مع طبعات أمنية خلفية.",
  "Security Caps & Accessories": "قبعات وإكسسوارات الأمن",
  "Peak caps, berets, lanyard cords, rank insignias, brass badges, waist belts, and tactical duty belts.":
    "قبعات، بريهات، حبال الكتافيات، رتب عسكرية، شارات نحاسية، وأحزمة ميدانية تكتيكية.",

  // Education Page Exact Strings
  "Educational Uniforms": "الزي الأكاديمي والتعليمي",
  "Comfortable, colorfast, and durable school uniforms, college blazers, university wear, athletic kits, and graduation gowns.":
    "زي مدرسي وجامعي مريح، ثابت الألوان ومتين، مع ملاءات بليزر ورداء تخرج وأطقم رياضية مخصصة.",
  "Academic Heritage Design": "تصميم تراثي وأكاديمي أنيق",
  "Colorfast & Shrink Resistant": "ثابت الألوان ومقاوم للانكماش",
  "Custom School Crest Embroidery": "تطريز شعار المدرسة المحوسب",
  "From kindergarten and K-12 private schools to colleges, universities, faculty staff, and athletic teams across Saudi Arabia.":
    "من رياض الأطفال والمدارس الخاصة إلى الكليات والجامعات والكادر التعليمي والفرق الرياضية بالمملكة.",

  "Comfortable, breathable K-12 shirts, skirts, trousers, and pinafores designed for active school days.":
    "قمصان وبنطال وتنانير مريحة وقابلة للتهوية مصممة لأيام الدراسة النشطة.",
  "College Uniforms": "زي الكليات",
  "Smart casual college shirts, blazers, and polo shirts tailored for higher education institutions.":
    "قمصان وبلازرات أنيقة مخصصة لكليات ومعاهد التعليم العالي.",
  "University Uniforms": "زي الجامعات",
  "Prestigious university apparel, lab coats, faculty blazers, and custom varsity sweaters with crest embroidery.":
    "ملابس جامعية ومعاطف مختبر وبلازرات أعضاء الهيئة التدريسية مع تطريز الشعار.",
  "Staff Uniforms": "زي الكادر والتعليم",
  "Professional attire for teachers, administrative faculty, librarians, and campus support personnel.":
    "زي رسمية للمعلمين، الكادر الإداري، أمناء المكتبات، وموظفي الدعم.",
  "Sports Uniforms": "الزي الرياضي المدرسي",
  "Moisture-wicking athletic jerseys, P.E. shorts, tracksuits, and team sportswear customized with school colors.":
    "قمصان رياضية وبنطال ترينج طاردة للرطوبة مخصصة بألوان المدرسة.",
  "Premium academic graduation gowns, caps (mortarboards), velvet hoods, and stoles for commencement ceremonies.":
    "أرواب وقبعات تخرج فاخرة (مورتار بورد) وأوشحة مخملية لحفلات التخرج.",

  // Aviation & Transport Page Exact Strings
  "Aviation & Transportation Uniforms": "زي الطيران والنقل",
  "Prestigious airline pilot uniforms, cabin crew attire, ground handling outfits, logistics apparel, and driver uniforms crafted to international aviation standards.":
    "زي فاخر للطيارين، الضيافة الجوية، الخدمات الأرضية، اللوجستيات، والسائقين مُصمم وفق معايير الطيران الدولية.",
  "IATA Aviation Standard": "مطابق لمعايير IATA العالمية",
  "Crease-Resistant Fabrics": "أقمشة مقاومة للتجعد",
  "Custom Epaulettes & Wings": "شارات وأجنحة طيارين مخصصة",
  "From commercial airline pilots and flight attendants to airport ground handling, logistics dispatchers, and corporate chauffeurs across Saudi Arabia.":
    "من طياري ومضيفي الطيران التجاري إلى موظفي المطار وسائقي اللوجستيات وسائقي السيارات الخاصة بالمملكة.",

  "Complete airline crew collections combining formal blazers, skirts, trousers, vests, and branded neck scarves.":
    "أطقم كاملة لطاقم الطيران تجمع بين البلازرات والتنانير والبناطيل والأوشحة المطرزة.",
  "Precision tailored captain and first officer dress shirts, blazers, trousers, tie clips, and gold/silver braid epaulettes.":
    "قمصان وبدلات وشارات طيارين بكتافيات مقصبة ذهبية وفضية للأرباب والضباط الأوائل.",
  "Cabin Crew Uniforms": "زي الضيافة الجوية",
  "Elegant, stretch-fit flight attendant dresses, waistcoats, blazers, and apron sets engineered for high comfort during long-haul flights.":
    "فساتين وبدلات وسديريات مرنة وأنيقة لمضيفات ومضيفي الطيران مخصصة للرحلات الطويلة.",
  "High-visibility airport ground crew vests, check-in desk uniforms, baggage handling workwear, and security personnel attire.":
    "سترات عاكسة وزي موظفي كاونترات المطار وعمال الأمتعة وموظفي الخدمات الميدانية.",
  "Durable polo shirts, cargo pants, and reflective jackets for cargo dispatchers, warehouse crews, and freight handlers.":
    "قمصان بولو وبنطال كارجو وجاكيتات عاكسة لموظفي الشحن وعمال المستودعات واللوجستيات.",
  "Driver Uniforms": "زي السائقين والنقل",
  "Smart chauffeur suits, bus driver shirts, delivery fleet polos, and transport officer uniforms tailored for professional mobility.":
    "بدلات سائقي السيارات الخاصة وقمصان سائقي الحافلات وأسطول التوصيل الميداني.",

  "Outfit Your Airline Crew & Transport Fleet with Premier Apparel":
    "جهّز طاقم طيرانك وأسطول النقل لديك بأفخم الملابس الموحدة",
  "Contact our aviation uniform specialists for custom fabric swatches, sizing kits, and commercial airline proposals.":
    "تواصل مع أخصائيي زي الطيران والنقل للحصول على عينات الأقمشة وحقائب المقاسات والعروض.",

  // Retail & Commercial Page Exact Strings
  "Retail & Commercial Uniforms": "زي التجزئة والمتاجر",
  "Stylish retail polo shirts, shopping mall staff apparel, sales executive suits, cashier aprons, and store associate uniforms crafted for brand elegance.":
    "قمصان بولو أنيقة، ملابس موظفي المراكز التجارية، بدلات تنفيذي المبيعات، ومآزر أمناء الصندوق لتعزيز أنشطة المتاجر.",
  "Modern Retail Branding": "هوية تجارية عصرية",
  "Wrinkle-Free & Stain Resistant": "خالٍ من التجاعيد ومقاوم للبقع",
  "Custom Embroidery & Badges": "تطريز وشارات مخصصة",
  "From high-street fashion boutiques and department stores to shopping mall concierges, supermarket cashiers, and commercial sales teams.":
    "من المتاجر الفاخرة والمحلات التجارية الكبرى إلى استعلامات المراكز، وأمناء الصندوق وفرق المبيعات التجاريين.",

  "Vibrant, comfortable retail polo shirts, aprons, and trousers tailored for boutique and department store associates.":
    "قمصان بولو ومآزر وبنطال زاهية الألوان ومريحة مخصصة لموظفي المتاجر الفاخرة.",
  "Polished concierge, security, customer service desk, and facility management attire for shopping centers and commercial complexes.":
    "زي راقٍ للاستعلامات والأمن وخدمة العملاء وإدارة المرافق للمراكز التجارية.",
  "Sharp formal suits, blazers, and dress shirts for commercial sales representatives, showroom managers, and account leads.":
    "بدلات وقمصان رسمية أنيقة لممثلي المبيعات ومديري المعارض والحسابات.",
  "Cashier Uniforms": "زي أمناء الصندوق (الكاشير)",
  "Ergonomic, low-maintenance cashier shirts, waist aprons, and name tag holders designed for checkout counter efficiency.":
    "قمصان ومآزر عملية لأمناء الصندوق مصممة لسهولة الحركة وتسهيل العمليات.",
  "Store Staff Uniforms": "زي موظفي المتاجر",
  "Cohesive store floor team t-shirts, caps, and vests embroidered with brand logos for easy customer identification.":
    "تيشيرتات وقبعات وسترات متناسقة لموظفي المتجر مع تطريز الشعار لتعريف العملاء بسهولة.",

  "Elevate Your Retail Store Presence with Custom Staff Uniforms":
    "ارتقِ ببريق متجرك ومؤسستك مع الزي الموحد المخصص لموظفيك",
  "Contact our commercial uniform consultants for custom fabric swatches, logo embroidery proofs, and retail chain quotes.":
    "تواصل مع مستشاري الزي التجاري للحصول على عينات القماش وعينات التطريز وأسعار السلاسل التجارية.",

  // Facility Management Page Exact Strings
  "Facility Management Uniforms": "زي إدارة المرافق والتنظيف",
  "Durable cleaning staff tunics, maintenance technician workwear, housekeeping uniforms, and facility management supervisor apparel.":
    "ملابس متينة لطواقم النظافة، وزي فنيي الصيانة، وملابس التدبير المنزلي، وزي مشرفي إدارة المرافق.",
  "Stain & Spill Resistant": "مقاوم للبقع والانسكابات",
  "Ergonomic & Flexible Fit": "تصميم مريح ومرن للعمل",
  "Heavy Commercial Wash Safe": "يتحمل الغسيل التجاري الثقيل",
  "Designed for facility management companies, commercial property maintenance crews, janitorial services, and corporate housekeeping teams across Saudi Arabia.":
    "مُصمم لشركات إدارة المرافق، وفرق صيانة العقارات التجارية، وخدمات النظافة، وطواقم التدبير المنزلي بالمملكة.",

  "Lightweight, chemical-resistant tunics, polo shirts, and elastic waist trousers tailored for janitorial and sanitization crews.":
    "سترات وقمصان بولو وبنطال خفيفة ومقاومة للمواد الكيميائية مخصصة لطواقم النظافة والتعقيم.",
  "Maintenance Staff Uniforms": "زي فنيي وموظفي الصيانة",
  "Tear-resistant work shirts, cargo pants, and multi-pocket utility vests for HVAC, electrical, and MEP maintenance technicians.":
    "قمصان وبنطال كارجو وسترات متعددة الجيوب مقاومة للتمزق لفنيي التكييف والكهرباء والصيانة.",
  "Ergonomic housekeeping dresses, tops, and pants engineered for comfort, quick drying, and ease of movement.":
    "فساتين وسترات وبنطال مريحة وسريعة الجفاف مخصصة لخدمة الغرف والتدبير المنزلي.",
  "Smart executive polos, blazers, and supervisory shirts embroidered with company logos for FM managers and supervisors.":
    "قمصان بولو وبلازرات راقية لمشرفي وإداريي شركات إدارة المرافق مع تطريز الشعار.",

  "Why Choose Amal Facility Management Apparel?": "لماذا تختار أمل لزي إدارة المرافق؟",
  "Clean & Professional Image": "مظهر مريح ونظيف واحترافي",
  "Crisp, hygienic designs and stain-shield fabrics that keep maintenance and cleaning crews looking sharp all day.":
    "تصاميم صحية وأقمشة واقية من البقع تحافظ على مظهر طواقم الصيانة والنظافة طوال اليوم.",
  "Commercial Wash Resistance": "مقاومة دورات الغسيل التجاري",
  "High-tensile poly-cotton fabrics engineered to endure heavy industrial wash cycles without fading or shrinking.":
    "أقمشة بوليستر وقطن عالية المتانة مصممة لتحمل دورات الغسيل الصناعي الشديد دون انكماش.",

  "Outfitting Your Facility Maintenance & Janitorial Workforce?":
    "هل تبحث عن تجهيز كادر الصيانة والنظافة في منشأتك؟",
  "Contact our facility apparel specialists for custom fabric swatches, logo embroidery proofs, and commercial contract quotes.":
    "تواصل مع أخصائيي ملابس المرافق للحصول على عينات القماش وعينات التطريز وأسعار العقود التجارية.",

  // Sports & Events Page Exact Strings
  "Sports & Event Apparel": "زي الرياضة والفعاليات",
  "High-performance sublimated sports jerseys, custom team kits, event crew polo shirts, tournament merchandise, and promotional apparel.":
    "قمصان رياضية عالية الأداء بطباعة التسامي، أطقم الفرق، قمصان بولو المنظمين، ومنتجات البطولات والفعاليات.",
  "Full Dye Sublimation Printing": "طباعة التسامي الكاملة للألوان",
  "Moisture-Wicking & Breathable": "ماص للرطوبة وقابل للتهوية",
  "Custom Names & Player Numbers": "طباعة أسماء وأرقام اللاعبين المخصصة",
  "Designed for athletic clubs, sports academies, tournament organizers, corporate marathons, exhibition staff, and promotional event crews across Saudi Arabia.":
    "مُصمم للأندية والأكاديميات الرياضية، ومنظمي البطولات والماراثونات، وطواقم المعارض والفعاليات.",

  "Sports Jerseys": "قمصان رياضيّة",
  "Full-sublimation football, basketball, cricket, and running jerseys with custom sponsor logos, names, and numbers.":
    "قمصان كرة قدم وسلة وكريكيت وجري بطباعة التسامي مع شعارات الرعاة والأسماء والأرقام.",
  "Matching activewear sets including tracksuits, warm-up jackets, training bibs, and shorts for sports teams.":
    "أطقم رياضية متناسقة تشمل بدل الإحماء والجاكيتات والصدريات التدريبية والشورتات.",
  "High-visibility event crew polo shirts, lanyard vests, coordinator jackets, and usher apparel for concerts, expos, and festivals.":
    "قمصان بولو عاكسة وسترات منسقين وجاكيتات تنظيم للحفلات والمعارض والمهرجانات.",
  "Custom printed t-shirts, caps, hoodies, and totes for brand activation campaigns, product launches, and giveaways.":
    "تيشيرتات وقبعات وهوديز مطبوعة للحملات الترويجية وإطلاق المنتجات والهدايا.",
  "Tournament Kits": "أطقم البطولات والمسابقات",
  "Complete championship packages including athlete jerseys, referee kits, medal ribbons, and organizer merchandise.":
    "باقات بطولات متكاملة تشمل قمصان اللاعبين وأطقم الحكام وأشرطة الميداليات ومعدات المنظمين.",

  "Planning a Tournament or Major Corporate Event?":
    "هل تخطط لبطولة رياضية أو فعالية كبيرة لمؤسستك؟",
  "Contact our sports apparel designers for custom jersey mockups, fabric samples, and tournament package discounts.":
    "تواصل مع مصممي الملابس الرياضية للحصول على نماذج القمصان وعينات الأقمشة وحسومات أطقم البطولات.",

  "Trusted by 200+ Sports Clubs & Event Firms": "محل ثقة أكثر من 200 نادٍ رياضي وشركة فعاليات",
  "ISO Certified Athletic Garment Standards": "معايير ملابس رياضية معتمدة وفق ISO",
  "Sustainable & Eco-Friendly Sublimation Inks": "أحبار تسامي مستدامة وصديقة للبيئة",
  "Dedicated Tournament Account Support": "دعم وحساب مخصص لإدارة البطولات",
  "ISO Certified Facility Apparel Quality": "جودة ملابس مرافق معتمدة وفق ISO",
  "Dedicated FM Account Support": "دعم وحساب مخصص لشركات إدارة المرافق",
  "ISO Certified Retail Apparel Quality": "جودة ملابس تجارية معتمدة وفق ISO",
  "Dedicated Retail Account Support": "دعم وحساب مخصص لقطاع التجزئة والمتاجر",
  "ISO Certified Aviation Apparel Standards": "معايير ملابس طيران معتمدة وفق ISO",
  "Dedicated Fleet Account Support": "دعم وحساب مخصص لشركات النقل والأسطول",
  "Contact our educational uniform specialists for custom fabric samples, size fitting sessions, and bulk school pricing.":
    "تواصل مع أخصائيي الزي التعليمي للحصول على عينات القماش وجلسات المقاسات وأسعار الجملة.",

  "Trusted by 200+ Schools & Universities": "محل ثقة أكثر من 200 مدرسة وجامعة",
  "ISO Certified Educational Apparel": "ملابس تعليمية معتمدة وفق معايير ISO",
  "Dedicated School Account Support": "دعم وحساب مخصص للمؤسسات التعليمية",
  "Contact our security uniform specialists for custom sample development, emblem designs, and enterprise quotes.":
    "تواصل مع أخصائيي الزي الأمني لدينا لتطوير العينات وتصميم الشارات والحصول على أسعار الشركات.",

  "Trusted by 450+ Security & Protection Firms": "محل ثقة أكثر من 450 شركة أمن وحماية",
  "ISO Certified Quality & Uniform Standards": "معايير جودة وأزياء معتمدة ISO",
  "Dedicated Security Account Support": "دعم وحساب مخصص لشركات الأمن",
  "Heavy-duty workwear, high-visibility PPE, coveralls, and flame-resistant apparel engineered for maximum site safety and performance.":
    "ملابس عمل ثقيلة، ومعدات وقاية عالية الوضوح، وأوفرولات وملابس مقاومة للحريق مصممة لأقصى درجات السلامة والأداء في مواقع العمل.",
  "EN & ISO Safety Certified": "معتمد وفق معايير EN و ISO",
  "Heavy Duty & Durable": "شديد التحمل ومتين",
  "From factory technicians and mechanics to oil rig engineers and construction crews, we supply certified protective industrial workwear across Saudi Arabia.":
    "من فنيي المصانع والميكانيكيين إلى مهندسي المنصات ومجموعات البناء، نوفر ملابس عمل واقية ومعتمدة في جميع أنحاء المملكة.",

  "Durable jackets, cargo trousers, and heavy-duty shirts engineered for tough shop floor conditions.":
    "جاكيتات وبنطال كارجو وقمصان ثقيلة الاستخدام مصممة لظروف الورش الشاقة.",
  "Breathable, tear-resistant technician uniforms built for assembly lines and manufacturing plants.":
    "زي فنيين مريح ومقاوم للتمزق مخصص لخطوط التجميع ومصانع الإنتاج.",
  "Coveralls": "الأوفرولات",
  "Full-body protective boiler suits and heavy cotton/poly coveralls with reinforced stitching and utility pockets.":
    "أوفرولات واقية للجسم بالكامل من القطن والبوليستر بخياطة مقواة وجيوب عملية.",
  "High-Visibility Safety Wear": "ملابس السلامة عالية الوضوح",
  "EN ISO 20471 certified high-vis vests, shirts, and trousers with premium 3M reflective striping.":
    "سترات وقمصان وبنطال عالية الوضوح معتمدة بشريط عاكس 3M فاخر.",
  "Reflective Jackets": "الجاكيتات العاكسة",
  "Weatherproof, high-visibility reflective parkas, windbreakers, and safety jackets for night-shift crews.":
    "جاكيتات وسترات عاكسة مقاومة للتقلبات الجوية لطواقم المناوبات الليلية.",
  "Flame Resistant Clothing": "الملابس المقاومة للحريق",
  "NFPA 2112 certified flame-retardant (FR) coveralls, shirts, and trousers for electrical and thermal hazard protection.":
    "أوفرولات وقمصان مقاومة للحريق معتمدة لحماية المخاطر الكهربائية والحرارية.",
  "Mechanical Workshop Uniforms": "زي ورش الميكانيكا",
  "Oil and stain-resistant mechanic overalls, aprons, and workshop shirts designed for automotive and heavy machinery repair.":
    "أوفرولات ومآزر مقاومة للزيوت والبقع مخصصة لإصلاح السيارات والآلات الثقيلة.",
  "Oil & Gas Uniforms": "زي قطاع النفط والغاز",
  "Anti-static, chemical-resistant, and arc-rated safety suits engineered for offshore rigs and refinery operations.":
    "بدلات سلامة مضادة للكهرباء الساكنة والمواد الكيميائية مخصصة للمناطق البحرية والمصافي.",

  "Triple-stitched seams, reinforced knees, and heavy-oz ripstop fabrics built to survive harsh industrial environments.":
    "خياطة ثلاثية، وركب مقواة، وأنسجة ثقيلة مقاومة للتمزق صُممت لتحمل أعتى البيئات الصناعية.",
  "High-Visibility Reflective": "عاكس عالي الوضوح",
  "3M Scotchlite reflective tape offering 360-degree visibility for low-light construction and traffic conditions.":
    "شريط عاكس 3M يوفر رؤية 360 درجة لمواقع البناء وحركة المرور منخفضة الإضاءة.",
  "Enterprise Supply Lines": "خطوط توريد سريعة للشركات",
  "Rapid bulk production and scheduled deliveries for contractors, refineries, and factories across the Middle East.":
    "إنتاج ضخم وسريع مع تسليم مجدول للمقاولين والمصافي والمصانع في الشرق الأوسط.",

  "Equip Your Workforce with Certified Industrial & Safety Wear":
    "جهّز فريق عملك بملابس صناعية ومتطلبات سلامة معتمدة",
  "Contact our safety apparel consultants for custom fabric specs, FR ratings, and bulk corporate pricing.":
    "تواصل مع مستشاري ملابس السلامة لدينا للحصول على مواصفات الأقمشة وأسعار التوريد بالجملة.",

  "Trusted by 600+ Industrial & Energy Firms": "محل ثقة أكثر من 600 شركة صناعية وطاقة",
  "ISO & EN Certified Safety Apparel": "ملابس سلامة معتمدة وفق معايير ISO و EN",
  "24/7 Safety Support & Consultation": "استشارات ودعم سلامة على مدار الساعة",
  "Maintenance Tech Coveralls": "أوفرولات فنيي الصيانة",
  "Multi-pocket work trousers and heavy coveralls for electrical, HVAC, and plumbing techs.":
    "أوفرولات وبنطال بتصميم متعدد الجيوب لفنيي الكهرباء والتكييف والصيانة.",
  "Facility Management Staff": "زي مشرفي وإداريي المرافق",
  "Polo shirts, softshell jackets, and trousers for property managers and site supervisors.":
    "قمصان بولو وجاكيتات لمشرفي وإداريي المرافق والعقارات.",

  "Custom Team Uniforms": "زي الفرق الرياضية",
  "Full-sublimation jerseys, shorts, and tracksuits tailored for football, basketball, and esports teams.":
    "قمصان وبنطال رياضية بالتسامي الكامل لفرق كرة القدم والسلة والرياضات الإلكترونية.",
  "Event Staff Uniforms": "زي منظمي الفعاليات",
  "High-visibility polo shirts, lanyards, and jackets for event coordinators and exhibition crews.":
    "قمصان بولو وجاكيتات لمشرفي ومنظمي الفعاليات والمعارض.",
  "Promotional Apparel": "الملابس الترويجيّة",
  "Custom printed t-shirts, caps, and hoodies for marketing campaigns and brand activations.":
    "تيشيرتات وقبعات مطبوعة للحملات التسويقية والترويجية.",

  "Site Engineer & Supervisor Attire": "زي مهندسي ومشرفي الموقع",
  "Professional engineering polos, high-vis executive vests, and hardhat accessories.":
    "قمصان بولو وسترات عاكسة رسمية لمهندسي ومشرفي المواقع.",
  "High-Vis Construction Apparel": "ملابس السلامة عالية الوضوح للمواقع",
  "Reflective vests, parkas, and high-visibility trousers compliant with KSA safety standards.":
    "سترات وجاكيتات عاكسة مطابقة لمعايير السلامة بالمملكة.",

  // Why Choose Section Titles & Items
  "Why Choose Amal Corporate Uniforms?": "لماذا تختار أمل للزي الموحد المؤسسي؟",
  "Why Choose Amal Healthcare Uniforms?": "لماذا تختار أمل لزي الرعاية الصحية؟",
  "Why Choose Amal Hospitality Uniforms?": "لماذا تختار أمل لزي الضيافة والفنادق؟",
  "Why Choose Amal Industrial Safety Uniforms?": "لماذا تختار أمل للزي الصناعي والسلامة؟",
  "Why Choose Amal Industrial & Safety Apparel?": "لماذا تختار أمل للملابس الصناعية والسلامة؟",
  "Why Choose Amal Security Uniforms?": "لماذا تختار أمل لزي رجال الأمن؟",
  "Why Choose Amal Security Apparel?": "لماذا تختار أمل لملابس الأمن؟",
  "Why Choose Amal Education Uniforms?": "لماذا تختار أمل للزي المدرسي والتعليمي؟",
  "Why Choose Amal Educational Uniforms?": "لماذا تختار أمل للزي التعليمي؟",
  "Why Choose Amal Aviation & Transport Uniforms?": "لماذا تختار أمل لزي الطيران والنقل؟",
  "Why Choose Amal Aviation & Transport Apparel?": "لماذا تختار أمل لملابس الطيران والنقل؟",
  "Why Choose Amal Retail & Commercial Uniforms?": "لماذا تختار أمل لزي التجزئة والمتاجر؟",
  "Why Choose Amal Facility Management Uniforms?": "لماذا تختار أمل لزي إدارة المرافق؟",
  "Why Choose Amal Sports & Events Uniforms?": "لماذا تختار أمل لزي الرياضة والفعاليات؟",
  "Why Choose Amal Sports & Event Apparel?": "لماذا تختار أمل للملابس الرياضية والفعاليات؟",
  "Why Choose Amal Construction Uniforms?": "لماذا تختار أمل لزي البناء والتشييد؟",
  "Why Choose Amal Construction Workwear?": "لماذا تختار أمل لملابس البناء والتشييد؟",
  "Why Choose Amal Uniforms?": "لماذا تختار أمل للزي الموحد؟",

  "Bespoke Precision Fit": "مقاسات دقيقة وخياطة مخصصة",
  "Custom sizing and pattern-making ensuring perfect fit, comfort, and professional drape for every team member.":
    "مقاسات وأنماط مخصصة تضمن المقاس المثالي والراحة والأناقة لكل موظف.",
  "Premium Fabrics": "أقمشة فاخرة عالية الجودة",
  "High-grade breathable, stain-resistant, and low-maintenance fabrics crafted for daily workplace wear.":
    "أقمشة عالية الجودة قابلة للتهوية ومقاومة للبقع وسهلة العناية مصممة للاستخدام اليومي.",
  "Brand Matching": "مطابقة هوية العلامة التجارية",
  "Exact pantone color matching and high-density logo embroidery to reinforce your corporate identity.":
    "مطابقة دقيقة لألوان بانتون وتطريز الشعار عالي الكثافة لتعزيز الهوية.",
  "On-Time Bulk Delivery": "تسليم سريع للطلبات الكبيرة",
  "Streamlined production lines capable of fulfilling enterprise orders on time across Saudi Arabia and the Middle East.":
    "خطوط إنتاج متطورة تضمن تسليم الطلبات الكبيرة في الوقت المحدد بالمملكة.",

  "Premium Quality": "جودة عالية وفاخرة",
  "High quality fabrics that ensure comfort, durability and easy maintenance throughout demanding hospital shifts.":
    "أقمشة عالية الجودة تضمن الراحة والمتانة وسهولة العناية خلال مناوبات المستشفيات الطويلة.",
  "Hygienic & Safe": "معقم وآمن صحياً",
  "Antimicrobial materials that meet healthcare safety standards and withstand frequent thermal sterilization.":
    "أقمشة مضادة للميكروبات تطابق معايير السلامة الصحية وتتحمل التعقيم الحراري المتكرر.",
  "Customizable": "قابل للتخصيص بالكامل",
  "Custom colors, tailored fits, and high-precision logo embroidery to match your hospital or clinic brand identity.":
    "ألوان مخصصة وقصات مريحة وتطريز شعار عالي الدقة ليتناسب مع هوية المستشفى أو العيادة.",
  "Timely Delivery": "تسليم في الوقت المحدد",
  "Reliable production capacity and on-time delivery across Saudi Arabia and the Middle East you can count on.":
    "قدرة إنتاجية موثوقة وتسليم في الوقت المحدد بجميع أنحاء المملكة والشرق الأوسط.",

  "Certified Safety Standards": "معايير سلامة معتمدة",
  "Compliant with international OSHA, EN ISO 20471, and NFPA 2112 safety standards for maximum worker protection.":
    "مطابق لمعايير السلامة الدولية OSHA و EN ISO 20471 و NFPA 2112 لأقصى حماية للعاملين.",
  "Heavy-Duty Durability": "متانة فائقة للاستخدام الثقيل",
  "High-tensile strength fabrics built to resist tears, punctures, and harsh industrial environments.":
    "أقمشة عالية المتانة مقاومة للتمزق والانثقاب والظروف الصناعية الشديدة.",

  "Authoritative Design": "تصميم رسمي ورزين",
  "Sharp tailoring, military-style creases, and immaculate finish that projects command, discipline, and trust.":
    "خياطة حادة وكسرات عسكرية ولمسات نهائية تعزز الانضباط والهيبة والثقة.",
  "Tactical Ripstop Fabric": "أقمشة تكتيكية مقاومة للتمزق",
  "High-tensile strength poly-cotton ripstop fabrics engineered to endure rough physical demands and frequent laundering.":
    "أقمشة بوليستر وقطن عالية المتانة مصممة لتحمل المجهود البدني والغسيل المتكرر.",
  "Custom Emblems & Embroidery": "شارات وتطريز مخصص",
  "High-density corporate logo embroidery, custom shoulder patches, velcro badge holders, and metal pin attachments.":
    "تطريز شعارات عالي الكثافة ورقع أكتاف وحوامل شارات فيلكرو.",
  "Enterprise Guard Supply": "تجهيز شامل لشركات الأمن",
  "Rapid bulk production lines capable of outfitting hundreds of security officers on fast timelines across Saudi Arabia.":
    "خطوط إنتاج سريعة قادرة على تجهيز مئات حراس الأمن بوقت قياسي بالمملكة.",

  "Scholarly Excellence": "تميز وأناقة مدرسية",
  "Dignified designs and crisp tailoring that foster school spirit, discipline, and unity among students.":
    "تصاميم رسمية وخياطة أنيقة تعزز الانضباط والروح المدرسية بين الطلاب.",
  "Kid-Safe & Hypoallergenic": "آمن للأطفال وضد الحساسية",
  "High-grade OEKO-TEX certified skin-friendly cotton blends free of harsh chemicals or irritants.":
    "أقمشة قطنية معتمدة صديقة للبشرة وخالية من المواد الكيميائية الضارة.",
  "Custom Crest Embroidery": "تطريز شعار المدرسة المخصص",
  "High-density computerized school badge embroidery and custom striped ties, collars, and cuffs.":
    "تطريز محوسب عالي الدقة لشعار المدرسة مع ربطات وياقات مخصصة.",
  "Bulk Academic Season Delivery": "تسليم في موسم العام الدراسي",
  "Guaranteed on-time bulk manufacturing for new academic year intake and graduation ceremonies.":
    "تصنيع بالجملة وتسلّيم مضمون بالوقت المحدد لبداية العام الدراسي وحفلات التخرج.",

  "IATA Aviation Excellence": "معايير الطيران العالمية IATA",
  "High-end poly-wool and crease-free stretch blends tailored for long flights, heat resistance, and impeccable presentation.":
    "أقمشة صوف وبوليستر راقية مقاومة للتجاعيد مصممة للرحلات الطويلة والمظهر الأنيق.",
  "Durable & Stain Resistant": "متين ومقاوم للبقع",
  "Advanced stain-shield fabric coatings to keep flight crews and drivers looking immaculate through rigorous travel shifts.":
    "طبقة حماية متطورة ضد البقع تحافظ على مظهر المضيفين والسائقين طوال ساعات السفر.",
  "Custom Wings & Epaulettes": "أجنحة ورتب مطرزة مخصصة",
  "Precision bullion embroidery, pilot wings, rank epaulette bars, custom caps, and airline logo neckties.":
    "تطريز دقيق لأجنحة الطيران ورتب الأكتاف والقبعات وربطات العنق بالشعار.",
  "Fleet & Airline Supply": "توريد شامل لأسطول الطيران والنقل",
  "Dependable bulk production and rapid replenishment for commercial airlines, private jet charters, and logistics fleets.":
    "إنتاج بالجملة وتزويد سريع وموثوق لشركات الطيران ورحلات الطيران الخاص وأساطيل اللوجستيات.",

  "Modern Brand Image": "مظهر عصري للعلامة التجارية",
  "Contemporary cuts, vibrant fabric dyes, and precision logo embroidery that align perfectly with your retail brand identity.":
    "قصات عصرية وألوان زاهية وتطريز شعار دقيق يتطابق تماماً مع هوية متجرك.",
  "Durable & Easy Care": "متين وسهل العناية",
  "Wrinkle-resistant cotton-poly blends engineered to maintain a fresh, crisp appearance through long retail shifts.":
    "أقمشة مخملية وقطنية مقاومة للتجاعيد تحافظ على مظهرها المنعش طوال ساعات العمل.",
  "Chain Store Rollouts": "توسعات وتجهيز سلاسل المتاجر",
  "Scalable bulk production capable of outfitting multi-branch retail chains across Saudi Arabia and the GCC.":
    "إنتاج ضخم قابل للتوسع لتجهيز سلاسل المتاجر متعددة الفروع بالمملكة والخليج.",

  "Utilitarian Functionality": "تصميم عملي متعدد الوظائف",
  "Reinforced tool pockets, breathable mesh underarm panels, and elasticated waistbands for physical tasks.":
    "جيوب أدوات مقواة وفتحات تهوية شبكية وأحزمة مرنة للمهام البدنية.",
  "Enterprise Fleet Fulfillment": "تزويد وتوريد للشركات الكبرى",
  "Reliable bulk manufacturing and scheduled replenishment for commercial property managers and FM contractors.":
    "تصنيع موثوق بالجملة وتزويد مجدول لإدارات العقارات ومقاولي المرافق.",

  "Pro-Grade Sublimation": "طباعة تسامي احترافية",
  "Vibrant, fade-proof full garment dye sublimation that never cracks or peels during intense athletic wear.":
    "طباعة تسامي كاملة بألوان زاهية غير قابلة للبهتان أو التقق خلال الاستخدام الرياضي الشديد.",
  "Dry-Fit Moisture Wicking": "قماش Dry-Fit طارد للرطوبة",
  "Advanced honeycomb micro-polyester fabrics engineered to pull sweat away from the body during peak performance.":
    "أقمشة بوليستر مايكرو متطورة تسحب العرق بعيداً عن الجسم أثناء الأداء الرياضي.",
  "Custom Roster Printing": "طباعة أسماء وأرقام الفريق",
  "Personalized player names, squad numbers, sponsor logos, and high-precision heat transfer printing.":
    "طباعة مخصصة لأسماء اللاعبين وأرقام الأطقم وشعارات الرعاة بدقة عالية.",
  "Fast Tournament Turnaround": "سرعة التنفيذ للبطولات",
  "Rapid production timelines guaranteed to deliver large tournament and event orders before kickoff day.":
    "مواعيد إنتاج سريعة تضمّن تسليم طلبات البطولات والفعاليات قبل يوم الافتتاح.",

  "Site Safety Compliant": "مطابق لمعايير السلامة بالموقع",
  "Meets OSHA and Saudi Arabian Ministry of Human Resources site safety apparel specifications.":
    "مطابق لمواصفات وزارة الموارد البشرية السعودية وهيئة السلامة OSHA لمعدات الموقع.",
  "Extreme Durability": "متانة فائقة وأداء قاسي",
  "Crafted from heavy 240-300 GSM cotton drill and poly-cotton fabrics resistant to tearing and abrasion.":
    "مصنوع من أقمشة قطنية ثقيلة (240-300 جرام) مقاومة للتمزق والاحتياك الشديد.",
  "Bulk Contractor Delivery": "تسليم وتوريد لكبار المقاولين",
  "Fast fulfillment for large-scale mega projects, infrastructure developers, and contracting firms.":
    "تلبية سريعة للمشاريع الضخمة ومطوري البنية التحتية وشركات المقاولات.",

  "5-Star Elegance": "أناقة الخمس نجوم",
  "High-end fabrics and refined tailoring that match the luxury aesthetic of premier hotels, resorts, and fine dining venues.":
    "أقمشة فاخرة وخياطة متقنة تتناسب مع الجماليات الفاخرة للفنادق والمنتجعات.",
  "Advanced fabric technology resistant to kitchen spills, heat, and frequent commercial laundering.":
    "تقنيات قماش متطورة تقاوم انسكابات المطبخ والحرارة والغسيل المتكرر.",
  "Custom Embroidery & Colors": "تطريز وألوان مخصصة",
  "Custom crests, logo embroidery, and pantone-matched color schemes to complement your interior decor.":
    "تطريز شعارات وألوان مطابقة للديكور الداخلي لمنشأتك.",
  "Rapid Replenishment": "تزويد وتجديد سريع",
  "Fast fulfillment and dependable bulk production ensuring your staff is always immaculately uniformed.":
    "تنفيذ سريع وإنتاج بالجملة يضمن مظهر فريقك الدائم بالأناقة.",

  "Clinical Grade Hygiene": "معايير نظافة وطبية صارمة",
  "Fabric finishes certified for hospital sanitization and antimicrobial performance.":
    "أنسجة معتمدة تضمن أعلى مستويات التعقيم والوقاية من الميكروبات.",
  "Shift Comfort": "راحة في المناوبات الطويلة",
  "Lightweight 4-way stretch fabrics designed for 12-hour medical shift mobility.":
    "أقمشة مرنة وخفيفة الوزن مصممة لتوفير الراحة خلال ساعات العمل الطويلة.",
  "Color Fast & Fluid Proof": "ألوان ثابتة ومقاومة للسوائل",
  "Resistant to fluid penetration and harsh chlorine washing cycles.":
    "مقاومة لاختراق السوائل وتتحمل دورات الغسيل بالكلور والمعقمات.",
  "Express Wardrobe Supply": "توريد سريع للمستشفيات",
  "Quick fulfillment for healthcare staff onboarding and multi-branch hospital chains.":
    "تلبية سريعة لاحتياجات التوظيف الجديد وسلاسل المستشفيات والعيادات.",

  "EN ISO Certified": "معتمد وفق معايير السلامة الدولية",
  "Safety apparel compliant with international high-visibility and protective standards.":
    "ملابس سلامة مطابقة لمعايير الوضوح والحماية الدولية والقياسية.",
  "Flame & Arc Resistant": "مقاوم للحريق والشرر الكهربائي",
  "Specialized FR fabrics for oilfields, refineries, and electrical operations.":
    "أقمشة متخصصة مقاومة للحريق والشرار الكهربائي لقطاعات النفط والكهرباء.",
  "Reinforced Durability": "متانة ومقاومة للتمزق",
  "Triple-stitched seams and bar-tacked stress points built for heavy labor.":
    "خياطة ثلاثية ونقاط تقوية مخصصة للأعمال والظروف الشاقة.",
  "Workplace Climate Comfort": "راحة ملاءمة لمناخ العمل",
  "Moisture-wicking mesh liners and breathable cotton blends suited for KSA heat.":
    "بطانات شبكية طاردة للرطوبة وأقمشة قطنية مناسبة لحرارة المملكة.",

  "Authoritative Presence": "مظهر رسمي وهيبة",
  "Sharp tailoring and distinct badges designed to build authority and trust.":
    "قصات خياطة رسمية وشارات بارزة تبني الثقة والهيبة الجذابة.",
  "Heavy-Duty Construction": "بناء متين شديد التحمل",
  "Ripstop fabrics and reinforced knees/elbows for patrol and tactical use.":
    "أقمشة مقواة تكتيكية وأكواع وركب محمية للاستخدام الميداني.",
  "Accessory Ready": "جاهز للاكسسوارات والشارات",
  "Pre-stitched epaulette loops, mic tabs, and custom badge placements.":
    "حلقات جاهزة للأكتاف وأماكن تثبيت الشارات والميكروفونات.",
  "All-Weather Protection": "حماية لكافة الظروف الجوية",
  "Windproof and water-resistant jackets for outdoor security operations.":
    "سترات واقية من الرياح والماء لعمليات الأمن الخارجية.",

  "Child & Skin Safe": "آمن للطفل والبشرة",
  "Hypoallergenic, natural cotton blends free from harmful chemical dyes.":
    "أقمشة قطنية طبيعية خالية من المواد الكيميائية الضارة للبشرة.",
  "Active Movement": "حرية الحركة والنشاط",
  "Flexible stitching and reinforced seams for playground and sports activity.":
    "خياطة مرنة وعملية تناسب الأنشطة واللعب والحركة المدرسية.",
  "Stain & Shrink Resistant": "مقاوم للانكماش والبقع",
  "Fabrics engineered to retain color and shape after repeated home laundering.":
    "أنسجة معالجة تحافظ على اللون والشكل بعد الغسيل المتكرر.",
  "Full School Identity": "هوية متكاملة للمدرسة",
  "Custom crest embroidery, ties, caps, and matching PE kits for all grade levels.":
    "تطريز شعار المدرسة مع الربطات والقبعات والزي الرياضي المتناسق.",

  // Trust Badges
  "Trusted by 400+ Enterprise Companies": "موثوق من أكثر من 400 شركة بالمملكة",
  "Trusted by 250+ Hospitals & Clinics": "موثوق من أكثر من 250 مستشفى وعيادة",
  "Trusted by 350+ Hotels & Restaurants": "موثوق من أكثر من 350 فندقاً ومطعماً",
  "Trusted by 500+ Industrial Operations": "موثوق من أكثر من 500 منشأة صناعية",
  "Trusted by 200+ Security Companies": "موثوق من أكثر من 200 شركة أمنية",
  "Trusted by 150+ Educational Institutes": "موثوق من أكثر من 150 مؤسسة تعليمية",
  "Trusted by 100+ Aviation & Fleet Ops": "موثوق من كبرى شركات الطيران والنقل",
  "Trusted by 300+ Commercial Brands": "موثوق من أكثر من 300 علامة تجارية",
  "Trusted by 200+ Facility Managers": "موثوق من كبرى شركات إدارة المرافق",
  "Trusted by 100+ Sports & Event Teams": "موثوق من منظمي الفعاليات والفرق",
  "Trusted by 400+ Construction Sites": "موثوق من أكثر من 400 موقع بناء وتشييد",
  "Trusted by 500+ Construction & Civil Firms": "محل ثقة أكثر من 500 شركة بناء وتشييد وهندسة مدنية",

  "ISO Certified Quality Standards": "معايير جودة معتمدة ISO",
  "ISO Certified Quality & Safety Standards": "معايير جودة وسلامة معتمدة وفق ISO",
  "Sustainable & Ethical Manufacturing": "تصنيع مستدام وأخلاقي",
  "Dedicated Account Support": "دعم وحساب مخصص للعملاء",
  "Dedicated Healthcare Support": "دعم مخصص لقطاع الرعاية الصحية",
  "Dedicated Hospitality Support": "دعم مخصص لقطاع الضيافة",
  "Dedicated Industrial Support": "دعم مخصص للقطاع الصناعي",
  "Dedicated Security Support": "دعم مخصص للشركات الأمنية",
  "Dedicated Academic Support": "دعم مخصص للمؤسسات التعليمية",
  "Dedicated Project Account Support": "دعم وحساب مخصص لإدارة المشاريع",

  // Construction Page Specific Strings
  "Construction Uniforms": "ملابس ومعدات البناء والتشييد",
  "Heavy-duty construction workwear, high-visibility safety vests, coveralls, and site engineer uniforms built for job site protection.":
    "ملابس عمل ثقيلة للمواقع، سترات سلامة عالية الوضوح، أوفرولات واقية، وزي مهندسي المواقع للحماية في بيئة العمل.",
  "Hard Hat & Site Certified": "معتمد لمواقع البناء وخوذ السلامة",
  "High-Visibility 360°": "وضوح عالٍ 360 درجة",
  "Tear & Weather Resistant": "مقاوم للتمزق والتقلبات الجوية",
  "Engineered for building contractors, site managers, civil engineers, and heavy labor crews working in challenging job site conditions across Saudi Arabia.":
    "مصممة لمقاولي البناء، مديري المواقع، المهندسين المدنيين، وعمال التشييد للعمل في أقسى ظروف المواقع بالمملكة العربية السعودية.",
  "Reinforced work trousers, utility shirts, and heavy-canvas jackets designed for daily construction tasks.":
    "بنطال عمل مقوى، قمصان عملية، وجاكيتات كتان ثقيلة مصممة لمهام البناء اليومية.",
  "Safety Vests": "سترات السلامة والعاكسة",
  "High-visibility neon yellow and orange reflective safety vests with multi-pocket storage and zip closures.":
    "سترات سلامة عاكسة باللون الأصفر الفسفوري والبرتقالي عالية الوضوح بجيوب متعددة وسحابات.",
  "All-weather high-visibility reflective coats, bomber jackets, and windbreakers for night construction shifts.":
    "معاطف وجاكيتات عاكسة مقاومة للطقس وواقية من الرياح لمناوبات التشييد الليلية.",
  "Professional executive site engineer polos, safety helmets, and smart work trousers for project managers.":
    "قمصان بولو تنفيذية احترافية لمهندسي المواقع، خوذ سلامة، وبنطال عمل أنيق لمديري المشاريع.",
  "Full-body cotton and poly-cotton protective jumpsuits with high-density double stitching and reflective bands.":
    "أوفرولات واقية كاملة من القطن والبوليستر بخياطة مزدوجة عالية الكثافة وأشرطة عاكسة.",
  "Safety Apparel": "معدات وملابس السلامة (PPE)",
  "Comprehensive PPE apparel including safety boots, gloves, hard hat liners, and protective accessories.":
    "معدات وقاية شخصية متكاملة تشمل أحذية السلامة، القفازات، بطانات الخوذ، والإكسسوارات الواقية.",
  "Certified reflective tape ensuring maximum visibility under direct sunlight, dust storms, and night lighting.":
    "أشرطة عاكسة معتمدة تضمن أقصى درجات الوضوح تحت أشعة الشمس المباشرة، العواصف الترابية، والإضاءة الليلية.",
  "Equip Your Construction Site Crew with Premium Safety Workwear":
    "جهّز طاقم موقع البناء والتشييد لديك بأفضل ملابس السلامة وحمايتها",
  "Get custom logo embroidery, screen printing, and special contractor pricing for bulk site orders.":
    "احصل على تطريز الشعار المخصص، الطباعة الشاشية، وأسعار خاصة للمقاولين والطلبات بالجملة.",
  "Contact Our Team": "تواصل مع فريقنا",
};

interface IndustryData {
  hero: {
    title: string;
    titleAr?: string;
    subtitle: string;
    subtitleAr?: string;
    heroImage: string;
    breadcrumbs: { label: string; labelAr?: string; href: string }[];
    primaryBtn: { text: string; textAr?: string; href: string };
    secondaryBtn: { text: string; textAr?: string; href: string };
    highlights: { icon: string; label: string; labelAr?: string }[];
  };
  section: {
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
  };
  subcategories: {
    id: string;
    title: string;
    titleAr?: string;
    description: string;
    descriptionAr?: string;
    image: string;
    badgeIcon: string;
    href?: string;
  }[];
  whyChoose: {
    title: string;
    titleAr?: string;
    items: { icon: string; title: string; titleAr?: string; description: string; descriptionAr?: string }[];
  };
  ctaBanner: {
    bgImage: string;
    title: string;
    titleAr?: string;
    subtitle: string;
    subtitleAr?: string;
    primaryBtn: { text: string; textAr?: string; href: string };
    secondaryBtn: { text: string; textAr?: string; href: string };
  };
  trustBadges: { icon: string; text: string; textAr?: string }[];
  theme?: {
    accentBg?: string;
    accentText?: string;
    accentIcon?: string;
    accentBorder?: string;
    accentName?: string;
    badgeBg?: string;
    badgeText?: string;
    badgeBorder?: string;
    dividerBar?: string;
    cardHoverText?: string;
    cardLinkText?: string;
    ctaPrimaryBtn?: string;
  };
}

export default function IndustryPageContent({ data }: { data: IndustryData }) {
  const { t, isRTL } = useLanguage();
  const { hero, section, subcategories, whyChoose, ctaBanner, trustBadges, theme } = data;

  const fontStyle = isRTL
    ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: "right" as const }
    : {};

  // Fallback theme classes if optional properties are omitted
  const activeTheme = {
    badgeBg: theme?.badgeBg || "bg-amber-500/15",
    badgeText: theme?.badgeText || "text-amber-800",
    badgeBorder: theme?.badgeBorder || "border-amber-500/30",
    dividerBar: theme?.dividerBar || "bg-amber-600",
    cardHoverText: theme?.cardHoverText || "group-hover:text-amber-700",
    cardLinkText: theme?.cardLinkText || "text-amber-700 hover:text-amber-900",
    accentBg: theme?.accentBg || "bg-amber-50",
    accentIcon: theme?.accentIcon || "text-amber-600",
    accentBorder: theme?.accentBorder || "border-amber-200",
    ctaPrimaryBtn: theme?.ctaPrimaryBtn || "bg-amber-500 text-navy-950 hover:bg-amber-400",
  };

  const translateText = (text: string, customAr?: string) => {
    if (!isRTL) return text;
    if (customAr) return customAr;

    const trimmed = text.trim();
    if (ARABIC_TEXT_MAP[trimmed]) return ARABIC_TEXT_MAP[trimmed];
    if (ARABIC_TEXT_MAP[text]) return ARABIC_TEXT_MAP[text];

    // Check subnav translations
    const subnavTr = t(`subnav.${text}`);
    if (subnavTr && subnavTr !== `subnav.${text}`) return subnavTr;

    // Check common translations
    const commonTr = t(`common.${text}`);
    if (commonTr && commonTr !== `common.${text}`) return commonTr;

    return text;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
      <Header />

      <main className="flex-1 pt-18 lg:pt-20">
        {/* ── 1. Hero Section ────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-slate-100 border-b border-slate-200/60 min-h-[380px] lg:min-h-[440px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={hero.heroImage}
              alt={hero.title}
              fill
              priority
              className="object-cover object-[80%_20%] lg:object-[88%_20%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:via-white/65 lg:to-transparent w-full lg:w-[65%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 w-full">
            {/* Breadcrumbs */}
            <nav
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 mb-4 lg:mb-5"
              aria-label="Breadcrumb"
            >
              {hero.breadcrumbs.map((crumb, idx) => {
                const crumbLabel =
                  crumb.label === "Home"
                    ? t("nav.home")
                    : crumb.label === "Industries"
                      ? t("nav.industries")
                      : translateText(crumb.label, crumb.labelAr);
                return (
                  <div key={crumb.label} className="flex items-center gap-2">
                    {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400" />}
                    <Link
                      href={crumb.href}
                      className="hover:text-slate-900 transition-colors"
                      style={fontStyle}
                    >
                      {crumbLabel}
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div className="max-w-xl space-y-4 sm:space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-navy-950 tracking-tight leading-[1.1]" style={fontStyle}>
                {translateText(hero.title, hero.titleAr)}
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed" style={fontStyle}>
                {translateText(hero.subtitle, hero.subtitleAr)}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#subcategories"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy-950 text-white font-semibold text-sm rounded-xl hover:bg-black transition-all shadow-md hover:shadow-lg group cursor-pointer"
                  style={fontStyle}
                >
                  <span>{isRTL ? "استعرض المنتجات" : translateText(hero.primaryBtn.text, hero.primaryBtn.textAr)}</span>
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    style={isRTL ? { transform: "rotate(180deg)" } : {}}
                  />
                </a>

                <a
                  href={hero.secondaryBtn.href}
                  download="catalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-xs text-navy-950 border border-slate-300 font-semibold text-sm rounded-xl hover:bg-white transition-all hover:border-slate-400 shadow-xs cursor-pointer"
                  style={fontStyle}
                >
                  <span>{isRTL ? t("common.downloadCatalog") : translateText(hero.secondaryBtn.text, hero.secondaryBtn.textAr)}</span>
                  <Download className="w-4 h-4 text-navy-900" />
                </a>
              </div>

              {/* Highlights Pills */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-5 border-t border-slate-300/70">
                {hero.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-slate-800 text-xs sm:text-sm font-semibold"
                  >
                    <div className={`w-7 h-7 rounded-lg ${activeTheme.badgeBg} ${activeTheme.badgeText} ${activeTheme.badgeBorder} border flex items-center justify-center`}>
                      {getIcon(item.icon, "w-4 h-4")}
                    </div>
                    <span style={fontStyle}>{translateText(item.label, item.labelAr)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Subcategories Section ────────────────────────────────────────── */}
        <section id="subcategories" className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight" style={fontStyle}>
                {translateText(section.title, section.titleAr)}
              </h2>
              <div className={`w-12 h-1 ${activeTheme.dividerBar} mx-auto rounded-full`} />
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={fontStyle}>
                {translateText(section.description, section.descriptionAr)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {subcategories.map((cat) => (
                <div
                  key={cat.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={translateText(cat.title, cat.titleAr)}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs text-navy-950 shadow-md border border-slate-200/80 flex items-center justify-center">
                      {getIcon(cat.badgeIcon, "w-5 h-5")}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className={`text-xl font-bold text-navy-950 ${activeTheme.cardHoverText} transition-colors mb-2`} style={fontStyle}>
                        {translateText(cat.title, cat.titleAr)}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3" style={fontStyle}>
                        {translateText(cat.description, cat.descriptionAr)}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href={cat.href || "/contact#quote"}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${activeTheme.cardLinkText} group/link`}
                        style={fontStyle}
                      >
                        <span>{t("common.viewDetails")}</span>
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

        {/* ── 3. Why Choose Section ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950" style={fontStyle}>
                {translateText(whyChoose.title, whyChoose.titleAr)}
              </h2>
              <div className={`w-12 h-1 ${activeTheme.dividerBar} mx-auto rounded-full`} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3"
                >
                  <div className={`w-12 h-12 rounded-xl ${activeTheme.accentBg} ${activeTheme.accentIcon} ${activeTheme.accentBorder} border flex items-center justify-center mb-2`}>
                    {getIcon(item.icon, "w-6 h-6")}
                  </div>
                  <h3 className="text-lg font-bold text-navy-950" style={fontStyle}>
                    {translateText(item.title, item.titleAr)}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed" style={fontStyle}>
                    {translateText(item.description, item.descriptionAr)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. CTA Banner Section ───────────────────────────────────────────── */}
        <ServiceCtaBanner
          ctaBanner={{
            ...ctaBanner,
            title: isRTL ? translateText(ctaBanner.title, ctaBanner.titleAr) : ctaBanner.title,
            subtitle: isRTL ? translateText(ctaBanner.subtitle, ctaBanner.subtitleAr) : ctaBanner.subtitle,
          }}
          primaryBtnClass={activeTheme.ctaPrimaryBtn}
          imageAlt={hero.title}
        />

        {/* ── 5. Bottom Trust Badges Bar ──────────────────────────────────────── */}
        <section className="bg-white py-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {trustBadges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2"
                >
                  <div className={`w-9 h-9 rounded-full ${activeTheme.accentBg} ${activeTheme.accentIcon} flex items-center justify-center shrink-0`}>
                    {getIcon(badge.icon, "w-4 h-4")}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 text-center sm:text-left leading-tight" style={fontStyle}>
                    {translateText(badge.text, badge.textAr)}
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
