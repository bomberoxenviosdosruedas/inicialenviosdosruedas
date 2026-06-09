export default function PricingExplanation() {
  const cards = [
    {
      title: "Basado en la Distancia",
      description: "Utilizamos la distancia calculada entre origen y destino mediante coordenadas GPS precisas.",
      icon: "DIST_MTR"
    },
    {
      title: "Tiempo Estimado (Informativo)",
      description: "El tiempo de entrega estimado se calcula utilizando datos de tráfico histórico y actual.",
      icon: "TIME_DATA"
    }
  ];

  return (
    <section className="py-20 bg-blue-brand/5">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block bg-gold-brand px-3 py-1 mb-6">
          <span className="font-mono text-xs text-blue-brand uppercase font-bold tracking-widest">
            Transparencia de Precios
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-white uppercase mb-6 tracking-tighter">
          ¿Cómo Calculamos el <span className="text-gold-brand">Precio</span>?
        </h2>
        <p className="font-display text-white-brand/70 max-w-2xl mx-auto">
          Nuestros precios se basan exclusivamente en la distancia. Queremos que siempre sepas qué estás pagando, sin sorpresas ni costos ocultos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        {cards.map((card) => (
          <div key={card.icon} className="border-2 border-white/10 bg-blue-brand p-10 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 font-display text-7xl text-white/5 select-none">
              {card.icon}
            </div>
            <h3 className="font-display text-2xl text-gold-brand mb-4 uppercase">{card.title}</h3>
            <p className="font-display text-white-brand/60 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-display text-xs text-white-brand/40 uppercase tracking-widest">
          Para distancias muy largas o requerimientos especiales, te invitamos a contactarnos directamente.
        </p>
      </div>
    </section>
  );
}
