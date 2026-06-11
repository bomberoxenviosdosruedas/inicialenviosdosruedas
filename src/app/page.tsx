import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision";
import ServicesOverview from "@/components/home/ServicesOverview";
import { SocialPost } from "@/generated/prisma/client";
import CtaSection from "@/components/home/CtaSection";
import EntrepreneurSolutions from "@/components/home/EntrepreneurSolutions";
import ServicesSlider from "@/components/home/ServicesSlider";
import SocialProofTicker from "@/components/home/SocialProofTicker";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  let posts: SocialPost[] = [];
  try {
    posts = await prisma.socialPost.findMany({
      orderBy: { timestamp: "desc" },
      take: 3,
    });
  } catch {
    console.warn("Database not reachable during build, using fallback posts.");
  }

  return (
    <main className="flex flex-col min-h-screen bg-dark-navy text-foreground">
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
