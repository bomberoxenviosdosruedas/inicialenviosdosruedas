"use client";

import Image from "next/image";

interface RotatingCardProps {
  frontImageSrc?: string;
  backImageSrc?: string;
  className?: string;
}

export default function RotatingCard({
  frontImageSrc = "/cards/card_mapa.webp",
  backImageSrc = "/cards/card_moto01.webp",
  className,
}: RotatingCardProps) {
  return (
    <div className={`scene ${className}`}>
      <div className="credit-card">
        {/* Front Face */}
        <div className="card-face card-front">
          <Image
            src={frontImageSrc || "/placeholder.svg"}
            alt="Tarjeta de Envíos DosRuedas - Vista Frontal"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
            className="w-full h-full object-contain rounded-[18px]"
            priority
          />
        </div>

        {/* Back Face */}
        <div className="card-face card-back">
          <Image
            src={backImageSrc || "/placeholder.svg"}
            alt="Tarjeta de Envíos DosRuedas - Vista Posterior"
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
            className="w-full h-full object-contain rounded-[18px]"
          />
        </div>
      </div>
    </div>
  );
}
