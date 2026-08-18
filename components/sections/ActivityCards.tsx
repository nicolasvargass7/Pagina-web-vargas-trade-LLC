"use client";

import { ArrowUpRight, Boxes, Globe2, ShoppingBag, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ACTIVITY_CARDS } from "@/lib/constants";

const icons = [ShoppingBag, Boxes, Users2, Globe2];

export function ActivityCards() {
  return (
    <section id="areas-actividad" className="bg-bg-alt py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Áreas de actividad"
          title="Áreas de actividad"
          subtitle="Desarrollamos procesos orientados a la comercialización digital y a la coordinación eficiente de operaciones online."
        />

        <StaggerGroup
          as="ul"
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {ACTIVITY_CARDS.map((card, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={card.title} as="li">
                <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-border bg-white p-7 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full bg-bg-alt text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-semibold text-bg-muted group-hover:text-accent-light">
                      {card.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-text">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                    {card.description}
                  </p>
                  <ArrowUpRight
                    className="mt-5 size-4 text-text-muted transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
