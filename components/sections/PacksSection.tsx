"use client";

import { motion } from "motion/react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackVisualCard } from "@/components/ui/PackVisualCard";
import { packs } from "@/content/packs";

const packSequence = [
  { label: "Bronce", accent: "text-[#C18B58]" },
  { label: "Plata", accent: "text-[#E4EAF2]" },
  { label: "Oro", accent: "text-[#F2D58A]" },
  { label: "Diamante", accent: "text-[#C7F6FF]" },
];

export function PacksSection() {
  return (
    <section id="packs" className="relative py-22 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.08),transparent_20%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />

      <SectionContainer className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Packs"
              title="Detailing packs"
              description="De bronce a diamante, según nivel de detalle y protección."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4 md:p-5 backdrop-blur-sm"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#D6B25E]">
              Escalados
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {packSequence.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="flex items-center gap-2"
                >
                  <span
                    className={`rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] ${item.accent}`}
                  >
                    {item.label}
                  </span>

                  {index < packSequence.length - 1 ? (
                    <span className="text-white/30">→</span>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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