"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CORPORATE_PRESENCE, COMPANY } from "@/lib/constants";
import { defaultViewport } from "@/lib/motion";

export function CorporatePresence() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="presencia" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                {CORPORATE_PRESENCE.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-text-secondary">
                {CORPORATE_PRESENCE.body}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <dl className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">Empresa</dt>
                  <dd className="font-medium text-text">{COMPANY.legalName}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">Ubicación</dt>
                  <dd className="font-medium text-text">{COMPANY.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-text-muted">Correo corporativo</dt>
                  <dd className="font-medium text-text">{COMPANY.email}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1 } }}>
            <div
              className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-lg)] bg-bg-alt lg:mx-auto"
              aria-hidden="true"
            >
              <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(var(--color-bg-muted)_1.5px,transparent_1.5px)] [background-size:18px_18px]" />
              <svg viewBox="0 0 200 260" className="absolute inset-0 h-full w-full">
                <motion.path
                  d="M60 20 C40 40 35 70 45 100 C55 135 40 160 55 190 C65 210 90 225 105 220 C118 216 112 195 100 180 C88 165 95 145 110 140 C130 133 140 110 130 90 C122 74 128 55 115 40 C100 24 78 12 60 20 Z"
                  fill="var(--color-primary)"
                  fillOpacity={0.9}
                  initial={reduceMotion ? undefined : { opacity: 0, scale: 0.92 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                  viewport={defaultViewport}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>

              <motion.div
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-[22%] right-[26%] flex flex-col items-center"
              >
                <span className="relative flex size-4">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex size-4 items-center justify-center rounded-full bg-accent text-white">
                    <MapPin className="size-2.5" aria-hidden="true" />
                  </span>
                </span>
                <span className="mt-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-sm">
                  Miami
                </span>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
