export default function HeroLowCost() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -z-10" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-secondary px-3 py-1">
              <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">OPTIMIZACIÓN DE COSTOS</span>
            </div>
            <div className="h-[1px] w-12 bg-secondary"></div>
          </div>

          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter uppercase text-white">
            ENVÍOS <br/>
            <span className="text-secondary">LOWCOST</span><br/>
            INTELIGENTES
          </h1>

          <p className="font-display text-xl text-background/80 max-w-xl border-l-4 border-secondary pl-6 py-2">
            La solución más económica para envíos masivos y programados. Maximizá tu rentabilidad delegando la logística en nuestra red de ruteo optimizado.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary text-primary px-8 py-4 font-mono text-lg uppercase font-bold hover:bg-white transition-all">
              SOLICITAR TARIFA LOWCOST
            </button>
            <button className="border border-background/30 text-white px-8 py-4 font-mono text-lg uppercase hover:bg-white/10 transition-all">
              DESCARGAR TARIFARIO
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="border border-secondary/30 p-8 bg-primary relative group overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 -mr-12 -mt-12 rotate-45" />
             <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-background/40 uppercase">Efficiency_Index</span>
                  <span className="font-display text-2xl text-secondary">94.2%</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/10">
                    <p className="font-mono text-[10px] text-background/40 uppercase mb-1">Cost_Reduction</p>
                    <p className="font-display text-lg text-white font-bold">-40%</p>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10">
                    <p className="font-mono text-[10px] text-background/40 uppercase mb-1">Volume_Capacity</p>
                    <p className="font-display text-lg text-white font-bold">UNLIMITED</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
