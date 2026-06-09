import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Zap, Globe, ArrowUpRight, MessageCircle } from "lucide-react";

// Helper icons for platforms not in this lucide version
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

/**
 * Footer - Envíos Dos Ruedas
 * Estilo Industrial Brutalist
 */
export default function Footer() {
  const socialLinks = [
    { icon: InstagramIcon, href: "https://www.instagram.com/enviosdosruedas/" },
    { icon: FacebookIcon, href: "https://facebook.com/enviosdosruedas" },
    { icon: MessageCircle, href: "https://wa.me/5492236602699" },
  ];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t-8 border-primary">
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
              <span className="font-mono text-xs uppercase font-bold text-accent ml-16 -mt-1">
                tu solución confiable
              </span>
            </Link>

            <p className="font-sans text-sm text-slate-400 font-bold uppercase tracking-tight max-w-sm">
              Soluciones de logística, mensajería, MercadoLibre Flex y Fulfillment 3PL para e-commerce y pymes en Mar del Plata.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 border-4 border-white flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Nosotros</h4>
              <ul className="space-y-4">
                {['Sobre Nosotros', 'Preguntas Frecuentes', 'Nuestras Redes'].map((item) => (
                  <li key={item}>
                    <Link href={`/nosotros/${item.toLowerCase().replace(/ /g, '-')}`} className="font-sans text-sm font-bold uppercase tracking-tighter hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Servicios</h4>
              <ul className="space-y-4">
                {['Envíos Express', 'Envíos LowCost', 'Envíos Flex (MeLi)', 'E-Commerce & 3PL'].map((item) => (
                  <li key={item}>
                    <Link href={`/servicios/${item.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '')}`} className="font-sans text-sm font-bold uppercase tracking-tighter hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="font-mono text-xs font-black uppercase tracking-[0.2em] text-primary mb-8">Contacto</h4>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-slate-500 font-bold">Ubicación</span>
                <span className="font-black text-sm uppercase italic">Mar del Plata, Argentina</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-slate-500 font-bold">Teléfono</span>
                <span className="font-black text-sm">223-660-2699</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-slate-500 font-bold">Email</span>
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
            <div key={i} className="brutalist-card bg-white text-slate-950 p-4 flex flex-col items-center justify-center gap-2 text-center group hover:bg-accent transition-colors">
              <banner.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[10px] font-black tracking-widest">{banner.text}</span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t-4 border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © 2026 Envios DosRuedas. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="/politica-de-privacidad" className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
