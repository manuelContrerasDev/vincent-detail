import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/layout/SectionContainer";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabelledBy?: string;
  withOverflowHidden?: boolean;
  withDefaultBackground?: boolean;
};

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
  ariaLabelledBy,
  withOverflowHidden = false,
  withDefaultBackground = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        withOverflowHidden && "overflow-hidden",
        withDefaultBackground && "border-y border-white/10 bg-[#050505]",
        className
      )}
    >
      <SectionContainer className={containerClassName}>
        {children}
      </SectionContainer>
    </section>
  );
}