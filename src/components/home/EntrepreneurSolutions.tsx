"use client";

import Link from "next/link";
import { Building2, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EntrepreneurSolutions() {
  const solutions = [
    {
      title: "Soluciones Corporativas",
      desc: "Optimización logística con Cuenta Corriente Flexible y facturación simplificada.",
      tag: "Corporativo",
      features: [
        "Cuenta Corriente Flexible",
        "Facturación simplificada",
        "Gestión multi-usuario",
        "Reportes de impacto"
      ],
      link: "/servicios/plan-emprendedores"
    },
    {
      title: "Envíos Flex MercadoLibre",
      desc: "Socio estratégico para potenciar tus ventas con entregas en el día.",
      tag: "MercadoLibre",
      features: [
        "Cumplimiento de SLAs",
        "Mejora tu reputación",
        "Tarifas competitivas",
        "Soporte Flex dedicado"
      ],
      link: "/servicios/enviosflex"
    },
    {
      title: "Logística E-Commerce",
      desc: "Gestión integral de última milla para tiendas online y plataformas digitales.",
      tag: "PyMEs",
      features: [
        "Integración tecnológica",
        "Rutas optimizadas",
        "Flota especializada",
        "Seguimiento en tiempo real"
      ],
      link: "/servicios/plan-emprendedores"
    }
  ];

  return (
    <section className="bg-white/5 py-24 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-sm">
              <Building2 className="w-4 h-4 text-primary animate-pulse" />
              <span className="font-technical text-xs text-primary uppercase tracking-widest font-bold">
                Soluciones Corporativas y PyME
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tighter mt-2 leading-none">
              Potencia tu Logística con DosRuedas
            </h2>
            <p className="font-body text-off-white/70 text-lg border-l-2 border-accent pl-4 leading-relaxed max-w-3xl">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="p-6 border border-white/10 bg-dark-navy hover:border-primary transition-colors text-center sm:text-left">
              <h4 className="font-display text-4xl text-white">500+</h4>
              <p className="font-technical text-xs text-off-white/40 uppercase tracking-wider mt-1">Empresas</p>
            </div>
            <div className="p-6 border border-white/10 bg-dark-navy hover:border-accent transition-colors text-center sm:text-left">
              <h4 className="font-display text-4xl text-accent">24/7</h4>
              <p className="font-technical text-xs text-off-white/40 uppercase tracking-wider mt-1">Operativa</p>
            </div>
          </div>
        </div>

        {/* Grilla de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 bg-dark-navy flex flex-col justify-between hover:border-primary transition-all duration-300 relative group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-technical text-[9px] text-primary border border-primary/35 px-2 py-0.5 font-bold tracking-widest uppercase">
                    {s.tag}
                  </span>
                  <span className="font-technical text-[9px] text-off-white/30 uppercase">PLAN_0{i + 1}</span>
                </div>

                <h4 className="font-display text-2xl text-white uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {s.title}
                </h4>
                <p className="font-body text-xs text-off-white/60 mb-6 leading-relaxed">
                  {s.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-3 border-t border-white/10 pt-6 mb-8">
                  {s.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-body text-off-white/80">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={s.link}
                className="font-technical text-sm text-accent uppercase font-bold hover:text-white transition-colors flex items-center gap-2 group/btn"
              >
                <span>Configurar Plan</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
