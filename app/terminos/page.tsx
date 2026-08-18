import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Términos de uso",
  description: "Términos de uso del sitio web de Vargas Trade LLC.",
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos de uso"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro="Al acceder y utilizar este sitio web aceptas los siguientes términos de uso. Si no estás de acuerdo con ellos, te pedimos no continuar navegando en el sitio."
      sections={[
        {
          heading: "Uso permitido",
          body: (
            <p>
              Este sitio tiene fines informativos y corporativos. Está prohibido utilizarlo para
              fines ilícitos, intentar acceder sin autorización a sus sistemas, o realizar
              extracción automatizada de contenido sin autorización previa.
            </p>
          ),
        },
        {
          heading: "Propiedad intelectual",
          body: (
            <p>
              Los textos, el logotipo, el diseño y demás contenidos de este sitio son propiedad de
              Vargas Trade LLC o se utilizan con la debida autorización, y no pueden reproducirse
              sin consentimiento previo por escrito, salvo lo permitido por la ley.
            </p>
          ),
        },
        {
          heading: "Limitación de responsabilidad",
          body: (
            <p>
              La información de este sitio se ofrece &ldquo;tal cual&rdquo;, con fines
              informativos. Vargas Trade LLC procura que sea precisa y esté actualizada, pero no
              garantiza su exactitud absoluta ni la disponibilidad ininterrumpida del sitio.
            </p>
          ),
        },
        {
          heading: "Enlaces externos",
          body: (
            <p>
              Este sitio puede incluir enlaces a sitios de terceros. Vargas Trade LLC no controla
              ni se responsabiliza por el contenido o las prácticas de privacidad de esos sitios.
            </p>
          ),
        },
        {
          heading: "Disponibilidad del sitio",
          body: (
            <p>
              El sitio puede sufrir interrupciones temporales por mantenimiento, actualizaciones u
              otras causas técnicas ajenas a nuestro control.
            </p>
          ),
        },
        {
          heading: "Cambios en estos términos",
          body: (
            <p>
              Podemos actualizar estos términos en cualquier momento. La fecha de la última
              actualización se indica al inicio de esta página.
            </p>
          ),
        },
        {
          heading: "Contacto",
          body: <p>Para consultas sobre estos términos, escríbenos a {COMPANY.email}.</p>,
        },
      ]}
    />
  );
}
