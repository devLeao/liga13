import type { Metadata } from "next";
import Image from "next/image";
import { Award, Download, Eye, FileText, Shield, Target } from "lucide-react";
import CabecalhoPagina from "@/components/CabecalhoPagina";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Conheça a história, a diretoria e os documentos oficiais da Liga 13.",
};

const SECOES = [
  ["a-liga", "A Liga"],
  ["historia", "Nossa história"],
  ["diretoria", "Diretoria & Staff"],
  ["documentos", "Documentos"],
];

const PILARES = [
  {
    icone: Target,
    titulo: "Missão",
    texto: "Organizar competições de alto nível, promovendo a inclusão social e a revelação de talentos através do esporte.",
  },
  {
    icone: Eye,
    titulo: "Visão",
    texto: "Ser reconhecida como a maior e mais organizada liga independente de Minas Gerais até 2028.",
  },
  {
    icone: Shield,
    titulo: "Valores",
    texto: "Transparência, fair play, respeito à comunidade e paixão incondicional pelo futebol.",
  },
];

const DIRETORIA = [
  { cargo: "Presidência", nome: "Pedro Souto", cor: "border-liga-red" },
  { cargo: "Vice-presidência", nome: "Erick Gustavo", cor: "border-white/30" },
  { cargo: "Marketing", nome: "Leandro Filipe", cor: "border-liga-gold" },
];

export default function Sobre() {
  return (
    <>
      <CabecalhoPagina
        sobretitulo="Organização e tradição"
        titulo="Conheça a"
        destaque="Liga 13"
        descricao="Quem somos, de onde viemos e as regras que fazem a Liga 13 funcionar."
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-12 sm:px-6 md:flex-row md:py-16 lg:px-8">
        <aside className="md:w-56 md:shrink-0">
          <nav className="-mx-4 flex gap-2 overflow-x-auto px-4 md:sticky md:top-28 md:mx-0 md:flex-col md:px-0">
            {SECOES.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-white/60 transition-colors hover:border-liga-gold hover:text-liga-gold md:rounded-none md:border-0 md:border-l-2 md:py-3"
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-24">
          <section id="a-liga" className="scroll-mt-28">
            <h2 className="font-display text-4xl font-black uppercase italic">
              A Liga <span className="text-liga-red">13</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                Fundada com o objetivo de elevar o nível do futsal amador em Belo Horizonte, a Liga 13 se tornou
                referência em organização, competitividade e paixão. Um dos nossos principais diferenciais é a
                versatilidade: não ficamos presos a uma única quadra. As competições acontecem em diferentes espaços,
                aproximando o esporte das comunidades e dando mais visibilidade a atletas e equipes.
              </p>
              <p>
                Recentemente demos nosso maior passo: a filiação à{" "}
                <strong className="text-white">Federação Mineira de Fut7 (FEM7SOC)</strong>, garantindo
                profissionalismo na arbitragem e acesso a competições estaduais para nossos filiados.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {PILARES.map(({ icone: Icone, titulo, texto }) => (
                <div
                  key={titulo}
                  className="group rounded-2xl border border-white/5 bg-liga-surface p-6 transition-colors hover:border-liga-gold/40"
                >
                  <Icone className="text-liga-red transition-transform group-hover:scale-110" size={36} />
                  <h3 className="mt-4 font-display text-2xl font-extrabold uppercase">{titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{texto}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="historia" className="scroll-mt-28">
            <h2 className="font-display text-4xl font-black uppercase italic">
              Nossa <span className="text-liga-gold">história</span>
            </h2>
            <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-liga-gold/25">
                <Image
                  src="/historia-liga.jpg"
                  alt="História da Liga 13"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="space-y-5">
                <p className="font-display text-3xl font-bold uppercase italic text-liga-gold">Desde 2023</p>
                <p className="leading-relaxed text-white/70">
                  Tudo começou com uma ideia simples, mas cheia de propósito. O presidente Pedro, ao lado do amigo e
                  vice-presidente Erick Gustavo, começou a questionar o modelo tradicional das competições amadoras: por
                  que organizar campeonatos somente em uma única quadra?
                </p>
                <p className="border-l-4 border-liga-red pl-5 leading-relaxed text-white/80">
                  Dessa reflexão nasceu o conceito da Liga 13: levar o futebol society e o futsal para diferentes
                  regiões, criando oportunidades, aproximando comunidades e dando mais visibilidade aos atletas. Em vez de
                  centralizar tudo em um só lugar, a Liga 13 surgiu para ser versátil, acessível e presente onde o esporte
                  realmente acontece.
                </p>
              </div>
            </div>
          </section>

          <section id="diretoria" className="scroll-mt-28">
            <h2 className="font-display text-4xl font-black uppercase italic">
              Diretoria & <span className="text-liga-red">Staff</span>
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                {DIRETORIA.map((d) => (
                  <div key={d.nome} className={`rounded-r-2xl border-l-4 bg-liga-surface p-6 ${d.cor}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40">{d.cargo}</p>
                    <p className="mt-1 font-display text-3xl font-black uppercase">{d.nome}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-liga-surface p-8 text-center">
                <p className="flex items-center gap-2 font-display text-xl font-bold uppercase text-liga-gold">
                  <Award size={24} /> Conselho de Arbitragem
                </p>
                <div className="relative mt-6 h-40 w-40">
                  <Image src="/patrocinadores/12.png" alt="Logo FEM7SOC" fill sizes="160px" className="object-contain" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-white/40">Filiado à FEM7SOC</p>
              </div>
            </div>
          </section>

          <section id="documentos" className="scroll-mt-28 pb-8">
            <h2 className="font-display text-4xl font-black uppercase italic">
              Documentos <span className="text-liga-gold">oficiais</span>
            </h2>
            <a
              href="/regulamento-2026.pdf"
              download="Regulamento_Liga13_2026.pdf"
              className="group mt-8 flex flex-col gap-4 rounded-2xl border border-white/5 bg-liga-surface p-6 transition-colors hover:border-liga-gold/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="flex items-center gap-4">
                <span className="rounded-xl bg-liga-red/15 p-3 text-liga-red">
                  <FileText size={26} />
                </span>
                <span>
                  <span className="block font-display text-xl font-bold uppercase">Regulamento Geral 2026</span>
                  <span className="text-sm text-white/50">Copa Talentos da Bola · PDF</span>
                </span>
              </span>
              <span className="inline-flex items-center justify-center gap-2 rounded-full bg-liga-gold px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black transition-colors group-hover:bg-white">
                <Download size={16} /> Baixar
              </span>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
