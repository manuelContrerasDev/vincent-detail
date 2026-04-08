"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackVisualCard } from "@/components/ui/PackVisualCard";
import { packs } from "@/content/packs";

export function PacksSection() {
  return (
    <section id="packs" className="relative py-20 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.10),transparent_22%)]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <SectionContainer className="relative">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Packs"
            title="Niveles de Packs"
            description="Cuatro propuestas de detailing para distintos niveles de cuidado, terminación y protección."
          />
        </div>

        <div className="mt-8 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),rgba(214,178,94,0.18),rgba(255,255,255,0.12),transparent)]" />

        <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 xl:gap-8">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="w-full"
            >
              <PackVisualCard
                name={pack.name}
                image={pack.image}
                summary={pack.summary}
                accent={pack.accent}
                highlights={pack.highlights}
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}