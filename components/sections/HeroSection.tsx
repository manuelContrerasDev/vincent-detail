"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/content/site";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative -mt-[88px] overflow-hidden pb-20 pt-[148px] lg:-mt-[88px] lg:pb-28 lg:pt-[196px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/gallery/resultado-07.jpeg"
          alt="Detalle automotriz Vincent.Detail"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.54)_20%,rgba(0,0,0,0.74)_52%,rgba(0,0,0,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,213,138,0.10),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-72 md:h-80 bg-[linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.34),rgba(0,0,0,0))]" />

      <motion.div
        initial={{ opacity: 0.35, scale: 1 }}
        animate={{ opacity: 0.52, scale: 1.03 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,213,138,0.08),transparent_42%)]"
      />

      <SectionContainer className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative mb-6 h-[84px] w-[84px] overflow-hidden rounded-full border border-white/10 bg-black/20 shadow-2xl shadow-black/30 backdrop-blur-md md:mb-8 md:h-[104px] md:w-[104px]"
          >
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            <Image
              src="/logo/logo-vincent-detail-negro.png"
              alt={siteConfig.name}
              fill
              priority
              className="rounded-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-xs uppercase tracking-[0.30em] text-[#D6B25E] md:text-sm md:tracking-[0.34em]"
          >
            Detailing automotriz
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 text-5xl font-semibold leading-[0.96] tracking-tight text-[#f7f3eb] md:text-7xl lg:text-[5.2rem]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)] bg-clip-text text-base text-transparent md:mt-5 md:text-xl"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[15px] leading-7 text-white/75 md:mt-8 md:text-lg md:leading-8"
          >
            Servicios de detailing para limpieza, corrección y protección
            con una presentación cuidada y profesional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
          >
            <CTAButton
              href={getWhatsAppUrl("Hola, quiero cotizar un servicio en Vincent.Detail.")}
              target="_blank"
              rel="noreferrer"
              className="sm:min-w-[220px]"
            >
              Cotizar ahora
            </CTAButton>

            <CTAButton
              href="#packs"
              variant="secondary"
              className="border-white/20 bg-black/20 backdrop-blur-sm sm:min-w-[180px]"
            >
              Ver packs
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 md:mt-10"
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#D6B25E] md:text-xs md:tracking-[0.28em]">
              Detailing · Servicio profesional · Atención personalizada
            </p>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}