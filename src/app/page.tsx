import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Trophy, Users, Award, MapPin, Instagram, Facebook, Mail } from "lucide-react";

export default function Home() {
  const logos = Array.from({ length: 12 }, (_, i) => i + 1);

  // DADOS DAS NOTÍCIAS (Atualizado)
  const noticias = [
    {
      id: 1,
      titulo: "3ª Edição Copa Talentos da Bola",
      resumo: "A Copa Talentos da Bola voltou! Depois do sucesso das outras edições, a terceira edição chegou com tudo! Restam poucas vagas.",
      data: "07 FEV 2026",
      imagem: "/noticias/news1.jpg",
      categoria: "Inscrições Abertas"
    },
    {
      id: 2,
      titulo: "Liga 13 agora é FEM7SOC",
      resumo: "Um passo gigante para o nosso futsal! Agora somos filiados à Federação Mineira de Fut7. Isso garante vaga em competições estaduais e profissionalização total da arbitragem.",
      data: "05 FEV 2026",
      imagem: "/noticias/news2.jpg",
      categoria: "Institucional"
    },
    {
      id: 3,
      titulo: "EJC Milionários é Campeão!",
      resumo: "Haja coração! Em uma final com duas viradas e gol nos acréscimos, o Milionários segura a pressão, vence por 4x3 e levanta a taça da 2ª Copa EJC na arena lotada.",
      data: "02 FEV 2026",
      imagem: "/noticias/news3.jpg",
      categoria: "Resultados"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-liga-black overflow-x-hidden">
      
{/* SEÇÃO 1: BANNER HERO */}
      {/* pt-20 empurra a seção exatamente 80px para baixo (a altura da sua Nav) */}
      <section className="relative w-full h-[85vh] md:h-[500px] lg:h-[650px] bg-black pt-20 z-0 overflow-hidden">
        
        {/* Banner MOBILE: Preenche o espaço restante da tela */}
        <div className="md:hidden relative w-full h-full">
          <Image 
            src="/banner-mob.jpg" 
            alt="Banner Mobile" 
            fill 
            className="object-cover object-top" 
            priority 
          />
        </div>

    {/* Banner DESKTOP - Oculto no mobile, aparece no md: em diante */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/banner-home.jpg"
            alt="Banner Oficial Liga 13"
            fill
            // ADICIONADO: -mt-[20px] para subir a imagem. 
            // Aumente para -mt-[40px] se quiser que suba mais.
            className="object-contain object-center -mt-[97px]" 
            priority
          />
        </div>

        {/* Gradientes sutil de acabamento */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

{/* --- SEÇÃO 2: TELÃO DE PATROCINADORES --- */}
      {/* O 'mt-0' mantém o mobile fixo. O 'md:-mt-52' sobe o telão no PC. */}
      <section className="ticker-container w-full bg-black border-y-2 border-liga-gold relative z-10 py-3 md:py-6 shadow-2xl mt-0 md:-mt-52">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-20"></div>
        
        <div className="flex flex-nowrap w-full whitespace-nowrap overflow-hidden relative z-10">
          
          {/* PRIMEIRO GRUPO DE LOGOS */}
          <div className="animate-ticker flex items-center flex-shrink-0">
            {logos.map((num) => (
              <div key={`original-${num}`} className="relative w-28 h-16 md:w-64 md:h-32 mx-4 md:mx-8 flex-shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:z-50 cursor-pointer flex items-center justify-center bg-black/30 rounded-lg border border-white/5">
                <Image src={`/patrocinadores/${num}.png`} alt={`Patrocinador ${num}`} fill className="object-contain" />
              </div>
            ))}
          </div>

          {/* SEGUNDO GRUPO (REPETIÇÃO PARA O LOOP INFINITO) */}
          <div className="animate-ticker flex items-center flex-shrink-0">
            {logos.map((num) => (
              <div key={`copy-${num}`} className="relative w-28 h-16 md:w-64 md:h-32 mx-4 md:mx-8 flex-shrink-0 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-110 hover:z-50 cursor-pointer flex items-center justify-center bg-black/30 rounded-lg border border-white/5">
                <Image src={`/patrocinadores/${num}.png`} alt={`Patrocinador ${num}`} fill className="object-contain" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SEÇÃO 3: NOTÍCIAS --- */}
      <section className="relative z-10 py-20 bg-liga-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
            <div>
              <span className="text-liga-red font-bold uppercase tracking-widest text-sm">Atualizações</span>
              <h2 className="text-3xl md:text-5xl font-black text-white mt-2 uppercase italic">
                Últimas <span className="text-liga-gold">Notícias</span>
              </h2>
            </div>
            <Link href="/noticias" className="hidden md:flex items-center gap-2 text-white hover:text-liga-gold transition-colors group">
              <span className="uppercase font-bold text-sm tracking-widest">Ver todas</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticias.map((item) => (
              <article key={item.id} className="group bg-neutral-900/50 border border-white/5 hover:border-liga-red transition-all duration-300 rounded-sm overflow-hidden hover:-translate-y-2 cursor-pointer">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={item.imagem} alt={item.titulo} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-liga-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-lg">
                    {item.categoria}
                  </div>
                </div>
                <div className="p-6 relative">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <Calendar size={14} className="text-liga-gold" />
                    {item.data}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-liga-gold transition-colors line-clamp-2">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.resumo}
                  </p>
                  <div className="flex items-center text-liga-red text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                    Ler matéria <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 4: INSTITUCIONAL (NOVO!) --- */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <div>
            <span className="text-liga-gold font-bold uppercase tracking-widest text-sm mb-2 block">Desde 2013</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase italic leading-tight">
              Muito mais que <br/> <span className="text-liga-red">apenas futebol</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A Liga 13 nasceu com o propósito de organizar, profissionalizar e elevar o nível do futebol de várzea na região. 
              Aqui a paixão entra em campo com organização de primeira divisão.
            </p>
            
            {/* Estatísticas Rápidas */}
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-4xl font-black text-white mb-1">+40</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Times Ativos</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-1">+500</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Jogos/Ano</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-1">13</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Anos de História</div>
              </div>
            </div>

            <div className="mt-10">
               <Link href="/sobre" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-liga-gold transition-colors">
                  Conheça nossa história
               </Link>
            </div>
          </div>

          {/* Lado Direito: Imagem com Efeito */}
          <div className="relative h-[500px] w-full group">
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-liga-red z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
            <div className="relative h-full w-full bg-neutral-800 z-10 overflow-hidden">
               {/* Certifique-se de ter a imagem 'sobre.jpg' na pasta public */}
               <Image 
                 src="/sobre.jpg" 
                 alt="Sobre a Liga 13" 
                 fill 
                 className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
            {/* Ícone flutuante */}
            <div className="absolute -bottom-8 -left-8 bg-liga-gold p-6 shadow-xl z-20">
               <Trophy size={48} className="text-black" />
            </div>
          </div>

        </div>
      </section>

      {/* --- SEÇÃO 5: FOOTER (RODAPÉ ATUALIZADO) --- */}
      <footer className="bg-black pt-20 pb-10 border-t border-liga-gold/30">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Slogan */}
          <div className="md:col-span-1">
             <Link href="/" className="text-3xl font-bold text-white tracking-widest uppercase flex items-center gap-2 mb-6">
                LIGA <span className="text-liga-gold text-4xl">13</span>
             </Link>
             <p className="text-gray-500 text-sm leading-relaxed">
                Organização, paixão e competitividade. O palco dos grandes craques da várzea em BH.
             </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Navegação</h4>
             <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-liga-red transition-colors">Início</Link></li>
                <li><Link href="/campeonatos" className="hover:text-liga-red transition-colors">Campeonatos</Link></li>
                <li><Link href="/sobre" className="hover:text-liga-red transition-colors">Sobre a Liga</Link></li>
                <li><Link href="/noticias" className="hover:text-liga-red transition-colors">Notícias</Link></li>
             </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Localização</h4>
             <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                   <MapPin size={18} className="text-liga-gold flex-shrink-0"/> 
                   <span>Mantiqueira, Belo Horizonte - MG</span>
                </li>
                <li className="flex items-center gap-3">
                   <Mail size={18} className="text-liga-gold flex-shrink-0"/> 
                   <span>contato@liga13.com.br</span>
                </li>
             </ul>
          </div>

          {/* Coluna 4: Redes Sociais */}
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-6">Siga-nos</h4>
             <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/liga13_zonanorte/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-800 p-3 rounded-full hover:bg-liga-red hover:text-white text-gray-400 transition-all flex items-center gap-2 group"
                >
                   <Instagram size={20} />
                   <span className="text-sm font-bold group-hover:text-white">@liga13_zonanorte</span>
                </a>
             </div>
          </div>
        </div>

        {/* Linha Final com Créditos Dev Leão */}
        <div className="border-t border-white/10 pt-8 text-center">
           <p className="text-gray-600 text-sm">
              © 2026 Liga 13. Desenvolvido por{' '}
              <a 
                href="https://devleao.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-liga-gold font-bold hover:text-white transition-colors uppercase tracking-wider"
              >
                Dev Leão
              </a>
           </p>
        </div>
      </footer>

    </main>
  );
}