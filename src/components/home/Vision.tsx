"use client";

import Link from "next/link";
import { Zap, ShieldCheck, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Vision() {
  const metrics = [
    { value: "+5.000", label: "Confianza local comprobada" },
    { value: "7 Años", label: "Innovación constante en última milla" },
    { value: "Flota Exclusiva", label: "Motocicletas dedicadas para máxima agilidad urbana" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-white/10">
      
      {/* TEXT & METRICS COLUMN */}
      <div className="lg:col-span-7 space-y-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/30 rounded-sm">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            <span className="font-technical text-xs text-primary uppercase tracking-widest font-bold">
              Partner Logístico Especializado
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tighter">
            Nuestra Visión Logística
          </h2>
          <p className="font-body text-xl text-accent uppercase tracking-tight border-l-2 border-accent pl-4">
            Transformamos tus costos fijos en soluciones flexibles que acompañan el crecimiento de tu negocio.
          </p>
        </div>

        {/* Characteristics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="flex gap-4 p-6 bg-white/5 border border-white/10">
            <Zap className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h4 className="font-technical text-sm font-bold text-white uppercase tracking-wider">Entregas a Tiempo</h4>
              <p className="font-body text-xs text-off-white/60 mt-1">Puntualidad garantizada en cada envío.</p>
            </div>
          </div>
          <div className="flex gap-4 p-6 bg-white/5 border border-white/10">
            <ShieldCheck className="w-8 h-8 text-accent shrink-0" />
            <div>
              <h4 className="font-technical text-sm font-bold text-white uppercase tracking-wider">Envíos Seguros</h4>
              <p className="font-body text-xs text-off-white/60 mt-1">Protección total de tus paquetes.</p>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {metrics.map((m, i) => (
            <div key={i} className="border-l-2 border-primary pl-6 py-2">
              <h3 className="font-display text-3xl text-white font-bold">{m.value}</h3>
              <p className="font-body text-xs text-off-white/50 leading-relaxed mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VISUAL ACTION CONTAINER COLUMN */}
      <div className="lg:col-span-5 relative group">
        <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
        <div className="relative border border-white/10 bg-white/5 p-6 aspect-square md:aspect-video lg:aspect-square overflow-hidden flex flex-col justify-between">
          
          {/* Cyber visual background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,var(--color-electric-blue)_0,transparent_70%)]" />
          
          {/* SVG Map grid details */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-5">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white" />
            ))}
          </div>

          <div className="flex justify-between items-start z-10">
            <span className="font-technical text-[9px] text-off-white/40 uppercase tracking-widest">MAP_UNIT_MDP</span>
            <span className="font-technical text-[9px] text-primary uppercase tracking-widest font-bold">INFO_NODE</span>
          </div>

          <div className="my-auto text-center z-10 space-y-4 py-8">
            <div className="font-display text-[160px] text-white/5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
              MGP
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tighter leading-none relative">
              Conocé más <br /> sobre nosotros
            </h3>
          </div>

          <div className="flex justify-between items-center z-10 pt-4 border-t border-white/10">
            <span className="font-technical text-xs text-off-white/60">DosRuedas_Story.exe</span>
            <Link
              href="/nosotros/sobre-nosotros"
              className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent hover:text-dark-navy transition-colors"
            >
              <Play className="w-4.5 h-4.5 fill-current ml-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
