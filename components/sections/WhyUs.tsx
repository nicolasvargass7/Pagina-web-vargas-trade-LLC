import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
                {WHY_US.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-text-secondary">
                {WHY_US.intro}
              </p>
            </Reveal>
          </div>

          <StaggerGroup as="ul" className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            {WHY_US.points.map((point) => (
              <StaggerItem key={point} as="li">
                <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border p-5">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-text">{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
