import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function CTAButton({
  children,
  className,
  variant = "primary",
  ...props
}: CTAButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-[#F2D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)] text-black shadow-lg shadow-black/20 hover:brightness-105",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.10]",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}