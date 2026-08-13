"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, MessageCircle } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { QuickAccessCard } from "@/components/ui/QuickAccessCard";
import { heroContent } from "@/content/home";
import {
  fadeUp,
  scaleIn,
  softTransition,
  staggerContainer,
} from "@/lib/motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function HeroSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const whatsappHref = getWhatsAppUrl(heroContent.whatsappMessage);

  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-0 flex-1 items-center pb-8 pt-[calc(var(--scroll-offset)+1rem)] sm:pb-10 sm:pt-[calc(var(--scroll-offset)+1.25rem)] md:py-12 lg:py-0"
    >
      <SectionContainer>
        <motion.div
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className={`
            grid w-full items-center
            gap-9 sm:gap-10
            md:gap-10
            lg:grid-cols-[minmax(0,1.02fr)_minmax(400px,0.98fr)] lg:gap-11
            xl:grid-cols-[minmax(0,1.04fr)_minmax(440px,0.96fr)] xl:gap-14
            2xl:gap-16
          `}
        >
          <div className="mx-auto w-full max-w-3xl min-w-0 text-center lg:mx-0 lg:max-w-none lg:text-left">
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUp}
              transition={softTransition}
              className="flex items-center justify-center gap-2.5 lg:justify-start"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)] shadow-[0_0_14px_rgba(246,217,141,0.56)]"
              />

              <p className="font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.17em] text-[var(--accent-bright)] sm:text-[12px] lg:text-[13px]">
                {heroContent.eyebrow}
              </p>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={shouldReduceMotion ? undefined : fadeUp}
              transition={softTransition}
              className={`
                mx-auto mt-4 max-w-[11ch]
                text-[clamp(2.75rem,12vw,4.35rem)]
                font-semibold leading-[0.92] tracking-[-0.068em]
                text-[var(--text-primary)]
                drop-shadow-[0_14px_38px_rgba(0,0,0,0.58)]
                sm:mt-5 sm:max-w-[12ch] sm:text-[clamp(3.35rem,8vw,4.9rem)]
                md:max-w-[12ch] md:text-[clamp(3.6rem,7vw,4.6rem)]
                lg:mx-0 lg:max-w-[720px] lg:text-[clamp(4.45rem,6.4vw,6.2rem)]
                xl:max-w-[760px]
              `}
            >
              {heroContent.title}

              <span className="accent-text block">
                {heroContent.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={shouldReduceMotion ? undefined : fadeUp}
              transition={softTransition}
              className={`
                mx-auto mt-5 max-w-[34rem] text-pretty
                text-[15px] leading-7 text-[var(--text-secondary)]
                drop-shadow-[0_3px_16px_rgba(0,0,0,0.68)]
                sm:text-[16px]
                md:max-w-[38rem] md:text-[16px] md:leading-7
                lg:mx-0 lg:mt-6 lg:max-w-[510px] lg:text-[18px] lg:leading-8
              `}
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUp}
              transition={softTransition}
              className={`
                mx-auto mt-6 flex w-full max-w-xl flex-col
                items-stretch justify-center gap-2.5
                sm:mt-7 sm:flex-row sm:items-center sm:gap-3
                md:max-w-[36rem]
                lg:mx-0 lg:max-w-none lg:justify-start
              `}
            >
              <CTAButton
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                trackingEvent="hero_cta_click"
                trackingLabel="Hero - Cotizar por WhatsApp"
                trackingSection="hero"
                className="w-full justify-center px-6 sm:w-auto sm:min-w-[225px] lg:w-auto"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                {heroContent.primaryCta}
              </CTAButton>

              <CTAButton
                href="#packs"
                variant="secondary"
                trackingEvent="navigation_click"
                trackingLabel="Hero - Explorar servicios"
                trackingSection="hero"
                className="w-full justify-center px-6 sm:w-auto lg:w-auto"
              >
                Explorar
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </CTAButton>
            </motion.div>
          </div>

          <motion.div
            variants={shouldReduceMotion ? undefined : scaleIn}
            transition={softTransition}
            className={`
              relative mx-auto w-full max-w-[42rem]
              sm:max-w-[46rem]
              md:max-w-[46rem]
              lg:mx-0 lg:max-w-none lg:self-center lg:pl-1
              xl:pl-2
            `}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-[4%] -inset-y-[8%] -z-10 rounded-[2.4rem] bg-[radial-gradient(ellipse_at_center,rgba(225,184,93,0.115),rgba(225,184,93,0.035)_42%,transparent_72%)] blur-[24px] sm:-inset-x-[6%] sm:-inset-y-[10%] md:opacity-90 lg:blur-[30px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[12%] -top-px h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/30 to-transparent"
            />

            <QuickAccessCard />
          </motion.div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
