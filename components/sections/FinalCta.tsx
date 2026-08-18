import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { FINAL_CTA } from "@/lib/constants";
import { scaleIn } from "@/lib/motion";

export function FinalCta() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal variants={scaleIn}>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,110,168,0.4),transparent_65%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {FINAL_CTA.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-text-on-dark-muted">
                {FINAL_CTA.body}
              </p>
              <div className="mt-10 flex justify-center">
                <Button href={FINAL_CTA.cta.href} className="bg-white text-primary hover:bg-white/90 hover:text-primary">
                  {FINAL_CTA.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
