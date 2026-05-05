"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function QuoteBannerSection() {
  const shouldReduceMotion = useReducedMotion();

  const whatsappHref = getWhatsAppUrl(
    "Hola, vi los resultados de Vincent.Detail y quiero cotizar un servicio para mi vehículo."
  );

  return (
    <section
      aria-label="Cotización personalizada de detailing automotriz"
      className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-10 sm:py-12 lg:py-14"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,178,94,0.10),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,213,138,0.045),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.30),transparent)]"
      />

      <SectionContainer className="relative">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#080808]/92 px-5 py-7 text-center shadow-[0_18px_54px_rgba(0,0,0,0.36)] ring-1 ring-white/[0.03] sm:px-7 sm:py-8 md:px-9 lg:px-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(214,178,94,0.06),rgba(0,0,0,0))]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.36),transparent)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D6B25E]/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:text-left">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6B25E]/18 bg-[#D6B25E]/10 px-3 py-1.5">
                <Sparkles
                  aria-hidden="true"
                  className="h-3.5 w-3.5 text-[#F2D58A]"
                />

                <span className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
                  Cotización personalizada
                </span>
              </div>

              <h2 className="font-[family:var(--font-rajdhani)] text-[24px] font-bold uppercase leading-[1.06] tracking-[0.055em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] sm:text-[28px] md:text-[34px]">
                ¿Quieres cotizar un servicio?
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-white/72 sm:text-[15px] lg:mx-0">
                Envíanos fotos del vehículo, tu zona y el servicio que tienes en
                mente. Te orientamos para elegir la mejor opción según el estado
                actual.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 lg:items-end">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="w-full max-w-[330px] lg:w-auto"
              >
                <CTAButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full gap-2 px-5 py-3.5 text-[12px] sm:text-[13px] lg:min-w-[260px]"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Solicitar cotización
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </CTAButton>
              </motion.div>

              <p className="font-[family:var(--font-rajdhani)] text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                Respuesta directa por WhatsApp
              </p>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}