import { BreathSection } from "@/components/sections/BreathSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Hero } from "@/components/sections/Hero";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { StancombJourney } from "@/components/sections/StancombJourney";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { TransformationSection } from "@/components/sections/TransformationSection";

export default function Home() {
  return (
    <main id="conteudo" className="flex-1">
      <Hero />
      <ProblemSection />
      <TransformationSection />
      <StancombJourney />
      <PositioningSection />
      <SolutionsSection />
      <ProductsSection />
      <ProofSection />
      <DifferentialsSection />
      <ProcessSection />
      <TechnologySection />
      <BreathSection />
      <ContactSection />
      <FinalCtaSection />
    </main>
  );
}
