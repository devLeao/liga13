import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Crown, Medal, Trophy, Users } from "lucide-react";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import Foto from "@/components/Foto";
import { ler } from "@/lib/store";

export const metadata: Metadata = {
  title: "Campeonatos",
  description: "Competições da Liga 13 e a galeria de campeões.",
};

const COR_STATUS: Record<string, string> = {
  "Inscrições Abertas": "bg-emerald-500 text-black",
  "Em Andamento": "bg-liga-ember text-black",
  "Em Breve": "bg-sky-500 text-black",
  Encerrado: "bg-white/15 text-white",
};

export default async function Campeonatos() {
  const [campeonatos, campeoes] = await Promise.all([ler("campeonatos"), ler("campeoes")]);

  return (
    <>
      <CabecalhoPagina
        sobretitulo="Temporada"
        titulo="Nossos"
        destaque="campeonatos"
        descricao="As competições da Liga 13 e quem já escreveu o nome na nossa história."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="flex items-center gap-3 font-display text-4xl font-black uppercase italic">
          <Trophy className="text-liga-red" /> Competições
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {campeonatos.map((c) => (
            <article
              key={c.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-liga-surface transition-colors hover:border-liga-gold/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Foto
                  src={c.imagem || "/noticias/talento.jpg"}
                  alt={c.nome}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-liga-surface via-transparent to-transparent" />
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider ${
                    COR_STATUS[c.status] ?? "bg-liga-red text-white"
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-3xl font-black uppercase italic leading-none">{c.nome}</h3>
                {c.descricao && <p className="mt-4 text-sm leading-relaxed text-white/60">{c.descricao}</p>}
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-y border-white/5 py-4 text-sm text-white/55">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-liga-gold" /> {c.periodo}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-liga-gold" /> {c.equipes}
                  </span>
                </div>
                {c.link && (
                  <Link
                    href={c.link}
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-liga-gold"
                  >
                    Saiba mais <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* GALERIA DE CAMPEÕES */}
        <section className="mt-24">
          <h2 className="flex items-center gap-3 font-display text-4xl font-black uppercase italic">
            <Medal className="text-liga-gold" /> Galeria de <span className="texto-ouro">campeões</span>
          </h2>

          <ol className="relative mt-10 space-y-4 border-l border-liga-gold/25 pl-6 md:pl-10">
            {campeoes.map((c, i) => (
              <li key={c.id} className="relative">
                <span
                  className={`absolute -left-[31px] top-7 h-3 w-3 rotate-45 md:-left-[47px] ${
                    i === 0 ? "bg-liga-gold shadow-[0_0_16px_rgba(227,178,79,0.8)]" : "bg-white/30"
                  }`}
                />
                <div
                  className={`flex flex-col gap-5 rounded-2xl border p-6 md:flex-row md:items-center md:justify-between ${
                    i === 0 ? "border-liga-gold/40 bg-gradient-to-r from-liga-gold/10 to-transparent" : "border-white/5 bg-liga-surface"
                  }`}
                >
                  <div>
                    <p className="text-sm font-bold tracking-widest text-liga-gold">{c.ano}</p>
                    <p className="font-display text-2xl font-bold uppercase">{c.torneio}</p>
                  </div>
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/40">Campeão</p>
                      <p className="mt-1 flex items-center gap-2 font-display text-2xl font-black uppercase italic">
                        <Crown size={18} className="text-liga-gold" /> {c.campeao}
                      </p>
                    </div>
                    <div className="border-l border-white/10 pl-8">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/40">Vice</p>
                      <p className="mt-1 font-display text-xl font-bold uppercase text-white/65">{c.vice}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  );
}
