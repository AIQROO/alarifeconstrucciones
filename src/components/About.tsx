"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hammer, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="nosotros"
      className="relative w-full py-24 md:py-32 bg-brand-white overflow-hidden"
    >
      {/* Subtle background mesh or details */}
      <div className="absolute inset-0 arch-grid-line opacity-30 pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-brand-black/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-brand-black/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Asymmetrical Image Layout (Col span 5) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Soft decorative shadow background */}
            <div className="absolute -inset-4 bg-brand-taupe/20 blur-xl opacity-30 rounded-none z-0 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[4/5] bg-brand-concrete overflow-hidden z-10 border border-brand-black/5"
            >
              <Image
                src="/portfolio/about_buffet_mosaic.jpg"
                alt="Hotel Remodeling Riviera Maya by Alarife"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Small floating architectural card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:-right-6 bg-brand-black text-white p-6 shadow-2xl hidden sm:block z-20 max-w-[200px]"
            >
              <p className="font-display text-4xl font-light text-brand-taupe mb-1">{t("about_card_pct")}</p>
              <p className="text-[10px] uppercase tracking-wider font-light text-white/60 leading-normal">
                {t("about_card_desc")}
              </p>
            </motion.div>
          </div>

          {/* About Editorial Text (Col span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left lg:pl-12">
            
            {/* Pre title */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-olive" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-olive">
                {t("about_pre")}
              </span>
            </div>

            {/* Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-black leading-tight mb-8"
            >
              {t("about_h3")}
            </motion.h3>

            {/* Body Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6 text-sm sm:text-base font-light text-brand-black/70 leading-relaxed mb-10"
            >
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
            </motion.div>

            {/* Structured Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4 border-t border-brand-black/10">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-olive/20 flex items-center justify-center text-brand-olive shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-black mb-1">
                    {t("about_val1_title")}
                  </h4>
                  <p className="text-xs text-brand-black/60 font-light leading-relaxed">
                    {t("about_val1_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-brand-olive/20 flex items-center justify-center text-brand-olive shrink-0">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-black mb-1">
                    {t("about_val2_title")}
                  </h4>
                  <p className="text-xs text-brand-black/60 font-light leading-relaxed">
                    {t("about_val2_desc")}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
