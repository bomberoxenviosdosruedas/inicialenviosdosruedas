export default function MapFeatures() {
  const features = [
    {
      title: "Visualización en Mapa",
      description: "Observa la ruta exacta que tomará tu envío programado mediante nuestro sistema de ruteo eficiente.",
      id: "ECON_01"
    },
    {
      title: "Cálculo Preciso",
      description: "Obtén estimaciones de distancia y ventanas de tiempo basadas en rutas de consolidación masiva.",
      id: "ECON_02"
    },
    {
      title: "Confirmación Fácil",
      description: "Una vez cotizado, asegura tu lugar en la siguiente ronda de entregas con un solo click.",
      id: "ECON_03"
    }
  ];

  return (
    <section className="py-20 border-y border-white/10">
      <div className="mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-4">
          Beneficios del <span className="text-accent">Cotizador LowCost</span>
        </h2>
        <p className="font-body text-off-white/60 max-w-2xl border-l-2 border-accent pl-6">
          Nuestra herramienta de cotización optimizada para envíos económicos te permite ahorrar sin perder el control de tus paquetes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat) => (
          <div key={feat.id} className="group border border-white/10 p-8 hover:border-accent transition-colors bg-white/5 relative">
            <span className="absolute top-4 right-4 font-technical text-[10px] text-accent/40 group-hover:text-accent transition-colors">
              {feat.id}
            </span>
            <h3 className="font-display text-xl text-white mb-4 uppercase tracking-tighter">
              {feat.title}
            </h3>
            <p className="font-body text-sm text-off-white/70 leading-relaxed">
              {feat.description}
            </p>
            <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
