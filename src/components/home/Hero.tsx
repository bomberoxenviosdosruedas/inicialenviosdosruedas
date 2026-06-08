export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary px-3 py-1">
            <span className="font-technical text-xs text-dark-navy uppercase tracking-widest">Status: Active_Feed</span>
          </div>
          <div className="h-[1px] w-12 bg-electric-blue"></div>
          <span className="font-body text-xs text-off-white tracking-[0.2em]">RED_LOGISTICA_V4.0</span>
        </div>

        <h1 className="font-display text-7xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white">
          Logística de <br/>
          <span className="text-accent">Alta Frecuencia</span><br/>
          para la era digital.
        </h1>

        <p className="font-body text-lg text-off-white/80 max-w-xl border-l-2 border-primary pl-6 py-2">
          Despliegue operativo inmediato en Mar del Plata. Optimizamos la última milla mediante algoritmos de flujo dinámico y una flota de respuesta rápida.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-accent text-dark-navy px-8 py-4 font-technical text-lg uppercase font-bold hover:bg-white transition-all">
            Iniciar Despliegue
          </button>
          <button className="border border-off-white/30 text-white px-8 py-4 font-technical text-lg uppercase hover:bg-white/10 transition-all">
            Consultar Cobertura
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        {/* Placeholder para la unidad de telemetría/tracking */}
        <div className="border border-electric-blue/30 p-6 bg-dark-navy/50 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-6 pb-4 border-b border-electric-blue/30">
            <div>
              <p className="font-technical text-[10px] text-off-white/50 uppercase">Unit_Tracking_Id</p>
              <h3 className="font-display text-accent text-2xl tracking-tighter">DR-9921-XPR</h3>
            </div>
            <div className="px-3 py-1 bg-accent text-dark-navy font-technical text-[10px]">
              LIVE_SIGNAL
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Velocity', 'Est_Delivery'].map((item) => (
              <div key={item} className="p-3 bg-white/5 border border-white/10">
                <p className="font-technical text-[10px] text-off-white/50 uppercase">{item}</p>
                <p className="font-body text-white">104.2 KM/H</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}