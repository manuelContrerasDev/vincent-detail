"use client";

import Image from "next/image";
import { MapPin, MessageCircle, Mail, ChevronRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Packs", href: "#packs" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#resultados" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero más información sobre los servicios de Vincent.Detail"
  );

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.055),transparent_22%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.24),transparent)]"
      />

      <SectionContainer className="relative py-12 md:py-14 lg:py-16">
        <div className="grid gap-10 text-center md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-8 lg:text-left">
          <div className="md:col-span-2 lg:col-span-1 lg:pr-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] shadow-[0_10px_28px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.03] sm:h-12 sm:w-12">
                <Image
                  src="/images/logo/logo-vincent-detail-negro.png"
                  alt={siteConfig.name}
                  width={96}
                  height={96}
                  quality={100}
                  sizes="96px"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="font-[family:var(--font-orbitron)] text-[0.95rem] font-semibold uppercase tracking-[0.10em] text-[#f7f3eb]">
                  {siteConfig.name}
                </p>

                <p className="font-[family:var(--font-rajdhani)] mt-1 text-[10px] uppercase tracking-[0.24em] text-[#D6B25E]">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/68 lg:mx-0">
              Servicio profesional de detailing automotriz con atención cuidada
              y enfoque en terminación, limpieza y presentación.
            </p>
          </div>

          <div className="relative md:text-left lg:px-8 lg:text-center">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(242,213,138,0.18),transparent)] lg:block"
            />

            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
              Navegación
            </p>

            <nav
              aria-label="Navegación del pie de página"
              className="mt-4 flex justify-center md:justify-start lg:justify-center"
            >
              <ul className="grid justify-items-center gap-3 md:justify-items-start lg:justify-items-center">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() =>
                        trackEvent("navigation_click", {
                          label: `Footer nav - ${item.label}`,
                          section: "footer",
                          href: item.href,
                        })
                      }
                      className="group inline-flex items-center justify-center gap-2 font-[family:var(--font-rajdhani)] text-sm uppercase tracking-[0.12em] text-white/68 transition hover:text-white md:justify-start"
                    >
                      <ChevronRight
                        aria-hidden="true"
                        className="h-4 w-4 text-[#F2D58A]/80 transition group-hover:translate-x-0.5"
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative md:text-left lg:pl-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(242,213,138,0.18),transparent)] lg:block"
            />

            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
              Contacto
            </p>

            <address className="mx-auto mt-4 max-w-sm space-y-4 not-italic md:mx-0">
              <div className="flex flex-col items-center gap-2 text-white/72 sm:flex-row sm:justify-center md:items-start md:justify-start md:gap-3">
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#F2D58A] md:mt-0.5"
                />
                <p className="text-sm leading-6">
                  11 de Octubre 248, El Monte / a domicilio
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    label: "Footer - WhatsApp",
                    section: "footer",
                    href: whatsappHref,
                  })
                }
                className="flex flex-col items-center gap-2 text-white/72 transition hover:text-white sm:flex-row sm:justify-center md:items-start md:justify-start md:gap-3"
                aria-label={`Escribir por WhatsApp a ${siteConfig.name}`}
              >
                <MessageCircle
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#F2D58A] md:mt-0.5"
                />
                <p className="text-sm leading-6">{siteConfig.whatsappDisplay}</p>
              </a>

              <a
                href="mailto:vicenelopez5@gmail.com"
                onClick={() =>
                  trackEvent("contact_click", {
                    label: "Footer - Email",
                    section: "footer",
                    href: "mailto:vicenelopez5@gmail.com",
                  })
                }
                className="flex flex-col items-center gap-2 text-white/72 transition hover:text-white sm:flex-row sm:justify-center md:items-start md:justify-start md:gap-3"
                aria-label="Enviar correo a Vincent.Detail"
              >
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#F2D58A] md:mt-0.5"
                />
                <p className="select-all text-sm leading-6">
                  vicenelopez5@gmail.com
                </p>
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center lg:text-left">
          <p className="text-xs tracking-[0.08em] text-white/45">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}