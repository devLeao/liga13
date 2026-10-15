import Link from "next/link";

export default function NaoEncontrado() {
  return (
    <section className="bg-brasa flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-[120px] font-black italic leading-none text-white/10">404</p>
      <h1 className="font-display text-4xl font-black uppercase italic">Bola fora!</h1>
      <p className="mt-3 text-white/60">A página que você procurou não existe ou foi removida.</p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-liga-gold px-7 py-3 text-sm font-black uppercase tracking-wider text-black hover:bg-white"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
