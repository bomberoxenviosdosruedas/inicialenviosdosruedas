export default function EntrepreneurSolutions() {
  const solutions = [
    { title: "Soluciones Corporativas", desc: "Optimización logística para empresas.", tag: "Corporativo" },
    { title: "Envíos Flex MercadoLibre", desc: "Socio estratégico para potenciar ventas.", tag: "MercadoLibre" },
    { title: "Logística E-Commerce", desc: "Gestión integral de última milla.", tag: "PyMEs" },
  ];

  return (
    <section className="bg-surface-container-low py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="font-technical text-electric-blue uppercase tracking-widest">Soluciones Corporativas y PyME</span>
            <h2 className="font-display text-5xl uppercase text-white mt-2">Potencia tu Logística con DosRuedas</h2>
            <p className="font-body text-off-white/70 mt-6">Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos para clientes corporativos.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-white/10 bg-dark-navy">
              <h4 className="font-display text-3xl text-white">500+</h4>
              <p className="font-technical text-xs text-off-white/50">Empresas</p>
            </div>
            <div className="p-6 border border-white/10 bg-dark-navy">
              <h4 className="font-display text-3xl text-accent">24/7</h4>
              <p className="font-technical text-xs text-off-white/50">Operativa</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div key={i} className="border border-white/10 p-8 bg-dark-navy">
              <span className="font-technical text-[10px] text-electric-blue border border-electric-blue w-fit px-2 mb-4 block">{s.tag}</span>
              <h4 className="font-display text-xl text-white mb-2">{s.title}</h4>
              <p className="font-body text-sm text-off-white/70 mb-6">{s.desc}</p>
              <button className="text-accent font-technical text-xs uppercase hover:underline">Configurar Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}