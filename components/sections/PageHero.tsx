import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg-alt pt-[68px] md:pt-[84px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--color-bg-muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-bg-muted)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />
      <Container className="relative py-20 md:py-28">
        <div className="max-w-2xl">
          {eyebrow && (
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-accent">
                <span aria-hidden="true" className="h-px w-8 bg-current" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">{text}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
