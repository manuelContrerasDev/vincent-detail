"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { fadeUp, softTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  tag: string;
  index: number;
};

export function ServiceCard({
  title,
  description,
  price,
  tag,
  index,
}: ServiceCardProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const whatsappHref = getWhatsAppUrl(
    `Hola, quiero cotizar el servicio ${title} de Vincent.Detail.`,
  );

  return (
    <motion.article
      variants={shouldReduceMotion ? undefined : fadeUp}
      transition={softTransition}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.992 }}
      className={cn(
        "group relative h-full rounded-[1.55rem] bg-gradient-to-br p-px",
        "from-[var(--accent-bright)]/34 via-white/[0.075] to-[var(--accent-deep)]/18",
        "shadow-[0_24px_70px_rgba(0,0,0,0.30)]",
        "transition-[transform,filter,box-shadow,background-image] duration-500 ease-[var(--ease-premium)]",
        "motion-safe:hover:-translate-y-1",
        "motion-safe:hover:shadow-[0_34px_90px_rgba(0,0,0,0.40)]",
        "hover:from-[var(--accent-bright)]/46 hover:via-white/[0.11] hover:to-[var(--accent-warm)]/26",
        "sm:rounded-[1.65rem]",
      )}
    >
      <div
        className={cn(
          "relative flex h-full min-h-[17rem] flex-col overflow-hidden",
          "rounded-[calc(1.55rem-1px)] border border-white/[0.05]",
          "bg-[linear-gradient(150deg,rgba(255,255,255,0.078)_0%,rgba(255,255,255,0.025)_24%,rgba(8,8,8,0.96)_62%,rgba(4,4,4,0.99)_100%)]",
          "p-4 backdrop-blur-2xl",
          "transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-premium)]",
          "group-hover:border-white/[0.09]",
          "group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
          "sm:min-h-[18.5rem] sm:rounded-[calc(1.65rem-1px)] sm:p-5",
          "lg:min-h-[20rem] lg:p-5",
          "xl:min-h-[21rem] xl:p-6",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full blur-[72px]",
            "bg-[var(--accent)]/13",
            "opacity-70 transition-[opacity,transform] duration-700 ease-[var(--ease-premium)]",
            "group-hover:scale-110 group-hover:opacity-90",
          )}
        />

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full blur-[84px]",
            "bg-[var(--accent-deep)]/9",
            "opacity-50 transition-[opacity,transform] duration-700 ease-[var(--ease-premium)]",
            "group-hover:scale-110 group-hover:opacity-72",
          )}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/38 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 translate-x-[-130%] skew-x-[-18deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.055),transparent)] transition-transform duration-700 ease-[var(--ease-premium)] group-hover:translate-x-[130%]"
        />

        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute right-3 top-6 select-none",
            "font-[family:var(--font-accent)] text-[4.4rem] font-black leading-none tracking-[-0.075em]",
            "text-[var(--accent-bright)]/[0.12]",
            "transition-[transform,opacity] duration-500 ease-[var(--ease-premium)]",
            "group-hover:-translate-y-1 group-hover:translate-x-1",
            "sm:text-[4.9rem] lg:text-[5.25rem]",
          )}
        >
          {String(index).padStart(2, "0")}
        </span>

        <header className="relative z-10 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className={cn(
                "h-1.5 w-1.5 shrink-0 rounded-full",
                "bg-[var(--accent)] shadow-[0_0_16px_rgba(211,165,47,0.38)]",
                "transition-transform duration-300 ease-[var(--ease-premium)]",
                "group-hover:scale-125",
              )}
            />

            <span className="truncate font-[family:var(--font-accent)] text-[10px] font-bold uppercase tracking-[0.145em] text-[var(--accent-bright)] sm:text-[11px] lg:text-[12px] xl:text-[13px]">
              {tag}
            </span>
          </div>

          <span className="shrink-0 font-[family:var(--font-accent)] text-[10px] font-semibold tracking-[0.14em] text-white/28 transition-colors duration-300 group-hover:text-white/48 sm:text-[11px]">
            {String(index).padStart(2, "0")}
          </span>
        </header>

        <div className="relative z-10 mt-6 transition-transform duration-500 ease-[var(--ease-premium)] motion-safe:group-hover:-translate-y-0.5 sm:mt-7 lg:mt-8">
          <h3 className="min-h-[3rem] max-w-[16ch] font-[family:var(--font-heading)] text-[1.5rem] font-semibold leading-[1.01] tracking-[-0.045em] text-white sm:min-h-[3.3rem] sm:text-[1.65rem] lg:text-[1.8rem] xl:text-[1.9rem]">
            {title}
          </h3>

          <p className="mt-3.5 line-clamp-3 text-[13px] leading-[1.6] text-white/66 transition-colors duration-300 group-hover:text-white/72 sm:text-[14px] sm:leading-6 lg:text-[15px] lg:leading-6.5">
            {description}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="relative z-10 mt-5 h-px w-full bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent-bright)]/48 to-[var(--accent)]/0"
        />

        <div className="relative z-10 mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="min-w-0">
            <p className="font-[family:var(--font-accent)] text-[9px] font-semibold uppercase tracking-[0.125em] text-white/34 sm:text-[10px] lg:text-[11px]">
              Valor referencial
            </p>

            <p className="mt-1.5 font-[family:var(--font-accent)] text-[17px] font-bold tracking-[-0.015em] text-[var(--accent-highlight)] sm:text-[18px] lg:text-[20px]">
              {price}
            </p>
          </div>

          <CTAButton
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            trackingEvent="service_click"
            trackingLabel={`Servicio - ${title}`}
            trackingSection="services"
            aria-label={`Consultar ${title} por WhatsApp`}
            className={cn(
              "min-h-10 shrink-0 rounded-full",
              "border border-white/[0.09] bg-white/[0.03] px-3.5 py-2",
              "text-[10px] tracking-[0.095em] text-white/76",
              "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
              "hover:border-[var(--accent-bright)]/28 hover:bg-[var(--accent)]/[0.05] hover:text-white",
              "hover:shadow-[0_12px_30px_rgba(0,0,0,0.20)]",
              "group-hover:border-white/[0.13]",
              "sm:min-h-11 sm:px-4 sm:text-[11px]",
              "lg:text-[12px]",
            )}
          >
            Consultar
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </CTAButton>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent-bright)]/58 to-[var(--accent)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    </motion.article>
  );
}
