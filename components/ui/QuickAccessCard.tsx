"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Droplets,
  Images,
  Layers3,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { quickAccessItems } from "@/content/home";
import { fadeUp, microTransition, staggerContainer } from "@/lib/motion";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type QuickAccessItem = (typeof quickAccessItems)[number];
type QuickAccessHref = QuickAccessItem["href"];

const ICON_BY_HREF: Record<QuickAccessHref, LucideIcon> = {
  "#packs": Layers3,
  "#servicios": Droplets,
  "#resultados": Images,
  "#cobertura": MapPin,
};

type QuickAccessTileProps = {
  item: QuickAccessItem;
  index: number;
  shouldReduceMotion: boolean;
};

function QuickAccessTile({
  item,
  index,
  shouldReduceMotion,
}: QuickAccessTileProps) {
  const Icon = ICON_BY_HREF[item.href];

  return (
    <motion.a
      href={item.href}
      variants={shouldReduceMotion ? undefined : fadeUp}
      transition={microTransition}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      aria-label={`Ir a ${item.label}`}
      onClick={() =>
        trackEvent(item.trackingEvent, {
          label: `Acceso rápido - ${item.label}`,
          section: "hero",
          href: item.href,
        })
      }
      className={cn(
        "group/item relative isolate flex items-center justify-center overflow-hidden",
        "min-h-[132px] px-3 py-4 text-center",
        "sm:min-h-[154px] sm:px-4 sm:py-5",
        "md:min-h-[156px] md:px-4 md:py-5",
        "lg:min-h-[178px] lg:px-5 lg:py-5",
        "xl:min-h-[196px] xl:px-6 xl:py-6",
        "transition-[background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
        "hover:bg-white/[0.026] active:bg-white/[0.042]",
        "focus-visible:z-40 focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent-bright)]",
      )}
    >
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 310px"
        priority={index < 2}
        className={cn(
          "-z-30 object-cover",
          "opacity-[0.62] saturate-[0.78] contrast-[1.12]",
          "transition-[transform,opacity,filter] duration-700 ease-[var(--ease-premium)]",
          "group-hover/item:scale-[1.055] group-hover/item:opacity-[0.86]",
          "group-hover/item:saturate-[0.92] group-hover/item:contrast-[1.07]",
          "motion-reduce:transition-none",
        )}
        style={{ objectPosition: item.imagePosition }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,2,2,0.44)_0%,rgba(2,2,2,0.34)_42%,rgba(2,2,2,0.66)_100%)] transition-opacity duration-500 group-hover/item:opacity-80"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[18] bg-[radial-gradient(circle_at_50%_42%,rgba(223,195,124,0.045),transparent_44%)] opacity-60 transition-opacity duration-500 group-hover/item:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-12 -z-10 h-28 w-28 rounded-full bg-[var(--accent)]/14 blur-[54px] opacity-0 transition-opacity duration-500 group-hover/item:opacity-100"
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-2 -z-10 rounded-[1rem]",
          "border border-transparent",
          "transition-[border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
          "group-hover/item:border-[var(--accent-bright)]/32",
          "group-hover/item:bg-white/[0.022]",
          "group-hover/item:shadow-[inset_0_0_28px_rgba(255,255,255,0.025),0_0_20px_rgba(198,161,91,0.035)]",
          "sm:inset-2.5 sm:rounded-[1.05rem]",
          "lg:inset-3 lg:rounded-[1.15rem]",
        )}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 translate-x-[-125%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.065),transparent)] transition-transform duration-700 ease-[var(--ease-premium)] group-hover/item:translate-x-[125%]"
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-center text-center transition-transform duration-300 ease-[var(--ease-premium)] motion-safe:group-hover/item:-translate-y-1">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full",
            "border border-white/[0.18] bg-black/38 text-white/92 backdrop-blur-lg",
            "shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_24px_rgba(0,0,0,0.24)]",
            "transition-[transform,background-color,border-color,color,box-shadow] duration-300 ease-[var(--ease-premium)]",
            "group-hover/item:scale-[1.04]",
            "group-hover/item:border-[var(--accent-bright)]/48",
            "group-hover/item:bg-[var(--accent)]/14",
            "group-hover/item:text-[var(--accent-highlight)]",
            "group-hover/item:shadow-[0_10px_30px_rgba(198,161,91,0.08)]",
            "sm:h-12 sm:w-12",
            "md:h-12 md:w-12",
            "lg:h-[3.25rem] lg:w-[3.25rem]",
            "xl:h-14 xl:w-14",
          )}
        >
          <Icon
            aria-hidden="true"
            className="h-[18px] w-[18px] sm:h-[19px] sm:w-[19px] md:h-[18px] md:w-[18px] lg:h-5 lg:w-5 xl:h-[21px] xl:w-[21px]"
            strokeWidth={1.7}
          />
        </span>

        <span
          className={cn(
            "mt-2.5 block w-full text-center",
            "font-[family:var(--font-accent)] text-[15px] font-bold uppercase tracking-[0.04em]",
            "text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.92)]",
            "sm:mt-3.5 sm:text-[17px]",
            "md:mt-3 md:text-[17px]",
            "lg:mt-4 lg:text-[19px]",
            "xl:text-[20px]",
          )}
        >
          {item.label}
        </span>

        <span className="mt-1 hidden font-[family:var(--font-accent)] text-[10px] font-medium uppercase tracking-[0.13em] text-white/42 transition-colors duration-300 group-hover/item:text-[var(--accent-bright)]/65 lg:block">
          Ver sección
        </span>
      </div>

      <ArrowUpRight
        aria-hidden="true"
        className={cn(
          "absolute right-3 top-3 z-10 h-4 w-4",
          "text-white/0",
          "transition-[transform,color,opacity] duration-300 ease-[var(--ease-premium)]",
          "group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5",
          "group-hover/item:text-[var(--accent-bright)]/80",
          "sm:right-3.5 sm:top-3.5",
          "lg:right-4 lg:top-4 lg:h-[18px] lg:w-[18px]",
        )}
        strokeWidth={1.7}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
      />
    </motion.a>
  );
}

export function QuickAccessCard() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <aside
      className="relative mx-auto w-full max-w-[560px] sm:max-w-[660px] md:max-w-[46rem] lg:mx-0 lg:max-w-none"
      aria-label="Accesos rápidos de Vincent Detail"
    >
      <nav
        aria-label="Accesos rápidos"
        className={cn(
          "relative isolate overflow-hidden rounded-[1.75rem] p-px",
          "bg-[linear-gradient(145deg,rgba(242,229,189,0.20),rgba(255,255,255,0.055)_42%,rgba(116,82,36,0.18)_100%)]",
          "shadow-[0_28px_84px_rgba(0,0,0,0.38)]",
          "sm:rounded-[1.95rem]",
          "lg:rounded-[2.05rem]",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-[calc(1.75rem-1px)]",
            "border border-white/[0.045]",
            "bg-[linear-gradient(150deg,rgba(255,255,255,0.075)_0%,rgba(255,255,255,0.018)_28%,rgba(7,7,7,0.90)_68%,rgba(4,4,4,0.97)_100%)]",
            "backdrop-blur-xl",
            "sm:rounded-[calc(1.95rem-1px)]",
            "lg:rounded-[calc(2.05rem-1px)]",
          )}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[var(--accent)]/14 blur-[64px] opacity-65"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 bottom-[-4rem] h-40 w-40 rounded-full bg-[var(--accent-bright)]/[0.035] blur-[70px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/42 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-4 left-1/2 z-30 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.18)_20%,rgba(223,195,124,0.24)_50%,rgba(255,255,255,0.18)_80%,transparent)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-4 top-1/2 z-30 h-px -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18)_20%,rgba(223,195,124,0.24)_50%,rgba(255,255,255,0.18)_80%,transparent)]"
          />

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            className={cn(
              "relative grid grid-cols-2",
              "min-h-[264px]",
              "sm:min-h-[308px]",
              "md:min-h-[312px]",
              "lg:min-h-[356px]",
              "xl:min-h-[392px]",
            )}
          >
            {quickAccessItems.map((item, index) => (
              <QuickAccessTile
                key={item.href}
                item={item}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        </div>
      </nav>
    </aside>
  );
}
