export default function SupportCTA() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="bg-primary p-12 md:p-20 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,white_0,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter mb-6 leading-none">
            ¿No encontraste <br/> <span className="text-primary">lo que buscabas?</span>
          </h2>
          <p className="font-display text-white/80 text-lg mb-10">
            Nuestro equipo de soporte está listo para ayudarte con cualquier consulta específica sobre tus envíos o integraciones de negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-primary transition-all">
              CONTACTAR POR WHATSAPP
            </button>
            <button className="border-2 border-white text-white px-10 py-5 font-mono text-xl uppercase font-bold hover:bg-white hover:text-primary transition-all">
              ENVIAR UN TICKET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
