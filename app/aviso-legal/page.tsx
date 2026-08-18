import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Aviso legal",
  description: "Aviso legal del sitio web de Vargas Trade LLC.",
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Aviso legal"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro="Este aviso legal identifica a la empresa responsable de este sitio web y describe la naturaleza de su contenido."
      sections={[
        {
          heading: "Identificación",
          body: (
            <p>
              Este sitio web es operado por {COMPANY.legalName}, una compañía de responsabilidad
              limitada constituida en el estado de Florida, Estados Unidos, con presencia
              corporativa en {COMPANY.location}.
            </p>
          ),
        },
        {
          heading: "Contacto",
          body: <p>Para consultas relacionadas con este aviso legal, escríbenos a {COMPANY.email}.</p>,
        },
        {
          heading: "Naturaleza informativa del sitio",
          body: (
            <p>
              El contenido de este sitio tiene carácter informativo y de presentación corporativa.
              No constituye una oferta comercial vinculante ni asesoramiento profesional de ningún
              tipo.
            </p>
          ),
        },
        {
          heading: "Derechos sobre los contenidos",
          body: (
            <p>
              Los textos, el logotipo y el diseño de este sitio son propiedad de{" "}
              {COMPANY.legalName} o se utilizan con la debida autorización.
            </p>
          ),
        },
        {
          heading: "Limitaciones",
          body: (
            <p>
              La información publicada puede actualizarse sin previo aviso. Vargas Trade LLC no
              garantiza la exactitud absoluta ni la disponibilidad ininterrumpida del contenido
              publicado.
            </p>
          ),
        },
      ]}
    />
  );
}
