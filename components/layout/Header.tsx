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
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  const sectionIds = useMemo(
    () => navigation.map((item) => item.href).filter((href) => href.startsWith("#")),
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

      for (const section of sections) {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(`#${section.id}`);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(0,0,0,0.68)" : "rgba(0,0,0,0)",
          borderColor: isScrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
          boxShadow: isScrolled ? "0 16px 38px rgba(0,0,0,0.30)" : "0 0 0 rgba(0,0,0,0)",
          backdropFilter: isScrolled ? "blur(18px)" : "blur(0px)",
        }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 border-b"
      >
        <AnimatePresence>
          {isScrolled ? (
            <>
              <motion.div
                key="header-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_58%,rgba(0,0,0,0.62)_100%)]"
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
            animate={{ height: isScrolled ? 72 : 84 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-between gap-4"
          >
            <a href="#inicio" className="group flex min-w-0 items-center gap-3">
              <motion.div
                initial={false}
                animate={{
                  width: isScrolled ? 40 : 48,
                  height: isScrolled ? 40 : 48,
                  borderColor: isScrolled ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.00)",
                  backgroundColor: isScrolled ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative shrink-0 overflow-hidden rounded-full border shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <Image
                  src="/images/logo/logo-vincent-detail-negro.png"
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 767px) 48px, 40px"
                  className="object-cover"
                  priority
                />
              </motion.div>

              <div className="min-w-0">
                <p className="font-[family:var(--font-orbitron)] truncate text-[0.88rem] font-semibold uppercase tracking-[0.10em] text-[#f7f3eb] sm:text-[0.94rem] xl:text-[1rem]">
                  Vincent.Detail
                </p>
                <p className="font-[family:var(--font-rajdhani)] mt-0.5 hidden bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)] bg-clip-text text-[10px] font-medium uppercase tracking-[0.28em] text-transparent md:block xl:text-[11px] xl:tracking-[0.32em]">
                  Tundra Detailing
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-7">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative font-[family:var(--font-rajdhani)] text-[12px] font-semibold uppercase tracking-[0.12em] transition duration-200 lg:text-[13px] xl:text-[14px] xl:tracking-[0.15em]",
                      isActive ? "text-white" : "text-white/78 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span
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
                href={getWhatsAppUrl("Hola, quiero cotizar un servicio en Vincent.Detail.")}
                target="_blank"
                rel="noreferrer"
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
                "inline-flex h-10 w-10 items-center justify-center rounded-full border text-white transition md:hidden",
                isScrolled
                  ? "border-white/10 bg-white/3 hover:bg-white/6"
                  : "border-white/10 bg-black/10 hover:bg-white/4"
              )}
              onClick={() => setIsOpen((prev) => !prev)}
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
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>
        </SectionContainer>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.84)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.12),transparent_24%)]" />

            <SectionContainer className="relative">
              <nav className="flex flex-col py-5">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.18 }}
                      className={cn(
                        "font-[family:var(--font-rajdhani)] border-b border-white/5 py-4 text-[14px] font-semibold uppercase tracking-[0.14em] last:border-b-0",
                        isActive ? "text-white" : "text-white/80"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                  className="pt-5"
                >
                  <CTAButton
                    href={getWhatsAppUrl("Hola, quiero cotizar un servicio en Vincent.Detail.")}
                    target="_blank"
                    rel="noreferrer"
                    className="font-[family:var(--font-rajdhani)] w-full text-[13px] font-semibold uppercase tracking-[0.12em]"
                  >
                    Cotizar por WhatsApp
                  </CTAButton>
                </motion.div>
              </nav>
            </SectionContainer>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}