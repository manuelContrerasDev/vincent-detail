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
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col",
        align === "center"
          ? "mx-auto items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="font-[family:var(--font-rajdhani)] text-[12px] font-bold uppercase tracking-[0.24em] text-[#D6B25E] md:text-[13px] md:tracking-[0.28em]">
          {eyebrow}
        </p>
      ) : null}

      <HeadingTag className="mt-3 font-[family:var(--font-heading)] text-[32px] font-bold uppercase leading-[1.02] tracking-[-0.03em] text-[#f7f3eb] drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-[38px] md:text-[46px] lg:text-[54px]">
        {title}
      </HeadingTag>

      {description ? (
        <p className="mt-4 max-w-2xl font-[family:var(--font-body)] text-[15px] leading-7 text-white/72 sm:text-[16px] md:text-[17px] md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}