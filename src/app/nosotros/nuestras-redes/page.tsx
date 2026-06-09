import FeedPreview from "@/components/nosotros/nuestras-redes/FeedPreview";
import SocialGrid from "@/components/nosotros/nuestras-redes/SocialGrid";

export default function NuestrasRedesPage() {
  const benefits = [
    { title: "Ofertas Exclusivas", desc: "Accede a descuentos y promociones especiales solo para nuestra comunidad digital." },
    { title: "Actualizaciones", desc: "Sé el primero en conocer nuevos servicios, zonas de cobertura y mejoras técnicas." },
    { title: "Comunidad Activa", desc: "Únete a nuestra comunidad de clientes, emprendedores y repartidores marplatenses." },
    { title: "Soporte Ágil", desc: "Obtén respuestas rápidas a tus consultas a través de nuestros canales sociales oficiales." }
  ];

  return (
    <main className="min-h-screen bg-blue-brand text-white-brand pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="text-center mb-24">
          <div className="inline-block bg-blue-brand px-3 py-1 mb-6">
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">
              COMUNIDAD DOSRUEDAS
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            CONECTÁ CON NUESTRO <br/>
            <span className="text-blue-brand">MOVIMIENTO</span>
          </h1>
          <p className="font-display text-xl text-white-brand/60 max-w-3xl mx-auto">
            Seguinos en nuestras plataformas digitales para estar al tanto de novedades logísticas, consejos para emprendedores y el día a día de nuestra flota recorriendo Mar del Plata.
          </p>
        </section>

        {/* SOCIAL CONNECTOR GRID */}
        <SocialGrid />

        {/* FEED PREVIEW */}
        <FeedPreview />

        {/* BENEFITS */}
        <section className="py-24 border-y border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-6 leading-none">
                Beneficios de <br/>
                <span className="text-blue-brand">Formar Parte</span>
              </h2>
              <p className="font-display text-white-brand/50">
                Descubrí por qué cientos de marplatenses ya nos siguen en nuestras redes y cómo podés aprovechar al máximo tu conexión con nosotros.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
               {benefits.map((b, i) => (
                 <div key={i} className="border-l-4 border-blue-brand pl-6 py-2">
                    <h4 className="font-display text-xl text-white uppercase mb-2">{b.title}</h4>
                    <p className="font-display text-xs text-white-brand/60 leading-relaxed">{b.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-24">
           <div className="bg-white text-blue-brand p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-blue-brand/20 font-bold uppercase tracking-widest">
                CONN_SYS_V2.0
              </div>
              <div className="max-w-2xl">
                 <div className="inline-block bg-blue-brand px-2 py-1 mb-6">
                   <span className="font-mono text-xs text-white uppercase font-bold tracking-widest">
                     NEWSLETTER EXCLUSIVO
                   </span>
                 </div>
                 <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-none">
                    NEWSLETTER <br/> EXCLUSIVO
                 </h2>
                 <p className="font-display text-blue-brand/70 text-lg mb-10">
                   Recibí promociones relámpago, noticias del sector y actualizaciones directamente en tu bandeja de entrada.
                 </p>
                 
                 <form className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Escribí tu correo electrónico..." 
                      className="flex-1 bg-blue-brand/5 border-2 border-blue-brand p-4 font-display text-blue-brand focus:bg-white transition-all outline-none"
                    />
                    <button className="bg-blue-brand text-white px-10 py-4 font-mono text-lg uppercase font-bold hover:bg-blue-brand transition-all">
                      Unirme Ahora
                    </button>
                 </form>
                 <p className="font-display text-[10px] text-blue-brand/40 uppercase mt-4 tracking-widest">
                   Garantizamos la privacidad de tus datos. Desascribite cuando quieras.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}
