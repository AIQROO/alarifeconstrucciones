import { NextRequest, NextResponse } from "next/server";

const LANGUAGES = ["en", "es"] as const;
type Lang = (typeof LANGUAGES)[number];
const DEFAULT_LANG: Lang = "en";

function negotiateLanguage(req: NextRequest): Lang {
  const accept = req.headers.get("accept-language") || "";
  const ranked = accept
    .split(",")
    .map((part) => {
      const [tagRaw, qRaw] = part.trim().split(";");
      const tag = tagRaw.toLowerCase();
      const q = qRaw && qRaw.startsWith("q=") ? parseFloat(qRaw.slice(2)) : 1;
      return { tag, q: Number.isNaN(q) ? 0 : q };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag.startsWith("es")) return "es";
    if (tag.startsWith("en")) return "en";
  }
  return DEFAULT_LANG;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    LANGUAGES.some(
      (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
    )
  ) {
    return NextResponse.next();
  }

  const lang = negotiateLanguage(req);
  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${lang}` : `/${lang}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|site\\.webmanifest|og-image\\.jpg|apple-touch-icon\\.png|icon-\\d+\\.png|logo\\.png|portfolio).*)",
  ],
};
