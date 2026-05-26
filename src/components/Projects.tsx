"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ArrowRight, MapPin, Eye, Columns } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const { t } = useLanguage();

  // Translated Case studies
  const featuredProjects = useMemo(() => [
    {
      title: t("p1_title"),
      subtitle: t("p1_subtitle"),
      location: "Tulum, Q. Roo",
      year: "2025",
      description: t("p1_desc"),
      scope: t("p1_scope") as string[] || [],
      image: "/portfolio/WhatsApp Image 2026-05-20 at 16.23.21 (3).jpeg",
    },
    {
      title: t("p2_title"),
      subtitle: t("p2_subtitle"),
      location: "Cancún, Q. Roo",
      year: "2026",
      description: t("p2_desc"),
      scope: t("p2_scope") as string[] || [],
      image: "/portfolio/WhatsApp Image 2026-05-20 at 16.23.22 (3).jpeg",
    }
  ], [t]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onMouseUp = () => stopDragging();
    const onTouchEnd = () => stopDragging();

    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section
      id="proyectos"
      className="relative w-full py-24 md:py-32 bg-brand-beige overflow-hidden"
    >
      <div className="absolute inset-0 arch-grid-line opacity-25 pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-brand-black/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-brand-black/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-brand-olive" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-olive">
              {t("projects_pre")}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-black tracking-wide mb-4">
            {t("projects_h3")}
          </h3>
          <p className="text-sm font-light text-brand-black/60 max-w-xl leading-relaxed">
            {t("projects_desc")}
          </p>
        </div>

        {/* Alternating Featured Case Studies */}
        <div className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Visual Image Display (Col span 7) */}
                <div className={`lg:col-span-7 relative w-full aspect-[16/10] bg-brand-concrete overflow-hidden border border-brand-black/5 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-10 bg-brand-black/40 backdrop-blur-sm px-4 py-2 border border-white/10 text-[9px] uppercase tracking-widest text-brand-taupe">
                    {project.subtitle}
                  </div>
                </div>

                {/* Narrative Details (Col span 5) */}
                <div className={`lg:col-span-5 flex flex-col items-start ${
                  isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                }`}>
                  <span className="text-[10px] uppercase tracking-widest text-brand-olive font-medium flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location} · {project.year}
                  </span>
                  
                  <h4 className="font-display text-2xl sm:text-3xl font-light text-brand-black tracking-wide mb-6">
                    {project.title}
                  </h4>

                  <p className="text-sm font-light text-brand-black/70 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <h5 className="text-[10px] uppercase tracking-widest font-semibold text-brand-black mb-4">
                    {t("projects_scope_title")}
                  </h5>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                    {project.scope.map((item) => (
                      <li key={item} className="text-xs font-light text-brand-black/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-olive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            );
          })}
        </div>

        {/* Premium Interactive Before & After Drag Slider */}
        <div className="mt-32 pt-24 border-t border-brand-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Slider Description (Col span 5) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:pr-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1px] bg-brand-olive" />
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-olive">
                  {t("projects_slider_pre")}
                </span>
              </div>

              <h4 className="font-display text-2xl sm:text-3xl font-light text-brand-black tracking-wide mb-6">
                {t("projects_slider_h4")}
              </h4>

              <p className="text-sm font-light text-brand-black/70 leading-relaxed mb-8">
                {t("projects_slider_desc")}
              </p>

              <div className="flex items-center gap-3 bg-brand-black/5 border border-brand-black/10 px-4 py-3 text-xs font-light text-brand-black/60">
                <Columns className="w-4 h-4 text-brand-olive" />
                <span>{t("projects_slider_badge")}</span>
              </div>
            </div>

            {/* Drag Slider Box (Col span 7) */}
            <div className="lg:col-span-7 flex items-center justify-center w-full">
              <div
                ref={containerRef}
                onMouseDown={() => { isDragging.current = true; }}
                onTouchStart={() => { isDragging.current = true; }}
                onMouseMove={(e) => handleMove(e.clientX)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                className="relative w-full aspect-[16/10] overflow-hidden select-none cursor-ew-resize border border-brand-black/5 shadow-2xl"
              >
                {/* AFTER Image (Background) */}
                <Image
                  src="/portfolio/WhatsApp Image 2026-05-20 at 16.23.20 (4).jpeg"
                  alt="After Remodeling Finish"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover pointer-events-none"
                />
                <div className="absolute bottom-4 right-4 z-10 bg-brand-black/70 px-3 py-1.5 text-[9px] uppercase tracking-widest text-white border border-white/15 animate-pulse">
                  {t("projects_slider_after")}
                </div>

                {/* BEFORE Image (Foreground clipped) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden z-10"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full aspect-[16/10]" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
                    <Image
                      src="/portfolio/WhatsApp Image 2026-05-20 at 16.23.20 (1).jpeg"
                      alt="Before Remodeling Grey Work"
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover pointer-events-none absolute left-0 top-0 w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 z-10 bg-brand-black/70 px-3 py-1.5 text-[9px] uppercase tracking-widest text-white border border-white/15">
                    {t("projects_slider_before")}
                  </div>
                </div>

                {/* Sliding Bar Divider */}
                <div
                  className="absolute inset-y-0 z-20 w-[1px] bg-white/40 cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider drag trigger circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-black border border-white/20 text-white flex items-center justify-center rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    <Eye className="w-4 h-4 text-brand-taupe animate-pulse" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
