"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Clock3,
  Compass,
  Home,
  MapPin,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const primaryZones = [
  "Región Metropolitana",
  "Buin",
  "Isla de Maipo",
  "Talagante",
];

const secondaryZones = ["Zona Sur", "Melipilla", "Maipo", "Champa", "Rancagua"];

const routeStops = [
  { label: "RM", top: "16%", left: "20%" },
  { label: "Buin", top: "34%", left: "43%" },
  { label: "Talagante", top: "52%", left: "30%" },
  { label: "Maipo", top: "66%", left: "58%" },
  { label: "Rancagua", top: "82%", left: "75%" },
];

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
        <div className="grid gap-6 text-center lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:text-left">
          <div id="coverage-heading">
            <SectionHeading
              eyebrow="Cobertura"
              title="Localidades"
            />
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto w-full max-w-xl rounded-[1.35rem] border border-[#D6B25E]/18 bg-black/35 p-4 text-center shadow-[0_14px_38px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.03] backdrop-blur-sm sm:p-5 lg:mx-0 lg:max-w-none lg:text-left"
          >
            <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D6B25E] sm:text-[11px]">
              Servicio a domicilio
            </p>

            <p className="mt-2 text-[13px] leading-6 text-white/68 sm:text-sm">
              Atención coordinada para confirmar traslado, factibilidad y
              condiciones del trabajo antes de agendar.
            </p>
          </motion.div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-px w-full max-w-4xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.26),rgba(255,255,255,0.10),transparent)]"
        />

        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_18px_54px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.03]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.12),transparent_32%)]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.24),transparent)]"
            />

            <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-b border-white/10 bg-black/35 p-4 text-center backdrop-blur-sm sm:flex-row sm:text-left md:p-6">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D6B25E]/20 bg-[#D6B25E]/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
                  <Compass
                    aria-hidden="true"
                    className="h-5 w-5 text-[#F2D58A]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E] sm:text-[11px]">
                    Mapa referencial
                  </p>

                  <h3 className="font-[family:var(--font-rajdhani)] mt-1 text-[21px] font-bold uppercase leading-[1.05] tracking-[0.045em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] sm:text-[23px] md:text-[26px]">
                    Zonas de atención
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-[#D6B25E]/18 bg-[#D6B25E]/10 px-3 py-2 font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F2D58A]">
                Referencial
              </span>
            </div>

            <div className="relative h-[340px] overflow-hidden bg-[#050505] sm:h-[390px] lg:h-[520px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:34px_34px] opacity-28"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,178,94,0.12),transparent_48%)]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.02)_48%,rgba(5,5,5,0.32)_100%)]"
              />

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M17,16 C29,20 34,27 44,34 C53,41 35,47 29,55 C22,64 45,67 59,72 C68,76 71,80 77,86"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />

                <motion.path
                  d="M17,16 C29,20 34,27 44,34 C53,41 35,47 29,55 C22,64 45,67 59,72 C68,76 71,80 77,86"
                  fill="none"
                  stroke="rgba(242,213,138,0.90)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="5 5"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { pathLength: 0, opacity: 0.45 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { pathLength: 1, opacity: 1 }
                  }
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              </svg>

              {routeStops.map((stop, index) => (
                <motion.div
                  key={stop.label}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }
                  }
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }
                  }
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="absolute z-10"
                  style={{ top: stop.top, left: stop.left }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-[#F2D58A]/30 bg-[#D6B25E]/10 blur-[1px]"
                    />

                    <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#F2D58A]/28 bg-black/62 shadow-[0_10px_28px_rgba(0,0,0,0.38)] backdrop-blur-sm">
                      <MapPin
                        aria-hidden="true"
                        className="h-4 w-4 text-[#F2D58A]"
                      />
                    </div>

                    <span className="font-[family:var(--font-rajdhani)] absolute left-1/2 top-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/62 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/84 shadow-[0_8px_18px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                      {stop.label}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div className="absolute bottom-3 left-3 right-3 z-20 rounded-[1.15rem] border border-white/10 bg-black/55 p-3 text-center shadow-[0_14px_36px_rgba(0,0,0,0.30)] backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:p-4 sm:text-left">
                <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B25E]">
                  Zona referencial
                </p>

                <p className="mt-1 text-[12px] leading-5 text-white/72 sm:text-[13px] sm:leading-6">
                  Región Metropolitana, Buin, Talagante, Isla de Maipo,
                  Melipilla, Maipo, Champa y Rancagua.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="relative min-h-[540px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_18px_54px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.03] lg:min-h-0"
          >
            <div className="absolute inset-0">
              <Image
                src="/gallery/coverage-bg.png"
                alt="Camioneta de Vincent.Detail para servicio de detailing automotriz a domicilio"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.42)_0%,rgba(5,5,5,0.54)_42%,rgba(5,5,5,0.86)_100%)]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.12),transparent_28%)]"
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-4 text-center sm:p-5 md:p-6 lg:text-left">
              <div>
                <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D6B25E]/20 bg-[#D6B25E]/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm">
                    <Navigation
                      aria-hidden="true"
                      className="h-5 w-5 text-[#F2D58A]"
                    />
                  </div>

                  <div>
                    <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E] sm:text-[11px]">
                      Cobertura flexible
                    </p>

                    <h3 className="font-[family:var(--font-rajdhani)] mt-1 text-[21px] font-bold uppercase leading-[1.05] tracking-[0.045em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] sm:text-[23px] md:text-[26px]">
                      Servicio a domicilio
                    </h3>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/35 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                    Zonas principales
                  </p>

                  <ul className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                    {primaryZones.map((zone) => (
                      <li key={zone}>
                        <span className="font-[family:var(--font-rajdhani)] rounded-full border border-[#D6B25E]/18 bg-[#D6B25E]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F7F3EB]">
                          {zone}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-black/30 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.20)] backdrop-blur-sm">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                    Cobertura extendida
                  </p>

                  <ul className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                    {secondaryZones.map((zone) => (
                      <li key={zone}>
                        <span className="font-[family:var(--font-rajdhani)] rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/74">
                          {zone}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-[1.25rem] border border-[#D6B25E]/16 bg-[#D6B25E]/8 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.20)] backdrop-blur-sm">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                    Detailing automotriz local
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-white/70 sm:text-sm">
                    Servicio de detailing automotriz en El Monte, Talagante,
                    Buin, Isla de Maipo, Melipilla y alrededores.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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

                        <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E]">
                          {item.label}
                        </p>
                      </div>

                      <p className="mt-2 font-[family:var(--font-rajdhani)] text-[15px] font-bold uppercase tracking-[0.04em] text-[#F7F3EB]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.article>
        </div>
      </SectionContainer>
    </section>
  );
}