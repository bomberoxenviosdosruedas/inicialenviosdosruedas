'use client';

import { motion } from 'framer-motion';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Helper component for platform icons since Facebook/Instagram are not in the current lucide-react version
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const socialFeeds = [
  { platform: 'Instagram', label: 'Novedades diarias', icon: InstagramIcon, color: 'bg-pink-600', link: 'https://instagram.com/enviosdosruedas' },
  { platform: 'Facebook', label: 'Comunidad activa', icon: FacebookIcon, color: 'bg-blue-600', link: 'https://facebook.com/enviosdosruedas' },
  { platform: 'WhatsApp', label: 'Atención inmediata', icon: MessageCircle, color: 'bg-green-600', link: 'https://wa.me/5492236602699' },
];

const tickerImages = [
  '/redes/fac1.webp',
  '/redes/ig1.webp',
  '/redes/ig3.webp',
  '/redes/ig4.webp',
  '/redes/fac2.webp',
  '/redes/fac1.webp',
  '/redes/ig1.webp',
  '/redes/ig3.webp',
];

export default function SocialProofTicker() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-2 border-2 border-white">
              <Heart className="w-4 h-4 text-white fill-white" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Conecta con nosotros</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              SIGUE NUESTRO <br />
              <span className="text-accent">MOVIMIENTO</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {socialFeeds.map((feed, i) => (
              <Link
                key={i}
                href={feed.link}
                target="_blank"
                className="brutalist-card bg-white text-slate-950 p-4 flex items-center gap-4 hover:bg-accent transition-colors group"
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
