import type { ReactNode } from "react";

// Renderiza o texto das notícias com uma formatação simples (sem HTML):
//   ## Título          → subtítulo
//   **texto**          → negrito
//   - item             → lista
//   > frase            → citação em destaque
//   linha em branco    → novo parágrafo

function inline(texto: string): ReactNode[] {
  return texto.split(/(\*\*[^*]+\*\*)/g).map((parte, i) =>
    parte.startsWith("**") && parte.endsWith("**") ? (
      <strong key={i} className="font-semibold text-white">
        {parte.slice(2, -2)}
      </strong>
    ) : (
      parte
    )
  );
}

export default function Conteudo({ texto }: { texto: string }) {
  const blocos = texto
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((b) => b.split("\n").map((l) => l.trim()).filter(Boolean))
    .filter((b) => b.length);

  return (
    <div className="space-y-6 text-[17px] leading-[1.8] text-white/75 md:text-lg">
      {blocos.map((linhas, i) => {
        const primeira = linhas[0];

        if (primeira.startsWith("## ")) {
          return (
            <div key={i} className="space-y-4 pt-4">
              <h2 className="font-display text-3xl font-extrabold uppercase italic text-white">
                <span className="mr-3 inline-block h-6 w-1.5 -skew-x-12 bg-liga-red align-middle" />
                {primeira.slice(3)}
              </h2>
              {linhas.length > 1 && <Conteudo texto={linhas.slice(1).join("\n")} />}
            </div>
          );
        }

        if (linhas.every((l) => /^[-*] /.test(l))) {
          return (
            <ul key={i} className="grid gap-2 sm:grid-cols-2">
              {linhas.map((l, j) => (
                <li
                  key={j}
                  className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-4 py-3 text-base"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-liga-gold" />
                  <span>{inline(l.slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (linhas.every((l) => l.startsWith(">"))) {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-liga-gold bg-gradient-to-r from-liga-gold/10 to-transparent py-4 pl-6 pr-4 font-display text-2xl font-semibold italic leading-snug text-white"
            >
              {inline(linhas.map((l) => l.replace(/^>\s?/, "")).join(" "))}
            </blockquote>
          );
        }

        return <p key={i}>{inline(linhas.join(" "))}</p>;
      })}
    </div>
  );
}
