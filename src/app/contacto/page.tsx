import ContactForm from "@/components/contacto/ContactForm";
import LocationInfo from "@/components/contacto/LocationInfo";
import SupportChannels from "@/components/contacto/SupportChannels";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-blue-brand text-white-brand pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="text-center mb-24">
          <div className="inline-block bg-blue-brand/10 border border-blue-brand px-3 py-1 mb-6">
            <span className="font-mono text-xs text-blue-brand uppercase tracking-widest font-bold">
              CENTRO DE ATENCIÓN
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            ESTAMOS <br/>
            <span className="text-blue-brand">CONECTADOS</span>
          </h1>
          <p className="font-display text-xl text-white-brand/60 max-w-3xl mx-auto">
            Estamos listos para gestionar tu próxima entrega. Conectá con nosotros a través de nuestros canales oficiales para soporte, ventas o consultas generales.
          </p>
        </section>

        {/* CHANNELS GRID */}
        <SupportChannels />

        {/* FORM + INFO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-7">
              <ContactForm />
           </div>
           <div className="lg:col-span-5">
              <LocationInfo />
           </div>
        </div>

        {/* EXTRA CTA */}
        <section className="mt-24 border-t border-white/10 pt-24 text-center">
           <h2 className="font-display text-4xl text-white uppercase mb-8 tracking-tighter">¿SOS EMPRENDEDOR?</h2>
           <p className="font-display text-white-brand/50 mb-10 max-w-xl mx-auto">
             Si buscás una solución logística recurrente para tu negocio, consultá nuestro plan especial para e-commerce.
           </p>
           <button className="bg-white text-blue-brand px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-blue-brand hover:text-white transition-all">
             VER PLAN EMPRENDEDORES
           </button>
        </section>
      </div>
    </main>
  );
}
