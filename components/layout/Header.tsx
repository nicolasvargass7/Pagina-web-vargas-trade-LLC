"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [previousPathname, setPreviousPathname] = useState(pathname);

  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled
            ? "border-b border-border bg-white/85 backdrop-blur-md shadow-[0_1px_2px_rgba(11,45,92,0.06)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-[68px] items-center justify-between md:h-[84px]">
            <Link href="/" className="flex items-center" aria-label="Vargas Trade LLC — Inicio">
              <Image
                src="/logo/vargas-trade-logo-header.png"
                alt="Vargas Trade LLC"
                width={640}
                height={478}
                priority
                className="h-12 w-auto md:h-16"
              />
            </Link>

            <nav aria-label="Navegación principal" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <Button href="/contacto" variant="primary" className="px-5 py-3 text-[13px]">
                Contactar
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center justify-center rounded-full p-2 text-text lg:hidden"
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileOpen}
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
