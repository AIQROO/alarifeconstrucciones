import type { MetadataRoute } from "next";

const SITE_URL = "https://alarifeconstrucciones.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    "",
    "#nosotros",
    "#servicios",
    "#galeria",
    "#contacto",
  ];

  return sections.map((hash) => ({
    url: `${SITE_URL}/${hash}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: hash === "" ? 1.0 : 0.7,
    alternates: {
      languages: {
        "en-US": `${SITE_URL}/${hash}`,
        "es-MX": `${SITE_URL}/${hash}`,
      },
    },
  }));
}
