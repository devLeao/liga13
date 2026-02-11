"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, Calendar, Users, ArrowRight, Medal } from "lucide-react";


export default function Campeonatos() {
  // Aqui você vai listar os atuais
  const torneiosAtivos = [
    {
      id: 1,
      nome: "3ª Edição Copa Talentos da Bola",
      status: "Inscrições Abertas",
      data: "Março 2026",
      times: "4 Equipes por categoria",
      imagem: "/noticias/talento.jpg", 
    },
    {
      id: 2,
      nome: "Copa EJC 2ª Edição",
      status: "Encerrado",
      data: "Temporada 2025",
      times: "8 Equipes",
      imagem: "/noticias/copaejc.jpeg",
    }
  ];

  // Aqui listamos a história (Quadro de Honra)
  const historico = [
    { ano: "2025", torneio: "Copa EJC 2ª Edição", campeao: "EJC Milionários", vice: "EJC LAGOA" },
    { ano: "2025", torneio: "Copa Talentos da Bola", campeao: "Kolping", vice: "CFA futsal" },
  ];

  return (
    <main className="min-h-screen bg-liga-black text-white pt-20 md:pt-24">
      
      {/* Cabeçalho Ajustado: Removido -mt-[80px] */}
      <section className="relative w-full h-[160px] flex items-center justify-center bg-black border-b border-liga-gold/30 z-0">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Campeonatos
          </h1>
          <p className="text-liga-gold font-bold tracking-[0.3em] uppercase text-[10px] mt-2">
            A elite do futebol de BH
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* SEÇÃO: EM DESTAQUE */}
        <div className="mb-20">
          <h2 className="text-3xl font-black uppercase mb-10 flex items-center gap-4">
            <Trophy className="text-liga-red" /> Temporada Atual
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {torneiosAtivos.map((torneio) => (
              <div key={torneio.id} className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-liga-red transition-all">
                <div className="relative h-56 w-full">
                  <Image src={torneio.imagem} alt={torneio.nome} fill className="object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-liga-red px-3 py-1 text-[10px] font-bold uppercase rounded-full">
                    {torneio.status}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase mb-6">{torneio.nome}</h3>
                  <div className="flex justify-between text-gray-400 mb-8 border-y border-white/5 py-4">
                    <span className="flex items-center gap-2 text-sm"><Calendar size={16} /> {torneio.data}</span>
                    <span className="flex items-center gap-2 text-sm"><Users size={16} /> {torneio.times}</span>
                  </div>
                  <Link href="#" className="flex items-center justify-center bg-white text-black font-black py-4 uppercase text-sm hover:bg-liga-gold transition-colors">
                    Ver detalhes do torneio <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO: GALERIA DE CAMPEÕES */}
        <section className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8">
          <h2 className="text-2xl font-black uppercase mb-8 flex items-center gap-4 text-liga-gold">
            <Medal /> Galeria de Campeões
          </h2>
          <div className="grid gap-4">
            {historico.map((h, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-black/40 border border-white/5 rounded-xl">
                <div className="mb-4 md:mb-0">
                  <span className="text-liga-gold font-bold text-sm tracking-widest">{h.ano}</span>
                  <h4 className="text-lg font-bold uppercase">{h.torneio}</h4>
                </div>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Campeão</p>
                    <p className="text-white font-black uppercase tracking-tight">{h.campeao}</p>
                  </div>
                  <div className="border-l border-white/10 pl-8">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Vice</p>
                    <p className="text-gray-400 font-bold uppercase text-sm">{h.vice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}