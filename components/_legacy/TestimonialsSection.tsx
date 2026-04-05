import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/_legacy/TestimonialCard";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24">
      <SectionContainer>
        <SectionHeading
          eyebrow="Testimonios"
          title="Una sección pensada para reforzar confianza."
          description="Aquí incorporaremos reseñas reales y opiniones de clientes para respaldar el servicio con prueba social."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}