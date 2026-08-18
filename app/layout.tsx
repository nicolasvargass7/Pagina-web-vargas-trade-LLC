import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { buildMetadata } from "@/lib/seo";
import { COMPANY, SITE_URL } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  ...buildMetadata({}),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/logo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0b2d5c",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo/vargas-trade-logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY.city,
    addressRegion: "FL",
    addressCountry: "US",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY.legalName,
  url: SITE_URL,
  inLanguage: "es",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a href="#contenido-principal" className="skip-link">
          Saltar al contenido principal
        </a>
        <SmoothScrollProvider>
          <Header />
          <main id="contenido-principal" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
