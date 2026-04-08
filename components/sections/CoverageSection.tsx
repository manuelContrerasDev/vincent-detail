"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Clock3, Route, ShieldCheck } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const primaryZones = [
  "Región Metropolitana",
  "Buin",
  "Isla de Maipo",
  "Talagante",
];

const secondaryZones = [
  "Zona Sur",
  "Melipilla",
  "Maipo",
  "Champa",
  "Rancagua",
];

const routeStops = [
  { label: "RM", top: "12%", left: "14%" },
  { label: "Buin", top: "28%", left: "38%" },
  { label: "Talagante", top: "48%", left: "28%" },
  { label: "Maipo", top: "66%", left: "58%" },
  { label: "Rancagua", top: "82%", left: "74%" },
];

export function CoverageSection() {
  return (
    <section
      id="cobertura"
      className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-16 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,213,138,0.06),transparent_18%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Cobertura"
              title="Localidades"
              description="Cobertura activa con coordinación previa."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.45rem] border border-white/10 bg-white/3 p-4 md:p-5 backdrop-blur-sm"
          >
            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
              Servicio a Domicilio
            </p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42 }}
            className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-black/15 p-5 md:p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.08),transparent_26%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.14),rgba(169,123,30,0.12))]">
                <Route className="h-5 w-5 text-[#F2D58A]" />
              </div>

              <div>
                <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.20em] text-[#D6B25E]">
                  Ruta
                </p>
                <h3 className="font-[family:var(--font-rajdhani)] mt-1 text-[1.2rem] font-semibold uppercase tracking-[0.04em] text-[#f7f3eb] md:text-[1.35rem]">
                  Cobertura activa
                </h3>
              </div>
            </div>

            <div className="relative mt-5 h-[300px] overflow-hidden rounded-[1.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] md:h-[340px]">
              <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path
                  d="M14,12 C22,20 28,22 38,28 C45,34 34,42 28,48 C20,56 42,60 58,66 C68,70 70,74 74,82"
                  fill="none"
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M14,12 C22,20 28,22 38,28 C45,34 34,42 28,48 C20,56 42,60 58,66 C68,70 70,74 74,82"
                  fill="none"
                  stroke="rgba(242,213,138,0.78)"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeDasharray="6 5"
                  animate={{
                    pathLength: [0, 1, 1],
                    opacity: [0.35, 1, 1],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatDelay: 0.45,
                    ease: "easeInOut",
                  }}
                />
              </svg>

              {routeStops.map((stop, index) => (
                <motion.div
                  key={stop.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="absolute"
                  style={{ top: stop.top, left: stop.left }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0, 0.35] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 rounded-full border border-[#F2D58A]/30"
                    />
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#F2D58A]/20 bg-black/55 backdrop-blur-sm">
                      <MapPin className="h-4 w-4 text-[#F2D58A]" />
                    </div>
                    <span className="font-[family:var(--font-rajdhani)] absolute left-1/2 top-9 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                      {stop.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: 0.06 }}
            className="relative overflow-hidden rounded-[1.65rem] border border-white/10"
          >
            <div className="absolute inset-0">
              <Image
                src="/gallery/coverage-bg.png"
                alt="Vincent Detail Tundra mobile detail"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.52),rgba(0,0,0,0.56),rgba(0,0,0,0.82))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.12),transparent_24%)]" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.14),rgba(169,123,30,0.12))] backdrop-blur-sm">
                    <ShieldCheck className="h-5 w-5 text-[#F2D58A]" />
                  </div>

                  <div>
                    <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.20em] text-[#D6B25E]">
                      Cobertura flexible
                    </p>
                    <h3 className="font-[family:var(--font-rajdhani)] mt-1 text-[1.2rem] font-semibold uppercase tracking-[0.04em] text-[#f7f3eb] md:text-[1.35rem]">
                      Servicio a domicilio
                    </h3>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/28 p-4 backdrop-blur-sm">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                    Zonas principales
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {primaryZones.map((zone) => (
                      <span
                        key={zone}
                        className="font-[family:var(--font-rajdhani)] rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/84"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-black/24 p-4 backdrop-blur-sm py-2">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                    Cobertura extendida
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {secondaryZones.map((zone) => (
                      <span
                        key={zone}
                        className="font-[family:var(--font-rajdhani)] rounded-full border border-white/10 bg-black/18 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white/72"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.2rem] border border-white/10 bg-black/28 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Route className="h-4 w-4 text-[#F2D58A]" />
                    <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E]">
                      Atención
                    </p>
                  </div>
                  <p className="mt-2 font-[family:var(--font-rajdhani)] text-[0.98rem] font-semibold uppercase tracking-[0.04em] text-[#f7f3eb]">
                    Coordinada
                  </p>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-black/28 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#F2D58A]" />
                    <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E]">
                      Confirmación
                    </p>
                  </div>
                  <p className="mt-2 font-[family:var(--font-rajdhani)] text-[0.98rem] font-semibold uppercase tracking-[0.04em] text-[#f7f3eb]">
                    Previa
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </SectionContainer>
    </section>
  );
}