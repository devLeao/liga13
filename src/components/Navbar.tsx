"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Trophy, Newspaper, Users, Instagram, ArrowRight } from "lucide-react";

const LINKS = [
  { href: "/", label: "Início", icon: Home },
  { href: "/campeonatos", label: "Campeonatos", icon: Trophy },
  { href: "/noticias", label: "Notícias", icon: Newspaper },
  { href: "/sobre", label: "Institucional", icon: Users },
];

type Props = { aviso: string; avisoLink: string; instagram: string };

export default function Navbar({ aviso, avisoLink, instagram }: Props) {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);

  // Trava a rolagem da página enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const ativo = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-50">
        {aviso && (
          <Link
            href={avisoLink || "/noticias"}
            className="group flex items-center justify-center gap-2 bg-gradient-to-r from-liga-red via-liga-ember to-liga-red px-4 py-2 text-center text-xs font-bold tracking-wide text-white sm:text-sm"
          >
            <span className="line-clamp-1">{aviso}</span>
            <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        )}

        <nav className="border-b border-white/5 bg-black/85 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="group flex items-center gap-3" aria-label="Liga 13 - Início">
              <Image
                src="/marca/escudo.png"
                alt=""
                width={44}
                height={51}
                priority
                className="h-11 w-auto drop-shadow-[0_0_12px_rgba(227,178,79,0.35)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
              />
              <Image src="/marca/liga13.png" alt="Liga 13" width={130} height={43} priority className="h-8 w-auto" />
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative px-4 py-2 font-display text-[15px] font-bold uppercase tracking-wider transition-colors ${
                    ativo(l.href) ? "text-liga-gold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-4 -bottom-[17px] h-[3px] rounded-full bg-liga-gold transition-transform duration-300 ${
                      ativo(l.href) ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              ))}
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Liga 13"
                className="ml-3 rounded-full border border-white/10 p-2.5 text-white/70 transition-colors hover:border-liga-gold hover:text-liga-gold"
              >
                <Instagram size={18} />
              </a>
            </div>

            <button
              onClick={() => setAberto(true)}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile */}
      <div
        className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity md:hidden ${
          aberto ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setAberto(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col border-l border-liga-gold/20 bg-liga-black transition-transform duration-300 md:hidden ${
          aberto ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!aberto}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <Image src="/marca/liga13.png" alt="Liga 13" width={110} height={36} className="h-7 w-auto" />
          <button onClick={() => setAberto(false)} className="p-2 text-white/70 hover:text-white" aria-label="Fechar menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-4">
          {LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setAberto(false)}
              className={`flex items-center gap-4 rounded-xl px-4 py-4 font-display text-2xl font-bold uppercase italic transition-colors ${
                ativo(href) ? "bg-liga-gold/10 text-liga-gold" : "text-white/90 hover:bg-white/5"
              }`}
            >
              <Icon size={22} className={ativo(href) ? "text-liga-gold" : "text-liga-red"} />
              {label}
            </Link>
          ))}
        </div>
        <div className="mt-auto border-t border-white/10 p-5">
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-white/5 py-3 text-sm font-bold text-white/80"
          >
            <Instagram size={18} /> @liga13_zonanorte
          </a>
        </div>
      </aside>
    </>
  );
}
