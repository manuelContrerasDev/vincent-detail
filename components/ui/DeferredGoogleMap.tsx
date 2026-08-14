"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type DeferredGoogleMapProps = {
  title: string;
  src: string;
  className?: string;
};

export function DeferredGoogleMap({
  title,
  src,
  className,
}: DeferredGoogleMapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => {
    if (shouldLoadMap) return;

    const node = containerRef.current;
    if (!node) return;

    // En navegadores antiguos el botón del placeholder sigue permitiendo cargarlo.
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setShouldLoadMap(true);
        observer.disconnect();
      },
      {
        // Empieza a cargar poco antes de que el usuario llegue a Cobertura,
        // pero evita que Maps participe en la carga inicial/LCP.
        rootMargin: "240px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {shouldLoadMap ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className={cn("absolute inset-0 h-full w-full border-0", className)}
        />
      ) : (
        <button
          type="button"
          onClick={() => setShouldLoadMap(true)}
          aria-label="Cargar mapa interactivo"
          className={cn(
            "absolute inset-0 flex h-full w-full items-center justify-center",
            "bg-[radial-gradient(circle_at_50%_46%,rgba(198,161,91,0.10),transparent_32%),linear-gradient(145deg,#0a0a0a,#050505_62%,#080706)]",
            "text-center",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--accent-bright)]",
          )}
        >
          <span className="flex flex-col items-center gap-3 px-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent-bright)]/24 bg-[var(--accent)]/[0.09] text-[var(--accent-highlight)]">
              <MapPin
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </span>

            <span className="font-[family:var(--font-accent)] text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--accent-bright)]">
              Mapa interactivo
            </span>

            <span className="max-w-[26ch] text-[13px] leading-5 text-white/48">
              Se carga cuando llegas a esta sección.
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
