/*
  ============================================================
  LISTAS DO MERCADO LIVRE — é só editar este arquivo
  ============================================================

  Para adicionar uma lista nova:
  1. Copie um bloco { ... }, do "{" até o "},"
  2. Cole logo abaixo de "const LISTAS = [" (a mais nova fica em cima)
  3. Troque o título, o link e o emoji
  4. Salve (no GitHub: botão "Commit changes")

  Campos:
    titulo    → nome da lista (obrigatório)
    link      → link da lista no Mercado Livre (obrigatório)
    emoji     → um emoji para o cartão (opcional)
    descricao → frase curta abaixo do título (opcional)
    categoria → agrupa as listas nos botões de filtro (opcional)

  As 3 primeiras listas também aparecem na página principal.
  Cuidado: mantenha as aspas "..." e a vírgula no fim de cada bloco.
*/

const LISTAS = [
  {
    titulo: "Perfumes masculinos NOTURNOS",
    link: "https://meli.la/2JT1LqU",
    emoji: "🧔",
    descricao: "PEFUMES EM CONTA PARA USAR A NOITE QUE TE FAZEM CHEIRAR IGUAL RICO - LISTA 1",
    categoria: "Perfumes",
  },
  {
    titulo: "Perfumes masculinos de EMPRESARIO RICO",
    link: "https://meli.la/1qtTUze",
    emoji: "👔",
    descricao: "PEFUMES EM CONTA QUE TE FAZEM CHEIRAR IGUAL EMPRESARIO RICO - LISTA 1",
    categoria: "Perfumes",
  },
  {
    titulo: "Fones de Ouvido",
    link: "https://meli.la/1rr2n2s",
    emoji: "🎧",
    descricao: "Uma lista de Fones de Ouvido que DURAM e com preço JUSTO para você",
    categoria: "Fones de Ouvido",
  },
  {
    titulo: "Luzes NATALINAS",
    link: "https://meli.la/2TqzYGG",
    emoji: "✨",
    descricao: "Uma lista de Luzes e Pisca-Piscas com preço JUSTO para você",
    categoria: "Luzes Natalinas",
  },
  {
    titulo: "Enfeites NATALINOS",
    link: "https://meli.la/2jUQ6ox",
    emoji: "🌟",
    descricao: "Uma lista de Enfeites natalinos para você decorar sua árvore ou casa com preço JUSTO",
    categoria: "Enfeites Natalinos",
  },
  {
    titulo: "Árvores de NATAL ",
    link: "https://meli.la/1QDN8tz",
    emoji: "🎄",
    descricao: "Uma árvores de Natal com um BELO DESCONTO para você aproveitar nesse Natal",
    categoria: "Árvore de Natal",
  },
];
