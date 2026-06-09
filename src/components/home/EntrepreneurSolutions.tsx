'use client';

import { motion } from 'framer-motion';
import { Building2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const solutions = [
  {
    title: "Soluciones Corporativas",
    features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"],
    link: "/servicios/plan-emprendedores",
    image: "/hero/hero_background.jpeg"
  },
  {
    title: "Envíos Flex MercadoLibre",
    features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"],
    link: "/servicios/enviosflex",
    image: "/hero/mapa_background.jpeg"
  },
  {
    title: "Logística E-Commerce",
    features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"],
    link: "/servicios/plan-emprendedores",
    image: "/hero/abstracto_background.jpeg"
  }
];

export default function EntrepreneurSolutions() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3 bg-white border-4 border-slate-950 px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Building2 className="w-5 h-5 text-primary animate-bounce" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-950">
                Soluciones Corporativas y PyME
              </span>
            </div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-none">
              Potencia tu <br />
              <span className="text-primary">Logística</span> con DosRuedas
            </h2>
            <p className="font-sans text-xl text-slate-600 max-w-2xl leading-tight">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="brutalist-card p-6 bg-primary text-white">
              <span className="block text-4xl font-black">500+</span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Empresas</span>
            </div>
            <div className="brutalist-card p-6 bg-accent text-slate-950">
              <span className="block text-4xl font-black">24/7</span>
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest">Operativa</span>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <div key={idx} className="group brutalist-card bg-white flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              {/* Image Header */}
              <div className="relative h-48 border-b-4 border-slate-950 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 opacity-60"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all" />
                <div className="absolute top-4 left-4 bg-white border-4 border-slate-950 p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                   <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow space-y-6">
                <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">
                  {solution.title}
                </h4>

                <ul className="space-y-3 flex-grow">
                  {solution.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-mono text-xs font-bold uppercase text-slate-700 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={solution.link}
                  className="brutalist-button-primary w-full flex items-center justify-center gap-2 group-hover:bg-accent group-hover:text-slate-950 transition-colors"
                >
                  Configurar Plan
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
