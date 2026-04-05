import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(242,213,138,0.06),transparent_22%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Servicios individuales"
              title="Tratamientos específicos para mantención, corrección y protección."
              description="A diferencia de los packs, esta sección presenta servicios puntuales para quienes buscan una solución concreta o una cotización más específica."
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/3 p-6 md:p-8 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B25E]">
              Catálogo técnico
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Este bloque está pensado para consultas directas, tratamientos
              puntuales y necesidades específicas según el tipo de servicio requerido.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              tag={service.tag}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}