export default function CalculatorTips() {
  const tips = [
    {
      title: "Direcciones Precisas",
      description: "Ingresa direcciones exactas para que nuestro sistema de ruteo económico pueda agrupar tu envío eficientemente.",
      num: "01"
    },
    {
      title: "Verifica en el Mapa",
      description: "Asegúrate de que la ubicación sea correcta para evitar recargos por redireccionamiento en el servicio LowCost.",
      num: "02"
    },
    {
      title: "Datos de Contacto Claros",
      description: "Es vital tener un teléfono de contacto activo para coordinar la entrega dentro de la ventana horaria.",
      num: "03"
    }
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="font-display text-4xl text-white uppercase leading-none mb-6">
            Consejos para <br/>
            <span className="text-gold-brand">Ahorrar</span> <br/>
            al Cotizar
          </h2>
          <div className="h-1 w-20 bg-gold-brand mb-6"></div>
          <p className="font-display text-sm text-white-brand/60">
            Sigue estas recomendaciones para garantizar que tu envío califique para la tarifa más económica de nuestro sistema.
          </p>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.num} className="border border-white/20 p-6 bg-white/5 relative">
              <span className="font-mono text-3xl text-white/10 absolute bottom-4 right-4 leading-none">
                {tip.num}
              </span>
              <h3 className="font-display text-lg text-white mb-3 uppercase">{tip.title}</h3>
              <p className="font-display text-xs text-white-brand/70 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
