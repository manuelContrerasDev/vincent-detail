import type { ReactNode } from "react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/utils";

type SectionTone = "base" | "soft" | "deep";
type AmbientPosition = "left" | "right" | "center" | "none";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabelledBy?: string;
  ariaLabel?: string;
  tone?: SectionTone;
  ambient?: AmbientPosition;
  compact?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;
};

const toneStyles: Record<SectionTone, string> = {
  base: "bg-[linear-gradient(180deg,var(--page)_0%,#060605_48%,var(--page-deep)_100%)]",
  soft: "bg-[linear-gradient(180deg,var(--page-soft)_0%,#0b0a08_48%,#070706_100%)]",
  deep: "bg-[linear-gradient(180deg,var(--page-deep)_0%,#050504_50%,#020202_100%)]",
};

const ambientStyles: Record<AmbientPosition, string> = {
  left: "left-[-10rem] top-[6%] h-[24rem] w-[24rem] sm:left-[-12rem] sm:h-[30rem] sm:w-[30rem] lg:left-[-13rem] lg:h-[34rem] lg:w-[34rem]",
  right:
    "right-[-10rem] top-[8%] h-[25rem] w-[25rem] sm:right-[-12rem] sm:h-[31rem] sm:w-[31rem] lg:right-[-13rem] lg:h-[35rem] lg:w-[35rem]",
  center:
    "left-1/2 top-[-10rem] h-[24rem] w-[32rem] -translate-x-1/2 sm:top-[-12rem] sm:h-[30rem] sm:w-[42rem] lg:top-[-14rem] lg:h-[34rem] lg:w-[50rem]",
  none: "hidden",
};

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
  ariaLabelledBy,
  ariaLabel,
  tone = "base",
  ambient = "none",
  compact = false,
  topDivider = true,
  bottomDivider = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      className={cn(
        "relative isolate overflow-hidden",
        compact
          ? "py-12 sm:py-14 lg:py-[4.5rem] xl:py-20"
          : "py-18 sm:py-22 lg:py-28 xl:py-32",
        toneStyles[tone],
        className,
      )}
    >
      {topDivider ? (
        <>
          <div
            aria-hidden="true"
            className="section-boundary absolute inset-x-0 top-0 z-[3]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-[2] h-16 w-[68%] max-w-3xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--accent-soft-strong),transparent_68%)] opacity-45 blur-2xl"
          />
        </>
      ) : null}

      <div
        aria-hidden="true"
        className={cn(
          "ambient-orb pointer-events-none absolute rounded-full",
          "bg-[var(--accent)] opacity-[0.055]",
          "blur-[90px] sm:blur-[110px] lg:blur-[125px]",
          ambientStyles[ambient],
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute rounded-full",
          "bg-[var(--accent-bright)] opacity-[0.025] blur-[70px]",
          ambient === "left" && "left-[2%] top-[18%] h-40 w-40 sm:h-52 sm:w-52",
          ambient === "right" &&
            "right-[2%] top-[20%] h-40 w-40 sm:h-52 sm:w-52",
          ambient === "center" &&
            "left-1/2 top-[8%] h-40 w-56 -translate-x-1/2 sm:h-52 sm:w-72",
          ambient === "none" && "hidden",
        )}
      />

      <div
        aria-hidden="true"
        className="soft-grid pointer-events-none absolute inset-0 opacity-[0.2] sm:opacity-[0.24]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),transparent)] sm:h-44"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(0,0,0,0.15),transparent)] sm:h-36"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[28%] bg-[linear-gradient(90deg,rgba(255,255,255,0.008),transparent)]"
      />

      <SectionContainer
        className={cn(
          "relative z-10",
          "transition-[opacity,transform] duration-[var(--duration-slow)] ease-[var(--ease-premium)]",
          containerClassName,
        )}
      >
        {children}
      </SectionContainer>

      {bottomDivider ? (
        <>
          <div
            aria-hidden="true"
            className="section-boundary absolute inset-x-0 bottom-0 z-[3]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 z-[2] h-14 w-[62%] max-w-2xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,var(--accent-soft),transparent_70%)] opacity-35 blur-2xl"
          />
        </>
      ) : null}
    </section>
  );
}
