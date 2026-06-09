"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Calculator, ChevronDown, Home, Menu, X } from "lucide-react";

/**
 * Navbar Optimizada - Envíos Dos Ruedas
 * Estilo Industrial Brutalist
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b-4 border-slate-950 sticky top-0 z-50">
      <div className="container mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Image
                src="/LogoEnviosDosRuedas.webp"
                alt="Envíos Dos Ruedas Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase leading-none text-slate-950">
              Envíos <br /> Dosruedas
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold text-primary ml-12 -mt-1 lowercase">
            tu solución confiable
          </span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-xs font-black uppercase tracking-widest">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors duration-200">
            <Home className="w-4 h-4" />
            Inicio
          </Link>

          {/* Nosotros Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-primary transition-colors duration-200 focus:outline-none">
              Nosotros <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-56 bg-white border-4 border-slate-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
              <div className="flex flex-col text-slate-950 font-mono text-xs font-black">
                <Link href="/nosotros/sobre-nosotros" className="px-4 py-3 border-b-2 border-slate-950 hover:bg-yellow-400 transition-colors">
                  Sobre Nosotros
                </Link>
                <Link href="/nosotros/preguntas-frecuentes" className="px-4 py-3 border-b-2 border-slate-950 hover:bg-yellow-400 transition-colors">
                  Preguntas Frecuentes
                </Link>
                <Link href="/nosotros/nuestras-redes" className="px-4 py-3 hover:bg-yellow-400 transition-colors">
                  Nuestras Redes
                </Link>
              </div>
            </div>
          </div>

          {/* Servicios Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-primary transition-colors duration-200 focus:outline-none">
              Servicios <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-64 bg-white border-4 border-slate-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
              <div className="flex flex-col text-slate-950 font-mono text-xs font-black">
                <Link href="/servicios/envios-express" className="px-4 py-3 border-b-2 border-slate-950 hover:bg-yellow-400 transition-colors">
                  Envíos Express
                </Link>
                <Link href="/servicios/envios-lowcost" className="px-4 py-3 border-b-2 border-slate-950 hover:bg-yellow-400 transition-colors">
                  Envíos LowCost
                </Link>
                <Link href="/servicios/enviosflex" className="px-4 py-3 border-b-2 border-slate-950 hover:bg-yellow-400 transition-colors">
                  Envíos Flex
                </Link>
                <Link href="/servicios/plan-emprendedores" className="px-4 py-3 hover:bg-yellow-400 transition-colors">
                  E-Commerce & 3PL
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contacto" className="flex items-center gap-1 hover:text-primary transition-colors duration-200">
            <Mail className="w-4 h-4" />
            Contacto
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+5492236602699"
            className="hidden xl:flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-slate-100 border-4 border-slate-950 flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
              <Phone className="w-5 h-5 text-slate-950 group-hover:animate-bounce" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] font-bold text-slate-500 uppercase leading-none">Llamanos ahora</span>
              <span className="font-black text-sm text-slate-950 hover:text-primary transition-colors">+54 223 660-2699</span>
            </div>
          </a>

          <Link
            href="/cotizar/express"
            className="brutalist-button-primary flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 text-xs md:text-sm"
          >
            <Calculator className="w-4.5 h-4.5" />
            <span className="hidden sm:inline">Cotizar Envío</span>
            <span className="sm:hidden">Cotizar</span>
          </Link>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 bg-white border-4 border-slate-950 flex items-center justify-center hover:bg-yellow-400 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-slate-950" /> : <Menu className="w-6 h-6 text-slate-950" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white border-b-4 border-slate-950 transition-all duration-300">
          <div className="px-6 py-6 flex flex-col gap-6 font-mono text-sm font-black uppercase tracking-wider">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              Inicio
            </Link>

            {/* Nosotros Section in Mobile */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-slate-400 tracking-widest font-black uppercase border-b border-slate-200 pb-1">Nosotros</span>
              <Link
                href="/nosotros/sobre-nosotros"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/nosotros/preguntas-frecuentes"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                Preguntas Frecuentes
              </Link>
              <Link
                href="/nosotros/nuestras-redes"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                Nuestras Redes
              </Link>
            </div>

            {/* Servicios Section in Mobile */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-slate-400 tracking-widest font-black uppercase border-b border-slate-200 pb-1">Servicios</span>
              <Link
                href="/servicios/envios-express"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                Envíos Express
              </Link>
              <Link
                href="/servicios/envios-lowcost"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                Envíos LowCost
              </Link>
              <Link
                href="/servicios/enviosflex"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                Envíos Flex
              </Link>
              <Link
                href="/servicios/plan-emprendedores"
                onClick={() => setIsOpen(false)}
                className="pl-4 hover:text-primary transition-colors"
              >
                E-Commerce & 3PL
              </Link>
            </div>

            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contacto
            </Link>

            {/* Phone link inside mobile menu */}
            <a
              href="tel:+5492236602699"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 border-t-2 border-slate-950 pt-4 mt-2"
            >
              <div className="w-10 h-10 bg-slate-100 border-4 border-slate-950 flex items-center justify-center">
                <Phone className="w-5 h-5 text-slate-950 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] font-bold text-slate-500 uppercase leading-none">Llamanos ahora</span>
                <span className="font-black text-sm text-slate-950">+54 223 660-2699</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
