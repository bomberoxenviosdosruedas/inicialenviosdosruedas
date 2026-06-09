export default function Benefits() {
  const benefits = [
    {
      title: "Ahorro Real",
      description: "Reducí hasta un 40% tus costos de envío comparado con servicios tradicionales mediante ruteo masivo.",
      icon: "SAVE_VAL"
    },
    {
      title: "Escalabilidad",
      description: "Preparado para manejar desde 10 hasta 1000 envíos diarios sin fricciones operativas.",
      icon: "SCALE_UP"
    },
    {
      title: "Soporte Dedicado",
      description: "Atención personalizada para grandes cuentas y operaciones masivas de alta frecuencia.",
      icon: "SUPP_PRO"
    }
  ];

  return (
    <section className="py-24 bg-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block bg-accent px-3 py-1 mb-4">
            <span className="font-technical text-xs text-dark-navy uppercase tracking-widest font-bold">
              BENEFICIOS LOWCOST
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
            LA COMBINACIÓN <span className="text-accent">PERFECTA</span>
          </h2>
          <p className="font-body text-off-white/60 mt-4 max-w-xl border-l-2 border-accent pl-6">
            La combinación perfecta entre economía y eficiencia logística para potenciar el crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.icon} className="bg-dark-navy border border-white/10 p-10 relative group hover:border-accent transition-colors">
              <div className="absolute top-0 right-0 p-4 font-display text-4xl text-white/5 group-hover:text-accent/20 transition-colors">
                {b.icon}
              </div>
              <h3 className="font-display text-2xl text-white mb-6 uppercase tracking-tight">{b.title}</h3>
              <p className="font-body text-sm text-off-white/60 leading-relaxed">
                {b.description}
              </p>
              <div className="mt-8 flex items-center gap-2">
                <div className="h-1 w-1 bg-accent" />
                <div className="h-1 w-1 bg-accent" />
                <div className="h-1 w-8 bg-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
