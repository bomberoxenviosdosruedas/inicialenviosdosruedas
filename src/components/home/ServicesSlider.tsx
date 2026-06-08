export default function ServicesSlider() {
  const services = [
    { title: "Envíos Express", desc: "Prioridad absoluta y certeza total.", tag: "ALTA PRIORIDAD", btn: "Solicitar Express" },
    { title: "Envíos LowCost", desc: "Máxima rentabilidad y eficiencia.", tag: "RENTABILIDAD", btn: "Ahorrá con LowCost" },
    { title: "Envíos Flex", desc: "Potenciá tu reputación al máximo.", tag: "MERCADOLIBRE", btn: "Activar Envíos Flex" },
    { title: "E-Commerce & 3PL", desc: "Tercerización integral y cuentas corrientes.", tag: "INTEGRAL", btn: "Hablar con un asesor" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="font-technical text-accent uppercase tracking-widest">Capacidades Dinámicas</span>
        <h2 className="font-display text-5xl uppercase text-white mt-2">Soluciones a Medida</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="border border-white/10 p-6 bg-surface-container flex flex-col justify-between hover:border-accent transition-colors">
            <div>
              <span className="block font-technical text-[10px] text-accent border border-accent w-fit px-2 mb-4">{s.tag}</span>
              <h3 className="font-display text-2xl text-white mb-2">{s.title}</h3>
              <p className="font-body text-sm text-off-white/70 mb-6">{s.desc}</p>
            </div>
            <button className="w-full py-3 bg-white/5 border border-white/10 text-off-white font-technical text-xs uppercase hover:bg-accent hover:text-dark-navy transition-all">
              {s.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}