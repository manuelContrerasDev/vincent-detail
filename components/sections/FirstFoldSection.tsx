"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HeroSection } from "@/components/sections/HeroSection";

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function FirstFoldSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section
      id="inicio"
      aria-label="Presentación de Vincent Detail"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[var(--page)]"
    >
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { scale: 1.045, opacity: 0.84 }}
        animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{ duration: 1.7, ease: premiumEase }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/gallery/resultado-07.jpeg"
          alt=""
          fill
          preload
          quality={50}
          sizes="100vw"
          className="object-cover object-[60%_center] sm:object-[57%_center] md:object-[55%_center] lg:object-center"
        />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(2,2,2,0.74)_0%,rgba(2,2,2,0.34)_30%,rgba(2,2,2,0.50)_68%,#050505_100%)] md:bg-[linear-gradient(180deg,rgba(2,2,2,0.68)_0%,rgba(2,2,2,0.28)_34%,rgba(2,2,2,0.52)_72%,#050505_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_30%,rgba(3,3,3,0.08)_0%,rgba(3,3,3,0.26)_54%,rgba(3,3,3,0.48)_100%)] lg:bg-[linear-gradient(90deg,rgba(2,2,2,0.92)_0%,rgba(2,2,2,0.68)_38%,rgba(2,2,2,0.22)_70%,rgba(2,2,2,0.40)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_42%,rgba(225,184,93,0.10),rgba(225,184,93,0.03)_28%,transparent_48%)] lg:bg-[radial-gradient(circle_at_72%_38%,rgba(225,184,93,0.12),rgba(225,184,93,0.035)_26%,transparent_46%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_50%_82%,rgba(246,217,141,0.035),transparent_42%)] lg:bg-[radial-gradient(ellipse_at_72%_58%,rgba(246,217,141,0.045),transparent_38%)]"
      />

      <div
        aria-hidden="true"
        className="site-grid absolute inset-0 z-[2] opacity-[0.09] sm:opacity-[0.11] lg:opacity-[0.13]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[3] h-36 bg-[linear-gradient(180deg,rgba(0,0,0,0.82),transparent)] sm:h-40"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[3] h-32 bg-[linear-gradient(0deg,#050505_0%,rgba(5,5,5,0.74)_32%,transparent_100%)] sm:h-40"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <HeroSection />
        </div>

        <div className="relative z-20 shrink-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/18 to-transparent"
          />

          <BenefitsSection />
        </div>
      </div>
    </section>
  );
}
