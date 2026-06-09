"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Map, Terminal, Cpu } from "lucide-react";

export default function Hero() {
  const [telemetry, setTelemetry] = useState({
    activeUnits: 18,
    deliveredToday: 342,
    avgSpeed: "42.8 km/h",
    loadFactor: "84%",
  });

  const [logs, setLogs] = useState<string[]>([
    "SYS_INIT: Red Logística DosRuedas inicializada.",
    "TRACK_ENG: Conexión establecida con 18 unidades activas.",
    "ROUTING_v4: 5 solicitudes de envío en cola de despacho."
  ]);

  // Simulate live telemetry updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update metrics slightly
      setTelemetry((prev) => ({
        activeUnits: prev.activeUnits + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0),
        deliveredToday: prev.deliveredToday + (Math.random() > 0.3 ? 1 : 0),
        avgSpeed: (40 + Math.random() * 5).toFixed(1) + " km/h",
        loadFactor: Math.min(100, Math.max(50, Math.round(Number(prev.loadFactor.replace("%", "")) + (Math.random() > 0.5 ? 1 : -1)))) + "%",
      }));

      // Add a random log
      const units = ["DR-104 (Moto)", "DR-209 (e-Bike)", "DR-311 (Moto)", "DR-882 (Fulfillment)"];
      const actions = [
        "PING -> Friuli 1972",
        "Ruta optimizada -> Colón & Champagnat",
        "Entrega completada (Flex SLA)",
        "Despacho prioritario asignado",
        "Lectura de telemetría: Sensor OK"
      ];
      const randomUnit = units[Math.floor(Math.random() * units.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const timeStr = new Date().toLocaleTimeString("es-AR", { hour12: false });

      setLogs((prev) => {
        const nextLogs = [...prev, `[${timeStr}] ${randomUnit}: ${randomAction}`];
        if (nextLogs.length > 5) nextLogs.shift();
        return nextLogs;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 border-b border-primary/20 bg-dark-navy">
      {/* Dynamic Cyber Grid/Radar Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0022FF06_1px,transparent_1px),linear-gradient(to_bottom,#0022FF06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* TEXT PRESENTATION COLUMN */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <div className="bg-primary px-3 py-1 flex items-center gap-2 border border-primary-light">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
              <span className="font-technical text-xs text-white uppercase tracking-widest font-bold">
                Red MDP Activa
              </span>
            </div>
            <div className="h-[1px] w-8 bg-primary/40 hidden sm:block" />
            <span className="font-technical text-xs text-off-white/60 tracking-[0.25em] uppercase">
              FLOW_INTELLIGENCE_v4.2
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase text-white"
          >
            Logística de <br />
            <span className="text-accent relative inline-block">
              Alta Frecuencia
              <span className="absolute bottom-0 left-0 w-full h-[6px] bg-primary/30 -z-10" />
            </span>
            <br />
            Urbana.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-off-white/80 max-w-xl mx-auto lg:mx-0 border-l-4 border-primary pl-6 py-2 leading-relaxed"
          >
            Despliegue operativo inteligente en Mar del Plata. Optimizamos la última milla mediante algoritmos de ruteo dinámico y una flota de alta frecuencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <Link
              href="/cotizar/express"
              className="bg-accent text-dark-navy px-8 py-5 font-technical text-lg uppercase font-bold hover:bg-white transition-all flex items-center gap-2 border-2 border-accent hover:border-white shadow-[0_0_20px_rgba(255,214,0,0.15)] hover:shadow-none"
            >
              <span>Cotizar Envío</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/servicios/envios-express"
              className="border-2 border-white/20 text-white px-8 py-5 font-technical text-lg uppercase hover:bg-white/10 hover:border-white transition-all block"
            >
              Conocer Cobertura
            </Link>
          </motion.div>
        </div>

        <h1 className="font-display text-7xl md:text-8xl leading-[0.9] tracking-tighter uppercase text-white">
          Logística de <br />
          <span className="text-accent">Alta Frecuencia</span><br />
          para la era digital.
        </h1>

        <p className="font-body text-lg text-off-white/80 max-w-xl border-l-2 border-primary pl-6 py-2">
          Despliegue operativo inmediato en Mar del Plata. Optimizamos la última milla mediante algoritmos de flujo dinámico y una flota de respuesta rápida.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-accent text-dark-navy px-8 py-4 font-technical text-lg uppercase font-bold hover:bg-white transition-all">
            Iniciar Despliegue
          </button>
          <button className="border border-off-white/30 text-white px-8 py-4 font-technical text-lg uppercase hover:bg-white/10 transition-all">
            Consultar Cobertura
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 relative">
        {/* Placeholder para la unidad de telemetría/tracking */}
        <div className="border border-electric-blue/30 p-6 bg-dark-navy/50 backdrop-blur-sm">
          <div className="flex justify-between items-start mb-6 pb-4 border-b border-electric-blue/30">
            <div>
              <p className="font-technical text-[10px] text-off-white/50 uppercase">Unit_Tracking_Id</p>
              <h3 className="font-display text-accent text-2xl tracking-tighter">DR-9921-XPR</h3>
            </div>
            <div className="px-3 py-1 bg-accent text-dark-navy font-technical text-[10px]">
              LIVE_SIGNAL
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {['Velocity', 'Est_Delivery'].map((item) => (
              <div key={item} className="p-3 bg-white/5 border border-white/10">
                <p className="font-technical text-[10px] text-off-white/50 uppercase">{item}</p>
                <p className="font-body text-white">104.2 KM/H</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
