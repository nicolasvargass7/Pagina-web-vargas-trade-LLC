import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { AbstractGraphic } from "@/components/ui/AbstractGraphic";
import { ABOUT_PAGE } from "@/lib/constants";

export function CompanyIntro() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <span className="mb-4 inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-accent">
                <span aria-hidden="true" className="h-px w-8 bg-current" />
                Nuestra empresa
              </span>
              <p className="text-xl leading-relaxed text-text sm:text-2xl">{ABOUT_PAGE.intro}</p>
            </div>
          </Reveal>
          <Reveal variants={{ hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1 } }}>
            <AbstractGraphic />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
