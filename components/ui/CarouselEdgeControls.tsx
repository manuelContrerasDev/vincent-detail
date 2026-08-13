"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CarouselEdgeControlsProps = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
};

const controlClassName = cn(
  "group/control pointer-events-auto relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full",
  "border border-white/[0.10] bg-black/36 text-white/74",
  "shadow-[0_10px_30px_rgba(0,0,0,0.30)] backdrop-blur-xl",
  "transition-[opacity,transform,border-color,background-color,color,box-shadow] duration-300 ease-[var(--ease-premium)]",
  "hover:-translate-y-px hover:border-[var(--accent-bright)]/32",
  "hover:bg-[var(--accent)]/[0.08] hover:text-[var(--accent-highlight)]",
  "hover:shadow-[0_12px_34px_rgba(0,0,0,0.34),0_0_18px_rgba(225,184,93,0.07)]",
  "active:translate-y-0 active:scale-[0.95]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-bright)]",
  "focus-visible:ring-offset-2 focus-visible:ring-offset-black",
);

export function CarouselEdgeControls({
  canScrollLeft,
  canScrollRight,
  onPrevious,
  onNext,
  className,
}: CarouselEdgeControlsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-1 top-1/2 z-30 flex -translate-y-1/2 items-center justify-between",
        className,
      )}
    >
      <button
        type="button"
        aria-label="Ver elementos anteriores"
        onClick={onPrevious}
        disabled={!canScrollLeft}
        className={cn(
          controlClassName,
          canScrollLeft
            ? "opacity-90"
            : "pointer-events-none -translate-x-1.5 opacity-0",
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,217,141,0.10),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover/control:opacity-100"
        />

        <ChevronLeft
          aria-hidden="true"
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/control:-translate-x-0.5"
          strokeWidth={1.9}
        />
      </button>

      <button
        type="button"
        aria-label="Ver más elementos"
        onClick={onNext}
        disabled={!canScrollRight}
        className={cn(
          controlClassName,
          canScrollRight
            ? "opacity-90"
            : "pointer-events-none translate-x-1.5 opacity-0",
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,217,141,0.10),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover/control:opacity-100"
        />

        <ChevronRight
          aria-hidden="true"
          className="relative z-10 h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/control:translate-x-0.5"
          strokeWidth={1.9}
        />
      </button>
    </div>
  );
}
