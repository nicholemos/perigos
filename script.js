function carregarPerigos(perigos) {
  const container = document.getElementById('lista-perigos');
  container.innerHTML = '';

  perigos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card mb-4 perigo';
    card.dataset.origem = p.origem;
    card.dataset.nd = p.nd;
    card.dataset.tipo = p.tipo;

    card.innerHTML = `
      <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
      <div class="card-body">
        <h5 class="card-title">${p.nome} (ND ${p.nd})</h5>
        <p><strong>Origem:</strong> ${p.origem}</p>
        <p><strong>Tipo:</strong> ${p.tipo}</p>
        <p><strong>Objetivo:</strong> ${p.objetivo}</p>
        <p><strong>Efeito:</strong> ${p.efeito}</p>
        <h6>Testes:</h6>
        <ul>
          ${p.testes.map(t => `<li><strong>${t.nome} (CD ${t.cd}):</strong> ${t.descricao}</li>`).join('')}
        </ul>
      </div>
    `;
    container.appendChild(card);
  });
}

function aplicarFiltros(perigos) {
  const origem = document.getElementById('origem').value.toLowerCase();
  const nd = document.getElementById('nd').value;
  const tipo = document.getElementById('tipo').value.toLowerCase();

  const filtrados = perigos.filter(p => {
    const matchOrigem = !origem || p.origem.toLowerCase() === origem;
    const matchNd = !nd || p.nd === nd;
    const matchTipo = !tipo || p.tipo.toLowerCase() === tipo;
    return matchOrigem && matchNd && matchTipo;
  });

  carregarPerigos(filtrados);
}

fetch('https://raw.githubusercontent.com/usuario/perigos-complexos/main/data/perigos.json')
  .then(res => res.json())
  .then(data => {
    carregarPerigos(data);

    document.querySelectorAll('.filtro').forEach(filtro => {
      filtro.addEventListener('change', () => aplicarFiltros(data));
    });
  });
