import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export type LegalSection = {
  heading: string;
  body: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <section className="pt-[68px] md:pt-[84px]">
      <Container className="max-w-3xl py-20 md:py-28">
        <Reveal>
          <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            {eyebrow}
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-text-muted">Última actualización: {lastUpdated}</p>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">{intro}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((section) => (
            <Reveal key={section.heading}>
              <div className="border-t border-border pt-8">
                <h2 className="text-lg font-semibold text-text">{section.heading}</h2>
                <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-text-secondary">
                  {section.body}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
