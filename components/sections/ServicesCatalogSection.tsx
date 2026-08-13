"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Info } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CarouselEdgeControls } from "@/components/ui/CarouselEdgeControls";
import { services, type ServiceItem } from "@/content/services";
import { useHorizontalCarousel } from "@/hooks/useHorizontalCarousel";
import { premiumEase, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ServiceCategoryId = "lavado" | "interior" | "correccion" | "proteccion";

type ServiceCategory = {
  id: ServiceCategoryId;
  label: string;
  shortDescription: string;
  matches: (service: ServiceItem) => boolean;
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "lavado",
    label: "Lavado",
    shortDescription: "Renovación interior-exterior",
    matches: (service) => service.title.startsWith("Lavado"),
  },
  {
    id: "interior",
    label: "Interior",
    shortDescription:
      "Limpieza profunda y recuperación visual de superficies interiores.",
    matches: (service) => service.title.includes("Tapiz"),
  },
  {
    id: "correccion",
    label: "Corrección",
    shortDescription:
      "Recuperación de brillo, profundidad y terminación de la pintura.",
    matches: (service) =>
      service.title.includes("Mantención Cerámica") ||
      service.title.includes("Corrección de Pintura"),
  },
  {
    id: "proteccion",
    label: "Protección",
    shortDescription:
      "Tratamientos cerámicos de larga duración y acabado superior.",
    matches: (service) => service.title.startsWith("Tratamiento Cerámico"),
  },
];

const categoryTransition = {
  duration: 0.38,
  ease: premiumEase,
};

export function ServicesCatalogSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [activeCategoryId, setActiveCategoryId] =
    useState<ServiceCategoryId>("lavado");

  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const {
    carouselRef,
    canScrollLeft,
    canScrollRight,
    scrollByPage,
    scrollToStart,
  } = useHorizontalCarousel<HTMLUListElement>();

  const activeCategory =
    SERVICE_CATEGORIES.find(({ id }) => id === activeCategoryId) ??
    SERVICE_CATEGORIES[0];

  const activeServices = services.filter(activeCategory.matches);

  useEffect(() => {
    scrollToStart();
  }, [activeCategoryId, scrollToStart]);

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    const lastIndex = SERVICE_CATEGORIES.length - 1;
    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();

    const nextCategory = SERVICE_CATEGORIES[nextIndex];
    setActiveCategoryId(nextCategory.id);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <SectionShell
      id="servicios"
      ariaLabelledBy="services-heading"
      tone="deep"
      ambient="right"
      compact
      topDivider
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-16 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden"
      >
        <Image
          src="/gallery/services-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover object-[58%_16%] opacity-[0.18] blur-[0.4px] sm:object-[62%_18%] md:opacity-[0.21] lg:scale-105 lg:object-[72%_18%] lg:opacity-[0.25]"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.86)_0%,rgba(3,3,3,0.92)_42%,rgba(3,3,3,0.99)_100%)] md:bg-[linear-gradient(90deg,rgba(3,3,3,0.985)_0%,rgba(3,3,3,0.92)_42%,rgba(3,3,3,0.78)_74%,rgba(3,3,3,0.97)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(211,165,47,0.14),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--page-deep)] to-transparent" />
      </div>

      <div className="relative z-10">
        <div
          className={cn(
            "relative overflow-hidden rounded-[1.6rem] border border-white/[0.105]",
            "bg-[linear-gradient(145deg,rgba(255,255,255,0.058),rgba(255,255,255,0.016)_38%,rgba(5,5,5,0.92)_100%)]",
            "p-4 shadow-[0_24px_70px_rgba(0,0,0,0.34),0_0_30px_rgba(211,165,47,0.04)] backdrop-blur-2xl",
            "sm:p-5",
            "lg:p-7",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/44 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--accent)]/14 blur-[70px]"
          />

          <div className="relative grid gap-5 lg:grid-cols-[minmax(0,0.66fr)_minmax(20rem,0.34fr)] lg:items-end lg:gap-10">
            <div id="services-heading">
              <SectionHeading
                eyebrow="Servicios"
                title="Servicios personalizados"
                description="Encuentra la elección adecuada para tu vehículo"
              />
            </div>

            <div className="hidden max-w-sm items-start gap-3 text-white/58 lg:flex lg:justify-self-end">
              <Info
                aria-hidden="true"
                className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-bright)]"
                strokeWidth={1.8}
              />

              <p className="text-[13px] leading-6 xl:text-[14px]">
                Valores referenciales según tamaño, estado y nivel de corrección
                requerido.
              </p>
            </div>
          </div>

          <div className="relative mt-6 border-t border-white/[0.08] pt-4 sm:mt-7 lg:mt-8 lg:pt-5">
            <div
              role="tablist"
              aria-label="Filtrar servicios por categoría"
              className="grid grid-cols-2 gap-1.5 rounded-[1rem] border border-white/[0.09] bg-black/30 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] sm:grid-cols-4 sm:gap-1.5"
            >
              {SERVICE_CATEGORIES.map((category, index) => {
                const isActive = category.id === activeCategoryId;

                return (
                  <motion.button
                    key={category.id}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    id={`service-tab-${category.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`service-panel-${category.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveCategoryId(category.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className={cn(
                      "group/tab relative isolate flex min-h-[46px] min-w-0 items-center justify-center overflow-hidden rounded-[0.78rem]",
                      "px-2 py-2.5 text-center",
                      "font-[family:var(--font-accent)]",
                      "transition-[color,transform] duration-300 ease-[var(--ease-premium)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-bright)]",
                      "focus-visible:ring-offset-1 focus-visible:ring-offset-[#070707]",
                      "sm:min-h-[48px] sm:px-3",
                      isActive
                        ? "text-[var(--accent-highlight)]"
                        : "text-white/58 hover:text-white/90",
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="service-active-tab"
                        aria-hidden="true"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : {
                                type: "spring",
                                stiffness: 440,
                                damping: 34,
                                mass: 0.72,
                              }
                        }
                        className={cn(
                          "absolute inset-0 -z-10 rounded-[0.78rem]",
                          "border border-[var(--accent-bright)]/58",
                          "bg-[linear-gradient(135deg,rgba(211,165,47,0.20),rgba(255,255,255,0.055))]",
                          "shadow-[inset_0_0_0_1px_rgba(240,198,88,0.045),0_0_24px_rgba(211,165,47,0.11)]",
                        )}
                      />
                    ) : null}

                    <span
                      className={cn(
                        "relative z-10 truncate",
                        "text-[12px] font-semibold uppercase tracking-[0.085em]",
                        "sm:text-[13px]",
                        "lg:text-[14px]",
                        "xl:text-[15px]",
                        isActive && "font-bold",
                      )}
                    >
                      {category.label}
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute inset-x-5 bottom-0 h-[2px]",
                        "bg-gradient-to-r from-transparent via-[var(--accent-bright)] to-transparent",
                        "transition-opacity duration-300",
                        isActive ? "opacity-95" : "opacity-0",
                      )}
                    />
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeCategory.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -3 }}
                transition={categoryTransition}
                className="mt-3.5 flex items-start justify-between gap-4 px-1 text-center sm:text-left lg:mt-4"
              >
                <p className="mx-auto max-w-2xl text-[12.5px] leading-5.5 text-white/62 sm:mx-0 sm:text-[13.5px] lg:text-[14px] lg:leading-6">
                  {activeCategory.shortDescription}
                </p>

                <span className="hidden shrink-0 font-[family:var(--font-accent)] text-[11px] font-semibold tracking-[0.13em] text-[var(--accent-bright)]/84 sm:block lg:text-[12px]">
                  {String(activeServices.length).padStart(2, "0")}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p id={`service-description-${activeCategory.id}`} className="sr-only">
          {activeCategory.shortDescription}
        </p>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory.id}
            id={`service-panel-${activeCategory.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${activeCategory.id}`}
            aria-describedby={`service-description-${activeCategory.id}`}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 10, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: -6, filter: "blur(3px)" }
            }
            transition={categoryTransition}
            className="mt-5 min-w-0 sm:mt-6 lg:mt-7"
          >
            <div className="relative lg:hidden">
              <motion.ul
                ref={carouselRef}
                aria-label={`Servicios de ${activeCategory.label}`}
                variants={shouldReduceMotion ? undefined : staggerContainer}
                initial={shouldReduceMotion ? false : "hidden"}
                animate={shouldReduceMotion ? undefined : "visible"}
                className={cn(
                  "flex gap-3.5 overflow-x-auto overscroll-x-contain scroll-smooth",
                  "snap-x snap-mandatory touch-pan-x",
                  "pb-3 pr-5 -mr-5",
                  "[-webkit-overflow-scrolling:touch]",
                  "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  "sm:gap-4 sm:pr-6 sm:-mr-6",
                  "md:gap-5",
                )}
              >
                {activeServices.map((service) => {
                  const originalIndex = services.findIndex(
                    ({ title }) => title === service.title,
                  );

                  return (
                    <li
                      key={`mobile-${service.title}`}
                      className={cn(
                        "h-full min-w-0 shrink-0 snap-start",
                        "basis-[86%]",
                        "sm:basis-[60%]",
                        "md:basis-[46%]",
                      )}
                    >
                      <ServiceCard {...service} index={originalIndex + 1} />
                    </li>
                  );
                })}
              </motion.ul>

              <CarouselEdgeControls
                canScrollLeft={canScrollLeft}
                canScrollRight={canScrollRight}
                onPrevious={() => scrollByPage(-1)}
                onNext={() => scrollByPage(1)}
              />
            </div>

            <motion.ul
              aria-label={`Servicios de ${activeCategory.label}`}
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial={shouldReduceMotion ? false : "hidden"}
              animate={shouldReduceMotion ? undefined : "visible"}
              className="hidden lg:grid lg:grid-cols-3 lg:gap-5 2xl:gap-6"
            >
              {activeServices.map((service) => {
                const originalIndex = services.findIndex(
                  ({ title }) => title === service.title,
                );

                return (
                  <li
                    key={`desktop-${service.title}`}
                    className="h-full min-w-0"
                  >
                    <ServiceCard {...service} index={originalIndex + 1} />
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
