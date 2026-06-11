"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an analytics or error tracking service if available
    console.error("Next.js App Router caught segment error:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-background text-primary p-6">
      <div className="max-w-xl w-full brutalist-card bg-white p-8 md:p-12 relative overflow-hidden">
        {/* Decorative corner tag */}
        <div className="absolute top-0 right-0 p-2 bg-red-600 text-white font-mono text-[9px] uppercase tracking-widest border-b-4 border-l-4 border-primary">
          ERR_SEC_99
        </div>

        <div className="flex flex-col items-center text-center space-y-8">
          <div className="w-16 h-16 bg-red-600 border-4 border-primary flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              SE DETECTÓ UN <br />
              <span className="text-red-600">ERROR CRÍTICO</span>
            </h1>
            <p className="font-display text-sm font-bold uppercase tracking-tight text-primary/70 max-w-sm mx-auto leading-relaxed">
              El ruteador local experimentó una interrupción inesperada al cargar este segmento.
            </p>
          </div>

          {error.digest && (
            <div className="w-full bg-black/5 border-2 border-primary p-4 text-left">
              <span className="font-mono text-[9px] uppercase text-primary/40 block mb-1">
                ERROR_DIGEST_HASH:
              </span>
              <code className="font-mono text-[10px] select-all break-all text-primary/80">
                {error.digest}
              </code>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
            <button
              onClick={() => reset()}
              className="flex-1 brutalist-button-accent flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-5 h-5" />
              <span>REINTENTAR ACCIÓN</span>
            </button>
            <Link
              href="/"
              className="flex-1 brutalist-button-primary flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-5 h-5" />
              <span>IR AL INICIO</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
