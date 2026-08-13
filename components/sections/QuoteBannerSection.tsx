"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Camera, Crosshair, MapPin } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { premiumEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const diagnosisData = [
  {
    label: "Fotos",
    description: "Interior y exterior",
    icon: Camera,
  },
  {
    label: "Comuna",
    description: "Validamos cobertura",
    icon: MapPin,
  },
  {
    label: "Objetivo",
    description: "Resultado que buscas",
    icon: Crosshair,
  },
] as const;

export function QuoteBannerSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero saber qué servicio necesita mi vehículo. Puedo enviar fotos, mi comuna y el resultado que busco.",
  );

  return (
    <SectionShell
      ariaLabel="Diagnóstico para recomendar un servicio"
      tone="deep"
      ambient="center"
      compact
    >
      <motion.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.46, ease: premiumEase }}
        className="relative overflow-hidden py-4 sm:py-5 lg:py-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.065] blur-[82px]"
        />

        <div className="mx-auto w-full max-w-6xl">
          <div
            className={cn(
              "group relative overflow-hidden rounded-[1.5rem] border border-white/[0.09]",
              "bg-[linear-gradient(145deg,rgba(255,255,255,0.052),rgba(255,255,255,0.013)_38%,rgba(5,5,5,0.96)_100%)]",
              "px-4 py-5 shadow-[0_20px_54px_rgba(0,0,0,0.28)] backdrop-blur-2xl",
              "transition-[transform,border-color,box-shadow] duration-400 ease-[var(--ease-premium)]",
              "motion-safe:hover:-translate-y-0.5",
              "hover:border-[var(--accent-bright)]/24",
              "hover:shadow-[0_26px_66px_rgba(0,0,0,0.34),0_0_24px_rgba(225,184,93,0.035)]",
              "sm:rounded-[1.65rem] sm:px-6 sm:py-6",
              "lg:px-7 lg:py-6",
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/34 to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[var(--accent)]/[0.085] blur-[60px]"
            />

            <div className="relative flex flex-col items-center gap-5 text-center lg:grid lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:items-center lg:gap-8 lg:text-left">
              <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
                <div className="flex items-center justify-center gap-2.5 lg:justify-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)] shadow-[0_0_12px_rgba(246,217,141,0.5)]" />

                  <p className="font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent-bright)] sm:text-[12px] lg:text-[13px]">
                    Diagnóstico express
                  </p>
                </div>

                <h2 className="mt-3 max-w-[14ch] font-[family:var(--font-heading)] text-[1.9rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.15rem] lg:text-[2.4rem]">
                  Antes de cotizar
                </h2>

                <p className="mt-2.5 max-w-md text-[13px] leading-5.5 text-white/58 sm:text-[14px] sm:leading-6 lg:text-[15px]">
                  Te orientamos según el estado real de tu vehículo.
                </p>
              </div>

              <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3 lg:mx-0 lg:max-w-none lg:items-stretch">
                <ul className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {diagnosisData.map(({ label, description, icon: Icon }) => (
                    <li
                      key={label}
                      className={cn(
                        "group/item flex min-h-[5.5rem] items-center gap-3 rounded-[1rem] border border-white/[0.075]",
                        "bg-white/[0.018] px-3.5 py-3.5 text-left",
                        "transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                        "motion-safe:hover:-translate-y-0.5",
                        "hover:border-[var(--accent-bright)]/22 hover:bg-[var(--accent)]/[0.04]",
                        "hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)]",
                        "sm:flex-col sm:justify-center sm:gap-2.5 sm:text-center",
                        "lg:flex-row lg:justify-start lg:text-left",
                      )}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.022] text-[var(--accent-bright)] transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-premium)] group-hover/item:scale-[1.04] group-hover/item:border-[var(--accent-bright)]/26 group-hover/item:bg-[var(--accent)]/[0.07]">
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4"
                          strokeWidth={1.8}
                        />
                      </span>

                      <div className="min-w-0 sm:text-center lg:text-left">
                        <p className="font-[family:var(--font-accent)] text-[12px] font-semibold uppercase tracking-[0.07em] text-white/90 sm:text-[13px]">
                          {label}
                        </p>

                        <p className="mt-0.5 text-[11px] leading-4 text-white/42 sm:text-[11.5px] lg:truncate">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingEvent="contact_click"
                  trackingLabel="Diagnóstico express - WhatsApp"
                  trackingSection="quote_banner"
                  variant="ghost"
                  className={cn(
                    "group/cta mx-auto min-h-12 w-full max-w-2xl justify-between rounded-full lg:mx-0 lg:max-w-none",
                    "border border-[var(--accent-bright)]/30 bg-[var(--accent)]/[0.075] px-5",
                    "text-[11px] font-semibold tracking-[0.095em] text-[var(--accent-bright)]",
                    "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                    "hover:border-[var(--accent-bright)]/48 hover:bg-[var(--accent)]/[0.13] hover:text-[var(--accent-highlight)]",
                    "hover:shadow-[0_12px_30px_rgba(0,0,0,0.18),0_0_18px_rgba(225,184,93,0.045)]",
                    "sm:text-[12px]",
                  )}
                >
                  Solicitar recomendación
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </SectionShell>
  );
}
