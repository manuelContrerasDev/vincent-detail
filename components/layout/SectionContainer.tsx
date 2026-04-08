import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}