"use client";

import { ChevronRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

function FooterBrandLogo() {
  return (
    <picture className="block h-full w-full">
      <source
        media="(max-width: 639px)"
        srcSet="/images/logo/logo-marca-mobile-transparent.png"
      />
      <img
        src="/images/logo/logo-marca-transparent.png"
        alt={siteConfig.name}
        width={1799}
        height={321}
        decoding="async"
        className="block h-full w-full object-contain object-center md:object-left"
      />
    </picture>
  );
}

export function Footer() {
  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero más información sobre los servicios de Vincent.Detail",
  );

  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-white/[0.08]",
        "bg-[linear-gradient(180deg,#040403_0%,#020202_100%)]",
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/34 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.04] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="site-grid pointer-events-none absolute inset-0 opacity-[0.055]"
      />

      <SectionContainer className="relative py-11 sm:py-13 lg:py-16">
        <div
          className={cn(
            "grid gap-9 text-center",
            "md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:text-left",
            "lg:grid-cols-[minmax(0,1.1fr)_minmax(13rem,0.72fr)_minmax(0,1fr)] lg:gap-8",
            "xl:grid-cols-[minmax(0,1.14fr)_minmax(14rem,0.72fr)_minmax(0,1.14fr)] xl:gap-10",
          )}
        >
          <div className="md:col-span-2 lg:col-span-1 lg:pr-6">
            <a
              href="#inicio"
              onClick={() =>
                trackEvent("navigation_click", {
                  label: "Footer - Marca",
                  section: "footer",
                  href: "#inicio",
                })
              }
              aria-label={`Ir al inicio de ${siteConfig.name}`}
              className={cn(
                "group mx-auto flex items-center justify-center",
                "h-[68px] w-[220px]",
                "sm:h-[76px] sm:w-[248px]",
                "md:mx-0 md:h-[78px] md:w-[255px]",
                "lg:h-[74px] lg:w-[240px]",
                "xl:h-[80px] xl:w-[260px]",
              )}
            >
              <FooterBrandLogo />
            </a>

            <p className="mx-auto mt-4 max-w-md text-[13.5px] leading-6 text-white/58 sm:text-[14px] md:mx-0 lg:max-w-sm lg:text-[15px] lg:leading-7">
              Servicio profesional de detailing automotriz con atención cuidada
              y enfoque en terminación, limpieza y presentación.
            </p>
          </div>

          <div className="relative md:text-left lg:px-6 lg:text-center xl:px-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(246,217,141,0.18),transparent)] lg:block"
            />

            <p className="font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.155em] text-[var(--accent-bright)] sm:text-[12px] lg:text-[13px]">
              Navegación
            </p>

            <nav
              aria-label="Navegación del pie de página"
              className="mt-4 flex justify-center md:justify-start lg:justify-center"
            >
              <ul
                className={cn(
                  "grid grid-cols-2 justify-items-start gap-x-7 gap-y-3",
                  "sm:grid-cols-3",
                  "md:grid-cols-2",
                  "lg:grid-cols-1 lg:justify-items-center lg:gap-y-3.5",
                )}
              >
                {navigation.map((item) => (
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
                      className={cn(
                        "group/nav inline-flex min-h-8 items-center gap-1.5",
                        "font-[family:var(--font-accent)] text-[12px] font-semibold uppercase tracking-[0.085em]",
                        "text-white/58",
                        "transition-[transform,color] duration-300 ease-[var(--ease-premium)]",
                        "hover:translate-x-0.5 hover:text-[var(--text-primary)]",
                        "sm:text-[13px]",
                        "lg:text-[14px]",
                      )}
                    >
                      <ChevronRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[var(--accent-bright)]/72 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/nav:translate-x-0.5"
                        strokeWidth={1.9}
                      />

                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative md:text-left lg:pl-8 xl:pl-10">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(246,217,141,0.18),transparent)] lg:block"
            />

            <p className="font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.155em] text-[var(--accent-bright)] sm:text-[12px] lg:text-[13px]">
              Contacto
            </p>

            <address className="mx-auto mt-4 max-w-md space-y-3.5 not-italic md:mx-0">
              <div className="flex items-start justify-center gap-2.5 text-white/60 md:justify-start">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02]">
                  <MapPin
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[var(--accent-bright)]"
                    strokeWidth={1.8}
                  />
                </span>

                <p className="pt-1 text-[13px] leading-5.5 sm:text-[14px] lg:text-[15px]">
                  {siteConfig.address} / a domicilio
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
                className="group/contact flex items-center justify-center gap-2.5 text-white/60 transition-colors duration-300 hover:text-white md:justify-start"
                aria-label={`Escribir por WhatsApp a ${siteConfig.name}`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] transition-[border-color,background-color] duration-300 group-hover/contact:border-[var(--accent-bright)]/24 group-hover/contact:bg-[var(--accent)]/[0.06]">
                  <MessageCircle
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[var(--accent-bright)]"
                    strokeWidth={1.8}
                  />
                </span>

                <p className="select-all text-[13px] leading-5.5 sm:text-[14px] lg:text-[15px]">
                  {siteConfig.whatsappDisplay}
                </p>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                onClick={() =>
                  trackEvent("contact_click", {
                    label: "Footer - Email",
                    section: "footer",
                    href: `mailto:${siteConfig.email}`,
                  })
                }
                className="group/contact flex items-center justify-center gap-2.5 text-white/60 transition-colors duration-300 hover:text-white md:justify-start"
                aria-label="Enviar correo a Vincent.Detail"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] transition-[border-color,background-color] duration-300 group-hover/contact:border-[var(--accent-bright)]/24 group-hover/contact:bg-[var(--accent)]/[0.06]">
                  <Mail
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-[var(--accent-bright)]"
                    strokeWidth={1.8}
                  />
                </span>

                <p className="select-all break-all text-[13px] leading-5.5 sm:text-[14px] lg:text-[15px]">
                  {siteConfig.email}
                </p>
              </a>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-5 text-center md:text-left lg:mt-12">
          <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="font-[family:var(--font-accent)] text-[10px] tracking-[0.075em] text-white/36 sm:text-[11px] lg:text-[12px]">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
              reservados
            </p>

            <p className="font-[family:var(--font-accent)] text-[10px] uppercase tracking-[0.12em] text-[var(--accent-bright)]/48 sm:text-[11px]">
              Detailing automotriz · El Monte
            </p>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
