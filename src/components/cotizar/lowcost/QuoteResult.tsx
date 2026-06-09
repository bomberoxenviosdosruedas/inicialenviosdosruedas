"use client";

export default function QuoteResult() {
  return (
    <div className="border-2 border-blue-brand p-8 bg-blue-brand h-full">
      <div className="mb-8 border-b border-blue-brand/30 pb-4 flex justify-between items-end">
        <div>
          <h3 className="font-display text-2xl text-blue-brand uppercase tracking-tighter">
            Resultado de Cotización
          </h3>
          <p className="font-display text-xs text-white-brand/60 uppercase">Step_02: Economy_Metrics</p>
        </div>
        <div className="bg-blue-brand px-2 py-1">
          <span className="font-mono text-xs text-white font-bold">LOW_COST_VAL</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Distancia", value: "8.5 KM", color: "text-white" },
            { label: "Tiempo Estimado", value: "2 HS+", color: "text-white" },
            { label: "Total Estimado", value: "$2.900", color: "text-blue-brand" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 p-4">
              <p className="font-mono text-[10px] text-white-brand/40 uppercase mb-1">{item.label}</p>
              <p className={`font-display text-2xl ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-l-4 border-gold-brand bg-gold-brand/5">
          <p className="font-display text-xs text-white-brand/80 leading-relaxed">
            Valores estimados basados en la ruta más óptima para envíos económicos. Estos envíos se programan según disponibilidad de flota.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="flex-1 bg-blue-brand text-white py-4 font-mono text-lg uppercase font-bold hover:bg-white hover:text-blue-brand transition-all">
            Confirmar Envío
          </button>
          <button className="flex-1 border border-white/30 text-white py-4 font-mono text-lg uppercase hover:bg-white/10 transition-all">
            Volver a cotizar
          </button>
        </div>
      </div>
    </div>
  );
}
