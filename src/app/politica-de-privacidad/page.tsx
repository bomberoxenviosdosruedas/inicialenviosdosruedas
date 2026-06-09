import PrivacyPolicyContent from "@/components/politica-de-privacidad/PrivacyPolicyContent";

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="min-h-screen bg-blue-brand text-white-brand pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="mb-20 text-center md:text-left">
          <div className="inline-block bg-blue-brand px-3 py-1 mb-6">
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">SEGURIDAD DE DATOS</span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Política de <br/>
            <span className="text-blue-brand">Privacidad</span>
          </h1>
          <p className="font-display text-xl text-white-brand/60 max-w-3xl border-l-4 border-blue-brand pl-8 py-2">
            En Envios DosRuedas, tu confianza es nuestra prioridad. Aquí te explicamos cómo protegemos y utilizamos tu información personal en cumplimiento con las normativas vigentes.
          </p>
        </section>

        {/* CONTENT */}
        <PrivacyPolicyContent />

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
