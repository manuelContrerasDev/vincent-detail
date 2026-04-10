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
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="group rounded-[1.35rem] border border-white/10 bg-black/10 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D6B25E]/20 hover:bg-black/15 md:rounded-[1.4rem]"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="font-[family:var(--font-rajdhani)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D6B25E]">
            {tag}
          </p>

          <h3 className="mt-3 font-[family:var(--font-rajdhani)] text-[1.35rem] font-semibold leading-[1.06] tracking-tight text-[#f7f3eb] md:text-[1.5rem]">
            {title}
          </h3>
        </div>

        <div className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-[family:var(--font-rajdhani)] text-xs font-medium uppercase tracking-[0.08em] text-[#F2D58A]">
          {price}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-5 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)]"
      />

      <p className="mt-5 text-sm leading-7 text-white/70">
        {description}
      </p>

      <div className="mt-6">
        <CTAButton
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="w-full justify-between"
        >
          Solicitar información
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </CTAButton>
      </div>
    </motion.article>
  );
}