export default function MapFeatures() {
  const features = [
    {
      title: "Visualización en Mapa",
      description: "Observa la ruta exacta que tomará tu envío en tiempo real mediante nuestro motor de geolocalización.",
      id: "FEAT_01"
    },
    {
      title: "Cálculo Preciso",
      description: "Obtén estimaciones de distancia y tiempo basadas en algoritmos de tráfico dinámico de alta precisión.",
      id: "FEAT_02"
    },
    {
      title: "Confirmación Fácil",
      description: "Una vez cotizado, puedes proceder a confirmar tu envío con un solo click sin procesos complejos.",
      id: "FEAT_03"
    }
  ];

  return (
    <section className="py-20 border-y border-white/10">
      <div className="mb-12">
        <h2 className="font-display text-4xl md:text-5xl text-white uppercase mb-4">
          Beneficios de Nuestro <span className="text-primary">Cotizador</span>
        </h2>
        <p className="font-display text-background/60 max-w-2xl border-l-2 border-primary pl-6">
          Nuestra herramienta de cotización con mapa integrado te ofrece transparencia y control total sobre tus envíos desde el primer segundo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat) => (
          <div key={feat.id} className="group border border-white/10 p-8 hover:border-primary transition-colors bg-white/5 relative">
            <span className="absolute top-4 right-4 font-mono text-[10px] text-primary/40 group-hover:text-primary transition-colors">
              {feat.id}
            </span>
            <h3 className="font-display text-xl text-white mb-4 uppercase tracking-tighter">
              {feat.title}
            </h3>
            <p className="font-display text-sm text-background/70 leading-relaxed">
              {feat.description}
            </p>
            <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
