import QuoteContainer from "@/components/cotizar/express/QuoteContainer";
import MapFeatures from "@/components/cotizar/express/MapFeatures";
import PricingExplanation from "@/components/cotizar/express/PricingExplanation";
import CalculatorTips from "@/components/cotizar/express/CalculatorTips";

export default function CotizarExpressPage() {
  return (
    <main className="min-h-screen bg-blue-brand text-white-brand pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-blue-brand"></div>
            <span className="font-mono text-xs tracking-[0.3em] text-blue-brand uppercase">
              Operational_Interface / Express
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Cotizador <br />
            <span className="text-gold-brand">Express Online</span>
          </h1>
          <p className="font-display text-xl text-white-brand/70 max-w-2xl border-l-4 border-gold-brand pl-8 py-2">
            Calculá el costo de tu envío en tiempo real con precisión geográfica y confirmación inmediata.
          </p>
        </section>

        {/* INTERACTIVE CALCULATOR */}
        <div className="mb-20">
          <QuoteContainer />
        </div>

        {/* FEATURES SECTION */}
        <MapFeatures />

        {/* PRICING INFO */}
        <PricingExplanation />

        {/* TIPS SECTION */}
        <CalculatorTips />

        {/* CTA SECTION */}
        <section className="mt-20 border-t-2 border-blue-brand pt-20">
          <div className="bg-white/5 p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-2 h-full bg-blue-brand" />
             <div className="max-w-xl">
               <h2 className="font-display text-4xl text-white uppercase mb-4 tracking-tight">
                 ¿Dudas o Envíos Especiales?
               </h2>
               <p className="font-display text-white-brand/60">
                 Si tu envío excede nuestros rangos estándar o requiere un tratamiento logístico particular, no dudes en contactarnos directamente.
               </p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <button className="bg-blue-brand text-white px-8 py-4 font-mono text-lg uppercase font-bold hover:bg-white hover:text-blue-brand transition-all">
                 Formulario de Contacto
               </button>
               <button className="border border-white/30 text-white px-8 py-4 font-mono text-lg uppercase hover:bg-white/10 transition-all">
                 Llámanos: 223-660-2699
               </button>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}
