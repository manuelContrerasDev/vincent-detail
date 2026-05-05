"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

const resultVideos = [
  {
    id: "gif-1",
    title: "Brillo y terminación",
    badge: "Abrillantado",
    video: "/results/gif-01.mp4",
  },
  {
    id: "gif-2",
    title: "Tratamiento Cerámico 2 años",
    badge: "Cerámico",
    video: "/results/gif-02.mp4",
  },
  {
    id: "gif-3",
    title: "Lavado y limpieza",
    badge: "Interior y exterior",
    video: "/results/gif-03.mp4",
  },
  {
    id: "gif-4",
    title: "Lavado Premium Completo",
    badge: "Lavado Full",
    video: "/results/gif-04.mp4",
  },
  {
    id: "gif-5",
    title: "Tratamiento Cerámico 3 años",
    badge: "Cerámico",
    video: "/results/gif-05.mp4",
  },
  {
    id: "gif-6",
    title: "Lavado Premium Completo",
    badge: "Lavado Full",
    video: "/results/gif-06.mp4",
  },
];

type VideoRegistry = Record<string, HTMLVideoElement | null>;

type VideoCardProps = {
  id: string;
  title: string;
  badge: string;
  video: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  registerVideo: (id: string, node: HTMLVideoElement | null) => void;
  pauseAllExcept: (id: string) => void;
};

function VideoCard({
  id,
  title,
  badge,
  video,
  activeId,
  setActiveId,
  registerVideo,
  pauseAllExcept,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
    } catch {
      // El navegador puede bloquear reproducción automática.
    }
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  const handleMouseEnter = async () => {
    pauseAllExcept(id);
    setActiveId(id);
    await playVideo();
  };

  const handleMouseLeave = () => {
    pauseVideo();

    if (activeId === id) {
      setActiveId(null);
    }
  };

  const handleToggle = async () => {
    if (!videoRef.current) return;

    if (activeId === id) {
      pauseVideo();
      setActiveId(null);
      return;
    }

    pauseAllExcept(id);
    setActiveId(id);
    await playVideo();
  };

  return (
    <article
      role="button"
      tabIndex={0}
      aria-pressed={activeId === id}
      aria-label={`${title}, ${badge}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          void handleToggle();
        }
      }}
      className="group relative h-full cursor-pointer overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#080808] shadow-[0_14px_36px_rgba(0,0,0,0.32)] outline-none ring-1 ring-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D6B25E]/35 hover:shadow-[0_22px_58px_rgba(0,0,0,0.48)] focus-visible:ring-2 focus-visible:ring-[#F2D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] sm:rounded-[1.35rem]"
    >
      <div className="relative aspect-[9/13] overflow-hidden bg-black sm:aspect-[9/12] md:aspect-[4/5] lg:aspect-[9/12]">
        <video
          ref={(node) => {
            videoRef.current = node;
            registerVideo(id, node);
          }}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_46%,rgba(0,0,0,0.82)_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.12),transparent_30%)] opacity-80 transition duration-300 group-hover:opacity-100"
        />

        <div className="absolute left-2.5 top-2.5 sm:left-3 sm:top-3 md:left-4 md:top-4">
          <span className="font-[family:var(--font-rajdhani)] inline-flex rounded-full border border-[#F2D58A]/22 bg-black/35 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#D6B25E] backdrop-blur-sm sm:text-[9px] md:px-3 md:text-[10px]">
            {badge}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
          <h3 className="font-[family:var(--font-rajdhani)] text-[12px] font-bold uppercase leading-tight tracking-[0.04em] text-[#F7F3EB] drop-shadow-[0_4px_16px_rgba(0,0,0,0.78)] sm:text-[14px] md:text-[15px]">
            {title}
          </h3>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/0 transition duration-300 group-hover:ring-[#F2D58A]/20"
        />
      </div>
    </article>
  );
}

export function ResultsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoMapRef = useRef<VideoRegistry>({});
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  const registerVideo = (id: string, node: HTMLVideoElement | null) => {
    videoMapRef.current[id] = node;
  };

  const pauseAllExcept = (currentId: string) => {
    Object.entries(videoMapRef.current).forEach(([id, node]) => {
      if (!node || id === currentId) return;

      node.pause();
      node.currentTime = 0;
    });
  };

  const pauseAllVideos = () => {
    Object.values(videoMapRef.current).forEach((node) => {
      if (!node) return;

      node.pause();
      node.currentTime = 0;
    });

    setActiveId(null);
  };

  const updateCurrentIndexFromScroll = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const items = itemRefs.current.filter(Boolean) as HTMLLIElement[];

    if (!items.length) return;

    const carouselLeft = carousel.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const itemLeft = item.getBoundingClientRect().left;
      const distance = Math.abs(itemLeft - carouselLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  const handleNativeScroll = () => {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      updateCurrentIndexFromScroll();
    });
  };

  const scrollToIndex = (index: number) => {
    const carousel = carouselRef.current;
    const target = itemRefs.current[index];

    if (!carousel || !target) return;

    pauseAllVideos();
    setCurrentIndex(index);

    carousel.scrollTo({
      left: target.offsetLeft - carousel.offsetLeft,
      behavior: "smooth",
    });
  };

  const goToPrevious = () => {
    const previousIndex =
      currentIndex === 0 ? resultVideos.length - 1 : currentIndex - 1;

    scrollToIndex(previousIndex);
  };

  const goToNext = () => {
    const nextIndex =
      currentIndex === resultVideos.length - 1 ? 0 : currentIndex + 1;

    scrollToIndex(nextIndex);
  };

  return (
    <section
      id="resultados"
      aria-labelledby="results-heading"
      className="relative overflow-hidden bg-[#050505] py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,178,94,0.10),transparent_26%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(242,213,138,0.05),transparent_30%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(214,178,94,0.28),transparent)]"
      />

      <SectionContainer className="relative">
        <div id="results-heading" className="max-w-3xl">
          <SectionHeading eyebrow="Resultados" title="Galería y resultados" />
        </div>

        <div
          aria-hidden="true"
          className="mt-8 h-px w-full max-w-4xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),rgba(214,178,94,0.26),rgba(255,255,255,0.10),transparent)]"
        />

        <div className="relative mt-8 md:mt-10">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/25 shadow-[0_18px_54px_rgba(0,0,0,0.34)] ring-1 ring-white/[0.03] sm:rounded-[1.6rem]">
            <button
              type="button"
              onClick={goToPrevious}
              className="group/rail absolute inset-y-3 left-0 z-30 flex w-10 touch-manipulation items-center justify-center overflow-hidden rounded-r-2xl border-r border-white/10 bg-black/20 text-white/75 backdrop-blur-[2px] transition duration-300 hover:border-[#D6B25E]/35 hover:bg-black/35 hover:text-[#F2D58A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D58A] sm:inset-y-4 sm:w-12 md:w-14"
              aria-label="Ver resultado anterior"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.42),rgba(5,5,5,0.10),rgba(5,5,5,0))] opacity-80 transition duration-300 group-hover/rail:opacity-100"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,#D6B25E,transparent)] opacity-60 transition duration-300 group-hover/rail:opacity-100"
              />

              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/25 ring-1 ring-white/[0.03] transition duration-300 group-hover/rail:border-[#D6B25E]/40 group-hover/rail:bg-[#D6B25E]/10 sm:h-10 sm:w-10">
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </span>
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="group/rail absolute inset-y-3 right-0 z-30 flex w-10 touch-manipulation items-center justify-center overflow-hidden rounded-l-2xl border-l border-white/10 bg-black/20 text-white/75 backdrop-blur-[2px] transition duration-300 hover:border-[#D6B25E]/35 hover:bg-black/35 hover:text-[#F2D58A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D58A] sm:inset-y-4 sm:w-12 md:w-14"
              aria-label="Ver siguiente resultado"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(270deg,rgba(5,5,5,0.42),rgba(5,5,5,0.10),rgba(5,5,5,0))] opacity-80 transition duration-300 group-hover/rail:opacity-100"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/2 h-16 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,#D6B25E,transparent)] opacity-60 transition duration-300 group-hover/rail:opacity-100"
              />

              <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/25 ring-1 ring-white/[0.03] transition duration-300 group-hover/rail:border-[#D6B25E]/40 group-hover/rail:bg-[#D6B25E]/10 sm:h-10 sm:w-10">
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </span>
            </button>

            <ul
              ref={carouselRef}
              onScroll={handleNativeScroll}
              className="flex snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-3 py-3 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:gap-4 sm:px-4 sm:py-4 [&::-webkit-scrollbar]:hidden"
            >
              {resultVideos.map((item, index) => (
                <li
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  className="min-w-0 shrink-0 basis-[calc((100%_-_0.75rem)/2)] snap-start md:basis-[calc((100%_-_2rem)/3)] lg:basis-[calc((100%_-_3rem)/4)]"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <VideoCard
                      id={item.id}
                      title={item.title}
                      badge={item.badge}
                      video={item.video}
                      activeId={activeId}
                      setActiveId={setActiveId}
                      registerVideo={registerVideo}
                      pauseAllExcept={pauseAllExcept}
                    />
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5">
            {resultVideos.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Ir al resultado ${index + 1}`}
                className={
                  currentIndex === index
                    ? "h-1.5 w-5 rounded-full bg-[#D6B25E] transition-all duration-300"
                    : "h-1.5 w-1.5 rounded-full bg-white/25 transition-all duration-300 hover:bg-[#D6B25E]/60"
                }
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}