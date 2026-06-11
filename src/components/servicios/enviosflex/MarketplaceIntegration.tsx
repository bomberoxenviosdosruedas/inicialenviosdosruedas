export default function MarketplaceIntegration() {
  const benefits = [
    { title: "Termómetro en Verde", desc: "El cumplimiento perfecto de entregas mantiene tu reputación en lo más alto del marketplace.", id: "ML_01" },
    { title: "Más Ventas", desc: "Los productos con la etiqueta 'Llega hoy' convierten hasta un 40% más que los envíos tradicionales.", id: "ML_02" },
    { title: "Ahorro de Tiempo", desc: "Nosotros nos encargamos de toda la complejidad logística, vos concentrate en vender.", id: "ML_03" }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1 relative">
         <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4 -z-10" />
         <div className="bg-primary border-2 border-primary p-2">
            <div className="aspect-video bg-white/5 border border-white/10 flex flex-col justify-center items-center p-12 text-center">
               <div className="bg-primary/20 p-6 mb-6">
                 <div className="w-16 h-1 bg-primary mb-2" />
                 <div className="w-16 h-1 bg-primary" />
               </div>
               <h3 className="font-display text-4xl text-white uppercase mb-4">SLA_VERIFIED</h3>
               <p className="font-mono text-primary tracking-widest text-sm uppercase">Automatic_Integration_Active</p>
            </div>
         </div>
      </div>

      <div className="order-1 lg:order-2 space-y-12">
        <div>
          <div className="inline-block bg-primary px-3 py-1 mb-4">
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">MERCADO ENVÍOS FLEX</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
            IMPULSÁ TU <br/>
            <span className="text-primary">REPUTACIÓN</span>
          </h2>
        </div>

        <div className="space-y-8">
          {benefits.map((b) => (
            <div key={b.id} className="flex gap-8 group">
              <div className="font-mono text-2xl text-primary font-bold group-hover:scale-125 transition-transform">{b.id}</div>
              <div className="border-b border-white/10 pb-6 flex-1">
                <h4 className="font-display text-xl text-white uppercase mb-2">{b.title}</h4>
                <p className="font-display text-sm text-background/60 leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
