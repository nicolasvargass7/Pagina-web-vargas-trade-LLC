"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * "planeta-nico.webp" is a single photographic render of Earth, not an
 * unwrapped/repeatable texture — so a literal 360° spin would either look
 * like a spinning coin (in-plane rotation) or a photo sliding behind a
 * porthole (texture pan), neither of which reads as "a globe rotating."
 * Instead we do a small, slow tilt + scale on hover: it feels responsive
 * and alive without breaking the photo's realism.
 */
export function PlanetGlobe({ size = "clamp(230px, 22vw, 360px)" }: { size?: string }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      style={{ width: size, height: size }}
      className="relative shrink-0"
      animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full bg-accent/25 blur-[54px]"
      />

      <motion.div
        role="img"
        aria-label="Planeta Tierra digital representando la conectividad internacional de Vargas Trade LLC"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative h-full w-full"
        style={{ clipPath: "circle(50%)" }}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: hovered ? 6 : 0,
                scale: hovered ? 1.03 : 1,
              }
        }
        transition={{
          duration: hovered ? 2.6 : 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/planeta-nico.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, 0px"
          className="pointer-events-none object-contain select-none"
          priority
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full"
          animate={{ opacity: hovered ? 0.5 : 0.22 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            boxShadow: "0 0 60px 8px rgba(107,149,196,0.55)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
