"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ServicesCatalogSection() {
  return (
    <section
      id="servicios"
      className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-16 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.06),transparent_22%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Servicios"
              title="Servicios a medida"
              description="Opciones puntuales con referencia inicial según nivel de trabajo y tipo de vehículo."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.4rem] border border-white/10 bg-white/3 p-4 md:p-5 backdrop-blur-sm"
          >
            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D6B25E]">
              Catálogo base
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Valores referenciales sujetos a evaluación visual previa.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="relative mt-10 overflow-hidden rounded-[1.5rem] border border-white/10"
        >
          <div className="absolute inset-0">
            <Image
              src="/gallery/services-bg.png"
              alt="Detalle profesional automotriz"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.66),rgba(0,0,0,0.58),rgba(0,0,0,0.78))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.08),transparent_24%)]" />

          <div className="relative z-10 divide-y divide-white/10">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-4 bg-black/18 px-5 py-5 transition duration-300 hover:bg-black/32 md:grid-cols-[1.25fr_0.65fr_0.85fr] md:items-center md:px-6"
              >
                <div className="min-w-0">
                  <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                    {service.tag}
                  </p>

                  <h3 className="mt-2 font-[family:var(--font-rajdhani)] text-[1.12rem] font-bold uppercase tracking-[0.04em] text-[#f7f3eb] md:text-[1.3rem] lg:text-[1.4rem]">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/86 md:text-[15px]">
                    {service.description}
                  </p>
                </div>

                <div className="md:justify-self-start">
                  <span className="font-[family:var(--font-rajdhani)] inline-flex rounded-full border border-[#F2D58A]/20 bg-black/40 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#F2D58A] shadow-[0_0_0_1px_rgba(242,213,138,0.04)] md:text-[12px]">
                    {service.price}
                  </span>
                </div>

                <div className="md:justify-self-end">
                  <CTAButton
                    href={getWhatsAppUrl(`Hola, quiero cotizar el servicio ${service.title} de Vincent.Detail.`)}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="w-full justify-between border-white/15 bg-black/28 md:w-auto"
                  >
                    Consultar
                    <ArrowUpRight className="h-4 w-4" />
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-[1.25rem] border border-white/10 bg-black/10 p-4 md:p-5"
        >
          <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.20em] text-[#D6B25E]">
            Referencia
          </p>
          <p className="mt-2 text-sm leading-6 text-white/65">
            El valor final puede variar según tamaño, estado del vehículo y nivel de corrección requerido.
          </p>
        </motion.div>
      </SectionContainer>
    </section>
  );
}