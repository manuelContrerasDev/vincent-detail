"use client";

import { AnimatePresence, motion } from "motion/react";
import { navigation } from "@/content/navigation";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

type MobileMenuProps = {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
};

export function MobileMenu({
  isOpen,
  activeSection,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative overflow-hidden border-t border-white/8 bg-[#050505]/42 shadow-[0_22px_60px_rgba(0,0,0,0.30)] backdrop-blur-lg md:hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(5,5,5,0.46)_100%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.08),transparent_34%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.22),transparent)]"
          />

          <SectionContainer className="relative">
            <div className="mx-auto flex w-full max-w-sm flex-col py-4 sm:max-w-md">
              <div className="grid gap-1">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{
                        y: -1,
                        scale: 1.015,
                      }}
                      whileTap={{
                        scale: 0.985,
                      }}
                      transition={{
                        delay: index * 0.03,
                        duration: 0.18,
                        ease: "easeOut",
                      }}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => {
                        trackEvent("mobile_menu_click", {
                          label: `Mobile menu - ${item.label}`,
                          section: "mobile_menu",
                          href: item.href,
                        });

                        onClose();
                      }}
                      className={cn(
                        "group relative flex min-h-[46px] items-center justify-center overflow-hidden rounded-2xl border px-4 py-3 text-center font-[family:var(--font-rajdhani)] text-[13px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm transition duration-300",
                        isActive
                          ? "border-[#D6B25E]/25 bg-[#D6B25E]/10 text-white shadow-[0_10px_26px_rgba(0,0,0,0.18)]"
                          : "border-transparent bg-transparent text-white/76 hover:border-[#D6B25E]/18 hover:bg-white/[0.045] hover:text-white hover:shadow-[0_10px_26px_rgba(0,0,0,0.16)]"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      >
                        <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,178,94,0.12),transparent_62%)]" />
                        <span className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(242,213,138,0.45),transparent)]" />
                      </span>

                      <span className="relative z-10 transition duration-300 group-hover:tracking-[0.19em]">
                        {item.label}
                      </span>

                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute bottom-2 left-1/2 h-px -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,#D6B25E,transparent)] transition-all duration-300",
                          isActive
                            ? "w-14 opacity-100"
                            : "w-0 opacity-0 group-hover:w-16 group-hover:opacity-90"
                        )}
                      />

                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute right-4 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full transition-all duration-300",
                          isActive
                            ? "bg-[#D6B25E] opacity-100 shadow-[0_0_12px_rgba(214,178,94,0.65)]"
                            : "bg-[#D6B25E] opacity-0 group-hover:opacity-80 group-hover:shadow-[0_0_12px_rgba(214,178,94,0.55)]"
                        )}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </SectionContainer>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}