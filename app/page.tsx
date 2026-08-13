import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { CoverageSection } from "@/components/sections/CoverageSection";
import { FirstFoldSection } from "@/components/sections/FirstFoldSection";
import { PacksSection } from "@/components/sections/PacksSection";
import { QuoteBannerSection } from "@/components/sections/QuoteBannerSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesCatalogSection } from "@/components/sections/ServicesCatalogSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="site-stage min-h-screen overflow-x-clip text-[var(--text-primary)]">
      <Header />
      <FirstFoldSection />
      <ResultsSection />
      <PacksSection />
      <ServicesCatalogSection />
      <QuoteBannerSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
