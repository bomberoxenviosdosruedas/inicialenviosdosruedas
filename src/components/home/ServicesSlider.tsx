"use client";

import { Zap, Clock, Package, Truck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    title: "Envíos Express",
    desc: "Prioridad absoluta y certeza total. Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega.",
    tag: "ALTA PRIORIDAD",
    icon: Zap,
    btn: "Solicitar Express",
    link: "/cotizar/express"
  },
  {
    title: "Envíos LowCost",
    desc: "Rentabilidad y ruteo masivo. Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y garantizamos entrega.",
    tag: "MAX EFICIENCIA",
    icon: Clock,
    btn: "Ahorrá con LowCost",
    link: "/servicios/envios-lowcost"
  },
  {
    title: "Envíos Flex",
    desc: "Potenciá tu reputación al máximo. Somos expertos en MercadoLibre. Cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day.",
    tag: "SLA GUARANTEED",
    icon: Package,
    btn: "Activar Envíos Flex",
    link: "/servicios/enviosflex"
  },
  {
    title: "E-Commerce & 3PL",
    desc: "Tercerización y cuentas corrientes. Más que un envío, somos tu depósito. Soluciones escalables para PyMEs con facturación mensual.",
    tag: "3PL STRATEGY",
    icon: Truck,
    btn: "Hablar con un asesor",
    link: "/nosotros/contacto"
  }
];

export default function ServicesSlider() {
  return (
    <section className="py-24 bg-white border-y-4 border-blue-brand overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-brand">
              Capacidades Dinámicas
            </span>
            <div className="h-[2px] w-12 bg-blue-brand" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-blue-brand uppercase leading-[0.8]">
            SOLUCIONES <br />
            <span className="text-blue-brand">A MEDIDA</span>
          </h2>
          <p className="font-display text-xl text-blue-brand/60 max-w-2xl font-bold uppercase italic">
            &quot;Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real.&quot;
          </p>
        </div>

        {/* Carousel/Grid - Simulating a slider with a grid for this brutalist layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-4 border-blue-brand shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className={`p-10 flex flex-col bg-white hover:bg-white-brand transition-colors border-blue-brand ${
                idx !== capabilities.length - 1 ? 'lg:border-r-4' : ''
              } ${idx % 2 === 0 ? 'md:border-r-4 lg:border-r-4' : ''} ${idx < 2 ? 'md:border-b-4 lg:border-b-0' : ''}`}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-blue-brand flex items-center justify-center border-4 border-blue-brand shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                  <cap.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-mono text-[10px] font-bold text-blue-brand border-2 border-blue-brand px-2 py-1 uppercase tracking-tighter">
                  {cap.tag}
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">
                {cap.title}
              </h3>

              <p className="font-display text-sm text-blue-brand/60 font-medium mb-10 flex-grow uppercase tracking-tight">
                {cap.desc}
              </p>

              <Link
                href={cap.link}
                className="group flex items-center justify-between font-mono text-xs font-black uppercase tracking-widest border-t-4 border-blue-brand pt-6 hover:text-blue-brand transition-colors"
              >
                <span>Saber Más</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Column: Technical details board */}
            <div className="lg:col-span-5 bg-black/60 border border-white/10 p-6 space-y-4">
              <p className="font-technical text-[10px] text-accent uppercase tracking-wider border-b border-white/10 pb-2">
                Ficha_Técnica_DR
              </p>
              
              <div className="space-y-4">
                {active.features.map((feat, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs font-body border-b border-white/5 pb-2">
                    <span className="text-off-white/50 uppercase">{feat.label}</span>
                    <span className="text-white font-bold">{feat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {capabilities.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`w-3 h-3 rounded-none transition-all duration-300 ${activeIdx === i ? "bg-accent scale-x-200" : "bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
