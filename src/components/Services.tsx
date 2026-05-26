"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Grid,
  Building2,
  Hotel,
  PenTool,
  Lightbulb,
  Maximize2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const servicesData = useMemo(() => [
    {
      title: t("s_tablaroca_title"),
      icon: Layers,
      description: t("s_tablaroca_desc")
    },
    {
      title: t("s_plafones_title"),
      icon: Grid,
      description: t("s_plafones_desc")
    },
    {
      title: t("s_muros_title"),
      icon: Sparkles,
      description: t("s_muros_desc")
    },
    {
      title: t("s_remodel_com_title"),
      icon: Building2,
      description: t("s_remodel_com_desc")
    },
    {
      title: t("s_remodel_hot_title"),
      icon: Hotel,
      description: t("s_remodel_hot_desc")
    },
    {
      title: t("s_interior_title"),
      icon: PenTool,
      description: t("s_interior_desc")
    },
    {
      title: t("s_lighting_title"),
      icon: Lightbulb,
      description: t("s_lighting_desc")
    },
    {
      title: t("s_finishes_title"),
      icon: Maximize2,
      description: t("s_finishes_desc")
    }
  ], [t]);

  return (
    <section
      id="servicios"
      className="relative w-full py-24 md:py-32 bg-[#0B0B0B] text-white overflow-hidden"
    >
      {/* Fine Architectural Gridlines */}
      <div className="absolute inset-0 arch-grid-line-dark opacity-10 pointer-events-none" />

      {/* Decorative vertical blueprint lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/5 hidden md:block" />

      {/* LED indirect glow glows */}
      <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-brand-olive/5 led-glow rounded-full" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-brand-taupe/10 led-glow rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-brand-taupe" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-taupe">
                {t("services_pre")}
              </span>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-light text-white tracking-wide max-w-2xl"
            >
              {t("services_h3")}
            </motion.h3>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm font-light text-white/50 leading-relaxed max-w-md font-sans"
          >
            {t("services_desc")}
          </motion.p>
        </div>

        {/* 4x2 Clean Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                className="group relative aspect-square overflow-hidden bg-[#141414] border border-white/5 flex flex-col justify-between p-6 cursor-pointer hover:bg-[#1E1E1E] hover:border-brand-olive/35 hover:shadow-2xl hover:shadow-brand-olive/5 transition-all duration-500 rounded-2xl"
              >
                {/* Dynamic top highlight indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-olive scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Card Top: Icon with thin line stroke */}
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-taupe group-hover:bg-brand-olive group-hover:border-brand-olive group-hover:text-white transition-all duration-500">
                  <Icon className="w-4.5 h-4.5 shrink-0" strokeWidth={1.2} />
                </div>

                {/* Card Bottom: Animated Title & Description */}
                <div className="flex flex-col items-start w-full transition-all duration-500 transform group-hover:-translate-y-1">
                  {/* Title: Elegant Serif Font */}
                  <h4 className="font-display text-lg font-light text-white tracking-wide leading-snug">
                    {service.title}
                  </h4>

                  {/* Description: Clean, sophisticated sans-serif description that fades in */}
                  <p className="text-xs font-light text-white/50 leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-3 transition-all duration-500 ease-in-out overflow-hidden font-sans">
                    {service.description}
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
