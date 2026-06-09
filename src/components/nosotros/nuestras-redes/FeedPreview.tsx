export default function FeedPreview() {
  const posts = [
    { id: 1, type: "IG", date: "Hace 2h", content: "Nueva zona de cobertura habilitada en Sierra de los Padres! 🚀", likes: "124" },
    { id: 2, type: "FB", date: "Hace 5h", content: "Consejos para embalar tus envíos de e-commerce de forma segura.", likes: "89" },
    { id: 3, type: "IG", date: "Ayer", content: "Conocé a Lucas, uno de nuestros repartidores estrella en la zona puerto.", likes: "256" },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-tighter">
            LO ÚLTIMO EN <span className="text-primary">REDES</span>
          </h2>
          <p className="font-technical text-accent tracking-[0.2em] uppercase text-sm mt-2">
            Descubrí qué está pasando en nuestra comunidad en tiempo real.
          </p>
        </div>
        <div className="border border-white/20 px-6 py-3 font-technical text-xs text-white uppercase tracking-widest hover:bg-white hover:text-dark-navy transition-colors cursor-pointer">
          Seguir todas nuestras cuentas
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white/5 border border-white/10 p-8 flex flex-col relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 font-technical text-[10px] text-primary">
               {post.type}_FEED_LIVE
             </div>
             <p className="font-technical text-[10px] text-off-white/40 uppercase mb-6">{post.date}</p>
             <p className="font-body text-sm text-off-white/80 leading-relaxed flex-1 mb-8">
               {post.content}
             </p>
             <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-primary rounded-full" />
                   <span className="font-technical text-xs text-white">{post.likes} LIKES</span>
                </div>
                <button className="font-technical text-xs text-accent uppercase hover:underline">Ver Original</button>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
