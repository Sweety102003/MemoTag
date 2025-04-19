import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TractionSection from "@/components/TractionSection";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ProblemSection />
    
    <SolutionSection/>
    <TractionSection />
    
    <CTASection />
    <CommunitySection/>
    <Footer />
    
    </>
  );
}
