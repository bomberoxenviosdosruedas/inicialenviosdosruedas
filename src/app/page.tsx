import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision";
import ServicesOverview from "@/components/home/ServicesOverview";
import CtaSection from "@/components/home/CtaSection";
import EntrepreneurSolutions from "@/components/home/EntrepreneurSolutions";
import ServicesSlider from "@/components/home/ServicesSlider";
import SocialProofTicker from "@/components/home/SocialProofTicker";
import { prisma } from "@/lib/db";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. Cabecera (En Navbar.tsx) */}

      {/* 2. Sección Principal / Hero */}
      <Hero />

      {/* 3. Visión Estratégica */}
      <Vision />

      {/* 4. Resumen de Servicios */}
      <ServicesOverview />

      {/* 5. Llamado a la Acción / Conversión */}
      <CtaSection />

      {/* 6. Soluciones Corporativas y PyME */}
      <EntrepreneurSolutions />
      <SocialProofTicker />
    </main>
  );
}
