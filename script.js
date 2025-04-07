const perigos = [
    {
        origem: "Tormenta 20 JdA",
        nd: "4",
        tipo: "Desastre Natural",
        nome: "Avalanche",
        imagem: "https://i.gifer.com/7Npe.gif",
        efeito: `
        <p><strong>Objetivo:</strong> Escapar da avalanche.</p>
        <p><strong>Efeito:</strong> O grupo tem cinco rodadas para se afastar dos escombros. No fim da quinta rodada, a posição de cada personagem é definida por sucessos em ações como correr ou carregar outro. Dependendo dos sucessos, os personagens sofrem de 16d6 até nenhum dano.</p>
        <hr>
        <h6 class="text-danger"><strong>Testes:</strong></h6>
        <ul>
          <li><strong>Correr (Atletismo CD 20):</strong> Afasta-se dos escombros. 10 ou mais acima = 2 sucessos.</li>
          <li><strong>Carregar Outro (Atletismo CD 25):</strong> Carrega um aliado e avança com ele.</li>
          <li><strong>Procurar Caminho (Percepção CD 20):</strong> Analisa o terreno e dá bônus para si e aliados.</li>
        </ul>
      `
    },
    {
        origem: "Tormenta 20 JdA",
        nd: "2",
        tipo: "Viagem",
        nome: "Jornada pelos Ermos",
        imagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2863640/extras/MidnightWalk_potboyRun_600x338.gif?t=1742834125",
        efeito: `
        <p><strong>Objetivo:</strong> Chegar ao destino.</p>
        <p><strong>Efeito:</strong> O grupo deve fazer certa quantidade de testes, definidos pelo tamanho da jornada:</p>
        <ul>
          <li><strong>Curta:</strong> 3 testes (mesma região).</li>
          <li><strong>Média:</strong> 5 testes (outra região).</li>
          <li><strong>Longa:</strong> 7 testes (região longínqua).</li>
        </ul>
        <p>Cada falha causa <strong>2d6 de dano</strong>, que só pode ser curado após um dia de descanso. Três falhas reduzem os <strong>PM máximos em 1 por nível</strong> na próxima aventura.</p>
        <hr>
        <h6 class="text-danger"><strong>Testes:</strong></h6>
        <p><strong>Avançar (Sobrevivência ou outras, CD variável):</strong> Personagens se alternam até acumular os sucessos necessários. Pode-se usar outras perícias justificadas, com a condição de que cada uma só pode ser usada uma vez.</p>
        <p><strong>CD por terreno:</strong></p>
        <ul>
          <li>Planícies e colinas: 15</li>
          <li>Florestas e pântanos: 20</li>
          <li>Desertos e montanhas: 25</li>
          <li>Tormenta ou regiões planares: 30</li>
        </ul>
        <p>Este perigo é um <strong>teste estendido</strong> com a variante de testes abertos. Consulte as páginas 223 e 267 para mais detalhes.</p>
      `
    }
];


const origemSelect = document.querySelector("#origem");
const ndSelect = document.querySelector("#nd");
const tipoSelect = document.querySelector("#tipo");
const container = document.querySelector("#perigos-container");

function preencherSelect(select, opcoes) {
    const optionTodos = document.createElement("option");
    optionTodos.value = "todos";
    optionTodos.textContent = "Todos";
    select.appendChild(optionTodos);

    opcoes.forEach(opcao => {
        const option = document.createElement("option");
        option.value = opcao;
        option.textContent = opcao;
        select.appendChild(option);
    });
}

function carregarPerigos() {
    const origens = Array.from(new Set(perigos.map(p => p.origem))).sort();
    const nds = Array.from(new Set(perigos.map(p => p.nd))).sort((a, b) => parseFloat(a) - parseFloat(b));
    const tipos = Array.from(new Set(perigos.map(p => p.tipo))).sort();

    preencherSelect(origemSelect, origens);
    preencherSelect(ndSelect, nds);
    preencherSelect(tipoSelect, tipos);

    origemSelect.addEventListener("change", filtrarPerigos);
    ndSelect.addEventListener("change", filtrarPerigos);
    tipoSelect.addEventListener("change", filtrarPerigos);

    filtrarPerigos();
}

function filtrarPerigos() {
    const origem = origemSelect.value;
    const nd = ndSelect.value;
    const tipo = tipoSelect.value;

    const filtrados = perigos.filter(p =>
        (origem === "todos" || p.origem === origem) &&
        (nd === "todos" || p.nd === nd) &&
        (tipo === "todos" || p.tipo === tipo)
    );

    container.innerHTML = "";
    filtrados.forEach(p => {
        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4";
        card.innerHTML = `
        <div class="card h-100">
          <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
          <div class="card-body">
            <h5 class="card-title text-warning">${p.nome} (ND ${p.nd})</h5>
            <h6 class="card-subtitle mb-2 text-muted">${p.origem} - ${p.tipo}</h6>
            ${p.efeito}
          </div>
        </div>
      `;
        container.appendChild(card);
    });
}

carregarPerigos();
