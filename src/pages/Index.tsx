import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { FlowSection } from "@/components/FlowSection";
import { FlexibilitySection } from "@/components/FlexibilitySection";
import { GamificationSection } from "@/components/GamificationSection";
import { QuizSection } from "@/components/QuizSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { ERPSection } from "@/components/ERPSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
        <EcosystemSection />
        <FlowSection />
        <FlexibilitySection />
        <GamificationSection />
        <QuizSection />
        <ERPSection />
        <IntegrationsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
