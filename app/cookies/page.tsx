import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Política de cookies",
  description: "Política de cookies del sitio web de Vargas Trade LLC.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de cookies"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro="Esta página explica el uso de cookies y tecnologías similares en el sitio web de Vargas Trade LLC."
      sections={[
        {
          heading: "Cookies necesarias",
          body: (
            <p>
              Este sitio utiliza únicamente cookies técnicas estrictamente necesarias para su
              funcionamiento básico (por ejemplo, para mantener preferencias de navegación). Estas
              cookies no requieren consentimiento previo.
            </p>
          ),
        },
        {
          heading: "Cookies analíticas opcionales",
          body: (
            <p>
              Actualmente este sitio no utiliza cookies analíticas ni de publicidad de terceros.
              Si en el futuro se incorporan herramientas de analítica, se solicitará tu
              consentimiento previo mediante un aviso visible en el sitio.
            </p>
          ),
        },
        {
          heading: "Consentimiento",
          body: (
            <p>
              Cuando este sitio incorpore cookies no esenciales, se mostrará un aviso que te
              permitirá aceptarlas, rechazarlas o configurarlas antes de que se instalen.
            </p>
          ),
        },
        {
          heading: "Cómo desactivar las cookies",
          body: (
            <p>
              Puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Ten
              en cuenta que desactivar las cookies necesarias podría afectar el funcionamiento
              correcto del sitio.
            </p>
          ),
        },
        {
          heading: "Gestión de preferencias",
          body: <p>Para dudas sobre el uso de cookies en este sitio, escríbenos a {COMPANY.email}.</p>,
        },
      ]}
    />
  );
}
