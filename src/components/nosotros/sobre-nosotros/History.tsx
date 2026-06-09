export default function History() {
  const milestones = [
    { year: "2017", title: "Inicios", desc: "Comenzamos como un servicio de mensajería local enfocado en la agilidad del radio céntrico." },
    { year: "2021", title: "Transformación", desc: "Evolucionamos hacia el E-commerce moderno, integrando herramientas de tracking y ruteo." },
    { year: "2023", title: "Consolidación", desc: "Alcanzamos los 4.9 estrellas en Google Reviews con más de 100k entregas completadas." },
    { year: "2024", title: "Actualidad", desc: "Operamos bajo un modelo de tercerización 3PL con depósitos propios y logística avanzada." }
  ];

  return (
    <section className="py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4">NUESTRA <span className="text-primary">HISTORIA</span></h2>
          <p className="font-technical text-accent tracking-[0.2em] uppercase text-sm">Más de 7 años revolucionando la logística en Mar del Plata.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m, i) => (
            <div key={i} className="relative p-8 bg-white/5 border border-white/10 group hover:border-primary transition-colors">
               <div className="font-display text-6xl text-white/5 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                 {m.year}
               </div>
               <div className="relative z-10">
                 <h3 className="font-display text-2xl text-white uppercase mb-4">{m.title}</h3>
                 <p className="font-body text-xs text-off-white/60 leading-relaxed">{m.desc}</p>
               </div>
               <div className="mt-8 h-1 w-12 bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
