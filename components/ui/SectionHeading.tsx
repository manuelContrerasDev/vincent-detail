import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex max-w-4xl flex-col",
        isCentered
          ? "mx-auto items-center text-center"
          : "mx-auto items-center text-center sm:mx-0 sm:items-start sm:text-left",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            isCentered ? "justify-center" : "justify-center sm:justify-start",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-8 sm:w-9",
              "bg-[linear-gradient(90deg,transparent,var(--accent-bright))]",
              "opacity-65",
              "shadow-[0_0_8px_rgba(198,161,91,0.06)]",
            )}
          />

          <p
            className={cn(
              "font-[family:var(--font-accent)]",
              "text-[11px] font-bold uppercase tracking-[0.165em]",
              "text-[var(--accent-bright)]",
              "sm:text-[12px]",
              "lg:text-[13px] lg:tracking-[0.145em]",
            )}
          >
            {eyebrow}
          </p>

          {isCentered ? (
            <span
              aria-hidden="true"
              className={cn(
                "h-px w-8 sm:w-9",
                "bg-[linear-gradient(270deg,transparent,var(--accent-bright))]",
                "opacity-65",
                "shadow-[0_0_8px_rgba(198,161,91,0.06)]",
              )}
            />
          ) : (
            <span
              aria-hidden="true"
              className={cn(
                "h-px w-8 sm:hidden",
                "bg-[linear-gradient(270deg,transparent,var(--accent-bright))]",
                "opacity-65",
                "shadow-[0_0_8px_rgba(198,161,91,0.06)]",
              )}
            />
          )}
        </div>
      ) : null}

      <HeadingTag
        className={cn(
          "mt-4 max-w-[18ch]",
          "font-[family:var(--font-heading)] font-semibold",
          "text-[clamp(2.15rem,5.5vw,4.75rem)]",
          "leading-[0.97] tracking-[-0.058em]",
          "text-[var(--text-primary)]",
          "drop-shadow-[0_14px_36px_rgba(0,0,0,0.34)]",
          "sm:mt-5",
          "lg:max-w-[19ch]",
          isCentered ? "mx-auto" : "mx-auto sm:mx-0",
        )}
      >
        {title}
      </HeadingTag>

      {description ? (
        <p
          className={cn(
            "text-pretty mt-4 max-w-2xl",
            "text-[15px] leading-7 text-[var(--text-secondary)]",
            "sm:mt-5 sm:text-[16px] sm:leading-7",
            "lg:mt-6 lg:text-[18px] lg:leading-8",
            !isCentered && "mx-auto sm:mx-0",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
