"use client";

import Link from "next/link";
import { Zap, Clock, Package, Truck, ChevronRight } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Envíos Express",
      desc: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
      btn: "Solicitar Express",
      badge: "ALTA PRIORIDAD",
      link: "/cotizar/express",
      icon: Zap,
      accent: "border-primary text-primary"
    },
    {
      title: "Envíos LowCost",
      desc: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.",
      btn: "Ahorrá con LowCost",
      badge: "RENTABILIDAD",
      link: "/cotizar/lowcost",
      icon: Clock,
      accent: "border-accent text-accent"
    },
    {
      title: "Envíos Flex (MeLi)",
      desc: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde.",
      btn: "Activar Envíos Flex",
      badge: "MERCADOLIBRE",
      link: "/servicios/enviosflex",
      icon: Package,
      accent: "border-accent text-accent"
    },
    {
      title: "E-Commerce & 3PL",
      desc: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada.",
      btn: "Hablar con un asesor",
      badge: "INTEGRAL",
      link: "/servicios/plan-emprendedores",
      icon: Truck,
      accent: "border-primary text-primary"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/10">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <span className="font-technical text-xs text-primary uppercase tracking-widest font-bold">
          SOLUCIONES DE ÚLTIMA MILLA
        </span>
        <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tighter mt-2">
          Soluciones Logísticas
        </h2>
        <p className="font-body text-off-white/60 text-lg mt-4 border-l-2 border-primary pl-4">
          Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
        </p>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => {
          const IconComponent = s.icon;
          return (
            <div
              key={i}
              className="border border-white/10 p-8 bg-white/5 flex flex-col justify-between hover:border-primary transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 bg-white/5 font-technical text-[9px] text-off-white/40 uppercase tracking-wider border-b border-l border-white/10">
                DR_SVC_0{i + 1}
              </div>

              <div>
                <span className={`inline-block font-technical text-[9px] border px-2 py-0.5 mb-6 font-bold tracking-widest ${s.accent}`}>
                  {s.badge}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {s.title}
                  </h3>
                </div>

                <p className="font-body text-xs text-off-white/70 leading-relaxed mb-8">
                  {s.desc}
                </p>
              </div>

              <Link
                href={s.link}
                className="w-full py-4 bg-white/5 border border-white/10 text-white font-technical text-xs uppercase hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>{s.btn}</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
