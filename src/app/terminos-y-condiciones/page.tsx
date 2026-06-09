import TermsContent from "@/components/terminos-y-condiciones/TermsContent";

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-screen bg-blue-brand text-white-brand pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="mb-20 text-center md:text-left">
          <div className="inline-block bg-gold-brand px-3 py-1 mb-6">
            <span className="font-mono text-xs text-blue-brand uppercase tracking-widest font-bold">MARCO LEGAL</span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Términos y <br/>
            <span className="text-gold-brand">Condiciones</span>
          </h1>
          <p className="font-display text-xl text-white-brand/60 max-w-3xl border-l-4 border-gold-brand pl-8 py-2">
            Las reglas del juego. Al usar nuestros servicios, aceptás estos términos. Te recomendamos leerlos detenidamente para entender nuestra operativa y responsabilidades.
          </p>
        </section>

        {/* CONTENT */}
        <TermsContent />

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center">
           <p className="font-display text-[10px] text-white-brand/30 uppercase tracking-[0.2em]">
             Envios DosRuedas © 2026 - Mar del Plata, Argentina.
           </p>
        </div>
      </div>
    </main>
  );
}
