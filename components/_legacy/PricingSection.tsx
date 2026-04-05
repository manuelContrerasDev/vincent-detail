import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing } from "@/content/pricing";

const pricingGroups = [
  pricing.lavadoBasico,
  pricing.lavadoPremium,
  pricing.limpiezaTapiz,
  pricing.pulido,
  pricing.ceramico2,
  pricing.ceramico3,
];

export function PricingSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.06),transparent_18%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Valores base"
              title="Precios referenciales según servicio y categoría de vehículo."
              description="Estos valores funcionan como referencia inicial. La cotización final puede variar según tamaño, condición general del vehículo y nivel de trabajo requerido."
            />
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.08),rgba(255,255,255,0.03))] p-6 md:p-8 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B25E]">
              Referencia comercial
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Esta sección ayuda a orientar al cliente antes del contacto,
              entregando un marco de precios claro y reduciendo fricción al cotizar.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {pricingGroups.map((group) => (
            <article
              key={group.title}
              className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/3 transition duration-300 hover:border-[#D6B25E]/20 hover:bg-white/4"
            >
              <div className="border-b border-white/10 bg-[linear-gradient(135deg,rgba(242,213,138,0.08),rgba(255,255,255,0.02))] px-6 py-5">
                <h3 className="text-2xl font-semibold tracking-tight text-[#f6f2ea]">
                  {group.title}
                </h3>
              </div>

              <div className="divide-y divide-white/10">
                {group.rows.map((row) => (
                  <div
                    key={row.vehicle}
                    className="flex items-center justify-between gap-4 px-6 py-4"
                  >
                    <p className="text-sm text-white/72">{row.vehicle}</p>
                    <p className="text-sm font-semibold text-[#F2D58A]">
                      {row.price}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}