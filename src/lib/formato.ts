const MESES = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];
const MESES_LONGOS = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

/** "2026-10-14" → "14 OUT 2026" */
export function dataCurta(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  if (!a || !m || !d) return iso;
  return `${String(d).padStart(2, "0")} ${MESES[m - 1]} ${a}`;
}

/** "2026-10-14" → "14 de outubro de 2026" */
export function dataLonga(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  if (!a || !m || !d) return iso;
  return `${d} de ${MESES_LONGOS[m - 1]} de ${a}`;
}

export function slugify(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/ª|º/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function hojeISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Notícias publicadas, mais recentes primeiro. */
export function ordenarNoticias<T extends { data: string }>(lista: T[]) {
  return [...lista].sort((a, b) => b.data.localeCompare(a.data));
}

export function tempoLeitura(texto: string) {
  return Math.max(1, Math.round(texto.split(/\s+/).length / 200));
}
