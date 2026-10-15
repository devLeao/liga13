import type { Metadata } from "next";
import CabecalhoPagina from "@/components/CabecalhoPagina";
import ListaNoticias from "./ListaNoticias";
import { ler } from "@/lib/store";
import { ordenarNoticias } from "@/lib/formato";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Resultados, inscrições e tudo o que acontece na Liga 13.",
};

export default async function Noticias() {
  const noticias = ordenarNoticias((await ler("noticias")).filter((n) => n.publicado));
  return (
    <>
      <CabecalhoPagina
        sobretitulo="Fique por dentro"
        titulo="Notícias"
        destaque="da Liga"
        descricao="Resultados, inscrições, bastidores e tudo o que rola nas quadras da Liga 13."
      />
      <ListaNoticias noticias={noticias} />
    </>
  );
}
