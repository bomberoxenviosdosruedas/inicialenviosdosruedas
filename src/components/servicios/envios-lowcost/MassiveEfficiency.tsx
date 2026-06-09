export default function MassiveEfficiency() {
  const steps = [
    { title: "1. Despacho", desc: "Prepara tus pedidos y cárgalos en nuestro sistema automatizado de gestión masiva." },
    { title: "2. Recolección", desc: "Nuestro equipo retira todos tus paquetes en una sola visita programada a tu depósito." },
    { title: "3. Ruteo", desc: "Utilizamos algoritmos de IA para trazar la ruta más corta y eficiente por zonas." },
    { title: "4. Entrega", desc: "Entregamos todos los paquetes en el transcurso del día con confirmación digital." }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
           <div className="inline-block bg-accent px-3 py-1">
             <span className="font-technical text-xs text-dark-navy uppercase tracking-widest font-bold">LOGÍSTICA EFICIENTE</span>
           </div>
           <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.85]">
             MENOR COSTO, <br/>
             <span className="text-accent">MISMA CONFIANZA</span>
           </h2>
           <p className="font-body text-lg text-off-white/70">
             El servicio LowCost está diseñado para comercios y emprendedores que necesitan enviar grandes volúmenes de paquetería sin comprometer su margen de ganancia.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
             {[
               { t: "Ruteo Optimizado", d: "Agrupamos entregas por zonas para reducir costos operativos drásticamente." },
               { t: "Entrega en el Día", d: "Despacha antes de las 13:00 hs y entregamos antes de las 19:00 hs." },
               { t: "Seguimiento Digital", d: "Controlá el estado de todas tus entregas desde un solo lugar centralizado." }
             ].map((f) => (
               <div key={f.t} className="border-l-2 border-accent pl-4">
                 <h4 className="font-technical text-white uppercase text-sm mb-1">{f.t}</h4>
                 <p className="font-body text-xs text-off-white/50">{f.d}</p>
               </div>
             ))}
           </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-10 md:p-16">
          <h3 className="font-display text-3xl text-white uppercase mb-12 tracking-tight">¿CÓMO FUNCIONA?</h3>
          <div className="space-y-12 relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-accent/30 -z-0" />
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 relative z-10">
                <div className="w-8 h-8 bg-dark-navy border-2 border-accent flex items-center justify-center shrink-0">
                   <span className="font-technical text-xs text-accent font-bold">{i+1}</span>
                </div>
                <div>
                  <h4 className="font-display text-xl text-white uppercase mb-2">{step.title}</h4>
                  <p className="font-body text-xs text-off-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
