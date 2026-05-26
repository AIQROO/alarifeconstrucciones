import type { MetadataRoute } from "next";

const SITE_URL = "https://alarifeconstrucciones.com";
const LANGS = ["en", "es"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = {
    "en-US": `${SITE_URL}/en`,
    "es-MX": `${SITE_URL}/es`,
    "x-default": `${SITE_URL}/en`,
  };

  return LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1.0,
    alternates: { languages },
  }));
}
