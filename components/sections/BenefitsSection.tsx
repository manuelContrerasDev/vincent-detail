"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";
import { microTransition, premiumEase } from "@/lib/motion";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const benefits = [
  "Packs de detailing",
  "Corrección de pintura",
  "Protección cerámica",
  "Interior y exterior",
  "Servicio a domicilio",
  "Atención personalizada",
] as const;

const marqueeItems = [...benefits, ...benefits];

export function BenefitsSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const certificationUrl =
    "https://www.instagram.com/3dcarcare?igsh=ajRwd2lvbHFpeHV3";

  return (
    <motion.section
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 8,
            }
      }
      animate={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      transition={{
        duration: 0.52,
        delay: 0.22,
        ease: premiumEase,
      }}
      className={cn(
        "relative shrink-0 overflow-hidden",
        "border-t border-white/[0.09]",
        "bg-[linear-gradient(180deg,rgba(9,9,8,0.78),rgba(5,5,5,0.94))]",
        "shadow-[0_-18px_52px_rgba(0,0,0,0.18)]",
        "backdrop-blur-[14px] backdrop-saturate-[1.08]",
      )}
      aria-label={`Certificación y especialidades de ${siteConfig.name}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/42 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-16 w-[70%] max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(225,184,93,0.075),transparent_68%)] blur-2xl"
      />

      <SectionContainer className="relative py-2.5 sm:py-3 lg:py-3.5">
        <div className="grid items-center gap-2.5 sm:gap-3 md:grid-cols-[auto_minmax(0,1fr)] md:gap-4 lg:gap-5">
          <motion.a
            href={certificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver certificación 3D Car Care en Instagram"
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={microTransition}
            onClick={() =>
              trackEvent("social_click", {
                label: "Certificación - 3D Car Care",
                section: "first-fold",
                href: certificationUrl,
              })
            }
            className={cn(
              "group mx-auto inline-flex min-h-10 items-center gap-2 rounded-full",
              "border border-white/[0.11] bg-black/24 py-1 pl-1 pr-3",
              "shadow-[0_8px_26px_rgba(0,0,0,0.22)] backdrop-blur-md",
              "transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
              "hover:-translate-y-px hover:border-[var(--accent)]/32",
              "hover:bg-[var(--accent)]/[0.055]",
              "hover:shadow-[0_10px_28px_rgba(0,0,0,0.25),0_0_18px_rgba(225,184,93,0.055)]",
              "md:mx-0",
            )}
          >
            <div
              className={cn(
                "relative h-8 w-8 shrink-0 overflow-hidden rounded-full",
                "border border-white/[0.13] bg-black",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
              )}
            >
              <Image
                src="/images/certificaciones/3dcarcare-certificacion.png"
                alt="Certificación 3D Car Care"
                fill
                sizes="32px"
                className="object-cover transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-[1.05]"
              />
            </div>

            <span
              className={cn(
                "inline-flex items-center gap-1.5 whitespace-nowrap",
                "font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.105em]",
                "text-white/82 transition-colors duration-300",
                "group-hover:text-[var(--accent-highlight)]",
                "sm:text-[12px] lg:text-[13px]",
              )}
            >
              <BadgeCheck
                aria-hidden="true"
                className="h-3.5 w-3.5 text-[var(--accent-bright)]"
                strokeWidth={1.8}
              />
              Certificado 3D Car Care
              <ExternalLink
                aria-hidden="true"
                className="h-3 w-3 text-white/34 transition-[transform,color] duration-300 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-[var(--accent-bright)]/70"
                strokeWidth={1.8}
              />
            </span>
          </motion.a>

          <div className="relative min-w-0 overflow-hidden md:border-l md:border-white/[0.09] md:pl-4 lg:pl-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-[linear-gradient(90deg,rgba(5,5,5,0.98),transparent)] sm:w-10 md:left-4 lg:left-5"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-[linear-gradient(270deg,rgba(5,5,5,0.98),transparent)] sm:w-10"
            />

            <div className="marquee-track whitespace-nowrap py-1">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-3 inline-flex items-center gap-4 sm:mx-4 sm:gap-5 lg:mx-5 lg:gap-6"
                >
                  <span
                    className={cn(
                      "font-[family:var(--font-accent)]",
                      "text-[11px] font-semibold uppercase tracking-[0.115em]",
                      "text-white/68",
                      "drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]",
                      "sm:text-[12px] lg:text-[13px]",
                    )}
                  >
                    {item}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-[var(--accent-bright)]/72 shadow-[0_0_8px_rgba(246,217,141,0.22)]"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </motion.section>
  );
}
