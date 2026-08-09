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
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState<Partial<QuoteFormData>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
        const available = value ? PRODUCTS_BY_INDUSTRY[value as keyof typeof PRODUCTS_BY_INDUSTRY] || [] : [];
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

    setStatus("submitting");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} />
        </div>
        <h3 className="font-display text-2xl font-semibold text-navy-950 mb-3">
          Quote Request Submitted
        </h3>
        <p className="text-body text-charcoal-light/70 max-w-md mx-auto mb-6">
          Thank you for your enquiry. Our team will review your requirements and
          get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn btn-outline-dark"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          <AlertCircle size={18} />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      {/* Row 1: Company & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companyName" className="input-label">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName || ""}
            onChange={handleChange}
            className={`input-field ${errors.companyName ? "!border-red-400" : ""}`}
            placeholder="e.g. Acme Corporation"
            aria-required="true"
            aria-invalid={!!errors.companyName}
          />
          {errors.companyName && (
            <p className="input-error" role="alert">{errors.companyName}</p>
          )}
        </div>
        <div>
          <label htmlFor="contactPerson" className="input-label">
            Contact Person <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson || ""}
            onChange={handleChange}
            className={`input-field ${errors.contactPerson ? "!border-red-400" : ""}`}
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={!!errors.contactPerson}
          />
          {errors.contactPerson && (
            <p className="input-error" role="alert">{errors.contactPerson}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="input-label">
            Phone Number <span className="text-red-500">*</span>
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
            <p className="input-error" role="alert">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="input-label">
            Email Address <span className="text-red-500">*</span>
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
            <p className="input-error" role="alert">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 3: Industry & Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="industry" className="input-label">
            Industry / Service <span className="text-red-500">*</span>
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
          >
            <option value="">Select industry or service</option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="input-error" role="alert">{errors.industry}</p>
          )}
        </div>
        <div>
          <label htmlFor="products" className="input-label">
            Products Interested In <span className="text-red-500">*</span>
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
          >
            <option value="">
              {formData.industry
                ? `Select ${formData.industry} category`
                : "Select product category"}
            </option>
            {availableProducts.map((opt, idx) => (
              <option key={`${opt}-${idx}`} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.products && (
            <p className="input-error" role="alert">{errors.products}</p>
          )}
        </div>
      </div>

      {/* Row 4: Quantity & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quantity" className="input-label">
            Estimated Quantity <span className="text-red-500">*</span>
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
          >
            <option value="">Select quantity range</option>
            {QUANTITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.quantity && (
            <p className="input-error" role="alert">{errors.quantity}</p>
          )}
        </div>
        <div>
          <label htmlFor="timeline" className="input-label">
            Expected Timeline <span className="text-red-500">*</span>
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
          >
            <option value="">Select timeline</option>
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.timeline && (
            <p className="input-error" role="alert">{errors.timeline}</p>
          )}
        </div>
      </div>

      {/* Customisation */}
      <div>
        <label htmlFor="customisation" className="input-label">
          Customisation Requirements
        </label>
        <textarea
          id="customisation"
          name="customisation"
          value={formData.customisation || ""}
          onChange={handleChange}
          rows={3}
          className="input-field resize-none"
          placeholder="E.g., logo embroidery, specific colours, fabric preferences..."
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="input-label">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes || ""}
          onChange={handleChange}
          rows={3}
          className="input-field resize-none"
          placeholder="Any other requirements or questions..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full md:w-auto !py-3.5 !px-10 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <div className="w-4 h-4 border-2 border-navy-950/20 border-t-navy-950 rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Quote Request
          </>
        )}
      </button>
    </form>
  );
}
