export default function SocialGrid() {
  const networks = [
    { name: "Instagram", desc: "Mirá nuestras historias y novedades diarias.", cta: "SEGUIR EN INSTAGRAM", color: "bg-blue-brand" },
    { name: "Facebook", desc: "Unite a nuestra comunidad de comercios.", cta: "UNIRSE EN FACEBOOK", color: "bg-gold-brand text-blue-brand" },
    { name: "WhatsApp", desc: "Canal oficial para estados y atención rápida.", cta: "SUSCRIBIRSE", color: "bg-white text-blue-brand" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      {networks.map((net) => (
        <div key={net.name} className="border border-white/10 p-12 flex flex-col items-center text-center hover:bg-white/5 transition-colors group">
          <div className="w-16 h-16 border-2 border-white/20 mb-8 flex items-center justify-center group-hover:border-blue-brand transition-colors">
             <span className="font-display text-4xl text-white">{net.name[0]}</span>
          </div>
          <h3 className="font-display text-3xl text-white uppercase mb-4 tracking-tighter">{net.name}</h3>
          <p className="font-display text-sm text-white-brand/50 mb-10 h-12">
            {net.desc}
          </p>
          <button className={`w-full py-4 font-mono text-sm uppercase font-bold tracking-widest ${net.color} transition-transform hover:scale-105`}>
            {net.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
