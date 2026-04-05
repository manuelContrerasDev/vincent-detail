import Image from "next/image";
import { siteConfig } from "@/content/site";
import { SectionContainer } from "@/components/layout/SectionContainer";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.06),transparent_20%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.24),transparent)]" />

      <SectionContainer className="relative py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
                <Image
                  src="/logo/logo-vincent-detail-negro.png"
                  alt={siteConfig.name}
                  width={56}
                  height={56}
                  className="h-12 w-12 object-cover"
                />
              </div>

              <div>
                <p className="text-[1.1rem] font-semibold leading-none text-[#f7f3eb]">
                  {siteConfig.name}
                </p>
                <p className="mt-1 bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)] bg-clip-text text-[11px] uppercase tracking-[0.28em] text-transparent">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
              Servicios de detailing automotriz enfocados en limpieza,
              corrección, protección y presentación visual del vehículo.
            </p>
          </div>

          <div className="relative md:pl-8">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.10),transparent)] md:block" />

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D6B25E]">
              Contacto
            </p>

            <div className="mt-4 space-y-2 text-sm text-white/70">
              <p>{siteConfig.whatsappDisplay}</p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {siteConfig.instagram}
              </a>
            </div>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Para cotizaciones y disponibilidad, se recomienda escribir directamente por WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs tracking-[0.08em] text-white/45">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>

            <div className="h-px w-full max-w-[180px] bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.24),transparent)] md:w-[180px]" />
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}