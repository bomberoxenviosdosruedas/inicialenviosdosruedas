'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-white-brand">
      {/* Background patterns could go here */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content */}
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

        {/* Right Content / Visuals */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative w-full aspect-square">
            {/* Main Image Frame */}
            <div className="absolute inset-0 border-4 border-blue-brand bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Mapa Logístico MDP"
                fill
                className="object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-blue-brand/10 mix-blend-multiply" />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 brutalist-card p-4 bg-blue-brand text-white z-20"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase">Estado</span>
                <span className="font-black text-xl italic">EN TRÁNSITO</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 brutalist-card p-4 bg-gold-brand text-blue-brand z-20"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-tighter">Seguridad</span>
                  <span className="font-black text-xl italic">VERIFICADO</span>
                </div>
              </div>
            </motion.div>

            {/* Simulated 3D Elements (Cajas) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-blue-brand bg-white/80 backdrop-blur-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
               <Zap className="w-24 h-24 text-blue-brand animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
