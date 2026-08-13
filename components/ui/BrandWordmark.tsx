import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

type BrandWordmarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandWordmark({
  className,
  compact = false,
}: BrandWordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline whitespace-nowrap font-[family:var(--font-brand)] font-semibold uppercase leading-none",
        compact ? "tracking-[0.035em]" : "tracking-[0.05em]",
        className
      )}
      aria-label={siteConfig.name}
    >
      <span className="text-[var(--text-primary)]">
        {siteConfig.brandPrimary}
      </span>
      <span className="mx-[0.08em] text-[1.06em] text-[var(--accent-bright)]">
        .
      </span>
      <span className="text-[var(--accent)]">
        {siteConfig.brandSecondary}
      </span>
    </span>
  );
}
