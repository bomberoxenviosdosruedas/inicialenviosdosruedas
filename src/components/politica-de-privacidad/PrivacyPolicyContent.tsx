export default function PrivacyPolicyContent() {
  const sections = [
    {
      title: "1. Información que Recopilamos",
      content: "Recopilamos información que nos proporcionas directamente cuando utilizas nuestros servicios, como tu nombre, dirección de correo electrónico, número de teléfono y direcciones de origen/destino para los envíos."
    },
    {
      title: "2. Uso de la Información",
      content: "Utilizamos la información recopilada para procesar tus envíos, comunicarnos contigo sobre el estado de los mismos, mejorar nuestros algoritmos de ruteo y enviarte actualizaciones relevantes si así lo autorizas."
    },
    {
      title: "3. Cómo Compartimos tu Información",
      content: "No vendemos tu información personal a terceros. Compartimos datos solo con proveedores de servicios necesarios para la operación logística (ej: servicios de geolocalización) bajo estrictos acuerdos de confidencialidad."
    },
    {
      title: "4. Datos de Seguridad",
      content: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, la alteración o la destrucción accidental."
    },
    {
      title: "5. Tus Derechos",
      content: "Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Podés contactarnos a través de nuestros canales oficiales para ejercer estos derechos."
    },
    {
      title: "6. Cambios en esta Política",
      content: "Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web."
    },
    {
      title: "7. Contacto",
      content: "Si tenés preguntas sobre esta Política de Privacidad, podés contactarnos en matiascejas@enviosdosruedas.com."
    }
  ];

  return (
    <div className="bg-white/5 border border-white/10 p-10 md:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 font-technical text-[10px] text-primary uppercase tracking-[0.3em]">
        LEGAL_DOC_PRIVACY_V1.0
      </div>
      
      <div className="mb-12 border-b border-white/10 pb-8">
        <p className="font-technical text-xs text-primary mb-2 uppercase tracking-widest font-bold">Documentación Legal</p>
        <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tighter">Detalles de nuestra política</h2>
        <p className="font-body text-[10px] text-off-white/40 uppercase mt-4">Última actualización: 1 de Agosto de 2024</p>
      </div>

      <div className="space-y-12">
        {sections.map((s, i) => (
          <section key={i} className="group">
            <h3 className="font-display text-xl text-white uppercase mb-4 group-hover:text-primary transition-colors">
              {s.title}
            </h3>
            <p className="font-body text-sm text-off-white/60 leading-relaxed max-w-4xl">
              {s.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
