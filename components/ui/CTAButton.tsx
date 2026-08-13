"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackEvent, type TrackingEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  trackingEvent?: TrackingEvent;
  trackingLabel?: string;
  trackingSection?: string;
};

function isWhatsAppHref(
  href?: AnchorHTMLAttributes<HTMLAnchorElement>["href"],
) {
  if (!href || typeof href !== "string") return false;

  return (
    href.includes("wa.me") ||
    href.includes("whatsapp.com") ||
    href.includes("api.whatsapp")
  );
}

function resolveTrackingEvent(
  href: AnchorHTMLAttributes<HTMLAnchorElement>["href"],
  trackingEvent?: TrackingEvent,
): TrackingEvent | undefined {
  if (trackingEvent) return trackingEvent;
  return isWhatsAppHref(href) ? "whatsapp_click" : undefined;
}

export function CTAButton({
  children,
  className,
  variant = "primary",
  trackingEvent,
  trackingLabel,
  trackingSection,
  href,
  onClick,
  ...props
}: CTAButtonProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const eventName = resolveTrackingEvent(href, trackingEvent);

    if (eventName) {
      trackEvent(eventName, {
        label: trackingLabel,
        section: trackingSection ?? "cta",
        href: typeof href === "string" ? href : undefined,
      });
    }

    onClick?.(event);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "group relative isolate inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3",
        "font-[family:var(--font-accent)] text-[12px] font-bold uppercase tracking-[0.12em]",
        "transition-[transform,border-color,box-shadow,background-color,color] duration-300 ease-[var(--ease-premium)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-bright)] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "active:scale-[0.985]",
        "sm:text-[13px] lg:min-h-[3.2rem] lg:px-6 lg:text-[14px] lg:tracking-[0.11em]",
        "[&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-[var(--ease-premium)]",
        "group-hover:[&_svg]:scale-[1.06]",
        variant === "primary" &&
          [
            "border border-[rgba(242,229,189,0.42)]",
            "bg-[var(--gradient-cta-primary)]",
            "text-[#0b0905]",
            "shadow-[0_15px_34px_rgba(0,0,0,0.34),0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_20px_rgba(198,161,91,0.055)]",
            "hover:-translate-y-0.5",
            "hover:border-[rgba(242,229,189,0.58)]",
            "hover:shadow-[0_20px_46px_rgba(0,0,0,0.42),0_0_24px_rgba(223,195,124,0.09)]",
          ].join(" "),
        variant === "secondary" &&
          [
            "border border-white/[0.13]",
            "bg-[var(--gradient-cta-secondary)]",
            "text-[var(--text-primary)]",
            "shadow-[0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-md",
            "hover:-translate-y-0.5",
            "hover:border-[var(--line-strong)]",
            "hover:bg-[rgba(198,161,91,0.055)]",
            "hover:shadow-[0_18px_38px_rgba(0,0,0,0.3)]",
          ].join(" "),
        variant === "ghost" &&
          [
            "border border-transparent bg-transparent text-[var(--text-secondary)]",
            "hover:border-white/[0.07] hover:bg-white/[0.045]",
            "hover:text-[var(--text-primary)]",
          ].join(" "),
        className,
      )}
      {...props}
    >
      {variant === "primary" ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-white/66 to-transparent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-[38%] top-[-60%] h-[220%] w-[22%] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] opacity-0 blur-[1px] transition-[left,opacity] duration-700 ease-[var(--ease-premium)] group-hover:left-[118%] group-hover:opacity-90"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[16%] bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/54 to-transparent"
          />
        </>
      ) : null}

      {variant === "secondary" ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-white/26 to-transparent"
        />
      ) : null}

      <span className="relative z-10 inline-flex items-center justify-center gap-2.5">
        {children}
      </span>
    </a>
  );
}
