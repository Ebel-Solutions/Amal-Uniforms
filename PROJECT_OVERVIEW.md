# 🏭 Amal Uniforms — Complete Project Overview

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.2.12 (App Router) |
| **Language** | TypeScript 5 |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Email** | Resend |
| **Database / Storage** | Firebase Admin (Firestore) |
| **Spreadsheet** | Google Sheets API (`googleapis`) |
| **Validation** | Zod |
| **Fonts** | Google Fonts — Playfair Display + Inter + Noto Sans Arabic |

> **Note:** This is a **bilingual** site (English + Arabic), with full RTL support via a custom `LanguageContext`.

---

## What the App Is

**Amal Uniforms** is a B2B marketing website for a premium uniform manufacturer based in **Riyadh, Saudi Arabia**. It showcases their uniform products across various industries, offers a quote request form, and has a WhatsApp chatbot integration for lead capture.

---

## Project Directory Structure

```
amal-uniforms/
├── src/
│   ├── app/              ← Next.js App Router pages & API routes
│   ├── components/       ← All React UI components
│   ├── data/             ← Static content/data files per industry/service
│   └── lib/              ← Utilities, context, translations, server services
├── public/               ← Static assets (images, downloads, SVGs)
├── next.config.ts        ← Next.js configuration
├── postcss.config.mjs    ← Tailwind CSS PostCSS setup
├── tsconfig.json         ← TypeScript config
└── package.json          ← Dependencies & scripts
```

---

## `src/app/` — Pages & Routes

### Root Files
| File | Purpose |
|---|---|
| `layout.tsx` | Root layout — sets fonts (Playfair Display + Inter + Noto Sans Arabic), SEO metadata, JSON-LD schema, wraps app in `LanguageProvider` |
| `page.tsx` | **Home page** — assembles all homepage sections (Hero, TrustIndicators, IndustryCategories, FeaturedServices, ProductCollections, ManufacturingProcess, WhyAmal, Customisation, Gallery, Testimonials, FAQ, FinalCTA) |
| `globals.css` | Global Tailwind CSS base styles and custom CSS variables |
| `robots.ts` | Auto-generates `robots.txt` for SEO crawlers |
| `sitemap.ts` | Auto-generates `sitemap.xml` listing all pages for search engines |

### Page Routes
| Route | File | Content |
|---|---|---|
| `/` | `app/page.tsx` | Home page |
| `/about` | `app/about/` | About the company |
| `/contact` | `app/contact/` | Contact form & info |
| `/gallery` | `app/gallery/` | Photo gallery of products |
| `/embroidery` | `app/embroidery/` | Embroidery service page |
| `/printing` | `app/printing/` | Printing service page |
| `/custom-manufacturing` | `app/custom-manufacturing/` | Custom manufacturing page |
| `/industries` | `app/industries/page.tsx` | Industries overview |
| `/industries/aviation-transport` | `app/industries/aviation-transport/` | Aviation & transport uniforms |
| `/industries/construction` | `app/industries/construction/` | Construction workwear |
| `/industries/corporate` | `app/industries/corporate/` | Corporate uniforms |
| `/industries/education` | `app/industries/education/` | School/education uniforms |
| `/industries/facility-management` | `app/industries/facility-management/` | Facility management uniforms |
| `/industries/healthcare` | `app/industries/healthcare/` | Medical/healthcare uniforms |
| `/industries/hospitality` | `app/industries/hospitality/` | Hotel/hospitality uniforms |
| `/industries/industrial-safety` | `app/industries/industrial-safety/` | Industrial safety workwear |
| `/industries/retail-commercial` | `app/industries/retail-commercial/` | Retail uniforms |
| `/industries/security` | `app/industries/security/` | Security uniforms |
| `/industries/sports-events` | `app/industries/sports-events/` | Sports & events uniforms |

### API Routes (`src/app/api/`)
| Route | File | Purpose |
|---|---|---|
| `POST /api/quotes` | `app/api/quotes/route.ts` | Handles quote form submissions — saves to Firebase + Google Sheets + sends email |
| `/api/whatsapp/webhook` | `app/api/whatsapp/webhook/` | WhatsApp Cloud API webhook for chatbot conversations |

---

## `src/components/` — React Components

### `components/layout/` — Site Shell
| File | Purpose |
|---|---|
| `Header.tsx` | Sticky top navigation bar with logo, nav links, language switcher, CTA button |
| `MobileNav.tsx` | Mobile hamburger menu / slide-out navigation drawer |
| `Footer.tsx` | Site footer with links, contact info, social media |

### `components/sections/` — Homepage Sections
| File | Homepage Section |
|---|---|
| `Hero.tsx` | Main hero banner with slideshow/CTA |
| `TrustIndicators.tsx` | Stats/badges showing company credibility |
| `IndustryCategories.tsx` | Grid of industry sectors served |
| `FeaturedServices.tsx` | Highlights key services (embroidery, printing, etc.) |
| `ProductCollections.tsx` | Showcases product types/collections |
| `ManufacturingProcess.tsx` | Step-by-step production process visual |
| `WhyAmal.tsx` | USP/value proposition section |
| `Customisation.tsx` | Explains customization options |
| `Gallery.tsx` | Homepage gallery preview |
| `Testimonials.tsx` | Client reviews/testimonials carousel |
| `FAQ.tsx` | Frequently asked questions accordion |
| `FinalCTA.tsx` | Bottom call-to-action (request a quote) |
| `AboutHero.tsx` | Hero section for About page |
| `AboutStory.tsx` | Company history/story section |
| `AboutStats.tsx` | Key company statistics |
| `AboutValues.tsx` | Core values/mission |
| `AboutProcess.tsx` | Manufacturing process on About page |
| `AboutTestimonials.tsx` | Testimonials on About page |
| `AboutCTA.tsx` | CTA on About page |
| `ContactHero.tsx` | Hero for Contact page |
| `ContactMain.tsx` | Main contact section (map, phone, email, form) |
| `GalleryHero.tsx` | Hero for Gallery page |
| `GalleryGrid.tsx` | Full gallery grid with filtering |
| `ServiceCtaBanner.tsx` | Reusable CTA banner for service pages |

### `components/pages/` — Full Page Components
| File | Purpose |
|---|---|
| `IndustriesPageContent.tsx` | Full content for the /industries listing page |
| `IndustryPageContent.tsx` | Generic template for individual industry detail pages |
| `EmbroideryPageContent.tsx` | Full embroidery service page content |
| `PrintingPageContent.tsx` | Full printing service page content |
| `CustomManufacturingPageContent.tsx` | Full custom manufacturing page content |

### `components/forms/` — Forms
| File | Purpose |
|---|---|
| `QuoteForm.tsx` | Multi-step quote request form with validation (Zod), submits to `/api/quotes` |

### `components/ui/` — Reusable UI Primitives
| File | Purpose |
|---|---|
| `AnimatedSection.tsx` | Framer Motion wrapper for scroll-triggered section animations |
| `SectionHeading.tsx` | Reusable styled section title/subtitle component |

---

## `src/data/` — Static Content Data

All data files are TypeScript files exporting typed constants — content for each industry/service page.

| File | Content |
|---|---|
| `industry-categories.ts` | List of all industry categories with icons, names, links |
| `banner-slides.ts` | Hero carousel slide content |
| `gallery.ts` | Gallery image data with categories |
| `embroidery.ts` | All content for the embroidery page |
| `printing.ts` | All content for the printing page |
| `custom-manufacturing.ts` | Custom manufacturing page content |
| `healthcare.ts` | Healthcare industry page content |
| `hospitality.ts` | Hospitality industry page content |
| `corporate.ts` | Corporate industry page content |
| `education.ts` | Education sector page content |
| `security.ts` | Security industry page content |
| `construction.ts` | Construction industry page content |
| `industrial-safety.ts` | Industrial safety workwear content |
| `aviation-transport.ts` | Aviation & transport page content |
| `retail-commercial.ts` | Retail/commercial page content |
| `facility-management.ts` | Facility management page content |
| `sports-events.ts` | Sports & events page content |

---

## `src/lib/` — Utilities & Services

| File | Purpose |
|---|---|
| `constants.ts` | Central config — business info (name, phone, address, email, URLs), nav links, etc. |
| `translations.ts` | All UI text in English + Arabic |
| `LanguageContext.tsx` | React Context for language switching (EN ↔ AR) with RTL support |
| `validations.ts` | Zod schemas for form validation |

### `src/lib/server/` — Server-only Services
| File | Purpose |
|---|---|
| `firebase.ts` | Firebase Admin SDK initialization |
| `emailService.ts` | Sends emails via Resend when a quote is submitted |
| `googleSheetsService.ts` | Appends quote form data to a Google Sheet |
| `leadService.ts` | Saves lead/quote data to Firebase Firestore |
| `whatsappService.ts` | Sends WhatsApp messages via Meta Cloud API |
| `chatbot/config.ts` | Chatbot conversation flow definitions |
| `chatbot/flowHandler.ts` | Processes incoming WhatsApp messages and drives chatbot state machine |
| `chatbot/sessionService.ts` | Manages WhatsApp chat sessions in Firebase |

---

## `public/` — Static Assets

| Folder | Contents |
|---|---|
| `public/images/` | Product/industry photos used across the site |
| `public/downloads/` | Downloadable files (e.g. brochures, catalogs) |

---

## Key Architecture Patterns

- **App Router**: Uses Next.js App Router — each page folder has a `page.tsx`
- **Data / UI Separation**: All content lives in `src/data/*.ts` files; components just render it
- **Bilingual**: `LanguageContext` + `translations.ts` handle full EN/AR switching with RTL layout
- **Server Services**: All 3rd-party integrations (Firebase, Google Sheets, Email, WhatsApp) are isolated in `src/lib/server/` and only run in API routes (never in client components)
- **Lead Pipeline**: When a quote is submitted → Firebase (lead saved) + Google Sheets (CRM log) + Email (notification) all fire simultaneously
- **WhatsApp Chatbot**: A full state-machine chatbot receives messages from Meta's Cloud API webhook, guides users through a sales flow, and creates leads in Firebase
