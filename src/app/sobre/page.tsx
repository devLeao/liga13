"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, Eye, Shield, FileText, Award } from "lucide-react";

export default function Sobre() {
  const [view, setView] = useState("institucional");

  const scrollToSection = (id: string) => {
    if (view !== "institucional") {
      setView("institucional");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-liga-black text-white pt-20 md:pt-24">
      
      {/* --- CABEÇALHO --- */}
      <section className="relative w-full h-[160px] flex items-center justify-center bg-black border-b border-liga-gold/30 z-0">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
            Institucional
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2">
            <div className="h-[1px] w-8 bg-liga-gold/50"></div>
            <p className="text-liga-gold font-bold tracking-[0.3em] uppercase text-[10px]">
              Organização e Tradição
            </p>
            <div className="h-[1px] w-8 bg-liga-gold/50"></div>
          </div>
        </div>
      </section>

      {/* --- CONTEÚDO --- */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12">
        
        {/* MENU LATERAL FIXO */}
        <aside className="w-full md:w-1/4">
          <nav className="sticky top-28 space-y-2">
            <button 
              onClick={() => scrollToSection("a-liga")}
              className="w-full text-left px-6 py-4 font-bold uppercase tracking-wider border-l-4 border-gray-800 text-gray-500 hover:text-white hover:border-liga-red transition-all"
            >
              A Liga
            </button>
            <button 
              onClick={() => scrollToSection("historia")}
              className="w-full text-left px-6 py-4 font-bold uppercase tracking-wider border-l-4 border-gray-800 text-gray-500 hover:text-white hover:border-liga-red transition-all"
            >
              Nossa História
            </button>
            <button 
              onClick={() => scrollToSection("diretoria")}
              className="w-full text-left px-6 py-4 font-bold uppercase tracking-wider border-l-4 border-gray-800 text-gray-500 hover:text-white hover:border-liga-red transition-all"
            >
              Diretoria & Staff
            </button>
            <div className="pt-4 border-t border-white/5 mt-4">
                <button 
                onClick={() => setView("documentos")}
                className={`w-full text-left px-6 py-4 font-bold uppercase tracking-wider border-l-4 transition-all ${view === "documentos" ? "border-liga-gold bg-liga-gold/10 text-liga-gold" : "border-gray-800 text-gray-500 hover:text-white hover:border-liga-gold"}`}
                >
                Documentos Oficiais
                </button>
            </div>
          </nav>
        </aside>

        {/* ÁREA DE CONTEÚDO */}
        <div className="w-full md:w-3/4">
          
          {view === "institucional" ? (
            <div className="animate-fade-in space-y-32">
              
              {/* SEÇÃO 1: A LIGA */}
              <section id="a-liga" className="scroll-mt-28">
                <h2 className="text-3xl font-bold uppercase text-white border-b border-white/10 pb-4">
                  A Liga <span className="text-liga-red">13</span>
                </h2>
                <div className="space-y-6 mt-8 text-gray-300 text-lg leading-relaxed">
                    <p>
                        Fundada com o objetivo de elevar o nível do futsal amador em Belo Horizonte, a Liga 13 se tornou referência em organização, competitividade e paixão. Um dos principais diferenciais da Liga 13 é a sua versatilidade: não ficamos presos a uma única quadra ou local fixo. Nosso modelo permite que as competições aconteçam em diferentes espaços, aproximando o esporte das comunidades, ampliando oportunidades e dando mais visibilidade aos atletas e equipes.
                    </p>
                    <p>
                        Recentemente, demos nosso maior passo: a filiação à <strong>Federação Mineira de Fut7 (FEM7SOC)</strong>, garantindo profissionalismo na arbitragem e acesso a competições estaduais para nossos filiados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-neutral-900/50 p-6 border border-white/5 hover:border-liga-gold transition-colors group">
                        <Target className="text-liga-red mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h3 className="text-xl font-bold text-white mb-2">Missão</h3>
                        <p className="text-sm text-gray-400">Organizar competições de alto nível, promovendo a inclusão social e a revelação de talentos através do esporte.</p>
                    </div>
                    <div className="bg-neutral-900/50 p-6 border border-white/5 hover:border-liga-gold transition-colors group">
                        <Eye className="text-liga-red mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h3 className="text-xl font-bold text-white mb-2">Visão</h3>
                        <p className="text-sm text-gray-400">Ser reconhecida como a maior e mais organizada liga independente de Minas Gerais até 2028.</p>
                    </div>
                    <div className="bg-neutral-900/50 p-6 border border-white/5 hover:border-liga-gold transition-colors group">
                        <Shield className="text-liga-red mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h3 className="text-xl font-bold text-white mb-2">Valores</h3>
                        <p className="text-sm text-gray-400">Transparência, Fair Play, Respeito à Comunidade e Paixão Incondicional pelo Futebol.</p>
                    </div>
                </div>
              </section>

              {/* SEÇÃO 2: HISTÓRIA */}
              <section id="historia" className="scroll-mt-28">
                <h2 className="text-3xl font-bold uppercase text-white border-b border-white/10 pb-4">
                  Nossa <span className="text-liga-gold">História</span>
                </h2>
                
               <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
  <div className="w-full md:w-1/2 relative h-89 border-2 border-liga-gold/30 rounded-lg overflow-hidden">
      <Image 
        src="/historia-liga.jpg" 
        alt="História da Liga" 
        fill 
        // 'object-center' mantém a imagem centralizada. 
        // Se ainda precisar descer um pouco, use 'object-[center_top]'
        className="object-cover object-center" 
      />
    </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-white italic">Desde 2023</h3>
                    <p className="text-gray-300">
                      Tudo começou com uma ideia simples, mas cheia de propósito. O presidente Pedro, ao lado do seu amigo e vice-presidente Erick Gustavo, começou a questionar o modelo tradicional das competições amadoras: por que organizar campeonatos somente em uma única quadra?
                    </p>
                    <p className="text-gray-300 font-medium italic border-l-2 border-liga-red pl-4">
                      Foi dessa reflexão que nasceu o conceito da Liga 13. A proposta era levar o futebol society e o futsal para diferentes regiões, criando oportunidades, aproximando comunidades e dando mais visibilidade aos atletas. Em vez de centralizar tudo em um só lugar, a Liga 13 surgiu com a missão de ser versátil, acessível e presente onde o esporte realmente acontece.
                    </p>
                  </div>
                </div>
              </section>

              {/* SEÇÃO 3: DIRETORIA & STAFF */}
              <section id="diretoria" className="scroll-mt-28 pb-20">
                <h2 className="text-3xl font-bold uppercase text-white border-b border-white/10 pb-4 mb-12">
                   Diretoria & <span className="text-liga-red">Staff</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="bg-neutral-900 p-6 border-l-4 border-liga-red rounded-r-lg">
                            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Presidência</h4>
                            <p className="text-2xl font-black text-white uppercase">Pedro Souto</p>
                        </div>
                        <div className="bg-neutral-900 p-6 border-l-4 border-white/20 rounded-r-lg">
                            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Vice-Presidência</h4>
                            <p className="text-2xl font-black text-white uppercase">Erick Gustavo</p>
                        </div>
                        <div className="bg-neutral-900 p-6 border-l-4 border-liga-gold rounded-r-lg">
                            <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Marketing</h4>
                            <p className="text-2xl font-black text-white uppercase italic text-liga-gold">Leandro Filipe</p>
                        </div>
                    </div>

                    <div className="bg-neutral-900 p-8 border border-white/5 rounded-xl flex flex-col items-center justify-center text-center">
                        <div className="flex items-center gap-3 mb-6 text-liga-gold">
                            <Award size={28} />
                            <h4 className="text-xl font-bold uppercase">Conselho de Arbitragem</h4>
                        </div>
                        {/* Espaço para a Logo da Federação conforme pedido */}
                        <div className="relative w-40 h-40 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                             <Image 
                                src="/patrocinadores/12.png" 
                                alt="Logo Federação" 
                                fill 
                                className="object-contain"
                             />
                        </div>
                        <p className="text-gray-500 text-[10px] mt-4 uppercase font-bold tracking-widest">Filiado à FEM7SOC</p>
                    </div>
                </div>
              </section>

            </div>
          ) : (
          <div className="animate-fade-in space-y-8">
  <div className="flex justify-between items-center border-b border-white/10 pb-4">
    <h2 className="text-3xl font-bold uppercase text-white">Documentos <span className="text-liga-gold">Oficiais</span></h2>
    <button onClick={() => setView("institucional")} className="text-sm text-gray-500 hover:text-white uppercase font-bold">← Voltar</button>
  </div>
  
  <div className="grid gap-4 mt-8">
    {/* LINK DE DOWNLOAD REAL */}
    <a 
      href="/regulamento-2026.pdf" 
      download="Regulamento_Liga13_2026.pdf"
      className="flex items-center justify-between bg-neutral-900 p-6 border-l-4 border-liga-gold hover:bg-neutral-800 transition-all cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <FileText className="text-gray-500 group-hover:text-white" />
        <h4 className="text-white font-bold uppercase">Regulamento Geral 2026 - Copa Talentos da Bola</h4>
      </div>
      <span className="bg-liga-gold text-black px-4 py-2 font-black text-xs uppercase rounded hover:bg-white transition-colors">
        Download PDF
      </span>
    </a>
  </div>
</div>
          )}
        </div>
      </div>
    </main>
  );
}