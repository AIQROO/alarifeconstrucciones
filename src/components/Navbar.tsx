"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#inicio");
  const { language, setLanguage, t } = useLanguage();

  const navLinks = useMemo(() => [
    { href: "#inicio", label: t("nav_inicio") },
    { href: "#nosotros", label: t("nav_nosotros") },
    { href: "#servicios", label: t("nav_servicios") },
    { href: "#galeria", label: t("nav_galeria") },
    { href: "#contacto", label: t("nav_contacto") }
  ], [t]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link spy
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveLink(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-brand-black/90 backdrop-blur-md border-white/5 py-4 shadow-xl"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#inicio");
            }}
            className="flex items-center group relative"
          >
            <div className={`relative transition-all duration-500 select-none ${
              isScrolled ? "w-24 h-12" : "w-28 h-14"
            }`}>
              <Image
                src="/logo.png"
                alt="ALARIFE CONSTRUCCIONES"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`text-xs uppercase tracking-[0.2em] font-light transition-colors relative py-1 duration-300 ${
                    isScrolled
                      ? isActive
                        ? "text-brand-white"
                        : "text-brand-white/60 hover:text-brand-white"
                      : isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-[1px] bg-brand-olive"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call to Action & Language Selector */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Language Selector */}
            <div className="flex items-center gap-1.5 border-r border-white/10 pr-6 select-none">
              <button
                onClick={() => setLanguage("es")}
                className={`text-[10px] tracking-widest font-semibold px-2 py-1 transition-all cursor-pointer ${
                  language === "es"
                    ? "text-brand-olive font-bold border-b border-brand-olive"
                    : isScrolled ? "text-brand-white/40 hover:text-brand-white" : "text-white/40 hover:text-white"
                }`}
              >
                ES
              </button>
              <span className={`text-[10px] ${isScrolled ? "text-brand-white/10" : "text-white/10"}`}>|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-[10px] tracking-widest font-semibold px-2 py-1 transition-all cursor-pointer ${
                  language === "en"
                    ? "text-brand-olive font-bold border-b border-brand-olive"
                    : isScrolled ? "text-brand-white/40 hover:text-brand-white" : "text-white/40 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contacto");
              }}
              className={`flex items-center gap-2 text-xs uppercase tracking-architect px-5 py-2.5 rounded-none border transition-all duration-300 ${
                isScrolled
                  ? "border-brand-olive text-brand-white bg-brand-olive hover:bg-transparent hover:text-brand-white"
                  : "border-white/20 text-white hover:bg-white hover:text-brand-black"
              }`}
            >
              <span>{t("nav_budget")}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden p-1 transition-colors duration-300 ${
              isScrolled ? "text-brand-white" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-black/95 backdrop-blur-lg flex flex-col justify-between p-8"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#inicio");
                }}
                className="relative w-24 h-12 select-none"
              >
                <Image
                  src="/logo.png"
                  alt="ALARIFE CONSTRUCCIONES"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </a>

              {/* Mobile Language Selector */}
              <div className="flex items-center gap-2 select-none ml-auto mr-6">
                <button
                  onClick={() => setLanguage("es")}
                  className={`text-[10px] tracking-widest font-semibold px-2 py-1 transition-all cursor-pointer ${
                    language === "es"
                      ? "text-brand-olive font-bold border-b border-brand-olive"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  ES
                </button>
                <span className="text-[10px] text-white/10">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-[10px] tracking-widest font-semibold px-2 py-1 transition-all cursor-pointer ${
                    language === "en"
                      ? "text-brand-olive font-bold border-b border-brand-olive"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-white hover:text-brand-olive transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6 my-auto text-left">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`font-display text-3xl font-light tracking-wide transition-colors ${
                      activeLink === link.href ? "text-brand-taupe" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Footer */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-4 text-left">
              <p className="text-xs text-white/40 tracking-wider">
                {t("contact_coverage_val")}
              </p>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#contacto");
                }}
                className="w-full flex items-center justify-between text-center text-xs uppercase tracking-architect bg-brand-olive text-white py-4 px-6 hover:bg-brand-olive/80 transition-colors"
              >
                <span>{t("nav_quote")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
