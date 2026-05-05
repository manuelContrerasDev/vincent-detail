"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { ArrowUpRight, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const softTransition: Transition = {
  duration: 0.52,
  ease: premiumEase,
};

const trustItems = [
  {
    label: "A domicilio",
    icon: MapPin,
  },
  {
    label: "Protección",
    icon: ShieldCheck,
  },
  {
    label: "Cotización directa",
    icon: MessageCircle,
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio en Vincent.Detail."
  );

  const [brandPrimary, brandSecondary = ""] = siteConfig.name.includes(".")
    ? siteConfig.name.split(".")
    : [siteConfig.name, ""];

  return (
    <section
      id="inicio"
      className="relative flex min-h-0 flex-1 overflow-hidden pt-[76px] sm:pt-[86px] md:pt-[104px]"
    >
      <SectionContainer className="relative flex min-h-0 flex-1 items-center">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="mx-auto grid w-full max-w-6xl items-center gap-6 px-3 py-5 text-center sm:py-7 md:py-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-12 lg:text-left"
        >
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUpVariants}
              transition={softTransition}
              className="inline-flex items-center justify-center lg:justify-start"
            >
              <span className="font-[family:var(--font-orbitron)] text-[14px] font-semibold tracking-[0.06em] sm:text-[15px]">
                <span className="bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3EB_48%,#D8D0C2_100%)] bg-clip-text text-transparent">
                  {brandPrimary}
                </span>

                {brandSecondary ? (
                  <>
                    <span className="mx-[1px] bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_48%,#A97B1E_100%)] bg-clip-text text-[1.08em] text-transparent drop-shadow-[0_0_10px_rgba(214,178,94,0.35)]">
                      .
                    </span>

                    <span className="bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_45%,#A97B1E_100%)] bg-clip-text text-transparent">
                      {brandSecondary}
                    </span>
                  </>
                ) : null}
              </span>
            </motion.div>

            <motion.h1
              variants={shouldReduceMotion ? undefined : scaleInVariants}
              transition={{
                duration: 0.62,
                ease: premiumEase,
              }}
              className="mt-5 max-w-[340px] font-[family:var(--font-heading)] text-[34px] font-bold uppercase leading-[0.98] tracking-[-0.045em] text-[#F7F3EB] drop-shadow-[0_8px_28px_rgba(0,0,0,0.88)] sm:max-w-[560px] sm:text-[50px] md:max-w-3xl md:text-[62px] lg:text-[70px] xl:text-[78px]"
            >
              Detailing premium
              <span className="block bg-[linear-gradient(135deg,#FFF3BF_0%,#F2D58A_26%,#D6B25E_58%,#A97B1E_100%)] bg-clip-text text-transparent">
                para tu vehículo
              </span>
            </motion.h1>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
              animate={
                shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }
              }
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: premiumEase,
              }}
              className="mt-5 h-px w-28 origin-center bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.95),transparent)] shadow-[0_0_18px_rgba(214,178,94,0.28)] sm:w-36 lg:origin-left"
            />

            <motion.p
              variants={shouldReduceMotion ? undefined : fadeUpVariants}
              transition={softTransition}
              className="mt-6 max-w-[340px] text-[15px] leading-7 text-white/82 drop-shadow-[0_2px_12px_rgba(0,0,0,0.74)] sm:max-w-xl sm:text-[16px] sm:leading-8 md:max-w-[640px]"
            >
              Limpieza, protección y terminación profesional para elevar la
              presencia de tu vehículo
            </motion.p>

            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUpVariants}
              transition={softTransition}
              className="mt-7 grid w-full max-w-[340px] grid-cols-2 gap-2 sm:max-w-[420px] sm:gap-3"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="min-w-0"
              >
                <CTAButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingLabel="Hero - Cotizar por WhatsApp"
                  trackingSection="hero"
                  className="min-h-[44px] w-full px-3 py-2 text-[11px] tracking-[0.10em] sm:min-h-[48px] sm:text-[12px]"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="mr-1.5 h-4 w-4"
                  />
                  Cotizar
                </CTAButton>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="min-w-0"
              >
                <CTAButton
                  href="#packs"
                  variant="secondary"
                  trackingEvent="pack_click"
                  trackingLabel="Hero - Ver packs"
                  trackingSection="hero"
                  className="min-h-[44px] w-full border-white/20 bg-black/25 px-3 py-2 text-[11px] tracking-[0.10em] backdrop-blur-sm sm:min-h-[48px] sm:text-[12px]"
                >
                  Ver packs
                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-1.5 h-4 w-4"
                  />
                </CTAButton>
              </motion.div>
            </motion.div>

            <motion.ul
              variants={shouldReduceMotion ? undefined : fadeUpVariants}
              transition={softTransition}
              className="mt-5 hidden max-w-[360px] flex-wrap justify-center gap-2 sm:flex sm:max-w-xl lg:justify-start"
            >
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/26 px-3 py-1.5 font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.10em] text-white/76 shadow-[0_8px_22px_rgba(0,0,0,0.16)] backdrop-blur-sm sm:text-[12px]">
                      <Icon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[#F2D58A]"
                      />
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          <motion.aside
            variants={shouldReduceMotion ? undefined : scaleInVariants}
            transition={{
              duration: 0.62,
              delay: 0.12,
              ease: premiumEase,
            }}
            className="hidden w-full max-w-[360px] lg:mr-0 lg:block"
            aria-label="Resumen del servicio"
          >
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/28 p-5 text-left shadow-[0_18px_54px_rgba(0,0,0,0.30)] ring-1 ring-white/[0.03] backdrop-blur-md">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.14),transparent_42%)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.34),transparent)]"
              />

              <div className="relative z-10">
                <h2 className="font-[family:var(--font-heading)] text-[28px] font-bold uppercase leading-[1.02] tracking-[-0.03em] text-[#F7F3EB]">
                  Servicio a domicilio
                </h2>

                <p className="mt-3 text-[15px] leading-7 text-white/68">
                  Atención personalizada en El Monte y alrededores, con
                  cotización directa por WhatsApp.
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-[1.1rem] border border-white/10 bg-black/28 p-3.5">
                    <p className="font-[family:var(--font-rajdhani)] text-[11px] font-bold uppercase tracking-[0.14em] text-[#D6B25E]">
                      Zona
                    </p>

                    <p className="mt-1 font-[family:var(--font-rajdhani)] text-[16px] font-bold uppercase tracking-[0.03em] text-[#F7F3EB]">
                      El Monte y alrededores
                    </p>
                  </div>

                  <div className="rounded-[1.1rem] border border-white/10 bg-black/28 p-3.5">
                    <p className="font-[family:var(--font-rajdhani)] text-[11px] font-bold uppercase tracking-[0.14em] text-[#D6B25E]">
                      Atención
                    </p>

                    <p className="mt-1 font-[family:var(--font-rajdhani)] text-[16px] font-bold uppercase tracking-[0.03em] text-[#F7F3EB]">
                      Directa y personalizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </SectionContainer>
    </section>
  );
}