"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackVisualCard } from "@/components/ui/PackVisualCard";
import { packs } from "@/content/packs";

export function PacksSection() {
  return (
    <section
      id="packs"
      aria-labelledby="packs-heading"
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-18 md:py-22 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.10),transparent_26%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(242,213,138,0.05),transparent_28%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.28),transparent)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0))]"
      />

      <SectionContainer className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div id="packs-heading">
            <SectionHeading
              eyebrow="Packs"
              title="Detailing Packs"
              description="Elige el nivel de cuidado ideal para tu vehículo: limpieza, brillo, corrección visual y protección."
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-7 h-px w-full max-w-4xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.26),rgba(255,255,255,0.10),transparent)] md:mt-8"
        />

        <div className="mt-8 md:mt-10 lg:mt-12">
          <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:gap-5 xl:grid-cols-4 xl:gap-5">
            {packs.map((pack, index) => (
              <li
                key={pack.slug}
                className="mx-auto w-full max-w-[360px] md:max-w-none"
              >
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="h-full"
                >
                  <PackVisualCard
                    name={pack.name}
                    image={pack.image}
                    summary={pack.summary}
                    accent={pack.accent}
                    highlights={pack.highlights}
                  />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </section>
  );
}