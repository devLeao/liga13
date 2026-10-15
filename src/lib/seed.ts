import type { Colecoes } from "./tipos";

// Conteúdo do site: notícias, campeonatos, campeões e configurações gerais.

const FOTOS_CT3 = "/noticias/copa-talentos-3";

export const seed: Colecoes = {
  noticias: [
    {
      id: "cfa-campeao-copa-talentos-da-bola-3",
      titulo: "CFA é campeão da 3ª Copa Talentos da Bola!",
      subtitulo:
        "Centro de Formação de Atletas supera a Águia Dourada, levanta a taça e ainda leva quase toda a premiação individual.",
      resumo:
        "O CFA conquistou a 3ª edição da Copa Talentos da Bola, com a Águia Dourada como vice. O time ainda levou Melhor Treinador, Craque da Final e Goleiro Menos Vazado.",
      conteudo: `A terceira edição da Copa Talentos da Bola chegou ao fim, e ela tem dono. O **CFA (Centro de Formação de Atletas)** confirmou a força do seu trabalho de base e levantou a taça da **Copa dos Campeões Gásmauro**, coroando uma campanha de muita entrega, disciplina e talento dentro de quadra.

Na decisão, a garotada do CFA superou a **Águia Dourada**, que fez uma grande competição e fica com um vice-campeonato merecido, fruto de uma equipe que brigou até o último minuto.

## Premiação

O CFA não levou só a taça. O time praticamente fez a limpa na premiação individual:

- **Campeão:** CFA
- **Vice-campeão:** Águia Dourada
- **Artilheiro:** E.F. Artilheiros
- **Melhor Treinador:** CFA
- **Craque da Final:** CFA
- **Goleiro Menos Vazado:** CFA

## Bicampeonato consecutivo

O prêmio de Melhor Treinador também ficou em casa. O comandante do CFA conquistou o **bicampeonato consecutivo**, consolidando um trabalho que vem dando resultado temporada após temporada.

A defesa também foi destaque: o CFA terminou com o **Goleiro Menos Vazado** da competição, e o **Craque da Final** saiu do elenco campeão, fechando com chave de ouro uma decisão que entra para a história da Copa.

## Artilharia

O troféu de Artilheiro foi para a **E.F. Artilheiros**, que fez jus ao nome e terminou a competição com o goleador da Copa.

> A Copa Talentos da Bola segue cumprindo sua missão: revelar talentos e fazer o futsal de base crescer na Zona Norte de BH.

## Obrigado!

A Liga 13 agradece a todas as equipes, atletas, famílias, comissões técnicas e à arbitragem, e especialmente aos patrocinadores que tornaram possível mais uma edição, com destaque para a **Gásmauro** e a **Provernet**, que dão nome à taça.

Até a próxima edição!`,
      categoria: "Resultados",
      data: "2026-10-14",
      imagem: `${FOTOS_CT3}/campeao-cfa.webp`,
      galeria: [
        `${FOTOS_CT3}/campeao-cfa.webp`,
        `${FOTOS_CT3}/taca.webp`,
        `${FOTOS_CT3}/melhor-treinador-cfa.webp`,
        `${FOTOS_CT3}/craque-final-goleiro.webp`,
        `${FOTOS_CT3}/artilheiro.webp`,
      ],
      video: `${FOTOS_CT3}/premiacao.mp4`,
      destaque: true,
      publicado: true,
    },
    {
      id: "1",
      titulo: "3ª Edição Copa Talentos da Bola",
      subtitulo: "A vitrine que revela os novos craques da várzea está de volta!",
      resumo:
        "A Copa Talentos da Bola voltou! Depois do sucesso das outras edições, a terceira edição chegou com tudo. Restam poucas vagas.",
      conteudo: `A **COPA TALENTOS DA BOLA** é uma competição esportiva organizada com o objetivo de promover o esporte, a integração entre atletas e equipes, além da valorização de novos talentos no futsal e no futebol society, prezando sempre pelo respeito, disciplina e fair play.

A inscrição das equipes só será validada após o pagamento da taxa e o envio da relação de atletas e comissão técnica dentro do prazo estipulado. A organização é responsável por definir a tabela, horários e locais dos jogos.`,
      categoria: "Inscrições",
      data: "2026-02-07",
      imagem: "/noticias/news1.jpg",
      galeria: [],
      video: "",
      destaque: false,
      publicado: true,
    },
    {
      id: "2",
      titulo: "Liga 13 agora é FEM7SOC",
      subtitulo: "Um passo gigante para o nosso futsal amador!",
      resumo:
        "Agora somos filiados à Federação Mineira de Fut7. Isso garante vaga em competições estaduais e profissionalização total da arbitragem.",
      conteudo: `É com orgulho que anunciamos a filiação oficial da Liga 13 à **Federação Mineira de Fut7 (FEM7SOC)**.

Essa parceria garante que nossas competições sigam padrões profissionais, reforçando que as decisões da arbitragem em quadra e campo são soberanas. Atitudes antidesportivas, ofensas ou agressões não serão toleradas, podendo resultar em cartões, suspensão ou eliminação imediata.`,
      categoria: "Institucional",
      data: "2026-02-05",
      imagem: "/noticias/news2.jpg",
      galeria: [],
      video: "",
      destaque: false,
      publicado: true,
    },
    {
      id: "3",
      titulo: "EJC Milionários é Campeão!",
      subtitulo: "Título conquistado em uma final épica e cheia de reviravoltas.",
      resumo:
        "Haja coração! Em uma final com duas viradas e gol nos acréscimos, o Milionários vence por 4x3 e levanta a taça da 2ª Copa EJC na arena lotada.",
      conteudo: `O **EJC Milionários** sagrou-se campeão após uma trajetória brilhante. A competição, que preza pelo respeito e disciplina, contou com uma premiação completa.

Foram entregues troféus e medalhas para o Campeão e Vice-campeão, além de prêmios individuais para o Artilheiro e o Melhor Goleiro da competição. A organização reforça que o sucesso do evento se deu pelo cumprimento rigoroso do regulamento por parte das equipes.`,
      categoria: "Resultados",
      data: "2026-02-02",
      imagem: "/noticias/news3.jpg",
      galeria: [],
      video: "",
      destaque: false,
      publicado: true,
    },
  ],

  campeonatos: [
    {
      id: "copa-talentos-3",
      nome: "3ª Copa Talentos da Bola",
      status: "Encerrado",
      periodo: "2026",
      equipes: "Campeão: CFA",
      imagem: `${FOTOS_CT3}/campeao-cfa.webp`,
      descricao:
        "A vitrine da base da Zona Norte. Nesta edição, o CFA levantou a taça e dominou a premiação individual.",
      link: "/noticias/cfa-campeao-copa-talentos-da-bola-3",
    },
    {
      id: "copa-ejc-2",
      nome: "Copa EJC 2ª Edição",
      status: "Encerrado",
      periodo: "Temporada 2025",
      equipes: "8 equipes",
      imagem: "/noticias/copaejc.jpeg",
      descricao: "Final eletrizante com duas viradas: EJC Milionários 4x3 e taça na arena lotada.",
      link: "/noticias/3",
    },
  ],

  campeoes: [
    { id: "ct3", ano: "2026", torneio: "3ª Copa Talentos da Bola", campeao: "CFA", vice: "Águia Dourada" },
    { id: "ejc2", ano: "2025", torneio: "Copa EJC 2ª Edição", campeao: "EJC Milionários", vice: "EJC Lagoa" },
    { id: "ct", ano: "2025", torneio: "Copa Talentos da Bola", campeao: "Kolping", vice: "CFA Futsal" },
  ],

  site: {
    aviso: "CFA é campeão da 3ª Copa Talentos da Bola! Confira a premiação completa",
    avisoLink: "/noticias/cfa-campeao-copa-talentos-da-bola-3",
    estatisticas: [
      { valor: "+40", rotulo: "Times ativos" },
      { valor: "+100", rotulo: "Jogos por ano" },
      { valor: "3", rotulo: "Anos de história" },
    ],
    instagram: "https://www.instagram.com/liga13_zonanorte/",
  },
};
