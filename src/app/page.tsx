import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision";
import ServicesOverview from "@/components/home/ServicesOverview";
import CtaSection from "@/components/home/CtaSection";
import EntrepreneurSolutions from "@/components/home/EntrepreneurSolutions";
import ServicesSlider from "@/components/home/ServicesSlider";
import SocialProofTicker from "@/components/home/SocialProofTicker";
import { prisma } from "@/lib/db";

export default async function Home() {
  const posts = await prisma.socialPost.findMany({
    orderBy: { timestamp: "desc" },
    take: 3,
  });

  return (
    <main className="flex flex-col min-h-screen bg-dark-navy text-off-white">
      <Hero />
      <Vision />
      <ServicesOverview />
      <CtaSection />
      <EntrepreneurSolutions />
      <ServicesSlider />
      <SocialProofTicker posts={posts} />
    </main>
  );
}
