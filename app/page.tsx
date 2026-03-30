import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopContactBar } from "@/components/layout/TopContactBar";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <TopContactBar />
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <CalculatorSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
