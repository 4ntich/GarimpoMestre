# Garimpo Mestre

Página "link na bio" do Instagram **@garimpo.mestre**, com o botão para entrar no canal VIP de achados de perfumes no WhatsApp.

Endereço: **https://4ntich.github.io/GarimpoMestre/**

## Páginas

- **Principal:** https://4ntich.github.io/GarimpoMestre/ — canal VIP + as 3 listas mais recentes
- **Listas do Mercado Livre:** https://4ntich.github.io/GarimpoMestre/listas/ — todas as listas, com busca e filtro por categoria

## Adicionar uma lista nova (pelo celular)

1. Abra o repositório no GitHub e toque no arquivo **`listas.js`**
2. Toque no lápis ✏️ (Edit)
3. Copie um bloco `{ ... },` e cole logo abaixo de `const LISTAS = [` — **a mais nova fica em cima**
4. Troque `titulo`, `link`, `emoji` (e, se quiser, `descricao` e `categoria`)
5. Toque em **Commit changes**. Em 1–2 minutos aparece nas duas páginas

A lista do topo ganha a etiqueta **NOVA** automaticamente. Os botões de filtro aparecem sozinhos quando houver mais de uma categoria.

## Arquivos

- `index.html` — a página inteira (HTML e CSS num arquivo só)
- `listas.js` — **as listas do Mercado Livre (é só editar este)**
- `listas/index.html` — página com todas as listas
- `assets/listas-render.js` — monta os cartões das listas (não precisa mexer)
- `assets/avatar.jpg` — logo/foto de perfil (troque por outra imagem quadrada com o mesmo nome)
- `assets/og-garimpo.jpg` — imagem de prévia quando o link é compartilhado (1200×630)

## Como editar

- **Link do canal:** procure `whatsapp.com/channel` no `index.html`
- **Textos:** título no `<h1>`, selos em `.chips`, descrição em `.lead`
- **Cores:** variáveis no topo do `<style>` (`--gold-1/2/3` são os tons de vermelho do destaque)

## Publicar no GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
