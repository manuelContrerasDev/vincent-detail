"use client";

import type { SVGProps } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, Menu, MessageCircle, X } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
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

function HeaderBrandLogo() {
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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<NavigationHref>("#inicio");

  const pendingSectionRef = useRef<NavigationHref | null>(null);
  const pendingSectionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const scrollRafRef = useRef<number | null>(null);
  const copyResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio de detailing. Mi vehículo es [marca/modelo] y estoy en [comuna].",
  );

  const phoneHref = `tel:+${siteConfig.whatsapp}`;

  const sectionIds = useMemo<NavigationHref[]>(
    () => navigation.map((item) => item.href),
    [],
  );

  const getScrollOffset = useCallback(() => {
    const rawValue = getComputedStyle(document.documentElement)
      .getPropertyValue("--scroll-offset")
      .trim();

    const parsedValue = Number.parseFloat(rawValue);

    return Number.isFinite(parsedValue) ? parsedValue : 96;
  }, []);

  const lockActiveSection = useCallback((href: NavigationHref) => {
    pendingSectionRef.current = href;
    setActiveSection(href);

    if (pendingSectionTimerRef.current) {
      clearTimeout(pendingSectionTimerRef.current);
    }

    pendingSectionTimerRef.current = setTimeout(() => {
      pendingSectionRef.current = null;
      pendingSectionTimerRef.current = null;
    }, 1400);
  }, []);

  useEffect(() => {
    const getTrackedSections = () =>
      sectionIds.flatMap((href) => {
        const element = document.querySelector<HTMLElement>(href);
        return element ? [{ href, element }] : [];
      });

    const updateHeader = () => {
      setIsScrolled(window.scrollY > 28);

      const trackedSections = getTrackedSections();
      if (!trackedSections.length) return;

      const anchorLine = getScrollOffset() + 2;
      let currentSection: NavigationHref = trackedSections[0].href;

      for (const { href, element } of trackedSections) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= anchorLine) {
          currentSection = href;
        }

        if (rect.top <= anchorLine && rect.bottom > anchorLine) {
          currentSection = href;
          break;
        }
      }

      const pendingSection = pendingSectionRef.current;

      if (pendingSection) {
        const pendingElement =
          document.querySelector<HTMLElement>(pendingSection);

        if (pendingElement) {
          const pendingRect = pendingElement.getBoundingClientRect();
          const targetReached =
            pendingRect.top <= anchorLine + 6 &&
            pendingRect.bottom > anchorLine;

          if (!targetReached) {
            setActiveSection(pendingSection);
            return;
          }
        }

        pendingSectionRef.current = null;

        if (pendingSectionTimerRef.current) {
          clearTimeout(pendingSectionTimerRef.current);
          pendingSectionTimerRef.current = null;
        }
      }

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (scrollRafRef.current !== null) return;

      scrollRafRef.current = window.requestAnimationFrame(() => {
        scrollRafRef.current = null;
        updateHeader();
      });
    };

    updateHeader();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (scrollRafRef.current !== null) {
        window.cancelAnimationFrame(scrollRafRef.current);
      }

      if (pendingSectionTimerRef.current) {
        clearTimeout(pendingSectionTimerRef.current);
      }
    };
  }, [getScrollOffset, sectionIds]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const copyPhoneNumber = useCallback(async () => {
    const phoneNumber = `+${siteConfig.whatsapp}`;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneNumber);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = phoneNumber;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }

      setIsPhoneCopied(true);

      if (copyResetTimerRef.current) {
        clearTimeout(copyResetTimerRef.current);
      }

      copyResetTimerRef.current = setTimeout(() => {
        setIsPhoneCopied(false);
        copyResetTimerRef.current = null;
      }, 1800);

      trackEvent("contact_click", {
        label: "Header - Copiar teléfono",
        section: "header",
        href: phoneHref,
      });
    } catch {
      window.location.href = phoneHref;
    }
  }, [phoneHref]);

  const toggleMenu = () => {
    const nextState = !isOpen;

    trackEvent("mobile_menu_click", {
      label: nextState ? "Abrir navegación" : "Cerrar navegación",
      section: "header",
      href: "#mobile-navigation",
    });

    setIsOpen(nextState);
  };

  return (
    <motion.header initial={false} className="fixed inset-x-0 top-0 z-50">
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{
          height: isScrolled ? 66 : 76,
          backgroundColor: isOpen
            ? "rgba(5,5,5,0.40)"
            : isScrolled
              ? "rgba(5,5,5,0.54)"
              : "rgba(5,5,5,0.16)",
          borderColor: isOpen
            ? "rgba(223,195,124,0.10)"
            : isScrolled
              ? "rgba(255,255,255,0.075)"
              : "rgba(255,255,255,0.028)",
          backdropFilter: isOpen
            ? "blur(17px) saturate(120%)"
            : isScrolled
              ? "blur(15px) saturate(116%)"
              : "blur(10px) saturate(108%)",
          boxShadow:
            isScrolled || isOpen
              ? "0 12px 38px rgba(0,0,0,0.18)"
              : "0 6px 24px rgba(0,0,0,0.06)",
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 border-b"
      />

      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{
          opacity: isScrolled || isOpen ? 0.72 : 0,
          scaleX: isScrolled || isOpen ? 1 : 0.82,
        }}
        transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-[12%] top-[65px] h-px origin-center bg-gradient-to-r from-transparent via-[var(--accent-bright)]/28 to-transparent sm:inset-x-[18%] lg:top-[65px]"
      />

      <SectionContainer className="relative">
        <div
          className={cn(
            "flex items-center gap-3 transition-[height] duration-300 ease-[var(--ease-premium)]",
            isScrolled ? "h-[66px]" : "h-[76px]",
          )}
        >
          <a
            href="#inicio"
            aria-label={`Ir al inicio de ${siteConfig.name}`}
            onClick={() => {
              setIsOpen(false);
              lockActiveSection("#inicio");

              trackEvent("navigation_click", {
                label: "Marca - Inicio",
                section: "header",
                href: "#inicio",
              });
            }}
            className={cn(
              "group relative flex shrink-0 items-center justify-center",
              "h-[44px] w-[clamp(9.2rem,46vw,11rem)]",
              "rounded-[0.9rem] border border-white/[0.035]",
              "bg-transparent px-1.5 py-1",
              "transition-[width,height,border-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
              "hover:border-[var(--accent-bright)]/16",
              "hover:shadow-[0_0_24px_rgba(198,161,91,0.05)]",
              "sm:h-12 sm:w-[184px] sm:px-2",
              "lg:h-[48px] lg:w-[176px]",
              "xl:h-[52px] xl:w-[204px]",
              "2xl:w-[218px]",
            )}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[16%] -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--accent-bright)]/22 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[72%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.04] blur-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <HeaderBrandLogo />
          </a>

          <nav
            aria-label="Navegación principal"
            className="ml-auto hidden items-center gap-3 lg:flex xl:gap-4 2xl:gap-5"
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    lockActiveSection(item.href);

                    trackEvent("navigation_click", {
                      label: `Header - ${item.label}`,
                      section: "header",
                      href: item.href,
                    });
                  }}
                  className={cn(
                    "group/nav relative isolate px-0.5 py-2",
                    "font-[family:var(--font-accent)] text-[13px] font-bold uppercase tracking-[0.105em]",
                    "transition-[color,text-shadow] duration-300 ease-[var(--ease-premium)]",
                    "xl:text-[14px] 2xl:text-[15px]",
                    isActive
                      ? "text-[var(--accent-highlight)] [text-shadow:0_0_14px_rgba(198,161,91,0.12)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="header-active-pill"
                      aria-hidden="true"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                        mass: 0.72,
                      }}
                      className={cn(
                        "pointer-events-none absolute -z-10",
                        "inset-x-[-0.48rem] inset-y-[0.22rem] rounded-full",
                        "border border-[var(--accent-bright)]/18",
                        "bg-[linear-gradient(145deg,rgba(198,161,91,0.085),rgba(255,255,255,0.025)_58%,rgba(116,82,36,0.055))]",
                        "shadow-[inset_0_1px_0_rgba(242,229,189,0.035),0_8px_22px_rgba(0,0,0,0.12)]",
                        "backdrop-blur-[7px]",
                      )}
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className={cn(
                        "pointer-events-none absolute -z-10",
                        "inset-x-[-0.4rem] inset-y-[0.3rem] rounded-full",
                        "border border-transparent bg-white/[0.018]",
                        "opacity-0 transition-[opacity,border-color,background-color] duration-300",
                        "group-hover/nav:border-white/[0.045] group-hover/nav:bg-white/[0.028] group-hover/nav:opacity-100",
                      )}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>

                  {isActive ? (
                    <motion.span
                      layoutId="header-active-line"
                      aria-hidden="true"
                      transition={{
                        type: "spring",
                        stiffness: 440,
                        damping: 35,
                        mass: 0.68,
                      }}
                      className={cn(
                        "pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-[72%] -translate-x-1/2 rounded-full",
                        "bg-[linear-gradient(90deg,transparent,var(--accent-bright),transparent)]",
                        "shadow-[0_0_8px_rgba(223,195,124,0.16)]",
                      )}
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 rounded-full bg-[var(--accent-bright)]/52 opacity-0 transition-[width,opacity] duration-300 ease-[var(--ease-premium)] group-hover/nav:w-[62%] group-hover/nav:opacity-55"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-3">
            <button
              type="button"
              onClick={copyPhoneNumber}
              aria-label={`Copiar número ${siteConfig.whatsappDisplay}`}
              title={
                isPhoneCopied
                  ? "Número copiado"
                  : `Copiar ${siteConfig.whatsappDisplay}`
              }
              className={cn(
                "group/phone relative hidden h-10 shrink-0 items-center justify-center gap-2 rounded-full border",
                "min-w-[9.65rem] px-3.5",
                "border-white/[0.085] bg-white/[0.028] backdrop-blur-md",
                "font-[family:var(--font-accent)] text-[12px] font-semibold leading-none tracking-[0.035em]",
                "whitespace-nowrap tabular-nums text-white/66",
                "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                "hover:-translate-y-px hover:border-[var(--accent-bright)]/24 hover:bg-[var(--accent-soft)] hover:text-[var(--accent-bright)]",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.18),0_0_18px_rgba(198,161,91,0.045)]",
                "active:translate-y-0 active:scale-[0.985]",
                "xl:inline-flex 2xl:min-w-[10rem] 2xl:text-[13px]",
                isPhoneCopied &&
                  "border-[var(--accent-bright)]/28 bg-[var(--accent-soft)] text-[var(--accent-highlight)]",
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isPhoneCopied ? "copied" : "copy"}
                  initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.82, rotate: 6 }}
                  transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-4 w-4 shrink-0 items-center justify-center"
                >
                  {isPhoneCopied ? (
                    <Check
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-[var(--accent-highlight)]"
                    />
                  ) : (
                    <Copy
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/phone:scale-105"
                    />
                  )}
                </motion.span>
              </AnimatePresence>

              <span>{siteConfig.whatsappDisplay}</span>

              <span className="sr-only" aria-live="polite">
                {isPhoneCopied ? "Número copiado" : ""}
              </span>
            </button>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("social_click", {
                  label: "Header - Instagram",
                  section: "header",
                  href: siteConfig.instagramUrl,
                })
              }
              aria-label={`Visitar Instagram de ${siteConfig.name}`}
              className={cn(
                "group/social inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                "border border-white/[0.09] bg-white/[0.028]",
                "text-white/62 backdrop-blur-md",
                "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)]",
                "hover:-translate-y-0.5 hover:border-[var(--accent-bright)]/24",
                "hover:bg-[var(--accent-soft)] hover:text-[var(--accent-bright)]",
                "hover:shadow-[0_8px_24px_rgba(0,0,0,0.18),0_0_18px_rgba(198,161,91,0.05)]",
                "sm:h-10 sm:w-10",
              )}
            >
              <InstagramLogo className="h-[17px] w-[17px] transition-transform duration-300 ease-[var(--ease-premium)] group-hover/social:scale-[1.08]" />
            </a>

            <div className="hidden md:block">
              <CTAButton
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                trackingLabel="Header - Cotizar"
                trackingSection="header"
                className="min-h-10 rounded-full px-4 py-2 text-[11px] tracking-[0.09em] lg:text-[12px] xl:px-5 xl:text-[13px]"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
                Cotizar
              </CTAButton>
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className={cn(
                "group/menu inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                "transition-[transform,color,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-premium)] lg:hidden",
                "active:scale-[0.96]",
                isOpen
                  ? "border-[var(--accent-bright)]/30 bg-[var(--accent-soft-strong)] text-[var(--accent-highlight)] shadow-[0_0_20px_rgba(198,161,91,0.055)]"
                  : "border-white/[0.1] bg-black/24 text-[var(--text-primary)] hover:border-white/[0.16] hover:bg-white/[0.055]",
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 10, scale: 0.9 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {isOpen ? (
                    <X aria-hidden="true" className="h-[18px] w-[18px]" />
                  ) : (
                    <Menu aria-hidden="true" className="h-[18px] w-[18px]" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </SectionContainer>

      <MobileMenu
        isOpen={isOpen}
        activeSection={activeSection}
        onNavigate={lockActiveSection}
        onClose={() => setIsOpen(false)}
      />
    </motion.header>
  );
}
