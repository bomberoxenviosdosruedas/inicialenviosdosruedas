"use client";

import Link from "next/link";
import { ShieldCheck, Zap, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-navy border-t border-primary/30 py-16 px-6 relative overflow-hidden">
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-7xl mx-auto items-start pb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden w-10 h-10 rounded-full border border-primary/30 bg-white flex items-center justify-center">
              <img
                src="/LogoEnviosDosRuedas.webp"
                alt="Logo Envíos DosRuedas"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl text-white tracking-wider leading-none">
                ENVÍOS DOSRUEDAS
              </span>
              <span className="font-technical text-[9px] text-accent tracking-widest leading-none mt-0.5 lowercase">
                tu solución confiable
              </span>
            </div>
          </Link>

          <p className="font-body text-sm text-off-white/70 max-w-sm leading-relaxed">
            Tu solución confiable para mensajería y delivery en Mar del Plata. Ofrecemos infraestructura logística ágil, tecnológica y de alta precisión para e-commerce y empresas locales.
          </p>

          {/* Social Networks Icons */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.instagram.com/enviosdosruedas/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-colors bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com/enviosdosruedas"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary transition-colors bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-technical text-sm text-white uppercase tracking-wider mb-4 border-b border-primary/20 pb-2">Nosotros</h4>
            <ul className="font-body text-xs text-off-white/60 space-y-3">
              <li><Link href="/nosotros/sobre-nosotros" className="hover:text-accent transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/nosotros/preguntas-frecuentes" className="hover:text-accent transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link href="/nosotros/nuestras-redes" className="hover:text-accent transition-colors">Nuestras Redes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-technical text-sm text-white uppercase tracking-wider mb-4 border-b border-primary/20 pb-2">Servicios</h4>
            <ul className="font-body text-xs text-off-white/60 space-y-3">
              <li><Link href="/servicios/envios-express" className="hover:text-accent transition-colors">Envíos Express</Link></li>
              <li><Link href="/servicios/envios-lowcost" className="hover:text-accent transition-colors">Envíos LowCost</Link></li>
              <li><Link href="/servicios/enviosflex" className="hover:text-accent transition-colors">Envíos Flex (MeLi)</Link></li>
              <li><Link href="/servicios/plan-emprendedores" className="hover:text-accent transition-colors">E-Commerce & 3PL</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-technical text-sm text-white uppercase tracking-wider border-b border-primary/20 pb-2">Contacto Rápido</h4>
          <ul className="font-body text-xs text-off-white/60 space-y-3">
            <li>
              <span className="block text-[10px] font-technical text-accent">Base Operativa</span>
              <span>Friuli 1972, Mar del Plata, Argentina</span>
            </li>
            <li>
              <span className="block text-[10px] font-technical text-accent">Teléfono Directo</span>
              <a href="tel:+5492236602699" className="hover:text-white transition-colors">+54 223 660-2699</a>
            </li>
            <li>
              <span className="block text-[10px] font-technical text-accent">Correo Corporativo</span>
              <a href="mailto:matiascejas@enviosdosruedas.com" className="hover:text-white transition-colors">matiascejas@enviosdosruedas.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust banners at the bottom */}
      <div className="max-w-7xl mx-auto border-t border-primary/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-left">
        <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-primary transition-colors">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
          <span className="font-technical text-[9px] text-white font-bold uppercase tracking-wider">Seguridad Certificada</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-accent transition-colors">
          <Zap className="w-5 h-5 text-accent shrink-0" />
          <span className="font-technical text-[9px] text-white font-bold uppercase tracking-wider">Velocidad Máxima</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-accent transition-colors">
          <Globe className="w-5 h-5 text-accent shrink-0" />
          <span className="font-technical text-[9px] text-white font-bold uppercase tracking-wider">Cobertura Distrital</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 hover:border-primary transition-colors">
          <ArrowUpRight className="w-5 h-5 text-primary shrink-0 animate-pulse" />
          <span className="font-technical text-[9px] text-white font-bold uppercase tracking-wider">Status Online</span>
        </div>
      </div>

      {/* Copyright & Legales */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center font-body text-[10px] text-off-white/40 uppercase tracking-widest gap-4">
        <span>© 2026 Envios DosRuedas. Todos los derechos reservados.</span>
        <div className="flex gap-6">
          <Link href="/politica-de-privacidad" className="hover:text-accent transition-colors">Privacidad</Link>
          <Link href="/terminos-y-condiciones" className="hover:text-accent transition-colors">Términos</Link>
        </div>
      </div>
    </footer>
  );
}
