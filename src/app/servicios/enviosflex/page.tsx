import HeroFlex from "@/components/servicios/enviosflex/HeroFlex";
import MarketplaceIntegration from "@/components/servicios/enviosflex/MarketplaceIntegration";
import OperationalFlow from "@/components/servicios/enviosflex/OperationalFlow";
import Requirements from "@/components/servicios/enviosflex/Requirements";

export default function EnviosFlexPage() {
  const zones = [
    { zone: "Zona 1: Centro / Microcentro", price: "$1.850" },
    { zone: "Zona 2: Güemes / Playa Grande", price: "$2.100" },
    { zone: "Zona 3: Puerto / Faro / Constitución", price: "$2.450" },
    { zone: "Zona 4: Periferia Urbana", price: "$2.900" },
  ];

  return (
    <main className="min-h-screen bg-blue-brand text-white-brand">
      {/* HERO */}
      <HeroFlex />

      {/* REPUTATION BENEFITS */}
      <MarketplaceIntegration />

      {/* OPERATIONAL FLOW */}
      <OperationalFlow />

      {/* PRICING TABLE */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="border-l-8 border-blue-brand pl-8 mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
            TARIFAS FLEX <br/>
            <span className="text-blue-brand">POR ZONA</span>
          </h2>
          <p className="font-display text-white-brand/60 mt-4 max-w-xl">
            Conocé los valores actualizados para la distribución de Mercado Envíos Flex en el partido de General Pueyrredón.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {zones.map((z, i) => (
            <div key={i} className="flex justify-between items-center p-8 bg-white/5 border border-white/10 hover:border-blue-brand transition-colors">
              <span className="font-display text-xl text-white uppercase">{z.zone}</span>
              <div className="text-right">
                <span className="font-mono text-[10px] text-blue-brand block mb-1 uppercase tracking-widest">TARIFA_UNIT</span>
                <span className="font-display text-3xl text-white">{z.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REQUIREMENTS */}
      <Requirements />

      {/* FINAL CTA */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t-2 border-blue-brand">
        <div className="bg-white/5 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-brand" />
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block bg-blue-brand px-3 py-1 mb-6">
              <span className="font-mono text-xs text-white uppercase font-bold tracking-widest">
                IMPULSA TU REPUTACIÓN
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-none">
              ¿LISTO PARA VENDER <br/>
              <span className="text-blue-brand">MÁS CON FLEX?</span>
            </h2>
            <p className="font-display text-white-brand/60 text-lg">
              No pierdas más ventas por tiempos de entrega largos. Implementa Same-Day hoy mismo y llevá tu cuenta al siguiente nivel.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
            <button className="bg-blue-brand text-white px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-blue-brand transition-all">
              EMPEZAR AHORA
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
