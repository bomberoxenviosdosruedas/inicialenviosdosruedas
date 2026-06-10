import Link from "next/link";
import type { Metadata } from "next";
import HeroPlan from "@/components/servicios/plan-emprendedores/HeroPlan";
import KeyBenefits from "@/components/servicios/plan-emprendedores/KeyBenefits";
import PlanTiers from "@/components/servicios/plan-emprendedores/PlanTiers";
import ContactForm from "@/components/servicios/plan-emprendedores/ContactForm";

export const metadata: Metadata = {
  title: "Plan Emprendedores y Logística 3PL",
  description: "Solución de almacenamiento, picking, empaque y distribución 3PL para e-commerce en Mar del Plata. Escalá tus ventas delegando tu logística de última milla.",
};

export default function PlanEmprendedoresPage() {
  return (
    <main className="min-h-screen bg-primary text-background">
      {/* HERO */}
      <HeroPlan />

      {/* CORE SERVICES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block bg-primary px-3 py-1 mb-6">
            <span className="font-mono text-xs text-white uppercase tracking-widest font-bold">ALMACENAMIENTO Y PICKING</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
            TU DEPÓSITO, <br/>
            <span className="text-primary">NUESTRA GESTIÓN</span>
          </h2>
          <p className="font-display text-background/70 text-lg leading-relaxed mb-10">
            El Plan Emprendedores está diseñado para marcas que buscan profesionalizar su entrega. Ofrecemos espacio de almacenamiento estratégico y gestión integral de pedidos en tiempo real con tecnología de punta.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Fulfillment", desc: "Recibimos tu stock, armamos los paquetes y los entregamos con la mayor celeridad." },
              { title: "Cuenta Corriente", desc: "Facturación mensual centralizada para simplificar tu contabilidad y gestión de pagos." },
              { title: "Integración", desc: "Conectamos con tu Tiendanube, Shopify o sistema de ventas para automatizar pedidos." }
            ].map((s, i) => (
              <div key={i} className="flex gap-4">
                 <div className="w-1.5 h-1.5 bg-primary mt-2 shrink-0" />
                 <div>
                    <h4 className="font-display text-xl text-white uppercase mb-1">{s.title}</h4>
                    <p className="font-display text-xs text-background/50">{s.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 -z-10 translate-x-10 translate-y-10" />
          <div className="border border-white/10 p-2 bg-primary">
             <div className="aspect-[4/5] bg-white/5 border border-white/10 flex flex-col justify-end p-12">
                <div className="font-display text-[150px] text-white/5 absolute top-0 right-0 leading-none select-none">3PL</div>
                <div className="space-y-4 relative z-10">
                  <div className="h-4 w-1/3 bg-primary" />
                  <div className="h-4 w-full bg-white/10" />
                  <div className="h-4 w-2/3 bg-white/5" />
                  <h3 className="font-display text-4xl text-white uppercase tracking-tight mt-8">OPERACIÓN <br/>LOGÍSTICA_V4</h3>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <KeyBenefits />

      {/* PRICING TIERS */}
      <PlanTiers />

      {/* CTA + FORM */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t-2 border-primary">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="inline-block bg-primary px-3 py-1 mb-6">
                <span className="font-mono text-xs text-white uppercase font-bold tracking-widest">SOCIO LOGÍSTICO</span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-8 leading-none">
                ¿LISTO PARA ESCALAR <br/>
                <span className="text-primary">TU E-COMMERCE?</span>
              </h2>
              <p className="font-display text-background/60 text-lg mb-8">
                Olvidate de los paquetes y concéntrate en tu producto. Nosotros nos encargamos de toda la cadena de distribución, desde el almacenamiento hasta la última milla.
              </p>
              <div className="space-y-4">
                 <Link href="/contacto" className="w-full sm:w-auto bg-primary text-white px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-primary transition-all">
                   SOLICITAR PLAN
                 </Link>
                 <Link href="/contacto" className="w-full sm:w-auto ml-0 sm:ml-4 border border-white/30 text-white px-10 py-5 font-mono text-xl uppercase hover:bg-white/10 transition-all">
                   HABLAR CON UN ASESOR
                 </Link>
              </div>
            </div>
            
            <div className="lg:col-span-7">
               <ContactForm />
            </div>
         </div>
      </section>
    </main>
  );
}
