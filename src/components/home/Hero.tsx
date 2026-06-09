"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap, Globe } from "lucide-react";
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
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden bg-white-brand">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content (Column 1) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white border-4 border-blue-brand px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-brand bg-blue-brand opacity-75"></span>
              <span className="relative inline-flex rounded-brand h-3 w-3 bg-blue-brand"></span>
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-brand">
              Tu Solución Confiable
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-blue-brand leading-[0.85] uppercase md:italic">
            Mensajería y <br />
            <span className="text-blue-brand">Logística</span> <br />
            E-Commerce <br />
            <span className="text-blue-brand/20 stroke-blue-brand stroke-2">en MDP</span>
          </h1>

          {/* Description */}
          <p className="font-display text-xl text-blue-brand/70 max-w-xl border-l-8 border-gold-brand pl-6 py-2 leading-tight">
            Somos tu solución confiable en servicios de mensajería y delivery en Mar del Plata.
            Ofrecemos soluciones rápidas, seguras y económicas para todas tus necesidades de envío.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 pt-4">
            <Link href="/cotizar/express" className="brutalist-button-primary group flex items-center gap-2">
              Solicitar Servicio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/servicios/envios-express" className="brutalist-button-accent group flex items-center gap-2">
              <div className="w-8 h-8 rounded-brand border-2 border-blue-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-blue-brand" />
              </div>
              Ver Servicios
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-8 pt-8 border-t-4 border-blue-brand">
            {[
              { icon: ShieldCheck, text: "100% SEGURO" },
              { icon: Zap, text: "ULTRA RÁPIDO" },
              { icon: Globe, text: "COBERTURA TOTAL" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-blue-brand" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Content (Column 2) */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="relative w-full aspect-square border-4 border-blue-brand bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <Image
              src="/hero/mapa_background.jpeg"
              alt="Mapa Logístico MDP"
              fill
              className="object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-blue-brand/10 mix-blend-multiply" />

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 brutalist-card p-3 bg-blue-brand text-white z-20"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[8px] uppercase">Estado</span>
                <span className="font-black text-sm italic">EN TRÁNSITO</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -left-2 brutalist-card p-3 bg-gold-brand text-blue-brand z-20"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] uppercase tracking-tighter">Seguridad</span>
                  <span className="font-black text-sm italic">VERIFICADO</span>
                </div>
              </div>
            </motion.div>

            {/* Simulated 3D Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border-4 border-blue-brand bg-white/80 backdrop-blur-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
               <Zap className="w-16 h-16 text-blue-brand animate-pulse" />
            </div>
          </div>

          {/* Realtime Terminal Console */}
          <div className="bg-black p-4 border-4 border-blue-brand shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono text-[11px] h-40 overflow-hidden flex flex-col justify-end space-y-2">
            <p className="text-white/30 font-mono text-[9px] uppercase tracking-wider border-b border-white/5 pb-1">
              Realtime_Core_Logs:
            </p>
            <div className="space-y-1 text-left">
              {logs.map((log, i) => (
                <div key={i} className="flex gap-2 items-start leading-relaxed">
                  <span className="text-blue-400 select-none font-bold">&gt;</span>
                  <span className={i === logs.length - 1 ? "text-yellow-400 animate-pulse font-bold" : "text-white/60"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="brutalist-card p-4 bg-white text-blue-brand">
              <span className="block text-[10px] font-mono text-blue-brand/50 uppercase">Velocidad Promedio</span>
              <span className="font-black text-2xl italic">{telemetry.avgSpeed}</span>
            </div>
            <div className="brutalist-card p-4 bg-white text-blue-brand">
              <span className="block text-[10px] font-mono text-blue-brand/50 uppercase">Entregados Hoy</span>
              <span className="font-black text-2xl italic">{telemetry.deliveredToday}</span>
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
