"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export function FloatingWhatsApp() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero más información sobre los servicios de Vincent.Detail.",
  );

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      label: "Botón flotante WhatsApp",
      section: "floating_whatsapp",
      href: whatsappHref,
    });
  };

  return (
    <motion.a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${siteConfig.name}`}
      onClick={handleClick}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        delay: shouldReduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      className={cn(
        "group fixed bottom-4 right-4 z-[60]",
        "inline-flex h-[54px] w-[54px] items-center justify-center",
        "overflow-hidden rounded-full border border-white/[0.10]",
        "bg-[linear-gradient(145deg,rgba(18,18,18,0.94),rgba(5,5,5,0.98))]",
        "shadow-[0_18px_46px_rgba(0,0,0,0.42),0_0_0_1px_rgba(255,255,255,0.025)_inset]",
        "backdrop-blur-xl",
        "transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[var(--ease-premium)]",
        "hover:-translate-y-1",
        "hover:border-[#25D366]/34",
        "hover:shadow-[0_24px_58px_rgba(0,0,0,0.48),0_0_24px_rgba(37,211,102,0.10)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        "sm:bottom-5 sm:right-5 sm:h-auto sm:w-auto sm:min-h-[54px] sm:gap-3 sm:px-2.5 sm:pr-4",
        "lg:bottom-6 lg:right-6",
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[18%] top-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#25D366]/8 blur-[34px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        className={cn(
          "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          "border border-[#25D366]/26",
          "bg-[linear-gradient(145deg,#29d96d_0%,#22c55e_52%,#169c50_100%)]",
          "text-[#06140b]",
          "shadow-[0_8px_22px_rgba(0,0,0,0.24),0_0_18px_rgba(37,211,102,0.10)]",
          "transition-[transform,box-shadow,filter] duration-300 ease-[var(--ease-premium)]",
          "group-hover:scale-[1.045]",
          "group-hover:shadow-[0_10px_26px_rgba(0,0,0,0.28),0_0_22px_rgba(37,211,102,0.14)]",
        )}
      >
        <MessageCircle
          aria-hidden="true"
          className="h-[19px] w-[19px]"
          strokeWidth={2}
        />
      </span>

      <span className="relative z-10 hidden min-w-0 flex-col text-left sm:flex">
        <span className="font-[family:var(--font-accent)] text-[10px] font-semibold uppercase tracking-[0.12em] text-white/42">
          Contacto directo
        </span>

        <span className="mt-0.5 font-[family:var(--font-accent)] text-[13px] font-bold uppercase tracking-[0.055em] text-white/88 transition-colors duration-300 group-hover:text-white">
          WhatsApp
        </span>
      </span>

      <span
        aria-hidden="true"
        className="absolute right-3 top-3 hidden h-1.5 w-1.5 rounded-full bg-[#25D366] shadow-[0_0_10px_rgba(37,211,102,0.55)] sm:block"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-[#25D366]/26 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.a>
  );
}
