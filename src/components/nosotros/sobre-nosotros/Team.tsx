export default function Team() {
  const roles = [
    { name: "Equipo Directivo", count: "3" },
    { name: "Repartidores", count: "15+" },
    { name: "Atención al Cliente", count: "5" },
    { name: "Soporte Técnico", count: "4" }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl text-white uppercase tracking-tighter mb-6 leading-none">NUESTRO <br/> <span className="text-primary">EQUIPO</span></h2>
          <p className="font-display text-background/60 mb-8">Un equipo de profesionales apasionados por brindar el mejor servicio logístico de la ciudad, combinando experiencia de calle con innovación digital.</p>
          <div className="h-[1px] w-full bg-white/10" />
        </div>
        
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
           {roles.map((role, i) => (
             <div key={i} className="bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center">
                <span className="font-display text-5xl text-primary mb-2">{role.count}</span>
                <span className="font-mono text-xs text-white uppercase tracking-[0.2em]">{role.name}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
