import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision";
import ServicesSlider from "@/components/home/ServicesSlider";
import EntrepreneurSolutions from "@/components/home/EntrepreneurSolutions";
import SocialProofTicker from "@/components/home/SocialProofTicker";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-dark-navy text-off-white industrial-grid">
      <Hero />
      <Vision />
      <ServicesSlider />
      <EntrepreneurSolutions />
      <SocialProofTicker />
    </main>
  );
}