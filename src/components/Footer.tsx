"use client";

import { useMemo } from "react";
import { ArrowUp, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = useMemo(() => [
    { href: "#inicio", label: t("nav_inicio") },
    { href: "#nosotros", label: t("nav_nosotros") },
    { href: "#servicios", label: t("nav_servicios") },
    { href: "#galeria", label: t("nav_galeria") },
    { href: "#contacto", label: t("nav_contacto") }
  ], [t]);

  return (
    <footer className="relative bg-brand-charcoal text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Subtle Architectural Wireframe Lines */}
      <div className="absolute inset-0 arch-grid-line-dark pointer-events-none opacity-30" />
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/5 hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Presentation Column */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <div className="relative w-72 h-36 mb-6 -ml-2 select-none pointer-events-none">
              <Image
                src="/logo-light.png"
                alt="ALARIFE CONSTRUCCIONES"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm font-light text-white/50 leading-relaxed max-w-sm mb-8">
              {t("footer_desc")}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-brand-taupe mb-6">
              {t("footer_nav_title")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-light text-white/60 hover:text-white hover:pl-1 transition-all duration-300 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-brand-taupe mb-6">
              {t("footer_contact_title")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-0.5">{t("contact_phone_label")}</span>
                  <a
                    href="tel:+525549114170"
                    className="text-xs font-light text-white/80 hover:text-white transition-colors"
                  >
                    +52 55 4911 4170
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-0.5">{t("contact_coverage_label")}</span>
                  <span className="text-xs font-light text-white/80">
                    {t("contact_coverage_val")}, Q. Roo
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-light text-white/40 tracking-wider text-center md:text-left">
            {t("footer_rights").replace("{year}", new Date().getFullYear().toString())} · Dropped by{" "}
            <a href="https://acidmkt.com/" target="_blank" rel="noopener" className="underline hover:text-white/70">Acid MKT</a>
            <span className="block md:inline md:ml-2 text-[9px] text-white/20">{t("footer_sub")}</span>
          </p>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-architect text-white/40 hover:text-white transition-colors group cursor-pointer"
          >
            <span>{t("footer_top")}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-brand-olive" />
          </button>
        </div>
      </div>
    </footer>
  );
}
