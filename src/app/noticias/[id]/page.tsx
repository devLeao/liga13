"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";

// Lista Completa integrada diretamente no seu layout elaborado
const todasNoticias = [
  {
    id: 1,
    titulo: "3ª Edição Copa Talentos da Bola",
    subtitulo: "A vitrine que revela os novos craques da várzea está de volta!",
    conteudo: `A COPA TALENTOS DA BOLA é uma competição esportiva organizada com o objetivo de promover o esporte, a integração entre atletas e equipes, além da valorização de novos talentos no futsal e no futebol society, prezando sempre pelo respeito, disciplina e fair play.

    A inscrição das equipes só será validada após o pagamento da taxa e o envio da relação de atletas e comissão técnica dentro do prazo estipulado. A organização é responsável por definir a tabela, horários e locais dos jogos.`,
    data: "07 FEV 2026",
    imagem: "/noticias/news1.jpg",
    categoria: "Inscrições"
  },
  {
    id: 2,
    titulo: "Liga 13 agora é FEM7SOC",
    subtitulo: "Um passo gigante para o nosso futsal amador!",
    conteudo: `É com orgulho que anunciamos a filiação oficial da Liga 13 à Federação Mineira de Fut7 (FEM7SOC). 
    
    Essa parceria garante que nossas competições sigam padrões profissionais, reforçando que as decisões da arbitragem em quadra e campo são soberanas. Atitudes antidesportivas, ofensas ou agressões não serão toleradas, podendo resultar em cartões, suspensão ou eliminação imediata.`,
    data: "05 FEV 2026",
    imagem: "/noticias/news2.jpg",
    categoria: "Institucional"
  },
  {
    id: 3,
    titulo: "EJC Milionários é Campeão!",
    subtitulo: "Título conquistado em uma final épica e cheia de reviravoltas.",
    conteudo: `O EJC Milionários sagrou-se campeão após uma trajetória brilhante. A competição, que preza pelo respeito e disciplina, contou com uma premiação completa.
    
    Foram entregues troféus e medalhas para o Campeão e Vice-campeão, além de prêmios individuais para o Artilheiro e o Melhor Goleiro da competição. A organização reforça que o sucesso do evento se deu pelo cumprimento rigoroso do regulamento por parte das equipes.`,
    data: "02 FEV 2026",
    imagem: "/noticias/news3.jpg",
    categoria: "Resultados"
  }
];

export default function DetalheNoticia() {
  const params = useParams();
  
  // Ajuste fino: garantindo que o ID da URL case com o ID da lista
  const noticia = todasNoticias.find((n) => n.id === Number(params.id));

  if (!noticia) {
    return (
      <div className="min-h-screen bg-liga-black flex flex-col items-center justify-center text-white">
        <h1 className="text-xl font-bold mb-4">Notícia não encontrada.</h1>
        <Link href="/noticias" className="text-liga-gold border-b border-liga-gold">Voltar para notícias</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-liga-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Voltar */}
        <Link href="/noticias" className="flex items-center gap-2 text-liga-gold hover:text-white transition-colors mb-8 uppercase font-bold text-xs tracking-widest">
          <ArrowLeft size={16} /> Voltar para notícias
        </Link>

        {/* Header da Matéria */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-liga-red text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
              {noticia.categoria}
            </span>
            <span className="flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase">
              <Calendar size={14} className="text-liga-gold" /> {noticia.data}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
            {noticia.titulo}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed font-medium">
            {noticia.subtitulo}
          </p>
        </header>

        {/* Imagem Principal */}
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 border border-white/10">
          <Image src={noticia.imagem} alt={noticia.titulo} fill className="object-cover" priority />
        </div>

        {/* Conteúdo da Matéria */}
        <div className="prose prose-invert max-w-none">
          <div className="whitespace-pre-line text-gray-300 text-lg leading-relaxed space-y-6">
            {noticia.conteudo}
          </div>
        </div>

        {/* Footer da Matéria */}
        <footer className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="flex gap-4">
            <button className="p-3 bg-neutral-900 rounded-full hover:bg-liga-red transition-colors">
              <Share2 size={20} />
            </button>
          </div>
          <p className="text-xs text-gray-600 font-bold uppercase tracking-widest">© 2026 Liga 13</p>
        </footer>

      </div>
    </main>
  );
}