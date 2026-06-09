import Link from "next/link";

export default function DynamicQuotation() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-blue-brand border-[10px] border-blue-brand p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <div className="bg-blue-brand text-white font-mono text-xs px-4 py-2 uppercase tracking-[0.2em]">
            SYSTEM_LINK_005
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-brand/10 border border-blue-brand px-3 py-1 mb-6">
              <span className="font-mono text-xs text-blue-brand uppercase font-bold tracking-widest">
                COTIZACIÓN DINÁMICA
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl text-white uppercase tracking-tighter leading-[0.8] mb-8">
              ZONA 5: <br/>
              <span className="text-blue-brand">$2.000 / KM</span>
            </h2>
            <p className="font-display text-white-brand/70 text-lg leading-relaxed mb-8 border-l-2 border-white/20 pl-6">
              Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utilizá nuestro cotizador inteligente de alta precisión.
            </p>
            <Link href="/cotizar/express" className="inline-block bg-white text-blue-brand px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-blue-brand hover:text-white transition-all">
              IR AL COTIZADOR
            </Link>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="w-full aspect-square border border-white/10 bg-white/5 flex items-center justify-center p-12">
               <div className="w-full h-full border border-blue-brand/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,34,255,0.1)_0,transparent_70%)]" />
                  <span className="font-mono text-[10px] text-blue-brand absolute top-4 left-4">MAP_RT_442</span>
                  <div className="w-1/2 h-1/2 border-2 border-blue-brand animate-pulse" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
