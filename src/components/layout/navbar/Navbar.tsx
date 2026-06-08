import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-dark-navy border-b border-electric-blue/30 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="font-display text-2xl text-vivid-gold">ENVÍOS DOSRUEDAS</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-technical text-off-white">
        <Link href="/">Inicio</Link>
        <Link href="/servicios/envios-express">Servicios</Link>
        <Link href="/nosotros/sobre-nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>
      </div>

      <div className="flex gap-4 items-center">
        <a href="tel:+542236602699" className="hidden lg:block font-technical text-off-white">+54 223 660-2699</a>
        <Link href="/cotizar/express" className="bg-vivid-gold text-dark-navy px-4 py-2 font-technical uppercase font-bold hover:bg-white transition-colors">
          Cotizar Envío
        </Link>
      </div>
    </nav>
  );
}