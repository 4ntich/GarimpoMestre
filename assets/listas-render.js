/* Monta os cartões das listas. Usado pela página principal e pela página /listas/.
   Os dados ficam em listas.js — não precisa mexer aqui. */
window.GM = {
  listas: function () {
    var dados = (typeof LISTAS !== 'undefined' && Array.isArray(LISTAS)) ? LISTAS : [];
    return dados.filter(function (l) {
      return l && l.titulo && /^https:\/\//i.test(String(l.link || '').trim());
    });
  },

  desenhar: function (alvo, itens, maisNova) {
    alvo.textContent = '';
    itens.forEach(function (l, i) {
      var a = document.createElement('a');
      a.className = 'item';
      a.href = String(l.link).trim();
      a.target = '_blank';
      a.rel = 'noopener';
      a.style.animationDelay = Math.min(i, 10) * 40 + 'ms';

      var em = document.createElement('span');
      em.className = 'item__emoji';
      em.setAttribute('aria-hidden', 'true');
      em.textContent = l.emoji || '🛒';

      var body = document.createElement('span');
      body.className = 'item__body';
      var t = document.createElement('span');
      t.className = 'item__title';
      t.textContent = l.titulo;
      if (l === maisNova) {
        var tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = 'NOVA';
        t.appendChild(tag);
      }
      body.appendChild(t);
      if (l.descricao) {
        var d = document.createElement('span');
        d.className = 'item__desc';
        d.style.display = 'block';
        d.textContent = l.descricao;
        body.appendChild(d);
      }

      var seta = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      seta.setAttribute('viewBox', '0 0 24 24');
      seta.setAttribute('class', 'item__arrow');
      seta.setAttribute('aria-hidden', 'true');
      seta.innerHTML = '<path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';

      a.appendChild(em);
      a.appendChild(body);
      a.appendChild(seta);
      alvo.appendChild(a);
    });
  }
};
