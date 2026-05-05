"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, ExternalLink } from "lucide-react";
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

export function BenefitsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative shrink-0 overflow-hidden border-y border-white/8 py-3.5 sm:py-4 md:py-5"
      aria-label={`Certificaciones y beneficios de ${siteConfig.name}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.07),transparent_22%)]"
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
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-3 text-center sm:gap-4"
        >
          <p className="font-[family:var(--font-rajdhani)] text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D6B25E] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-[10px] sm:tracking-[0.3em] md:text-[11px] md:tracking-[0.34em]">
            Certificado
          </p>

          <div className="flex w-full justify-center">
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.01,
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full max-w-[330px] sm:max-w-[380px]"
            >
              <Link
                href="https://www.instagram.com/3dcarcare?igsh=ajRwd2lvbHFpeHV3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver Instagram de 3D Car Care"
                className="group flex w-full items-center gap-3 rounded-2xl border border-[#D6B25E]/25 bg-black/35 px-3 py-2.5 shadow-[0_14px_34px_rgba(0,0,0,0.28)] ring-1 ring-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#D6B25E]/45 hover:bg-black/45 sm:px-4 sm:py-3"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black sm:h-14 sm:w-14">
                  <Image
                    src="/images/certificaciones/3dcarcare-certificacion.png"
                    alt="Certificación 3D Car Care"
                    fill
                    sizes="(max-width: 640px) 48px, 56px"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col text-left">
                  <span className="inline-flex items-center gap-1.5 font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F3F1EC] sm:text-[12px]">
                    <BadgeCheck
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-[#D6B25E]"
                    />
                    3D Car Care
                  </span>

                  <span className="mt-0.5 font-[family:var(--font-rajdhani)] text-[9px] font-medium uppercase tracking-[0.12em] text-white/60 sm:text-[10px]">
                    Formación y respaldo técnico
                  </span>
                </div>

                <ExternalLink
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#D6B25E]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-4 sm:mt-5 md:mt-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-[linear-gradient(90deg,#070707,rgba(7,7,7,0))] sm:w-16 md:w-28"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-[linear-gradient(270deg,#070707,rgba(7,7,7,0))] sm:w-16 md:w-28"
        />

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#070707]/90 py-2.5 backdrop-blur-sm sm:py-3 md:py-3.5">
          <div className="marquee-track whitespace-nowrap hover:[animation-play-state:paused]">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="mx-3 inline-flex items-center sm:mx-4 md:mx-6"
              >
                <span className="font-[family:var(--font-rajdhani)] bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_45%,#A97B1E_100%)] bg-clip-text text-[9px] font-semibold uppercase tracking-[0.16em] text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] [-webkit-text-stroke:0.25px_rgba(0,0,0,0.55)] sm:text-[10px] md:text-[12px] md:tracking-[0.2em]">
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