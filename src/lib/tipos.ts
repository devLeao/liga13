export type Noticia = {
  id: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  /** Texto com formatação simples: parágrafos, ## título, **negrito**, - lista, > citação */
  conteudo: string;
  categoria: string;
  /** AAAA-MM-DD */
  data: string;
  imagem: string;
  galeria: string[];
  video: string;
  destaque: boolean;
  publicado: boolean;
};

export type Campeonato = {
  id: string;
  nome: string;
  status: string;
  periodo: string;
  equipes: string;
  imagem: string;
  descricao: string;
  /** Link opcional (notícia, regulamento, inscrição) */
  link: string;
};

export type Campeao = {
  id: string;
  ano: string;
  torneio: string;
  campeao: string;
  vice: string;
};

export type ConfigSite = {
  aviso: string;
  avisoLink: string;
  estatisticas: { valor: string; rotulo: string }[];
  instagram: string;
};

export type Colecoes = {
  noticias: Noticia[];
  campeonatos: Campeonato[];
  campeoes: Campeao[];
  site: ConfigSite;
};

export const CATEGORIAS = ["Resultados", "Inscrições", "Institucional", "Bastidores", "Agenda"];
export const STATUS_CAMPEONATO = ["Inscrições Abertas", "Em Andamento", "Em Breve", "Encerrado"];
