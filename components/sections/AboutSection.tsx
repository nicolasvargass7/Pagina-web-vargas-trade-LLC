"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AbstractGraphic } from "@/components/ui/AbstractGraphic";
import { Reveal } from "@/components/motion/Reveal";
import { ABOUT_SECTION } from "@/lib/constants";
import { defaultViewport } from "@/lib/motion";

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="quienes-somos" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <span className="mb-5 block font-display text-6xl font-bold text-bg-muted md:text-7xl">
              {ABOUT_SECTION.eyebrow}
            </span>

            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
                {ABOUT_SECTION.title}
              </h2>
            </Reveal>

            <div className="mt-6 flex gap-6">
              <motion.span
                aria-hidden="true"
                className="mt-1 w-px shrink-0 origin-top bg-border"
                initial={reduceMotion ? undefined : { scaleY: 0 }}
                whileInView={reduceMotion ? undefined : { scaleY: 1 }}
                viewport={defaultViewport}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              />
              <div className="flex flex-col gap-5">
                <Reveal delay={0.08}>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    {ABOUT_SECTION.body}
                  </p>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="leading-relaxed text-text-secondary">{ABOUT_SECTION.complement}</p>
                </Reveal>
                <Reveal delay={0.24}>
                  <p className="rounded-md border-l-2 border-accent bg-bg-alt py-3 pl-5 pr-4 text-sm leading-relaxed text-text">
                    {ABOUT_SECTION.highlight}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1 } }}>
              <AbstractGraphic />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
