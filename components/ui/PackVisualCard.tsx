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
    line: string;
  }
> = {
  bronce: {
    border: "border-[#9A6A3A]/45 hover:border-[#C18B58]/70",
    badge: "border-[#C18B58]/24 bg-[#C18B58]/10 text-[#D9A06F]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(193,139,88,0.20),transparent_32%)]",
    check: "text-[#D9A06F]",
    checkBg: "bg-[#C18B58]/12 border-[#C18B58]/20",
    line: "from-transparent via-[#C18B58]/32 to-transparent",
  },
  plata: {
    border: "border-[#AEB6C2]/42 hover:border-[#D9E0EA]/68",
    badge: "border-[#D9E0EA]/22 bg-[#D9E0EA]/10 text-[#E4EAF2]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(217,224,234,0.16),transparent_32%)]",
    check: "text-[#E4EAF2]",
    checkBg: "bg-[#D9E0EA]/10 border-[#D9E0EA]/18",
    line: "from-transparent via-[#D9E0EA]/26 to-transparent",
  },
  oro: {
    border: "border-[#D6B25E]/52 hover:border-[#F2D58A]/76",
    badge: "border-[#F2D58A]/24 bg-[#D6B25E]/12 text-[#F2D58A]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.22),transparent_32%)]",
    check: "text-[#F2D58A]",
    checkBg: "bg-[#D6B25E]/12 border-[#F2D58A]/20",
    line: "from-transparent via-[#D6B25E]/36 to-transparent",
  },
  diamante: {
    border: "border-[#7FD6E6]/42 hover:border-[#A9EEFF]/68",
    badge: "border-[#A9EEFF]/22 bg-[#7FD6E6]/10 text-[#C7F6FF]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(169,238,255,0.18),transparent_32%)]",
    check: "text-[#C7F6FF]",
    checkBg: "bg-[#7FD6E6]/10 border-[#A9EEFF]/18",
    line: "from-transparent via-[#A9EEFF]/28 to-transparent",
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

  const whatsappHref = getWhatsAppUrl(
    `Hola, quiero cotizar el ${name} de Vincent.Detail.`
  );

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border bg-[#080808] shadow-[0_14px_36px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_58px_rgba(0,0,0,0.45)] md:rounded-[1.5rem]",
        styles.border
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-white/[0.04]"
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-10 opacity-70 transition duration-300 group-hover:opacity-100",
          styles.glow
        )}
      />

      <div className="relative aspect-[16/9] overflow-hidden bg-black">
        <Image
          src={image}
          alt={name}
          fill
          priority={name === "Pack Bronce"}
          sizes="(max-width: 767px) 360px, (max-width: 1279px) 50vw, 25vw"
          className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.18)_52%,rgba(0,0,0,0.78)_100%)]"
        />

        <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
          <div className="min-w-0 text-left">
            <span
              className={cn(
                "font-[family:var(--font-rajdhani)] inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em]",
                styles.badge
              )}
            >
              {accent}
            </span>

            <h3 className="font-[family:var(--font-rajdhani)] mt-2.5 text-[20px] font-bold uppercase leading-none tracking-[0.055em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.78)] sm:text-[22px] md:text-[24px] xl:text-[22px]">
              {name}
            </h3>
          </div>
        </div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col p-3.5 sm:p-4 md:p-4 xl:p-4">
        <p className="text-[12px] leading-5 text-white/74 sm:text-[13px] sm:leading-6 xl:text-[12px] xl:leading-5">
          {summary}
        </p>

        <div
          aria-hidden="true"
          className={cn("my-3.5 h-px w-full bg-gradient-to-r", styles.line)}
        />

        <ul className="space-y-2.5 xl:space-y-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                className={cn(
                  "mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border",
                  styles.checkBg
                )}
              >
                <Check
                  aria-hidden="true"
                  className={cn("h-3 w-3", styles.check)}
                />
              </span>

              <span className="text-[12px] leading-5 text-white/82 sm:text-[13px] sm:leading-6 xl:text-[12px] xl:leading-5">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <CTAButton
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            trackingEvent="pack_click"
            trackingLabel={`Pack - ${name}`}
            trackingSection="packs"
            className="w-full px-3 py-2.5 text-[10px] tracking-[0.12em] sm:text-[11px] md:py-3 xl:text-[10px]"
          >
            Cotizar
          </CTAButton>
        </div>
      </div>
    </article>
  );
}