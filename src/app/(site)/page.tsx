import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Calendar, Crown, Medal, Trophy } from "lucide-react";
import CardNoticia, { Categoria } from "@/components/CardNoticia";
import Foto from "@/components/Foto";
import { ler } from "@/lib/store";
import { dataCurta, ordenarNoticias } from "@/lib/formato";

const PATROCINADORES = Array.from({ length: 13 }, (_, i) => i + 1);

export default async function Home() {
  const [noticias, campeoes, site] = await Promise.all([ler("noticias"), ler("campeoes"), ler("site")]);

  const publicadas = ordenarNoticias(noticias.filter((n) => n.publicado));
  const principal = publicadas.find((n) => n.destaque) ?? publicadas[0];
  const demais = publicadas.filter((n) => n !== principal);
  const ultimoCampeao = campeoes[0];

  return (
    <>
      {/* BANNER — exibido na proporção original, sem cortes */}
      <section className="relative bg-black">
        <Image
          src="/banner-mob.jpg"
          alt="Bem-vindo à Liga 13, a maior liga de futsal"
          width={1024}
          height={1536}
          priority
          sizes="100vw"
          className="h-auto w-full md:hidden"
        />
        <Image
          src="/banner-home.jpg"
          alt="Liga 13"
          width={1536}
          height={452}
          priority
          sizes="100vw"
          className="hidden h-auto w-full md:block"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-liga-black to-transparent" />
      </section>

      {/* DESTAQUE */}
      {principal && (
        <section className="relative mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <Link
              href={`/noticias/${principal.id}`}
              className="group relative overflow-hidden rounded-3xl border border-liga-gold/25 bg-liga-surface lg:col-span-8"
            >
              <div className="grid h-full md:grid-cols-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-black md:aspect-auto md:min-h-[460px]">
                  <Foto
                    src={principal.imagem}
                    alt={principal.titulo}
                    fill
                    priority
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="bg-brasa relative flex flex-col justify-center p-7 md:p-10">
                  <div className="flex items-center gap-3">
                    <Categoria nome={principal.categoria} />
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/50">
                      <Calendar size={13} className="text-liga-gold" /> {dataCurta(principal.data)}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-4xl font-black uppercase italic leading-[0.95] text-white md:text-5xl">
                    {principal.titulo}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-white/65">{principal.resumo}</p>
                  <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-liga-gold px-6 py-3 text-sm font-black uppercase tracking-wider text-black transition-colors group-hover:bg-white">
                    Ler matéria completa <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-4 lg:col-span-4">
              <p className="flex items-center justify-between font-display text-xl font-extrabold uppercase italic">
                <span>
                  Últimas <span className="text-liga-gold">notícias</span>
                </span>
                <Link
                  href="/noticias"
                  className="flex items-center gap-1 font-sans text-xs font-bold not-italic tracking-widest text-white/50 hover:text-liga-gold"
                >
                  VER TODAS <ArrowRight size={14} />
                </Link>
              </p>
              {demais.slice(0, 3).map((n) => (
                <Link
                  key={n.id}
                  href={`/noticias/${n.id}`}
                  className="group flex gap-4 rounded-2xl border border-white/5 bg-liga-surface p-3 transition-colors hover:border-liga-gold/30"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-black">
                    <Foto src={n.imagem} alt="" fill sizes="96px" className="object-cover object-top" />
                  </div>
                  <div className="min-w-0 py-1">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-liga-red">{n.categoria}</p>
                    <h3 className="mt-1 line-clamp-2 font-display text-lg font-bold uppercase leading-tight text-white group-hover:text-liga-gold">
                      {n.titulo}
                    </h3>
                    <p className="mt-1 text-xs text-white/40">{dataCurta(n.data)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PATROCINADORES */}
      <section className="mt-20 border-y border-white/5 bg-black py-10">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.35em] text-white/40">
          Quem joga com a gente
        </p>
        <div className="marquee-pausa relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center">
            {[...PATROCINADORES, ...PATROCINADORES].map((n, i) => (
              <div key={i} className="relative mx-4 h-20 w-36 shrink-0 md:mx-6 md:h-24 md:w-48" aria-hidden={i >= PATROCINADORES.length}>
                <Image
                  src={`/patrocinadores/${n}.png`}
                  alt={i < PATROCINADORES.length ? `Patrocinador ${n}` : ""}
                  fill
                  sizes="200px"
                  className="object-contain opacity-80 transition-opacity hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÚLTIMO CAMPEÃO + GALERIA */}
      {ultimoCampeao && (
        <section className="bg-brasa relative overflow-hidden py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-liga-gold">
                <Crown size={16} /> Último campeão
              </p>
              <h2 className="mt-4 font-display text-6xl font-black uppercase italic leading-[0.85] md:text-8xl">
                <span className="texto-ouro">{ultimoCampeao.campeao}</span>
              </h2>
              <p className="mt-4 font-display text-2xl font-bold uppercase text-white/80">
                {ultimoCampeao.torneio} · {ultimoCampeao.ano}
              </p>
              <p className="mt-2 text-white/50">
                Vice-campeão: <span className="font-semibold text-white/80">{ultimoCampeao.vice}</span>
              </p>

              <div className="mt-10 space-y-3">
                {campeoes.slice(1, 4).map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-black/40 px-5 py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-liga-gold">{c.ano}</p>
                      <p className="truncate font-display text-lg font-bold uppercase">{c.torneio}</p>
                    </div>
                    <p className="flex shrink-0 items-center gap-2 font-display text-lg font-extrabold uppercase">
                      <Medal size={18} className="text-liga-gold" /> {c.campeao}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/campeonatos"
                className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white hover:text-liga-gold"
              >
                Galeria de campeões <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 -z-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-liga-gold/40" />
              <div className="relative aspect-[9/14] overflow-hidden rounded-3xl border border-white/10 bg-black">
                <Image
                  src="/noticias/copa-talentos-3/taca.webp"
                  alt="Taça Copa dos Campeões Gásmauro"
                  fill
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-liga-gold p-5 shadow-2xl">
                <Trophy size={40} className="text-black" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MAIS NOTÍCIAS */}
      {demais.length > 3 && (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-black uppercase italic">
            Mais <span className="text-liga-gold">notícias</span>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {demais.slice(3, 6).map((n) => (
              <CardNoticia key={n.id} noticia={n} />
            ))}
          </div>
        </section>
      )}

      {/* INSTITUCIONAL */}
      <section className="border-t border-white/5 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="group relative order-2 aspect-[4/3] lg:order-1">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-liga-red/80 transition-transform duration-500 group-hover:-translate-x-6 group-hover:translate-y-6" />
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/sobre.jpg"
                alt="Equipe da Liga 13"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-liga-gold">Desde 2023</p>
            <h2 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] md:text-6xl">
              Muito mais que <span className="text-liga-red">apenas futebol</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              A Liga 13 nasceu para organizar, profissionalizar e elevar o nível do futsal e do society na região. Aqui a
              paixão entra em quadra com organização de primeira divisão.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {site.estatisticas.map((e) => (
                <div key={e.rotulo}>
                  <dt className="sr-only">{e.rotulo}</dt>
                  <dd className="font-display text-5xl font-black italic text-white">{e.valor}</dd>
                  <dd className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/45">{e.rotulo}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/sobre"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black uppercase tracking-wider text-black transition-colors hover:bg-liga-gold"
            >
              Conheça nossa história <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
