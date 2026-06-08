export default function Footer() {
  return (
    <footer className="bg-dark-navy border-t border-electric-blue/30 py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div>
          <h3 className="font-display text-xl text-vivid-gold mb-4">ENVÍOS DOSRUEDAS</h3>
          <p className="font-body text-sm text-off-white/70">Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos.</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-technical text-off-white mb-3">Nosotros</h4>
            <ul className="font-body text-sm text-off-white/70 space-y-2">
              <li><a href="/nosotros/sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="/nosotros/preguntas-frecuentes">Preguntas Frecuentes</a></li>
              <li><a href="/nosotros/nuestras-redes">Nuestras Redes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-technical text-off-white mb-3">Servicios</h4>
            <ul className="font-body text-sm text-off-white/70 space-y-2">
              <li><a href="/servicios/envios-express">Envíos Express</a></li>
              <li><a href="/servicios/envios-lowcost">Envíos LowCost</a></li>
              <li><a href="/servicios/enviosflex">Envíos Flex (MeLi)</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-technical text-off-white mb-3">Contacto Rápido</h4>
          <p className="font-body text-sm text-off-white/70">Friuli 1972, Mar del Plata</p>
          <p className="font-body text-sm text-off-white/70">+54 223 660-2699</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-electric-blue/20 text-center font-body text-xs text-off-white/50">
        © 2025 Envios DosRuedas. Todos los derechos reservados.
      </div>
    </footer>
  );
}