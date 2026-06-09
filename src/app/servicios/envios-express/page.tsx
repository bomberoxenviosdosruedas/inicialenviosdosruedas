import HeroExpress from "@/components/servicios/envios-express/HeroExpress";
import PremiumSolutions from "@/components/servicios/envios-express/PremiumSolutions";
import PricingTable from "@/components/servicios/envios-express/PricingTable";
import DynamicQuotation from "@/components/servicios/envios-express/DynamicQuotation";
import ConditionsAccordion from "@/components/servicios/envios-express/ConditionsAccordion";
import Benefits from "@/components/servicios/envios-express/Benefits";
import UrgentScenarios from "@/components/servicios/envios-express/UrgentScenarios";

export default function EnviosExpressPage() {
  return (
    <main className="min-h-screen bg-dark-navy text-off-white">
      {/* HERO */}
      <HeroExpress />

      {/* SOLUTIONS */}
      <PremiumSolutions />

      {/* PRICING */}
      <PricingTable />

      {/* DYNAMIC CTA */}
      <DynamicQuotation />

      {/* SCENARIOS */}
      <UrgentScenarios />

      {/* BENEFITS */}
      <Benefits />

      {/* CONDITIONS */}
      <ConditionsAccordion />

      {/* FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t-2 border-primary">
        <div className="bg-white/5 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block bg-primary px-3 py-1 mb-6">
              <span className="font-technical text-xs text-white uppercase font-bold tracking-widest">
                PRIORIDAD MÁXIMA
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-none">
              ¿LISTO PARA TU <br/>
              <span className="text-primary">ENVÍO EXPRESS</span>?
            </h2>
            <p className="font-body text-off-white/60 text-lg">
              No esperes más. Nuestro equipo está listo para manejar tu envío prioritario con la máxima celeridad y cuidado profesional.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
            <button className="bg-primary text-white px-10 py-5 font-technical text-xl uppercase font-bold hover:bg-white hover:text-dark-navy transition-all">
              COTIZAR AHORA
            </button>
            <button className="border border-white/30 text-white px-10 py-5 font-technical text-xl uppercase hover:bg-white/10 transition-all">
              WHATSAPP PRIORITARIO
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
