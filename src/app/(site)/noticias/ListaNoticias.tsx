"use client";

import { useState } from "react";
import CardNoticia from "@/components/CardNoticia";
import type { Noticia } from "@/lib/tipos";

export default function ListaNoticias({ noticias }: { noticias: Noticia[] }) {
  const categorias = ["Todas", ...Array.from(new Set(noticias.map((n) => n.categoria)))];
  const [filtro, setFiltro] = useState("Todas");
  const visiveis = filtro === "Todas" ? noticias : noticias.filter((n) => n.categoria === filtro);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {categorias.length > 2 && (
        <div className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setFiltro(c)}
              className={`shrink-0 rounded-full border px-5 py-2 text-xs font-black uppercase tracking-widest transition-colors ${
                filtro === c
                  ? "border-liga-gold bg-liga-gold text-black"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {visiveis.length === 0 ? (
        <p className="py-20 text-center text-white/50">Nenhuma notícia por aqui ainda.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((n) => (
            <CardNoticia key={n.id} noticia={n} />
          ))}
        </div>
      )}
    </div>
  );
}
