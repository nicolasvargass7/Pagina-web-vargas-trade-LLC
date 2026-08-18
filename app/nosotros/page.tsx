import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { MissionVision } from "@/components/sections/MissionVision";
import { OperationModel } from "@/components/sections/OperationModel";
import { Principles } from "@/components/sections/Principles";
import { CorporatePresence } from "@/components/sections/CorporatePresence";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";
import { ABOUT_PAGE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conoce Vargas Trade LLC, empresa constituida en Florida dedicada al comercio electrónico y a la coordinación de operaciones digitales.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero eyebrow="Nosotros" title={ABOUT_PAGE.heroTitle} text={ABOUT_PAGE.heroText} />
      <CompanyIntro />
      <MissionVision />
      <OperationModel />
      <Principles />
      <CorporatePresence />
      <FinalCta />
    </>
  );
}
