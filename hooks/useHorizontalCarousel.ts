"use client";

import { useCallback, useEffect, useState } from "react";

export function useHorizontalCarousel<T extends HTMLElement>() {
  const [node, setNode] = useState<T | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const carouselRef = useCallback((element: T | null) => {
    setNode(element);
  }, []);

  const syncControls = useCallback(() => {
    if (!node) return;

    const maxScrollLeft = Math.max(0, node.scrollWidth - node.clientWidth);
    const tolerance = 4;

    setCanScrollLeft(node.scrollLeft > tolerance);
    setCanScrollRight(node.scrollLeft < maxScrollLeft - tolerance);
  }, [node]);

  useEffect(() => {
    if (!node) return;

    const initialSyncFrame = requestAnimationFrame(syncControls);

    node.addEventListener("scroll", syncControls, { passive: true });

    const observer = new ResizeObserver(syncControls);
    observer.observe(node);

    return () => {
      cancelAnimationFrame(initialSyncFrame);
      node.removeEventListener("scroll", syncControls);
      observer.disconnect();
    };
  }, [node, syncControls]);

  const scrollByPage = useCallback(
    (direction: -1 | 1) => {
      if (!node) return;

      const distance = Math.max(node.clientWidth * 0.82, 240);
      node.scrollBy({
        left: direction * distance,
        behavior: "smooth",
      });
    },
    [node],
  );

  const scrollToStart = useCallback(() => {
    if (!node) return;

    node.scrollTo({ left: 0, behavior: "auto" });
    requestAnimationFrame(syncControls);
  }, [node, syncControls]);

  return {
    carouselRef,
    canScrollLeft,
    canScrollRight,
    scrollByPage,
    scrollToStart,
  };
}
