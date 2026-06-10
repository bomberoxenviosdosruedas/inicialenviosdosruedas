"use client";

import { QuoteResult } from "@/lib/pricing";
import { useState, useEffect } from "react";
import { getQuoteAction } from "@/app/actions/quote";
import { RefreshCw } from "lucide-react";

const logs = [
  "DR_SYS: INICIANDO SECUENCIA DE RUTA...",
  "DR_SYS: RESOLVIENDO COORDENADAS GEOGRÁFICAS (MDP)...",
  "DR_SYS: APLICANDO MATRIZ DE PRECIOS BD [SERVICE=EXPRESS]...",
  "DR_SYS: OPTIMIZANDO TRÁFICO Y TIEMPO ESTIMADO...",
  "DR_SYS: RUTA SELECCIONADA CON EXITO. DESPLIEGUE LISTO."
];

export default function QuoteContainer() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    if (calculating && currentLogIndex < logs.length) {
      const timer = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, logs[currentLogIndex]]);
        setCurrentLogIndex((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [calculating, currentLogIndex]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) {
      setError("Por favor, ingresa origen y destino.");
      return;
    }

    setCalculating(true);
    setResult(null);
    setError(null);
    setTerminalLogs([logs[0]]);
    setCurrentLogIndex(1);

    const res = await getQuoteAction({
      origin,
      destination,
      serviceType: "EXPRESS"
    });

    if (res.success && res.data) {
      setResult(res.data);
    } else {
      setError(res.error || "Error al calcular la cotización.");
    }
    setCalculating(false);
  };

  const handleReset = () => {
    setOrigin("");
    setDestination("");
    setResult(null);
    setError(null);
    setTerminalLogs([]);
    setCurrentLogIndex(0);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 relative">
        <div className="mb-10">
          <h3 className="font-display text-3xl text-white uppercase tracking-tighter mb-2">Configuración de Ruta</h3>
          <p className="font-mono text-[10px] text-white-brand/40 uppercase tracking-widest">Step_01: Input_Parameters</p>
        </div>

        <div className="space-y-8">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-mono text-xs text-blue-brand uppercase tracking-widest block">Punto de Origen</label>
                <input
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  type="text"
                  placeholder="Ej: Av. Colón 1234"
                  className="w-full bg-blue-brand/20 border border-white/10 p-4 font-display text-white focus:border-blue-brand outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-blue-brand uppercase tracking-widest block">Punto de Destino</label>
                <input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                  placeholder="Ej: Juan B. Justo 5678"
                  className="w-full bg-blue-brand/20 border border-white/10 p-4 font-display text-white focus:border-blue-brand outline-none transition-colors"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 font-mono text-xs uppercase">
                  ERROR: {error}
                </div>
              )}

              <button
                type="submit"
                disabled={calculating}
                className="w-full bg-blue-brand text-white py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-blue-brand transition-all disabled:opacity-50"
              >
                {calculating ? "Calculando..." : "Calcular Cotización"}
              </button>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="p-6 bg-blue-brand/20 border border-blue-brand/30">
                 <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="font-mono text-[10px] text-white-brand/40 uppercase">Punto A</span>
                    <span className="font-display text-sm text-white">{origin}</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] text-white-brand/40 uppercase">Punto B</span>
                    <span className="font-display text-sm text-white">{destination}</span>
                 </div>
              </div>
              <button
                onClick={handleReset}
                className="w-full border border-white/20 text-white py-4 font-mono text-lg uppercase hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Nueva Cotización
              </button>
            </div>
          )}

          {calculating && (
             <div className="bg-black p-4 font-mono text-[10px] text-blue-brand h-32 overflow-hidden flex flex-col justify-end space-y-1 border border-blue-brand/30">
                {terminalLogs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span>&gt;</span>
                    <span className={i === terminalLogs.length - 1 ? "animate-pulse" : ""}>{log}</span>
                  </div>
                ))}
             </div>
          )}
        </div>
      </div>

      <div className="lg:col-span-6 border-2 border-blue-brand bg-blue-brand/5 p-8 relative overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-blue-brand">EXPRESS_VAL_CORE</div>

        <div className="mb-10 border-b border-blue-brand/20 pb-4">
           <h3 className="font-display text-3xl text-white uppercase tracking-tighter">Cotización Express</h3>
           <p className="font-mono text-[10px] text-white-brand/40 uppercase tracking-widest mt-1">Step_02: Output_Metrics</p>
        </div>

        <div className="flex-1 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 p-4">
                 <p className="font-mono text-[10px] text-white-brand/40 uppercase mb-1">Distancia</p>
                 <p className="font-display text-2xl text-white">{result ? `${result.distanceKm} KM` : "---"}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                 <p className="font-mono text-[10px] text-white-brand/40 uppercase mb-1">Tiempo</p>
                 <p className="font-display text-2xl text-white">{result ? `${result.durationMin} MIN` : "---"}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                 <p className="font-mono text-[10px] text-white-brand/40 uppercase mb-1">Total</p>
                 <p className="font-display text-2xl text-blue-brand">{result ? `$${result.price.toLocaleString("es-AR")}` : "---"}</p>
              </div>
           </div>

           <div className="p-6 border-l-4 border-blue-brand bg-blue-brand/10">
              <p className="font-display text-xs text-white-brand/70 leading-relaxed">
                 {result
                  ? "Esta tarifa de envío Express incluye prioridad de ruteo inmediata y entrega garantizada en un rango de 2 horas."
                  : "Por favor, configure el origen y destino para calcular el costo preciso del envío prioritario."}
              </p>
           </div>
        </div>

        {result && (
           <div className="mt-8">
              <a
                href={`https://wa.me/542236602699?text=Cotizacion%20Express:%20$${result.price}%20(${result.distanceKm}km)`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-blue-brand text-white py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-blue-brand transition-all"
              >
                Confirmar Envío
              </a>
           </div>
        )}
      </div>
    </div>
  );
}
