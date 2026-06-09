export default function OperationalFlow() {
  const steps = [
    { title: "1. Vendes", desc: "Recibes una venta con Mercado Envios Flex en tu panel de vendedor de Mercado Libre." },
    { title: "2. Retiramos", desc: "Coordinamos el retiro masivo por tu local o domicilio en Mar del Plata en horario acordado." },
    { title: "3. Entregamos", desc: "Nuestra flota especializada distribuye los paquetes garantizando la entrega en el mismo día." },
    { title: "4. Calificas", desc: "Tu cliente recibe el paquete en el día, tu reputación sube y aseguras futuras ventas." }
  ];

  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-16 tracking-tighter text-center">
          LOGÍSTICA <span className="text-primary">SIN FRICCIONES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="border border-white/10 p-8 bg-dark-navy relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/10 group-hover:bg-primary transition-colors" />
              <div className="font-display text-6xl text-white/5 mb-6 group-hover:text-primary/10 transition-colors">
                0{i+1}
              </div>
              <h3 className="font-display text-2xl text-white mb-4 uppercase">{step.title}</h3>
              <p className="font-body text-xs text-off-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
