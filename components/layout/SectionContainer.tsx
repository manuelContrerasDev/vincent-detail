import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "nav";
};

export function SectionContainer({
  children,
  className,
  as: Component = "div",
}: SectionContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 sm:px-7 lg:px-10 xl:px-12",
        className
      )}
    >
      {children}
    </Component>
  );
}
