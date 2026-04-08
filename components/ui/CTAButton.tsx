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
        "relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-5 py-3 md:px-6 md:py-3.5",
        "font-[family:var(--font-rajdhani)] text-[13px] font-semibold uppercase tracking-[0.14em]",
        "transition duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-[#F2D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        variant === "primary" &&
          [
            "border border-[#F2D58A]/20",
            "bg-[linear-gradient(135deg,#F2D58A_0%,#D6B25E_42%,#A97B1E_100%)]",
            "text-black",
            "shadow-[0_12px_30px_rgba(0,0,0,0.22)]",
            "before:absolute before:inset-0 before:bg-black/0 before:transition before:duration-200",
            "hover:before:bg-black/18",
            "hover:shadow-[0_16px_38px_rgba(0,0,0,0.30)]",
            "hover:-translate-y-[1px]",
          ].join(" "),
        variant === "secondary" &&
          [
            "border border-white/15",
            "bg-white/5",
            "text-white",
            "shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
            "hover:bg-white/10",
            "hover:border-white/20",
            "hover:-translate-y-[1px]",
          ].join(" "),
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center">
        {children}
      </span>
    </a>
  );
}