import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://alarifeconstrucciones.com";
const SITE_NAME = "Alarife Construcciones";
const PHONE = "+525549114170";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Alarife Construcciones | Luxury Drywall & Hotel Remodeling in Riviera Maya",
    template: "%s | Alarife Construcciones",
  },
  description:
    "Specialists in drywall systems, architectural ceilings, and high-end commercial and hotel remodeling in Cancun, Playa del Carmen, and Tulum. Premium finishes across the Riviera Maya.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "drywall Riviera Maya",
    "hotel remodeling Cancun",
    "commercial remodeling Playa del Carmen",
    "architectural ceilings Tulum",
    "luxury construction Quintana Roo",
    "tablaroca Cancun",
    "remodelación hotelera Riviera Maya",
    "plafones arquitectónicos",
    "interior fit-out Mexico",
    "integrated LED lighting",
    "Alarife Construcciones",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Construction & Remodeling",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "es-MX": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title:
      "Alarife Construcciones | Luxury Drywall & Hotel Remodeling in Riviera Maya",
    description:
      "Premium drywall, architectural ceilings, and full commercial & hotel remodeling across Cancun, Playa del Carmen, and Tulum.",
    url: SITE_URL,
    locale: "en_US",
    alternateLocale: ["es_MX"],
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alarife Construcciones — Luxury remodeling in the Riviera Maya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Alarife Construcciones | Luxury Drywall & Hotel Remodeling in Riviera Maya",
    description:
      "Premium drywall, architectural ceilings, and full commercial & hotel remodeling across Cancun, Playa del Carmen, and Tulum.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: "Alarife Construcciones",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: PHONE,
      priceRange: "$$$",
      description:
        "Luxury drywall, architectural ceilings, integrated lighting, and full commercial and hotel remodeling across the Riviera Maya.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cancún",
        addressRegion: "Quintana Roo",
        addressCountry: "MX",
      },
      areaServed: [
        { "@type": "City", name: "Cancún" },
        { "@type": "City", name: "Playa del Carmen" },
        { "@type": "City", name: "Tulum" },
        { "@type": "AdministrativeArea", name: "Riviera Maya" },
        { "@type": "AdministrativeArea", name: "Quintana Roo" },
      ],
      knowsAbout: [
        "Drywall systems",
        "Architectural ceilings",
        "Hotel remodeling",
        "Commercial remodeling",
        "Integrated LED lighting",
        "Decorative walls",
        "Interior fit-out",
        "Architectural finishes",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE,
          contactType: "sales",
          areaServed: ["MX"],
          availableLanguage: ["English", "Spanish"],
        },
      ],
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drywall Systems" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Ceilings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decorative Walls" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hotel Remodeling" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Constructive Interior Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Integrated Lighting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Architectural Finishes" } },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: ["en-US", "es-MX"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-white text-brand-black selection:bg-brand-olive selection:text-brand-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
