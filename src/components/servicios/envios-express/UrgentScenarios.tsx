export default function UrgentScenarios() {
  const scenarios = [
    { title: "Documentos", desc: "Contratos, documentos legales, certificados y papelería crítica.", icon: "DOC_01" },
    { title: "Salud", desc: "Medicamentos, análisis médicos y suministros de urgencia.", icon: "MED_02" },
    { title: "Negocios", desc: "Entregas comerciales que no pueden retrasarse bajo ningún concepto.", icon: "BIZ_03" },
    { title: "Regalos", desc: "Sorpresas que deben llegar en un rango horario acotado y preciso.", icon: "GIFT_04" }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4">
          ¿CUÁNDO NECESITAS <span className="text-blue-brand">EXPRESS</span>?
        </h2>
        <p className="font-mono text-gold-brand tracking-[0.2em] uppercase text-sm">
          Situaciones donde cada minuto cuenta y la rapidez es fundamental.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {scenarios.map((s) => (
          <div key={s.icon} className="group border border-white/10 p-8 hover:bg-blue-brand transition-all duration-300">
            <div className="font-display text-5xl text-white/10 mb-6 group-hover:text-white/20 transition-colors">
              {s.icon}
            </div>
            <h3 className="font-display text-2xl text-white mb-4 uppercase group-hover:text-blue-brand">
              {s.title}
            </h3>
            <p className="font-display text-xs text-white-brand/60 leading-relaxed group-hover:text-blue-brand/80">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
