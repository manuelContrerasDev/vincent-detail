"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
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
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
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
      // Ignore autoplay/playback errors from the browser.
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

    try {
      await videoRef.current.play();
    } catch {
      // Ignore playback errors from the browser.
    }
  };

  return (
    <div
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
      className="group relative cursor-pointer overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/3 outline-none focus-visible:ring-2 focus-visible:ring-[#F2D58A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
    >
      <div className="relative aspect-[16/10] min-h-[180px] overflow-hidden sm:min-h-[190px] lg:min-h-[210px]">
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
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.14),rgba(0,0,0,0.76))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.10),transparent_28%)]"
        />

        <div className="absolute left-3 top-3 md:left-4 md:top-4">
          <span className="font-[family:var(--font-rajdhani)] inline-flex rounded-full border border-[#F2D58A]/20 bg-black/30 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E] backdrop-blur-sm md:px-3 md:text-[10px]">
            {badge}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
          <h3 className="font-[family:var(--font-rajdhani)] text-[14px] font-semibold uppercase tracking-[0.04em] text-[#f7f3eb] md:text-[15px]">
            {title}
          </h3>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/0 transition duration-300 group-hover:ring-[#F2D58A]/20"
        />
      </div>
    </div>
  );
}

export function ResultsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const videoMapRef = useRef<VideoRegistry>({});

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

  return (
    <section
      id="resultados"
      aria-labelledby="results-heading"
      className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.30))] py-14 md:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,213,138,0.06),transparent_20%)]"
      />

      <SectionContainer className="relative">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div id="results-heading">
            <SectionHeading
              eyebrow="Resultados"
              title="Galería y resultados"
              description="Una selección visual del nivel de detalle, terminación y presentación final."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-[1.4rem] border border-white/10 bg-white/3 p-4 backdrop-blur-sm md:p-5"
          >
            <div className="flex flex-wrap gap-2">
              <span className="font-[family:var(--font-rajdhani)] rounded-full border border-[#F2D58A]/20 bg-[#F2D58A]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E]">
                Lavado
              </span>
              <span className="font-[family:var(--font-rajdhani)] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                Pulido
              </span>
              <span className="font-[family:var(--font-rajdhani)] rounded-full border border-[#F2D58A]/20 bg-[#F2D58A]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D6B25E]">
                Encerado
              </span>
              <span className="font-[family:var(--font-rajdhani)] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                Cerámico
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Clips reales para mostrar reflejo, corrección visual y acabado final
              en los diferentes servicios.
            </p>
          </motion.div>
        </div>

        <div className="mt-8">
          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resultVideos.map((item, index) => (
              <li key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
      </SectionContainer>
    </section>
  );
}