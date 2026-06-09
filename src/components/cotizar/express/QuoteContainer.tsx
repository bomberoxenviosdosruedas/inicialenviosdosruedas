"use client";

import { useState, useEffect } from "react";
import { getQuoteAction } from "@/app/actions/quote";
import { ArrowRight, Compass, Navigation, MapPin, Truck, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteContainer() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  const logs = [
    "DR_SYS: INICIANDO SECUENCIA DE RUTA...",
    "DR_SYS: RESOLVIENDO COORDENADAS GEOGRÁFICAS (MDP)...",
    "DR_SYS: APLICANDO MATRIZ DE PRECIOS BD [SERVICE=EXPRESS]...",
    "DR_SYS: OPTIMIZANDO TRÁFICO Y TIEMPO ESTIMADO...",
    "DR_SYS: RUTA SELECCIONADA CON EXITO. DESPLIEGUE LISTO."
  ];

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
      serviceType: "EXPRESS",
    });

    // We wait for the animation to finish
    setTimeout(() => {
      setCalculating(false);
      if (res.success) {
        setResult(res.data);
      } else {
        setError(res.error || "Error al calcular la cotización.");
      }
    }, 2000);
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setOrigin("");
    setDestination("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
      {/* FORM AND CONSOLE LOG PANEL */}
      <div className="lg:col-span-6 flex flex-col justify-between border-2 border-primary bg-dark-navy p-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 bg-primary/10 text-primary font-technical text-[10px] tracking-widest border-b border-l border-primary/30">
          SEC_CORE_v2.4
        </div>

        <div>
          <div className="mb-8 border-b border-primary/30 pb-4">
            <h3 className="font-display text-3xl text-white uppercase tracking-tighter flex items-center gap-2">
              <Compass className="text-accent w-6 h-6 animate-pulse" />
              Configuración de Ruta
            </h3>
            <p className="font-technical text-xs text-off-white/40 uppercase mt-1">
              INPUT_PARAMETERS / EXPRESS_ROUTING
            </p>
          </div>

          {!result && !calculating && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-technical text-xs text-accent uppercase tracking-widest block">
                  Punto de Origen (Dirección / Comercio)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    required
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="Ej: Av. Colón 1234, Mar del Plata"
                    className="w-full bg-white/5 border border-white/20 pl-12 pr-4 py-4 font-body text-sm text-white focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-off-white/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-technical text-xs text-accent uppercase tracking-widest block">
                  Punto de Destino (Cliente Final)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent">
                    <Navigation className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Ej: Friuli 1972, Mar del Plata"
                    className="w-full bg-white/5 border border-white/20 pl-12 pr-4 py-4 font-body text-sm text-white focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-off-white/30"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-400 font-body text-xs flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 font-technical text-xl uppercase font-bold hover:bg-accent hover:text-dark-navy transition-all relative overflow-hidden group/btn flex justify-center items-center gap-3"
              >
                <span>Calcular Cotización</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </form>
          )}

          {/* CALCULATING STAGE */}
          {calculating && (
            <div className="space-y-6 py-6">
              <div className="flex items-center gap-4 justify-center py-8">
                <Truck className="w-12 h-12 text-accent animate-bounce" />
                <div className="font-display text-2xl text-white uppercase tracking-wider">
                  Procesando Rango...
                </div>
              </div>

              {/* TERMINAL EMULATOR */}
              <div className="bg-black/80 border border-primary/30 p-4 font-body text-xs text-primary-light h-48 overflow-y-auto space-y-2">
                <p className="text-white font-technical border-b border-white/10 pb-1 mb-2">TELEMETRY_LOGS:</p>
                {terminalLogs.map((log, index) => (
                  <div key={index} className="flex gap-2 font-mono">
                    <span className="text-accent">{">"}</span>
                    <span className={index === terminalLogs.length - 1 ? "text-white animate-pulse" : "text-primary/80"}>
                      {log}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RESULT BLOCK */}
          {result && (
            <div className="space-y-6">
              <div className="p-4 bg-primary/10 border border-primary/30 flex items-center gap-3">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <div>
                  <p className="font-technical text-[10px] text-accent uppercase">Verificado</p>
                  <p className="font-body text-xs text-off-white/80">
                    Cálculo realizado con éxito basado en el ruteador de Mar del Plata.
                  </p>
                </div>
              </div>

              <div className="border border-white/10 p-6 bg-white/5 space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-technical text-xs text-off-white/40 uppercase">Punto A (Origen)</span>
                  <span className="font-body text-xs text-white max-w-[200px] truncate">{origin}</span>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <span className="font-technical text-xs text-off-white/40 uppercase">Punto B (Destino)</span>
                  <span className="font-body text-xs text-white max-w-[200px] truncate">{destination}</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full border border-white/30 text-white py-4 font-technical text-lg uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Nueva Cotización
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div className="border border-white/10 p-4 bg-white/5">
            <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Prioridad de Envío</p>
            <p className="font-body text-xs text-primary font-bold uppercase">ALTA_PRIORIDAD</p>
          </div>
          <div className="border border-white/10 p-4 bg-white/5">
            <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Rango Horario</p>
            <p className="font-body text-xs text-accent font-bold uppercase">2 HORAS EXACTAS</p>
          </div>
        </div>
      </div>

      {/* DYNAMIC MAP AND PRICING METRICS DISPLAY */}
      <div className="lg:col-span-6 flex flex-col justify-between border-2 border-accent bg-dark-navy p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 bg-accent/10 text-accent font-technical text-[10px] tracking-widest border-b border-l border-accent/30">
          EXPRESS_METRIC
        </div>

        <div className="h-full flex flex-col justify-between">
          <div className="mb-8 border-b border-accent/30 pb-4">
            <h3 className="font-display text-3xl text-accent uppercase tracking-tighter">
              Métricas & Ruta
            </h3>
            <p className="font-technical text-xs text-off-white/40 uppercase mt-1">
              Step_02: Output_Terminal
            </p>
          </div>

          {/* DYNAMIC SVG MAP OF MAR DEL PLATA */}
          <div className="relative aspect-video w-full bg-black/60 border border-white/10 mb-8 overflow-hidden flex items-center justify-center">
            {/* Grid background to give industrial tech map look */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-white" />
              ))}
            </div>

            {/* Coastal outline represent Mar del Plata coastline */}
            <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full text-white/5" fill="none">
              {/* Simplified MDP coastline path */}
              <path
                d="M 50,0 Q 120,40 180,80 T 260,160 T 320,220"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <text x="280" y="190" className="font-technical text-[8px] fill-white/20 tracking-wider">ATLÁNTICO</text>
              <text x="20" y="30" className="font-technical text-[8px] fill-white/20 tracking-wider">MGP_ZONE_COORD</text>
            </svg>

            {/* Interactive route overlay */}
            <AnimatePresence>
              {result ? (
                <svg viewBox="0 0 400 220" className="absolute inset-0 w-full h-full z-10" fill="none">
                  {/* Origin Point */}
                  <motion.circle
                    cx="120"
                    cy="140"
                    r="6"
                    className="fill-primary stroke-white stroke-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                  <motion.circle
                    cx="120"
                    cy="140"
                    r="14"
                    className="stroke-primary fill-none opacity-40"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <text x="105" y="125" className="font-technical text-[9px] fill-primary font-bold">PTO_A</text>

                  {/* Destination Point */}
                  <motion.circle
                    cx="280"
                    cy="70"
                    r="6"
                    className="fill-accent stroke-white stroke-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  />
                  <motion.circle
                    cx="280"
                    cy="70"
                    r="14"
                    className="stroke-accent fill-none opacity-40"
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  />
                  <text x="265" y="55" className="font-technical text-[9px] fill-accent font-bold">PTO_B</text>

                  {/* Route Line connecting them */}
                  <motion.path
                    d="M 120,140 Q 190,120 230,90 T 280,70"
                    stroke="#0022FF"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                  
                  {/* Glowing moving truck indicator */}
                  <motion.path
                    d="M 120,140 Q 190,120 230,90 T 280,70"
                    stroke="#FFD600"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, strokeDasharray: "15, 300" }}
                    animate={{ strokeDashoffset: -300 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  />
                </svg>
              ) : (
                <div className="text-center p-6 max-w-xs z-10 space-y-3">
                  <Compass className="w-8 h-8 text-white/30 mx-auto animate-spin" style={{ animationDuration: '6s' }} />
                  <p className="font-technical text-xs text-off-white/40 uppercase tracking-widest">
                    Esperando coordenadas de ruta...
                  </p>
                </div>
              )}
            </AnimatePresence>

            {/* Scale indicator */}
            <div className="absolute bottom-3 left-3 bg-dark-navy/90 border border-white/10 px-2 py-1 font-technical text-[8px] text-off-white/50 tracking-wider">
              SCALE: 1:50.000 / GRID_REF
            </div>
          </div>

          {/* PRICING BREAKDOWN */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 p-4">
                <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Distancia</p>
                <p className="font-display text-2xl text-white">
                  {result ? `${result.distanceKm} KM` : "0.0 KM"}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Tiempo Estimado</p>
                <p className="font-display text-2xl text-white">
                  {result ? `${result.durationMin} MIN` : "0 MIN"}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4">
                <p className="font-technical text-[10px] text-off-white/40 uppercase mb-1">Total Estimado</p>
                <p className="font-display text-2xl text-accent">
                  {result ? `$${result.price.toLocaleString("es-AR")}` : "$0"}
                </p>
              </div>
            </div>

            <div className="p-4 border-l-4 border-accent bg-accent/5">
              <p className="font-body text-xs text-off-white/70 leading-relaxed">
                {result 
                  ? "Esta tarifa de envío Express incluye prioridad de ruteo inmediata, rango horario cerrado de 2 horas y seguro de contenido básico."
                  : "Por favor, configure el origen y destino en el panel izquierdo para calcular el costo preciso del envío."}
              </p>
            </div>

            {result && (
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/542236602699?text=${encodeURIComponent(
                    `Hola! Quiero programar un Envío Express de ${origin} a ${destination}. Cotización: $${result.price} (${result.distanceKm} KM).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-accent text-dark-navy py-4 font-technical text-lg uppercase font-bold hover:bg-white transition-all block"
                >
                  Confirmar Envío
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
