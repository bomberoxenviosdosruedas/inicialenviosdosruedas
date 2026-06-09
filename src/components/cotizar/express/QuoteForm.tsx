"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [calculating, setCalculating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);
    // Simular cálculo
    setTimeout(() => setCalculating(false), 2000);
  };

  return (
    <div className="border-2 border-primary p-8 bg-dark-navy relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-2 bg-primary/10 text-primary font-technical text-[10px] tracking-widest">
        CFG_ROUTING_v1.0
      </div>
      
      <div className="mb-8 border-b border-primary/30 pb-4">
        <h3 className="font-display text-2xl text-white uppercase tracking-tighter">
          Configuración de Ruta
        </h3>
        <p className="font-body text-xs text-off-white/60 uppercase">Step_01: Input_Parameters</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-technical text-sm text-accent uppercase tracking-widest block">
            Punto de Origen
          </label>
          <input
            type="text"
            placeholder="Ej: Av. Colón 1234"
            className="w-full bg-white/5 border border-white/20 p-4 font-body text-white focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="font-technical text-sm text-accent uppercase tracking-widest block">
            Punto de Destino
          </label>
          <input
            type="text"
            placeholder="Ej: Juan B. Justo 5678"
            className="w-full bg-white/5 border border-white/20 p-4 font-body text-white focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={calculating}
          className="w-full bg-primary text-white py-5 font-technical text-xl uppercase font-bold hover:bg-white hover:text-dark-navy transition-all relative group overflow-hidden disabled:opacity-50"
        >
          <span className="relative z-10">
            {calculating ? "Calculando..." : "Calcular Cotización"}
          </span>
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
        </button>
      </form>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="border border-white/10 p-4 bg-white/5">
          <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Status_Signal</p>
          <p className="font-body text-xs text-primary font-bold">READY_FOR_INPUT</p>
        </div>
        <div className="border border-white/10 p-4 bg-white/5">
          <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Precision_Index</p>
          <p className="font-body text-xs text-accent font-bold">HIGH_RES_99%</p>
        </div>
      </div>
    </div>
  );
}
