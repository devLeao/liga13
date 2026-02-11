"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Search } from "lucide-react";
import { todasNoticias } from "./dados"; // IMPORTAÇÃO DOS DADOS

export default function Noticias() {
  return (
    <main className="min-h-screen bg-liga-black text-white pt-20 md:pt-24">
      <section className="relative w-full h-[160px] flex items-center justify-center bg-black border-b border-liga-gold/30">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Notícias</h1>
          <p className="text-liga-gold font-bold tracking-[0.3em] uppercase text-[10px] mt-2">Fique por dentro de tudo na Liga</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {todasNoticias.map((post) => (
            <article key={post.id} className="group bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-liga-red/50 transition-all flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={post.imagem} alt={post.titulo} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-liga-red text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">{post.categoria}</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase mb-4">
                  <Calendar size={14} className="text-liga-gold" /> {post.data}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-liga-gold transition-colors">{post.titulo}</h3>
                <p className="text-gray-400 text-sm mb-8 line-clamp-3">{post.resumo}</p>
                <Link href={`/noticias/${post.id}`} className="mt-auto inline-flex items-center text-liga-red font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                  Ler matéria completa <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}