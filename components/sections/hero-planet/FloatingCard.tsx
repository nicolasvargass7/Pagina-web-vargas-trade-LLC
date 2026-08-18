"use client";

import { motion, useReducedMotion, type MotionStyle } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FloatingCardProps = {
  className?: string;
  innerClassName?: string;
  style?: MotionStyle;
  children: ReactNode;
  delay?: number;
  fromY?: number;
  hoverLift?: boolean;
};

export function FloatingCard({
  className,
  innerClassName,
  style,
  children,
  delay = 0,
  fromY = 14,
  hoverLift = false,
}: FloatingCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div style={style} className={cn("absolute", className)}>
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: fromY }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={!reduceMotion && hoverLift ? { y: -3 } : undefined}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "overflow-hidden rounded-[var(--radius-md)] border border-white/14 bg-[#0b2a52]/75 shadow-[0_18px_44px_rgba(2,10,26,0.5)] backdrop-blur-md transition-colors duration-300 hover:border-accent-light/40",
          innerClassName
        )}
        style={{
          boxShadow:
            "0 18px 44px rgba(2,10,26,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
