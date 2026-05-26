import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Outfit, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "../globals.css";

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

type Lang = "en" | "es";
const LANGS: Lang[] = ["en", "es"];

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

const localized = {
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    altLocale: "es_MX",
    title:
      "Alarife Construcciones | Luxury Drywall & Hotel Remodeling in Riviera Maya",
    description:
      "Specialists in drywall systems, architectural ceilings, and high-end commercial and hotel remodeling in Cancun, Playa del Carmen, and Tulum. Premium finishes across the Riviera Maya.",
    ogDescription:
      "Premium drywall, architectural ceilings, and full commercial & hotel remodeling across Cancun, Playa del Carmen, and Tulum.",
    ogImageAlt:
      "Alarife Construcciones — Luxury remodeling in the Riviera Maya",
    keywords: [
      "drywall Riviera Maya",
      "hotel remodeling Cancun",
      "commercial remodeling Playa del Carmen",
      "architectural ceilings Tulum",
      "luxury construction Quintana Roo",
      "interior fit-out Mexico",
      "integrated LED lighting",
      "Alarife Construcciones",
    ],
    orgDescription:
      "Luxury drywall, architectural ceilings, integrated lighting, and full commercial and hotel remodeling across the Riviera Maya.",
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
    services: [
      "Drywall Systems",
      "Architectural Ceilings",
      "Decorative Walls",
      "Commercial Remodeling",
      "Hotel Remodeling",
      "Constructive Interior Design",
      "Integrated Lighting",
      "Architectural Finishes",
    ],
    schemaLanguage: "en-US",
  },
  es: {
    htmlLang: "es",
    ogLocale: "es_MX",
    altLocale: "en_US",
    title:
      "Alarife Construcciones | Tablaroca y Remodelación Hotelera en la Riviera Maya",
    description:
      "Especialistas en sistemas de tablaroca, plafones arquitectónicos y remodelaciones integrales comerciales y hoteleras en Cancún, Playa del Carmen y Tulum. Acabados premium en toda la Riviera Maya.",
    ogDescription:
      "Tablaroca, plafones arquitectónicos y remodelaciones integrales comerciales y hoteleras en Cancún, Playa del Carmen y Tulum.",
    ogImageAlt:
      "Alarife Construcciones — Remodelación de lujo en la Riviera Maya",
    keywords: [
      "tablaroca Riviera Maya",
      "remodelación hotelera Cancún",
      "remodelación comercial Playa del Carmen",
      "plafones arquitectónicos Tulum",
      "construcción de lujo Quintana Roo",
      "interiorismo comercial México",
      "iluminación LED integrada",
      "Alarife Construcciones",
    ],
    orgDescription:
      "Tablaroca de lujo, plafones arquitectónicos, iluminación integrada y remodelaciones integrales comerciales y hoteleras en toda la Riviera Maya.",
    knowsAbout: [
      "Sistemas de tablaroca",
      "Plafones arquitectónicos",
      "Remodelación hotelera",
      "Remodelación comercial",
      "Iluminación LED integrada",
      "Muros decorativos",
      "Interiorismo constructivo",
      "Acabados arquitectónicos",
    ],
    services: [
      "Sistemas de Tablaroca",
      "Plafones Arquitectónicos",
      "Muros Decorativos",
      "Remodelación Comercial",
      "Remodelación Hotelera",
      "Diseño Interior Constructivo",
      "Iluminación Integrada",
      "Acabados Arquitectónicos",
    ],
    schemaLanguage: "es-MX",
  },
} as const;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B0B",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Lang = rawLang === "es" ? "es" : "en";
  const m = localized[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: m.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: m.description,
    applicationName: SITE_NAME,
    generator: "Next.js",
    keywords: [...m.keywords],
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
      canonical: `/${lang}`,
      languages: {
        "en-US": "/en",
        "es-MX": "/es",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: m.title,
      description: m.ogDescription,
      url: `${SITE_URL}/${lang}`,
      locale: m.ogLocale,
      alternateLocale: [m.altLocale],
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: m.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.ogDescription,
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
}

function buildJsonLd(lang: Lang) {
  const m = localized[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GeneralContractor",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: SITE_NAME,
        url: `${SITE_URL}/${lang}`,
        logo: `${SITE_URL}/logo.png`,
        image: `${SITE_URL}/og-image.jpg`,
        telephone: PHONE,
        priceRange: "$$$",
        description: m.orgDescription,
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
        knowsAbout: m.knowsAbout,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: PHONE,
            contactType: "sales",
            areaServed: ["MX"],
            availableLanguage: ["English", "Spanish"],
          },
        ],
        makesOffer: m.services.map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/${lang}#website`,
        url: `${SITE_URL}/${lang}`,
        name: SITE_NAME,
        inLanguage: m.schemaLanguage,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: rawLang } = await params;
  if (!LANGS.includes(rawLang as Lang)) notFound();
  const lang = rawLang as Lang;
  const m = localized[lang];

  return (
    <html
      lang={m.htmlLang}
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-white text-brand-black selection:bg-brand-olive selection:text-brand-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(lang)) }}
        />
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
