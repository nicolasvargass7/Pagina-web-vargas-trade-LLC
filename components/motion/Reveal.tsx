"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { baseTransition, defaultViewport, fadeUp } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span";
};

export function Reveal({ children, variants = fadeUp, className, delay = 0, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      transition={{ ...baseTransition, delay }}
    >
      {children}
    </Component>
  );
}
