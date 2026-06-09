import FAQAccordion from "@/components/nosotros/preguntas-frecuentes/FAQAccordion";
import SupportCTA from "@/components/nosotros/preguntas-frecuentes/SupportCTA";

export default function PreguntasFrecuentesPage() {
  return (
    <main className="min-h-screen bg-dark-navy text-off-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="text-center mb-20">
          <div className="inline-block border border-primary px-3 py-1 mb-6">
             <span className="font-technical text-xs text-primary uppercase tracking-[0.3em]">Support_Core / FAQ</span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            CENTRO DE <br/>
            <span className="text-primary">AYUDA</span>
          </h1>
          <p className="font-body text-xl text-off-white/60 max-w-2xl mx-auto">
            Encontrá respuestas rápidas a las dudas más comunes sobre nuestros servicios, procesos logísticos y facturación.
          </p>
        </section>

        {/* FAQ ACCORDION */}
        <FAQAccordion />

        {/* CTA */}
        <SupportCTA />
      </div>
    </main>
  );
}
