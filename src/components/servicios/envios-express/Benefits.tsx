export default function Benefits() {
  const benefits = [
    {
      title: "Certeza Total",
      description: "Cumplimos con el rango horario pactado con una precisión del 99%.",
      badge: "DATA_VRF"
    },
    {
      title: "Control Absoluto",
      description: "Gestioná tus envíos desde nuestra plataforma con seguimiento en tiempo real.",
      badge: "LIVE_TRK"
    },
    {
      title: "Prioridad VIP",
      description: "Tus paquetes son los primeros en nuestra hoja de ruta diaria garantizando inmediatez.",
      badge: "HI_PRIO"
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary px-3 py-1 mb-4">
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
                VENTAJA COMPETITIVA
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
              POR QUÉ <span className="text-primary">ELEGIR EXPRESS</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.badge} className="relative p-10 border border-white/10 bg-primary group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {benefit.badge}
              </div>
              <h3 className="font-display text-2xl text-white mb-6 uppercase">{benefit.title}</h3>
              <p className="font-display text-background/60 leading-relaxed">
                {benefit.description}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/20" />
                <div className="w-2 h-2 bg-primary rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
