"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/layout/SectionContainer";

const benefits = [
  "Presentación Visual",
  "Detalle & Cuidado",
  "Protección Profesional",
  "Servicio Personalizado",
];

const marqueeItems = [...benefits, ...benefits];

export function BenefitsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-10 lg:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.08),transparent_18%)]" />

      <SectionContainer className="relative">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-[#D6B25E] md:text-sm">
            Detailing Profesional
          </p>
        </div>

        <div className="group relative mt-5 overflow-hidden rounded-full border border-white/10 bg-black/10 py-3 backdrop-blur-sm md:mt-6 md:py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#07111f,rgba(7,17,31,0))] md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#07111f,rgba(7,17,31,0))] md:w-24" />

          <div className="marquee-track group-hover:[animation-play-state:paused]">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="mx-4 inline-flex items-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 md:mx-7 md:text-sm"
              >
                <span>{item}</span>
                <span className="ml-4 text-[#D6B25E]/60 md:ml-7">•</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </motion.section>
  );
}