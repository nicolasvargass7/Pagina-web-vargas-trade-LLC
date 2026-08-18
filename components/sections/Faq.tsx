import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/motion/Reveal";
import { FAQ } from "@/lib/constants";

export function Faq() {
  return (
    <section id="preguntas-frecuentes" className="bg-bg-alt py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas principales"
          />
          <Reveal>
            <Accordion items={FAQ} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
