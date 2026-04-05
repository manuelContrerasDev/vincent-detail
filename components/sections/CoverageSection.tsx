"use client";

import { motion } from "motion/react";
import { MapPin, CarFront, Clock3 } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const coverageZones = [
  "Región Metropolitana",
  "Zona Sur",
  "Buin",
  "Isla de Maipo",
  "Talagante",
  "Melipilla",
  "Maipo",
  "Champa",
  "Rancagua",
];

export function CoverageSection() {
  return (
    <section
      id="cobertura"
      className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,213,138,0.06),transparent_18%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Cobertura"
              title="Zonas de atención y coordinación"
              description="Cobertura actual del servicio."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B25E]">
              Atención
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              La disponibilidad se confirma según servicio y ubicación.
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42 }}
            className="rounded-[1.75rem] border border-white/10 bg-black/10 p-6 md:p-7"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.14),rgba(169,123,30,0.12))]">
                <MapPin className="h-5 w-5 text-[#F2D58A]" />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-[#D6B25E]">
                  Zonas
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#f7f3eb]">
                  Cobertura actual
                </h3>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {coverageZones.map((zone, index) => (
                <motion.span
                  key={zone}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 transition duration-300 hover:border-[#D6B25E]/20 hover:bg-white/[0.05]"
                >
                  {zone}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#D6B25E]/15 hover:bg-white/[0.04]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <CarFront className="h-4 w-4 text-[#F2D58A]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#f7f3eb]">
                Atención coordinada
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Se coordina según servicio, tiempo y ubicación.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#D6B25E]/15 hover:bg-white/[0.04]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <Clock3 className="h-4 w-4 text-[#F2D58A]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#f7f3eb]">
                Confirmación previa
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Consulta por WhatsApp para confirmar disponibilidad.
              </p>
            </motion.article>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}