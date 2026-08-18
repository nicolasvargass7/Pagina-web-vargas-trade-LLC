import { Cpu, Handshake, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { OPERATION_MODEL } from "@/lib/constants";

const icons = [Cpu, Handshake, LayoutGrid];

export function OperationModel() {
  return (
    <section className="bg-primary py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {OPERATION_MODEL.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-lg leading-relaxed text-text-on-dark-muted">
              {OPERATION_MODEL.body}
            </p>
          </Reveal>
        </div>

        <StaggerGroup as="ul" className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
          {OPERATION_MODEL.columns.map((column, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={column.title} as="li">
                <div className="h-full rounded-[var(--radius-lg)] border border-white/10 bg-bg-dark-alt p-7">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/10 text-accent-light">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-white">{column.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-on-dark-muted">
                    {column.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl border-t border-white/10 pt-6 text-sm leading-relaxed text-text-on-dark-muted">
            {OPERATION_MODEL.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
