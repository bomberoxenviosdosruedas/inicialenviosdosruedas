import { SocialPost } from "@/generated/prisma/client";
import { Heart, MessageSquare, Share2, ExternalLink } from "lucide-react";

import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

  const quickLinks = [
    {
      name: "Instagram",
      desc: "Novedades diarias de la flota.",
      cta: "Ver Novedades",
      link: "https://www.instagram.com/enviosdosruedas/",
      platform: "instagram"
    },
    {
      name: "Facebook",
      desc: "Comunidad activa en MDP.",
      cta: "Unirse a Comunidad",
      link: "https://facebook.com/enviosdosruedas",
      platform: "facebook"
    },
    {
      name: "WhatsApp",
      desc: "Atención inmediata para soporte.",
      cta: "Chatear Ahora",
      link: "https://wa.me/542236602699",
      platform: "whatsapp"
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

  // Duplicate the array to create a seamless infinite loop
  const doubleTickerImages = [...tickerImages, ...tickerImages];

  return (
    <section className="py-24 bg-blue-brand text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-brand px-4 py-2 border-2 border-white">
              <Heart className="w-4 h-4 text-white fill-white" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Conecta con nosotros</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              SIGUE NUESTRO <br />
              <span className="text-gold-brand">MOVIMIENTO</span>
            </h2>
          </div>
          <p className="font-body text-off-white/50 max-w-md">
            Unite a nuestra comunidad digital. Seguí en tiempo real la actividad de nuestra flota y enterate de novedades logísticas.
          </p>
        </div>

          <div className="flex flex-wrap gap-4">
            {socialFeeds.map((feed, i) => (
              <Link
                key={i}
                href={feed.link}
                target="_blank"
                className="brutalist-card bg-white text-blue-brand p-4 flex items-center gap-4 hover:bg-gold-brand transition-colors group"
              >
                <div className={`p-2 border-2 border-blue-brand ${feed.color} text-white`}>
                  <feed.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-sm uppercase tracking-tighter leading-none">{feed.platform}</span>
                  <span className="font-mono text-[10px] uppercase font-bold text-blue-brand/50">{feed.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Ticker */}
      <div className="relative flex overflow-x-hidden border-y-4 border-white bg-white py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {tickerImages.concat(tickerImages).map((src, i) => (
            <div key={i} className="mx-4 relative w-64 aspect-square brutalist-card group overflow-hidden bg-white-brand">
              <Image
                src={src}
                alt={`Social post ${i}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-blue-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-white text-blue-brand border-4 border-blue-brand px-6 py-2 font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                  VER POST
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post: any) => {
            const isInstagram = post.platform === "instagram";
            return (
              <div 
                key={post.id} 
                className="group border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-2 bg-white/5 text-[9px] font-technical text-off-white/30 border-b border-l border-white/10 uppercase">
                  {post.platform}_node
                </div>

                <div>
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

                  <p className="font-body text-sm text-off-white/80 leading-relaxed mb-6 italic">
                    "{post.content}"
                  </p>
                </div>

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
