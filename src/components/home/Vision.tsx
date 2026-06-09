'use client';

import { Zap, ShieldCheck, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Vision() {
  const metrics = [
    { value: "+5.000", label: "Confianza local comprobada" },
    { value: "7 Años", label: "Innovación constante en última milla" },
    { value: "Flota Exclusiva", label: "Motocicletas dedicadas para máxima agilidad urbana" },
  ];

  return (
    <section className="py-24 bg-white border-y-4 border-blue-brand overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-brand bg-blue-brand opacity-75"></span>
                <span className="relative inline-flex rounded-brand h-3 w-3 bg-blue-brand"></span>
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-brand">
                Partner Logístico Especializado
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-blue-brand uppercase leading-none">
              Nuestra Visión <br />
              <span className="text-blue-brand">Logística</span>
            </h2>

            <p className="font-display text-2xl font-bold text-blue-brand/40 uppercase italic max-w-lg">
              &quot;Transformamos tus costos fijos en solutions flexibles que acompañan el crecimiento de tu negocio.&quot;
            </p>

            {/* Grid Characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="brutalist-card p-6 bg-white-brand">
                <Zap className="w-10 h-10 text-blue-brand mb-4" />
                <h4 className="text-xl font-black mb-2">Entregas a Tiempo</h4>
                <p className="font-display text-sm text-blue-brand/60 uppercase font-bold tracking-tight">Puntualidad garantizada en cada envío</p>
              </div>
              <div className="brutalist-card p-6 bg-white-brand">
                <ShieldCheck className="w-10 h-10 text-blue-brand mb-4" />
                <h4 className="text-xl font-black mb-2">Envíos Seguros</h4>
                <p className="font-display text-sm text-blue-brand/60 uppercase font-bold tracking-tight">Protección total de tus paquetes</p>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t-4 border-blue-brand">
              {metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl font-black text-blue-brand">{m.value}</span>
                  <span className="font-mono text-[10px] uppercase font-bold text-blue-brand leading-tight mt-1">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Container */}
          <div className="relative">
            <div className="brutalist-card aspect-video relative overflow-hidden group">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Visión Logística"
                fill
                className="object-cover grayscale hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-blue-brand/20 mix-blend-multiply" />

              {/* Accent Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-brand/40 blur-3xl" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 brutalist-card bg-white p-6 flex items-center justify-between">
                <div>
                  <h5 className="font-black text-lg uppercase tracking-tighter">Conocé más sobre nosotros</h5>
                  <p className="font-mono text-xs text-blue-brand/50 uppercase">Trayectoria y Compromiso</p>
                </div>
                <Link href="/nosotros/sobre-nosotros" className="w-12 h-12 bg-blue-brand flex items-center justify-center hover:bg-blue-brand transition-colors">
                  <Play className="w-6 h-6 text-white fill-white" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
