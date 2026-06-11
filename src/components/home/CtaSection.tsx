"use client";

import { Zap, Calculator, MessageCircle, ShieldCheck, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="py-24 bg-primary overflow-hidden relative">
      {/* Background with texture */}
      <div className="absolute inset-0 opacity-20 grayscale mix-blend-overlay">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt="Abstract Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="brutalist-card bg-white p-12 md:p-20 relative overflow-hidden">
          {/* Inner Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 -mr-32 -mt-32 rounded-none blur-3xl" />

          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 bg-primary text-white px-4 py-2 border-4 border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Zap className="w-5 h-5 text-secondary animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">¡Empezá Ahora!</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-primary uppercase leading-none">
              ¿Listo para escalar la logística <br />
              <span className="text-primary">de tu E-Commerce?</span>
            </h2>

            <p className="font-display text-xl md:text-2xl text-primary/60 font-bold uppercase italic max-w-2xl leading-tight">
              Olvidate de la gestión de paquetes y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/cotizar/express" className="brutalist-button-primary flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Cotizar Envío
              </Link>
              <Link href="https://wa.me/542236602699" target="_blank" className="brutalist-button-accent flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Link>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t-4 border-primary">
              {[
                { icon: ShieldCheck, text: "Confianza local comprobada" },
                { icon: TrendingUp, text: "Innovación constante en última milla" },
                { icon: Globe, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((pilar, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-brand bg-background flex items-center justify-center border-2 border-primary shrink-0">
                    <pilar.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase text-primary leading-tight">
                    {pilar.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
