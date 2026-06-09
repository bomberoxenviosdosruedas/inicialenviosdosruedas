export default function PlanTiers() {
  const plans = [
    {
      title: "3PL Fulfillment",
      badge: "Plan E-Commerce",
      price: "$1.200 / bulto",
      feature: "Tarifa Plana Same Day",
      desc: "Incluye almacenamiento, picking y embalaje básico en nuestro centro logístico."
    },
    {
      title: "Plan 24HS",
      badge: "Plan Escala",
      price: "$800 / envío",
      feature: "Next Day (Retiro hoy)",
      desc: "Ideal para grandes volúmenes que requieren una distribución masiva y económica."
    },
    {
      title: "Cta. Cte. Flexible",
      badge: "Plan Corporativo",
      price: "Híbrido",
      feature: "LowCost + Beneficios Express",
      desc: "Facturación mensual centralizada con acceso a todos nuestros servicios prioritarios."
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 border-l-8 border-primary pl-8">
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
          PLANES 3PL Y <br/>
          <span className="text-primary">SOLUCIONES E-COMMERCE</span>
        </h2>
        <p className="font-body text-off-white/60 mt-4 max-w-xl">
          Elegí el plan que mejor se adapte al volumen de tu negocio. Desde almacenamiento estratégico hasta ruteo masivo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="border-2 border-white/10 bg-white/5 p-10 flex flex-col hover:border-primary transition-all group">
             <div className="mb-8">
                <span className="bg-primary/20 text-primary border border-primary/30 font-technical text-[10px] px-2 py-1 uppercase font-bold tracking-widest mb-4 inline-block">
                  {plan.badge}
                </span>
                <h3 className="font-display text-3xl text-white uppercase mb-2">{plan.title}</h3>
                <p className="font-display text-2xl text-primary">{plan.price}</p>
             </div>
             
             <div className="flex-1 space-y-4 mb-10">
                <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-primary" />
                   <p className="font-technical text-xs text-white uppercase font-bold">{plan.feature}</p>
                </div>
                <p className="font-body text-xs text-off-white/50 leading-relaxed">
                   {plan.desc}
                </p>
             </div>

             <button className="w-full border border-white/20 text-white py-4 font-technical text-sm uppercase hover:bg-primary hover:border-primary transition-all">
                SOLICITAR PLAN
             </button>
          </div>
        ))}
      </div>
    </section>
  );
}
