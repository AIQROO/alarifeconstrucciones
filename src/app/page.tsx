import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyAlarife from "@/components/WhyAlarife";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-white text-brand-black">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow flex flex-col w-full">
        {/* Hero Area */}
        <Hero />
        
        {/* About Editorial narrative */}
        <About />
        
        {/* Core Services grid cards */}
        <Services />
        
        {/* Why Alarife core values grid */}
        <WhyAlarife />
        
        {/* Masonry Category Gallery & Lightbox */}
        <Gallery />
        
        {/* Interactive Quote Form & WhatsApp direct links */}
        <Contact />
      </main>

      {/* Footer Branding & spatial details */}
      <Footer />
    </div>
  );
}
