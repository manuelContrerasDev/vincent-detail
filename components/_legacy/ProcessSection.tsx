import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const processSteps = [
  {
    step: "01",
    title: "Evaluación",
    description:
      "Se revisa el estado general del vehículo y el tipo de servicio requerido.",
  },
  {
    step: "02",
    title: "Recomendación",
    description:
      "Se define la mejor opción según necesidad, terminación y tipo de cuidado.",
  },
  {
    step: "03",
    title: "Ejecución",
    description:
      "Se realiza el trabajo con enfoque en detalle, limpieza y presentación.",
  },
  {
    step: "04",
    title: "Entrega",
    description:
      "Se presenta el resultado final con una imagen más cuidada y profesional.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Proceso"
          title="Un flujo simple, claro y fácil de entender."
          description="Esta sección ayuda a transmitir orden y profesionalismo, explicando cómo funciona el servicio desde el inicio hasta la entrega."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-white/10 bg-white/3 p-6"
            >
              <p className="text-sm tracking-[0.3em] text-[#d4af63]">
                {item.step}
              </p>

              <h3 className="mt-4 text-xl font-semibold text-[#f6f2ea]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}