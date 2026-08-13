"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PackVisualCard } from "@/components/ui/PackVisualCard";
import { CarouselEdgeControls } from "@/components/ui/CarouselEdgeControls";
import { packs } from "@/content/packs";
import { useHorizontalCarousel } from "@/hooks/useHorizontalCarousel";
import { staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PacksSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const { carouselRef, canScrollLeft, canScrollRight, scrollByPage } =
    useHorizontalCarousel<HTMLUListElement>();

  return (
    <SectionShell
      id="packs"
      ariaLabelledBy="packs-heading"
      tone="deep"
      ambient="center"
      compact
      topDivider
    >
      <div id="packs-heading">
        <SectionHeading
          eyebrow="Detailing Packs"
          title="Niveles de Protección y Corrección"
          description="Distintos niveles de limpieza, corrección y protección"
        />
      </div>

      <div className="relative mt-7 sm:mt-8 md:mt-10 lg:mt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-[4%] top-[8%] h-[68%] rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(225,184,93,0.045),transparent_68%)] blur-[34px]"
        />

        {/* Mobile / small tablet: carrusel horizontal nativo */}
        <div className="relative md:hidden">
          <motion.ul
            ref={carouselRef}
            aria-label="Packs de detailing disponibles"
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.12 }}
            className={cn(
              "relative flex gap-3.5 overflow-x-auto overscroll-x-contain scroll-smooth",
              "snap-x snap-mandatory touch-pan-x",
              "pb-3 pr-5 -mr-5",
              "[-webkit-overflow-scrolling:touch]",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "sm:gap-4 sm:pr-6 sm:-mr-6",
            )}
          >
            {packs.map((pack, index) => (
              <li
                key={`mobile-${pack.slug}`}
                className={cn(
                  "h-full min-w-0 shrink-0 snap-start",
                  "basis-[86%]",
                  "sm:basis-[64%]",
                )}
              >
                <PackVisualCard
                  name={pack.name}
                  image={pack.image}
                  summary={pack.summary}
                  accent={pack.accent}
                  highlights={pack.highlights}
                  index={index + 1}
                />
              </li>
            ))}
          </motion.ul>

          <CarouselEdgeControls
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            onPrevious={() => scrollByPage(-1)}
            onNext={() => scrollByPage(1)}
          />
        </div>

        {/* Tablet grande / desktop: grid estable */}
        <motion.ul
          aria-label="Packs de detailing disponibles"
          variants={shouldReduceMotion ? undefined : staggerContainer}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.12 }}
          className={cn(
            "relative hidden",
            "md:grid md:grid-cols-2 md:gap-5",
            "lg:gap-6",
            "xl:grid-cols-4 xl:gap-5",
            "2xl:gap-6",
          )}
        >
          {packs.map((pack, index) => (
            <li key={`desktop-${pack.slug}`} className="h-full min-w-0">
              <PackVisualCard
                name={pack.name}
                image={pack.image}
                summary={pack.summary}
                accent={pack.accent}
                highlights={pack.highlights}
                index={index + 1}
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </SectionShell>
  );
}
