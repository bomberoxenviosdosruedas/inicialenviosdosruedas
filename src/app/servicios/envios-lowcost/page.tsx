import type { Metadata } from "next";
import HeroLowCost from "@/components/servicios/envios-lowcost/HeroLowCost";
import MassiveEfficiency from "@/components/servicios/envios-lowcost/MassiveEfficiency";
import Benefits from "@/components/servicios/envios-lowcost/Benefits";
import PricingGrid from "@/components/servicios/envios-lowcost/PricingGrid";

export const metadata: Metadata = {
  title: "Envíos LowCost Programados",
  description: "Servicio de logística económica y envíos programados en Mar del Plata. Minimizá los costos de envío de tu negocio con entregas consolidadas en el día.",
};

export default function EnviosLowCostPage() {
  return (
    <main className="min-h-screen bg-blue-brand text-white-brand">
      {/* HERO */}
      <HeroLowCost />

      {/* EFFICIENCY & HOW IT WORKS */}
      <MassiveEfficiency />

      {/* PRICING TABLE */}
      <PricingGrid />

      {/* BENEFITS */}
      <Benefits />

      {/* FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t-2 border-gold-brand">
        <div className="bg-white/5 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gold-brand" />
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block bg-gold-brand px-3 py-1 mb-6">
              <span className="font-mono text-xs text-blue-brand uppercase font-bold tracking-widest">
                ECONOMÍA Y ESCALA
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-none">
              ¿LISTO PARA BAJAR <br/>
              <span className="text-gold-brand">TUS COSTOS?</span>
            </h2>
            <p className="font-display text-white-brand/60 text-lg">
              Empieza hoy mismo a enviar de forma inteligente. Súmate a la flota con mayor eficiencia operativa de Mar del Plata y hacé crecer tu margen de ganancia.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
            <button className="bg-gold-brand text-blue-brand px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-white transition-all">
              COTIZAR ENVÍO
            </button>
            <button className="border border-white/30 text-white px-10 py-5 font-mono text-xl uppercase hover:bg-white/10 transition-all">
              CONTACTAR ASESOR
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
