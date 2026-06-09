export default function LocationInfo() {
  const schedule = [
    { day: "Lunes - Viernes", hours: "9:00 - 18:00" },
    { day: "Sábados", hours: "10:00 - 15:00" },
    { day: "Domingos", hours: "Cerrado" }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white/5 border border-white/10 p-10">
        <h3 className="font-display text-3xl text-white uppercase mb-8 tracking-tighter">Horarios de Atención</h3>
        <div className="space-y-4">
          {schedule.map((s, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
               <span className="font-mono text-sm text-white-brand/60 uppercase">{s.day}</span>
               <span className={`font-display text-xl ${s.hours === 'Cerrado' ? 'text-blue-brand' : 'text-white'}`}>{s.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-blue-brand">MAP_COORD_V4</div>
        <div className="inline-block bg-blue-brand px-2 py-0.5 mb-4">
          <span className="font-mono text-[10px] text-white uppercase font-bold">Ubicación</span>
        </div>
        <h3 className="font-display text-3xl text-white uppercase mb-4 tracking-tighter">Zona de Cobertura</h3>
        <p className="font-display text-sm text-white-brand/50 leading-relaxed mb-8">
          Operamos en toda la ciudad de Mar del Plata, con base operativa central lista para despachos inmediatos a cualquier punto del partido de Gral. Pueyrredón.
        </p>
        <button className="w-full border border-white/30 text-white py-4 font-mono text-sm uppercase font-bold hover:bg-white hover:text-blue-brand transition-all">
          Ver en OpenStreetMap
        </button>
      </div>
    </div>
  );
}
