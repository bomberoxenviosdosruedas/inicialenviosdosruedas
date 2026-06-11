export default function Requirements() {
  const requirements = [
    { title: "Cuenta MercadoLibre", desc: "Tener habilitada la opción de Mercado Envíos Flex en tu panel de ventas." },
    { title: "Ubicación", desc: "Estar ubicado dentro de nuestras zonas de cobertura para retiro en Mar del Plata." },
    { title: "Horario de Corte", desc: "Establecer un horario de corte (sugerido 15hs) para procesar entregas el mismo día." },
    { title: "Suscripción", desc: "Alta en nuestra plataforma para el control, tracking y liquidación de servicios." }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-primary p-1">
        <div className="bg-primary p-12 md:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8 leading-[0.85]">
                ¿QUÉ <br/>
                <span className="text-primary">NECESITAS</span>?
              </h2>
              <div className="h-1 w-24 bg-primary mb-8" />
              <p className="font-display text-background/70 leading-relaxed">
                Integrarse a nuestra red de distribución Flex es sencillo. Solo asegúrate de cumplir con estos requisitos técnicos fundamentales.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
               {requirements.map((req, i) => (
                 <div key={i} className="border border-white/10 p-8 hover:bg-primary/5 transition-colors group">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-4 h-4 border border-primary group-hover:bg-primary transition-colors" />
                       <h3 className="font-mono text-xl text-white uppercase">{req.title}</h3>
                    </div>
                    <p className="font-display text-xs text-background/50 leading-relaxed">{req.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
