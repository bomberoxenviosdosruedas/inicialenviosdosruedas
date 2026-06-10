import { SocialPost, SocialPlatformEnum } from "@/generated/prisma/client";
import { Heart, MessageSquare, Share2, ExternalLink, MessageCircle } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

interface SocialProofTickerProps {
  posts: SocialPost[];
}

export default function SocialProofTicker({ posts }: SocialProofTickerProps) {
  // If there are no posts in the database, we use fallback posts to ensure the UI is populated
  const displayPosts: SocialPost[] = posts.length > 0 ? posts : [
    {
      id: 1,
      platform: SocialPlatformEnum.instagram,
      userName: "Envios DosRuedas",
      userAvatar: "/LogoEnviosDosRuedas.webp",
      userUrl: "https://www.instagram.com/enviosdosruedas/",
      content: "¡Flota activa bajo la lluvia! En Mar del Plata el clima cambia, pero nuestro compromiso no. Entregas Express garantizadas en 2 horas.",
      postUrl: "https://www.instagram.com/enviosdosruedas/",
      imageUrl: null,
      imageHint: null,
      likes: 42,
      comments: 12,
      shares: 5,
      timestamp: new Date()
    },
    {
      id: 2,
      platform: SocialPlatformEnum.facebook,
      userName: "Envios DosRuedas",
      userAvatar: "/LogoEnviosDosRuedas.webp",
      userUrl: "https://facebook.com/enviosdosruedas",
      content: "Acelerá tu e-commerce con MercadoLibre Flex. Te ayudamos a despachar en el día y mantener tu reputación en verde.",
      postUrl: "https://facebook.com/enviosdosruedas",
      imageUrl: null,
      imageHint: null,
      likes: 88,
      comments: 19,
      shares: 14,
      timestamp: new Date()
    }
  ];

  const socialFeeds = [
    {
      platform: "Instagram",
      label: "@enviosdosruedas",
      link: "https://www.instagram.com/enviosdosruedas/",
      icon: Heart,
      color: "bg-pink-600"
    },
    {
      platform: "Facebook",
      label: "Envios DosRuedas",
      link: "https://facebook.com/enviosdosruedas",
      icon: MessageCircle,
      color: "bg-blue-600"
    },
    {
      platform: "WhatsApp",
      label: "Soporte MDP",
      link: "https://wa.me/542236602699",
      icon: MessageSquare,
      color: "bg-green-600"
    }
  ];

  // Images for the infinite scroll ticker
  const tickerImages = [
    "/redes/fac1.webp",
    "/redes/ig1.webp",
    "/redes/ig3.webp",
    "/redes/ig4.webp",
    "/redes/fac2.webp",
    "/redes/ig2.webp"
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 border-2 border-white">
              <Heart className="w-4 h-4 text-white fill-white" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Conecta con nosotros</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              SIGUE NUESTRO <br />
              <span className="text-secondary">MOVIMIENTO</span>
            </h2>
          </div>
          <p className="font-body text-foreground/50 max-w-md">
            Unite a nuestra comunidad digital. Seguí en tiempo real la actividad de nuestra flota y enterate de novedades logísticas.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {socialFeeds.map((feed, i) => (
            <Link
              key={i}
              href={feed.link}
              target="_blank"
              className="brutalist-card bg-white text-primary p-4 flex items-center gap-4 hover:bg-secondary transition-colors group"
            >
              <div className={`p-2 border-2 border-primary ${feed.color} text-white`}>
                <feed.icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm uppercase tracking-tighter leading-none">{feed.platform}</span>
                <span className="font-mono text-[10px] uppercase font-bold text-primary/50">{feed.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Infinite Ticker */}
      <div className="relative flex overflow-x-hidden border-y-4 border-white bg-white py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {tickerImages.concat(tickerImages).map((src, i) => (
            <div key={i} className="mx-4 relative w-64 aspect-square brutalist-card group overflow-hidden bg-background">
              <Image
                src={src}
                alt={`Social post ${i}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-white text-primary border-4 border-primary px-6 py-2 font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                  VER POST
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => {
            const isInstagram = post.platform === SocialPlatformEnum.instagram;
            return (
              <div 
                key={post.id} 
                className="group brutalist-card bg-white text-primary p-6 flex flex-col justify-between hover:bg-background transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2 bg-primary text-[9px] font-mono text-white border-b-2 border-l-2 border-primary uppercase">
                  {post.platform}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white border-2 border-primary rounded-full flex items-center justify-center font-display text-xs text-primary">
                      {isInstagram ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
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
                      <h4 className="font-black text-xs text-primary tracking-wider">
                        {post.userName}
                      </h4>
                      <p className="font-mono text-[10px] text-primary/50">
                        {new Date(post.timestamp).toLocaleDateString("es-AR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </p>
                    </div>
                  </div>

                  <p className="font-display text-sm text-primary/80 font-bold uppercase tracking-tight mb-6 italic leading-relaxed">
                    &quot;{post.content}&quot;
                  </p>
                </div>

                <div className="border-t-2 border-primary pt-4 mt-auto">
                  <div className="flex justify-between items-center text-xs text-primary/50 font-mono">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart className="w-3.5 h-3.5" /> {post.likes || 0}
                      </span>
                      <span className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" /> {post.comments || 0}
                      </span>
                      <span className="flex items-center gap-1 hover:text-green-500 transition-colors">
                        <Share2 className="w-3.5 h-3.5" /> {post.shares || 0}
                      </span>
                    </div>

                    <a 
                      href={post.postUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary flex items-center gap-1 font-mono text-[10px] uppercase font-bold hover:underline transition-colors"
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
