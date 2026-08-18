"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Purely decorative abstract composition (nodes + connecting lines) used in
 * place of stock photography — avoids implying infrastructure, staff or
 * offices that don't exist, per the brand's transparency requirements.
 */
export function AbstractGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const nodes = [
    { cx: 90, cy: 80, r: 5 },
    { cx: 230, cy: 60, r: 4 },
    { cx: 330, cy: 130, r: 6 },
    { cx: 150, cy: 190, r: 4 },
    { cx: 280, cy: 230, r: 5 },
    { cx: 70, cy: 260, r: 3.5 },
    { cx: 360, cy: 260, r: 4 },
  ];

  const lines = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [4, 6],
    [3, 5],
    [2, 4],
  ] as const;

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-primary",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,110,168,0.45),transparent_60%)]" />

      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none">
        {lines.map(([a, b], index) => {
          const from = nodes[a];
          const to = nodes[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke="rgba(255,255,255,0.35)"
              strokeWidth={1}
              initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
              whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 + index * 0.08, ease: "easeInOut" }}
            />
          );
        })}
        {nodes.map((node, index) => (
          <motion.circle
            key={index}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill={index % 3 === 0 ? "#6b95c4" : "#ffffff"}
            initial={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
            whileInView={reduceMotion ? undefined : { scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>
    </div>
  );
}
