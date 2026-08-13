import type { Transition, Variants } from "motion/react";

export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.988,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const revealSoft: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.995,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.045,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.025,
    },
  },
};

export const softTransition: Transition = {
  duration: 0.48,
  ease: premiumEase,
};

export const microTransition: Transition = {
  duration: 0.28,
  ease: premiumEase,
};

export const slowTransition: Transition = {
  duration: 0.68,
  ease: premiumEase,
};

export const tapScale = {
  scale: 0.985,
} as const;

export const hoverLift = {
  y: -4,
} as const;
