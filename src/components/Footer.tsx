import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";

export default function Footer({ instagram }: { instagram: string }) {
  return (
    <footer className="border-t border-liga-gold/20 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12 lg:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Image src="/marca/escudo.png" alt="" width={48} height={56} className="h-14 w-auto" />
            <Image src="/marca/liga13.png" alt="Liga 13" width={140} height={46} className="h-9 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
            Organização, paixão e competitividade. O palco dos grandes craques do futsal e do society na Zona Norte
            de Belo Horizonte. Filiada à FEM7SOC.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white">Navegação</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/55">
            {[
              ["/", "Início"],
              ["/campeonatos", "Campeonatos"],
              ["/noticias", "Notícias"],
              ["/sobre", "Institucional"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-liga-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-lg font-bold uppercase tracking-wider text-white">Contato</h4>
          <p className="mt-5 flex items-center gap-3 text-sm text-white/55">
            <MapPin size={18} className="shrink-0 text-liga-gold" /> Mantiqueira, Belo Horizonte - MG
          </p>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-bold text-white/80 transition-colors hover:border-liga-red hover:bg-liga-red hover:text-white"
          >
            <Instagram size={18} /> @liga13_zonanorte
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Liga 13. Desenvolvido por{" "}
            <a
              href="https://devleao.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold uppercase tracking-wider text-liga-gold hover:text-white"
            >
              Dev Leão
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
