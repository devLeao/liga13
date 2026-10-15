"use client";

import { useState } from "react";
import { Check, Link2, Share2 } from "lucide-react";

export default function Compartilhar({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);

  const url = () => window.location.href;

  async function copiar() {
    await navigator.clipboard.writeText(url());
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  async function nativo() {
    if (navigator.share) {
      try {
        await navigator.share({ title: titulo, url: url() });
      } catch {
        /* usuário cancelou */
      }
    } else {
      copiar();
    }
  }

  return (
    <div className="flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-display text-xl font-bold uppercase italic text-white/80">Compartilhe essa notícia</p>
      <div className="flex gap-2">
        <button
          onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${titulo} ${url()}`)}`, "_blank")}
          className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-black uppercase tracking-wider text-black transition-opacity hover:opacity-85"
        >
          WhatsApp
        </button>
        <button
          onClick={copiar}
          className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-bold text-white/80 hover:border-liga-gold hover:text-liga-gold"
        >
          {copiado ? <Check size={16} /> : <Link2 size={16} />} {copiado ? "Copiado!" : "Copiar link"}
        </button>
        <button
          onClick={nativo}
          className="rounded-full border border-white/15 p-2.5 text-white/80 hover:border-liga-gold hover:text-liga-gold sm:hidden"
          aria-label="Compartilhar"
        >
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
}
