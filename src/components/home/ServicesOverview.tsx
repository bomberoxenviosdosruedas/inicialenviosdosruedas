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
    <section className="py-24 bg-white-brand">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-blue-brand uppercase leading-none">
            Soluciones <br />
            <span className="text-blue-brand">Logísticas</span>
          </h2>
          <p className="font-display text-xl text-blue-brand/60 max-w-2xl font-bold uppercase italic">
            &quot;Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.&quot;
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="brutalist-card p-8 bg-white flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-blue-brand flex items-center justify-center border-4 border-blue-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-[10px] font-black text-blue-brand border-2 border-blue-brand px-2 py-0.5 uppercase">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
                {service.title}
              </h3>

              <p className="font-display text-sm text-blue-brand/60 font-bold uppercase tracking-tight mb-8 flex-grow">
                {service.desc}
              </p>

              <Link
                href={service.link}
                className="brutalist-button-primary w-full flex items-center justify-center gap-2 group/btn"
              >
                <span>{service.btn}</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
