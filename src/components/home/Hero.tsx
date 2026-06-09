"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap, Globe, Terminal, Cpu, Activity, Map, Shield } from "lucide-react";

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
      setTelemetry((prev) => ({
        activeUnits: prev.activeUnits + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0),
        deliveredToday: prev.deliveredToday + (Math.random() > 0.3 ? 1 : 0),
        avgSpeed: (40 + Math.random() * 5).toFixed(1) + " km/h",
        loadFactor: Math.min(100, Math.max(50, Math.round(Number(prev.loadFactor.replace("%", "")) + (Math.random() > 0.5 ? 1 : -1)))) + "%",
      }));

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
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0022FF06_1px,transparent_1px),linear-gradient(to_bottom,#0022FF06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* TEXT PRESENTATION COLUMN */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left flex flex-col justify-center">
          
          {/* Badge Superior */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <div className="bg-primary/25 border border-primary/40 px-3 py-1 flex items-center gap-2 rounded-sm backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
              <span className="font-technical text-xs text-white uppercase tracking-widest font-bold">
                Tu Solución Confiable
              </span>
            </div>
            <div className="h-[1px] w-8 bg-primary/40 hidden sm:block" />
            <span className="font-technical text-xs text-off-white/60 tracking-[0.25em] uppercase">
              FLOW_INTELLIGENCE_v4.2
            </span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase text-white lg:italic"
          >
            Mensajería y Logística <br />
            <span className="text-accent relative inline-block">
              E-Commerce
            </span>{" "}
            <br />
            en Mar del Plata.
          </motion.h1>

          {/* Descripción */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-base md:text-lg text-off-white/80 max-w-xl mx-auto lg:mx-0 border-l-4 border-primary pl-6 py-2 leading-relaxed"
          >
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata. Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <Link 
              href="/cotizar/express" 
              className="bg-accent text-dark-navy px-8 py-5 font-technical text-lg uppercase font-bold hover:bg-white transition-all flex items-center gap-2 border-2 border-accent hover:border-white shadow-[0_0_20px_rgba(255,214,0,0.15)] hover:shadow-none group"
            >
              <span>Solicitar Servicio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link 
              href="/servicios/envios-express" 
              className="border-2 border-white/20 text-white px-8 py-5 font-technical text-lg uppercase hover:bg-white/10 hover:border-white transition-all flex items-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 text-white fill-white" />
              </div>
              <span>Ver Servicios</span>
            </Link>
          </motion.div>

          {/* Badges de Confianza Inferiores */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 pt-10 border-t border-white/10 mt-10 max-w-xl mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="font-technical text-[10px] text-white font-bold leading-none">100% SEGURO</p>
                <p className="font-body text-[8px] text-off-white/40 uppercase tracking-wider mt-0.5">Protección total</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <Zap className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-technical text-[10px] text-white font-bold leading-none">ULTRA RÁPIDO</p>
                <p className="font-body text-[8px] text-off-white/40 uppercase tracking-wider mt-0.5">En el mismo día</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <Globe className="w-6 h-6 text-accent shrink-0" />
              <div>
                <p className="font-technical text-[10px] text-white font-bold leading-none">COBERTURA TOTAL</p>
                <p className="font-body text-[8px] text-off-white/40 uppercase tracking-wider mt-0.5">En todo Mar del Plata</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TELEMETRY TERMINAL COLUMN */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Cyber design brackets */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-accent" />

          {/* Terminal Box */}
          <div className="border-2 border-primary bg-dark-navy/95 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(0,34,255,0.1)] relative">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-accent" />
                <span className="font-technical text-xs text-white uppercase tracking-wider">
                  MGP_Live_Telemetry
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-technical text-[10px] text-green-400 uppercase tracking-widest">
                  ONLINE
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-primary transition-colors">
                <div className="absolute top-2 right-2 text-primary">
                  <Activity className="w-4 h-4" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Unidades en Ruta</p>
                <p className="font-display text-2xl text-white font-bold">{telemetry.activeUnits}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-accent transition-colors">
                <div className="absolute top-2 right-2 text-accent">
                  <Cpu className="w-4 h-4" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Carga Operativa</p>
                <p className="font-display text-2xl text-accent font-bold">{telemetry.loadFactor}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-accent transition-colors">
                <div className="absolute top-2 right-2 text-accent">
                  <Map className="w-4 h-4" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Velocidad Promedio</p>
                <p className="font-body text-sm text-white font-bold mt-1">{telemetry.avgSpeed}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-primary transition-colors">
                <div className="absolute top-2 right-2 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Entregados Hoy</p>
                <p className="font-display text-xl text-white font-bold">{telemetry.deliveredToday}</p>
              </div>
            </div>

            {/* Realtime Terminal Console */}
            <div className="bg-black/90 p-4 border border-white/10 font-mono text-[11px] h-44 overflow-hidden flex flex-col justify-end space-y-2">
              <p className="text-white/30 font-technical text-[9px] uppercase tracking-wider border-b border-white/5 pb-1">
                Realtime_Core_Logs:
              </p>
              <div className="space-y-1">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2 items-start leading-relaxed">
                    <span className="text-primary select-none font-bold">&gt;</span>
                    <span className={i === logs.length - 1 ? "text-accent animate-pulse font-bold" : "text-off-white/60"}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware footprint detail */}
            <div className="mt-4 flex justify-between items-center text-[8px] font-technical text-off-white/30 uppercase tracking-widest">
              <span>LATENCY: 12ms</span>
              <span>NODE: MDP_CENTRAL_01</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
