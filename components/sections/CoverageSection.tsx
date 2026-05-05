"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Clock3, Home, Navigation, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const primaryZones = [
  "Región Metropolitana",
  "Buin",
  "Isla de Maipo",
  "Talagante",
];

const secondaryZones = ["Zona Sur", "Melipilla", "Maipo", "Champa", "Rancagua"];

const coverageHighlights = [
  {
    label: "Modalidad",
    value: "A domicilio",
    icon: Home,
  },
  {
    label: "Agenda",
    value: "Coordinada",
    icon: Clock3,
  },
  {
    label: "Cobertura",
    value: "RM y alrededores",
    icon: ShieldCheck,
  },
];

export function CoverageSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="cobertura"
      aria-labelledby="coverage-heading"
      className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.10),transparent_26%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,213,138,0.05),transparent_30%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.28),transparent)]"
      />

      <SectionContainer className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div id="coverage-heading">
            <SectionHeading
              eyebrow="Cobertura"
              title="Localidades"
              description="Servicio de detailing automotriz a domicilio en El Monte, Talagante, Buin, Isla de Maipo y alrededores"
              align="center"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-px w-full max-w-4xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.26),rgba(255,255,255,0.10),transparent)]"
        />

        <div className="mt-8 lg:mt-10">
          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_18px_54px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.03]"
          >
            <div className="absolute inset-0">
              <Image
                src="/gallery/coverage-bg.png"
                alt="Camioneta de Vincent.Detail para servicio de detailing automotriz a domicilio"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.44)_0%,rgba(5,5,5,0.62)_48%,rgba(5,5,5,0.90)_100%)]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.13),transparent_30%)]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.26),transparent)]"
            />

            <div className="relative z-10 px-4 py-6 text-center sm:px-5 sm:py-7 md:p-7 lg:text-left">
              <div className="mx-auto w-full max-w-5xl lg:mx-0">
                <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D6B25E]/20 bg-[#D6B25E]/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <Navigation
                      aria-hidden="true"
                      className="h-5 w-5 text-[#F2D58A]"
                    />
                  </div>

                  <div>
                    <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
                      Cobertura flexible
                    </p>

                    <h3 className="font-[family:var(--font-rajdhani)] mt-1 text-[22px] font-bold uppercase leading-[1.05] tracking-[0.045em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] sm:text-[24px] md:text-[27px]">
                      Servicio a domicilio
                    </h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-white/10 bg-black/35 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                    <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                      Zonas principales
                    </p>

                    <ul className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                      {primaryZones.map((zone) => (
                        <li key={zone}>
                          <span className="font-[family:var(--font-rajdhani)] rounded-full border border-[#D6B25E]/18 bg-[#D6B25E]/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.10em] text-[#F7F3EB]">
                            {zone}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.25rem] border border-white/10 bg-black/30 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.20)] backdrop-blur-sm">
                    <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                      Cobertura extendida
                    </p>

                    <ul className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                      {secondaryZones.map((zone) => (
                        <li key={zone}>
                          <span className="font-[family:var(--font-rajdhani)] rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.10em] text-white/78">
                            {zone}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {coverageHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-[1.2rem] border border-white/10 bg-black/35 p-4 text-center shadow-[0_12px_28px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <Icon
                            aria-hidden="true"
                            className="h-4 w-4 text-[#F2D58A]"
                          />

                          <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D6B25E]">
                            {item.label}
                          </p>
                        </div>

                        <p className="mt-2 font-[family:var(--font-rajdhani)] text-[16px] font-bold uppercase tracking-[0.04em] text-[#F7F3EB]">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </SectionContainer>
    </section>
  );
}