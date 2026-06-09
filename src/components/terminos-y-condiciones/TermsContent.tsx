export default function TermsContent() {
  const sections = [
    {
      title: "1. Aceptación de los Términos",
      content: "Al acceder y utilizar los servicios de Envios DosRuedas, el usuario acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de los términos, no deberá utilizar nuestros servicios."
    },
    {
      title: "2. Descripción del Servicio",
      content: "Envios DosRuedas proporciona una plataforma de logística y mensajería urbana en Mar del Plata. Nuestros servicios incluyen envíos Express, LowCost, Flex y planes para emprendedores (3PL)."
    },
    {
      title: "3. Obligaciones del Usuario",
      content: "El usuario se compromete a proporcionar información veraz y completa sobre los envíos, incluyendo direcciones exactas, contenido de los paquetes y datos de contacto. Queda prohibido el envío de sustancias ilegales o peligrosas."
    },
    {
      title: "4. Tarifas y Pago",
      content: "Las tarifas se calculan en base a la distancia y tipo de servicio seleccionado. Los pagos deben realizarse por los canales autorizados. En el caso de cuentas corrientes, la falta de pago puede resultar en la suspensión del servicio."
    },
    {
      title: "5. Limitación de Responsabilidad",
      content: "Envios DosRuedas no se hace responsable por retrasos causados por fuerza mayor, condiciones climáticas extremas o información incorrecta proporcionada por el usuario. La responsabilidad sobre el contenido recae sobre el remitente."
    },
    {
      title: "6. Modificaciones de los Términos",
      content: "Nos reservamos el derecho de actualizar estos términos en cualquier momento. La continuación en el uso del servicio constituye la aceptación de los nuevos términos."
    }
  ];

  return (
    <div className="bg-white/5 border border-white/10 p-10 md:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-gold-brand uppercase tracking-[0.3em]">
        LEGAL_DOC_TERMS_V1.0
      </div>
      
      <div className="mb-12 border-b border-white/10 pb-8">
        <p className="font-mono text-xs text-gold-brand mb-2 uppercase tracking-widest font-bold">Acuerdo de Servicio</p>
        <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tighter">Términos y Condiciones</h2>
        <p className="font-display text-[10px] text-white-brand/40 uppercase mt-4">Última actualización: 1 de Agosto de 2024</p>
      </div>

      <div className="space-y-12">
        {sections.map((s, i) => (
          <section key={i} className="group">
            <h3 className="font-display text-xl text-white uppercase mb-4 group-hover:text-gold-brand transition-colors">
              {s.title}
            </h3>
            <p className="font-display text-sm text-white-brand/60 leading-relaxed max-w-4xl">
              {s.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
