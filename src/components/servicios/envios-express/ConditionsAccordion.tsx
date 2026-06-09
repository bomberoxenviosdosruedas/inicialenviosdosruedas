export default function ConditionsAccordion() {
  const conditions = [
    { 
      title: "Tiempos y Tolerancia", 
      content: "Contamos con una tolerancia de 10 minutos en puerta para la recepción o entrega de paquetes. Pasado este tiempo, se aplicarán recargos por espera." 
    },
    { 
      title: "Recargos por Clima", 
      content: "En días de lluvia o condiciones climáticas adversas, se aplica un recargo del 50% sobre la tarifa base para garantizar la seguridad de nuestros repartidores." 
    },
    { 
      title: "Bultos y Pesos", 
      content: "El servicio estándar incluye un bulto de hasta 5kg/40cm. Para bultos más grandes o pesados, consultar disponibilidad y tarifas adicionales." 
    },
    { 
      title: "Anticipación Requerida", 
      content: "Para coordinar un envío express con éxito, solicitamos una anticipación mínima de 2 horas previas al inicio del rango horario solicitado." 
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="font-display text-4xl text-white uppercase mb-12 text-center tracking-tighter">
        Condiciones del <span className="text-blue-brand">Servicio Express</span>
      </h2>
      
      <div className="space-y-4">
        {conditions.map((c, i) => (
          <details key={i} className="group border border-white/10 bg-white/5 overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/10 transition-colors list-none">
              <span className="font-mono text-lg text-white uppercase tracking-wider">{c.title}</span>
              <span className="text-blue-brand font-bold text-2xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="p-6 pt-0 border-t border-white/5">
              <p className="font-display text-sm text-white-brand/70 leading-relaxed">
                {c.content}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
