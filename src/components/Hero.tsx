"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollToSection = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center bg-brand-black overflow-hidden pt-20"
    >
      {/* Background Image with Cinematic Pan and Dim Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/35 z-10" />
        <div className="absolute inset-0 bg-brand-black/40 z-10" />
        <Image
          src="/portfolio/WhatsApp Image 2026-05-20 at 16.23.21.jpeg"
          alt="Alarife Premium Architectural Ceiling and Remodeling"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-pan-slow"
        />
      </div>

      {/* Fine Architectural Gridlines */}
      <div className="absolute inset-0 arch-grid-line-dark opacity-20 pointer-events-none z-10" />

      {/* Soft LED ambient glows */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-brand-taupe/15 led-glow z-10" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-brand-olive/10 led-glow z-10" />

      {/* Decorative vertical architectural line */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/5 hidden md:block z-10" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/5 hidden md:block z-10" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex flex-col items-start justify-center text-left py-20">
        
        {/* Pre-title subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[1px] bg-brand-taupe" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-light text-brand-taupe">
            {t("hero_pre")}
          </span>
        </motion.div>

        {/* Brand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="text-left mb-6 relative"
        >
          <span className="block font-display text-4xl sm:text-6xl md:text-8xl font-extralight tracking-architect text-white leading-none">
            {t("hero_title")}
          </span>
          <span className="block text-xs sm:text-sm md:text-lg tracking-[0.45em] font-light text-brand-taupe mt-3 pl-1">
            {t("hero_subtitle")}
          </span>
        </motion.h1>

        {/* Subheadline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl text-left mb-12 pl-1"
        >
          <h2 className="text-lg sm:text-xl font-light text-white/90 mb-4 tracking-wide font-sans">
            {t("hero_h2")}
          </h2>
          <p className="text-sm sm:text-base font-light text-white/60 leading-relaxed font-sans">
            {t("hero_desc")}
          </p>
        </motion.div>

        {/* Buttons / CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pl-1"
        >
          <button
            onClick={() => handleScrollToSection("#galeria")}
            className="flex items-center justify-center gap-3 text-xs uppercase tracking-architect bg-brand-olive text-white px-8 py-4.5 rounded-none border border-brand-olive hover:bg-transparent hover:text-white transition-all duration-300 group cursor-pointer"
          >
            <span>{t("hero_cta_gallery")}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
          
          <button
            onClick={() => handleScrollToSection("#contacto")}
            className="flex items-center justify-center gap-3 text-xs uppercase tracking-architect border border-white/20 text-white px-8 py-4.5 rounded-none hover:bg-white hover:text-brand-black transition-all duration-300 cursor-pointer"
          >
            <span>{t("hero_cta_quote")}</span>
          </button>
        </motion.div>
      </div>

      {/* Floating fine grid elements for luxury detail */}
      <div className="absolute bottom-16 right-16 z-20 hidden lg:block text-right select-none pl-1">
        <p className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-light">{t("hero_badge_design")}</p>
        <p className="text-[9px] text-brand-taupe/40 uppercase tracking-[0.25em] font-light mt-1">{t("hero_badge_scope")}</p>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => handleScrollToSection("#nosotros")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-white/40 hover:text-white transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light">{t("hero_explore")}</span>
        <ChevronDown className="w-4 h-4 text-brand-taupe" />
      </motion.div>
    </section>
  );
}
