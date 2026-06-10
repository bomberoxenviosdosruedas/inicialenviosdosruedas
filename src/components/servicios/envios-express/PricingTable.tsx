export default function PricingTable() {
  const tiers = [
    {
      title: "Radio céntrico",
      desc: "Ideal para entregas inmediatas en el centro",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
      price: "$2.500"
    },
    {
      title: "Periferia cercana",
      desc: "Cobertura extendida con rapidez",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
      price: "$3.800"
    },
    {
      title: "Zonas alejadas",
      desc: "Llegamos a donde otros no",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
      price: "$5.200"
    },
    {
      title: "Límites de ciudad",
      desc: "Máxima cobertura urbana",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
      price: "$6.500"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 border-l-8 border-primary pl-8">
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
          TARIFAS 2026 <br/>
          <span className="text-primary">ENVÍOS EXPRESS</span>
        </h2>
        <p className="font-display text-background/60 mt-4 max-w-xl">
          Consultá los precios actualizados para nuestro servicio premium con rango horario a elección en Mar del Plata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <div key={tier.title} className="border-2 border-white/10 p-8 flex flex-col hover:border-primary transition-colors bg-white/5">
            <h3 className="font-display text-2xl text-white mb-2 uppercase">{tier.title}</h3>
            <p className="font-display text-[10px] text-background/50 uppercase mb-8">{tier.desc}</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-mono text-xs text-background/80">
                  <div className="w-1.5 h-1.5 bg-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10">
              <p className="font-mono text-[10px] text-primary uppercase mb-1">Value_Start</p>
              <p className="font-display text-4xl text-white">{tier.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
