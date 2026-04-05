type TestimonialCardProps = {
  name: string;
  quote: string;
};

export function TestimonialCard({
  name,
  quote,
}: TestimonialCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/3 p-6">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="inline-block h-2.5 w-2.5 rounded-full bg-[#d4af63]"
          />
        ))}
      </div>

      <p className="text-sm leading-7 text-white/75">“{quote}”</p>

      <p className="mt-5 text-sm font-semibold text-[#f6f2ea]">{name}</p>
    </article>
  );
}