// ─── Translation Dictionary ──────────────────────────────────────────────────
// Complete English → Arabic translations for all site content.
// No external API required — all translations are bundled.

export type Language = "en" | "ar";

export const translations = {
  // ─── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    industries: { en: "Industries", ar: "القطاعات" },
    printing: { en: "Printing", ar: "الطباعة" },
    embroidery: { en: "Embroidery", ar: "التطريز" },
    customManufacturing: { en: "Custom Manufacturing", ar: "التصنيع المخصص" },
    profession: { en: "Profession", ar: "المهن" },
    gallery: { en: "Gallery", ar: "المعرض" },
    about: { en: "About", ar: "من نحن" },
    contact: { en: "Contact", ar: "اتصل بنا" },
    requestQuote: { en: "Request Quote", ar: "طلب عرض سعر" },
    callUs: { en: "Call Us", ar: "اتصل بنا" },
    emailUs: { en: "Email Us", ar: "راسلنا" },
    requestAQuote: { en: "Request a Quote", ar: "طلب عرض سعر" },
    switchToArabic: { en: "عربي", ar: "English" },
  },

  // ─── Dropdown Subnav Items Translation Map ────────────────────────────────────
  subnav: {
    // Industries
    "Corporate": { en: "Corporate", ar: "الشركات" },
    "Healthcare": { en: "Healthcare", ar: "الرعاية الصحية" },
    "Hospitality": { en: "Hospitality", ar: "الضيافة" },
    "Industrial & Safety": { en: "Industrial & Safety", ar: "الصناعة والسلامة" },
    "Security": { en: "Security", ar: "الأمن" },
    "Education": { en: "Education", ar: "التعليم" },
    "Aviation & Transport": { en: "Aviation & Transport", ar: "الطيران والنقل" },
    "Retail & Commercial": { en: "Retail & Commercial", ar: "التجزئة والتجارة" },
    "Facility Management": { en: "Facility Management", ar: "إدارة المرافق" },
    "Sports & Events": { en: "Sports & Events", ar: "الرياضة والفعاليات" },
    "Construction": { en: "Construction", ar: "البناء والتشييد" },

    // Printing
    "Screen Printing": { en: "Screen Printing", ar: "الطباعة الحريرية" },
    "Digital Printing": { en: "Digital Printing", ar: "الطباعة الرقمية" },
    "Heat Transfer Printing": { en: "Heat Transfer Printing", ar: "طباعة النقل الحراري" },
    "Sublimation Printing": { en: "Sublimation Printing", ar: "طباعة التسامي" },

    // Embroidery
    "Computerized Embroidery": { en: "Computerized Embroidery", ar: "التطريز المحوسب" },
    "Name Embroidery": { en: "Name Embroidery", ar: "تطريز الأسماء" },
    "Cap Embroidery": { en: "Cap Embroidery", ar: "تطريز القبعات" },
    "Polo Shirt Embroidery": { en: "Polo Shirt Embroidery", ar: "تطريز قمصان البولو" },
    "3D Puff Embroidery": { en: "3D Puff Embroidery", ar: "التطريز ثلاثي الأبعاد" },
    "Woven Labels & Badges": { en: "Woven Labels & Badges", ar: "الشارات والملصقات المنسوجة" },
    "Corporate Logo Embroidery": { en: "Corporate Logo Embroidery", ar: "تطريز شعار الشركة" },
    "Monogram Embroidery": { en: "Monogram Embroidery", ar: "تطريز المونوغرام" },
    "Jacket Embroidery": { en: "Jacket Embroidery", ar: "تطريز السترات" },
    "Uniform Badge Embroidery": { en: "Uniform Badge Embroidery", ar: "تطريز شارات الزي" },
    "Custom Embroidery Patches": { en: "Custom Embroidery Patches", ar: "شارات التطريز المخصصة" },
    "Embroidered Emblems": { en: "Embroidered Emblems", ar: "الشعارات المطرزة" },

    // Custom Manufacturing
    "Custom Uniform Design & Manufacturing": { en: "Custom Uniform Design & Manufacturing", ar: "تصميم وتصنيع الزي الموحد المخصص" },
    "Bulk Uniform Production": { en: "Bulk Uniform Production", ar: "إنتاج الزي الموحد بالجملة" },
    "Sample Development": { en: "Sample Development", ar: "تطوير العينات" },
    "Custom Sizing & Fitting": { en: "Custom Sizing & Fitting", ar: "القياس والمقاسات المخصصة" },
    "Private Label Manufacturing": { en: "Private Label Manufacturing", ar: "التصنيع بالعلامة الخاصة" },
    "Made-to-Order Uniforms": { en: "Made-to-Order Uniforms", ar: "الزي الموحد حسب الطلب" },
    "Pattern Making": { en: "Pattern Making", ar: "صناعة الأنماط" },

    // Profession
    "Office Staff Uniforms": { en: "Office Staff Uniforms", ar: "زي موظفي المكاتب" },
    "Executive Wear": { en: "Executive Wear", ar: "ملابس كبار الشخصيات" },
    "Reception Uniforms": { en: "Reception Uniforms", ar: "زي موظفي الاستقبال" },
    "Customer Service Uniforms": { en: "Customer Service Uniforms", ar: "زي خدمة العملاء" },
    "Administrative Staff Uniforms": { en: "Administrative Staff Uniforms", ar: "زي الموظفين الإداريين" },
    "Corporate Shirts & Suits": { en: "Corporate Shirts & Suits", ar: "قمصان وبدلات الشركات" },
    "Doctor Coats": { en: "Doctor Coats", ar: "معاطف الأطباء" },
    "Medical Scrubs": { en: "Medical Scrubs", ar: "السكراب الطبي" },
    "Nurse Uniforms": { en: "Nurse Uniforms", ar: "زي التمريض" },
    "Lab Coats": { en: "Lab Coats", ar: "معاطف المختبر" },
    "Pharmacy Uniforms": { en: "Pharmacy Uniforms", ar: "زي الصيدليات" },
    "Hospital Staff Uniforms": { en: "Hospital Staff Uniforms", ar: "زي موظفي المستشفيات" },
    "Healthcare PPE Apparel": { en: "Healthcare PPE Apparel", ar: "ملابس الحماية الطبية" },
    "Hotel Staff Uniforms": { en: "Hotel Staff Uniforms", ar: "زي موظفي الفنادق" },
    "Restaurant Uniforms": { en: "Restaurant Uniforms", ar: "زي المطاعم" },
    "Chef Jackets": { en: "Chef Jackets", ar: "جاكيتات الطهاة" },
    "Waiter & Waitress Uniforms": { en: "Waiter & Waitress Uniforms", ar: "زي النوادل والنديمات" },
    "Housekeeping Uniforms": { en: "Housekeeping Uniforms", ar: "زي التدبير المنزلي" },
    "Catering Uniforms": { en: "Catering Uniforms", ar: "زي خدمات الإعاشة" },
    "Concierge Uniforms": { en: "Concierge Uniforms", ar: "زي موظفي الاستقبال بالفنادق" },
    "Industrial Workwear": { en: "Industrial Workwear", ar: "ملابس العمل الصناعية" },
    "Factory Uniforms": { en: "Factory Uniforms", ar: "زي المصانع" },
    "Construction Workwear": { en: "Construction Workwear", ar: "ملابس البناء والتشييد" },
    "Site Engineer Uniforms": { en: "Site Engineer Uniforms", ar: "زي مهندسي الموقع" },
    "Security Guard Uniforms": { en: "Security Guard Uniforms", ar: "زي حراس الأمن" },
    "Patrol Uniforms": { en: "Patrol Uniforms", ar: "زي الدوريات الأمنية" },
    "Tactical Uniforms": { en: "Tactical Uniforms", ar: "الزي التكتيكي" },
    "School Uniforms": { en: "School Uniforms", ar: "الزي المدرسي" },
    "College Uniforms": { en: "College Uniforms", ar: "زي الكليات" },
    "University Uniforms": { en: "University Uniforms", ar: "زي الجامعات" },
    "Staff Uniforms": { en: "Staff Uniforms", ar: "زي الكادر التعليمي" },
    "Sports Uniforms": { en: "Sports Uniforms", ar: "الزي الرياضي" },
    "Graduation Apparel": { en: "Graduation Apparel", ar: "ملابس التخرج" },
    "Airline Crew Uniforms": { en: "Airline Crew Uniforms", ar: "زي طاقم الطيران" },
    "Pilot Uniforms": { en: "Pilot Uniforms", ar: "زي الطيارين" },
    "Cabin Crew Uniforms": { en: "Cabin Crew Uniforms", ar: "زي ضيافة الطيران" },
    "Airport Staff Uniforms": { en: "Airport Staff Uniforms", ar: "زي موظفي المطار" },
    "Logistics Staff Uniforms": { en: "Logistics Staff Uniforms", ar: "زي موظفي اللوجستيات" },
    "Driver Uniforms": { en: "Driver Uniforms", ar: "زي السائقين" },
    "Retail Staff Uniforms": { en: "Retail Staff Uniforms", ar: "زي موظفي التجزئة" },
    "Shopping Mall Uniforms": { en: "Shopping Mall Uniforms", ar: "زي موظفي المراكز التجارية" },
    "Sales Executive Uniforms": { en: "Sales Executive Uniforms", ar: "زي تنفيذي المبيعات" },
    "Cashier Uniforms": { en: "Cashier Uniforms", ar: "زي أمناء الصندوق" },
    "Store Staff Uniforms": { en: "Store Staff Uniforms", ar: "زي موظفي المتاجر" },
    "Cleaning Staff Uniforms": { en: "Cleaning Staff Uniforms", ar: "زي عمال النظافة" },
    "Maintenance Staff Uniforms": { en: "Maintenance Staff Uniforms", ar: "زي موظفي الصيانة" },
    "Facility Management Apparel": { en: "Facility Management Apparel", ar: "ملابس إدارة المرافق" },
    "Team Uniforms": { en: "Team Uniforms", ar: "زي الفرق الرياضية" },
    "Event Staff Uniforms": { en: "Event Staff Uniforms", ar: "زي منظمي الفعاليات" },
  },

  // ─── Industry dropdown labels ────────────────────────────────────────────────
  industries: {
    corporate: { en: "Corporate", ar: "الشركات" },
    healthcare: { en: "Healthcare", ar: "الرعاية الصحية" },
    hospitality: { en: "Hospitality", ar: "الضيافة" },
    industrialSafety: { en: "Industrial & Safety", ar: "الصناعة والسلامة" },
    security: { en: "Security", ar: "الأمن" },
    education: { en: "Education", ar: "التعليم" },
    aviationTransport: { en: "Aviation & Transport", ar: "الطيران والنقل" },
    retailCommercial: { en: "Retail & Commercial", ar: "التجزئة والتجارة" },
    facilityManagement: { en: "Facility Management", ar: "إدارة المرافق" },
    sportsEvents: { en: "Sports & Events", ar: "الرياضة والفعاليات" },
    construction: { en: "Construction", ar: "البناء والتشييد" },
  },

  // ─── Printing dropdown labels ────────────────────────────────────────────────
  printing: {
    screenPrinting: { en: "Screen Printing", ar: "الطباعة الحريرية" },
    digitalPrinting: { en: "Digital Printing", ar: "الطباعة الرقمية" },
    heatTransferPrinting: { en: "Heat Transfer Printing", ar: "طباعة النقل الحراري" },
    sublimationPrinting: { en: "Sublimation Printing", ar: "طباعة التسامي" },
  },

  // ─── Embroidery dropdown labels ──────────────────────────────────────────────
  embroidery: {
    computerizedEmbroidery: { en: "Computerized Embroidery", ar: "التطريز المحوسب" },
    nameEmbroidery: { en: "Name Embroidery", ar: "تطريز الأسماء" },
    capEmbroidery: { en: "Cap Embroidery", ar: "تطريز القبعات" },
    poloShirtEmbroidery: { en: "Polo Shirt Embroidery", ar: "تطريز قمصان البولو" },
    puffEmbroidery: { en: "3D Puff Embroidery", ar: "التطريز ثلاثي الأبعاد" },
    wovenLabelsBadges: { en: "Woven Labels & Badges", ar: "الشارات والملصقات المنسوجة" },
    corporateLogoEmbroidery: { en: "Corporate Logo Embroidery", ar: "تطريز شعار الشركة" },
    monogramEmbroidery: { en: "Monogram Embroidery", ar: "تطريز المونوغرام" },
    jacketEmbroidery: { en: "Jacket Embroidery", ar: "تطريز السترات" },
    uniformBadgeEmbroidery: { en: "Uniform Badge Embroidery", ar: "تطريز شارات الزي" },
    customEmbroideryPatches: { en: "Custom Embroidery Patches", ar: "شارات التطريز المخصصة" },
    embroideredEmblems: { en: "Embroidered Emblems", ar: "الشعارات المطرزة" },
  },

  // ─── Custom Manufacturing dropdown labels ────────────────────────────────────
  customManufacturing: {
    customUniformDesign: { en: "Custom Uniform Design & Manufacturing", ar: "تصميم وتصنيع الزي الموحد المخصص" },
    bulkUniformProduction: { en: "Bulk Uniform Production", ar: "إنتاج الزي الموحد بالجملة" },
    sampleDevelopment: { en: "Sample Development", ar: "تطوير العينات" },
    customSizingFitting: { en: "Custom Sizing & Fitting", ar: "القياس والمقاسات المخصصة" },
    privateLabelManufacturing: { en: "Private Label Manufacturing", ar: "التصنيع بالعلامة الخاصة" },
    madeToOrderUniforms: { en: "Made-to-Order Uniforms", ar: "الزي الموحد حسب الطلب" },
    patternMaking: { en: "Pattern Making", ar: "صناعة الأنماط" },
  },

  // ─── Hero / Banner ───────────────────────────────────────────────────────────
  hero: {
    slide1Title: {
      en: "Premium Corporate Uniforms",
      ar: "زي موحد مؤسسي راقٍ",
    },
    slide1Subtitle: {
      en: "Elevate your brand with bespoke corporate wear crafted for Saudi Arabia's top organisations",
      ar: "ارتقِ بعلامتك التجارية بزي مؤسسي مخصص مُصمَّم لكبرى مؤسسات المملكة العربية السعودية",
    },
    slide1Button: { en: "Explore Corporate", ar: "استعرض الزي المؤسسي" },
    slide2Title: {
      en: "Healthcare & Medical Uniforms",
      ar: "زي الرعاية الصحية والطبية",
    },
    slide2Subtitle: {
      en: "Precision-made medical scrubs, lab coats, and clinical wear built for comfort and compliance",
      ar: "سكراب طبي وأبيض مصنوع بدقة عالية لتوفير الراحة والالتزام بالمعايير الطبية",
    },
    slide2Button: { en: "View Healthcare", ar: "استعرض الزي الصحي" },
    slide3Title: {
      en: "Hospitality & Hotel Uniforms",
      ar: "زي الضيافة والفنادق",
    },
    slide3Subtitle: {
      en: "Elegant hotel and restaurant uniforms that create lasting impressions for your guests",
      ar: "زي فندقي ومطعمي أنيق يترك انطباعاً دائماً لدى ضيوفك",
    },
    slide3Button: { en: "View Hospitality", ar: "استعرض زي الضيافة" },
    exploreButton: { en: "Explore Services", ar: "استعرض خدماتنا" },
    getQuote: { en: "Get a Quote", ar: "احصل على عرض سعر" },
  },

  // ─── Trust Indicators ────────────────────────────────────────────────────────
  trust: {
    yearsExperience: { en: "Years of Experience", ar: "سنوات من الخبرة" },
    industriesServed: { en: "Industries Served", ar: "قطاعات نخدمها" },
    businessClients: { en: "Business Clients", ar: "عميل من الأعمال" },
    uniformsDelivered: { en: "Uniforms Delivered", ar: "زي موحد تم توصيله" },
  },

  // ─── Section Headings ─────────────────────────────────────────────────────────
  sections: {
    industries: {
      label: { en: "What We Serve", ar: "ما نقدمه" },
      title: { en: "Uniforms for Every Industry", ar: "زي موحد لكل قطاع" },
      subtitle: {
        en: "From corporate offices to construction sites — we design and manufacture professional uniforms for every sector in the Kingdom.",
        ar: "من المكاتب المؤسسية إلى مواقع البناء — نصمم وننتج الزي الموحد المهني لكل قطاع في المملكة.",
      },
    },
    services: {
      label: { en: "Our Services", ar: "خدماتنا" },
      title: { en: "End-to-End Uniform Solutions", ar: "حلول زي موحد متكاملة" },
      subtitle: {
        en: "From initial design consultation to final delivery — we handle every step of your uniform production journey.",
        ar: "من استشارة التصميم الأولي إلى التسليم النهائي — نتولى كل خطوة في رحلة إنتاج زيك الموحد.",
      },
    },
    products: {
      label: { en: "Product Collections", ar: "مجموعات المنتجات" },
      title: { en: "Our Uniform Collections", ar: "مجموعات الزي الموحد لدينا" },
      subtitle: {
        en: "Explore our premium uniform ranges designed for diverse sectors across Saudi Arabia.",
        ar: "استعرض مجموعات الزي الموحد الراقية المصممة لقطاعات متنوعة في المملكة العربية السعودية.",
      },
    },
    manufacturing: {
      label: { en: "Our Process", ar: "عمليتنا" },
      title: { en: "From Design to Delivery", ar: "من التصميم إلى التسليم" },
      subtitle: {
        en: "A streamlined six-step process that ensures quality, precision, and on-time delivery for every order.",
        ar: "عملية ست خطوات مُبسَّطة تضمن الجودة والدقة والتسليم في الوقت المحدد لكل طلب.",
      },
    },
    whyAmal: {
      label: { en: "Why Choose Us", ar: "لماذا تختارنا" },
      title: { en: "The Amal Advantage", ar: "ميزة أمل" },
      subtitle: {
        en: "We combine Saudi-based manufacturing with premium materials and dedicated service to deliver uniforms that set your team apart.",
        ar: "نجمع بين التصنيع المحلي في المملكة والمواد الراقية والخدمة المتفانية لنقدم زياً موحداً يميز فريقك.",
      },
    },
    customisation: {
      label: { en: "Custom Options", ar: "خيارات التخصيص" },
      title: { en: "Fully Customisable Uniforms", ar: "زي موحد قابل للتخصيص بالكامل" },
      subtitle: {
        en: "Every uniform we create is tailored to your brand — from fabric selection to final embroidery.",
        ar: "كل زي نصنعه مُصمَّم خصيصاً لعلامتك التجارية — من اختيار القماش إلى التطريز النهائي.",
      },
    },
    gallery: {
      label: { en: "Our Work", ar: "أعمالنا" },
      title: { en: "Uniform Gallery", ar: "معرض الزي الموحد" },
      subtitle: {
        en: "A showcase of our finest work across industries and sectors.",
        ar: "عرض لأفضل أعمالنا عبر مختلف الصناعات والقطاعات.",
      },
    },
    testimonials: {
      label: { en: "Client Stories", ar: "قصص عملائنا" },
      title: { en: "What Our Clients Say", ar: "ما يقوله عملاؤنا" },
      subtitle: {
        en: "Trusted by leading businesses across Saudi Arabia.",
        ar: "موثوق به من كبرى الشركات في المملكة العربية السعودية.",
      },
    },
    faq: {
      label: { en: "FAQ", ar: "الأسئلة الشائعة" },
      title: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
      subtitle: {
        en: "Find answers to common questions about our uniform services, ordering process, and delivery.",
        ar: "اعثر على إجابات للأسئلة الشائعة حول خدمات الزي الموحد وعملية الطلب والتوصيل.",
      },
    },
    finalCta: {
      label: { en: "Get Started", ar: "ابدأ الآن" },
      title: { en: "Request a Quote", ar: "طلب عرض سعر" },
      subtitle: {
        en: "Tell us about your uniform requirements and our team will prepare a competitive quote within 24 hours.",
        ar: "أخبرنا عن متطلبات الزي الموحد لديك وسيقوم فريقنا بإعداد عرض سعر تنافسي خلال 24 ساعة.",
      },
    },
  },

  // ─── Industry Cards ───────────────────────────────────────────────────────────
  industryCards: {
    corporate: {
      title: { en: "Corporate", ar: "الشركات" },
      description: {
        en: "Tailored business attire that projects professionalism and brand identity",
        ar: "ملابس مؤسسية مخصصة تعكس الاحترافية وهوية العلامة التجارية",
      },
    },
    healthcare: {
      title: { en: "Healthcare", ar: "الرعاية الصحية" },
      description: {
        en: "Medical scrubs and lab coats designed for comfort and hygiene",
        ar: "سكراب طبي وأبيض مصمم للراحة والنظافة",
      },
    },
    hospitality: {
      title: { en: "Hospitality", ar: "الضيافة" },
      description: {
        en: "Elegant hotel and restaurant uniforms that elevate guest experience",
        ar: "زي فندقي ومطعمي أنيق يرفع مستوى تجربة الضيوف",
      },
    },
    industrial: {
      title: { en: "Industrial & Safety", ar: "الصناعة والسلامة" },
      description: {
        en: "Durable workwear engineered for safety and performance",
        ar: "ملابس عمل متينة مصممة للسلامة والأداء العالي",
      },
    },
    security: {
      title: { en: "Security", ar: "الأمن" },
      description: {
        en: "Authoritative uniforms that command respect and ensure visibility",
        ar: "زي موحد رسمي يُلهم الاحترام ويضمن الوضوح",
      },
    },
    education: {
      title: { en: "Education", ar: "التعليم" },
      description: {
        en: "Smart, comfortable school uniforms that foster unity and pride",
        ar: "زي مدرسي أنيق ومريح يعزز الوحدة والفخر",
      },
    },
    aviation: {
      title: { en: "Aviation & Transport", ar: "الطيران والنقل" },
      description: {
        en: "Sophisticated airline, ground crew, and transport uniforms",
        ar: "زي راقٍ لطواقم الطيران والعمليات الأرضية والنقل",
      },
    },
    retail: {
      title: { en: "Retail & Commercial", ar: "التجزئة والتجارة" },
      description: {
        en: "Branded retail and commercial staff uniforms that strengthen your store identity",
        ar: "زي موظفي التجزئة والتجارة المعلّم الذي يعزز هوية متجرك",
      },
    },
    facilityManagement: {
      title: { en: "Facility Management", ar: "إدارة المرافق" },
      description: {
        en: "Functional workwear for facility and maintenance operations",
        ar: "ملابس عمل عملية لعمليات المرافق والصيانة",
      },
    },
    sportsEvents: {
      title: { en: "Sports & Events", ar: "الرياضة والفعاليات" },
      description: {
        en: "Custom activewear and staff attire for sports and major events",
        ar: "ملابس رياضية مخصصة وزي موظفي الفعاليات الكبرى",
      },
    },
    construction: {
      title: { en: "Construction", ar: "البناء والتشييد" },
      description: {
        en: "High-visibility and heavy-duty apparel for construction sites",
        ar: "ملابس عالية الوضوح وثقيلة الاستخدام لمواقع البناء",
      },
    },
  },

  // ─── Services ────────────────────────────────────────────────────────────────
  services: {
    customDesign: {
      title: { en: "Custom Design", ar: "التصميم المخصص" },
      description: {
        en: "Bespoke uniform design tailored to your brand guidelines, from concept sketches to final production samples.",
        ar: "تصميم زي موحد مخصص وفق إرشادات علامتك التجارية، من الرسومات الأولية إلى العينات الإنتاجية النهائية.",
      },
    },
    bulkOrders: {
      title: { en: "Bulk Orders", ar: "الطلبات بالجملة" },
      description: {
        en: "Large-scale manufacturing capabilities with consistent quality across thousands of units. Competitive bulk pricing.",
        ar: "قدرات تصنيع واسعة النطاق بجودة ثابتة عبر آلاف الوحدات وأسعار تنافسية للجملة.",
      },
    },
    logoEmbroidery: {
      title: { en: "Logo Embroidery", ar: "تطريز الشعارات" },
      description: {
        en: "Precision machine and hand embroidery for logos, names, and custom branding on all uniform types.",
        ar: "تطريز آلي ويدوي دقيق للشعارات والأسماء والعلامة التجارية المخصصة على جميع أنواع الزي الموحد.",
      },
    },
    premiumFabrics: {
      title: { en: "Premium Fabrics", ar: "أقمشة راقية" },
      description: {
        en: "Curated selection of performance fabrics — breathable, durable, and suitable for Saudi Arabia's climate.",
        ar: "مجموعة مختارة من الأقمشة عالية الأداء — قابلة للتهوية ومتينة ومناسبة لمناخ المملكة العربية السعودية.",
      },
    },
    tailoredFitting: {
      title: { en: "Tailored Fitting", ar: "القياس المخصص" },
      description: {
        en: "On-site measurement services and custom sizing to ensure every team member looks and feels their best.",
        ar: "خدمات قياس في الموقع ومقاسات مخصصة لضمان أفضل مظهر وإحساس لكل عضو في فريقك.",
      },
    },
    ksaDelivery: {
      title: { en: "KSA Delivery", ar: "التوصيل داخل المملكة" },
      description: {
        en: "Reliable delivery across the Kingdom of Saudi Arabia with order tracking and dedicated account support.",
        ar: "توصيل موثوق في جميع أنحاء المملكة العربية السعودية مع تتبع الطلبات ودعم حساب مخصص.",
      },
    },
  },

  // ─── Products ────────────────────────────────────────────────────────────────
  products: {
    corporateSuits: {
      title: { en: "Corporate Suits & Executive Wear", ar: "بدلات مؤسسية وملابس تنفيذية" },
      category: { en: "Corporate", ar: "الشركات" },
      description: {
        en: "Premium tailored suits, blazers, and shirts for executive teams and front-office staff.",
        ar: "بدلات وجاكيتات وقمصان راقية مخصصة لفرق الإدارة وموظفي الاستقبال.",
      },
    },
    medicalScrubs: {
      title: { en: "Medical Scrubs & Lab Coats", ar: "سكراب طبي وأبيض" },
      category: { en: "Healthcare", ar: "الرعاية الصحية" },
      description: {
        en: "Comfortable, antimicrobial scrubs and doctor coats designed for long medical shifts.",
        ar: "سكراب ومعاطف طبية مريحة ومضادة للميكروبات مصممة للمناوبات الطبية الطويلة.",
      },
    },
    chefWear: {
      title: { en: "Chef Jackets & Hotel Staff Wear", ar: "جاكيتات الشيف وزي موظفي الفندق" },
      category: { en: "Hospitality", ar: "الضيافة" },
      description: {
        en: "Professional chef jackets, aprons, and restaurant staff attire built for heat and movement.",
        ar: "جاكيتات طهاة احترافية ومآزر وملابس موظفي المطاعم مصممة لتحمل الحرارة والحركة.",
      },
    },
    securityUniforms: {
      title: { en: "Security & Patrol Uniforms", ar: "زي الأمن والدوريات" },
      category: { en: "Security", ar: "الأمن" },
      description: {
        en: "Authoritative, durable uniforms with custom badges and epaulettes for security personnel.",
        ar: "زي موحد رسمي ومتين مع شارات وأكتاف مخصصة لأفراد الأمن.",
      },
    },
    coveralls: {
      title: { en: "Protective Coveralls & Workwear", ar: "بذلات واقية وملابس عمل" },
      category: { en: "Industrial & Safety", ar: "الصناعة والسلامة" },
      description: {
        en: "Heavy-duty cotton coveralls and high-vis safety apparel engineered for job site protection.",
        ar: "بذلات قطنية ثقيلة وملابس سلامة عالية الوضوح مصممة لحماية مواقع العمل.",
      },
    },
    poloShirts: {
      title: { en: "Branded Polo Shirts & Staff Wear", ar: "قمصان بولو معلّمة وزي الموظفين" },
      category: { en: "Retail & Commercial", ar: "التجزئة والتجارة" },
      description: {
        en: "Custom-branded polo shirts and commercial staff attire that strengthen store identity.",
        ar: "قمصان بولو بعلامة تجارية مخصصة وملابس موظفي التجارة التي تعزز هوية المتجر.",
      },
    },
  },

  // ─── Manufacturing Steps ─────────────────────────────────────────────────────
  manufacturingSteps: {
    consultation: {
      title: { en: "Consultation", ar: "الاستشارة" },
      description: {
        en: "We begin with a detailed discussion to understand your requirements, brand guidelines, and team sizing needs.",
        ar: "نبدأ بنقاش مفصل لفهم متطلباتك وإرشادات علامتك التجارية وااحتياجات قياس فريقك.",
      },
    },
    design: {
      title: { en: "Design", ar: "التصميم" },
      description: {
        en: "Our design team creates custom uniform concepts aligned with your brand identity and functional requirements.",
        ar: "يبتكر فريق التصميم لدينا مفاهيم زي موحد مخصصة تتوافق مع هوية علامتك التجارية ومتطلباتك الوظيفية.",
      },
    },
    fabricSelection: {
      title: { en: "Fabric Selection", ar: "اختيار القماش" },
      description: {
        en: "We source premium fabrics optimized for Saudi Arabia's climate — breathable, durable, and colour-fast.",
        ar: "نوفر أقمشة راقية مُحسَّنة لمناخ المملكة العربية السعودية — قابلة للتهوية ومتينة وثابتة الألوان.",
      },
    },
    manufacturing: {
      title: { en: "Manufacturing", ar: "التصنيع" },
      description: {
        en: "Precision cutting and stitching in our Riyadh facility using industrial-grade equipment for consistent quality.",
        ar: "قص وخياطة دقيقة في منشأتنا بالرياض باستخدام معدات صناعية لضمان جودة ثابتة.",
      },
    },
    qualityControl: {
      title: { en: "Quality Control", ar: "ضبط الجودة" },
      description: {
        en: "Every garment undergoes rigorous inspection — checking stitching, measurements, fabric quality, and branding accuracy.",
        ar: "يخضع كل ملبس لفحص صارم — يشمل التحقق من الخياطة والمقاسات وجودة القماش ودقة العلامة التجارية.",
      },
    },
    delivery: {
      title: { en: "Delivery", ar: "التسليم" },
      description: {
        en: "Packaged and delivered across Saudi Arabia with tracking and dedicated account manager support.",
        ar: "تعبئة وتوصيل في جميع أنحاء المملكة مع تتبع ودعم مدير حساب مخصص.",
      },
    },
  },

  // ─── Why Amal ────────────────────────────────────────────────────────────────
  valueProps: {
    saudiBasedManufacturing: {
      title: { en: "Saudi-Based Manufacturing", ar: "تصنيع محلي في المملكة" },
      description: {
        en: "Proudly based in Riyadh with local manufacturing, ensuring faster turnaround and direct oversight.",
        ar: "نتخذ الرياض مقراً لنا مع تصنيع محلي يضمن سرعة التنفيذ والإشراف المباشر.",
      },
    },
    premiumMaterials: {
      title: { en: "Premium Materials", ar: "مواد راقية" },
      description: {
        en: "We use only high-grade fabrics selected for durability, comfort, and climate suitability.",
        ar: "نستخدم أقمشة عالية الجودة مختارة للمتانة والراحة والملاءمة المناخية.",
      },
    },
    customBranding: {
      title: { en: "Custom Branding", ar: "العلامة التجارية المخصصة" },
      description: {
        en: "Full embroidery and printing services for logos, names, and corporate identity elements.",
        ar: "خدمات تطريز وطباعة كاملة للشعارات والأسماء وعناصر هوية الشركة.",
      },
    },
    bulkOrderSpecialists: {
      title: { en: "Bulk Order Specialists", ar: "متخصصون في الطلبات الكبيرة" },
      description: {
        en: "Equipped to handle orders from 50 to 50,000+ units with consistent quality across every piece.",
        ar: "مجهزون للتعامل مع الطلبات من 50 إلى أكثر من 50,000 وحدة بجودة ثابتة في كل قطعة.",
      },
    },
    fastTurnaround: {
      title: { en: "Fast Turnaround", ar: "تسليم سريع" },
      description: {
        en: "Streamlined production processes ensure timely delivery without compromising on craftsmanship.",
        ar: "عمليات إنتاج مُبسَّطة تضمن التسليم في الوقت المناسب دون المساومة على الحرفية.",
      },
    },
    dedicatedAccountManager: {
      title: { en: "Dedicated Account Manager", ar: "مدير حساب مخصص" },
      description: {
        en: "Every client receives a dedicated point of contact for seamless communication and service.",
        ar: "يحصل كل عميل على نقطة تواصل مخصصة لتواصل وخدمة سلسة.",
      },
    },
  },

  // ─── Testimonials ────────────────────────────────────────────────────────────
  testimonials: {
    t1: {
      name: { en: "Ahmed Al-Rashid", ar: "أحمد الراشد" },
      role: { en: "Procurement Director", ar: "مدير المشتريات" },
      company: { en: "Al Marai Group", ar: "مجموعة المراعي" },
      text: {
        en: "Amal Uniforms transformed our corporate image. The quality of tailoring and attention to detail in every suit exceeded our expectations. Their team handled our order of 500+ units flawlessly.",
        ar: "غيّرت أمل للزي الموحد صورتنا المؤسسية تماماً. تجاوزت جودة الخياطة والاهتمام بالتفاصيل في كل بدلة توقعاتنا. تعامل فريقهم مع طلبنا البالغ 500+ وحدة بكفاءة عالية.",
      },
    },
    t2: {
      name: { en: "Sarah Al-Otaibi", ar: "سارة العتيبي" },
      role: { en: "HR Manager", ar: "مدير الموارد البشرية" },
      company: { en: "King Fahad Medical City", ar: "مدينة الملك فهد الطبية" },
      text: {
        en: "We switched to Amal for our medical scrubs and the difference is remarkable. The fabric quality is superior, and their customisation with our hospital logo was perfect.",
        ar: "انتقلنا إلى أمل للحصول على السكراب الطبي لدينا والفرق ملحوظ. جودة القماش متميزة وتخصيصهم بشعار مستشفانا كان مثالياً.",
      },
    },
    t3: {
      name: { en: "Mohammed Al-Harbi", ar: "محمد الحربي" },
      role: { en: "Operations Manager", ar: "مدير العمليات" },
      company: { en: "Riyadh Marriott Hotel", ar: "فندق ماريوت الرياض" },
      text: {
        en: "Our hospitality staff uniforms from Amal receive compliments from guests regularly. The elegant design and comfortable fit make our team proud to wear them.",
        ar: "يتلقى زي موظفي الضيافة من أمل إطراءً من الضيوف باستمرار. التصميم الأنيق والمقاس المريح يجعل فريقنا فخوراً بارتدائه.",
      },
    },
  },

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  faq: {
    q1: {
      question: { en: "What is the minimum order quantity?", ar: "ما هي الحد الأدنى لكمية الطلب؟" },
      answer: {
        en: "Our minimum order quantity starts at 50 pieces per style. For custom-designed uniforms, we recommend ordering at least 100 units to optimise per-unit costs. Contact us for specific pricing based on your requirements.",
        ar: "يبدأ الحد الأدنى لكمية الطلب من 50 قطعة لكل تصميم. بالنسبة للزي الموحد المصمم خصيصاً، نوصي بطلب 100 وحدة على الأقل لتحسين تكاليف الوحدة. تواصل معنا للحصول على أسعار محددة بناءً على متطلباتك.",
      },
    },
    q2: {
      question: { en: "How long does production take?", ar: "كم يستغرق وقت الإنتاج؟" },
      answer: {
        en: "Standard orders are completed within 2–4 weeks from design approval. Bulk orders of 1,000+ units may require 4–6 weeks. Rush orders can be accommodated with prior arrangement.",
        ar: "تُكتمل الطلبات القياسية في غضون 2-4 أسابيع من الموافقة على التصميم. قد تستغرق الطلبات الكبيرة التي تتجاوز 1000 وحدة من 4 إلى 6 أسابيع. يمكن قبول الطلبات العاجلة بترتيب مسبق.",
      },
    },
    q3: {
      question: { en: "Can you match our exact brand colours?", ar: "هل يمكنكم مطابقة ألوان علامتنا التجارية بدقة؟" },
      answer: {
        en: "Absolutely. We use Pantone colour matching to ensure your uniforms perfectly reflect your brand identity. We provide fabric swatches for approval before production begins.",
        ar: "بالتأكيد. نستخدم نظام مطابقة ألوان بانتون لضمان أن يعكس زيك الموحد هويتك التجارية بدقة تامة. نوفر عينات قماش للموافقة عليها قبل بدء الإنتاج.",
      },
    },
    q4: {
      question: { en: "Do you offer on-site measurements?", ar: "هل تقدمون خدمات القياس في الموقع؟" },
      answer: {
        en: "Yes, we provide on-site measurement services across Riyadh and surrounding areas. For clients outside Riyadh, we provide detailed measurement guides and video consultations.",
        ar: "نعم، نقدم خدمات القياس في الموقع في الرياض والمناطق المحيطة بها. بالنسبة للعملاء خارج الرياض، نوفر أدلة قياس مفصلة واستشارات عبر الفيديو.",
      },
    },
    q5: {
      question: { en: "What fabrics do you use?", ar: "ما هي الأقمشة التي تستخدمونها؟" },
      answer: {
        en: "We source premium fabrics from trusted suppliers — including polycotton blends, 100% cotton, performance polyester, and speciality medical-grade materials. All fabrics are selected for Saudi Arabia's climate.",
        ar: "نوفر أقمشة راقية من موردين موثوقين — تشمل مخاليط البولي كوتون والقطن 100% والبوليستر عالي الأداء والمواد الطبية المتخصصة. تُختار جميع الأقمشة لملاءمتها لمناخ المملكة العربية السعودية.",
      },
    },
    q6: {
      question: { en: "Do you deliver across Saudi Arabia?", ar: "هل تقومون بالتوصيل في جميع أنحاء المملكة العربية السعودية؟" },
      answer: {
        en: "Yes, we deliver to all major cities and regions across the Kingdom of Saudi Arabia. Delivery timelines vary by location but typically range from 2–5 business days after production.",
        ar: "نعم، نوصل إلى جميع المدن والمناطق الرئيسية في المملكة العربية السعودية. تتفاوت مدد التوصيل حسب الموقع، لكنها تتراوح عادةً بين 2 إلى 5 أيام عمل بعد الإنتاج.",
      },
    },
    q7: {
      question: { en: "Can you add our company logo?", ar: "هل يمكنكم إضافة شعار شركتنا؟" },
      answer: {
        en: "We offer both machine embroidery and screen printing for company logos, employee names, and department identifiers. We can work with your vector files or help recreate your logo for optimal embroidery results.",
        ar: "نقدم التطريز الآلي والطباعة الحريرية لشعارات الشركات وأسماء الموظفين وتعريفات الأقسام. يمكننا العمل مع ملفاتك المتجهية أو المساعدة في إعادة إنشاء شعارك للحصول على أفضل نتائج التطريز.",
      },
    },
    q8: {
      question: { en: "What payment methods do you accept?", ar: "ما هي طرق الدفع التي تقبلونها؟" },
      answer: {
        en: "We accept bank transfers, company purchase orders, and major credit cards. For large orders, we offer flexible payment terms with 50% advance and 50% on delivery.",
        ar: "نقبل التحويلات المصرفية وأوامر الشراء الخاصة بالشركات والبطاقات الائتمانية الرئيسية. للطلبات الكبيرة، نقدم شروط دفع مرنة بنسبة 50% مقدماً و50% عند التسليم.",
      },
    },
  },

  // ─── Contact / Quote Form ─────────────────────────────────────────────────────
  contact: {
    contactInfo: { en: "Contact Information", ar: "معلومات التواصل" },
    phone: { en: "Phone", ar: "الهاتف" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    address: { en: "Address", ar: "العنوان" },
    responseTime: { en: "Response Time", ar: "وقت الاستجابة" },
    within24Hours: { en: "Within 24 hours", ar: "خلال 24 ساعة" },
    whyRequestQuote: { en: "Why request a quote?", ar: "لماذا تطلب عرض سعر؟" },
    competitivePricing: { en: "Competitive pricing for bulk orders", ar: "أسعار تنافسية للطلبات الكبيرة" },
    customDesignConsultation: { en: "Custom design consultation included", ar: "استشارة التصميم المخصص مدرجة" },
    freeFabricSamples: { en: "Free fabric samples available", ar: "عينات قماش مجانية متاحة" },
    noObligation: { en: "No obligation — just information", ar: "بدون التزام — مجرد معلومات" },
    showroom: { en: "Showroom", ar: "المعرض" },
    workingHours: { en: "Working Hours", ar: "ساعات العمل" },
    workingDays: { en: "Sunday – Thursday", ar: "الأحد – الخميس" },
    workingTime: { en: "8:00 AM – 6:00 PM AST", ar: "8:00 صباحاً – 6:00 مساءً" },
    replyTime: { en: "We reply within 24 hours", ar: "نرد خلال 24 ساعة" },
    getInTouch: { en: "Get in Touch", ar: "تواصل معنا" },
    fillOutForm: { en: "Fill out the form and our team will prepare a competitive quote within 24 hours.", ar: "املأ النموذج وسيقوم فريقنا بإعداد عرض سعر تنافسي خلال 24 ساعة." },
  },

  // ─── Quote Form Fields ────────────────────────────────────────────────────────
  form: {
    firstName: { en: "First Name", ar: "الاسم الأول" },
    lastName: { en: "Last Name", ar: "اسم العائلة" },
    companyName: { en: "Company / Organisation Name", ar: "اسم الشركة / المؤسسة" },
    email: { en: "Email Address", ar: "البريد الإلكتروني" },
    phone: { en: "Phone Number", ar: "رقم الهاتف" },
    industry: { en: "Industry / Sector", ar: "الصناعة / القطاع" },
    selectIndustry: { en: "Select industry", ar: "اختر القطاع" },
    productType: { en: "Product / Uniform Type", ar: "نوع المنتج / الزي الموحد" },
    selectProduct: { en: "Select product type", ar: "اختر نوع المنتج" },
    quantity: { en: "Estimated Quantity", ar: "الكمية التقديرية" },
    selectQuantity: { en: "Select quantity range", ar: "اختر نطاق الكمية" },
    timeline: { en: "Timeline", ar: "الجدول الزمني" },
    selectTimeline: { en: "Select timeline", ar: "اختر الجدول الزمني" },
    message: { en: "Additional Requirements", ar: "المتطلبات الإضافية" },
    messagePlaceholder: {
      en: "Describe your uniform requirements, branding needs, special fabrics, or any other relevant details...",
      ar: "صف متطلبات الزي الموحد لديك واحتياجات العلامة التجارية والأقمشة الخاصة وأي تفاصيل أخرى ذات صلة...",
    },
    submit: { en: "Submit Quote Request", ar: "إرسال طلب عرض السعر" },
    submitting: { en: "Sending...", ar: "جاري الإرسال..." },
    successTitle: { en: "Quote Request Received!", ar: "تم استلام طلب عرض السعر!" },
    successMessage: {
      en: "Thank you for your enquiry. Our team will review your requirements and get back to you within 24 hours.",
      ar: "شكراً على استفساركم. سيقوم فريقنا بمراجعة متطلباتكم والتواصل معكم خلال 24 ساعة.",
    },
    errorMessage: {
      en: "Something went wrong. Please try again or contact us directly.",
      ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
    },
    required: { en: "required", ar: "مطلوب" },
  },

  // ─── Gallery ──────────────────────────────────────────────────────────────────
  gallery: {
    viewAll: { en: "View Full Gallery", ar: "عرض المعرض الكامل" },
    allCategories: { en: "All", ar: "الكل" },
    filterBy: { en: "Filter by category", ar: "فلتر حسب الفئة" },
  },

  // ─── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    tagline: { en: "Crafting Saudi Arabia's Finest Professional Uniforms", ar: "نصنع أفضل الزي المهني في المملكة العربية السعودية" },
    description: {
      en: "Premium uniform manufacturer based in Riyadh, Saudi Arabia. We design, manufacture, and deliver custom professional uniforms for businesses across the Kingdom.",
      ar: "شركة تصنيع زي موحد راقية مقرها الرياض، المملكة العربية السعودية. نصمم وننتج ونوصل الزي المهني المخصص للشركات في جميع أنحاء المملكة.",
    },
    quickLinks: { en: "Quick Links", ar: "روابط سريعة" },
    ourServices: { en: "Our Services", ar: "خدماتنا" },
    contactUs: { en: "Contact Us", ar: "اتصل بنا" },
    allRightsReserved: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
    registeredName: { en: "Registered as", ar: "مسجل باسم" },
  },

  // ─── About Page ──────────────────────────────────────────────────────────────
  about: {
    heroTitle: { en: "Crafting Saudi Arabia's", ar: "نصنع في المملكة العربية السعودية" },
    heroTitleHighlight: { en: "Finest Uniforms", ar: "أرقى الزي الموحد" },
    heroDescription: {
      en: "Premium uniform manufacturer based in Riyadh, Saudi Arabia. We design, manufacture, and deliver custom professional uniforms for businesses across the Kingdom.",
      ar: "شركة تصنيع زي موحد راقية مقرها الرياض، المملكة العربية السعودية. نصمم وننتج ونوصل الزي المهني المخصص للشركات في جميع أنحاء المملكة.",
    },
    heroSubDescription: {
      en: "Founded on a commitment to quality, precision, and pride — Amal Uniforms has been dressing Saudi Arabia's finest organisations for over 15 years.",
      ar: "تأسست على التزام بالجودة والدقة والفخر — وقد ألبست أمل للزي الموحد أفضل مؤسسات المملكة العربية السعودية لأكثر من 15 عاماً.",
    },
    storyLabel: { en: "Our Story", ar: "قصتنا" },
    storyTitle: { en: "A Legacy Built on Quality & Precision", ar: "إرث عريق مبني على الجودة والدقة" },
    storySubtitle: { en: "Who We Are", ar: "من نحن" },
    storyP1: {
      en: "Amal Uniforms began as a small tailoring atelier in the heart of Riyadh, built on a simple belief: that every professional deserves a uniform they are proud to wear. Over 15 years, that belief has shaped everything we do.",
      ar: "بدأت أمل للزي الموحد كورشة خياطة صغيرة في قلب الرياض، قائمة على إيمان بسيط: أن كل مهني يستحق زياً يفخر بارتدائه. وعلى مدار 15 عاماً، شكّل هذا الإيمان كل ما نقوم به.",
    },
    storyP2: {
      en: "Today we operate a full-scale manufacturing facility on Malik Faisal Bin Abdul Aziz Street, Al Dheera, serving organisations across Saudi Arabia — from hospitals and hotels to airlines and government entities.",
      ar: "واليوم نُدير منشأة تصنيع متكاملة في شارع الملك فيصل بن عبد العزيز، الديرة، لنخدم المؤسسات في جميع أنحاء المملكة العربية السعودية — من المستشفيات والفنادق إلى شركات الطيران والجهات الحكومية.",
    },
    storyP3: {
      en: "Our team of experienced designers, pattern-makers, and tailors work with industrial-grade precision while preserving the artisanal care that sets our garments apart.",
      ar: "يعمل فريقنا من المصممين وصانعي الأنماط والخياطين بدقة صناعية عالية مع الحفاظ على العناية الحرفية التي تميز ملابسنا.",
    },
    valuesLabel: { en: "Our Values", ar: "قيمنا" },
    valuesTitle: { en: "What Drives Everything We Do", ar: "ما يحرك كل ما نقوم به" },
    valuesSubtitle: { en: "Six core principles guide every decision at Amal Uniforms — from how we design to how we deliver.", ar: "ستة مبادئ أساسية توجه كل قرار في أمل للزي الموحد — من كيفية التصميم إلى التوصيل." },
    processLabel: { en: "How We Work", ar: "كيف نعمل" },
    processTitle: { en: "From Vision to Finished Garment", ar: "من الرؤية إلى الملبس النهائي" },
    processSubtitle: { en: "A streamlined, transparent process that keeps you informed and in control — every step of the way.", ar: "عملية مُبسَّطة وشفافة تبقيك على اطلاع وتحكم — في كل خطوة." },
    statsLabel: { en: "Proven Track Record", ar: "سجل حافل بالنجاحات" },
    statsTitle: { en: "Our Impact in Numbers", ar: "أثرنا بالأرقام" },
    statsSubtitle: { en: "Over 15 years of excellence in uniform design, manufacturing, and supply across Saudi Arabia.", ar: "أكثر من 15 عاماً من التميز في تصميم وتصنيع وتوريد الزي الموحد في جميع أنحاء المملكة." },
    testimonialsLabel: { en: "Client Voices", ar: "أصوات عملائنا" },
    testimonialsTitle: { en: "Trusted Across the Kingdom", ar: "موثوق به في جميع أنحاء المملكة" },
    testimonialsSubtitle: { en: "Our uniforms speak for themselves — but we'll let our clients tell the story.", ar: "زيّنا الموحد يتحدث عن نفسه — ولكن ندع عملاءنا يروون القصة." },
    ctaLabel: { en: "Start Today", ar: "ابدأ اليوم" },
    ctaTitle: { en: "Partner with Saudi Arabia's Most Trusted Uniform Manufacturer", ar: "شَرِك أمل، الشركة الأكثر ثقة لتصنيع الزي الموحد في المملكة" },
    ctaSubtitle: { en: "Whether you need 50 uniforms or 50,000 — our team is ready to bring your vision to life. Request a quote today and receive a detailed response within 24 hours, at no obligation.", ar: "سواء كنت بحاجة إلى 50 زياً أو 50,000 زي — فريقنا مستعد لتجسيد رؤيتك. اطلب عرض سعر اليوم واحصل على إجابة مفصلة خلال 24 ساعة بدون أي التزام." },
    getQuote: { en: "Request a Quote", ar: "طلب عرض سعر" },
    callUsNow: { en: "Call Us Now", ar: "اتصل بنا الآن" },
  },

  // ─── Gallery Page ─────────────────────────────────────────────────────────────
  galleryPage: {
    heroTitle: { en: "Our", ar: "معرض" },
    heroTitleHighlight: { en: "Uniform Gallery", ar: "زيّنا الموحد" },
    heroDescription: {
      en: "Browse our collection of premium uniforms crafted for businesses across Saudi Arabia.",
      ar: "تصفح مجموعتنا من الزي الموحد الراقي المصمم للشركات في جميع أنحاء المملكة العربية السعودية.",
    },
  },

  // ─── Contact Page ─────────────────────────────────────────────────────────────
  contactPage: {
    heroTitle: { en: "Get in", ar: "تواصل" },
    heroTitleHighlight: { en: "Touch", ar: "معنا" },
    heroDescription: {
      en: "Ready to discuss your uniform requirements? Our team is here to help.",
      ar: "هل أنت مستعد لمناقشة متطلبات الزي الموحد؟ فريقنا هنا لمساعدتك.",
    },
  },

  // ─── Common ──────────────────────────────────────────────────────────────────
  common: {
    learnMore: { en: "Learn More", ar: "اعرف المزيد" },
    viewAll: { en: "View All", ar: "عرض الكل" },
    getQuote: { en: "Get a Quote", ar: "احصل على عرض سعر" },
    contactUs: { en: "Contact Us", ar: "اتصل بنا" },
    readMore: { en: "Read More", ar: "اقرأ المزيد" },
    close: { en: "Close", ar: "إغلاق" },
    open: { en: "Open", ar: "فتح" },
    next: { en: "Next", ar: "التالي" },
    previous: { en: "Previous", ar: "السابق" },
    step: { en: "Step", ar: "الخطوة" },
    viewDetails: { en: "View Details", ar: "عرض التفاصيل" },
    requestQuote: { en: "Request a Quote", ar: "طلب عرض سعر" },
    downloadCatalog: { en: "Download Catalog", ar: "تحميل الكتالوج" },
  },
} as const;

export type TranslationKey = typeof translations;
