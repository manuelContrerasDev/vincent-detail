import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { PacksSection } from "@/components/sections/PacksSection";
import { ServicesCatalogSection } from "@/components/sections/ServicesCatalogSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-[#f6f2ea]">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PacksSection />
      <ServicesCatalogSection />
      <ResultsSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}