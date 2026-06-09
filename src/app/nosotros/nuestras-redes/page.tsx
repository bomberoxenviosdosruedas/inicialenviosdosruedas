import FeedPreview from "@/components/nosotros/nuestras-redes/FeedPreview";
import SocialGrid from "@/components/nosotros/nuestras-redes/SocialGrid";
import { prisma } from "@/lib/db";

export default async function NuestrasRedesPage() {
  const posts = await prisma.socialPost.findMany({
    orderBy: { timestamp: "desc" },
    take: 6,
  });

  const benefits = [
    { title: "Ofertas Exclusivas", desc: "Accede a descuentos y promociones especiales solo para nuestra comunidad digital." },
    { title: "Actualizaciones", desc: "Sé el primero en conocer nuevos servicios, zonas de cobertura y mejoras técnicas." },
    { title: "Comunidad Activa", desc: "Únete a nuestra comunidad de clientes, emprendedores y repartidores marplatenses." },
    { title: "Soporte Ágil", desc: "Obtén respuestas rápidas a tus consultas a través de nuestros canales sociales oficiales." }
  ];

  return (
    <main className="min-h-screen bg-dark-navy text-off-white pt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="text-center mb-24">
          <div className="inline-block bg-primary px-3 py-1 mb-6">
            <span className="font-technical text-xs text-white uppercase tracking-widest font-bold">
              COMUNIDAD DOSRUEDAS
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            CONECTÁ CON NUESTRO <br/>
            <span className="text-primary">MOVIMIENTO</span>
          </h1>
          <p className="font-body text-xl text-off-white/60 max-w-3xl mx-auto">
            Seguinos en nuestras plataformas digitales para estar al tanto de novedades logísticas, consejos para emprendedores y el día a día de nuestra flota recorriendo Mar del Plata.
          </p>
        </section>

        {/* SOCIAL CONNECTOR GRID */}
        <SocialGrid />

        {/* FEED PREVIEW */}
        <FeedPreview posts={posts} />

        {/* BENEFITS */}
        <section className="py-24 border-y border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-6 leading-none">
                Beneficios de <br/>
                <span className="text-primary">Formar Parte</span>
              </h2>
              <p className="font-body text-off-white/50">
                Descubrí por qué cientos de marplatenses ya nos siguen en nuestras redes y cómo podés aprovechar al máximo tu conexión con nosotros.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
               {benefits.map((b, i) => (
                 <div key={i} className="border-l-4 border-primary pl-6 py-2">
                    <h4 className="font-display text-xl text-white uppercase mb-2">{b.title}</h4>
                    <p className="font-body text-xs text-off-white/60 leading-relaxed">{b.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="py-24">
           <div className="bg-white text-dark-navy p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 font-technical text-[10px] text-dark-navy/20 font-bold uppercase tracking-widest">
                CONN_SYS_V2.0
              </div>
              <div className="max-w-2xl">
                 <div className="inline-block bg-primary px-2 py-1 mb-6">
                   <span className="font-technical text-xs text-white uppercase font-bold tracking-widest">
                     NEWSLETTER EXCLUSIVO
                   </span>
                 </div>
                 <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-none">
                    NEWSLETTER <br/> EXCLUSIVO
                 </h2>
                 <p className="font-body text-dark-navy/70 text-lg mb-10">
                   Recibí promociones relámpago, noticias del sector y actualizaciones directamente en tu bandeja de entrada.
                 </p>
                 
                 <form className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Escribí tu correo electrónico..." 
                      className="flex-1 bg-dark-navy/5 border-2 border-dark-navy p-4 font-body text-dark-navy focus:bg-white transition-all outline-none"
                    />
                    <button className="bg-dark-navy text-white px-10 py-4 font-technical text-lg uppercase font-bold hover:bg-primary transition-all">
                      Unirme Ahora
                    </button>
                 </form>
                 <p className="font-body text-[10px] text-dark-navy/40 uppercase mt-4 tracking-widest">
                   Garantizamos la privacidad de tus datos. Desascribite cuando quieras.
                 </p>
              </div>
           </div>
        </section>
      </div>
    </main>
  );
}
