export default function Values() {
  const values = [
    { title: "Transparencia", desc: "Comunicación clara y seguimiento real en cada etapa del proceso logístico.", icon: "01" },
    { title: "Innovación", desc: "Buscamos constantemente optimizar rutas y tiempos mediante tecnología de punta.", icon: "02" },
    { title: "Compromiso", desc: "Tratamos cada paquete como si fuera nuestro, garantizando su integridad absoluta.", icon: "03" }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-4">NUESTROS <span className="text-primary">PILARES</span></h2>
        <p className="font-body text-off-white/60 max-w-2xl mx-auto">La excelencia no es un acto, es un hábito que practicamos en cada kilómetro recorrido por las calles de nuestra ciudad.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((v, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
             <div className="w-16 h-16 border-2 border-primary rotate-45 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-300">
                <span className="font-technical text-xl text-white -rotate-45">{v.icon}</span>
             </div>
             <h3 className="font-display text-3xl text-white uppercase mb-4 tracking-tighter">{v.title}</h3>
             <p className="font-body text-sm text-off-white/50 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
