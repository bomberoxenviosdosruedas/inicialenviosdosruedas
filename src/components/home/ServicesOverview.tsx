'use client';

import { Zap, Clock, Package, Truck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: "Envíos Express",
    icon: Zap,
    description: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación.",
    button: "Solicitar Express",
    link: "/cotizar/express",
    badge: "ALTA PRIORIDAD"
  },
  {
    title: "Envíos LowCost",
    icon: Clock,
    description: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega en el día.",
    button: "Ahorrá con LowCost",
    link: "/servicios/envios-lowcost",
    badge: "MÁXIMA EFICIENCIA"
  },
  {
    title: "Envíos Flex (MeLi)",
    icon: Package,
    description: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro esté en verde.",
    button: "Activar Envíos Flex",
    link: "/servicios/enviosflex",
    badge: "SLA GUARANTEED"
  },
  {
    title: "E-Commerce & 3PL",
    icon: Truck,
    description: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual centralizada.",
    button: "Hablar con un asesor",
    link: "/nosotros/contacto",
    badge: "3PL STRATEGY"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-none">
            Soluciones <br />
            <span className="text-primary">Logísticas</span>
          </h2>
          <p className="font-sans text-xl text-slate-600 max-w-2xl font-bold uppercase italic">
            "Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="brutalist-card p-8 bg-white flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 bg-slate-950 flex items-center justify-center border-4 border-slate-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-[10px] font-black text-primary border-2 border-primary px-2 py-0.5 uppercase">
                  {service.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none">
                {service.title}
              </h3>

              <p className="font-sans text-sm text-slate-600 font-bold uppercase tracking-tight mb-8 flex-grow">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="brutalist-button-primary w-full flex items-center justify-center gap-2"
              >
                {service.button}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
