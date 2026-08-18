import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ActivityCards } from "@/components/sections/ActivityCards";
import { OperationProcess } from "@/components/sections/OperationProcess";
import { OperationModel } from "@/components/sections/OperationModel";
import { Principles } from "@/components/sections/Principles";
import { WhyUs } from "@/components/sections/WhyUs";
import { CorporatePresence } from "@/components/sections/CorporatePresence";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ActivityCards />
      <OperationProcess />
      <OperationModel />
      <Principles />
      <WhyUs />
      <CorporatePresence />
      <Faq />
      <FinalCta />
    </>
  );
}
