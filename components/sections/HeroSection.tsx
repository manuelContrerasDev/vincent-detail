"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { siteConfig } from "@/content/site";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio en Vincent.Detail."
  );

  return (
    <section
      id="inicio"
      className="relative flex min-h-0 flex-1 overflow-hidden pt-[96px] md:pt-[104px]"
    >
      <div className="absolute inset-0">
        <Image
          src="/gallery/resultado-07.jpeg"
          alt="Vehículo con detailing automotriz realizado por Vincent.Detail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.58)_22%,rgba(0,0,0,0.76)_54%,rgba(0,0,0,0.90)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,213,138,0.10),transparent_28%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(180deg,rgba(0,0,0,0.86),rgba(0,0,0,0.38),rgba(0,0,0,0))] md:h-72"
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.35, scale: 1 }}
        animate={{ opacity: 0.52, scale: 1.03 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,213,138,0.08),transparent_42%)]"
      />

      <SectionContainer className="relative flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center py-10 text-center md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative mb-5 h-[72px] w-[72px] overflow-hidden rounded-full border border-white/10 bg-black/20 shadow-2xl shadow-black/30 backdrop-blur-md md:mb-7 md:h-[88px] md:w-[88px]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
            />
            <Image
              src="/images/logo/logo-vincent-detail-negro.png"
              alt={siteConfig.name}
              fill
              priority
              sizes="(max-width: 767px) 72px, 88px"
              className="rounded-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D6B25E] md:text-[12px] md:tracking-[0.30em]"
          >
            Auto detailing premium
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-[family:var(--font-orbitron)] mt-4 text-[2rem] font-semibold uppercase leading-[0.98] tracking-[0.05em] text-[#f7f3eb] sm:text-[2.5rem] md:mt-5 md:text-[3.3rem] lg:text-[4rem]"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-[family:var(--font-rajdhani)] mt-4 bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)] bg-clip-text text-[14px] font-medium uppercase tracking-[0.12em] text-transparent md:mt-5 md:text-[17px] md:tracking-[0.16em]"
          >
            Corrección, protección y terminación
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 max-w-2xl text-[14px] leading-7 text-white/75 md:mt-7 md:text-[15px] md:leading-8"
          >
            Servicios de detailing automotriz enfocados en limpieza profunda,
            brillo, corrección visual y una presentación cuidada para cada
            vehículo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center sm:gap-4"
          >
            <CTAButton
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family:var(--font-rajdhani)] sm:min-w-[220px]"
            >
              Cotizar ahora
            </CTAButton>

            <CTAButton
              href="#packs"
              variant="secondary"
              className="font-[family:var(--font-rajdhani)] border-white/20 bg-black/20 backdrop-blur-sm sm:min-w-[180px]"
            >
              Ver packs
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-7 md:mt-9"
          >
            <p className="font-[family:var(--font-rajdhani)] text-[10px] font-medium uppercase tracking-[0.16em] text-[#D6B25E] md:text-[11px] md:tracking-[0.22em]">
              Detailing · servicio profesional · atención personalizada
            </p>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}