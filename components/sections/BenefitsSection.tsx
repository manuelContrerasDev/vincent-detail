"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const benefits = [
  "Brillo profundo",
  "Corrección visual",
  "Protección duradera",
  "Atención personalizada",
  "Terminación premium",
  "Cuidado exterior e interior",
];

const marqueeItems = [...benefits, ...benefits];

export function BenefitsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.42, ease: premiumEase }}
      className="relative shrink-0 overflow-hidden border-y border-white/8"
      aria-label={`Certificaciones y beneficios de ${siteConfig.name}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.07),transparent_24%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.22),transparent)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.14),transparent)]"
      />

      <SectionContainer className="relative py-2 sm:py-3 md:py-4">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.42, ease: premiumEase }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-2 font-[family:var(--font-rajdhani)] text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-[10px] sm:tracking-[0.28em] md:text-[11px] md:tracking-[0.34em]">
            Certificado
          </p>

          <motion.div
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -2,
                    scale: 1.01,
                  }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-full max-w-[300px] sm:max-w-[360px]"
          >
            <Link
              href="https://www.instagram.com/3dcarcare?igsh=ajRwd2lvbHFpeHV3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver Instagram de 3D Car Care"
              className="group flex w-full items-center gap-2.5 rounded-2xl border border-[#D6B25E]/25 bg-black/35 px-3 py-2 shadow-[0_12px_28px_rgba(0,0,0,0.24)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#D6B25E]/45 hover:bg-black/45 sm:gap-3 sm:px-4 sm:py-3"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black sm:h-12 sm:w-12 md:h-14 md:w-14">
                <Image
                  src="/images/certificaciones/3dcarcare-certificacion.png"
                  alt="Certificación 3D Car Care"
                  fill
                  sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="inline-flex items-center gap-1.5 font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.11em] text-[#F3F1EC] sm:text-[12px]">
                  <BadgeCheck
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-[#D6B25E]"
                  />
                  3D Car Care
                </span>

                <span className="mt-0.5 font-[family:var(--font-rajdhani)] text-[8.5px] font-medium uppercase tracking-[0.10em] text-white/60 sm:text-[10px]">
                  Formación y respaldo técnico
                </span>
              </div>

              <ExternalLink
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 text-[#D6B25E]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4"
              />
            </Link>
          </motion.div>
        </motion.div>
      </SectionContainer>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.42,
          delay: 0.06,
          ease: premiumEase,
        }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-[linear-gradient(90deg,#070707,rgba(7,7,7,0))] sm:w-16 md:w-28"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-[linear-gradient(270deg,#070707,rgba(7,7,7,0))] sm:w-16 md:w-28"
        />

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-t border-white/10 bg-[#070707]/92 py-2.5 backdrop-blur-sm sm:border-y sm:py-3 md:py-3.5">
          <div className="marquee-track whitespace-nowrap">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="mx-3 inline-flex items-center sm:mx-4 md:mx-6"
              >
                <span className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F3F1EC] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-[11px] md:text-[12px] md:tracking-[0.2em]">
                  {item}
                </span>

                <span
                  aria-hidden="true"
                  className="ml-3 text-[#D6B25E]/70 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:ml-4 md:ml-6"
                >
                  •
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}