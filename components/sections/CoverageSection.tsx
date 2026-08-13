"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock3, Home, MapPin, Navigation } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { premiumEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

const primaryZones = ["El Monte", "Talagante", "Buin", "Isla de Maipo"];

const secondaryZones = [
  "Melipilla",
  "Maipo",
  "Champa",
  "Rancagua",
  "Zona Sur RM",
];

export function CoverageSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const coverageWhatsAppUrl = getWhatsAppUrl(
    "Hola, quiero confirmar si Vincent Detail tiene cobertura a domicilio en mi comuna.",
  );

  return (
    <SectionShell
      id="cobertura"
      ariaLabelledBy="coverage-heading"
      tone="soft"
      ambient="left"
      compact
      topDivider
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(18rem,0.28fr)] lg:items-end">
        <div id="coverage-heading">
          <SectionHeading
            eyebrow="Cobertura"
            title="Llegamos hasta tu vehículo"
            description="Atención a domicilio"
          />
        </div>

        <div className="hidden items-center justify-end gap-2.5 text-white/48 lg:flex">
          <Home
            aria-hidden="true"
            className="h-4 w-4 text-[var(--accent-bright)]"
            strokeWidth={1.8}
          />

          <p className="font-[family:var(--font-accent)] text-[12px] font-semibold uppercase tracking-[0.14em]">
            Detailing móvil
          </p>
        </div>
      </div>

      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.14 }}
        transition={{ duration: 0.54, ease: premiumEase }}
        className={cn(
          "relative mt-8 rounded-[1.8rem] bg-gradient-to-br p-px",
          "from-white/[0.17] via-white/[0.055] to-[var(--accent)]/18",
          "shadow-[0_28px_88px_rgba(0,0,0,0.36),0_0_32px_rgba(225,184,93,0.035)]",
          "sm:rounded-[2rem]",
          "lg:mt-10 lg:rounded-[2.2rem]",
        )}
      >
        <div
          className={cn(
            "relative grid gap-2 overflow-hidden rounded-[calc(1.8rem-1px)]",
            "border border-white/[0.055] bg-[#050505]/88 p-2 backdrop-blur-2xl",
            "sm:rounded-[calc(2rem-1px)] sm:p-2.5",
            "lg:grid-cols-[minmax(0,1.35fr)_minmax(23rem,0.65fr)] lg:rounded-[calc(2.2rem-1px)]",
          )}
        >
          <div
            className={cn(
              "relative min-h-[20rem] overflow-hidden rounded-[1.4rem] bg-[#090909]",
              "sm:min-h-[26rem] sm:rounded-[1.65rem]",
              "lg:min-h-[36rem]",
            )}
          >
            <iframe
              title={`Ubicación base de ${siteConfig.name} en ${siteConfig.location}`}
              src={siteConfig.googleMapsEmbedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.14] contrast-[1.06] saturate-[0.90]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.01)_38%,rgba(0,0,0,0.74)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.01)_55%,rgba(5,5,5,0.30)_100%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/[0.08] ring-inset"
            />

            <div className="pointer-events-none absolute inset-x-3.5 bottom-3.5 sm:inset-x-5 sm:bottom-5">
              <div className="inline-flex max-w-full items-center gap-3 rounded-[1.05rem] border border-white/[0.14] bg-black/60 px-3.5 py-3 text-left shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:px-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent-bright)]/28 bg-[var(--accent)]/[0.10] text-[var(--accent-highlight)]">
                  <MapPin
                    aria-hidden="true"
                    className="h-4 w-4"
                    strokeWidth={1.8}
                  />
                </span>

                <span className="min-w-0">
                  <span className="block font-[family:var(--font-accent)] text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--accent-bright)] sm:text-[11px]">
                    Localidad
                  </span>

                  <span className="mt-1 block truncate text-[13px] font-medium text-white/84 sm:text-[14px]">
                    {siteConfig.address}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative flex flex-col justify-center overflow-hidden rounded-[1.4rem]",
              "border border-white/[0.055]",
              "bg-[linear-gradient(150deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015)_36%,rgba(5,5,5,0.94)_100%)]",
              "px-5 py-7",
              "sm:rounded-[1.65rem] sm:px-7 sm:py-8",
              "lg:px-8 lg:py-10",
              "xl:px-10",
            )}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent)]/[0.11] blur-[78px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/34 to-transparent"
            />

            <div className="relative text-center sm:text-left">
              <div className="flex items-center justify-center gap-2.5 sm:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-bright)] shadow-[0_0_12px_rgba(246,217,141,0.5)]" />

                <p className="font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent-bright)] sm:text-[12px] lg:text-[13px]">
                  Atención a domicilio
                </p>
              </div>

              <h3 className="mx-auto mt-4 max-w-[16ch] font-[family:var(--font-heading)] text-[2rem] font-semibold leading-[1] tracking-[-0.05em] text-white sm:mx-0 sm:text-[2.2rem] lg:text-[2.4rem]">
                Coordinamos según tu ubicación
              </h3>

              <div className="mt-7 border-y border-white/[0.08] py-5 sm:mt-8 sm:py-6">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div>
                    <p className="font-[family:var(--font-accent)] text-[10px] font-bold uppercase tracking-[0.14em] text-white/42 sm:text-[11px]">
                      Cobertura
                    </p>

                    <p className="mt-2.5 text-[14px] leading-6 text-white/80 sm:text-[15px]">
                      {primaryZones.join(" · ")}
                    </p>
                  </div>

                  <div>
                    <p className="font-[family:var(--font-accent)] text-[10px] font-bold uppercase tracking-[0.14em] text-white/42 sm:text-[11px]">
                      Previa coordinación
                    </p>

                    <p className="mt-2.5 text-[14px] leading-6 text-white/60 sm:text-[15px]">
                      {secondaryZones.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-white/54 sm:justify-start sm:text-[14px]">
                <span className="inline-flex items-center gap-2">
                  <Home
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--accent-bright)]"
                    strokeWidth={1.8}
                  />
                  Servicio móvil
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock3
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--accent-bright)]"
                    strokeWidth={1.8}
                  />
                  Agenda coordinada
                </span>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <CTAButton
                  href={coverageWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingEvent="contact_click"
                  trackingLabel="Cobertura - Confirmar comuna"
                  trackingSection="coverage"
                  variant="ghost"
                  className="min-h-12 w-full justify-between rounded-full border border-[var(--accent-bright)]/38 bg-[var(--accent)]/[0.09] px-5 py-3.5 text-[11px] tracking-[0.095em] text-[var(--accent-bright)] hover:border-[var(--accent-bright)]/58 hover:bg-[var(--accent)]/[0.15] hover:text-[var(--accent-highlight)] sm:w-auto sm:min-w-[230px] sm:text-[12px]"
                >
                  Confirmar cobertura
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </CTAButton>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.028] px-5 py-3 font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.11em] text-white/60 transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)] hover:-translate-y-px hover:border-[var(--accent-bright)]/20 hover:bg-white/[0.05] hover:text-white/86 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-bright)] sm:w-auto sm:text-[12px]"
                >
                  <Navigation aria-hidden="true" className="h-4 w-4" />
                  Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </SectionShell>
  );
}
