"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
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

const softTransition: Transition = {
  duration: 0.52,
  ease: premiumEase,
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio en Vincent.Detail."
  );

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
          className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-3 py-7 text-center sm:py-9 md:py-12 lg:py-14"
        >
          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUpVariants}
            transition={softTransition}
            className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D6B25E] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:text-[11px] sm:tracking-[0.3em] md:text-[12px] md:tracking-[0.34em]"
          >
            Auto detailing premium
          </motion.p>

          <motion.h1
            variants={
              shouldReduceMotion
                ? undefined
                : {
                    hidden: { opacity: 0, y: 22, scale: 0.985 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }
            }
            transition={{
              duration: 0.62,
              ease: premiumEase,
            }}
            className="mt-5 max-w-[355px] font-[family:var(--font-rajdhani)] text-[28px] font-semibold uppercase leading-[1.04] tracking-[0.08em] text-[#F3F1EC] drop-shadow-[0_5px_20px_rgba(0,0,0,0.92)] sm:max-w-[590px] sm:text-[36px] md:mt-6 md:max-w-3xl md:text-[46px] lg:text-[56px]"
          >
            Brillo,
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      textShadow: [
                        "0 0 10px rgba(214,178,94,0.18)",
                        "0 0 22px rgba(214,178,94,0.34)",
                        "0 0 10px rgba(214,178,94,0.18)",
                      ],
                    }
              }
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-2 inline-block bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_48%,#A97B1E_100%)] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(214,178,94,0.28)]"
            >
              protección
            </motion.span>
            y terminación
          </motion.h1>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.72,
              delay: 0.34,
              ease: premiumEase,
            }}
            className="mt-5 h-px w-28 origin-center bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.95),transparent)] shadow-[0_0_18px_rgba(214,178,94,0.32)] sm:w-36 md:mt-6"
          />

          <motion.p
            variants={shouldReduceMotion ? undefined : fadeUpVariants}
            transition={softTransition}
            className="mt-8 max-w-[340px] px-2 text-[14px] leading-7 text-white/84 drop-shadow-[0_2px_12px_rgba(0,0,0,0.78)] sm:mt-9 sm:max-w-xl sm:text-[15px] sm:leading-8 md:max-w-2xl md:text-[16px]"
          >
            Detailing exterior e interior para recuperar brillo, proteger la
            pintura y elevar la presentación de tu vehículo
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUpVariants}
            transition={softTransition}
            className="mt-8 grid w-full max-w-[320px] grid-cols-2 gap-2 px-2 sm:mt-9 sm:max-w-[400px] sm:gap-3 md:mt-10"
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
                className="font-[family:var(--font-rajdhani)] min-h-[42px] w-full px-3 py-2 text-[11px] tracking-[0.12em] sm:min-h-[44px] sm:text-[12px]"
              >
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
                className="font-[family:var(--font-rajdhani)] min-h-[42px] w-full border-white/20 bg-black/25 px-3 py-2 text-[11px] tracking-[0.12em] backdrop-blur-sm sm:min-h-[44px] sm:text-[12px]"
              >
                Ver packs
              </CTAButton>
            </motion.div>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUpVariants}
            transition={softTransition}
            className="mt-6 hidden sm:block md:mt-8"
          >
            <p className="font-[family:var(--font-rajdhani)] text-[10px] font-medium uppercase tracking-[0.2em] text-[#D6B25E] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] md:text-[11px] md:tracking-[0.26em]">
              Servicio profesional · atención personalizada
            </p>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}