import {
  Headset,
  LayoutGrid,
  SearchCheck,
  ShoppingBag,
  Users2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ACTIVITIES_PAGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const icons = [ShoppingBag, SearchCheck, Users2, Workflow, Headset, LayoutGrid];

export function ActivityDetailList() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col gap-20 md:gap-28">
          {ACTIVITIES_PAGE.sections.map((section, index) => {
            const Icon = icons[index];
            const reversed = index % 2 === 1;

            return (
              <div
                key={section.title}
                className={cn(
                  "grid grid-cols-1 items-start gap-10 border-t border-border pt-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full bg-bg-alt text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-bold text-bg-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-text sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-secondary">{section.description}</p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-[var(--radius-md)] border border-border p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                        Alcance
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {section.scope}
                      </p>
                    </div>
                    <div className="rounded-[var(--radius-md)] border border-border p-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                        Proceso general
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {section.process}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
