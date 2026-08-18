"use client";

import Image from "next/image";
import { motion, useReducedMotion, useTransform, type MotionValue } from "framer-motion";
import { Briefcase, Globe2, Radio, Workflow } from "lucide-react";
import { PlanetGlobe } from "./PlanetGlobe";
import { FloatingCard } from "./FloatingCard";
import { GLOBE_CENTER, ORBIT_ICONS, REALTIME_NODES } from "./data";

function curvePath(x1: number, y1: number, x2: number, y2: number, bend: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const cx = mx + nx * bend;
  const cy = my + ny * bend;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

type TierStyle = { r: number; glow: boolean; opacity: number[] };

const tierStyle: Record<1 | 2 | 3, TierStyle> = {
  1: { r: 1.1, glow: false, opacity: [0.4, 0.75, 0.4] },
  2: { r: 1.5, glow: true, opacity: [0.35, 0.85, 0.35] },
  3: { r: 2, glow: true, opacity: [0.45, 1, 0.45] },
};

export function HeroGlobePanel({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const reduceMotion = useReducedMotion();
  const globeParallax = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -42]);
  const mapParallax = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 14]);
  const cardsParallaxSlow = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -18]);
  const cardsParallaxFast = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -30]);
  const meshParallax = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 18]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.22]);

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {/* Panel background — clipped to the rounded shape */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute right-0 top-[84px] bottom-0 w-[30%] overflow-hidden rounded-l-[64px] bg-[#081c3a] xl:w-[43%]"
      >
        {/* Capa 1-2: fondo azul marino + degradados ambientales */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 78% 6%, #1c4a80 0%, #0d2a52 40%, #081c3a 70%, #04101f 100%)",
          }}
        />

        {/* Capa 3: "mundo nico" — mezclado en screen para que solo brillen las
            luces/continentes, sin que se note un rectángulo pegado encima. */}
        <motion.div
          className="absolute inset-0"
          style={{ y: mapParallax, mixBlendMode: "screen", opacity: 0.92 }}
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={{ opacity: 0.92 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src="/images/mundo-nico.webp"
            alt=""
            fill
            sizes="50vw"
            className="object-cover"
            style={{ objectPosition: "40% 38%" }}
            priority
          />
        </motion.div>

        {/* Capa 4: overlays para integrar el mapa con el azul corporativo */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #081c3a 0%, rgba(8,28,58,0.35) 30%, rgba(8,28,58,0.1) 55%, rgba(4,16,31,0.55) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 20% 10%, rgba(4,16,31,0.85), transparent 70%)",
          }}
        />

        {/* Capa 5 (parte): malla tecnológica inferior */}
        <motion.div
          aria-hidden="true"
          style={{ y: meshParallax }}
          className="absolute inset-x-0 bottom-0 h-[38%] opacity-60 [background-image:linear-gradient(to_right,rgba(107,149,196,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(107,149,196,0.35)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_top,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[26%] opacity-70 [mask-image:linear-gradient(to_top,black,transparent)]"
          style={{
            background: "radial-gradient(60% 100% at 50% 100%, rgba(59,110,168,0.55), transparent 70%)",
          }}
        />

        {/* scroll darkening overlay */}
        <motion.div aria-hidden="true" style={{ opacity: dim }} className="absolute inset-0 bg-[#020814]" />
      </motion.div>

      {/* Capa 5: líneas de conexión — sin clip, mismo espacio de coordenadas que los iconos */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {ORBIT_ICONS.map((icon, index) => {
          const isAnimatedFlow = index % 2 === 0;
          return (
            <g key={index}>
              <motion.path
                d={curvePath(GLOBE_CENTER.x, GLOBE_CENTER.y, icon.x, icon.y, 6)}
                fill="none"
                stroke="var(--color-accent-light)"
                strokeWidth={0.22}
                strokeLinecap="round"
                strokeDasharray="1.6 2.4"
                initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 0.9, delay: 0.55 + index * 0.1, ease: "easeInOut" }}
              />
              {isAnimatedFlow && !reduceMotion && (
                <circle r={0.6} fill="white" opacity={0}>
                  <animateMotion
                    dur="4.5s"
                    begin={`${1.6 + index * 0.7}s`}
                    repeatCount="indefinite"
                    path={curvePath(GLOBE_CENTER.x, GLOBE_CENTER.y, icon.x, icon.y, 6)}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;0.9;0"
                    dur="4.5s"
                    begin={`${1.6 + index * 0.7}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>
          );
        })}
      </svg>

      {/* Capa 6: planeta — cruza el límite blanco/azul */}
      <motion.div
        style={{ top: `${GLOBE_CENTER.y}%`, y: globeParallax }}
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="hero-globe-position pointer-events-auto absolute -translate-y-1/2"
      >
        <PlanetGlobe />
      </motion.div>

      {/* Capa 7: iconos (máx. 4) */}
      {ORBIT_ICONS.map(({ Icon, x, y, label }, index) => (
        <motion.div
          key={index}
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.65 + index * 0.09, ease: [0.16, 1, 0.3, 1] }}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0e2d54]/80 text-white shadow-[0_0_18px_rgba(107,149,196,0.35)] backdrop-blur-sm"
        >
          <Icon className="size-4" aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </motion.div>
      ))}

      {/* Capa 8: tarjeta "Conectividad global" */}
      <FloatingCard delay={0.95} style={{ y: cardsParallaxSlow }} className="right-[4%] top-[11%] w-[clamp(190px,15.5vw,232px)]">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-10 shrink-0 items-center justify-center">
              <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="20" cy="20" r="17" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
                <circle
                  cx="20"
                  cy="20"
                  r="17"
                  fill="none"
                  stroke="var(--color-accent-light)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="106.8"
                  strokeDashoffset="26.7"
                />
              </svg>
              <Globe2 className="size-4 text-accent-light" aria-hidden="true" />
            </span>
            <p className="text-[10.5px] font-semibold uppercase leading-tight tracking-[0.12em] text-white">
              Conectividad
              <br />
              global
            </p>
          </div>

          <ul className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-3.5">
            {[
              { Icon: Radio, label: "Canales digitales" },
              { Icon: Workflow, label: "Coordinación operativa" },
              { Icon: Briefcase, label: "Gestión comercial" },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/8 text-accent-light">
                  <Icon className="size-3" aria-hidden="true" />
                </span>
                <span className="text-[11.5px] font-medium leading-snug text-white/85">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </FloatingCard>

      {/* Capa 9: tarjeta "Operaciones en tiempo real" */}
      <FloatingCard
        delay={1.15}
        hoverLift
        style={{ y: cardsParallaxFast }}
        className="right-[4%] top-[58%] w-[clamp(200px,16.5vw,248px)]"
      >
        <div className="p-4 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2 shrink-0">
              <motion.span
                aria-hidden="true"
                className="absolute inline-flex h-full w-full rounded-full bg-accent-light"
                animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white">
              Operaciones en tiempo real
            </p>
          </div>
          <p className="mt-1 pl-4 text-[10px] leading-snug text-text-on-dark-muted">
            Visualización de conectividad
          </p>
        </div>

        <div className="relative mx-3 mb-3.5 h-[92px] overflow-hidden rounded-[calc(var(--radius-md)-6px)] bg-[#04101f]">
          <Image
            src="/images/mundo-nico-sm.webp"
            alt=""
            fill
            sizes="260px"
            className="object-cover opacity-80"
            style={{ objectPosition: "42% 38%", mixBlendMode: "screen" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(4,16,31,0.15), rgba(4,16,31,0.55))" }}
          />

          <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full overflow-visible">
            {REALTIME_NODES.map((node, index) => {
              const style = tierStyle[node.tier];
              return (
                <g key={index}>
                  {style.glow && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y * 0.6}
                      r={style.r}
                      fill="none"
                      stroke="var(--color-accent-light)"
                      strokeWidth={0.4}
                      initial={reduceMotion ? undefined : { opacity: 0, scale: 1 }}
                      animate={
                        reduceMotion
                          ? undefined
                          : { opacity: [0, 0.4, 0], scale: [1, node.tier === 3 ? 3.4 : 2.4, node.tier === 3 ? 3.4 : 2.4] }
                      }
                      transition={{
                        duration: 3 + (index % 4) * 0.7,
                        repeat: Infinity,
                        delay: 1.6 + node.delay,
                        ease: "easeOut",
                      }}
                    />
                  )}
                  <motion.circle
                    cx={node.x}
                    cy={node.y * 0.6}
                    r={style.r}
                    fill="var(--color-accent-light)"
                    initial={reduceMotion ? undefined : { opacity: style.opacity[0] }}
                    animate={reduceMotion ? undefined : { opacity: style.opacity as unknown as number[] }}
                    transition={{
                      duration: 3 + (index % 4) * 0.7,
                      repeat: Infinity,
                      delay: 1.6 + node.delay,
                      ease: "easeInOut",
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </FloatingCard>
    </div>
  );
}
