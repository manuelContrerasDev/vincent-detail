"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  tag: string;
};

export function ServiceCard({
  title,
  description,
  price,
  tag,
}: ServiceCardProps) {
  const whatsappHref = getWhatsAppUrl(
    `Hola, quiero cotizar el servicio ${title} de Vincent.Detail.`
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.45 }}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080808]/92 p-4 shadow-[0_14px_38px_rgba(0,0,0,0.30)] ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D6B25E]/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.45)] sm:p-5 md:rounded-[1.5rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.12),transparent_34%)] opacity-80 transition duration-300 group-hover:opacity-100"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.26),transparent)]"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 text-left">
          <p className="font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E] sm:text-[11px]">
            {tag}
          </p>

          <h3 className="mt-3 font-[family:var(--font-rajdhani)] text-[21px] font-bold uppercase leading-[1.05] tracking-[0.045em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)] sm:text-[24px] md:text-[26px]">
            {title}
          </h3>
        </div>

        <div className="shrink-0 rounded-full border border-[#D6B25E]/20 bg-[#D6B25E]/10 px-3 py-1.5 font-[family:var(--font-rajdhani)] text-[10px] font-semibold uppercase tracking-[0.1em] text-[#F2D58A] shadow-[0_8px_22px_rgba(0,0,0,0.22)] sm:text-[11px]">
          {price}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="my-5 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.20),rgba(255,255,255,0.10),transparent)]"
      />

      <p className="text-[13px] leading-6 text-white/74 sm:text-[14px] sm:leading-7 md:text-[15px]">
        {description}
      </p>

      <div className="mt-auto pt-6">
        <CTAButton
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="group/button w-full justify-between border-white/15 bg-black/25 px-4 py-3 font-[family:var(--font-rajdhani)] text-[11px] uppercase tracking-[0.12em] backdrop-blur-sm transition duration-300 hover:border-[#D6B25E]/35 hover:bg-[#D6B25E]/10 sm:text-[12px]"
        >
          Solicitar información
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
          />
        </CTAButton>
      </div>
    </motion.article>
  );
}