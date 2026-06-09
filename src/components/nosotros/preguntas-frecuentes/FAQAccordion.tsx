export default function FAQAccordion() {
  const faqs = [
    {
      category: "General",
      questions: [
        { q: "¿Qué es DosRuedas?", a: "DosRuedas es una plataforma logística de alta frecuencia basada en Mar del Plata, especializada en la última milla y servicios para e-commerce." },
        { q: "¿Qué los diferencia de otros servicios?", a: "Nuestra combinación de tecnología de ruteo avanzada, transparencia total de precios y una flota dedicada que conoce cada rincón de la ciudad." }
      ]
    },
    {
      category: "Servicios",
      questions: [
        { q: "¿Cuáles son las zonas de cobertura?", a: "Operamos en todo el partido de General Pueyrredón, incluyendo Mar del Plata, Batán y Sierra de los Padres." },
        { q: "¿Tienen servicio de retiro a domicilio?", a: "Sí, todos nuestros planes para emprendedores y servicios Flex incluyen retiro programado por tu local o depósito." }
      ]
    },
    {
      category: "Pagos",
      questions: [
        { q: "¿Qué medios de pago aceptan?", a: "Aceptamos transferencias bancarias, Mercado Pago y efectivo. Para cuentas corporativas ofrecemos facturación mensual (Cuenta Corriente)." },
        { q: "¿Cómo se calculan las tarifas?", a: "Nuestras tarifas se basan principalmente en la distancia (KM) y la urgencia del servicio (Express vs LowCost)." }
      ]
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="space-y-16">
        {faqs.map((cat, i) => (
          <div key={i}>
            <h3 className="font-display text-2xl text-primary uppercase mb-8 border-b border-primary/20 pb-2 inline-block">
              {cat.category}
            </h3>
            <div className="space-y-4">
              {cat.questions.map((item, j) => (
                <details key={j} className="group border border-white/10 bg-white/5 overflow-hidden">
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-white/10 transition-colors list-none">
                    <span className="font-technical text-lg text-white uppercase tracking-wider">{item.q}</span>
                    <span className="text-primary font-bold text-2xl transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="p-6 pt-0 border-t border-white/5">
                    <p className="font-body text-sm text-off-white/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
