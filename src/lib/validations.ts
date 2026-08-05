import { z } from "zod";

export const quoteFormSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  contactPerson: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(100, "Contact name must be less than 100 characters"),
  phone: z
    .string()
    .min(9, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  industry: z.string().min(1, "Please select an industry"),
  products: z.string().min(1, "Please select a product category"),
  quantity: z.string().min(1, "Please select an estimated quantity"),
  customisation: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
