"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-primary text-white p-12 text-center border-2 border-white">
        <h3 className="font-display text-4xl mb-4 uppercase">¡Mensaje Enviado!</h3>
        <p className="font-body text-sm mb-8">Tu consulta ha sido recibida correctamente. Un asesor se contactará con vos a la brevedad.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="font-technical text-sm uppercase underline tracking-widest"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 p-10 md:p-16">
      <div className="mb-10">
        <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2">Envianos un Mensaje</h3>
        <p className="font-body text-xs text-off-white/40 uppercase tracking-widest">Completá el formulario para una respuesta profesional</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-technical text-[10px] text-primary uppercase tracking-widest block">Nombre *</label>
          <input required type="text" className="w-full bg-dark-navy border border-white/10 p-4 font-body text-white focus:border-primary outline-none transition-colors" placeholder="Tu nombre" />
        </div>
        <div className="space-y-2">
          <label className="font-technical text-[10px] text-primary uppercase tracking-widest block">Email *</label>
          <input required type="email" className="w-full bg-dark-navy border border-white/10 p-4 font-body text-white focus:border-primary outline-none transition-colors" placeholder="tu@email.com" />
        </div>
        <div className="space-y-2">
          <label className="font-technical text-[10px] text-primary uppercase tracking-widest block">Mensaje *</label>
          <textarea required rows={5} className="w-full bg-dark-navy border border-white/10 p-4 font-body text-white focus:border-primary outline-none transition-colors" placeholder="Contanos sobre tu consulta o necesidad de envío..." />
        </div>
        <button 
          type="submit" 
          disabled={status === "sending"}
          className="w-full bg-primary text-white py-5 font-technical text-xl uppercase font-bold hover:bg-white hover:text-dark-navy transition-all disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  );
}
