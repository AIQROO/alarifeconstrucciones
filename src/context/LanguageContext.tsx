"use client";

import React, { createContext, useContext } from "react";
import { useRouter } from "next/navigation";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navbar
    nav_inicio: "Inicio",
    nav_nosotros: "Nosotros",
    nav_servicios: "Servicios",
    nav_galeria: "Galería",
    nav_contacto: "Contacto",
    nav_budget: "Presupuesto",
    nav_quote: "Solicitar Cotización",

    // Hero
    hero_pre: "Quintana Roo · Riviera Maya",
    hero_title: "ALARIFE",
    hero_subtitle: "CONSTRUCCIONES",
    hero_h2: "Especialistas en Tablaroca y Remodelaciones Integrales",
    hero_desc: "Diseño, fabricación e instalación profesional de sistemas de tablaroca, plafones arquitectónicos y acabados comerciales premium para hoteles, restaurantes y boutiques exclusivas.",
    hero_cta_gallery: "Ver Galería",
    hero_cta_quote: "Solicitar Cotización",
    hero_badge_design: "Diseño constructivo",
    hero_badge_scope: "Hospitality & Commercial",
    hero_explore: "Explorar",

    // About
    about_pre: "Sobre Nosotros",
    about_h3: "Construimos espacios modernos con enfoque arquitectónico y comercial.",
    about_p1: "En Alarife Construcciones nos especializamos en sistemas de tablaroca, plafones arquitectónicos y remodelaciones interiores de alto nivel para hoteles, restaurantes, oficinas y boutiques exclusivas en Quintana Roo.",
    about_p2: "Nuestro enfoque va más allá del montaje tradicional. Combinamos una planificación rigurosa, diseño contemporáneo e iluminación integrada para transformar espacios comerciales en entornos eficientes, duraderos y visualmente espectaculares.",
    about_card_pct: "100%",
    about_card_desc: "Compromiso con el acabado y la precisión espacial.",
    about_val1_title: "Calidad Certificada",
    about_val1_desc: "Sistemas instalados bajo estrictos estándares de tablaroca y terminación.",
    about_val2_title: "Garantía Local",
    about_val2_desc: "Respuesta rápida y presencia consolidada en Cancún, Playa y Tulum.",

    // Services
    services_pre: "Nuestras Soluciones",
    services_h3: "Servicios Especializados en Construcción e Interiorismo",
    services_desc: "Ofrecemos ejecuciones milimétricas con acabados de primera calidad, coordinando sistemas estructurales de tablaroca, plafonería de diseño e iluminación indirecta en toda la Riviera Maya.",
    
    // Services items
    s_tablaroca_title: "Sistemas de Tablaroca",
    s_tablaroca_desc: "Instalación profesional de muros divisores, cajillos de diseño y paneles acústicos o hidrófugos de alta resistencia.",
    s_plafones_title: "Plafones Arquitectónicos",
    s_plafones_desc: "Diseño y montaje de techos suspendidos flotantes, techos reticulados y plafones lisos con geometrías contemporáneas.",
    s_muros_title: "Muros Decorativos",
    s_muros_desc: "Creación de relieves artísticos, nichos iluminados y muros de acento que añaden volumetría y carácter a las estancias.",
    s_remodel_com_title: "Remodelación Comercial",
    s_remodel_com_desc: "Renovación integral de locales, showrooms y oficinas. Adaptamos la distribución a la identidad de tu marca.",
    s_remodel_hot_title: "Remodelación Hotelera",
    s_remodel_hot_desc: "Adecuaciones premium de suites, vestíbulos y áreas comunes con la agilidad y acabados que la alta hotelería exige.",
    s_interior_title: "Diseño Interior Constructivo",
    s_interior_desc: "Materialización de proyectos complejos de interiorismo, asegurando simetría, alineación técnica y orden estético.",
    s_lighting_title: "Iluminación Integrada",
    s_lighting_desc: "Planeación de cajillos para tiras LED indirectas, luminarias empotradas y detalles que realzan texturas y materiales.",
    s_finishes_title: "Acabados Arquitectónicos",
    s_finishes_desc: "Detalle de empastado fino, recubrimientos finos, molduras y texturas premium listos para la aplicación final de diseño.",

    // Projects
    projects_pre: "Casos de Éxito",
    projects_h3: "Proyectos Destacados",
    projects_desc: "Ejecuciones llave en mano donde fusionamos la precisión técnica de la tablaroca con el refinamiento de la arquitectura moderna.",
    projects_scope_title: "Alcance de Obra",
    projects_slider_pre: "La Transformación",
    projects_slider_h4: "Visualiza el Cambio",
    projects_slider_desc: "Desliza la barra para comparar el estado en obra gris frente al resultado final decorativo de alta gama. Esta obra evidencia la pulcritud de colocación en nuestros plafones curvos y la iluminación integrada.",
    projects_slider_badge: "Arrastra el control central para interactuar",
    projects_slider_before: "ANTES (OBRA)",
    projects_slider_after: "DESPUÉS (ACABADO)",
    
    // Project 1
    p1_title: "Lobby & Suites Hotel Riviera",
    p1_subtitle: "Remodelación Hotelera Luxury",
    p1_desc: "Remodelación integral de plafones suspendidos con cajillos para iluminación LED perimetral indirecta y colocación de muros divisorios termoacústicos en áreas de suites de lujo.",
    p1_scope: ["Plafones flotantes de tablaroca", "Cajillos LED indirectos", "Muros divisorios acústicos", "Terminaciones empastadas"],
    
    // Project 2
    p2_title: "Restaurante Bistro Gourmet",
    p2_subtitle: "Adecuación Comercial Exclusiva",
    p2_desc: "Creación de muros escultóricos curvos y plafones arquitectónicos multinivel en el salón principal, logrando una sensación orgánica que se integra con el diseño de iluminación decorativa.",
    p2_scope: ["Muros curvos de tablaroca", "Plafón multinivel suspendido", "Nichos decorativos con LED", "Acabados lisos de alta especificación"],

    // Philosophy / Why Alarife
    why_pre: "Nuestra Filosofía",
    why_h3: "¿Por qué Alarife?",
    why_desc: "Fusionamos la rigidez de la ingeniería constructiva de tablaroca con la sensibilidad estética y el minimalismo de la arquitectura de lujo.",
    why_promise_pre: "Nuestra Promesa",
    why_promise_quote: '"Materializar planos con la mayor rigurosidad estética y constructiva del mercado."',
    why_promise_desc: "Un compromiso inquebrantable con la simetría de juntas, plomos perfectos y el orden visual en cada remodelación.",
    
    // Philosophy items
    w_hospitality_title: "Hospitality & Retail",
    w_hospitality_desc: "Comprendemos la dinámica comercial y hotelera de la Riviera Maya. Diseñamos e instalamos cumpliendo con plazos estrictos y normativas rigurosas de seguridad de grandes resorts y franquicias.",
    w_precision_title: "Precisión de Lujo",
    w_precision_desc: "Nuestra meta es la perfección simétrica. Nos aseguramos de que cada muro divisor, plafón flotante y cajillo de luz cuente con juntas invisibles, plomos exactos y texturas impecables.",
    w_rigor_title: "Rigurosidad Técnica",
    w_rigor_desc: "Cuidamos minuciosamente la modulación, el calibre de la perfilería metálica y el empleo de masillas de alta resistencia para garantizar que las estructuras permanezcan indeformables.",
    w_efficiency_title: "Eficiencia en Obra",
    w_efficiency_desc: "Sincronizamos nuestros trabajos con el cronograma general del proyecto para minimizar tiempos muertos y evitar demoras innecesarias, optimizando la productividad en obra.",
    w_guarantee_title: "Garantía y Claridad",
    w_guarantee_desc: "Elaboramos presupuestos detallados y transparentes sin costos sorpresa. Trabajamos con materiales certificados, asegurando el máximo rendimiento y durabilidad constructiva.",

    // Gallery
    gallery_pre: "Galería de Obras",
    gallery_h3: "Galería de Proyectos",
    gallery_desc: "Explora de cerca el detalle de nuestros acabados en este dinámico mosaico autodeslizable de dos filas continuas.",
    gallery_lightbox_subtitle: "ALARIFE CONSTRUCCIONES",
    gallery_lightbox_photo: "Foto",
    gallery_lightbox_of: "de",

    // Contact
    contact_pre: "Contacto Directo",
    contact_h3: "Hablemos de tu proyecto",
    contact_desc: "Ya sea una remodelación completa, adecuación comercial o diseño interior, en Alarife Construcciones podemos ayudarte a transformar tu espacio con la mayor precisión del Caribe.",
    contact_phone_label: "Llámanos o escríbenos",
    contact_email_label: "Correo Electrónico",
    contact_coverage_label: "Zona de Cobertura",
    contact_coverage_val: "Cancún · Playa del Carmen · Tulum · Riviera Maya",
    contact_whatsapp_btn: "Chatear por WhatsApp",
    contact_quote_pre: "Cotización Rápida",
    contact_quote_h4: "Presupuesto Inmediato vía WhatsApp",
    contact_quote_desc: "Hemos simplificado nuestro canal de atención. Haz clic abajo para conversar directamente con nuestro equipo de ingeniería. Podrás compartirnos planos, croquis y requerimientos de obra sin formularios intermedios.",
    contact_quote_btn: "Solicitar Cotización por WhatsApp",
    contact_reply_time: "Respuesta promedio: Menos de 15 minutos",
    contact_whatsapp_text: "Hola! Me gustaría hacer una cotización",

    // Footer
    footer_desc: "Estudio constructivo especializado en drywall de alta gama, plafones de diseño, iluminación integrada y remodelaciones comerciales y hoteleras en Quintana Roo.",
    footer_nav_title: "Navegación",
    footer_contact_title: "Contacto",
    footer_rights: "© {year} ALARIFE CONSTRUCCIONES. Todos los derechos reservados.",
    footer_sub: "Remodelaciones de Interiores Comerciales y Hoteleros de Alto Nivel.",
    footer_top: "Volver al inicio",
  },
  en: {
    // Navbar
    nav_inicio: "Home",
    nav_nosotros: "About",
    nav_servicios: "Services",
    nav_galeria: "Gallery",
    nav_contacto: "Contact",
    nav_budget: "Budget",
    nav_quote: "Request Quote",

    // Hero
    hero_pre: "Quintana Roo · Riviera Maya",
    hero_title: "ALARIFE",
    hero_subtitle: "CONSTRUCCIONES",
    hero_h2: "Specialists in Drywall and Full Remodeling Projects",
    hero_desc: "Professional design, manufacture, and installation of premium drywall systems, architectural ceilings, and commercial finishes for hotels, restaurants, and exclusive boutiques.",
    hero_cta_gallery: "View Gallery",
    hero_cta_quote: "Request Quote",
    hero_badge_design: "Constructive Design",
    hero_badge_scope: "Hospitality & Commercial",
    hero_explore: "Explore",

    // About
    about_pre: "About Us",
    about_h3: "We build modern spaces with an architectural and commercial focus.",
    about_p1: "At Alarife Construcciones we specialize in drywall systems, architectural ceilings, and high-level interior renovations for hotels, restaurants, offices, and exclusive boutiques in Quintana Roo.",
    about_p2: "Our approach goes beyond traditional installation. We combine rigorous planning, contemporary design, and integrated lighting to transform commercial spaces into efficient, durable, and spectacular environments.",
    about_card_pct: "100%",
    about_card_desc: "Commitment to finishes and spatial precision.",
    about_val1_title: "Certified Quality",
    about_val1_desc: "Systems installed under strict drywall and finishing standards.",
    about_val2_title: "Local Guarantee",
    about_val2_desc: "Fast response and consolidated presence in Cancun, Playa, and Tulum.",

    // Services
    services_pre: "Our Solutions",
    services_h3: "Specialized Construction & Interior Design Services",
    services_desc: "We offer millimeter-precision executions with top-quality finishes, coordinating structural drywall systems, designer ceilings, and indirect lighting throughout the Riviera Maya.",
    
    // Services items
    s_tablaroca_title: "Drywall Systems",
    s_tablaroca_desc: "Professional installation of partition walls, designer bulkheads, and high-resistance acoustic or moisture-resistant panels.",
    s_plafones_title: "Architectural Ceilings",
    s_plafones_desc: "Design and assembly of suspended floating ceilings, grid ceilings, and smooth plasterboards with contemporary shapes.",
    s_muros_title: "Decorative Walls",
    s_muros_desc: "Creation of artistic reliefs, illuminated niches, and accent walls that add volume and character to interior spaces.",
    s_remodel_com_title: "Commercial Remodeling",
    s_remodel_com_desc: "Full renovation of commercial premises, showrooms, and offices. We adapt the layout to your brand identity.",
    s_remodel_hot_title: "Hotel Remodeling",
    s_remodel_hot_desc: "Premium fit-outs for suites, lobbies, and common areas with the speed and high-level finishes that top hospitality demands.",
    s_interior_title: "Constructive Interior Design",
    s_interior_desc: "Materialization of complex interior design projects, ensuring symmetry, technical alignment, and aesthetic order.",
    s_lighting_title: "Integrated Lighting",
    s_lighting_desc: "Planning of bulkheads for indirect LED strips, recessed lighting, and details that enhance textures and materials.",
    s_finishes_title: "Architectural Finishes",
    s_finishes_desc: "Detailed fine skim coating, premium coatings, moldings, and textures ready for the final design application.",

    // Projects
    projects_pre: "Success Stories",
    projects_h3: "Featured Projects",
    projects_desc: "Turnkey executions where we merge the technical precision of drywall with the refinement of modern architecture.",
    projects_scope_title: "Scope of Work",
    projects_slider_pre: "The Transformation",
    projects_slider_h4: "Visualize the Change",
    projects_slider_desc: "Slide the bar to compare the rough construction state against the final high-end decorative result. This project demonstrates the absolute neatness of our curved ceilings and integrated lighting.",
    projects_slider_badge: "Drag the center control to interact",
    projects_slider_before: "BEFORE (WORK)",
    projects_slider_after: "AFTER (FINISHED)",
    
    // Project 1
    p1_title: "Lobby & Suites Hotel Riviera",
    p1_subtitle: "Luxury Hotel Remodeling",
    p1_desc: "Full remodeling of suspended ceilings with perimetral indirect LED lighting bulkheads and thermo-acoustic partition walls in luxury suite areas.",
    p1_scope: ["Suspended drywall ceilings", "Indirect LED bulkheads", "Acoustic partition walls", "Fine skim finishes"],
    
    // Project 2
    p2_title: "Bistro Gourmet Restaurant",
    p2_subtitle: "Exclusive Commercial Fit-Out",
    p2_desc: "Creation of sculptural curved walls and multi-level architectural ceilings in the main hall, achieving an organic feel that integrates with the decorative lighting design.",
    p2_scope: ["Curved drywall partitions", "Suspended multi-level ceiling", "LED decorative niches", "High-specification smooth finishes"],

    // Philosophy / Why Alarife
    why_pre: "Our Philosophy",
    why_h3: "Why Alarife?",
    why_desc: "We merge the rigidity of structural drywall engineering with the aesthetic sensitivity and minimalism of luxury architecture.",
    why_promise_pre: "Our Promise",
    why_promise_quote: '"Materializing blueprints with the highest aesthetic and constructive rigor in the market."',
    why_promise_desc: "An unwavering commitment to joint symmetry, perfect vertical plumbs, and visual order in every renovation.",
    
    // Philosophy items
    w_hospitality_title: "Hospitality & Retail",
    w_hospitality_desc: "We understand the commercial and hotel dynamics of the Riviera Maya. We design and install complying with strict timelines and rigorous safety regulations of large resorts and franchises.",
    w_precision_title: "Luxury Precision",
    w_precision_desc: "Our goal is symmetrical perfection. We ensure that every partition wall, floating ceiling, and light bulkhead features invisible joints, exact plumbs, and flawless textures.",
    w_rigor_title: "Technical Rigor",
    w_rigor_desc: "We meticulously care for the spacing, the gauge of the metal framing, and the use of high-strength joint compound to guarantee that structures remain warp-free.",
    w_efficiency_title: "On-Site Efficiency",
    w_efficiency_desc: "We synchronize our tasks with the general project schedule to minimize idle time and avoid unnecessary delays, optimizing productivity on site.",
    w_guarantee_title: "Guarantee & Clarity",
    w_guarantee_desc: "We prepare detailed and transparent budgets with no surprise costs. We work with certified materials, ensuring the maximum constructive performance and durability.",

    // Gallery
    gallery_pre: "Gallery of Works",
    gallery_h3: "Project Gallery",
    gallery_desc: "Explore our finishes closely in this dynamic, auto-sliding double-row horizontal mosaic.",
    gallery_lightbox_subtitle: "ALARIFE CONSTRUCCIONES",
    gallery_lightbox_photo: "Photo",
    gallery_lightbox_of: "of",

    // Contact
    contact_pre: "Direct Contact",
    contact_h3: "Let's talk about your project",
    contact_desc: "Whether it is a full renovation, commercial fit-out, or interior design project, at Alarife Construcciones we can help you transform your space with the highest precision in the Caribbean.",
    contact_phone_label: "Call or write to us",
    contact_email_label: "Email Address",
    contact_coverage_label: "Coverage Area",
    contact_coverage_val: "Cancun · Playa del Carmen · Tulum · Riviera Maya",
    contact_whatsapp_btn: "Chat via WhatsApp",
    contact_quote_pre: "Quick Quote",
    contact_quote_h4: "Immediate Estimate via WhatsApp",
    contact_quote_desc: "We have simplified our communication. Click below to talk directly with our engineering team. You can share plans, sketches, and work requirements without intermediate forms.",
    contact_quote_btn: "Request Quote via WhatsApp",
    contact_reply_time: "Average response: Under 15 minutes",
    contact_whatsapp_text: "Hello! I would like to get a quote",

    // Footer
    footer_desc: "Constructive studio specialized in high-end drywall, designer ceilings, integrated lighting, and commercial and hotel remodeling in Quintana Roo.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contact",
    footer_rights: "© {year} ALARIFE CONSTRUCCIONES. All rights reserved.",
    footer_sub: "High-End Commercial and Hotel Interior Renovations.",
    footer_top: "Back to top",
  }
};

export const LanguageProvider: React.FC<{
  children: React.ReactNode;
  lang: Language;
}> = ({ children, lang }) => {
  const router = useRouter();

  const setLanguage = (next: Language) => {
    if (next === lang) return;
    const hash =
      typeof window !== "undefined" ? window.location.hash : "";
    router.push(`/${next}${hash}`);
  };

  const t = (key: string) => {
    const dict = translations[lang] as any;
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    const fallback = translations["en"] as any;
    return fallback[key] !== undefined ? fallback[key] : key;
  };

  return (
    <LanguageContext.Provider value={{ language: lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
