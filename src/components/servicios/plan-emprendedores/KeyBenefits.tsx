export default function KeyBenefits() {
  const benefits = [
    { title: "Escalabilidad Total", desc: "Crecé sin límites de espacio físico ni necesidad de contratar personal logístico extra.", id: "BEN_01" },
    { title: "Precios de Escala", desc: "Accedé a tarifas preferenciales y competitivas por volumen de envíos mensuales.", id: "BEN_02" },
    { title: "Ahorro de Infraestructura", desc: "Eliminamos tus costos fijos de depósito, seguros y herramientas de embalaje.", id: "BEN_03" }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block bg-primary px-3 py-1 mb-4">
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
              VENTAJAS CORPORATIVAS
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
            MÁS QUE UNA <span className="text-primary">MENSAJERÍA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.id} className="bg-primary border border-white/10 p-10 relative group hover:border-primary transition-colors">
              <span className="font-mono text-sm text-primary mb-6 block uppercase tracking-[0.2em]">{b.id}</span>
              <h3 className="font-display text-2xl text-white mb-4 uppercase">{b.title}</h3>
              <p className="font-display text-sm text-background/60 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
