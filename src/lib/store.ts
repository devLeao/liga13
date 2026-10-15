import "server-only";
import { seed } from "./seed";
import type { Colecoes } from "./tipos";

// Ponto único de leitura do conteúdo do site. Hoje vem de seed.ts;
// quando o painel admin entrar, basta trocar a origem aqui.
export async function ler<K extends keyof Colecoes>(chave: K): Promise<Colecoes[K]> {
  return structuredClone(seed[chave]);
}
