export default function CalculatorTips() {
  const tips = [
    {
      title: "Direcciones Precisas",
      description: "Asegúrate de ingresar direcciones completas, incluyendo numeración y calles transversales si es posible.",
      num: "01"
    },
    {
      title: "Verifica en el Mapa",
      description: "Una vez calculada la ruta, revisa que los puntos de origen y destino en el mapa coincidan con tu ubicación.",
      num: "02"
    },
    {
      title: "Datos de Contacto Claros",
      description: "Proporciona números de teléfono válidos para que nuestro equipo pueda coordinar la entrega eficientemente.",
      num: "03"
    }
  ];

  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="font-display text-4xl text-white uppercase leading-none mb-6">
            Consejos para una <br/>
            <span className="text-primary">Cotización</span> <br/>
            Exitosa
          </h2>
          <div className="h-1 w-20 bg-primary mb-6"></div>
          <p className="font-display text-sm text-background/60">
            Sigue estas recomendaciones técnicas para obtener la cotización más precisa en nuestro sistema de despacho automatizado.
          </p>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div key={tip.num} className="border border-white/20 p-6 bg-white/5 relative">
              <span className="font-mono text-3xl text-white/10 absolute bottom-4 right-4 leading-none">
                {tip.num}
              </span>
              <h3 className="font-display text-lg text-white mb-3 uppercase">{tip.title}</h3>
              <p className="font-display text-xs text-background/70 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
