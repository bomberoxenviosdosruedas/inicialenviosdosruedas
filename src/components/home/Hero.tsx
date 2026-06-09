"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap, Globe, Terminal, Cpu, Activity, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

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
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-12 border-b border-primary/20 bg-dark-navy">
      {/* Background Video Loop (High Tech Connection Net) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-10 mix-blend-screen pointer-events-none"
          src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
        />
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0022FF06_1px,transparent_1px),linear-gradient(to_bottom,#0022FF06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-pulse z-0" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 my-auto">
        
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
            <span className="text-accent relative inline-block text-yellow-400">
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
            className="font-body text-base md:text-lg text-off-white/80 max-w-xl mx-auto lg:mx-0 border-l-4 border-primary pl-6 py-2 leading-relaxed text-left"
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
            <Button asChild variant="secondary" size="lg" className="h-14 px-8 font-technical text-xs uppercase font-bold group">
              <Link href="/cotizar/express">
                <span>Solicitar Servicio</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 font-technical text-xs uppercase font-bold group">
              <Link href="/servicios/envios-express">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                  <Play className="w-3 h-3 text-white fill-white" />
                </div>
                <span>Ver Servicios</span>
              </Link>
            </Button>
          </motion.div>

          {/* Badges de Confianza Inferiores */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-2 sm:gap-6 pt-10 border-t border-white/10 mt-10 max-w-xl mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <ShieldCheck className="w-6 h-6 text-accent shrink-0 text-yellow-400" />
              <div>
                <p className="font-technical text-[10px] text-white font-bold leading-none">100% SEGURO</p>
                <p className="font-body text-[8px] text-off-white/40 uppercase tracking-wider mt-0.5">Protección total</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <Zap className="w-6 h-6 text-primary shrink-0 text-blue-400" />
              <div>
                <p className="font-technical text-[10px] text-white font-bold leading-none">ULTRA RÁPIDO</p>
                <p className="font-body text-[8px] text-off-white/40 uppercase tracking-wider mt-0.5">En el mismo día</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <Globe className="w-6 h-6 text-accent shrink-0 text-yellow-400" />
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
                <Terminal className="w-5 h-5 text-accent text-yellow-400" />
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
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Unidades en Ruta</p>
                <p className="font-display text-2xl text-white font-bold">{telemetry.activeUnits}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-accent transition-colors">
                <div className="absolute top-2 right-2 text-accent">
                  <Cpu className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Carga Operativa</p>
                <p className="font-display text-2xl text-accent font-bold text-yellow-400">{telemetry.loadFactor}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-accent transition-colors">
                <div className="absolute top-2 right-2 text-accent">
                  <Map className="w-4 h-4 text-yellow-400" />
                </div>
                <p className="font-technical text-[9px] text-off-white/40 uppercase mb-1">Velocidad Promedio</p>
                <p className="font-body text-sm text-white font-bold mt-1">{telemetry.avgSpeed}</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 relative group hover:border-primary transition-colors">
                <div className="absolute top-2 right-2 text-primary">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
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
              <div className="space-y-1 text-left">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2 items-start leading-relaxed">
                    <span className="text-primary select-none font-bold text-blue-400">&gt;</span>
                    <span className={i === logs.length - 1 ? "text-accent animate-pulse font-bold text-yellow-400" : "text-off-white/60"}>
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

      {/* Infinite Client Logos Slider */}
      <div className="relative z-10 w-full mt-16 border-t border-white/5 pt-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="md:max-w-44 md:border-r border-white/10 md:pr-6 whitespace-nowrap">
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent text-center md:text-left text-yellow-400 font-bold">
              Potenciando el E-commerce
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden py-2 md:w-[calc(100%-11rem)]">
            <InfiniteSlider durationOnHover={20} duration={40} gap={96}>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Lemon Squeezy Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Laravel Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-7 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Lilly Logo"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-6 w-auto invert opacity-50 hover:opacity-100 transition-all duration-300"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="OpenAI Logo"
                />
              </div>
            </InfiniteSlider>
            
            {/* Progressive mask blurs on edges */}
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={0.5}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
