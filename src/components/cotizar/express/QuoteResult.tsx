"use client";

export default function QuoteResult() {
  return (
    <div className="border-2 border-secondary p-8 bg-primary h-full">
      <div className="mb-8 border-b border-secondary/30 pb-4 flex justify-between items-end">
        <div>
          <h3 className="font-display text-2xl text-secondary uppercase tracking-tighter">
            Resultado de Cotización
          </h3>
          <p className="font-display text-xs text-background/60 uppercase">Step_02: Output_Metrics</p>
        </div>
        <div className="bg-secondary px-2 py-1">
          <span className="font-mono text-xs text-primary font-bold">EXPRESS_VAL</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Distancia", value: "8.5 KM", color: "text-white" },
            { label: "Tiempo Estimado", value: "25 MIN", color: "text-white" },
            { label: "Total Estimado", value: "$4.500", color: "text-secondary" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 border border-white/10 p-4">
              <p className="font-mono text-[10px] text-background/40 uppercase mb-1">{item.label}</p>
              <p className={`font-display text-2xl ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-l-4 border-primary bg-primary/5">
          <p className="font-display text-xs text-background/80 leading-relaxed">
            Valores estimados basados en la ruta más óptima. El precio final puede variar según condiciones de tráfico en tiempo real.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="flex-1 bg-secondary text-primary py-4 font-mono text-lg uppercase font-bold hover:bg-white transition-all">
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
