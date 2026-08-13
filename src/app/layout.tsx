import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";
import { LanguageProvider } from "@/lib/LanguageContext";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Amal Uniforms — Premium Uniform Manufacturer in Saudi Arabia",
    template: "%s | Amal Uniforms",
  },
  description:
    "Premium custom uniform manufacturer in Riyadh, Saudi Arabia. Corporate, healthcare, hospitality, industrial, and security uniforms. Request a quote today.",
  keywords: [
    "uniform manufacturer Saudi Arabia",
    "corporate uniforms Riyadh",
    "custom uniforms KSA",
    "healthcare uniforms Saudi",
    "hospitality uniforms",
    "industrial workwear Saudi Arabia",
    "security uniforms Riyadh",
    "bulk uniform orders",
    "uniform embroidery Saudi",
    "Amal Uniforms",
  ],
  authors: [{ name: BUSINESS.registeredName }],
  creator: BUSINESS.tradingName,
  publisher: BUSINESS.tradingName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.tradingName,
    title: "Amal Uniforms — Premium Uniform Manufacturer in Saudi Arabia",
    description:
      "Premium custom uniform manufacturer in Riyadh, Saudi Arabia. Request a quote for corporate, healthcare, hospitality, and industrial uniforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amal Uniforms — Premium Uniform Manufacturer in Saudi Arabia",
    description:
      "Premium custom uniform manufacturer in Riyadh, Saudi Arabia. Request a quote today.",
  },
  alternates: {
    canonical: BUSINESS.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.tradingName,
    legalName: BUSINESS.registeredName,
    description: BUSINESS.description,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneFormatted,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.area,
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  };

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfairDisplay.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* DNS prefetch for Google Fonts to reduce font load time */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Noto Sans Arabic — loaded for Arabic language support */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
