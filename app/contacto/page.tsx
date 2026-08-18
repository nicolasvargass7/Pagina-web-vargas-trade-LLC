import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, CONTACT_PAGE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta a Vargas Trade LLC para consultas comerciales, proveedores, colaboraciones o información general.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title={CONTACT_PAGE.title} text={CONTACT_PAGE.text} />

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border p-6">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="text-sm font-semibold text-text">Correo corporativo</h2>
                    <p className="mt-1 text-sm text-text-secondary">{COMPANY.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border p-6">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="text-sm font-semibold text-text">Ubicación</h2>
                    <p className="mt-1 text-sm text-text-secondary">{COMPANY.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-border p-6">
                  <Clock className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h2 className="text-sm font-semibold text-text">Horario de atención</h2>
                    <p className="mt-1 text-sm text-text-secondary">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
