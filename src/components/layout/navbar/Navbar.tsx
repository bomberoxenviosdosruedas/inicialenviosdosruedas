"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-6 ${
      scrolled 
        ? "bg-dark-navy/90 border-b border-primary/30 py-4 backdrop-blur-md shadow-lg" 
        : "bg-transparent border-b border-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LOGO AND BRAND */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden w-10 h-10 rounded-full border border-primary/30 bg-white flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
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

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-technical text-sm text-off-white">
          <Link href="/" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Home className="w-4 h-4 text-primary" />
            <span>Inicio</span>
          </Link>

          {/* NOSOTROS DROPDOWN */}
          <div className="relative group/dropdown">
            <button className="flex items-center gap-1 hover:text-accent transition-colors cursor-pointer uppercase">
              <span>Nosotros</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-dark-navy border border-primary/30 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 z-50">
              <div className="flex flex-col p-2">
                <Link href="/nosotros/sobre-nosotros" className="p-2.5 hover:bg-primary/20 text-xs transition-colors">
                  Sobre Nosotros
                </Link>
                <Link href="/nosotros/preguntas-frecuentes" className="p-2.5 hover:bg-primary/20 text-xs transition-colors">
                  Preguntas Frecuentes
                </Link>
                <Link href="/nosotros/nuestras-redes" className="p-2.5 hover:bg-primary/20 text-xs transition-colors">
                  Nuestras Redes
                </Link>
              </div>
            </div>
          </div>

          {/* SERVICIOS DROPDOWN */}
          <div className="relative group/dropdown">
            <button className="flex items-center gap-1 hover:text-accent transition-colors cursor-pointer uppercase">
              <span>Servicios</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-dark-navy border border-primary/30 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 z-50">
              <div className="flex flex-col p-2">
                <Link href="/servicios/envios-express" className="p-2.5 hover:bg-primary/20 text-xs transition-colors border-b border-white/5">
                  Envíos Express
                </Link>
                <Link href="/servicios/envios-lowcost" className="p-2.5 hover:bg-primary/20 text-xs transition-colors border-b border-white/5">
                  Envíos LowCost
                </Link>
                <Link href="/servicios/enviosflex" className="p-2.5 hover:bg-primary/20 text-xs transition-colors border-b border-white/5">
                  Envíos Flex (MeLi)
                </Link>
                <Link href="/servicios/plan-emprendedores" className="p-2.5 hover:bg-primary/20 text-xs transition-colors">
                  Plan Emprendedores (3PL)
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contacto" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail className="w-4 h-4 text-primary" />
            <span>Contacto</span>
          </Link>
        </div>

        {/* RIGHT ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+5492236602699"
            className="font-technical text-off-white hover:text-accent transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-accent animate-pulse" />
            <span>+54 223 660-2699</span>
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
