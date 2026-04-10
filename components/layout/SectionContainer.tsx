import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
};

export function SectionContainer({
  children,
  className,
  as: Component = "div",
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </Component>
  );
}