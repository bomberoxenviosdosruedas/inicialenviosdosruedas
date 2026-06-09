export default function HeroExpress() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary px-3 py-1">
              <span className="font-technical text-xs text-white uppercase tracking-widest">DISPONIBLE EN MAR DEL PLATA</span>
            </div>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>

          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter uppercase text-white">
            ENVÍOS <br/>
            <span className="text-primary">EXPRESS</span><br/>
            INMEDIATOS
          </h1>

          <p className="font-body text-xl text-off-white/80 max-w-xl border-l-4 border-primary pl-6 py-2">
            La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-8 py-4 font-technical text-lg uppercase font-bold hover:bg-white hover:text-dark-navy transition-all">
              COTIZÁ TU ENVÍO EXPRESS
            </button>
            <button className="border border-off-white/30 text-white px-8 py-4 font-technical text-lg uppercase hover:bg-white/10 transition-all">
              HABLAR POR WHATSAPP
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="border-4 border-primary p-12 bg-dark-navy rotate-3 hover:rotate-0 transition-transform duration-500">
             <div className="font-display text-8xl text-primary/20 absolute -top-10 -right-6 select-none">XP</div>
             <h3 className="font-display text-4xl text-white mb-6">PRIORIDAD <br/>SISTEMA 01</h3>
             <div className="space-y-4">
               <div className="h-2 w-full bg-white/10"><div className="h-full w-full bg-primary animate-pulse" /></div>
               <div className="h-2 w-3/4 bg-white/10"><div className="h-full w-3/4 bg-primary animate-pulse" /></div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
