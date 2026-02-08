"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Search, Tag } from "lucide-react";

export default function Noticias() {
  const todasNoticias = [
    {
      id: 1,
      titulo: "2ª Edição Copa Talentos da Bola",
      resumo: "A vitrine que revela os novos craques da várzea está de volta! Olheiros confirmados e premiação recorde.",
      data: "07 FEV 2026",
      imagem: "/noticias/news1.jpg",
      categoria: "Inscrições"
    },
    {
      id: 2,
      titulo: "Liga 13 agora é FEM7SOC",
      resumo: "Um passo gigante para o nosso futsal! Agora somos filiados à Federação Mineira de Fut7.",
      data: "05 FEV 2026",
      imagem: "/noticias/news2.jpg",
      categoria: "Institucional"
    },
    {
      id: 3,
      titulo: "EJC Milionários é Campeão!",
      resumo: "Em um jogo cheio de reviravoltas, Milionários conquista a copa EJC 2ª edição na arena lotada.",
      data: "02 FEV 2026",
      imagem: "/noticias/news3.jpg",
      categoria: "Resultados"
    }
  ];

return (
    <main className="min-h-screen bg-liga-black text-white pt-20 md:pt-24">
      
      {/* CABEÇALHO PADRÃO LIGA 13: Removido -mt-[80px] */}
      <section className="relative w-full h-[160px] flex items-center justify-center bg-black border-b border-liga-gold/30 z-0">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Notícias
          </h1>
          <p className="text-liga-gold font-bold tracking-[0.3em] uppercase text-[10px] mt-2">
            Fique por dentro de tudo na Liga
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* BARRA DE PESQUISA E FILTROS (OPCIONAL) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Buscar notícia..." 
              className="w-full bg-neutral-900 border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm focus:border-liga-red outline-none transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {["Todas", "Inscrições", "Institucional", "Resultados"].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* LISTAGEM DE NOTÍCIAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {todasNoticias.map((post) => (
            <article key={post.id} className="group bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-liga-red/50 transition-all flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={post.imagem} 
                  alt={post.titulo} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-liga-red text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                  {post.categoria}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase mb-4">
                  <Calendar size={14} className="text-liga-gold" />
                  {post.data}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-liga-gold transition-colors line-clamp-2">
                  {post.titulo}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.resumo}
                </p>
                <div className="mt-auto">
                  <Link href={`/noticias/${post.id}`} className="inline-flex items-center text-liga-red font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                    Ler matéria completa <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINAÇÃO SIMULADA */}
        <div className="mt-20 flex justify-center gap-4">
          <button className="w-10 h-10 rounded-lg bg-white text-black font-bold flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-lg border border-white/10 text-white font-bold flex items-center justify-center hover:bg-white/5 transition-all">2</button>
          <button className="w-10 h-10 rounded-lg border border-white/10 text-white font-bold flex items-center justify-center hover:bg-white/5 transition-all">...</button>
        </div>

      </div>
    </main>
  );
}