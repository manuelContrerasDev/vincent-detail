"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  const whatsappHref = getWhatsAppUrl(
    "Hola, quiero cotizar un servicio en Vincent.Detail."
  );

  const [brandPrimary, brandSecondary = ""] = siteConfig.name.includes(".")
    ? siteConfig.name.split(".")
    : [siteConfig.name, ""];

  const sectionIds = useMemo(
    () =>
      navigation
        .map((item) => item.href)
        .filter((href) => href.startsWith("#")),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 48);

      const sections = sectionIds
        .map((id) => document.querySelector(id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = scrollY + 140;
      let currentSection = "#inicio";

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSection = `#${section.id}`;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeOnResize);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleBrandClick = () => {
    trackEvent("navigation_click", {
      label: "Header brand - Inicio",
      section: "header",
      href: "#inicio",
    });

    setIsOpen(false);
  }

  const handleMenuToggle = () => {
    const nextIsOpen = !isOpen;

  trackEvent("mobile_menu_click", {
    label: nextIsOpen
      ? "Header mobile - Abrir menú"
      : "Header mobile - Cerrar menú",
    section: "header_mobile",
    href: "#mobile-navigation",
  });

  setIsOpen(nextIsOpen);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor:
          isScrolled || isOpen ? "rgba(0,0,0,0.72)" : "rgba(0,0,0,0)",
        borderColor:
          isScrolled || isOpen
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
        boxShadow:
          isScrolled || isOpen
            ? "0 16px 38px rgba(0,0,0,0.30)"
            : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: isScrolled || isOpen ? "blur(18px)" : "blur(0px)",
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <AnimatePresence>
        {isScrolled || isOpen ? (
          <>
            <motion.div
              key="header-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.74)_58%,rgba(0,0,0,0.62)_100%)]"
            />

            <motion.div
              key="header-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.14),transparent_24%)]"
            />
          </>
        ) : null}
      </AnimatePresence>

      <SectionContainer className="relative">
        <motion.div
          initial={false}
          animate={{ height: isScrolled ? 70 : 80 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-between gap-3 sm:gap-4"
        >
          <a
            href="#inicio"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`Ir al inicio de ${siteConfig.name}`}
            onClick={handleBrandClick}
          >
            <motion.div
              initial={false}
              animate={{
                width: isScrolled ? 42 : 50,
                height: isScrolled ? 42 : 50,
                borderColor: isScrolled
                  ? "rgba(214,178,94,0.28)"
                  : "rgba(214,178,94,0.18)",
                backgroundColor: isScrolled
                  ? "rgba(0,0,0,0.42)"
                  : "rgba(0,0,0,0.18)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative shrink-0 overflow-hidden rounded-full border shadow-[0_10px_28px_rgba(0,0,0,0.35)] ring-1 ring-white/5"
            >
              <Image
                src="/images/logo/logo-vincent-detail-negro.png"
                alt={siteConfig.name}
                fill
                priority
                quality={100}
                sizes="96px"
                draggable={false}
                className="object-cover object-center"
              />
            </motion.div>

            <div className="min-w-0">
              <p className="flex min-w-0 items-center font-[family:var(--font-orbitron)] text-[16px] font-semibold leading-none tracking-[0.025em] sm:text-[17px] md:text-[18px] xl:text-[19px]">
                <span className="sr-only">{siteConfig.name}</span>

                <span
                  aria-hidden="true"
                  className="max-w-[220px] truncate sm:max-w-[260px] md:max-w-none"
                >
                  <span className="bg-[linear-gradient(135deg,#FFFFFF_0%,#F7F3EB_48%,#D8D0C2_100%)] bg-clip-text text-transparent">
                    {brandPrimary}
                  </span>

                  {brandSecondary ? (
                    <>
                      <span className="mx-[1px] bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_48%,#A97B1E_100%)] bg-clip-text text-[1.08em] text-transparent drop-shadow-[0_0_10px_rgba(214,178,94,0.35)]">
                        .
                      </span>

                      <span className="bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_45%,#A97B1E_100%)] bg-clip-text text-transparent">
                        {brandSecondary}
                      </span>
                    </>
                  ) : null}
                </span>
              </p>

              <p className="font-[family:var(--font-rajdhani)] mt-1 hidden text-[10px] font-medium uppercase tracking-[0.24em] text-[#D6B25E]/85 md:block xl:text-[11px] xl:tracking-[0.30em]">
                {siteConfig.tagline}
              </p>
            </div>
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-7"
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() =>
                    trackEvent("navigation_click", {
                      label: `Header nav - ${item.label}`,
                      section: "header",
                      href: item.href,
                    })
                  }
                  className={cn(
                    "group relative font-[family:var(--font-rajdhani)] text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-200 lg:text-[13px] xl:text-[14px] xl:tracking-[0.15em]",
                    isActive ? "text-white" : "text-white/78 hover:text-white"
                  )}
                >
                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <CTAButton
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              trackingLabel="Header - Cotizar"
              trackingSection="header"
              className={cn(
                "font-[family:var(--font-rajdhani)] px-3 text-[12px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 lg:px-4 lg:text-[13px] xl:px-5 xl:text-[14px]",
                isScrolled ? "py-2.5" : "py-3"
              )}
            >
              Cotizar
            </CTAButton>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-white shadow-[0_8px_22px_rgba(0,0,0,0.24)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:hidden",
              isOpen
                ? "border-[#D6B25E]/30 bg-[#D6B25E]/10 text-[#F2D58A]"
                : isScrolled
                  ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                  : "border-white/10 bg-black/10 hover:bg-white/[0.04]"
            )}
            onClick={handleMenuToggle}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 12, scale: 0.9 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                {isOpen ? (
                  <X aria-hidden="true" className="h-5 w-5" />
                ) : (
                  <Menu aria-hidden="true" className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>
      </SectionContainer>

      <MobileMenu
        isOpen={isOpen}
        activeSection={activeSection}
        onClose={() => setIsOpen(false)}
      />
    </motion.header>
  );
}
