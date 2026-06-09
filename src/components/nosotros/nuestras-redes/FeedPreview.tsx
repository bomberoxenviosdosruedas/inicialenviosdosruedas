import { SocialPost } from "@/generated/prisma/client";
import { Heart, ExternalLink } from "lucide-react";

interface FeedPreviewProps {
  posts: SocialPost[];
}

export default function FeedPreview({ posts }: FeedPreviewProps) {
  const displayPosts = posts.length > 0 ? posts : [
    { id: 1, platform: "instagram", timestamp: new Date(), content: "Nueva zona de cobertura habilitada en Sierra de los Padres! 🚀", likes: 124, postUrl: "https://www.instagram.com/enviosdosruedas/" },
    { id: 2, platform: "facebook", timestamp: new Date(), content: "Consejos para embalar tus envíos de e-commerce de forma segura.", likes: 89, postUrl: "https://facebook.com/enviosdosruedas" },
    { id: 3, platform: "instagram", timestamp: new Date(), content: "Conocé a Lucas, uno de nuestros repartidores estrella en la zona puerto.", likes: 256, postUrl: "https://www.instagram.com/enviosdosruedas/" },
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
        <a 
          href="https://www.instagram.com/enviosdosruedas/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 px-6 py-3 font-technical text-xs text-white uppercase tracking-widest hover:bg-white hover:text-dark-navy transition-colors cursor-pointer"
        >
          Seguir todas nuestras cuentas
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayPosts.map((post: any) => {
          const type = post.platform === "instagram" ? "IG" : "FB";
          const dateStr = new Date(post.timestamp).toLocaleDateString("es-AR", {
            day: "numeric",
            month: "short"
          });
          return (
            <div key={post.id} className="bg-white/5 border border-white/10 p-8 flex flex-col relative group overflow-hidden hover:border-primary transition-colors">
               <div className="absolute top-0 right-0 p-4 font-technical text-[10px] text-primary">
                 {type}_FEED_LIVE
               </div>
               <p className="font-technical text-[10px] text-off-white/40 uppercase mb-6">{dateStr}</p>
               <p className="font-body text-sm text-off-white/80 leading-relaxed flex-1 mb-8">
                 "{post.content}"
               </p>
               <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                     <Heart className="w-4 h-4 text-primary" />
                     <span className="font-technical text-xs text-white">{(post.likes || 0).toLocaleString("es-AR")} LIKES</span>
                  </div>
                  <a 
                    href={post.postUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-technical text-xs text-accent uppercase hover:underline flex items-center gap-1"
                  >
                    Ver Original <ExternalLink className="w-3 h-3" />
                  </a>
               </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
