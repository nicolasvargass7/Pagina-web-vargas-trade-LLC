import { Compass, Target } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ABOUT_PAGE } from "@/lib/constants";

export function MissionVision() {
  return (
    <section className="bg-bg-alt py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Nuestro enfoque" title="Misión y visión" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[var(--radius-lg)] bg-white p-8">
              <Target className="size-7 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-text">Misión</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{ABOUT_PAGE.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-[var(--radius-lg)] bg-white p-8">
              <Compass className="size-7 text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-text">Visión</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{ABOUT_PAGE.vision}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="text-xl font-semibold text-text">Valores</h3>
          </Reveal>
          <StaggerGroup as="ul" className="mt-6 flex flex-wrap gap-3" stagger={0.06}>
            {ABOUT_PAGE.values.map((value) => (
              <StaggerItem key={value} as="li">
                <span className="inline-flex rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-text">
                  {value}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
