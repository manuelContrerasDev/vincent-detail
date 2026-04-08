import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

export function FirstFoldSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col">
      <HeroSection />
      <BenefitsSection />
    </section>
  );
}