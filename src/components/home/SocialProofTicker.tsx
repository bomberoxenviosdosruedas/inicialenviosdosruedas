export default function SocialProofTicker() {
  return (
    <section className="py-20 border-t border-electric-blue/20 bg-dark-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="font-technical text-electric-blue uppercase tracking-widest">Conecta con nosotros</span>
          <h2 className="font-display text-4xl uppercase text-white mt-2">Sigue nuestro movimiento</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/10 p-6 flex flex-col items-center text-center hover:bg-electric-blue/10 transition-colors">
            <span className="font-technical text-accent mb-4">INSTAGRAM</span>
            <p className="font-body text-sm text-off-white/70 mb-6">Novedades diarias y contenido exclusivo de la flota.</p>
            <button className="text-off-white font-technical text-xs border border-white/20 px-4 py-2 uppercase hover:bg-white hover:text-dark-navy transition-all">Ver Post</button>
          </div>

          <div className="border border-white/10 p-6 flex flex-col items-center text-center hover:bg-electric-blue/10 transition-colors">
            <span className="font-technical text-accent mb-4">FACEBOOK</span>
            <p className="font-body text-sm text-off-white/70 mb-6">Comunidad activa y eventos logísticos en MDP.</p>
            <button className="text-off-white font-technical text-xs border border-white/20 px-4 py-2 uppercase hover:bg-white hover:text-dark-navy transition-all">Ver Post</button>
          </div>

          <div className="border border-white/10 p-6 flex flex-col items-center text-center hover:bg-electric-blue/10 transition-colors">
            <span className="font-technical text-accent mb-4">WHATSAPP</span>
            <p className="font-body text-sm text-off-white/70 mb-6">Atención inmediata para consultas y soporte.</p>
            <button className="text-off-white font-technical text-xs border border-white/20 px-4 py-2 uppercase hover:bg-white hover:text-dark-navy transition-all">Ver Post</button>
          </div>
        </div>
      </div>
    </section>
  );
}