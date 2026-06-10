import Link from "next/link";
export default function HeroPlan() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10 bg-[linear-gradient(90deg,var(--color-electric-blue)_1px,transparent_1px),linear-gradient(0deg,var(--color-electric-blue)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-brand px-3 py-1 text-white font-mono text-xs uppercase tracking-widest font-bold">SOLUCIONES ESCALABLES</div>
            <div className="h-[1px] w-12 bg-blue-brand"></div>
          </div>

          <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter uppercase text-white">
            LOGÍSTICA 3PL <br/>
            <span className="text-blue-brand">PARA TU MARCA</span>
          </h1>

          <p className="font-display text-xl text-white-brand/80 max-w-2xl border-l-4 border-blue-brand pl-6 py-2">
            Tercerización integral de almacenamiento, preparación y envío en Mar del Plata. Escalá tu e-commerce sin preocuparte por la operativa diaria.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contacto" className="bg-blue-brand text-white px-8 py-4 font-mono text-lg uppercase font-bold hover:bg-white hover:text-blue-brand transition-all">
              CONFIGURAR MI PLAN
            </Link>
            <Link href="/contacto" className="border border-white-brand/30 text-white px-8 py-4 font-mono text-lg uppercase hover:bg-white/10 transition-all">
              HABLAR CON UN EXPERTO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
