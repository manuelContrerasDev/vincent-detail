"use client";

import type { CSSProperties, RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { SectionShell } from "@/components/layout/SectionShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { results } from "@/content/results";
import { fadeUp, microTransition, softTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MARQUEE_DURATION_SECONDS = 34;
const CARD_GAP_PX = 14;

type VideoRegistry = Record<string, HTMLVideoElement | null>;
type ResultItem = (typeof results)[number];
type ResultCardMode = "mobile" | "marquee";
type ResultGroupName = "desktop-primary" | "desktop-duplicate";

type ResultCardProps = ResultItem & {
  instanceKey: string;
  activeKey: string | null;
  mode: ResultCardMode;
  duplicate?: boolean;
  registerVideo: (key: string, node: HTMLVideoElement | null) => void;
  pauseAllExcept: (key: string) => void;
  setActiveKey: React.Dispatch<React.SetStateAction<string | null>>;
};

type ResultGroupProps = {
  group: ResultGroupName;
  duplicate?: boolean;
  activeKey: string | null;
  registerVideo: (key: string, node: HTMLVideoElement | null) => void;
  pauseAllExcept: (key: string) => void;
  setActiveKey: React.Dispatch<React.SetStateAction<string | null>>;
};

function getCardWidth(viewportWidth: number) {
  if (viewportWidth >= 1280) return (viewportWidth - CARD_GAP_PX * 3) / 4;
  if (viewportWidth >= 768) return (viewportWidth - CARD_GAP_PX * 2) / 3;
  return (viewportWidth - CARD_GAP_PX) / 2;
}

function useResponsiveCardWidth(viewportRef: RefObject<HTMLDivElement | null>) {
  const [cardWidth, setCardWidth] = useState(300);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateCardWidth = () => {
      if (viewport.clientWidth > 0) {
        setCardWidth(getCardWidth(viewport.clientWidth));
      }
    };

    updateCardWidth();
    const observer = new ResizeObserver(updateCardWidth);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, [viewportRef]);

  return cardWidth;
}

function ResultCard({
  title,
  video,
  poster,
  instanceKey,
  activeKey,
  mode,
  duplicate = false,
  registerVideo,
  pauseAllExcept,
  setActiveKey,
}: ResultCardProps) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isActive = activeKey === instanceKey;

  const play = useCallback(async () => {
    const node = videoRef.current;
    if (!node) return;

    pauseAllExcept(instanceKey);
    setActiveKey(instanceKey);

    try {
      await node.play();
    } catch {
      setActiveKey((current) => (current === instanceKey ? null : current));
    }
  }, [instanceKey, pauseAllExcept, setActiveKey]);

  const stop = useCallback(
    (reset = true) => {
      const node = videoRef.current;
      if (!node) return;
      node.pause();
      if (reset) node.currentTime = 0;
      setActiveKey((current) => (current === instanceKey ? null : current));
    },
    [instanceKey, setActiveKey],
  );

  const toggle = useCallback(async () => {
    if (isActive) {
      stop(false);
      return;
    }
    await play();
  }, [isActive, play, stop]);

  return (
    <li
      className={cn(
        "shrink-0 snap-start",
        mode === "mobile" ? "w-[84vw] max-w-[370px]" : "result-marquee-card",
      )}
    >
      <motion.button
        type="button"
        tabIndex={duplicate ? -1 : 0}
        aria-hidden={duplicate || undefined}
        aria-pressed={duplicate ? undefined : isActive}
        aria-label={
          duplicate
            ? undefined
            : `${isActive ? "Pausar" : "Reproducir"} resultado: ${title}`
        }
        onClick={() => void toggle()}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.992 }}
        transition={microTransition}
        className={cn(
          "group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.4rem]",
          "border border-white/[0.07] bg-[#060606] text-left",
          "shadow-[0_20px_52px_rgba(0,0,0,0.32)]",
          "transition-[transform,box-shadow,filter,border-color] duration-500 ease-[var(--ease-premium)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-bright)]",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]",
          "sm:aspect-[5/6] sm:rounded-[1.55rem]",
          "sm:motion-safe:hover:-translate-y-1 sm:motion-safe:hover:scale-[1.008]",
          "sm:hover:border-[var(--accent-bright)]/24",
          isActive &&
            "border-[var(--accent-bright)]/34 shadow-[0_28px_76px_rgba(0,0,0,0.38),0_0_30px_rgba(225,184,93,0.10)]",
        )}
      >
        <video
          ref={(node) => {
            videoRef.current = node;
            registerVideo(instanceKey, node);
          }}
          src={video}
          poster={poster}
          muted
          loop
          playsInline
          preload={duplicate ? "none" : "metadata"}
          aria-hidden="true"
          onPlay={() => setActiveKey(instanceKey)}
          onPause={() =>
            setActiveKey((current) =>
              current === instanceKey ? null : current,
            )
          }
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center",
            "transition-[transform,opacity,filter] duration-700 ease-[var(--ease-premium)]",
            isActive
              ? "scale-100 opacity-100 saturate-100"
              : "scale-100 opacity-[0.93] saturate-[0.88] sm:group-hover:scale-[1.025] sm:group-hover:opacity-100 sm:group-hover:saturate-100",
          )}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,transparent_42%,rgba(0,0,0,0.15)_66%,rgba(0,0,0,0.90)_100%)]"
        />

        <span
          aria-hidden="true"
          className={cn(
            "absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full",
            "border border-white/[0.10] bg-black/42 text-white/84 backdrop-blur-xl",
            "transition-[background-color,border-color,color,transform,box-shadow] duration-300 ease-[var(--ease-premium)]",
            "sm:right-3.5 sm:top-3.5",
            isActive
              ? "border-[var(--accent-bright)]/36 bg-[var(--accent)]/18 text-[var(--accent-highlight)] shadow-[0_0_22px_rgba(225,184,93,0.10)]"
              : "sm:group-hover:-translate-y-px sm:group-hover:border-[var(--accent-bright)]/24 sm:group-hover:bg-black/56 sm:group-hover:text-[var(--accent-bright)]",
          )}
        >
          {isActive ? (
            <Pause className="h-3.5 w-3.5" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 h-3.5 w-3.5" fill="currentColor" />
          )}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <h3 className="line-clamp-2 max-w-[18ch] font-[family:var(--font-heading)] text-[1.05rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.84)] sm:text-[1.18rem] md:text-[1.22rem] xl:text-[1.3rem]">
              {title}
            </h3>

            <span className="hidden shrink-0 font-[family:var(--font-accent)] text-[9px] font-semibold uppercase tracking-[0.12em] text-white/38 transition-colors duration-300 sm:block sm:group-hover:text-[var(--accent-bright)]/70">
              {isActive ? "Reproduciendo" : "Ver"}
            </span>
          </div>
        </div>
      </motion.button>
    </li>
  );
}

function DesktopResultGroup({
  group,
  duplicate = false,
  activeKey,
  registerVideo,
  pauseAllExcept,
  setActiveKey,
}: ResultGroupProps) {
  return (
    <ul
      className="flex shrink-0 gap-[14px] pr-[14px]"
      aria-hidden={duplicate || undefined}
    >
      {results.map((item) => (
        <ResultCard
          key={`${group}-${item.id}`}
          {...item}
          mode="marquee"
          instanceKey={`${group}-${item.id}`}
          activeKey={activeKey}
          duplicate={duplicate}
          registerVideo={registerVideo}
          pauseAllExcept={pauseAllExcept}
          setActiveKey={setActiveKey}
        />
      ))}
    </ul>
  );
}

export function ResultsSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const desktopViewportRef = useRef<HTMLDivElement | null>(null);
  const videoMapRef = useRef<VideoRegistry>({});
  const cardWidth = useResponsiveCardWidth(desktopViewportRef);

  const registerVideo = useCallback(
    (key: string, node: HTMLVideoElement | null) => {
      if (node) videoMapRef.current[key] = node;
      else delete videoMapRef.current[key];
    },
    [],
  );

  const pauseAllExcept = useCallback((currentKey: string) => {
    Object.entries(videoMapRef.current).forEach(([key, node]) => {
      if (!node || key === currentKey) return;
      node.pause();
      node.currentTime = 0;
    });
  }, []);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoMapRef.current).forEach((node) => {
      if (!node) return;
      node.pause();
      node.currentTime = 0;
    });
    setActiveKey(null);
  }, []);

  useEffect(() => {
    const videoRegistry = videoMapRef.current;
    return () => {
      Object.values(videoRegistry).forEach((node) => node?.pause());
    };
  }, []);

  const marqueePaused = shouldReduceMotion || activeKey !== null;

  return (
    <SectionShell
      id="resultados"
      ariaLabelledBy="results-heading"
      tone="soft"
      ambient="left"
      compact
      topDivider
    >
      <motion.div
        variants={shouldReduceMotion ? undefined : fadeUp}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
        transition={softTransition}
        className="mb-6 sm:mb-8 lg:mb-10"
      >
        <div id="results-heading">
          <SectionHeading
            eyebrow="Resultados"
            title="El acabado habla por sí solo"
          />
        </div>
      </motion.div>

      <motion.div
        variants={shouldReduceMotion ? undefined : fadeUp}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.12 }}
        transition={softTransition}
        className="relative"
      >
        <div
          onPointerDown={(event) => {
            if (event.pointerType === "touch") pauseAllVideos();
          }}
          className={cn(
            "relative -mr-5 overflow-x-auto overscroll-x-contain pr-5 sm:hidden",
            "snap-x snap-mandatory scroll-smooth touch-pan-x",
            "[-webkit-overflow-scrolling:touch]",
            "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          )}
        >
          <ul className="flex w-max gap-3.5 pr-[16vw]">
            {results.map((item) => (
              <ResultCard
                key={`mobile-${item.id}`}
                {...item}
                mode="mobile"
                instanceKey={`mobile-${item.id}`}
                activeKey={activeKey}
                registerVideo={registerVideo}
                pauseAllExcept={pauseAllExcept}
                setActiveKey={setActiveKey}
              />
            ))}
          </ul>
        </div>

        <div
          ref={desktopViewportRef}
          className="relative hidden overflow-hidden sm:block"
          style={{ "--result-card-width": `${cardWidth}px` } as CSSProperties}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-[var(--page-soft)] via-[var(--page-soft)]/72 to-transparent lg:w-16"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-[var(--page-soft)] via-[var(--page-soft)]/72 to-transparent lg:w-16"
          />

          <div
            className="results-marquee-track flex w-max"
            style={{
              animation: marqueePaused
                ? "none"
                : `results-marquee ${MARQUEE_DURATION_SECONDS}s linear infinite`,
            }}
          >
            <DesktopResultGroup
              group="desktop-primary"
              activeKey={activeKey}
              registerVideo={registerVideo}
              pauseAllExcept={pauseAllExcept}
              setActiveKey={setActiveKey}
            />

            {!shouldReduceMotion ? (
              <DesktopResultGroup
                group="desktop-duplicate"
                duplicate
                activeKey={activeKey}
                registerVideo={registerVideo}
                pauseAllExcept={pauseAllExcept}
                setActiveKey={setActiveKey}
              />
            ) : null}
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        .results-marquee-track {
          will-change: transform;
        }

        .result-marquee-card {
          width: var(--result-card-width);
        }

        @keyframes results-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .results-marquee-track {
            animation: none !important;
            transform: none !important;
            will-change: auto;
          }
        }
      `}</style>
    </SectionShell>
  );
}
