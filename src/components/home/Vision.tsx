export default function Vision() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <div className="inline-block bg-electric-blue/20 px-3 py-1 border border-electric-blue">
          <span className="font-technical text-xs text-electric-blue uppercase tracking-widest">NUESTRA VISIÓN</span>
        </div>
        <h2 className="font-display text-5xl uppercase text-white tracking-tighter">REDEFINIENDO LA LOGÍSTICA URBANA</h2>
        <p className="font-technical text-accent text-xl uppercase italic">MÁS QUE ENTREGAS, CONECTAMOS OPORTUNIDADES</p>
        <p className="font-body text-off-white/70 leading-relaxed">
          En DosRuedas, no solo movemos paquetes. Impulsamos el crecimiento de comercios y empresas marplatenses a través de una infraestructura logística ágil, tecnológica y profundamente humana.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-8 border border-electric-blue/30 bg-dark-navy/50">
          <h4 className="font-display text-4xl text-white">99.8%</h4>
          <p className="font-technical text-xs text-off-white/60 uppercase tracking-widest">ENTREGAS EXITOSAS</p>
        </div>
        <div className="p-8 border border-accent/30 bg-dark-navy/50">
          <h4 className="font-display text-4xl text-accent">EN LÍNEA</h4>
          <p className="font-technical text-xs text-off-white/60 uppercase tracking-widest">ESTADO OPERATIVO</p>
        </div>
      </div>
    </section>
  );
}