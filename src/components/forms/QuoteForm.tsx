"use client";

import { useState } from "react";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import {
  INDUSTRY_OPTIONS,
  PRODUCTS_BY_INDUSTRY,
  PRODUCT_OPTIONS,
  TIMELINE_OPTIONS,
  QUANTITY_OPTIONS,
} from "@/lib/constants";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function QuoteForm() {
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedQuoteId, setSubmittedQuoteId] = useState<string>("");
  const { t, isRTL } = useLanguage();
  const fontStyle = isRTL ? { fontFamily: "'Noto Sans Arabic', 'Segoe UI', sans-serif", textAlign: 'right' as const } : {};

  const availableProducts = formData.industry
    ? PRODUCTS_BY_INDUSTRY[formData.industry as keyof typeof PRODUCTS_BY_INDUSTRY] || []
    : PRODUCT_OPTIONS;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "industry") {
        const available = value
          ? PRODUCTS_BY_INDUSTRY[value as keyof typeof PRODUCTS_BY_INDUSTRY] || []
          : [];
        if (prev.products && !available.includes(prev.products)) {
          next.products = "";
        }
      }
      return next;
    });
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // ── Client-side validation ──────────────────────────────────────────────
    const result = quoteFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // ── Submission lock ────────────────────────────────────────────────────
    if (status === "submitting") return;
    setStatus("submitting");

    // ── Send to API ────────────────────────────────────────────────────────
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        // Handle server-side field validation errors (422)
        if (json.errors) {
          setErrors(json.errors);
        }
        setStatus("error");
        return;
      }

      // ── Success ────────────────────────────────────────────────────────
      setSubmittedQuoteId(json.quoteId ?? "");
      setStatus("success");
      setFormData({});
    } catch {
      setStatus("error");
    }
  };

  // ── Success Screen ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-navy-950 mb-3" style={fontStyle}>
          {t("form.successTitle")}
        </h3>
        <p className="text-body text-charcoal-light/70 max-w-md mx-auto mb-4" style={fontStyle}>
          {t("form.successMessage")}
        </p>
        {submittedQuoteId && (
          <div className="inline-block bg-warm-100 border border-warm-300 rounded-lg px-6 py-3 mb-6">
            <p className="text-sm text-charcoal-light/60 mb-1" style={fontStyle}>{isRTL ? "رقم المرجع" : "Reference ID"}</p>
            <p className="font-mono font-semibold text-navy-950 text-lg tracking-wider">
              {submittedQuoteId}
            </p>
          </div>
        )}
        <p className="text-sm text-charcoal-light/50 mb-6" style={fontStyle}>
          {isRTL ? "يرجى حفظ رقم المرجع للاستفسارات المتابعة." : "Please save your reference ID for any follow-up queries."}
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setSubmittedQuoteId("");
          }}
          className="btn btn-outline-dark"
          style={fontStyle}
        >
          {isRTL ? "تقديم طلب آخر" : "Submit Another Request"}
        </button>
      </div>
    );
  }

  const OPTION_TRANSLATIONS: Record<string, string> = {
    Corporate: "الشركات",
    Healthcare: "الرعاية الصحية",
    Hospitality: "الضيافة",
    "Industrial & Safety": "الصناعة والسلامة",
    Security: "الأمن",
    Education: "التعليم",
    "Aviation & Transport": "الطيران والنقل",
    "Retail & Commercial": "التجزئة والتجارة",
    "Facility Management": "إدارة المرافق",
    "Sports & Events": "الرياضة والفعاليات",
    Construction: "البناء والتشييد",
    "Printing Services": "خدمات الطباعة",
    "Embroidery Services": "خدمات التطريز",
    "Custom Manufacturing": "التصنيع المخصص",
    Other: "أخرى",

    "50–100 units": "50–100 قطعة",
    "100–500 units": "100–500 قطعة",
    "500–1,000 units": "500–1,000 قطعة",
    "1,000–5,000 units": "1,000–5,000 قطعة",
    "5,000+ units": "أكثر من 5,000 قطعة",

    "Urgent (Within 2 weeks)": "عاجل (خلال أسبوعين)",
    "Standard (2–4 weeks)": "قياسي (2–4 أسابيع)",
    "Flexible (4–6 weeks)": "مرن (4–6 أسابيع)",
    "Planning ahead (6+ weeks)": "تخطيط مستقبلي (أكثر من 6 أسابيع)",

    // Corporate Products
    "Office Staff Uniforms": "زي موظفي المكاتب",
    "Executive Wear": "ملابس كبار الشخصيات",
    "Reception Uniforms": "زي موظفي الاستقبال",
    "Customer Service Uniforms": "زي خدمة العملاء",
    "Administrative Staff Uniforms": "زي الموظفين الإداريين",
    "Corporate Shirts & Suits": "قمصان وبدلات الشركات",

    // Healthcare Products
    "Medical Scrubs": "السكراب الطبي",
    "Doctor Lab Coats": "معاطف الأطباء",
    "Nursing Uniforms": "زي التمريض",
    "Surgical Gowns & Attire": "ملابس العمليات والجراحة",
    "Reception & Admin Wear": "زي الاستقبال والإدارة الطبية",
    "Clinic Staff Outfits": "ملابس كادر العيادات",

    // Hospitality Products
    "Chef Coats & Aprons": "جاكيتات ومآزر الطهاة",
    "Waitstaff Uniforms": "زي النوادل والخدمة",
    "Front Desk & Concierge": "زي الاستقبال والكونسيرج",
    "Housekeeping Attire": "ملابس التدبير المنزلي",
    "Bar & Lounge Uniforms": "زي الستاف والصالة",
    "Banqueting & Event Wear": "ملابس الحفلات والفعاليات",

    // Industrial Products
    "Heavy-Duty Coveralls": "أفرولات الخدمة الشاقة",
    "High-Visibility Vests": "سترات شديدة الوضوح",
    "Flame-Resistant (FR) Wear": "ملابس مقاومة للحريق",
    "Work Wear Trousers & Shirts": "بنطال وقمصان العمل",
    "Safety Footwear & Gear": "أحذية ومعدات السلامة",
    "Factory & Workshop Apparel": "ملابس المصانع والورش",

    // Security Products
    "Security Guard Uniforms": "زي حراس الأمن",
    "Patrol Uniforms": "زي الدوريات الأمنية",
    "Tactical Uniforms": "الزي التكتيكي",
    "Security Shirts & Pants": "قمصان وبنطال الأمن",
    "Security Jackets": "سترات الأمن",
    "Security Caps & Accessories": "قبعات وإكسسوارات الأمن",

    // Education Products
    "Primary School Uniforms": "زي المرحلة الابتدائية",
    "High School & Blazer Kits": "زي الثانوي والبلازر",
    "PE & Sports Wear": "الملابس الرياضية المدرسية",
    "University & Graduation Attire": "زي الجامعات والتخرج",
    "Staff & Teacher Apparel": "ملابس المعلمين والكادر",
    "Kindergarten Uniforms": "زي الروضة والأطفال",

    // Aviation Products
    "Pilot & Flight Crew Uniforms": "زي الطيارين وطاقم الطيران",
    "Cabin Crew Wear": "ملابس المضيفين والضيافة",
    "Airport Ground Handling Staff": "زي موظفي الخدمات الأرضية",
    "Driver & Logistics Uniforms": "زي السائقين واللوجستيات",
    "Maintenance & Hangar Tech Wear": "ملابس فنيي الصيانة والهنجر",
    "Customer Service Desk Staff": "زي موظفي كاونتر الخدمة",

    // Retail Products
    "Retail Staff Uniforms": "زي موظفي التجزئة",
    "Shopping Mall Uniforms": "زي موظفي المراكز التجارية",
    "Sales Executive Uniforms": "زي تنفيذي المبيعات",
    "Cashier Uniforms": "زي أمناء الصندوق (الكاشير)",
    "Store Staff Uniforms": "زي موظفي المتاجر",
    "Supermarket Apparel": "ملابس موظفي السوبرماركت",

    // Facility Management Products
    "Cleaning & Janitorial Wear": "ملابس النظافة والصيانة",
    "Maintenance & Tech Coveralls": "أفرولات فنيي الصيانة",
    "Property Management Staff": "زي إدارة العقارات",
    "Landscaping & Outdoor Staff": "زي عمال الحدائق والمساحات الخارجية",
    "Waste Management Apparel": "ملابس إدارة النفايات",
    "Front Desk Staff": "زي موظفي الاستقبال",

    // Sports & Events Products
    "Sports Jerseys": "قمصان رياضيّة",
    "Team Uniforms": "زي الفرق الرياضية",
    "Event Staff Uniforms": "زي منظمي الفعاليات",
    "Promotional Apparel": "ملابس ترويجية",
    "Tournament Kits": "أطقم البطولات والمسابقات",
    "Referee & Official Attire": "زي الحكام والمسؤولين",

    // Construction Products
    "Construction Coveralls": "أفرولات البناء والتشييد",
    "High-Vis Safety Jackets & Vests": "جاكيتات وسترات سلامة عالية الوضوح",
    "Site Engineer & Supervisor Attire": "زي مهندسي ومشرّفي الموقع",
    "Heavy Work Trousers": "بناطيل العمل الثقيلة",
    "Protective Work Wear": "ملابس العمل الواقية",
    "Roadworks & Utility Uniforms": "زي أعمال الطرق والمرافق",

    // Printing Services Products
    "Screen Printing": "الطباعة الحريرية",
    "Digital Printing": "الطباعة الرقمية",
    "Heat Transfer Printing": "طباعة النقل الحراري",
    "Sublimation Printing": "طباعة التسامي",
    "UV Printing": "طباعة UV الحديثة",
    "Reflective & Safety Printing": "طباعة السلامة العاكسة",

    // Embroidery Services Products
    "Logo Embroidery": "تطريز الشعار",
    "Name & Badge Embroidery": "تطريز الأسماء والشارات",
    "Patch & Emblem Embroidery": "تطريز الرقع والأوسمة",
    "3D / Puff Embroidery": "التطريز ثلاثي الأبعاد (3D Puff)",
    "Flat Embroidery": "التطريز المسطح",
    "Metallic Thread Embroidery": "التطريز بالخيوط المعدنية",

    // Custom Manufacturing Products
    "Custom Fabric Development": "تطوير الأقمشة المخصصة",
    "Cut & Sew Manufacturing": "تصنيع الخياطة والقص المخصص",
    "Bespoke Design & Prototyping": "التصميم وتطوير العينات الأولية",
    "Bulk Uniform Production": "إنتاج الزي الموحد بالجملة",
    "Custom Sizing & Tailoring": "الخياطة والقياسات المخصصة",
    "Private Label Manufacturing": "التصنيع بالعلامة التجارية الخاصة",

    // Other Products
    "General Uniform Enquiry": "استفسار عام عن الزي الموحد",
    "Multiple Service Package": "باقة خدمات متعددة",
    "Custom Product Request": "طلب منتج مخصص",
  };

  const translateOpt = (opt: string) => {
    if (!isRTL) return opt;
    if (OPTION_TRANSLATIONS[opt]) return OPTION_TRANSLATIONS[opt];
    const subnavTr = t(`subnav.${opt}`);
    if (subnavTr && subnavTr !== `subnav.${opt}`) return subnavTr;
    return opt;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700" style={fontStyle}>
          <AlertCircle size={18} className="flex-shrink-0" />
          {t("form.errorMessage")}
        </div>
      )}

      {/* Row 1: Company & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companyName" className="input-label" style={fontStyle}>
            {t("form.companyName")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName || ""}
            onChange={handleChange}
            className={`input-field ${errors.companyName ? "!border-red-400" : ""}`}
            placeholder={isRTL ? "مثال: شركة النور" : "e.g. Acme Corporation"}
            aria-required="true"
            aria-invalid={!!errors.companyName}
            style={fontStyle}
          />
          {errors.companyName && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.companyName}</p>
          )}
        </div>
        <div>
          <label htmlFor="contactPerson" className="input-label" style={fontStyle}>
            {isRTL ? "الشخص المسؤول" : "Contact Person"} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson || ""}
            onChange={handleChange}
            className={`input-field ${errors.contactPerson ? "!border-red-400" : ""}`}
            placeholder={isRTL ? "اسمك الكامل" : "Your full name"}
            aria-required="true"
            aria-invalid={!!errors.contactPerson}
            style={fontStyle}
          />
          {errors.contactPerson && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.contactPerson}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="input-label" style={fontStyle}>
            {t("form.phone")} <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            className={`input-field ${errors.phone ? "!border-red-400" : ""}`}
            placeholder="+966 5X XXX XXXX"
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="input-label" style={fontStyle}>
            {t("form.email")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className={`input-field ${errors.email ? "!border-red-400" : ""}`}
            placeholder="name@company.com"
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 3: Industry & Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="industry" className="input-label" style={fontStyle}>
            {isRTL ? "القطاع / الخدمة" : "Industry / Service"} <span className="text-red-500">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry || ""}
            onChange={handleChange}
            className={`input-field ${errors.industry ? "!border-red-400" : ""} ${
              !formData.industry ? "text-warm-400" : ""
            }`}
            aria-required="true"
            aria-invalid={!!errors.industry}
            style={fontStyle}
          >
            <option value="">{t("form.selectIndustry")}</option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {translateOpt(opt)}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.industry}</p>
          )}
        </div>
        <div>
          <label htmlFor="products" className="input-label" style={fontStyle}>
            {isRTL ? "المنتجات المطلوبة" : "Products Interested In"} <span className="text-red-500">*</span>
          </label>
          <select
            id="products"
            name="products"
            value={formData.products || ""}
            onChange={handleChange}
            className={`input-field ${errors.products ? "!border-red-400" : ""} ${
              !formData.products ? "text-warm-400" : ""
            }`}
            aria-required="true"
            aria-invalid={!!errors.products}
            style={fontStyle}
          >
            <option value="">
              {formData.industry
                ? `${isRTL ? "اختر فئة" : "Select"} ${translateOpt(formData.industry)} ${isRTL ? "" : "category"}`
                : t("form.selectProduct")}
            </option>
            {availableProducts.map((opt, idx) => (
              <option key={`${opt}-${idx}`} value={opt}>
                {translateOpt(opt)}
              </option>
            ))}
          </select>
          {errors.products && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.products}</p>
          )}
        </div>
      </div>

      {/* Row 4: Quantity & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quantity" className="input-label" style={fontStyle}>
            {t("form.quantity")} <span className="text-red-500">*</span>
          </label>
          <select
            id="quantity"
            name="quantity"
            value={formData.quantity || ""}
            onChange={handleChange}
            className={`input-field ${errors.quantity ? "!border-red-400" : ""} ${
              !formData.quantity ? "text-warm-400" : ""
            }`}
            aria-required="true"
            aria-invalid={!!errors.quantity}
            style={fontStyle}
          >
            <option value="">{t("form.selectQuantity")}</option>
            {QUANTITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {translateOpt(opt)}
              </option>
            ))}
          </select>
          {errors.quantity && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.quantity}</p>
          )}
        </div>
        <div>
          <label htmlFor="timeline" className="input-label" style={fontStyle}>
            {isRTL ? "الجدول الزمني المتوقع" : "Expected Timeline"} <span className="text-red-500">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline || ""}
            onChange={handleChange}
            className={`input-field ${errors.timeline ? "!border-red-400" : ""} ${
              !formData.timeline ? "text-warm-400" : ""
            }`}
            aria-required="true"
            aria-invalid={!!errors.timeline}
            style={fontStyle}
          >
            <option value="">{t("form.selectTimeline")}</option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {translateOpt(opt)}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p className="input-error" role="alert" style={fontStyle}>{errors.timeline}</p>
          )}
        </div>
      </div>

      {/* Customisation */}
      <div>
        <label htmlFor="customisation" className="input-label" style={fontStyle}>
          {isRTL ? "متطلبات التخصيص" : "Customisation Requirements"}
        </label>
        <textarea
          id="customisation"
          name="customisation"
          value={formData.customisation || ""}
          onChange={handleChange}
          rows={3}
          className="input-field resize-none"
          placeholder={isRTL ? "مثال: تطريز الشعار، ألوان محددة، تفضيلات القماش..." : "E.g., logo embroidery, specific colours, fabric preferences..."}
          style={fontStyle}
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="input-label" style={fontStyle}>
          {isRTL ? "ملاحظات إضافية" : "Additional Notes"}
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes || ""}
          onChange={handleChange}
          rows={3}
          className="input-field resize-none"
          placeholder={isRTL ? "أي متطلبات أو أسئلة أخرى..." : "Any other requirements or questions..."}
          style={fontStyle}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full md:w-auto !py-3.5 !px-10 disabled:opacity-60 disabled:cursor-not-allowed"
        style={fontStyle}
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {t("form.submitting")}
          </>
        ) : (
          <>
            <Send size={18} />
            {t("form.submit")}
          </>
        )}
      </button>
    </form>
  );
}
