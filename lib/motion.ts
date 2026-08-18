import type { Transition, Variants } from "framer-motion";

export const EASE_PREMIUM: Transition["ease"] = [0.16, 1, 0.3, 1];

export const baseTransition: Transition = { duration: 0.7, ease: EASE_PREMIUM };
export const fastTransition: Transition = { duration: 0.5, ease: EASE_PREMIUM };

/** Variants intentionally hold no `transition` field so a parent component
 * can supply (and override, e.g. with a stagger delay) the transition. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const defaultViewport = { once: true, margin: "-80px 0px -80px 0px" } as const;
