export default function PremiumSolutions() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="bg-blue-brand h-1 w-24 mb-8" />
        <div className="inline-block bg-blue-brand px-3 py-1 mb-4">
          <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
            SOLUCIONES PREMIUM
          </span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8 leading-none">
          ENTREGAS <br/>
          RÁPIDAS Y <br/>
          <span className="text-blue-brand">EFICIENTES</span>
        </h2>
        <p className="font-display text-white-brand/70 leading-relaxed text-lg mb-8">
          Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta. Hemos optimizado cada ruta para garantizar que el tiempo sea tu aliado, no tu enemigo.
        </p>
        
        <div className="space-y-6">
          {[
            { t: "Alta criticidad horaria", d: "Servicio diseñado para cuando el tiempo es el factor más importante en tu operación." },
            { t: "Rango horario a elección", d: "El cliente elige el rango horario de entrega que mejor se adapte a su necesidad." },
            { t: "Anticipación mínima", d: "Solo requerimos un mínimo de 2 horas de anticipación para coordinar tu envío prioritario." }
          ].map((item) => (
            <div key={item.t} className="flex gap-6">
              <div className="w-1 bg-blue-brand shrink-0" />
              <div>
                <h4 className="font-mono text-white uppercase text-sm mb-1 tracking-wider">{item.t}</h4>
                <p className="font-display text-xs text-white-brand/50">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 border border-blue-brand/20 -z-10" />
        <div className="bg-white/5 border border-white/10 p-2 relative">
          <div className="absolute top-4 left-4 font-display text-[120px] text-blue-brand/5 select-none leading-none">
            STRAT_01
          </div>
          <div className="aspect-[4/5] bg-blue-brand border border-white/10 flex flex-col justify-end p-8 overflow-hidden">
             <div className="space-y-4">
                <div className="h-4 w-3/4 bg-blue-brand" />
                <div className="h-4 w-1/2 bg-white/20" />
                <div className="h-4 w-5/6 bg-white/10" />
             </div>
             <div className="mt-12">
               <h3 className="font-display text-4xl text-white uppercase tracking-tighter">EFICIENCIA <br/>OPERATIVA_26</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
