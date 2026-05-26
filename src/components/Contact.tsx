"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const handleDirectWhatsApp = () => {
    const text = t("contact_whatsapp_text");
    const waUrl = `https://wa.me/525549114170?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section
      id="contacto"
      className="relative w-full py-24 md:py-32 bg-brand-black text-white overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 arch-grid-line-dark opacity-10 pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-white/5 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-white/5 hidden md:block" />

      {/* LED indirect glow glows */}
      <div className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-brand-olive/10 led-glow rounded-full" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-brand-taupe/15 led-glow rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Contact Information (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left lg:pr-12">
            
            {/* Pre title */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-brand-taupe" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brand-taupe">
                {t("contact_pre")}
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide leading-tight mb-6">
              {t("contact_h3")}
            </h3>
            
            <p className="text-sm font-light text-white/50 leading-relaxed mb-12">
              {t("contact_desc")}
            </p>

            {/* Contact list details */}
            <div className="space-y-8 w-full mb-12">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-brand-taupe shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-white/30 uppercase tracking-widest mb-1">{t("contact_phone_label")}</span>
                  <a
                    href="tel:+525549114170"
                    className="text-sm font-light text-white hover:text-brand-taupe transition-colors block"
                  >
                    +52 55 4911 4170
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-brand-taupe shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[9px] text-white/30 uppercase tracking-widest mb-1">{t("contact_coverage_label")}</span>
                  <span className="text-sm font-light text-white/80">
                    {t("contact_coverage_val")}
                  </span>
                </div>
              </div>

            </div>

            {/* Instant WhatsApp CTA */}
            <button
              onClick={handleDirectWhatsApp}
              className="flex items-center gap-3 text-xs uppercase tracking-architect border border-brand-olive text-brand-white bg-brand-olive px-6 py-4 rounded-none hover:bg-transparent hover:text-white transition-all duration-300 group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{t("contact_whatsapp_btn")}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>

          </div>

          {/* Contact Quote CTA Box (Col span 7) - Apple/Stripe inspired minimal block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full bg-brand-charcoal border border-white/5 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[450px]"
          >
            {/* Fine grids inside the card */}
            <div className="absolute inset-0 arch-grid-line-dark opacity-10 pointer-events-none" />
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-brand-olive/10 led-glow rounded-full" />
            
            <div className="relative z-10 my-auto text-left w-full">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-4">
                {t("contact_quote_pre")}
              </span>
              
              <h4 className="font-display text-2xl sm:text-3xl font-light text-white leading-tight mb-6">
                {t("contact_quote_h4")}
              </h4>
              
              <p className="text-sm font-light text-white/50 leading-relaxed mb-8 max-w-xl">
                {t("contact_quote_desc")}
              </p>
              
              <button
                onClick={handleDirectWhatsApp}
                className="w-full flex items-center justify-center gap-3 text-xs uppercase tracking-architect bg-brand-white text-brand-black px-6 py-4.5 rounded-none border border-brand-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 shrink-0 fill-brand-black group-hover:fill-transparent transition-all duration-300" />
                <span>{t("contact_quote_btn")}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative z-10 pt-6 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[10px] text-white/30 uppercase tracking-widest font-light">
                {t("contact_reply_time")}
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Premium WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-45 group">
        <button
          onClick={handleDirectWhatsApp}
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="WhatsApp"
        >
          {/* Glowing pulse rings */}
          <span className="absolute -inset-1 bg-[#25D366]/30 rounded-none led-glow-sm animate-ping pointer-events-none" />
          
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
