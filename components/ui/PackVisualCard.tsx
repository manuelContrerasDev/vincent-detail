"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CTAButton } from "@/components/ui/CTAButton";
import type { PackAccent } from "@/content/packs";
import { fadeUp, microTransition, softTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type PackVisualCardProps = {
  name: string;
  image: string;
  summary: string;
  accent: PackAccent;
  highlights: string[];
  index: number;
};

type AccentStyle = {
  frame: string;
  frameHover: string;
  label: string;
  dot: string;
  glow: string;
  glowSecondary: string;
  line: string;
  check: string;
  number: string;
  ctaHover: string;
};

const ACCENT_STYLES: Record<PackAccent, AccentStyle> = {
  bronce: {
    frame: "from-[#d9a46f]/46 via-white/[0.09] to-[#8f592f]/22",
    frameHover:
      "hover:from-[#e9b27b]/70 hover:via-white/[0.16] hover:to-[#a96839]/42",
    label: "text-[#e4b582]",
    dot: "bg-[#d9a06a] shadow-[0_0_18px_rgba(217,160,106,0.55)]",
    glow: "bg-[#bc7b43]/20",
    glowSecondary: "bg-[#7d4528]/13",
    line: "from-[#daa570]/0 via-[#daa570]/62 to-[#daa570]/0",
    check: "text-[#e4b582]",
    number: "text-[#dca973]/17",
    ctaHover: "hover:border-[#dca973]/30 hover:bg-[#dca973]/[0.055]",
  },

  plata: {
    frame: "from-[#edf2f7]/40 via-white/[0.095] to-[#919daa]/20",
    frameHover:
      "hover:from-[#f7f9fb]/64 hover:via-white/[0.17] hover:to-[#aeb8c5]/36",
    label: "text-[#edf1f5]",
    dot: "bg-[#dfe6ed] shadow-[0_0_18px_rgba(223,230,237,0.48)]",
    glow: "bg-[#dce3ea]/14",
    glowSecondary: "bg-[#8794a2]/11",
    line: "from-[#e7edf3]/0 via-[#e7edf3]/54 to-[#e7edf3]/0",
    check: "text-[#edf1f5]",
    number: "text-[#edf1f5]/13",
    ctaHover: "hover:border-[#e7edf3]/26 hover:bg-[#e7edf3]/[0.045]",
  },

  oro: {
    frame:
      "from-[var(--accent-bright)]/52 via-white/[0.10] to-[var(--accent-deep)]/25",
    frameHover:
      "hover:from-[var(--accent-highlight)]/76 hover:via-white/[0.18] hover:to-[var(--accent-warm)]/44",
    label: "text-[var(--accent-bright)]",
    dot: "bg-[var(--accent)] shadow-[0_0_20px_rgba(225,184,93,0.62)]",
    glow: "bg-[var(--accent)]/20",
    glowSecondary: "bg-[var(--accent-deep)]/13",
    line: "from-[var(--accent)]/0 via-[var(--accent-bright)]/68 to-[var(--accent)]/0",
    check: "text-[var(--accent-bright)]",
    number: "text-[var(--accent-bright)]/18",
    ctaHover:
      "hover:border-[var(--accent-bright)]/34 hover:bg-[var(--accent)]/[0.065]",
  },

  diamante: {
    frame: "from-[#ddf8fc]/45 via-white/[0.095] to-[#65b8c7]/22",
    frameHover:
      "hover:from-[#e6fbff]/70 hover:via-white/[0.17] hover:to-[#73c4d4]/40",
    label: "text-[#dbf7fc]",
    dot: "bg-[#bdebf3] shadow-[0_0_20px_rgba(189,235,243,0.54)]",
    glow: "bg-[#95dae6]/18",
    glowSecondary: "bg-[#4c9bab]/12",
    line: "from-[#c3eef5]/0 via-[#c3eef5]/60 to-[#c3eef5]/0",
    check: "text-[#d5f5fa]",
    number: "text-[#c3eef5]/15",
    ctaHover: "hover:border-[#bdebf3]/30 hover:bg-[#bdebf3]/[0.05]",
  },
};

export function PackVisualCard({
  name,
  summary,
  accent,
  highlights,
  index,
}: PackVisualCardProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const styles = ACCENT_STYLES[accent];
  const tierName = name.replace(/^Pack\s+/i, "");

  const whatsappHref = getWhatsAppUrl(
    `Hola, quiero cotizar el ${name} de Vincent.Detail.`,
  );

  return (
    <motion.article
      variants={shouldReduceMotion ? undefined : fadeUp}
      transition={softTransition}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.992 }}
      className={cn(
        "group relative h-full rounded-[1.8rem] bg-gradient-to-br p-px",
        "shadow-[0_24px_70px_rgba(0,0,0,0.30)]",
        "transition-[transform,filter,box-shadow] duration-500 ease-[var(--ease-premium)]",
        "motion-safe:hover:-translate-y-1",
        "motion-safe:hover:shadow-[0_34px_90px_rgba(0,0,0,0.40)]",
        styles.frame,
        styles.frameHover,
      )}
    >
      <div
        className={cn(
          "relative flex h-full min-h-[29rem] flex-col overflow-hidden rounded-[calc(1.8rem-1px)]",
          "border border-white/[0.05]",
          "bg-[linear-gradient(150deg,rgba(255,255,255,0.078)_0%,rgba(255,255,255,0.025)_24%,rgba(8,8,8,0.96)_62%,rgba(4,4,4,0.99)_100%)]",
          "px-5 py-5 backdrop-blur-2xl",
          "sm:min-h-[30rem] sm:px-6 sm:py-6",
          "md:min-h-[31rem]",
          "xl:min-h-[34rem] xl:px-5",
          "2xl:px-6",
          "transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-premium)]",
          "group-hover:border-white/[0.09]",
          "group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full blur-[72px]",
            "opacity-75 transition-[opacity,transform] duration-700 ease-[var(--ease-premium)]",
            "group-hover:scale-110 group-hover:opacity-100",
            styles.glow,
          )}
        />

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full blur-[84px]",
            "opacity-55 transition-[opacity,transform] duration-700 ease-[var(--ease-premium)]",
            "group-hover:scale-110 group-hover:opacity-85",
            styles.glowSecondary,
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
            "pointer-events-none absolute right-4 top-8 select-none",
            "font-[family:var(--font-accent)] text-[5.5rem] font-black leading-none tracking-[-0.075em]",
            "transition-[transform,opacity] duration-500 ease-[var(--ease-premium)]",
            "group-hover:-translate-y-1 group-hover:translate-x-1",
            "xl:text-[6rem]",
            styles.number,
          )}
        >
          {String(index).padStart(2, "0")}
        </span>

        <header className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className={cn(
                "h-1.5 w-1.5 shrink-0 rounded-full",
                "transition-transform duration-300 ease-[var(--ease-premium)]",
                "group-hover:scale-125",
                styles.dot,
              )}
            />

            <span
              className={cn(
                "truncate font-[family:var(--font-accent)]",
                "text-[11px] font-bold uppercase tracking-[0.165em]",
                "sm:text-[12px] lg:text-[13px]",
                styles.label,
              )}
            >
              Nivel {tierName}
            </span>
          </div>

          <span className="shrink-0 font-[family:var(--font-accent)] text-[11px] font-semibold tracking-[0.16em] text-white/30 transition-colors duration-300 group-hover:text-white/48 lg:text-[12px]">
            {String(index).padStart(2, "0")}
          </span>
        </header>

        <div className="relative z-10 mt-9 transition-transform duration-500 ease-[var(--ease-premium)] motion-safe:group-hover:-translate-y-0.5 sm:mt-10">
          <h3
            className={cn(
              "max-w-[12ch]",
              "font-[family:var(--font-heading)] font-semibold",
              "text-[2rem] leading-[0.98] tracking-[-0.052em] text-white",
              "sm:text-[2.2rem]",
              "lg:text-[2.35rem]",
              "xl:text-[2.2rem]",
              "2xl:text-[2.4rem]",
            )}
          >
            {name}
          </h3>

          <p
            className={cn(
              "mt-4 min-h-[5rem] text-pretty",
              "text-[14px] leading-[1.7] text-white/60",
              "transition-colors duration-300 group-hover:text-white/70",
              "sm:text-[15px]",
              "xl:text-[14px]",
              "2xl:text-[15px]",
            )}
          >
            {summary}
          </p>
        </div>

        <div
          aria-hidden="true"
          className={cn(
            "relative z-10 mt-5 h-px w-full bg-gradient-to-r",
            styles.line,
          )}
        />

        <ul className="relative z-10 mt-5 flex flex-1 flex-col gap-3.5">
          {highlights.slice(0, 3).map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 transition-transform duration-300 ease-[var(--ease-premium)] motion-safe:group-hover:translate-x-0.5"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                  "border border-white/[0.07] bg-white/[0.025]",
                )}
              >
                <Check
                  aria-hidden="true"
                  strokeWidth={2}
                  className={cn(
                    "h-3 w-3 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-110",
                    styles.check,
                  )}
                />
              </span>

              <span className="text-[13px] leading-5.5 text-white/72 sm:text-[14px] xl:text-[13px] 2xl:text-[14px]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <CTAButton
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost"
          trackingEvent="pack_click"
          trackingLabel={`Pack - ${name}`}
          trackingSection="packs"
          aria-label={`Cotizar ${name} por WhatsApp`}
          className={cn(
            "relative z-10 mt-7 min-h-[48px] w-full justify-between rounded-[0.95rem]",
            "border border-white/[0.09] bg-white/[0.035] px-4 py-3",
            "text-[12px] font-semibold tracking-[0.105em] text-white/80",
            "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
            "hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.20)]",
            "group-hover:border-white/[0.13]",
            "lg:text-[13px]",
            styles.ctaHover,
            "[&>span]:w-full [&>span]:justify-between",
          )}
        >
          Cotizar pack
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </CTAButton>

        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            styles.line,
          )}
        />
      </div>
    </motion.article>
  );
}
