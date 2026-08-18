"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OPERATION_STAGES } from "@/lib/constants";

export function OperationProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const desktopNodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileNodeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (lineRef.current) {
          const length = lineRef.current.getTotalLength();
          gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(lineRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "bottom 55%",
              scrub: 0.6,
            },
          });
        }

        desktopNodeRefs.current.forEach((node, index) => {
          if (!node) return;
          gsap.fromTo(
            node,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              delay: index * 0.05,
              scrollTrigger: {
                trigger: node,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        mobileNodeRefs.current.forEach((node) => {
          if (!node) return;
          gsap.fromTo(
            node,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: node,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="como-operamos" ref={sectionRef} className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo operamos"
          subtitle="Un proceso organizado para gestionar cada etapa de la operación comercial."
        />

        <div className="relative mt-20 hidden lg:block">
          <svg className="absolute left-0 top-6 h-1 w-full overflow-visible" aria-hidden="true">
            <line
              x1="2%"
              y1="0"
              x2="98%"
              y2="0"
              stroke="var(--color-bg-muted)"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <line
              ref={lineRef}
              x1="2%"
              y1="0"
              x2="98%"
              y2="0"
              stroke="var(--color-accent)"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-4 gap-8">
            {OPERATION_STAGES.map((stage, index) => (
              <div
                key={stage.number}
                ref={(el) => {
                  desktopNodeRefs.current[index] = el;
                }}
              >
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-accent bg-white font-display text-sm font-bold text-primary">
                  {stage.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-text">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-10 border-l border-border pl-8 lg:hidden">
          {OPERATION_STAGES.map((stage, index) => (
            <div
              key={stage.number}
              ref={(el) => {
                mobileNodeRefs.current[index] = el;
              }}
              className="relative"
            >
              <div className="absolute -left-[41px] flex size-8 items-center justify-center rounded-full border-2 border-accent bg-white font-display text-xs font-bold text-primary">
                {stage.number}
              </div>
              <h3 className="text-lg font-semibold text-text">{stage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
