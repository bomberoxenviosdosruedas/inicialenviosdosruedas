"use client";

import { MessageCircle, Heart, MessageSquare, Share2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SocialPost, SocialPlatformEnum } from "@/generated/prisma/client";

interface SocialProofTickerProps {
  posts: SocialPost[];
}

// Helper component for platform icons since Facebook/Instagram are not in the current lucide-react version
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialFeeds = [
  { platform: "Instagram", label: "Novedades diarias", icon: InstagramIcon, color: "bg-pink-600", link: "https://instagram.com/enviosdosruedas" },
  { platform: "Facebook", label: "Comunidad activa", icon: FacebookIcon, color: "bg-blue-600", link: "https://facebook.com/enviosdosruedas" },
  { platform: "WhatsApp", label: "Atención inmediata", icon: MessageCircle, color: "bg-green-600", link: "https://wa.me/5492236602699" },
];

const tickerImages = [
  "/redes/fac1.webp",
  "/redes/ig1.webp",
  "/redes/ig3.webp",
  "/redes/ig4.webp",
  "/redes/fac2.webp",
  "/redes/fac1.webp",
  "/redes/ig1.webp",
  "/redes/ig3.webp",
];

export default function SocialProofTicker({ posts }: SocialProofTickerProps) {
  // If there are no posts in the database, we use fallback posts to ensure the UI is populated
  const displayPosts = posts && posts.length > 0 ? posts : [
    {
      id: 1,
      platform: "instagram" as SocialPlatformEnum,
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
      platform: "facebook" as SocialPlatformEnum,
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
    <section className="py-24 bg-slate-950 text-white overflow-hidden border-t border-white/10 relative">
      {/* Background grids/deco */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 border-2 border-white">
              <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Conecta con nosotros</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-0">
              SIGUE NUESTRO <br />
              <span className="text-accent text-yellow-400">MOVIMIENTO</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            {socialFeeds.map((feed, i) => (
              <Link
                key={i}
                href={feed.link}
                target="_blank"
                className="brutalist-card bg-white text-slate-950 p-4 flex items-center gap-4 hover:bg-yellow-400 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className={`p-2 border-2 border-slate-950 ${feed.color} text-white`}>
                  <feed.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-sm uppercase tracking-tighter leading-none">{feed.platform}</span>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-500">{feed.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => {
            const isInstagram = post.platform === "instagram";
            return (
              <div
                key={post.id}
                className="group border border-white/10 bg-white/5 p-6 flex flex-col justify-between hover:border-primary hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual anchor / Brand details */}
                <div className="absolute top-0 right-0 p-2 bg-white/5 text-[9px] font-mono text-white/30 border-b border-l border-white/10 uppercase">
                  {post.platform}_node
                </div>

                <div>
                  {/* Header info */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-full flex items-center justify-center">
                      {isInstagram ? (
                        <InstagramIcon className="w-5 h-5 text-yellow-400" />
                      ) : (
                        <FacebookIcon className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-white tracking-wider">
                        {post.userName}
                      </h4>
                      <p className="font-mono text-[10px] text-white/40">
                        {new Date(post.timestamp || "").toLocaleDateString("es-AR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="font-sans text-sm text-white/80 leading-relaxed mb-6 italic">
                    "{post.content}"
                  </p>
                </div>

                {/* Footer Metrics & Redirect */}
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <div className="flex justify-between items-center text-xs text-white/50 font-mono">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 hover:text-red-400 transition-colors">
                        <Heart className="w-3.5 h-3.5" /> {post.likes || 0}
                      </span>
                      <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5" /> {post.comments || 0}
                      </span>
                      <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Share2 className="w-3.5 h-3.5" /> {post.shares || 0}
                      </span>
                    </div>

                    <a
                      href={post.postUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 flex items-center gap-1 font-mono text-[10px] uppercase font-bold hover:text-white transition-colors"
                    >
                      Ver post <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Fallback/CTA card to ensure a perfect 3-column layout on desktop */}
          {displayPosts.length <= 2 && (
            <div className="group border border-emerald-500/20 bg-emerald-950/10 p-6 flex flex-col justify-between hover:border-emerald-500 hover:bg-emerald-950/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-emerald-500/10 text-[9px] font-mono text-emerald-400/50 border-b border-l border-emerald-500/20 uppercase">
                whatsapp_node
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-white tracking-wider">
                      SOPORTE DOSRUEDAS
                    </h4>
                    <p className="font-mono text-[10px] text-emerald-400/70">
                      Online en este momento
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-white/80 leading-relaxed mb-6 italic">
                  "¿Necesitás un envío inmediato o tenés una consulta sobre tu entrega? Chateá directamente con nuestro equipo de soporte."
                </p>
              </div>

              <div className="border-t border-emerald-500/20 pt-4 mt-auto">
                <div className="flex justify-between items-center text-xs text-white/50 font-mono">
                  <span className="text-emerald-400 font-bold uppercase tracking-wide text-[10px]">
                    Respuesta en &lt; 5 min
                  </span>

                  <a
                    href="https://wa.me/5492236602699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 flex items-center gap-1 font-mono text-[10px] uppercase font-bold hover:text-white transition-colors"
                  >
                    Iniciar Chat <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Infinite Ticker */}
      <div className="relative flex overflow-x-hidden border-y-4 border-white bg-white py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {tickerImages.concat(tickerImages).map((src, i) => (
            <div key={i} className="mx-4 relative w-64 aspect-square brutalist-card group overflow-hidden bg-slate-200">
              <Image
                src={src}
                alt={`Social post ${i}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="bg-white text-slate-950 border-4 border-slate-950 px-6 py-2 font-black uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                  VER POST
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
