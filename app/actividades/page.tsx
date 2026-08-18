import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ActivityDetailList } from "@/components/sections/ActivityDetailList";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";
import { ACTIVITIES_PAGE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Áreas de actividad",
  description:
    "Conoce las áreas de actividad de Vargas Trade LLC: comercio electrónico, investigación de productos, selección de proveedores y coordinación operativa.",
  path: "/actividades",
});

export default function ActividadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Áreas de actividad"
        title={ACTIVITIES_PAGE.heroTitle}
        text={ACTIVITIES_PAGE.heroText}
      />
      <ActivityDetailList />
      <FinalCta />
    </>
  );
}
