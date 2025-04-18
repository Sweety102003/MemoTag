import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TractionSection from "@/components/TractionSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <ProblemSection />
    
    <SolutionSection/>
    <TractionSection />
    <CTASection />
    </>
  );
}
