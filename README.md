# Alarife Construcciones

Luxury drywall, architectural ceilings, integrated lighting, and full commercial & hotel remodeling across the Riviera Maya (Cancún, Playa del Carmen, Tulum).

Production site: **https://alarifeconstrucciones.com**

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **lucide-react** (icons)
- TypeScript + ESLint
- Bilingual UI (English primary, Spanish secondary) with client-side language toggle + persisted preference

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deployment

The project deploys to Vercel out of the box.

1. Connect this repository to Vercel.
2. Vercel auto-detects Next.js — no build settings needed.
3. Assign the production domain `alarifeconstrucciones.com` (and `www.alarifeconstrucciones.com` as redirect) in **Vercel → Project → Settings → Domains**.

## SEO / GEO surface

- Open Graph + Twitter cards (`/og-image.jpg`)
- `hreflang` alternates for `en-US`, `es-MX`, `x-default`
- `LocalBusiness` / `GeneralContractor` JSON-LD inlined in SSR for crawlers and generative engines
- `app/robots.ts` and `app/sitemap.ts`
- AVIF + WebP image pipeline via `next/image`
- Long-cache headers for static assets

## Project structure

```
src/
  app/
    layout.tsx       Metadata, JSON-LD, fonts, root HTML
    page.tsx         Single landing composition
    robots.ts        Robots policy
    sitemap.ts       Multi-language sitemap
    globals.css      Tailwind v4 theme + brand tokens
  components/        Navbar, Hero, About, Services, WhyAlarife, Gallery, Contact, Footer
  context/
    LanguageContext.tsx  EN/ES bilingual provider
  data/
    portfolio-images.ts  Image manifest
public/              Static assets (logo, og-image, favicons, manifest, /portfolio)
```

## Contact

WhatsApp: +52 55 4911 4170
