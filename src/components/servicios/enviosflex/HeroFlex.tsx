export default function HeroFlex() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,34,255,0.05)_0,transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary px-3 py-1">
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">LOGÍSTICA CERTIFICADA</span>
            </div>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>

          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter uppercase text-white">
            POTENCIÁ TU <br/>
            <span className="text-primary">MERCADO LIBRE</span><br/>
            FLEX
          </h1>

          <p className="font-display text-xl text-background/80 max-w-xl border-l-4 border-primary pl-6 py-2">
            Somos el socio estratégico que tu cuenta de Mercado Libre necesita. Entregas en el día garantizadas para mantener tu reputación siempre en verde.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 font-mono text-lg uppercase font-bold hover:bg-white hover:text-primary transition-all">
              ACTIVAR ENVÍOS FLEX
            </button>
            <button className="border border-background/30 text-white px-8 py-4 font-mono text-lg uppercase hover:bg-white/10 transition-all">
              MÁS INFORMACIÓN
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="border-[12px] border-white/5 p-10 bg-primary relative">
             <div className="absolute top-4 right-4 flex gap-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-1 bg-primary" />)}
             </div>
             <h3 className="font-display text-3xl text-white mb-8 uppercase tracking-tight">STATUS_REPUTATION</h3>
             <div className="flex items-center gap-6 mb-8">
               <div className="w-20 h-20 bg-primary/20 border border-primary flex items-center justify-center">
                 <div className="w-12 h-12 bg-primary rounded-brand animate-pulse" />
               </div>
               <div>
                 <p className="font-mono text-primary text-2xl font-bold uppercase leading-none">VENDEDOR_PLATINUM</p>
                 <p className="font-display text-[10px] text-background/40 uppercase mt-1">SLA_COMPLIANCE: 100%</p>
               </div>
             </div>
             <div className="space-y-3">
               <div className="h-1 w-full bg-white/10" />
               <div className="h-1 w-full bg-white/10" />
               <div className="h-1 w-2/3 bg-white/10" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
