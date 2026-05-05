"use client";

import type { SVGProps } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle, Send } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

function InstagramLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.8 3c.3 2 1.5 3.6 3.4 4.4v2.8c-1.4 0-2.7-.4-3.8-1.2v5.5a5.4 5.4 0 1 1-5.4-5.4c.4 0 .8 0 1.1.1v2.9a2.7 2.7 0 1 0 1.6 2.4V3h3.1Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    handle: siteConfig.instagram,
    href: siteConfig.instagramUrl,
    icon: InstagramLogo,
    description: "Resultados y procesos",
  },
  {
    label: "TikTok",
    handle: siteConfig.tiktok,
    href: siteConfig.tiktokUrl,
    icon: TikTokLogo,
    description: "Trabajos recientes",
  },
];

export function ContactSection() {
  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero más información sobre los servicios de Vincent.Detail."
  );

  const [brandPrimary, brandSecondary = ""] = siteConfig.name.includes(".")
    ? siteConfig.name.split(".")
    : [siteConfig.name, ""];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] py-14 sm:py-16 md:py-20 lg:py-24"
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
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-5xl overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#080808] shadow-[0_18px_54px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.03] sm:rounded-[1.8rem]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(242,213,138,0.09),rgba(255,255,255,0.025),rgba(0,0,0,0))]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#D6B25E]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.36),transparent)]"
          />

          <div className="relative z-10 px-4 py-7 text-center sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10">
            <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
              <p className="font-[family:var(--font-rajdhani)] text-[11px] font-bold uppercase tracking-[0.22em] text-[#D6B25E] sm:text-[12px] md:text-[13px]">
                Contacto
              </p>

              <h2 className="mt-3 w-full max-w-[680px] font-[family:var(--font-heading)] text-[30px] font-bold uppercase leading-[1.02] tracking-[-0.035em] text-[#f7f3eb] drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] min-[380px]:text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px]">
                Cotiza con{" "}
                <span
                  className="mt-1 block font-[family:var(--font-orbitron)] font-semibold tracking-[0.025em] sm:mt-0 sm:inline"
                  aria-label={siteConfig.name}
                >
                  <span className="bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3EB_48%,#D8D0C2_100%)] bg-clip-text text-transparent">
                    {brandPrimary}
                  </span>

                  {brandSecondary ? (
                    <>
                      <span className="mx-[2px] bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_48%,#A97B1E_100%)] bg-clip-text text-[1.08em] text-transparent drop-shadow-[0_0_10px_rgba(214,178,94,0.35)]">
                        .
                      </span>

                      <span className="bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_45%,#A97B1E_100%)] bg-clip-text text-transparent">
                        {brandSecondary}
                      </span>
                    </>
                  ) : null}
                </span>
              </h2>

              <p className="mt-4 w-full max-w-[620px] text-[15px] leading-7 text-white/72 sm:text-[16px] md:text-[17px] md:leading-8">
                Escríbenos por WhatsApp para revisar tu vehículo, resolver dudas
                y coordinar disponibilidad según tu zona.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="mt-7 flex w-full justify-center"
              >
                <CTAButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingLabel="Contacto - WhatsApp principal"
                  trackingSection="contact"
                  className="w-full max-w-[320px] gap-2 px-4 py-3 text-[12px] sm:w-auto sm:min-w-[250px] sm:text-[13px]"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Escribir por WhatsApp
                </CTAButton>
              </motion.div>

              <p className="mt-4 font-[family:var(--font-rajdhani)] text-[10px] font-medium uppercase tracking-[0.16em] text-white/45 sm:text-[11px] sm:tracking-[0.18em]">
                Respuesta directa · Cotización personalizada
              </p>
            </div>

            <div className="mx-auto mt-8 w-full max-w-3xl rounded-[1.35rem] border border-white/10 bg-black/32 p-3.5 shadow-[0_14px_38px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.03] backdrop-blur-sm sm:p-5">
              <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D6B25E]/20 bg-[#D6B25E]/10 shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
                  <Send aria-hidden="true" className="h-5 w-5 text-[#F2D58A]" />
                </div>

                <div className="min-w-0">
                  <p className="font-[family:var(--font-rajdhani)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#D6B25E] sm:text-[12px]">
                    Canales oficiales
                  </p>

                  <p className="mt-2 text-[14px] leading-6 text-white/62 sm:text-[15px]">
                    Revisa resultados, procesos y trabajos recientes antes de
                    cotizar.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid w-full gap-3 sm:grid-cols-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visitar ${item.label} de ${siteConfig.name}`}
                      onClick={() =>
                        trackEvent("social_click", {
                          label: item.label,
                          section: "contact",
                          href: item.href,
                        })
                      }
                      className="group flex min-w-0 items-center justify-between gap-3 rounded-[1.15rem] border border-white/10 bg-black/28 px-3.5 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#D6B25E]/30 hover:bg-[#D6B25E]/10 sm:px-4 sm:py-3.5"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#D6B25E]/18 bg-[#D6B25E]/10">
                          <Icon className="h-[18px] w-[18px] text-[#F2D58A]" />
                        </div>

                        <div className="min-w-0">
                          <p className="font-[family:var(--font-rajdhani)] text-[13px] font-bold uppercase tracking-[0.12em] text-[#F7F3EB]">
                            {item.label}
                          </p>

                          <p className="mt-0.5 truncate text-[12px] text-white/55 sm:text-[13px]">
                            {item.handle} · {item.description}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#D6B25E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  );
                })}
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Escribir por WhatsApp a ${siteConfig.name}`}
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    label: "Contacto - Link secundario WhatsApp",
                    section: "contact",
                    href: whatsappHref,
                  })
                }
                className="group mt-3 flex min-w-0 items-center justify-between gap-3 rounded-[1.15rem] border border-white/10 bg-black/28 px-3.5 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#D6B25E]/30 hover:bg-[#D6B25E]/10 sm:px-4 sm:py-3.5"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#D6B25E]/18 bg-[#D6B25E]/10">
                    <MessageCircle
                      aria-hidden="true"
                      className="h-[18px] w-[18px] text-[#F2D58A]"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-[family:var(--font-rajdhani)] text-[13px] font-bold uppercase tracking-[0.12em] text-[#F7F3EB]">
                      WhatsApp
                    </p>

                    <p className="mt-0.5 truncate text-[12px] text-white/55 sm:text-[13px]">
                      {siteConfig.whatsappDisplay} · Atención directa
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#D6B25E] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="mt-4 rounded-[1.1rem] border border-[#D6B25E]/14 bg-[#D6B25E]/8 p-3.5 text-center sm:text-left">
                <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E]">
                  Recomendación
                </p>

                <p className="mt-1.5 text-[12px] leading-5 text-white/62 sm:text-[13px] sm:leading-6">
                  Para una cotización más precisa, envía fotos del vehículo y
                  comenta qué resultado buscas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}