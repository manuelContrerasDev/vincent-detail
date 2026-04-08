type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D6B25E] md:text-[12px] md:tracking-[0.32em]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-[family:var(--font-heading)] mt-3 text-3xl font-semibold leading-[1.02] tracking-tight text-[#f7f3eb] md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}