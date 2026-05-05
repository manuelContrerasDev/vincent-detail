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
      aria-labelledby="services-heading"
      className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.10),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,213,138,0.045),transparent_30%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.28),transparent)]"
      />

      <SectionContainer className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div id="services-heading">
            <SectionHeading
              eyebrow="Servicios"
              title="Servicios personalizados"
              description="Complementos para elevar el cuidado, la terminación y la protección de tu vehículo"
              align="center"
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-8 h-px w-full max-w-4xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.24),rgba(255,255,255,0.10),transparent)]"
        />

        <div className="mt-8 md:mt-10">
          <ul className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const whatsappHref = getWhatsAppUrl(
                `Hola, quiero cotizar el servicio ${service.title} de Vincent.Detail.`
              );

              return (
                <li key={service.title} className="h-full">
                  <motion.article
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.42, delay: index * 0.04 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#090909]/92 p-5 text-center shadow-[0_16px_46px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D6B25E]/30 hover:bg-[#0d0d0d] hover:shadow-[0_24px_64px_rgba(0,0,0,0.46)] sm:p-6 md:text-left"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.095),transparent_38%)] opacity-80 transition duration-300 group-hover:opacity-100"
                    />

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-7 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.30),transparent)]"
                    />

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-between">
                        <span className="inline-flex rounded-full border border-[#D6B25E]/16 bg-[#D6B25E]/8 px-3 py-1.5 font-[family:var(--font-rajdhani)] text-[11px] font-bold uppercase tracking-[0.16em] text-[#D6B25E] sm:text-[12px]">
                          {service.tag}
                        </span>

                        <span className="inline-flex min-w-[132px] justify-center rounded-full border border-[#F2D58A]/18 bg-black/36 px-3.5 py-1.5 font-[family:var(--font-rajdhani)] text-[12px] font-bold uppercase tracking-[0.10em] text-[#F2D58A] shadow-[0_8px_22px_rgba(0,0,0,0.20)] sm:text-[13px]">
                          {service.price}
                        </span>
                      </div>

                      <div className="mt-5 flex flex-1 flex-col">
                        <h3 className="mx-auto max-w-[520px] font-[family:var(--font-heading)] text-[25px] font-bold uppercase leading-[1.04] tracking-[-0.025em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.62)] sm:text-[30px] md:mx-0 lg:text-[32px]">
                          {service.title}
                        </h3>

                        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/72 sm:text-[16px] md:mx-0">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-5">
                        <CTAButton
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          trackingEvent="service_click"
                          trackingLabel={`Servicio - ${service.title}`}
                          trackingSection="services"
                          className="group/button mx-auto min-h-[44px] w-full justify-between border-white/15 bg-white/[0.045] px-4 py-3 font-[family:var(--font-rajdhani)] text-[12px] uppercase tracking-[0.12em] backdrop-blur-sm transition duration-300 hover:border-[#D6B25E]/35 hover:bg-[#D6B25E]/10 sm:max-w-[260px] sm:text-[13px] md:mx-0"
                        >
                          Consultar
                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                          />
                        </CTAButton>
                      </div>
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.42 }}
          className="mx-auto mt-6 max-w-3xl rounded-[1.25rem] border border-white/10 bg-black/35 p-4 text-center shadow-[0_12px_34px_rgba(0,0,0,0.24)] ring-1 ring-white/[0.03] sm:p-5 md:mt-8"
        >
          <p className="font-[family:var(--font-rajdhani)] text-[12px] font-bold uppercase tracking-[0.20em] text-[#D6B25E] sm:text-[13px]">
            Referencia
          </p>

          <p className="mt-2 text-[15px] leading-7 text-white/70 sm:text-[16px]">
            El valor final puede variar según tamaño, estado del vehículo y
            nivel de corrección requerido.
          </p>
        </motion.div>
      </SectionContainer>
    </section>
  );
}