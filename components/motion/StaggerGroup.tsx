"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { baseTransition, defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  as?: "div" | "ul";
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  delayChildren = 0,
  as = "div",
}: StaggerGroupProps) {
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
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  const Component = motion[as];

  return (
    <Component className={className} variants={fadeUp} transition={baseTransition}>
      {children}
    </Component>
  );
}
