import Image from "next/image";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { PackAccent } from "@/content/packs";

type PackVisualCardProps = {
  name: string;
  image: string;
  summary: string;
  accent: PackAccent;
  highlights: string[];
};

const ACCENT_STYLES: Record<
  PackAccent,
  {
    border: string;
    badge: string;
    glow: string;
    check: string;
    checkBg: string;
    ring: string;
  }
> = {
  bronce: {
    border: "border-[#9A6A3A]/55 hover:border-[#C18B58]/72",
    badge:
      "border-[#C18B58]/24 bg-[linear-gradient(135deg,rgba(193,139,88,0.18),rgba(154,106,58,0.14))] text-[#C18B58]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(193,139,88,0.20),transparent_26%)]",
    check: "text-[#C18B58]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(193,139,88,0.20),rgba(154,106,58,0.16))]",
    ring: "group-hover:ring-[#C18B58]/18",
  },
  plata: {
    border: "border-[#AEB6C2]/52 hover:border-[#D9E0EA]/70",
    badge:
      "border-[#D9E0EA]/22 bg-[linear-gradient(135deg,rgba(217,224,234,0.18),rgba(174,182,194,0.14))] text-[#E4EAF2]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(217,224,234,0.20),transparent_26%)]",
    check: "text-[#E4EAF2]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(217,224,234,0.20),rgba(174,182,194,0.16))]",
    ring: "group-hover:ring-[#D9E0EA]/18",
  },
  oro: {
    border: "border-[#D6B25E]/62 hover:border-[#F2D58A]/80",
    badge:
      "border-[#F2D58A]/24 bg-[linear-gradient(135deg,rgba(242,213,138,0.18),rgba(169,123,30,0.14))] text-[#F2D58A]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.24),transparent_26%)]",
    check: "text-[#F2D58A]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(242,213,138,0.20),rgba(169,123,30,0.16))]",
    ring: "group-hover:ring-[#F2D58A]/20",
  },
  diamante: {
    border: "border-[#7FD6E6]/54 hover:border-[#A9EEFF]/72",
    badge:
      "border-[#A9EEFF]/22 bg-[linear-gradient(135deg,rgba(169,238,255,0.18),rgba(127,214,230,0.14))] text-[#C7F6FF]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(169,238,255,0.20),transparent_26%)]",
    check: "text-[#C7F6FF]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(169,238,255,0.20),rgba(127,214,230,0.16))]",
    ring: "group-hover:ring-[#A9EEFF]/18",
  },
};

export function PackVisualCard({
  name,
  image,
  summary,
  accent,
  highlights,
}: PackVisualCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.45rem] border bg-black transition duration-300 shadow-[0_14px_36px_rgba(0,0,0,0.20)] md:rounded-[1.65rem]",
        styles.border
      )}
    >
      <div className="absolute inset-0 rounded-[1.45rem] ring-1 ring-inset ring-white/6 transition duration-300 md:rounded-[1.65rem]" />
      <div
        className={cn(
          "absolute inset-0 rounded-[1.45rem] ring-1 ring-inset ring-transparent transition duration-300 md:rounded-[1.65rem]",
          styles.ring
        )}
      />

      <div className="relative aspect-[5/6] min-h-[400px] overflow-hidden sm:min-h-[460px] md:min-h-[520px] xl:min-h-[620px]">
        <Image
          src={image}
          alt={name}
          fill
          priority={name === "Pack Bronce"}
          sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        <div className={cn("absolute inset-0", styles.glow)} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.16),rgba(0,0,0,0.62))]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0))] md:h-28" />

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5 lg:p-6">
          <div className="rounded-[1.1rem] border border-white/14 bg-black/70 p-3.5 sm:p-4 md:p-5 lg:p-6 backdrop-blur-md shadow-[0_12px_28px_rgba(0,0,0,0.20)]">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-col items-start gap-2 sm:gap-3">
                <span
                  className={cn(
                    "font-[family:var(--font-rajdhani)] inline-flex shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] sm:px-3 sm:py-1.5 sm:text-[10px]",
                    styles.badge
                  )}
                >
                  {accent}
                </span>

                <div className="min-w-0">
                  <h3 className="font-[family:var(--font-rajdhani)] text-[1.08rem] font-bold uppercase tracking-[0.05em] text-[#f7f3eb] sm:text-[1.2rem] md:text-[1.4rem] xl:text-[1.7rem]">
                    {name}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-white/80 sm:text-[13px] sm:leading-6 md:text-[14px] xl:text-[16px]">
                    {summary}
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.16),rgba(255,255,255,0.10),transparent)]" />

              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                    <span
                      className={cn(
                        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:h-5 sm:w-5",
                        styles.checkBg
                      )}
                    >
                      <Check className={cn("h-3 w-3 sm:h-3.5 sm:w-3.5", styles.check)} />
                    </span>
                    <span className="text-[12px] leading-5 text-white/84 sm:text-[13px] sm:leading-6 md:text-[14px] xl:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-1 sm:pt-2">
                <CTAButton
                  href={getWhatsAppUrl(`Hola, quiero cotizar el ${name} de Vincent.Detail.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-4 py-3 text-[11px] sm:text-[12px] md:py-3.5 md:text-[13px]"
                >
                  Cotizar
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}