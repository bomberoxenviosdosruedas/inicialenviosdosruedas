export default function PricingGrid() {
  const tableData = [
    { zona: "Centro / Güemes", estandar: "$2.500", lowcost: "$1.800", ahorro: "28%" },
    { zona: "Puerto / Alem", estandar: "$3.200", lowcost: "$2.200", ahorro: "31%" },
    { zona: "Constitución", estandar: "$3.500", lowcost: "$2.400", ahorro: "31%" },
    { zona: "Periferia", estandar: "$4.800", lowcost: "$2.900", ahorro: "40%" },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
            COMPARATIVA <br/>
            <span className="text-accent">DE TARIFAS</span>
          </h2>
          <p className="font-body text-off-white/60 mt-4 max-w-xl">
            Transparencia total en nuestros precios. Sin sorpresas, sin cargos ocultos para que tu negocio crezca con previsibilidad.
          </p>
        </div>
        <div className="bg-accent px-6 py-4">
           <p className="font-technical text-dark-navy text-xl font-bold uppercase tracking-widest">
             AHORRO MÁX. 40%
           </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-2 border-white/10">
          <thead>
            <tr className="bg-white/5 border-b-2 border-white/10">
              <th className="font-technical text-sm text-off-white uppercase p-6 text-left tracking-widest">ZONA</th>
              <th className="font-technical text-sm text-off-white uppercase p-6 text-left tracking-widest">TARIFA ESTÁNDAR</th>
              <th className="font-technical text-sm text-accent uppercase p-6 text-left tracking-widest font-bold">TARIFA LOWCOST</th>
              <th className="font-technical text-sm text-primary uppercase p-6 text-left tracking-widest">AHORRO</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="font-display text-xl text-white p-6">{row.zona}</td>
                <td className="font-body text-sm text-off-white/40 p-6 line-through">{row.estandar}</td>
                <td className="font-display text-2xl text-accent p-6">{row.lowcost}</td>
                <td className="p-6">
                  <span className="bg-primary/20 text-primary font-technical text-xs px-3 py-1 border border-primary/30 uppercase font-bold">
                    -{row.ahorro}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-8 flex justify-end">
         <p className="font-body text-[10px] text-off-white/30 uppercase tracking-[0.2em]">
           * Valores referenciales para paquetes de hasta 2kg. Actualizado 2026.
         </p>
      </div>
    </section>
  );
}
