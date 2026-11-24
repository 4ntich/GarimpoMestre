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
    titulo: "Exemplo: Achados para casa",
    link: "https://www.mercadolivre.com.br/",
    emoji: "🏠",
    descricao: "Troque este exemplo pela sua lista",
    categoria: "Casa",
  },
];
