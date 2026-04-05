"use client";

import { motion } from "motion/react";
import { MessageCircle, AtSign, Phone } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.08),transparent_18%)]" />

      <SectionContainer className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.10),rgba(255,255,255,0.03))] p-8 md:p-10 lg:p-14 backdrop-blur-sm"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.30em] text-[#D6B25E]">
                Contacto
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#f7f3eb] md:text-5xl">
                Cotiza y coordina tu servicio
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Contacto directo para consultas y disponibilidad.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/10 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#D6B25E]">
                Atención directa
              </p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                La forma más rápida de cotizar es escribir por WhatsApp.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mt-6 flex flex-col gap-4 sm:flex-row"
              >
                <CTAButton
                  href={getWhatsAppUrl(
                    "Hola, quiero más información sobre los servicios de Vincent.Detail."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="sm:min-w-[220px]"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Escribir por WhatsApp
                </CTAButton>

                <CTAButton
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="sm:min-w-[180px]"
                >
                  <AtSign className="mr-2 h-4 w-4" />
                  Ver Instagram
                </CTAButton>
              </motion.div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-[#D6B25E]/15 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-2 text-[#F2D58A]">
                    <Phone className="h-4 w-4" />
                    <p className="text-xs uppercase tracking-[0.22em]">WhatsApp</p>
                  </div>
                  <p className="mt-3 text-sm text-white/75">
                    {siteConfig.whatsappDisplay}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-[#D6B25E]/15 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-2 text-[#F2D58A]">
                    <AtSign className="h-4 w-4" />
                    <p className="text-xs uppercase tracking-[0.22em]">Instagram</p>
                  </div>
                  <p className="mt-3 text-sm text-white/75">
                    {siteConfig.instagram}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}