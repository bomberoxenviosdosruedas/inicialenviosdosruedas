import { SocialPost } from "@/generated/prisma/client";
import { Heart, MessageSquare, Share2, ExternalLink } from "lucide-react";

interface SocialProofTickerProps {
  posts: SocialPost[];
}

export default function SocialProofTicker({ posts }: SocialProofTickerProps) {
  // If there are no posts in the database, we use fallback posts to ensure the UI is populated
  const displayPosts = posts.length > 0 ? posts : [
    {
      id: 1,
      platform: "instagram",
      userName: "Envios DosRuedas",
      userAvatar: "/LogoEnviosDosRuedas.webp",
      userUrl: "https://www.instagram.com/enviosdosruedas/",
      content: "¡Flota activa bajo la lluvia! En Mar del Plata el clima cambia, pero nuestro compromiso no. Entregas Express garantizadas en 2 horas.",
      postUrl: "https://www.instagram.com/enviosdosruedas/",
      imageUrl: null,
      likes: 42,
      comments: 12,
      shares: 5,
      timestamp: new Date()
    },
    {
      id: 2,
      platform: "facebook",
      userName: "Envios DosRuedas",
      userAvatar: "/LogoEnviosDosRuedas.webp",
      userUrl: "https://facebook.com/enviosdosruedas",
      content: "Acelerá tu e-commerce con MercadoLibre Flex. Te ayudamos a despachar en el día y mantener tu reputación en verde.",
      postUrl: "https://facebook.com/enviosdosruedas",
      imageUrl: null,
      likes: 88,
      comments: 19,
      shares: 14,
      timestamp: new Date()
    }
  ];

  return (
    <section className="py-24 border-t border-electric-blue/20 bg-dark-navy relative overflow-hidden">
      {/* Decorative cyber grid line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="font-technical text-xs text-primary uppercase tracking-widest font-bold">
              COMUNIDAD Y TRAZABILIDAD
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase mt-2 tracking-tighter">
              Sigue Nuestro <span className="text-accent">Movimiento</span>
            </h2>
          </div>
          <p className="font-body text-off-white/50 max-w-md">
            Estamos integrados con las principales redes de Mar del Plata. Seguí en tiempo real la actividad de nuestra flota.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post: any) => {
            const isInstagram = post.platform === "instagram";
            return (
              <div 
                key={post.id} 
                className="group border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual anchor / Brand details */}
                <div className="absolute top-0 right-0 p-2 bg-white/5 text-[9px] font-technical text-off-white/30 border-b border-l border-white/10 uppercase">
                  {post.platform}_node
                </div>

                <div>
                  {/* Header info */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center font-display text-xs text-accent">
                      {isInstagram ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-accent">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h4 className="font-technical text-xs font-bold text-white tracking-wider">
                        {post.userName}
                      </h4>
                      <p className="font-body text-[10px] text-off-white/40">
                        {new Date(post.timestamp).toLocaleDateString("es-AR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="font-body text-sm text-off-white/80 leading-relaxed mb-6 italic">
                    "{post.content}"
                  </p>
                </div>

                {/* Footer Metrics & Redirect */}
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-xs text-off-white/50 font-technical">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 hover:text-red-400 transition-colors">
                        <Heart className="w-3.5 h-3.5" /> {post.likes || 0}
                      </span>
                      <span className="flex items-center gap-1 hover:text-primary transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" /> {post.comments || 0}
                      </span>
                      <span className="flex items-center gap-1 hover:text-accent transition-colors">
                        <Share2 className="w-3.5 h-3.5" /> {post.shares || 0}
                      </span>
                    </div>

                    <a 
                      href={post.postUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent flex items-center gap-1 font-technical text-[10px] uppercase font-bold hover:text-white transition-colors"
                    >
                      Ver post <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}