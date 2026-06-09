"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, ChevronDown, Mail, Phone, Calculator, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white border-b-4 border-blue-brand sticky top-0 z-50">
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
              />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase leading-none text-blue-brand">
              Envíos <br /> DosRuedas
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase font-bold text-blue-brand ml-12 -mt-1">
            tu solución confiable
          </span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-xs font-black uppercase tracking-widest">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-brand transition-colors">
            <Home className="w-4 h-4" />
            Inicio
          </Link>

          {/* Nosotros Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-brand transition-colors py-4">
            <span className="flex items-center gap-1">Nosotros <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" /></span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white border-4 border-blue-brand p-4 space-y-3 min-w-[220px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 rounded-none text-left">
              <Link href="/nosotros/sobre-nosotros" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Sobre Nosotros
              </Link>
              <Link href="/nosotros/preguntas-frecuentes" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Preguntas Frecuentes
              </Link>
              <Link href="/nosotros/nuestras-redes" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Nuestras Redes
              </Link>
            </div>
          </div>

          {/* Servicios Dropdown */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-brand transition-colors py-4">
            <span className="flex items-center gap-1">Servicios <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" /></span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white border-4 border-blue-brand p-4 space-y-3 min-w-[260px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 rounded-none text-left">
              <Link href="/servicios/envios-express" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Envíos Express
              </Link>
              <Link href="/servicios/envios-lowcost" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Envíos LowCost
              </Link>
              <Link href="/servicios/enviosflex" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Envíos Flex (MeLi)
              </Link>
              <Link href="/servicios/plan-emprendedores" className="block text-blue-brand hover:text-gold-brand hover:bg-blue-brand/5 p-2 transition-colors font-mono">
                Plan Emprendedores
              </Link>
            </div>
          </div>

          <Link href="/contacto" className="flex items-center gap-1 hover:text-blue-brand transition-colors">
            <Mail className="w-4 h-4" />
            Contacto
          </Link>
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+5492236602699"
            className="font-technical text-off-white hover:text-accent transition-colors flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-white-brand border-4 border-blue-brand flex items-center justify-center group-hover:bg-gold-brand transition-colors">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold text-blue-brand/50 uppercase leading-none">Llamanos ahora</span>
              <span className="font-black text-sm text-blue-brand">+54 223 660-2699</span>
            </div>
          </a>
          <Link
            href="/cotizar/express"
            className="bg-accent text-dark-navy px-5 py-2.5 font-technical uppercase font-bold hover:bg-white transition-colors flex items-center gap-2 border border-accent"
          >
            <Calculator className="w-4 h-4" />
            <span>Cotizar Envío</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/cotizar/express"
            className="bg-accent text-dark-navy p-2 hover:bg-white transition-colors border border-accent"
          >
            <Calculator className="w-4 h-4" />
          </Link>
          <button onClick={toggleMenu} className="text-white hover:text-accent focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/30 mt-4 py-4 space-y-4 font-technical text-sm text-off-white bg-dark-navy z-50 relative">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-primary/20 hover:text-accent transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-primary" />
            <span>Inicio</span>
          </Link>

          {/* NOSOTROS MOBILE ACCORDION */}
          <div className="px-4">
            <button
              onClick={() => toggleDropdown("nosotros")}
              className="w-full text-left py-2 hover:text-accent flex justify-between items-center uppercase"
            >
              <span>Nosotros</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "nosotros" ? "rotate-185" : ""}`} />
            </button>
            {activeDropdown === "nosotros" && (
              <div className="pl-4 mt-2 space-y-2 border-l border-primary/20">
                <Link
                  href="/nosotros/sobre-nosotros"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="/nosotros/preguntas-frecuentes"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
                <Link
                  href="/nosotros/nuestras-redes"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Nuestras Redes
                </Link>
              </div>
            )}
          </div>

          {/* SERVICIOS MOBILE ACCORDION */}
          <div className="px-4">
            <button
              onClick={() => toggleDropdown("servicios")}
              className="w-full text-left py-2 hover:text-accent flex justify-between items-center uppercase"
            >
              <span>Servicios</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "servicios" ? "rotate-185" : ""}`} />
            </button>
            {activeDropdown === "servicios" && (
              <div className="pl-4 mt-2 space-y-2 border-l border-primary/20">
                <Link
                  href="/servicios/envios-express"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Envíos Express
                </Link>
                <Link
                  href="/servicios/envios-lowcost"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Envíos LowCost
                </Link>
                <Link
                  href="/servicios/enviosflex"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Envíos Flex (MeLi)
                </Link>
                <Link
                  href="/servicios/plan-emprendedores"
                  onClick={toggleMenu}
                  className="block py-2 text-xs hover:text-accent transition-colors"
                >
                  Plan Emprendedores (3PL)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contacto"
            onClick={toggleMenu}
            className="block px-4 py-2 hover:bg-primary/20 hover:text-accent transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>Contacto</span>
          </Link>

          <div className="border-t border-primary/10 pt-4 px-4 flex flex-col gap-4">
            <a
              href="tel:+5492236602699"
              className="hover:text-accent transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-accent animate-pulse" />
              <span>+54 223 660-2699</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
