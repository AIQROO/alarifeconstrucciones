"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import { PORTFOLIO_IMAGES } from "@/data/portfolio-images";
import { useLanguage } from "@/context/LanguageContext";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeColumn, setActiveColumn] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useLanguage();

  // Curate first 24 active images and arrange them in columns (total 12 columns)
  // We clone the first 4 columns at the end of the array to create a 100% seamless wrap-around marquee loop.
  const columns = useMemo(() => {
    const list = PORTFOLIO_IMAGES.slice(0, 24);
    const cols = [];
    for (let i = 0; i < list.length; i += 2) {
      if (i + 1 < list.length) {
        cols.push({
          top: list[i],
          bottom: list[i + 1],
          topIndex: i,
          bottomIndex: i + 1
        });
      }
    }
    // Clone the first 4 columns to create the infinite scroll buffer
    const cloned = cols.slice(0, 4);
    return [...cols, ...cloned];
  }, []);

  const currentLightboxImage = useMemo(() => {
    if (lightboxIndex === null) return null;
    return PORTFOLIO_IMAGES[lightboxIndex];
  }, [lightboxIndex]);

  // Settle active index for dots indicator by tracking manual or automatic scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;
    
    const colWidth = firstChild.getBoundingClientRect().width + 24; // width + gap
    if (colWidth > 0) {
      // Modulo 12 ensures that when sliding through the cloned columns at the end, it correctly loops back to the start in active indicator dots
      const currentIdx = Math.round(scrollLeft / colWidth) % 12;
      if (currentIdx !== activeColumn && currentIdx >= 0 && currentIdx < 12) {
        setActiveColumn(currentIdx);
      }
    }
  };

  // Continuous buttery-smooth automatic horizontal marquee glide loop (60fps/120fps)
  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    
    const glide = () => {
      if (scrollRef.current) {
        const firstChild = scrollRef.current.children[0] as HTMLElement;
        if (firstChild) {
          const colWidth = firstChild.getBoundingClientRect().width + 24;
          const originalWidth = 12 * colWidth; // Width of the original 12 columns
          
          // Increment scroll position by a tiny fraction for high-refresh-rate fluid motion
          scrollRef.current.scrollLeft += 0.8;
          
          // Seamless snap wrap back to 0 once we reach the identical cloned section at index 12
          if (scrollRef.current.scrollLeft >= originalWidth) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(glide);
    };

    animationFrameId = requestAnimationFrame(glide);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Custom function to temporarily pause auto-glide when manual navigation is used
  const triggerInteractionPause = () => {
    setIsPaused(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    interactionTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000); // Resumes automatic marquee gliding after 6 seconds of no clicks
  };

  const handleNextColumn = () => {
    triggerInteractionPause();
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;

    const colWidth = firstChild.getBoundingClientRect().width + 24;
    let nextColumn = activeColumn + 1;
    if (nextColumn >= 12) {
      nextColumn = 0;
    }
    setActiveColumn(nextColumn);
    scrollRef.current.scrollTo({
      left: nextColumn * colWidth,
      behavior: "smooth"
    });
  };

  const handlePrevColumn = () => {
    triggerInteractionPause();
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;

    const colWidth = firstChild.getBoundingClientRect().width + 24;
    let prevColumn = activeColumn - 1;
    if (prevColumn < 0) {
      prevColumn = 11;
    }
    setActiveColumn(prevColumn);
    scrollRef.current.scrollTo({
      left: prevColumn * colWidth,
      behavior: "smooth"
    });
  };

  const handleDotClick = (index: number) => {
    triggerInteractionPause();
    if (!scrollRef.current) return;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    if (!firstChild) return;

    const colWidth = firstChild.getBoundingClientRect().width + 24;
    const targetCol = index * 2;
    setActiveColumn(targetCol);
    scrollRef.current.scrollTo({
      left: targetCol * colWidth,
      behavior: "smooth"
    });
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % PORTFOLIO_IMAGES.length;
    });
  };

  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length;
    });
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="galeria"
      className="relative w-full py-24 md:py-32 bg-brand-white overflow-hidden"
    >
      <div className="absolute inset-0 arch-grid-line opacity-30 pointer-events-none" />

      {/* Grid Border Lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-brand-black/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-brand-black/5 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-brand-olive" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-olive">
              {t("gallery_pre")}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-brand-black tracking-wide mb-4">
            {t("gallery_h3")}
          </h3>
          <p className="text-sm font-light text-brand-black/60 max-w-xl leading-relaxed">
            {t("gallery_desc")}
          </p>
        </div>

        {/* Gallery Slider Area */}
        <div className="relative w-full px-2">
          
          {/* Subtle Navigation Arrows */}
          <button
            onClick={handlePrevColumn}
            className="absolute -left-4 sm:left-2 lg:left-4 top-[40%] -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-brand-black/5 bg-brand-white/90 backdrop-blur-md flex items-center justify-center text-brand-black opacity-60 hover:opacity-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNextColumn}
            className="absolute -right-4 sm:right-2 lg:right-4 top-[40%] -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-brand-black/5 bg-brand-white/90 backdrop-blur-md flex items-center justify-center text-brand-black opacity-60 hover:opacity-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrolling double-row flex track */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              // Only resume if we are not in a manual interaction pause
              if (interactionTimeoutRef.current) {
                // If there's an active manual pause timer, keep it paused
                return;
              }
              setIsPaused(false);
            }}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 px-1"
          >
            {columns.map((col, colIdx) => (
              <div 
                key={colIdx} 
                className="flex flex-col gap-6 shrink-0 snap-start select-none"
              >
                
                {/* Top Row Image */}
                <div 
                  onClick={() => setLightboxIndex(col.topIndex)}
                  className="relative w-[280px] xs:w-[320px] sm:w-[380px] aspect-[4/3] overflow-hidden bg-brand-concrete border border-brand-black/5 group cursor-pointer shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md"
                >
                  <Image
                    src={col.top.src}
                    alt={col.top.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 text-white" />
                  
                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 border border-white/20 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Row Image */}
                <div 
                  onClick={() => setLightboxIndex(col.bottomIndex)}
                  className="relative w-[280px] xs:w-[320px] sm:w-[380px] aspect-[4/3] overflow-hidden bg-brand-concrete border border-brand-black/5 group cursor-pointer shadow-sm rounded-2xl transition-all duration-300 hover:shadow-md"
                >
                  <Image
                    src={col.bottom.src}
                    alt={col.bottom.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Dark Hover overlay */}
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 text-white" />
                  
                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 border border-white/20 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Dots Indicator at the Bottom */}
          <div className="flex justify-center items-center gap-3 mt-10 select-none">
            {Array.from({ length: 6 }).map((_, idx) => {
              const isActive = Math.min(5, Math.floor(activeColumn / 2)) === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 h-1.5 bg-brand-olive rounded-full"
                      : "w-1.5 h-1.5 bg-brand-black/20 hover:bg-brand-black/40 rounded-full"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              );
            })}
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-55 bg-brand-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-6 md:p-12 text-white"
          >
            {/* Lightbox Header */}
            <div className="w-full max-w-6xl flex items-center justify-between z-20">
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-taupe block mb-1">
                  {t("gallery_lightbox_subtitle")}
                </span>
                <h4 className="font-display text-lg font-light text-white">
                  {currentLightboxImage.category} · {currentLightboxImage.location}, Q. Roo
                </h4>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-black hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Stage */}
            <div className="relative w-full max-w-4xl h-[60vh] md:h-[70vh] flex items-center justify-center z-10 select-none">
              
              {/* Prev Button */}
              <button
                onClick={handleLightboxPrev}
                className="absolute left-0 md:-left-16 z-20 w-12 h-12 border border-white/10 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-brand-black hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Central Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={currentLightboxImage.src}
                  alt={currentLightboxImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleLightboxNext}
                className="absolute right-0 md:-right-16 z-20 w-12 h-12 border border-white/10 bg-brand-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-brand-black hover:border-white transition-all duration-300 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Footer */}
            <div className="w-full max-w-3xl flex items-center justify-center text-center z-20">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider text-brand-taupe">
                <span>{currentLightboxImage.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>{currentLightboxImage.location}, Quintana Roo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>{t("gallery_lightbox_photo")} {lightboxIndex + 1} {t("gallery_lightbox_of")} {PORTFOLIO_IMAGES.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
