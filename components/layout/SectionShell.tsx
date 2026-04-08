import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionContainer } from "@/components/layout/SectionContainer";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function SectionShell({
  id,
  children,
  className,
  containerClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20 lg:py-24", className)}>
      <SectionContainer className={containerClassName}>
        {children}
      </SectionContainer>
    </section>
  );
}