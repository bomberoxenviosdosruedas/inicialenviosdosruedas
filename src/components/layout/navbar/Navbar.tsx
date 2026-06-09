import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Calculator, ChevronDown, Home } from "lucide-react";

/**
 * Navbar Optimizada - Envíos Dos Ruedas
 * Estilo Industrial Brutalist
 */
export default function Navbar() {
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
              />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase leading-none text-slate-950">
              Envíos <br /> DosRuedas
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase font-bold text-primary ml-12 -mt-1">
            tu solución confiable
          </span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-xs font-black uppercase tracking-widest">
          <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            Inicio
          </Link>

          {/* Drops (simplified for this audit as links or buttons with indicator) */}
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
            Nosotros <ChevronDown className="w-3 h-3" />
          </div>

          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
            Servicios <ChevronDown className="w-3 h-3" />
          </div>

          <Link href="/contacto" className="flex items-center gap-1 hover:text-primary transition-colors">
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
            <div className="w-10 h-10 bg-slate-100 border-4 border-slate-950 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold text-slate-500 uppercase leading-none">Llamanos ahora</span>
              <span className="font-black text-sm text-slate-950">+54 223 660-2699</span>
            </div>
          </a>

          <Link
            href="/cotizar/express"
            className="brutalist-button-primary flex items-center gap-2 px-4 py-2 text-sm"
          >
            <Calculator className="w-4 h-4" />
            Cotizar Envío
          </Link>
        </div>
      </div>
    </nav>
  );
}
