export default function PricingExplanation() {
  const cards = [
    {
      title: "Basado en la Distancia",
      description: "Utilizamos la distancia calculada entre origen y destino, optimizada para rutas de bajo costo.",
      icon: "DIST_ECON"
    },
    {
      title: "Tiempo Estimado (Informativo)",
      description: "El tiempo se calcula basándose en ventanas horarias programadas para maximizar la eficiencia.",
      icon: "TIME_SCHED"
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block bg-primary px-3 py-1 mb-6">
          <span className="font-mono text-xs text-white uppercase font-bold tracking-widest">
            Transparencia de Precios
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-6 tracking-tighter">
          ¿Cómo Calculamos el <span className="text-primary">Precio</span>?
        </h2>
        <p className="font-display text-background/70 max-w-2xl mx-auto">
          Nuestros precios se basan en la distancia, pero optimizados para envíos que no requieren urgencia inmediata, permitiendo tarifas reducidas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {cards.map((card) => (
          <div key={card.icon} className="border-2 border-white/10 bg-primary p-10 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 font-display text-7xl text-white/5 select-none">
              {card.icon}
            </div>
            <h3 className="font-display text-2xl text-primary mb-4 uppercase">{card.title}</h3>
            <p className="font-display text-background/60 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-display text-xs text-background/40 uppercase tracking-widest">
          Para envíos masivos recurrentes, consulta nuestro Plan Emprendedores.
        </p>
      </div>
    </section>
  );
}
