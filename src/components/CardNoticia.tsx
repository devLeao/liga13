import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import Foto from "./Foto";
import { dataCurta } from "@/lib/formato";
import type { Noticia } from "@/lib/tipos";

export function Categoria({ nome, className = "" }: { nome: string; className?: string }) {
  return (
    <span
      className={`inline-block -skew-x-12 bg-liga-red px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white ${className}`}
    >
      <span className="inline-block skew-x-12">{nome}</span>
    </span>
  );
}

export default function CardNoticia({ noticia }: { noticia: Noticia }) {
  return (
    <Link href={`/noticias/${noticia.id}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-liga-surface transition-all duration-300 hover:-translate-y-1 hover:border-liga-gold/40 hover:shadow-[0_20px_60px_-20px_rgba(214,40,40,0.35)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-black">
          <Foto
            src={noticia.imagem}
            alt={noticia.titulo}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <Categoria nome={noticia.categoria} className="absolute left-4 top-4" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/45">
            <Calendar size={13} className="text-liga-gold" /> {dataCurta(noticia.data)}
          </p>
          <h3 className="mt-3 font-display text-2xl font-extrabold uppercase leading-tight text-white transition-colors group-hover:text-liga-gold">
            {noticia.titulo}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/55">{noticia.resumo}</p>
          <span className="mt-auto flex items-center gap-1 pt-6 text-xs font-black uppercase tracking-widest text-liga-red transition-colors group-hover:text-white">
            Ler matéria <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
