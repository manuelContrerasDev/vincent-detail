"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function InstagramLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.8 3c.3 2 1.5 3.6 3.4 4.4v2.8c-1.4 0-2.7-.4-3.8-1.2v5.5a5.4 5.4 0 1 1-5.4-5.4c.4 0 .8 0 1.1.1v2.9a2.7 2.7 0 1 0 1.6 2.4V3h3.1Z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.08),transparent_18%)]" />

      <SectionContainer className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.08),rgba(255,255,255,0.02))] px-6 py-8 md:px-8 md:py-10 lg:px-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D6B25E]">
              Contacto
            </p>

            <h2 className="font-[family:var(--font-heading)] mt-3 text-3xl font-semibold leading-[1.02] tracking-tight text-[#f7f3eb] md:text-4xl lg:text-5xl">
              Cotiza y coordina tu servicio
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
              Escríbenos directamente y revisa nuestro contenido en redes.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="mt-7 flex justify-center"
            >
              <CTAButton
                href={getWhatsAppUrl(
                  "Hola, quiero más información sobre los servicios de Vincent.Detail."
                )}
                target="_blank"
                rel="noreferrer"
                className="min-w-[220px]"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </CTAButton>
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="font-[family:var(--font-rajdhani)] inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/72 transition hover:text-white"
              >
                <InstagramLogo className="h-4 w-4 text-[#F2D58A]" />
                Instagram
              </a>

              <span className="hidden h-4 w-px bg-[linear-gradient(180deg,transparent,rgba(242,213,138,0.35),transparent)] sm:block" />

              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="font-[family:var(--font-rajdhani)] inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/72 transition hover:text-white"
              >
                <TikTokLogo className="h-4 w-4 text-[#F2D58A]" />
                TikTok
              </a>

              <span className="hidden h-4 w-px bg-[linear-gradient(180deg,transparent,rgba(242,213,138,0.35),transparent)] sm:block" />

              <a
                href={getWhatsAppUrl(
                  "Hola, quiero más información sobre los servicios de Vincent.Detail."
                )}
                target="_blank"
                rel="noreferrer"
                className="font-[family:var(--font-rajdhani)] inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/72 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#F2D58A]" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}