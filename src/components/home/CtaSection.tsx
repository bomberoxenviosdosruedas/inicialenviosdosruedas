"use client";

import Link from "next/link";
import { Zap, MessageSquare, Calculator, ShieldCheck, Cpu, Globe } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="relative border-2 border-primary bg-dark-navy p-12 md:p-20 overflow-hidden flex flex-col items-center text-center">
        {/* Background visual details */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0,transparent_70%)]" />
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5 pointer-events-none">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>

        <div className="absolute top-0 right-0 p-4 font-technical text-[9px] text-accent border-b border-l border-primary/30 uppercase tracking-widest">
          DR_CTA_ACTIVE
        </div>

        <div className="max-w-3xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3 py-1 rounded-sm">
            <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="font-technical text-xs text-accent uppercase tracking-widest font-bold">
              ¡Empezá Ahora!
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase text-white tracking-tighter leading-none">
            ¿Listo para escalar la logística de tu E-Commerce?
          </h2>

          <p className="font-body text-base md:text-lg text-off-white/70 max-w-xl mx-auto leading-relaxed">
            Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/542236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-dark-navy px-8 py-5 font-technical text-lg uppercase font-bold hover:bg-white transition-all flex items-center justify-center gap-2 border-2 border-accent hover:border-white shadow-[0_0_20px_rgba(255,214,0,0.15)] hover:shadow-none"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Contactanos por WhatsApp</span>
            </a>
            <Link
              href="/cotizar/express"
              className="border-2 border-white/20 text-white px-8 py-5 font-technical text-lg uppercase hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Ver Tarifas 2026</span>
            </Link>
          </div>
        </div>

        {/* Bottom pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-white/10 mt-16 w-full text-left relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-technical text-xs text-white uppercase tracking-wider font-bold">
              Confianza local comprobada
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-technical text-xs text-white uppercase tracking-wider font-bold">
              Innovación constante en última milla
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
              <Globe className="w-5 h-5" />
            </div>
            <span className="font-technical text-xs text-white uppercase tracking-wider font-bold">
              Motocicletas dedicadas para máxima agilidad urbana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
