export default function ContactForm() {
  return (
    <div className="bg-primary border-2 border-primary p-10 md:p-16">
      <div className="mb-10 text-center">
        <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2">HABLEMOS DE TU PROYECTO</h3>
        <p className="font-display text-xs text-background/40 uppercase tracking-widest">Inicia tu proceso de alta logística</p>
      </div>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-primary uppercase tracking-widest block">Nombre Completo</label>
          <input type="text" className="w-full bg-white/5 border border-white/10 p-4 font-display text-white focus:border-primary outline-none transition-colors" placeholder="Ej: Juan Perez" />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-primary uppercase tracking-widest block">Email Corporativo</label>
          <input type="email" className="w-full bg-white/5 border border-white/10 p-4 font-display text-white focus:border-primary outline-none transition-colors" placeholder="juan@empresa.com" />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-primary uppercase tracking-widest block">Nombre de tu Marca</label>
          <input type="text" className="w-full bg-white/5 border border-white/10 p-4 font-display text-white focus:border-primary outline-none transition-colors" placeholder="Tu Marca E-Commerce" />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] text-primary uppercase tracking-widest block">Volumen Mensual Est.</label>
          <select className="w-full bg-white/5 border border-white/10 p-4 font-display text-white focus:border-primary outline-none transition-colors appearance-none">
            <option className="bg-primary">Menos de 50 envíos</option>
            <option className="bg-primary">50 - 200 envíos</option>
            <option className="bg-primary">Más de 200 envíos</option>
          </select>
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="font-mono text-[10px] text-primary uppercase tracking-widest block">Mensaje / Requerimientos</label>
          <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 font-display text-white focus:border-primary outline-none transition-colors" placeholder="Contanos brevemente sobre tus necesidades logísticas..." />
        </div>
        <div className="md:col-span-2">
           <button className="w-full bg-primary text-white py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-primary transition-all">
             ENVIAR SOLICITUD DE ALTA
           </button>
        </div>
      </form>
    </div>
  );
}
