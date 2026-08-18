import {
  Eye,
  Gauge,
  HeartHandshake,
  RefreshCcw,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { PRINCIPLES } from "@/lib/constants";

const icons = [Eye, Gauge, UserCheck, ShieldCheck, RefreshCcw, HeartHandshake];

export function Principles() {
  return (
    <section id="principios" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Principios"
          title="Principios que orientan nuestra operación"
          align="center"
          className="mx-auto"
        />

        <StaggerGroup
          as="ul"
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {PRINCIPLES.map((principle, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={principle.title} as="li">
                <div className="group relative h-full overflow-hidden rounded-[var(--radius-md)] border border-border p-7 transition-colors duration-300 hover:bg-bg-alt">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <Icon className="size-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-semibold text-text">{principle.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-text-secondary">
                    {principle.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}
