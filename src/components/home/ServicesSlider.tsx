"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Clock, Package, Truck, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSlider() {
  const [activeIdx, setActiveIdx] = useState(0);

  const capabilities = [
    {
      title: "Envíos Express",
      tag: "ALTA PRIORIDAD",
      desc: "Servicio de mensajería express y gestiones prioritarias en Mar del Plata. Diseñado para envíos críticos.",
      features: [
        { label: "Tiempo de Respuesta", value: "< 2 Horas" },
        { label: "Seguridad de Envío", value: "Garantizada" },
        { label: "Seguimiento", value: "Real-Time GPS" }
      ],
      link: "/servicios/envios-express",
      icon: Zap,
      color: "border-primary text-primary bg-primary/5"
    },
    {
      title: "Envíos LowCost",
      tag: "EFICIENCIA DE COSTOS",
      desc: "Tarifas competitivas para distribución masiva y planificada. El mejor precio por kilómetro de la ciudad.",
      features: [
        { label: "Tiempo de Entrega", value: "Mismo Día (Same-Day)" },
        { label: "Límite de Despacho", value: "Hasta las 13:00 hs" },
        { label: "Optimización", value: "Ruteo Masivo" }
      ],
      link: "/servicios/envios-lowcost",
      icon: Clock,
      color: "border-accent text-accent bg-accent/5"
    },
    {
      title: "Envíos Flex MercadoLibre",
      tag: "MERCADOLIBRE FLEX",
      desc: "Socio logístico homologado para MercadoLibre Flex. Entregas en el día que cuidan tu reputación.",
      features: [
        { label: "Hora de Corte", value: "15:00 hs" },
        { label: "SLA de Cumplimiento", value: "99.8%" },
        { label: "Soporte", value: "Canal Dedicado" }
      ],
      link: "/servicios/enviosflex",
      icon: Package,
      color: "border-accent text-accent bg-accent/5"
    },
    {
      title: "E-Commerce & 3PL",
      tag: "TERCERIZACIÓN 3PL",
      desc: "Solución logística integral: depósito, embalaje (pick & pack) y distribución final de tus productos.",
      features: [
        { label: "Fulfillment", value: "Almacenaje Propio" },
        { label: "Facturación", value: "Cuenta Corriente" },
        { label: "Escalabilidad", value: "Sin límites de volumen" }
      ],
      link: "/servicios/plan-emprendedores",
      icon: Truck,
      color: "border-primary text-primary bg-primary/5"
    }
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % capabilities.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + capabilities.length) % capabilities.length);
  };

  const active = capabilities[activeIdx];
  const IconComponent = active.icon;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="font-technical text-xs text-accent uppercase tracking-widest font-bold">
            Capacidades Dinámicas
          </span>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tighter mt-2">
            SOLUCIONES A MEDIDA
          </h2>
          <p className="font-body text-off-white/60 text-lg mt-4 max-w-xl border-l-2 border-accent pl-4">
            Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark-navy hover:border-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-dark-navy hover:border-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="relative border-2 border-primary bg-dark-navy p-8 md:p-12 overflow-hidden min-h-[380px] flex items-center">
        
        {/* Cyber overlay */}
        <div className="absolute top-0 right-0 p-4 font-technical text-[9px] text-primary border-b border-l border-primary/20">
          CAP_SLID_v1.0
        </div>
        
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-[0.03] pointer-events-none">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white" />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full relative z-10"
          >
            {/* Left Column: Icon and Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className={`inline-block font-technical text-[10px] border px-2.5 py-0.5 font-bold tracking-widest ${active.color}`}>
                {active.tag}
              </span>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center text-accent bg-primary/10 shrink-0">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tighter">
                  {active.title}
                </h3>
              </div>

              <p className="font-body text-sm text-off-white/80 leading-relaxed max-w-xl">
                {active.desc}
              </p>

              <Link
                href={active.link}
                className="inline-flex items-center gap-2 bg-accent text-dark-navy px-6 py-4 font-technical text-sm font-bold uppercase hover:bg-white hover:text-dark-navy transition-colors border border-accent hover:border-white"
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
