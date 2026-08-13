"use client";

import type { SVGProps } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { CTAButton } from "@/components/ui/CTAButton";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type NavigationHref = (typeof navigation)[number]["href"];

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

function MobileMenuBrandLogo() {
  return (
    <picture className="block h-full w-full">
      <source
        media="(max-width: 639px)"
        srcSet="/images/logo/logo-marca-mobile-transparent.png"
      />
      <img
        src="/images/logo/logo-marca-transparent.png"
        alt={siteConfig.name}
        width={1799}
        height={321}
        decoding="async"
        className="block h-full w-full object-contain object-center"
      />
    </picture>
  );
}

type MobileMenuProps = {
  isOpen: boolean;
  activeSection: NavigationHref;
  onNavigate: (href: NavigationHref) => void;
  onClose: () => void;
};

const panelEase = [0.22, 1, 0.36, 1] as const;

export function MobileMenu({
  isOpen,
  activeSection,
  onNavigate,
  onClose,
}: MobileMenuProps) {
  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio de detailing. Mi vehículo es [marca/modelo] y estoy en [comuna].",
  );

  const phoneHref = `tel:+${siteConfig.whatsapp}`;

  const handleNavigation = (href: NavigationHref, label: string) => {
    onNavigate(href);

    trackEvent("mobile_menu_click", {
      label,
      section: "mobile_menu",
      href,
    });

    onClose();
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen ? (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -7 }}
          transition={{ duration: 0.28, ease: panelEase }}
          className="relative lg:hidden"
        >
          <SectionContainer className="pb-3 sm:pb-4">
            <motion.nav
              aria-label="Navegación móvil"
              initial={{ opacity: 0, y: -4, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -3, scale: 0.988 }}
              transition={{ duration: 0.3, ease: panelEase }}
              className={cn(
                "relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.4rem]",
                "border border-white/[0.12]",
                "bg-[linear-gradient(145deg,rgba(12,11,9,0.57),rgba(5,5,5,0.46)_52%,rgba(3,3,3,0.61)_100%)]",
                "shadow-[0_22px_58px_rgba(0,0,0,0.30),0_0_28px_rgba(225,184,93,0.035)]",
                "backdrop-blur-[17px] backdrop-saturate-[1.16]",
                "ring-1 ring-white/[0.035]",
              )}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-highlight)]/42 to-transparent"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--accent)]/9 blur-[76px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 bottom-0 h-36 w-36 rounded-full bg-[var(--accent-bright)]/[0.035] blur-[70px]"
              />

              <div className="relative p-3 sm:p-4">
                <a
                  href="#inicio"
                  onClick={() =>
                    handleNavigation("#inicio", "Menú móvil - Marca")
                  }
                  aria-label={`Ir al inicio de ${siteConfig.name}`}
                  className="group mx-auto mb-3 flex h-[46px] w-[198px] items-center justify-center sm:h-[50px] sm:w-[220px]"
                >
                  <div className="h-full w-full">
                    <MobileMenuBrandLogo />
                  </div>
                </a>

                <div className="mb-3 h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/12 to-transparent" />

                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {navigation.map((item, index) => {
                    const isActive = activeSection === item.href;

                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.035 + index * 0.034,
                          duration: 0.24,
                          ease: panelEase,
                        }}
                        whileTap={{ scale: 0.985 }}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() =>
                          handleNavigation(
                            item.href,
                            `Menú móvil - ${item.label}`,
                          )
                        }
                        className={cn(
                          "group/item relative flex min-h-[48px] items-center justify-center overflow-hidden rounded-[0.95rem]",
                          "border px-3 text-center",
                          "font-[family:var(--font-accent)] text-[12px] font-bold uppercase tracking-[0.105em]",
                          "transition-[color,border-color,background-color,box-shadow,transform] duration-300 ease-[var(--ease-premium)]",
                          "sm:min-h-[50px] sm:text-[13px]",
                          isActive
                            ? "border-[var(--accent)]/48 bg-[var(--accent-soft)] text-[var(--accent-highlight)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.025),0_0_22px_rgba(225,184,93,0.07)] backdrop-blur-md"
                            : "border-white/[0.085] bg-black/18 text-[var(--text-secondary)] backdrop-blur-md hover:border-[var(--accent)]/24 hover:bg-[var(--accent)]/[0.055] hover:text-[var(--text-primary)]",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.035)_50%,transparent_72%)] opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                        />

                        <span className="relative z-10">{item.label}</span>

                        <span
                          aria-hidden="true"
                          className={cn(
                            "pointer-events-none absolute inset-x-5 bottom-0 h-[2px] rounded-full",
                            "bg-gradient-to-r from-transparent via-[var(--accent-bright)] to-transparent",
                            "shadow-[0_0_9px_rgba(246,217,141,0.22)]",
                            "transition-opacity duration-300",
                            isActive ? "opacity-95" : "opacity-0",
                          )}
                        />
                      </motion.a>
                    );
                  })}
                </div>

                <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/[0.075] to-transparent sm:my-4" />

                <CTAButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  trackingLabel="Menú móvil - Cotizar"
                  trackingSection="mobile_menu"
                  onClick={onClose}
                  className="min-h-[48px] w-full justify-center rounded-full text-[12px] tracking-[0.105em] sm:min-h-[50px] sm:text-[13px]"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Cotizar por WhatsApp
                </CTAButton>

                <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent sm:my-4" />

                <div className="flex items-center justify-center gap-2.5">
                  <a
                    href={phoneHref}
                    onClick={() => {
                      trackEvent("contact_click", {
                        label: "Menú móvil - Teléfono",
                        section: "mobile_menu",
                        href: phoneHref,
                      });
                      onClose();
                    }}
                    className={cn(
                      "inline-flex min-h-10 items-center gap-2 rounded-full border",
                      "border-white/[0.09] bg-black/20 px-4 backdrop-blur-md",
                      "font-[family:var(--font-accent)] text-[11px] font-semibold tracking-[0.045em]",
                      "text-white/62",
                      "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                      "active:scale-[0.98]",
                      "hover:border-[var(--accent)]/30 hover:bg-[var(--accent-soft)] hover:text-[var(--accent-bright)]",
                      "sm:text-[12px]",
                    )}
                    aria-label={`Llamar a ${siteConfig.whatsappDisplay}`}
                  >
                    <Phone aria-hidden="true" className="h-3.5 w-3.5" />
                    {siteConfig.whatsappDisplay}
                  </a>

                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent("social_click", {
                        label: "Menú móvil - Instagram",
                        section: "mobile_menu",
                        href: siteConfig.instagramUrl,
                      });
                      onClose();
                    }}
                    aria-label={`Visitar Instagram de ${siteConfig.name}`}
                    className={cn(
                      "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                      "border-white/[0.09] bg-black/20 text-white/62 backdrop-blur-md",
                      "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                      "active:scale-[0.96]",
                      "hover:-translate-y-0.5 hover:border-[var(--accent)]/30",
                      "hover:bg-[var(--accent-soft)] hover:text-[var(--accent-bright)]",
                    )}
                  >
                    <InstagramLogo className="h-[17px] w-[17px]" />
                  </a>
                </div>
              </div>
            </motion.nav>
          </SectionContainer>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
