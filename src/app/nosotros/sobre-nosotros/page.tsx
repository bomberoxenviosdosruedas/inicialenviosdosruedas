import Link from "next/link";
import type { Metadata } from "next";
import History from "@/components/nosotros/sobre-nosotros/History";
import Values from "@/components/nosotros/sobre-nosotros/Values";
import Team from "@/components/nosotros/sobre-nosotros/Team";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conocé la historia, misión y valores de Envíos DosRuedas. Liderando la logística urbana en Mar del Plata desde el primer día.",
};

export default function SobreNosotrosPage() {
  const metrics = [
    { label: "Años de Experiencia", val: "7+" },
    { label: "Entregas Realizadas", val: "100k+" },
    { label: "Clientes Activos", val: "500+" }
  ];

  return (
    <main className="min-h-screen bg-primary text-background">
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--color-electric-blue)_0,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-block bg-primary px-3 py-1">
              <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">CONOCÉ DOSRUEDAS</span>
            </div>
            <h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter uppercase text-white">
              LIDERANDO LA <br/>
              <span className="text-primary">LOGÍSTICA URBANA</span>
            </h1>
            <p className="font-display text-xl text-background/70 max-w-2xl border-l-4 border-primary pl-6 py-2">
              Desde Mar del Plata, construimos el futuro de la mensajería con tecnología, transparencia y un compromiso inquebrantable con cada entrega.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/#servicios" className="bg-primary text-white px-8 py-4 font-mono text-lg uppercase font-bold hover:bg-white hover:text-primary transition-all">
                VER NUESTROS SERVICIOS
              </Link>
              <Link href="/contacto" className="border border-white/30 text-white px-8 py-4 font-mono text-lg uppercase hover:bg-white/10 transition-all">
                CONTACTAR
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
             {metrics.map((m, i) => (
               <div key={i} className="border border-white/10 p-6 bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <p className="font-display text-5xl text-white mb-1 group-hover:translate-x-2 transition-transform">{m.val}</p>
                  <p className="font-mono text-[10px] text-background/40 uppercase tracking-widest">{m.label}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE / IDENTITY */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4" />
               <div className="bg-white/5 border border-white/10 aspect-video flex items-center justify-center p-12 relative">
                  <div className="font-display text-[200px] text-white/5 absolute select-none">MGP</div>
                  <h3 className="font-display text-4xl text-white uppercase text-center relative z-10">ADN <br/> MARPLATENSE</h3>
               </div>
            </div>
            <div className="space-y-8">
               <h2 className="font-display text-5xl text-white uppercase tracking-tighter leading-tight">Identidad Local, <br/> <span className="text-primary">Alcance Profesional</span></h2>
               <p className="font-display text-background/70 text-lg leading-relaxed">
                 DosRuedas nació de la necesidad de un servicio de mensajería que entendiera el ritmo de Mar del Plata. Lo que comenzó como un pequeño despacho local hoy es una plataforma tecnológica que procesa miles de envíos mensuales, manteniendo siempre la cercanía y confianza de nuestros inicios.
               </p>
               <div className="h-1 w-20 bg-primary" />
            </div>
         </div>
      </section>

      {/* VALUES */}
      <Values />

      {/* HISTORY */}
      <History />

      {/* MISSION & VISION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { t: "Nuestra Misión", d: "Conectar personas y negocios en Mar del Plata mediante soluciones logísticas ágiles, transparentes y de alta frecuencia." },
            { t: "Nuestra Visión", d: "Ser la empresa líder en servicios de mensajería urbana del país, escalando nuestro modelo tecnológico y operativo." },
            { t: "Innovación", d: "Incorporamos constantemente nuevas tecnologías para optimizar la última milla y reducir la huella de carbono logística." }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 group hover:bg-primary transition-all duration-500">
               <h3 className="font-display text-2xl text-white uppercase mb-6 group-hover:text-primary transition-colors">{item.t}</h3>
               <p className="font-display text-sm text-background/60 leading-relaxed group-hover:text-primary transition-colors">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <Team />
    </main>
  );
}
