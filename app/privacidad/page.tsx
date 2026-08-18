import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, LEGAL_LAST_UPDATED } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description: "Política de privacidad de Vargas Trade LLC.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de privacidad"
      lastUpdated={LEGAL_LAST_UPDATED}
      intro="Esta política explica qué información recopila Vargas Trade LLC a través de este sitio web, con qué finalidad y qué derechos tienes sobre tus datos."
      sections={[
        {
          heading: "Datos que recopilamos",
          body: (
            <p>
              A través del formulario de contacto podemos recopilar tu nombre, apellido, correo
              electrónico, empresa (opcional), motivo de contacto y el contenido del mensaje que
              nos envíes. No solicitamos datos financieros ni información sensible a través de
              este sitio.
            </p>
          ),
        },
        {
          heading: "Finalidad del tratamiento",
          body: (
            <p>
              Utilizamos esta información exclusivamente para responder a tu consulta, gestionar
              relaciones con proveedores y colaboradores, y dar seguimiento a operaciones
              comerciales relacionadas con la actividad de Vargas Trade LLC.
            </p>
          ),
        },
        {
          heading: "Formularios y consentimiento",
          body: (
            <p>
              Al enviar el formulario de contacto y marcar la casilla correspondiente, aceptas de
              forma expresa el tratamiento de tus datos para los fines descritos en esta política.
            </p>
          ),
        },
        {
          heading: "Conservación de datos",
          body: (
            <p>
              Conservamos la información enviada mediante el formulario durante el tiempo
              necesario para atender tu consulta y, en su caso, mantener un registro razonable de
              la relación comercial, salvo que la normativa aplicable exija un plazo distinto.
            </p>
          ),
        },
        {
          heading: "Terceros",
          body: (
            <p>
              No vendemos ni cedemos tus datos a terceros con fines comerciales. Podemos compartir
              información con proveedores tecnológicos que nos ayudan a operar este sitio (por
              ejemplo, servicios de hosting o de envío de correo electrónico), siempre bajo
              obligaciones de confidencialidad.
            </p>
          ),
        },
        {
          heading: "Seguridad",
          body: (
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger la información
              que nos proporcionas frente a accesos no autorizados, pérdida o alteración.
            </p>
          ),
        },
        {
          heading: "Tus derechos",
          body: (
            <p>
              Puedes solicitar acceso, rectificación o eliminación de tus datos, así como oponerte
              a su tratamiento, escribiendo a {COMPANY.email}.
            </p>
          ),
        },
        {
          heading: "Cookies",
          body: (
            <p>
              Este sitio utiliza cookies de forma limitada. Consulta nuestra{" "}
              <Link href="/cookies" className="font-medium text-primary underline underline-offset-2">
                política de cookies
              </Link>{" "}
              para más información.
            </p>
          ),
        },
        {
          heading: "Contacto",
          body: <p>Para cualquier consulta relacionada con esta política, escríbenos a {COMPANY.email}.</p>,
        },
      ]}
    />
  );
}
