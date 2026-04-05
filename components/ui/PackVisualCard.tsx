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
  }
> = {
  bronce: {
    border: "border-[#9A6A3A]/45 hover:border-[#C18B58]/60",
    badge:
      "border-[#C18B58]/20 bg-[linear-gradient(135deg,rgba(193,139,88,0.14),rgba(154,106,58,0.12))] text-[#C18B58]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(193,139,88,0.16),transparent_24%)]",
    check: "text-[#C18B58]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(193,139,88,0.18),rgba(154,106,58,0.14))]",
  },
  plata: {
    border: "border-[#AEB6C2]/40 hover:border-[#D9E0EA]/60",
    badge:
      "border-[#D9E0EA]/18 bg-[linear-gradient(135deg,rgba(217,224,234,0.14),rgba(174,182,194,0.12))] text-[#E4EAF2]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(217,224,234,0.16),transparent_24%)]",
    check: "text-[#E4EAF2]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(217,224,234,0.18),rgba(174,182,194,0.14))]",
  },
  oro: {
    border: "border-[#D6B25E]/50 hover:border-[#F2D58A]/65",
    badge:
      "border-[#F2D58A]/20 bg-[linear-gradient(135deg,rgba(242,213,138,0.14),rgba(169,123,30,0.12))] text-[#F2D58A]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.18),transparent_24%)]",
    check: "text-[#F2D58A]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(242,213,138,0.18),rgba(169,123,30,0.14))]",
  },
  diamante: {
    border: "border-[#7FD6E6]/40 hover:border-[#A9EEFF]/60",
    badge:
      "border-[#A9EEFF]/18 bg-[linear-gradient(135deg,rgba(169,238,255,0.14),rgba(127,214,230,0.12))] text-[#C7F6FF]",
    glow: "bg-[radial-gradient(circle_at_top_right,rgba(169,238,255,0.16),transparent_24%)]",
    check: "text-[#C7F6FF]",
    checkBg:
      "bg-[linear-gradient(135deg,rgba(169,238,255,0.18),rgba(127,214,230,0.14))]",
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
        "group overflow-hidden rounded-[1.35rem] border bg-black transition duration-300 md:rounded-[1.45rem]",
        styles.border
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
        />

        <div className={cn("absolute inset-0", styles.glow)} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.06),rgba(0,0,0,0.34))]" />

        <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-3">
          <div className="rounded-[1rem] border border-white/10 bg-black/60 p-3 backdrop-blur-md md:rounded-[1.1rem]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-[#f7f3eb] md:text-[1.3rem]">
                  {name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-white/70 md:text-sm md:leading-6">
                  {summary}
                </p>
              </div>

              <span
                className={cn(
                  "shrink-0 rounded-full border px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] md:px-2.5 md:text-[10px]",
                  styles.badge
                )}
              >
                {accent}
              </span>
            </div>

            <ul className="mt-3 space-y-1.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded-full",
                      styles.checkBg
                    )}
                  >
                    <Check className={cn("h-2.5 w-2.5", styles.check)} />
                  </span>
                  <span className="text-[11px] leading-5 text-white/75 md:text-xs">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <CTAButton
                href={getWhatsAppUrl(`Hola, quiero cotizar el ${name} de Vincent.Detail.`)}
                target="_blank"
                rel="noreferrer"
                className="w-full px-4 py-2.5 text-xs md:text-sm"
              >
                Cotizar
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}