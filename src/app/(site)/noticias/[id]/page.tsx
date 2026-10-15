import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Images, PlayCircle } from "lucide-react";
import CardNoticia, { Categoria } from "@/components/CardNoticia";
import Conteudo from "@/components/Conteudo";
import Foto from "@/components/Foto";
import Galeria from "./Galeria";
import Compartilhar from "./Compartilhar";
import { ler } from "@/lib/store";
import { dataLonga, ordenarNoticias, tempoLeitura } from "@/lib/formato";

type Props = { params: Promise<{ id: string }> };

function idYoutube(url: string) {
  return url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/)?.[1] ?? null;
}

async function buscar(id: string) {
  const noticias = await ler("noticias");
  return { noticia: noticias.find((n) => n.id === decodeURIComponent(id) && n.publicado), noticias };
}

export async function generateStaticParams() {
  return (await ler("noticias")).filter((n) => n.publicado).map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { noticia } = await buscar((await params).id);
  if (!noticia) return { title: "Notícia não encontrada" };
  return {
    title: noticia.titulo,
    description: noticia.resumo,
    openGraph: { title: noticia.titulo, description: noticia.resumo, images: [noticia.imagem], type: "article" },
  };
}

export default async function DetalheNoticia({ params }: Props) {
  const { noticia, noticias } = await buscar((await params).id);
  if (!noticia) notFound();

  const relacionadas = ordenarNoticias(noticias.filter((n) => n.publicado && n.id !== noticia.id)).slice(0, 3);
  const fotos = noticia.galeria.length ? noticia.galeria : [];

  return (
    <article>
      {/* Cabeçalho */}
      <header className="bg-brasa border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 pb-12 pt-10 sm:px-6 md:pt-14">
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-liga-gold hover:text-white"
          >
            <ArrowLeft size={16} /> Todas as notícias
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold uppercase tracking-widest text-white/50">
            <Categoria nome={noticia.categoria} />
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-liga-gold" /> {dataLonga(noticia.data)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-liga-gold" /> {tempoLeitura(noticia.conteudo)} min de leitura
            </span>
          </div>
          <h1 className="mt-6 font-display text-5xl font-black uppercase italic leading-[0.92] md:text-7xl">
            {noticia.titulo}
          </h1>
          {noticia.subtitulo && (
            <p className="mt-6 text-lg leading-relaxed text-white/65 md:text-xl">{noticia.subtitulo}</p>
          )}
        </div>
      </header>

      {/* Foto principal: fundo desfocado para fotos em pé não serem cortadas */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative -mt-px aspect-[4/5] overflow-hidden rounded-b-3xl bg-black sm:aspect-[4/3] md:aspect-[16/9]">
          <Foto src={noticia.imagem} alt="" fill aria-hidden sizes="10vw" className="scale-110 object-cover opacity-50 blur-2xl" />
          <Foto
            src={noticia.imagem}
            alt={noticia.titulo}
            fill
            priority
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-contain"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Conteudo texto={noticia.conteudo} />

        {noticia.video && (
          <section className="mt-14">
            <h2 className="flex items-center gap-3 font-display text-3xl font-extrabold uppercase italic">
              <PlayCircle className="text-liga-red" /> Vídeo
            </h2>
            {idYoutube(noticia.video) ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${idYoutube(noticia.video)}`}
                title={noticia.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mt-6 aspect-video w-full rounded-2xl border border-white/10 bg-black"
              />
            ) : (
              <video
                src={noticia.video}
                controls
                playsInline
                preload="metadata"
                poster={noticia.imagem}
                className="mt-6 max-h-[80vh] w-full rounded-2xl border border-white/10 bg-black"
              />
            )}
          </section>
        )}
      </div>

      {fotos.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
          <h2 className="flex items-center gap-3 font-display text-3xl font-extrabold uppercase italic">
            <Images className="text-liga-red" /> Galeria
          </h2>
          <Galeria fotos={fotos} titulo={noticia.titulo} />
        </section>
      )}

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <Compartilhar titulo={noticia.titulo} />
      </div>

      {relacionadas.length > 0 && (
        <section className="border-t border-white/5 bg-black/40 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-black uppercase italic">
              Leia <span className="text-liga-gold">também</span>
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((n) => (
                <CardNoticia key={n.id} noticia={n} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
