import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { COMPANY, FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-alt">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/logo/vargas-trade-logo-header.png"
              alt="Vargas Trade LLC"
              width={640}
              height={478}
              className="h-12 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-secondary">
              Vargas Trade LLC desarrolla actividades de comercio electrónico y operaciones
              comerciales mediante canales digitales.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-text">Empresa</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-text">Información legal</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-text">Contacto</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>{COMPANY.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vargas Trade LLC. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
