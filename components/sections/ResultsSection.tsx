"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryItems = [
  {
    title: "1",
    image: "/gallery/resultado-05.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "2",
    image: "/gallery/resultado-02.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "3",
    image: "/gallery/resultado-07.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "4",
    image: "/gallery/resultado-04.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "5",
    image: "/gallery/resultado-marca.png",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.28))] py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.06),transparent_20%)]" />

      <SectionContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Galería"
              title="Trabajos y Resultados"
              description="Material visual del servicio y sus terminaciones."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-sm"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-[#D6B25E]">
              Resultados
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Fotografías reales de trabajos y resultados.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid auto-rows-[200px] gap-4 md:grid-cols-3 md:auto-rows-[220px]">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03] md:rounded-[1.6rem] ${item.className}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.12),rgba(0,0,0,0.72))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.10),transparent_26%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#D6B25E] md:text-[11px] md:tracking-[0.24em]">
                  Trabajo destacado
                </p>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-[#f7f3eb] md:text-lg">
                  {item.title}
                </h3>
              </div>

              <div className="absolute inset-0 rounded-[1.4rem] ring-1 ring-inset ring-white/0 transition duration-300 group-hover:ring-[#F2D58A]/20 md:rounded-[1.6rem]" />
            </motion.article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}