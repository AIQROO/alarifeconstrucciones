"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Compass, ShieldCheck, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyAlarife() {
  const { t } = useLanguage();

  const valuePoints = useMemo(() => [
    {
      title: t("w_hospitality_title"),
      icon: Compass,
      description: t("w_hospitality_desc")
    },
    {
      title: t("w_precision_title"),
      icon: Sparkles,
      description: t("w_precision_desc")
    },
    {
      title: t("w_rigor_title"),
      icon: Layers,
      description: t("w_rigor_desc")
    },
    {
      title: t("w_efficiency_title"),
      icon: Calendar,
      description: t("w_efficiency_desc")
    },
    {
      title: t("w_guarantee_title"),
      icon: ShieldCheck,
      description: t("w_guarantee_desc")
    }
  ], [t]);

  return (
    <section
      id="nosotros"
      className="relative w-full py-24 md:py-32 bg-[#FDFDFB] overflow-hidden"
    >
      {/* Fine Architectural Gridlines */}
      <div className="absolute inset-0 arch-grid-line opacity-20 pointer-events-none" />

      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-brand-black/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-brand-black/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-olive" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-olive">
              {t("why_pre")}
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-light text-brand-black tracking-wide mb-6"
          >
            {t("why_h3")}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm font-light text-brand-black/60 max-w-xl leading-relaxed font-sans"
          >
            {t("why_desc")}
          </motion.p>
        </div>

        {/* 3x2 Clean Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full items-stretch">
          
          {/* Card 1: Subtly Highlighted Promise Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#F5F2EB]/50 backdrop-blur-sm border border-brand-olive/20 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-olive/5 transition-all duration-500 relative overflow-hidden group"
          >
            {/* Elegant Top Border highlight */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-olive" />
            
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-8">
                  {t("why_promise_pre")}
                </span>
                
                {/* Elegant Serif Font for Promise title */}
                <h4 className="font-display text-2xl font-light text-brand-black leading-relaxed mb-6 italic">
                  {t("why_promise_quote")}
                </h4>
              </div>
              
              <div className="pt-6 border-t border-brand-black/5 mt-auto">
                <p className="text-xs font-light text-brand-black/50 leading-relaxed font-sans">
                  {t("why_promise_desc")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards 2-6: Perfectly Symmetrical Value Cards */}
          {valuePoints.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (idx + 1) * 0.08 }}
                className="bg-white/60 backdrop-blur-sm border border-brand-taupe/15 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-brand-olive/40 hover:bg-white hover:shadow-xl hover:shadow-brand-olive/5 transition-all duration-500 group"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Modern thin-line minimalist icon container */}
                    <div className="w-10 h-10 rounded-full bg-brand-olive/5 border border-brand-olive/15 flex items-center justify-center text-brand-olive mb-8 group-hover:bg-brand-olive group-hover:text-white transition-all duration-500">
                      <Icon className="w-4 h-4 shrink-0" strokeWidth={1.2} />
                    </div>

                    {/* Bold Title in clean sans-serif */}
                    <h4 className="font-sans font-medium text-base text-brand-black tracking-wide mb-4">
                      {value.title}
                    </h4>
                  </div>

                  {/* Sharp, clean sans-serif body text */}
                  <p className="text-xs font-light text-brand-black/60 leading-relaxed font-sans mt-auto">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
