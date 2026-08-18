import type { Metadata } from "next";
import { SEO_DEFAULT, SITE_URL } from "./constants";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const resolvedTitle = title ? `${title} | Vargas Trade LLC` : SEO_DEFAULT.title;
  const resolvedDescription = description ?? SEO_DEFAULT.description;
  const url = `${SITE_URL}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: SEO_DEFAULT.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: "Vargas Trade LLC",
      locale: "es_US",
      type: "website",
      images: [
        {
          url: "/logo/vargas-trade-logo.png",
          width: 1000,
          height: 748,
          alt: "Vargas Trade LLC",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: resolvedTitle,
      description: resolvedDescription,
      images: ["/logo/vargas-trade-logo.png"],
    },
  };
}
