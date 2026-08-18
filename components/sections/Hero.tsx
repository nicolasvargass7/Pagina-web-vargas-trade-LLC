"use client";

import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroGlobePanel } from "@/components/sections/hero-planet/HeroGlobePanel";
import { HERO } from "@/lib/constants";
import { EASE_PREMIUM } from "@/lib/motion";

const titleLines = ["Comercio digital", "con una visión global"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-white pt-[68px] md:pt-[84px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,var(--color-bg-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-bg-muted)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
      />

      <HeroGlobePanel scrollYProgress={scrollYProgress} />

      <Container className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto max-w-2xl py-24 md:py-28 lg:max-w-xl">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl md:text-[3.4rem]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.15 }}
              >
                {titleLines[0]}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block text-primary"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.3 }}
              >
                {titleLines[1]}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.55 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.68 }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-text-muted"
          >
            {HERO.support}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_PREMIUM, delay: 0.82 }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Button href={HERO.primaryCta.href} variant="primary">
              {HERO.primaryCta.label}
            </Button>
            <Button href={HERO.secondaryCta.href} variant="secondary">
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute inset-x-0 bottom-8 hidden justify-center lg:flex"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/25 p-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary/60"
            animate={reduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
