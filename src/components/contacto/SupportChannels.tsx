export default function SupportChannels() {
  const channels = [
    { name: "WhatsApp Directo", info: "+54 223 660-2699", desc: "Chateá con nosotros para una respuesta instantánea y coordinación de envíos.", cta: "ABRIR WHATSAPP", type: "WA" },
    { name: "Correo Oficial", info: "matiascejas@enviosdosruedas.com", desc: "Envianos tus consultas corporativas, reclamos o solicitudes de presupuesto.", cta: "ENVIAR EMAIL", type: "MAIL" },
    { name: "Ubicación", info: "Friuli 1972, Mar del Plata", desc: "Visitanos en nuestra base operativa central en el corazón de la ciudad.", cta: "VER EN MAPA", type: "MAP" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-24">
      {channels.map((chan) => (
        <div key={chan.name} className="border border-white/10 p-12 flex flex-col hover:bg-white/5 transition-colors group">
          <div className="font-technical text-[10px] text-primary mb-8 uppercase tracking-[0.3em]">{chan.type}_CHANNEL_ACTIVE</div>
          <h3 className="font-display text-3xl text-white uppercase mb-4 tracking-tighter">{chan.name}</h3>
          <p className="font-display text-xl text-primary mb-6">{chan.info}</p>
          <p className="font-body text-xs text-off-white/40 mb-10 flex-1 leading-relaxed">
            {chan.desc}
          </p>
          <button className="w-full py-4 border-2 border-white/10 font-technical text-xs uppercase font-bold tracking-widest text-white group-hover:border-primary group-hover:bg-primary transition-all">
            {chan.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
