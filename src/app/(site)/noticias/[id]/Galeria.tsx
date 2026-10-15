"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Foto from "@/components/Foto";

export default function Galeria({ fotos, titulo }: { fotos: string[]; titulo: string }) {
  const [aberta, setAberta] = useState<number | null>(null);

  useEffect(() => {
    if (aberta === null) return;
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberta(null);
      if (e.key === "ArrowRight") setAberta((i) => (i! + 1) % fotos.length);
      if (e.key === "ArrowLeft") setAberta((i) => (i! - 1 + fotos.length) % fotos.length);
    };
    window.addEventListener("keydown", tecla);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", tecla);
      document.body.style.overflow = "";
    };
  }, [aberta, fotos.length]);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {fotos.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setAberta(i)}
            className="group relative aspect-[9/14] overflow-hidden rounded-xl border border-white/10 bg-black"
            aria-label={`Abrir foto ${i + 1}`}
          >
            <Foto
              src={src}
              alt={`${titulo} - foto ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {aberta !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setAberta(null)}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute right-4 top-4 p-2 text-white/70 hover:text-white" aria-label="Fechar">
            <X size={32} />
          </button>
          {fotos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAberta((aberta - 1 + fotos.length) % fotos.length);
                }}
                className="absolute left-2 z-10 rounded-full bg-white/10 p-3 hover:bg-white/20 md:left-6"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setAberta((aberta + 1) % fotos.length);
                }}
                className="absolute right-2 z-10 rounded-full bg-white/10 p-3 hover:bg-white/20 md:right-6"
                aria-label="Próxima foto"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <div className="relative h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Foto src={fotos[aberta]} alt={`${titulo} - foto ${aberta + 1}`} fill sizes="100vw" className="object-contain" />
          </div>
          <p className="absolute bottom-4 text-sm font-bold text-white/60">
            {aberta + 1} / {fotos.length}
          </p>
        </div>
      )}
    </>
  );
}
