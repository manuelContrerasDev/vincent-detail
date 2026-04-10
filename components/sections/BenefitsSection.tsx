"use client";

import { motion } from "motion/react";
import { ShieldCheck, Sparkles, Gauge, Gem } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";

const benefits = [
  "Brillo profundo",
  "Corrección visual",
  "Protección duradera",
  "Atención personalizada",
  "Terminación premium",
  "Cuidado exterior e interior",
];

const marqueeItems = [...benefits, ...benefits];

const topHighlights = [
  { label: "Detalle", icon: Sparkles },
  { label: "Protección", icon: ShieldCheck },
  { label: "Terminación", icon: Gem },
  { label: "Resultado", icon: Gauge },
];

export function BenefitsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden border-y border-white/8 py-6 md:py-7"
      aria-label={`Beneficios y experiencia de ${siteConfig.name}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.07),transparent_20%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.22),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.14),transparent)]"
      />

      <SectionContainer className="relative">
        <div className="flex flex-col items-center gap-4 text-center md:gap-5">
          <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.30em] text-[#D6B25E] md:text-[11px] md:tracking-[0.34em]">
            Experiencia {siteConfig.name}
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-x-5">
            {topHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2"
                >
                  <Icon aria-hidden="true" className="h-3.5 w-3.5 text-[#D6B25E]" />
                  <span className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F3F1EC] md:text-[11px]">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </SectionContainer>

      <div className="relative mt-5 md:mt-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-[linear-gradient(90deg,#070707,rgba(7,7,7,0))] md:w-28"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-[linear-gradient(270deg,#070707,rgba(7,7,7,0))] md:w-28"
        />

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#070707] py-3 md:py-3.5">
          <div className="group marquee-track group-hover:[animation-play-state:paused]">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="mx-4 inline-flex items-center md:mx-6"
              >
                <span className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F3F1EC] md:text-[12px] md:tracking-[0.20em]">
                  {item}
                </span>
                <span aria-hidden="true" className="ml-4 text-[#D6B25E]/70 md:ml-6">
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}