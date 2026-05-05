"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

export function FirstFoldSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#070707]">
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { scale: 1.035, opacity: 0.92 }}
        animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/gallery/resultado-07.jpeg"
          alt="Vehículo con detailing automotriz realizado por Vincent.Detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0.84 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.54)_42%,rgba(0,0,0,0.74)_78%,rgba(0,0,0,0.92)_100%)]"
      />

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(214,178,94,0.10),transparent_42%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[3] h-56 bg-[linear-gradient(180deg,rgba(0,0,0,0.92),rgba(0,0,0,0.44),rgba(0,0,0,0))] sm:h-64 md:h-72"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[3] h-56 bg-[linear-gradient(0deg,#070707_0%,rgba(7,7,7,0.82)_36%,rgba(7,7,7,0)_100%)]"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <HeroSection />
        <BenefitsSection />
      </div>
    </section>
  );
}