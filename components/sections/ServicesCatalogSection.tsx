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
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.10),transparent_26%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,213,138,0.05),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.28),transparent)]"
      />

      <SectionContainer className="relative">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div id="services-heading">
            <SectionHeading
              eyebrow="Servicios"
              title="Servicios personalizados"
              description="Opciones puntuales para complementar el cuidado, terminación y protección de tu vehículo."
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-px w-full max-w-4xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.26),rgba(255,255,255,0.10),transparent)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.45 }}
          className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#080808] shadow-[0_18px_54px_rgba(0,0,0,0.38)] ring-1 ring-white/[0.03] md:mt-10"
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

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.46)_0%,rgba(5,5,5,0.34)_45%,rgba(5,5,5,0.56)_100%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.08),transparent_30%)]"
          />

          <div className="relative z-10">
            <ul className="divide-y divide-white/10">
              {services.map((service, index) => {
                const whatsappHref = getWhatsAppUrl(
                  `Hola, quiero cotizar el servicio ${service.title} de Vincent.Detail.`
                );

                return (
                  <li key={service.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      className="group grid gap-4 bg-black/28 px-4 py-5 backdrop-blur-[1px] transition duration-300 hover:bg-black/40 sm:px-5 md:grid-cols-[1.2fr_0.55fr_0.65fr] md:items-center md:px-6"
                    >
                      <div className="min-w-0">
                        <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B25E]">
                          {service.tag}
                        </p>

                        <h3 className="mt-2 font-[family:var(--font-rajdhani)] text-[21px] font-bold uppercase leading-[1.05] tracking-[0.045em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] sm:text-[23px] md:text-[24px] lg:text-[26px]">
                          {service.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/78 sm:text-[14px] sm:leading-7 md:text-[15px]">
                          {service.description}
                        </p>
                      </div>

                      <div className="md:justify-self-start">
                        <span className="font-[family:var(--font-rajdhani)] inline-flex rounded-full border border-[#F2D58A]/20 bg-[#D6B25E]/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F2D58A] shadow-[0_8px_22px_rgba(0,0,0,0.22)] sm:text-[11px]">
                          {service.price}
                        </span>
                      </div>

                      <div className="md:justify-self-end">
                        <CTAButton
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          className="group/button w-full justify-between border-white/15 bg-black/28 px-4 py-3 font-[family:var(--font-rajdhani)] text-[11px] uppercase tracking-[0.12em] backdrop-blur-sm transition duration-300 hover:border-[#D6B25E]/35 hover:bg-[#D6B25E]/10 sm:text-[12px] md:w-auto"
                        >
                          Consultar
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                          />
                        </CTAButton>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/35 p-4 shadow-[0_12px_34px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.03] sm:p-5 md:mt-8"
        >
          <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E] sm:text-[11px]">
            Referencia
          </p>

          <p className="mt-2 text-[13px] leading-6 text-white/66 sm:text-sm">
            El valor final puede variar según tamaño, estado del vehículo y
            nivel de corrección requerido.
          </p>
        </motion.div>
      </SectionContainer>
    </section>
  );
}