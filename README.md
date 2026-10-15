# Liga 13

Site oficial da Liga 13. Next.js 16 · React 19 · Tailwind CSS 4

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Onde editar o conteúdo

Notícias, campeonatos, galeria de campeões, faixa de aviso do topo e números da Liga ficam em
[`src/lib/seed.ts`](src/lib/seed.ts).

### Formatação do texto das notícias

| Escreva         | Resultado                 |
| --------------- | ------------------------- |
| `## Título`     | subtítulo dentro do texto |
| `**texto**`     | negrito                   |
| `- item`        | lista                     |
| `> frase`       | citação em destaque       |
| linha em branco | novo parágrafo            |

Fotos das notícias ficam em `public/noticias/`.
