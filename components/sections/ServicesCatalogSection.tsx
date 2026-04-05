"use client";

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
      className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.06),transparent_22%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Servicios"
              title="Servicios personalizados"
              description="Detalle técnico con valores base referenciales."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-[#D6B25E]">
              Detalle de servicios
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Servicios puntuales con referencia inicial de valor.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-12 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/10"
        >
          <div className="divide-y divide-white/10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid gap-4 px-5 py-5 transition duration-300 hover:bg-white/[0.02] md:grid-cols-[1.2fr_0.7fr_0.9fr] md:items-center md:px-6"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.20em] text-[#D6B25E]">
                    {service.tag}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#f7f3eb]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {service.description}
                  </p>
                </div>

                <div className="md:justify-self-start">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#F2D58A]">
                    {service.price}
                  </span>
                </div>

                <div className="md:justify-self-end">
                  <CTAButton
                    href={getWhatsAppUrl(`Hola, quiero cotizar el servicio ${service.title} de Vincent.Detail.`)}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    className="w-full justify-between md:w-auto"
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
          className="mt-10 rounded-[1.3rem] border border-white/10 bg-black/10 p-5 md:p-6"
        >
          <p className="text-xs uppercase tracking-[0.20em] text-[#D6B25E]">
            Referencia
          </p>
          <p className="mt-3 text-sm leading-7 text-white/70">
            Los valores pueden variar según vehículo y nivel de trabajo.
          </p>
        </motion.div>
      </SectionContainer>
    </section>
  );
}