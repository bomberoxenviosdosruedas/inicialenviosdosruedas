"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Zap, Globe, ArrowUpRight, Instagram, Facebook, MessageSquare } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/enviosdosruedas/" },
    { icon: Facebook, href: "https://facebook.com/enviosdosruedas" },
    { icon: MessageSquare, href: "https://wa.me/542236602699" }
  ];

  return (
    <footer className="bg-blue-brand text-white pt-24 pb-12 border-t-8 border-blue-brand">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex flex-col">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <Image
                    src="/LogoEnviosDosRuedas.webp"
                    alt="Envíos Dos Ruedas Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="font-black text-3xl tracking-tighter uppercase leading-none">
                  Envíos <br /> DosRuedas
                </span>
              </div>
              <span className="font-mono text-xs uppercase font-bold text-gold-brand ml-16 -mt-1">
                tu solución confiable
              </span>
            </Link>

            <p className="font-display text-sm text-white-brand font-bold uppercase tracking-tight max-w-sm">
              Soluciones de logística, mensajería, MercadoLibre Flex y Fulfillment 3PL para e-commerce y pymes en Mar del Plata.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 border-4 border-white flex items-center justify-center hover:bg-blue-brand transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-white/50 mb-8">Nosotros</h4>
              <ul className="space-y-4">
                {['Sobre Nosotros', 'Preguntas Frecuentes', 'Nuestras Redes'].map((item) => (
                  <li key={item}>
                    <Link href={`/nosotros/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-')}`} className="font-display text-sm font-bold uppercase tracking-tighter hover:text-gold-brand transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-white/50 mb-8">Servicios</h4>
              <ul className="space-y-4">
                {['Envíos Express', 'Envíos LowCost', 'Envíos Flex (MeLi)', 'E-Commerce & 3PL'].map((item) => (
                  <li key={item}>
                    <Link href={`/servicios/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, '-').replace(/[()]/g, '')}`} className="font-display text-sm font-bold uppercase tracking-tighter hover:text-gold-brand transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-white/50 mb-8">Contacto</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-white/50 font-bold">Ubicación</span>
                <span className="font-black text-sm uppercase italic">Mar del Plata, Argentina</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-white/50 font-bold">Teléfono</span>
                <span className="font-black text-sm">223-660-2699</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-white/50 font-bold">Email</span>
                <span className="font-black text-sm">matiascejas@enviosdosruedas.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { icon: ShieldCheck, text: "SEGURIDAD CERTIFICADA" },
            { icon: Zap, text: "VELOCIDAD MÁXIMA" },
            { icon: Globe, text: "COBERTURA DISTRITAL" },
            { icon: ArrowUpRight, text: "STATUS ONLINE" }
          ].map((banner, i) => (
            <div key={i} className="brutalist-card bg-white text-blue-brand p-4 flex flex-col items-center justify-center gap-2 text-center group hover:bg-gold-brand transition-colors">
              <banner.icon className="w-8 h-8 text-blue-brand group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[10px] font-black tracking-widest">{banner.text}</span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t-4 border-blue-brand flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-widest">
            © 2026 Envios DosRuedas. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="/politica-de-privacidad" className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-widest hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
