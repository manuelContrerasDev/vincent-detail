"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";

const premiumEase = [0.22, 1, 0.36, 1] as [
  number,
  number,
  number,
  number,
];

export function FirstFoldSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Inicio Vincent.Detail"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#050505] md:min-h-[100dvh]"
    >
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { scale: 1.04, opacity: 0.9 }}
        animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
        transition={{
          duration: 1.7,
          ease: premiumEase,
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/gallery/resultado-07.jpeg"
          alt="Vehículo con detailing automotriz realizado por Vincent.Detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_44%] sm:object-center"
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0.78 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.46)_0%,rgba(0,0,0,0.48)_34%,rgba(0,0,0,0.70)_70%,rgba(5,5,5,0.94)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_35%,rgba(214,178,94,0.13),transparent_42%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.50)_36%,rgba(0,0,0,0.25)_64%,rgba(0,0,0,0.62)_100%)] lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.20)_46%,rgba(0,0,0,0.48)_100%)] lg:hidden"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-[3] h-52 bg-[linear-gradient(180deg,rgba(0,0,0,0.94),rgba(0,0,0,0.54),rgba(0,0,0,0))] sm:h-60 md:h-72"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[3] h-[34%] bg-[linear-gradient(0deg,#050505_0%,rgba(5,5,5,0.92)_24%,rgba(5,5,5,0.58)_58%,rgba(5,5,5,0)_100%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-[4] h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.28),transparent)]"
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col md:min-h-[100dvh]">
        <HeroSection />
        <BenefitsSection />
      </div>
    </section>
  );
}