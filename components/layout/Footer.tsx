import Image from "next/image";
import { MapPin, MessageCircle, Mail, ChevronRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Packs", href: "#packs" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#resultados" },
  { label: "Localidad", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero más información sobre los servicios de Vincent.Detail."
  );

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.05),transparent_20%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.24),transparent)]"
      />

      <SectionContainer className="relative py-12 md:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:pr-6">
            <div className="flex items-center gap-4">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
                <Image
                  src="/images/logo/logo-vincent-detail-negro.png"
                  alt={siteConfig.name}
                  width={48}
                  height={48}
                  className="h-10 w-10 object-cover"
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

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
              Servicio profesional de detailing automotriz con atención cuidada
              y enfoque en terminación, limpieza y presentación.
            </p>
          </div>

          <div className="relative lg:px-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(242,213,138,0.18),transparent)] lg:block"
            />

            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
              Navegación
            </p>

            <nav aria-label="Navegación del pie de página" className="mt-4">
              <ul className="grid gap-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 font-[family:var(--font-rajdhani)] text-sm uppercase tracking-[0.12em] text-white/68 transition hover:text-white"
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

          <div className="relative lg:pl-8">
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(242,213,138,0.18),transparent)] lg:block"
            />

            <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
              Contacto
            </p>

            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 text-white/72">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F2D58A]"
                />
                <p className="text-sm leading-6">
                  11 de Octubre 248, El Monte / a domicilio
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/72 transition hover:text-white"
                aria-label={`Escribir por WhatsApp a ${siteConfig.name}`}
              >
                <MessageCircle
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F2D58A]"
                />
                <p className="text-sm leading-6">{siteConfig.whatsappDisplay}</p>
              </a>

              <a
                href="mailto:vicenelopez5@gmail.com"
                className="flex items-start gap-3 text-white/72 transition hover:text-white"
                aria-label="Enviar correo a Vincent.Detail"
              >
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F2D58A]"
                />
                <p className="select-all text-sm leading-6">
                  vicenelopez5@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <p className="text-xs tracking-[0.08em] text-white/45">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}