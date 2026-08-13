"use client";

import type { SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";
import { premiumEase } from "@/lib/motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

function InstagramLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.6 3c.3 1.9 1.4 3.3 3.4 4v3a8.3 8.3 0 0 1-3.4-1v6.2a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1v3.1a2.7 2.7 0 1 0 1.6 2.6V3h3Z" />
    </svg>
  );
}

export function ContactSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio con Vincent.Detail. Mi vehículo es [marca/modelo], estoy en [comuna] y puedo enviar fotos.",
  );

  const socialLinks = [
    {
      label: "Instagram",
      handle: siteConfig.instagram,
      description: "Resultados y procesos",
      href: siteConfig.instagramUrl,
      icon: InstagramLogo,
    },
    {
      label: "TikTok",
      handle: siteConfig.tiktok,
      description: "Trabajos recientes",
      href: siteConfig.tiktokUrl,
      icon: TikTokLogo,
    },
  ] as const;

  return (
    <SectionShell
      id="contacto"
      ariaLabelledBy="contact-heading"
      tone="deep"
      ambient="center"
      compact
      topDivider
    >
      <motion.section
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.48, ease: premiumEase }}
        className={cn(
          "relative mx-auto w-full max-w-6xl overflow-hidden",
          "rounded-[1.6rem] border border-white/[0.09]",
          "bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.014)_38%,rgba(5,5,5,0.95)_100%)]",
          "px-4 py-6 shadow-[0_24px_68px_rgba(0,0,0,0.32),0_0_28px_rgba(225,184,93,0.035)] backdrop-blur-2xl",
          "sm:rounded-[1.8rem] sm:px-6 sm:py-7",
          "md:px-7 md:py-8",
          "lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(24rem,1.08fr)] lg:items-center lg:gap-9 lg:px-8 lg:py-8",
          "xl:grid-cols-[minmax(0,0.86fr)_minmax(29rem,1.14fr)] xl:gap-11 xl:px-10",
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/38 to-transparent"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 -top-20 h-52 w-52 -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.075] blur-[84px] lg:left-auto lg:right-[-5rem] lg:translate-x-0"
        />

        <div className="relative mx-auto w-full max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <div id="contact-heading">
            <SectionHeading
              eyebrow="Contacto"
              title="Síguenos en mis redes sociales"
              description="Cotiza por WhatsApp o revisa nuestros últimos trabajos en redes."
              className="items-center text-center sm:items-center sm:text-center lg:items-start lg:text-left"
            />
          </div>

          <CTAButton
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            trackingEvent="contact_click"
            trackingLabel="Contacto - WhatsApp"
            trackingSection="contact"
            className="mx-auto mt-6 min-h-12 w-full max-w-md justify-between rounded-full px-5 text-[12px] tracking-[0.095em] sm:w-auto sm:min-w-[245px] sm:text-[13px] lg:mx-0"
          >
            <span className="inline-flex items-center gap-2.5">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Cotizar por WhatsApp
            </span>

            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </CTAButton>
        </div>

        <div className="relative mx-auto mt-7 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-0 lg:max-w-none">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${item.label} de ${siteConfig.name}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.24 }}
                transition={{
                  duration: 0.36,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                  ease: premiumEase,
                }}
                onClick={() =>
                  trackEvent("social_click", {
                    label: item.label,
                    section: "contact",
                    href: item.href,
                  })
                }
                className={cn(
                  "group/card relative overflow-hidden rounded-[1.15rem] border border-white/[0.085]",
                  "bg-[linear-gradient(145deg,rgba(255,255,255,0.048),rgba(255,255,255,0.012)_42%,rgba(6,6,6,0.96)_100%)]",
                  "px-4 py-4 shadow-[0_14px_36px_rgba(0,0,0,0.24)]",
                  "transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                  "motion-safe:hover:-translate-y-0.5",
                  "hover:border-[var(--accent-bright)]/28",
                  "hover:bg-[linear-gradient(145deg,rgba(225,184,93,0.075),rgba(255,255,255,0.018)_42%,rgba(6,6,6,0.96)_100%)]",
                  "hover:shadow-[0_20px_48px_rgba(0,0,0,0.30),0_0_20px_rgba(225,184,93,0.04)]",
                  "sm:rounded-[1.25rem] sm:px-5 sm:py-5",
                  "lg:min-h-[9rem]",
                )}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.025] blur-[48px] transition-colors duration-500 group-hover/card:bg-[var(--accent)]/[0.09]"
                />

                <div className="relative flex h-full items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.025] text-[var(--accent-bright)] transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)] group-hover/card:scale-[1.04] group-hover/card:border-[var(--accent-bright)]/30 group-hover/card:bg-[var(--accent)]/[0.08] group-hover/card:shadow-[0_0_20px_rgba(225,184,93,0.07)]">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <div className="min-w-0 flex-1 text-left">
                    <p className="font-[family:var(--font-accent)] text-[10px] font-bold uppercase tracking-[0.13em] text-white/42 sm:text-[11px]">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate text-[15px] font-semibold leading-5 text-white/90 sm:text-[16px] lg:text-[17px]">
                      {item.handle}
                    </p>

                    <p className="mt-1 truncate text-[12px] leading-4 text-white/42 sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02] text-white/34 transition-[transform,border-color,background-color,color] duration-300 ease-[var(--ease-premium)] group-hover/card:border-[var(--accent-bright)]/22 group-hover/card:bg-[var(--accent)]/[0.07] group-hover/card:text-[var(--accent-bright)]">
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5"
                    />
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/52 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                />
              </motion.a>
            );
          })}
        </div>
      </motion.section>
    </SectionShell>
  );
}
