export default function CabecalhoPagina({
  titulo,
  destaque,
  sobretitulo,
  descricao,
}: {
  titulo: string;
  destaque?: string;
  sobretitulo: string;
  descricao?: string;
}) {
  return (
    <section className="bg-brasa relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[220px] font-black italic leading-none text-white/[0.03] lg:block">
        13
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-liga-gold">
          <span className="h-px w-8 bg-liga-gold" /> {sobretitulo}
        </p>
        <h1 className="mt-4 font-display text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
          {titulo} {destaque && <span className="texto-ouro">{destaque}</span>}
        </h1>
        {descricao && <p className="mt-5 max-w-2xl text-base text-white/60 md:text-lg">{descricao}</p>}
      </div>
    </section>
  );
}
