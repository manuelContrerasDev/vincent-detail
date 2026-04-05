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
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.30em] text-[#D6B25E] md:text-sm md:tracking-[0.32em]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-[#f7f3eb] md:text-5xl lg:text-[3.25rem]">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}