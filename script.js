const perigos = [
  {
    origem: "Tormenta 20 JdA",
    nd: "4",
    tipo: "Desastre",
    nome: "Avalanche",
    imagem: "https://i.gifer.com/7Npe.gif",
    efeito: `
      <strong>Objetivo:</strong> Escapar da avalanche.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo tem <strong>5 rodadas</strong> para se afastar dos escombros.</li>
        <li>Ao final, a posição de cada personagem é determinada pelos <strong>sucessos acumulados</strong> nas ações <em>Correr</em> ou <em>Carregar Outro</em>:</li>
        <ul>
          <li><strong>2 ou menos sucessos:</strong> Fica na <strong>zona de soterramento</strong> e sofre <strong>16d6 de dano de impacto</strong>, ficando <strong>soterrado</strong>.</li>
          <li><strong>3 ou 4 sucessos:</strong> Fica na <strong>zona de deslizamento</strong> e sofre <strong>8d6 de dano de impacto</strong>.</li>
          <li><strong>5 ou mais sucessos:</strong> <strong>Escapa ileso</strong>.</li>
        </ul>
      </ul>
      <hr>
      <ul>
        <li><strong>Percepção:</strong> Um teste de <strong>Sobrevivência (CD 20)</strong> permite perceber a avalanche. Sucesso concede uma <strong>ação adicional</strong> na primeira rodada.</li>
        <li><strong>Soterrado:</strong> Um personagem soterrado:
          <ul>
            <li>Fica <strong>imóvel</strong>.</li>
            <li>Sofre <strong>1d6 de dano</strong> no início de cada turno.</li>
            <li>Para se soltar (ou soltar um aliado), é necessário um teste de <strong>Força (CD 25)</strong>.</li>
            <li>Aliados podem ajudar (ver p. 221).</li>
          </ul>
        </li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Correr (Atletismo CD 20):</strong> Corre para longe da avalanche. Um sucesso com margem de 10+ ou um 20 natural conta como <strong>2 sucessos</strong>. Pode ser substituído por <em>Cavalgar</em> ou <em>Pilotagem</em>.</li>
        <li><strong>Carregar Outro (Atletismo CD 25):</strong> Carrega um aliado próximo. Se passar, <strong>ambos ganham 1 sucesso</strong>.</li>
        <li><strong>Procurar Caminho (Percepção CD 20):</strong> Analisa o terreno. Se passar, ganha <strong>+5</strong> nos testes de <em>Correr</em> e <em>Carregar Outro</em>.</li>
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
      <ul>
        <li><strong>Objetivo:</strong> Chegar ao destino.</li>
      </ul>
      <hr>
      <ul>
        <li>
          <strong>Efeito:</strong> O grupo deve acumular uma quantidade de <strong>sucessos</strong> em testes, conforme a distância da jornada:
          <ul>
            <li><strong>Curta:</strong> até outro reino na mesma região — <strong>3 testes</strong></li>
            <li><strong>Média:</strong> até outra região (ex: do Reinado às Repúblicas Livres) — <strong>5 testes</strong></li>
            <li><strong>Longa:</strong> até regiões longínquas (ex: Deserto da Perdição, Lamnor) — <strong>7 testes</strong></li>
          </ul>
          Para cada <strong>falha</strong>, os personagens sofrem <strong>2d6 pontos de dano</strong>, representando cansaço e desgaste. Esse dano só pode ser curado <strong>um dia após</strong> o fim da jornada.<br><br>
          Se o grupo acumular <strong>3 falhas</strong>, cada personagem perde <strong>1 PM máximo por nível</strong> na próxima aventura, como reflexo do esgotamento extremo.
        </li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li>
          <strong>Avançar (Sobrevivência ou outra, CD variável):</strong> Os personagens se revezam realizando testes até acumularem os sucessos exigidos (ou atingirem 3 falhas).
          <ul>
            <li>Os testes podem ser de <strong>Sobrevivência</strong> ou qualquer outra perícia que o jogador consiga justificar e o mestre aprove.</li>
            <li>Exemplos:
              <ul>
                <li><strong>Pilotagem:</strong> se o personagem tiver um veículo para levar o grupo.</li>
                <li><strong>Diplomacia:</strong> para pedir abrigo ou indicações (se houver pessoas no caminho).</li>
              </ul>
            </li>
            <li><strong>Nota:</strong> Cada perícia diferente de Sobrevivência só pode ser usada <strong>uma vez por jornada</strong>.</li>
          </ul>
        </li>
        <li>
          <strong>CD conforme o terreno:</strong>
          <ul>
            <li><strong>15</strong> – Planícies e colinas</li>
            <li><strong>20</strong> – Florestas e pântanos</li>
            <li><strong>25</strong> – Desertos ou montanhas</li>
            <li><strong>30</strong> – Regiões planares perigosas ou áreas de Tormenta</li>
          </ul>
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <strong>Nota para o Mestre:</strong> Este perigo é um <em>teste estendido</em>, utilizando a <strong>variante de testes abertos</strong> (veja p. 223). Recomendado usá-lo com as regras de “<strong>Jornadas em Montagem</strong>” (p. 267) para resolver viagens de forma ágil.
          <ul>
            <li>O grupo sempre <strong>chegará ao destino</strong> — o risco está no estado em que chegam.</li>
            <li>Para jornadas que possam <strong>falhar de verdade</strong>, considere reiniciar a viagem após 3 falhas, indicando que o grupo se perdeu e teve que retornar.</li>
            <li>Para aventuras mais detalhadas, é possível expandir este sistema com regras para mantimentos, encontros aleatórios, perigos ambientais, etc. Nesse caso, trata-se de uma aventura completa, e não apenas um perigo.</li>
          </ul>
        </li>
      </ul>
    `
  },

  {
    origem: "Tormenta 20 JdA",
    nd: "9",
    tipo: "Masmorra",
    nome: "Sala Esmagadora",
    imagem: "https://i.makeagif.com/media/1-13-2023/R9-LFa.gif",
    efeito: `
      <strong>Objetivo:</strong> Abrir a porta e sair da sala ou desabilitar o mecanismo.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo cai em uma armadilha. A porta se fecha e as paredes se movem.</li>
        <li><strong>3 rodadas</strong> para escapar.</li>
        <li>Na <strong>quarta rodada</strong>: 10d6 de dano de impacto a todos que estiverem na sala.</li>
        <li>Na <strong>quinta rodada</strong>: morte instantânea a quem permanecer na sala.</li>
        <li><strong>Âncora Dimensional</strong>: bloqueia teleporte e viagens planares.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Derrubar Porta (Força CD 30):</strong> Acumular <strong>3 sucessos</strong>. Máximo 2 personagens por rodada.</li>
        <li><strong>Desabilitar Mecanismo (Ladinagem CD 30):</strong> Acumular <strong>3 sucessos</strong> desativa o mecanismo permanentemente.</li>
        <li><strong>Segurar Paredes (Força CD 25):</strong> Cada <strong>2 sucessos</strong> concede <strong>+1 rodada extra</strong>.</li>
      </ul>
    `
  },

  {
    origem: "Tormenta 20 JdA",
    nd: "6",
    tipo: "Viagem",
    nome: "Tempestade em Alto Mar",
    imagem: "https://gifdb.com/images/high/intense-sinking-ship-6umyix3jg0hqpj6l.webp",
    efeito: `
    <strong>Objetivo:</strong> Sobreviver à fúria do mar.
    <hr>
    <strong>Efeito:</strong>
    <ul>
      <li>Duração: 1d6+6 rodadas.</li>
      <li>No início do turno, teste de Reflexos (CD 20 + 1d6):
        <ul>
          <li>Falha: sofre 4d6 de dano de impacto.</li>
          <li>Falha por 10 ou mais: dano + cair no mar.</li>
          <li>No mar: falha automática.</li>
        </ul>
      </li>
      <li><strong>Percepção (Sobrevivência CD 20):</strong> Concede ação adicional na primeira rodada.</li>
    </ul>
    <hr>
    <h6 class="text-danger"><strong>Testes:</strong></h6>
    <ul>
      <li><strong>Navegar (Pilotagem CD 25):</strong> Reduz a duração da tempestade.</li>
      <li><strong>Ajudar o Piloto (CD variável):</strong> Ajuda com qualquer perícia justificada.</li>
      <li><strong>Esconder-se:</strong> Reduz CD para Reflexos, mas impede ajudar ou pilotar.</li>
      <li><strong>Voltar para o Navio (Atletismo CD 25):</strong> Exige 2 sucessos. Falha por 5+: afunda.</li>
    </ul>
  `
  },
  {
    origem: "Ameaças de Arton",
    nd: "17",
    tipo: "Viagem",
    nome: "Vagalhão Kobold",
    imagem: "https://i.imgflip.com/9q25pb.gif",
    efeito: `
      <strong>Objetivo:</strong> Sobreviver ao frenesi selvagem.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>Duração: 1d8+6 rodadas.</li>
        <li>Teste de Fortitude (CD 40 + 1d10):
          <ul>
            <li>Falha: 12d12 de dano de corte.</li>
            <li>Falha por 5+: dano + fica caído.</li>
          </ul>
        </li>
        <li>Armadura avariada. Sem armadura: +2d12 de dano.</li>
        <li>No fim da rodada: role para roubo de itens mágicos.
          <ul>
            <li>CD para recuperar: Sobrevivência CD 35 + rodadas.</li>
            <li>25% de chance de destruição.</li>
          </ul>
        </li>
        <li><strong>Enxame:</strong> Imune a manobras, efeitos de alvo único, sofre metade de armas, vulnerável a dano em área.</li>
        <li><strong>600 de dano em 1 rodada:</strong> duração –1 rodada, próximo turno com dano reduzido e sem roubo/avaria.</li>
        <li><strong>Percepção (CD 35):</strong> Concede ação adicional.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Atacar (Def 50):</strong> Sofre –5 à distância. Cada erro corpo a corpo: 4d12 de dano.</li>
        <li><strong>Conjurar (Vontade CD 35 + PM):</strong> Falha: perde PM e magia.</li>
        <li><strong>Esconder Item (Ladinagem CD 35):</strong> Usa 1d10 para checar roubo em vez do padrão.</li>
        <li><strong>Latir (Atuação ou Enganação CD 35):</strong> Imune a efeitos do vagalhão por 1 rodada, mas acumula –1 em perícias.</li>
        <li><strong>Levantar-se (Atletismo ou Acrobacia CD 35):</strong> Levanta-se da massa kobold.</li>
        <li><strong>Proteger-se:</strong> +5 no próximo teste de Fortitude.</li>
        <li><strong>Ajudar (CD variável):</strong> Usa qualquer perícia justificada para ajudar aliados.</li>
      </ul>
    `
  },

  {
    origem: "Ameaças de Arton",
    nd: "10",
    tipo: "Exploração",
    nome: "Biblioteca em Ruínas",
    imagem: "https://media.tenor.com/Vs2yOGEQXMoAAAAM/dr-who-doctor-who.gif",
    efeito: `
      <ul>
        <li><strong>Objetivo:</strong> Obter a informação necessária antes que a biblioteca desabe.</li>
      </ul>
      <hr>
      <ul>
        <li>
          <strong>Efeito:</strong> O grupo precisa acumular <strong>6 sucessos</strong> nas ações listadas em até <strong>4 rodadas</strong>.
          <ul>
            <li>Na <strong>5ª rodada</strong>, a biblioteca entra em colapso — quem estiver dentro sofre <strong>12d6 de dano de impacto</strong>.</li>
            <li>Na <strong>6ª rodada</strong>, ela desaba completamente — quem estiver dentro sofre <strong>20d6 de dano de impacto</strong>.</li>
          </ul>
          <br>
          <strong>Evento Aleatório (1d6 no início de cada rodada):</strong>
          <ul>
            <li><strong>1-3)</strong> <em>Desmoronamento de livros:</em> Estantes caem. Cada personagem sofre <strong>4d6 de dano de impacto</strong> (Reflexos CD 25 evita).</li>
            <li><strong>4)</strong> <em>Pequeno incêndio:</em> Qualquer personagem pode abrir mão da ação para apagá-lo (Destreza CD 15). Enquanto ativo, a CD de todos os testes aumenta em +2 por rodada.</li>
            <li><strong>5)</strong> <em>Fissura no chão:</em> Testar Acrobacia ou Atletismo (CD 25). Falha causa tropeço e penalidade de –5 na próxima ação.</li>
            <li><strong>6)</strong> <em>Bloqueio:</em> Um personagem aleatório enfrenta um desabamento. Pode desistir da ação ou testar Atletismo (CD 25). Se falhar, perde a ação e sofre 4d6 de dano.</li>
          </ul>
        </li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Usar Biblioteca (Investigação CD 22):</strong> Percorre os corredores em busca de livros úteis.</li>
        <li><strong>Ajuda Esotérica (Misticismo ou Religião CD 22):</strong> Para temas mágicos ou divinos.</li>
        <li><strong>Julgar pela Capa (Conhecimento CD 22):</strong> Busca títulos relacionados. Sucesso por 10+ (ou 20 natural) vale como dois sucessos.</li>
        <li><strong>Palpite Fortuito (Intuição CD 22):</strong> Usa intuição para escolher livros úteis.</li>
        <li><strong>Coordenar Pesquisa (Conhecimento CD 10):</strong> Ajuda os colegas. Não gera sucesso, mas dá bônus a todos na rodada.</li>
      </ul>
    `
  },

  {
    origem: "Ameaças de Arton",
    nd: "2",
    tipo: "Combate",
    nome: "Briga de Taverna",
    imagem: "https://i.gifer.com/PNw.gif",
    efeito: `
    <ul>
      <li><strong>Objetivo:</strong> Ficar de pé até o fim. A briga dura <strong>1d6+2 rodadas</strong>.</li>
    </ul>
    <hr>
    <ul>
      <li>
        <strong>Efeito:</strong> No início de cada rodada, todos sofrem <strong>2d6+4 de dano de impacto não letal</strong>.
        <ul>
          <li>Quem chegar a 0 PV ou menos não sofre mais dano (brigões têm princípios!).</li>
          <li>Dano letal atrai a ira geral: o personagem passa a sofrer <strong>+1d6+2</strong> de dano extra por rodada a cada uso de dano letal.</li>
        </ul>
      </li>
    </ul>
    <hr>
    <h6 class="text-danger"><strong>Ações:</strong></h6>
    <ul>
      <li><strong>Brigar (Defesa 16):</strong> Ataque. Se causar 15+ de dano, nocauteia o oponente mais próximo e <strong>não sofre dano</strong> na próxima rodada.</li>
      <li><strong>Apartar (Diplomacia ou Intimidação CD 20):</strong> Reduz a duração da briga em 1 rodada.</li>
      <li><strong>Bater Carteiras (Ladinagem CD 20):</strong> Rouba no caos. Sucesso: <strong>T$ 2d8</strong>. Falha por 5+ faz ser pego e sofrer <strong>+1d6 de dano</strong> na próxima rodada.</li>
      <li><strong>Lançar Magia (Von CD 15 + PM):</strong> Lança uma magia. Efeitos a critério do mestre.</li>
      <li><strong>Sair de Fininho (Furtividade CD 20):</strong> Tenta sair da confusão. Se passar, tem <strong>50% de chance</strong> (par no 1d6) de evitar dano na próxima rodada.</li>
    </ul>
  `
  },

  {
    origem: "Ameaças de Arton",
    nd: "5",
    tipo: "Fenômeno Mágico",
    nome: "Ciclone Arcano",
    imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjzp7giAy3f8O2R-3rtdMphmat2FeJ0gkl79PWjeaQ409pyQmRcnUw879LWOhkT5myzyGWOmbhZrED0OetkSd-Lq7fN1t4iJpHGkZyx_c-fj0Ltu8wjNMnx3qs7sACbzKjZY1C4zD9xaf2/s1600/c_scale%252Cfl_progressive%252Cq_80%252Cw_800.gif",
    efeito: `
    <ul>
      <li><strong>Objetivo:</strong> Escapar do ciclone arcano.</li>
    </ul>
    <hr>
    <ul>
      <li>
        <strong>Efeito:</strong> Os personagens têm <strong>5 rodadas</strong> para acumular sucessos nas ações abaixo.
        <ul>
          <li><strong>2 ou menos sucessos:</strong> No centro. Sofre <strong>16d6 de dano de essência</strong> e perde <strong>4d4 PM</strong>.</li>
          <li><strong>3 ou 4 sucessos:</strong> Na orla. Sofre <strong>8d6 de dano de essência</strong> e perde <strong>2d4 PM</strong>.</li>
          <li><strong>5 ou mais sucessos:</strong> Escapa ileso.</li>
        </ul>
      </li>
    </ul>
    <hr>
    <ul>
      <li><strong>Aviso Prévio:</strong> Um teste de <strong>Misticismo (CD 20)</strong> detecta o fenômeno. Quem passar, age uma vez extra na primeira rodada.</li>
    </ul>
    <hr>
    <h6 class="text-danger"><strong>Ações:</strong></h6>
    <ul>
      <li><strong>Correr (Atletismo CD 20):</strong> Corre para longe. Sucesso por 10+ (ou 20 natural) conta como 2 sucessos. Pode ser substituído por Cavalgar ou Pilotagem.</li>
      <li><strong>Carregar Outro (Atletismo CD 25):</strong> Carrega um aliado próximo com no máximo 1 sucesso de diferença. Ambos ganham 1 sucesso.</li>
      <li><strong>Bloquear (Misticismo CD 15):</strong> Usa magia para conter os efeitos. Garante 1 sucesso. Só pode ser feito uma vez por personagem.</li>
      <li><strong>Resistir (Von CD 20):</strong> Tenta resistir aos efeitos em vez de fugir.</li>
    </ul>
  `
  },

  {
    origem: "Ameaças de Arton",
    nd: "8",
    tipo: "Perigo Ambiental",
    nome: "Construção em Colapso",
    imagem: "https://media1.giphy.com/media/l0HlW0xP8iEILoy7m/giphy.gif",
    efeito: `
      <strong>Objetivo:</strong> Escapar da construção antes que ela desabe completamente.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>Os personagens estão em uma vasta construção prestes a desabar.</li>
        <li>Eles têm <strong>7 rodadas</strong> para escapar, acumulando <strong>5 sucessos</strong> em ações de movimentação.</li>
        <li>No início de cada rodada, role <strong>1d6</strong> e aplique um dos efeitos abaixo:</li>
        <ul>
          <li><strong>1-2) Destroços:</strong> Reflexos CD 25. Falha: 4d6 de dano. Falha por 10+: 8d6.</li>
          <li><strong>3-4) Fenda no chão:</strong> Acrobacia ou Atletismo CD 25. Falha: -5 na próxima ação. Falha por 10+: perde a ação.</li>
          <li><strong>5) Bloqueio:</strong> Pode desistir (perde a ação) ou Atletismo CD 25. Falha: 8d6 de dano e perde a ação.</li>
          <li><strong>6) Explosão:</strong> Reflexos CD 30. Falha: 6d6 e -5 no próximo teste. Falha por 10+: 10d6 e perde a ação.</li>
        </ul>
        <li><strong>Rodada Final:</strong> Ao fim da 7ª rodada, quem não tiver 5 sucessos sofre <strong>20d6 de dano</strong>, sem direito a teste.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Avançar (Acrobacia ou Reflexos CD 25):</strong> Move-se com cuidado. Sucesso por 10+ ou 20 natural: <strong>2 sucessos</strong>.</li>
        <li><strong>Correr (Atletismo CD 20):</strong> Corre ignorando perigos, sofre <strong>4d6 de dano</strong>. Sucesso por 10+ ou 20 natural: <strong>2 sucessos</strong>.</li>
        <li><strong>Carregar Outro (Atletismo CD 30):</strong> Leva um aliado (com até 1 sucesso de diferença). Ambos ganham <strong>1 sucesso</strong>. Falha: ambos sofrem dano.</li>
        <li><strong>Procurar Caminho (Percepção CD 20):</strong> Concede <strong>+5</strong> em todos os testes durante este perigo.</li>
      </ul>
    `
  },
  {
    origem: "Ameaças de Arton",
    nd: "3 a 11",
    tipo: "Perigo Ambiental",
    nome: "Grama Carnívora",
    imagem: "https://i.imgflip.com/9q2cvd.gif",
    efeito: `
      <strong>Objetivo:</strong> Sair da área da grama carnívora antes de ser devorado.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>Ao entrar na clareira, os personagens pisam em uma vegetação pegajosa — uma aberração planar.</li>
        <li>A área pode ser pequena (3 sucessos, ND 3), média (5 sucessos, ND 6) ou extensa (7 sucessos, ND 11).</li>
        <li>A cada início de turno:
          <ul>
            <li>Sofrem <strong>1d6 de dano</strong> (ou 2d6/3d6 em áreas maiores).</li>
            <li>Fazem teste de Reflexos CD 20 (ou 25/30 em áreas maiores).</li>
            <li><strong>Falha:</strong> Ficam agarrados e só podem usar a ação <em>Libertar-se</em>.</li>
            <li>A cada rodada agarrado, o dano aumenta em <strong>+1d6</strong>.</li>
          </ul>
        </li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Fugir (Atletismo CD 20):</strong> Corre para fora da área. Sucesso por 10+ ou 20 natural: <strong>2 sucessos</strong>.</li>
        <li><strong>Libertar-se (Atletismo ou Acrobacia CD 20):</strong> Remove o estado de agarrado. Sucesso por 10+: ignora o teste da rodada.</li>
        <li><strong>Conjurar (Vontade CD 20 + PM):</strong> Tenta lançar uma magia. Falha: gasta os PM.</li>
        <li><strong>Atacar (Luta CD 20):</strong> Usa arma de corte para abrir caminho ou libertar aliado. Conta como <strong>1 sucesso</strong> em <em>Fugir</em>.</li>
        <li><strong>Analisar (Sobrevivência CD 20):</strong> Concede <strong>+2</strong> em todos os testes do grupo durante o perigo.</li>
        <li><strong>Identificação Inicial (Sobrevivência CD 20):</strong> Permite agir duas vezes no primeiro turno.</li>
      </ul>
    `
  },
  {
    origem: "Ameaças de Arton",
    nd: "4",
    tipo: "Perigo Ambiental",
    nome: "Inundação de Esgoto",
    imagem: "https://static.wikia.nocookie.net/tmnt/images/2/25/Tumblr_135b9d62386351012b5902afe497fb53_dd46debc_400.gif",
    efeito: `
      <strong>Objetivo:</strong> Sobreviver à inundação.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>Durante exploração subterrânea, uma enxurrada repentina atinge o grupo.</li>
        <li>Duração: <strong>1d4+4 rodadas</strong>.</li>
        <li><strong>Percepção CD 20</strong>: permite agir duas vezes no 1º turno.</li>
        <li>No início de cada rodada:
          <ul>
            <li>Role <strong>1d6</strong> e adicione o resultado à CD de todos os testes (obstáculos).</li>
          </ul>
        </li>
        <li>A água começa a <strong>6m</strong> dos personagens e avança 6m por rodada.</li>
        <li><strong>Alcançado:</strong> −2 nos testes de correr/carregar.</li>
        <li><strong>Ultrapassado:</strong> Engolfado, não pode correr/carregar, sofre <strong>4d6 de dano</strong> no fim do turno e precisa prender a respiração.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Correr (Atletismo CD 20+1d6):</strong> Avança 6m. Sucesso por 10+ ou 20 natural: <strong>2 sucessos</strong>.</li>
        <li><strong>Carregar Outro (Atletismo CD 25+1d6):</strong> Leva um aliado (com até 1 sucesso de diferença). Ambos avançam 6m.</li>
        <li><strong>Evitar Colisão (Atletismo ou Reflexos CD 20+1d6):</strong> Reduz ou evita dano quando engolfado.</li>
        <li><strong>Agarrar-se (Atletismo CD 20+1d6):</strong> Só disponível após sucesso em evitar colisão. Evita dano e mantém a ação nas próximas rodadas.</li>
      </ul>
    `
  },

  {
    origem: "Atlas de Arton",
    nd: "6",
    tipo: "Desastre",
    nome: "Labirinto",
    imagem: "https://i.redd.it/xmncpc7pfavc1.gif",
    efeito: `
      <strong>Objetivo:</strong> Sair do labirinto.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>Para escapar, o grupo precisa acumular sucessos na ação <em>Guiar</em>:</li>
        <ul>
          <li><strong>3 sucessos:</strong> Labirinto pequeno (salas e corredores).</li>
          <li><strong>5 sucessos:</strong> Labirinto médio (subterrâneos de uma cidade pequena).</li>
          <li><strong>7 sucessos:</strong> Labirinto extenso (complexo sob uma metrópole).</li>
        </ul>
        <li>O mestre decide a duração de cada rodada (de 1h a 1 dia).</li>
        <li>No fim de cada rodada, cada personagem faz um teste de <strong>Fortitude (CD 20)</strong>. Falha causa <strong>2d6 de dano</strong>, que só pode ser curado após 1 dia fora do labirinto.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Guiar (Sobrevivência CD 25 ou 30):</strong> Apenas um personagem pode realizar esta ação por rodada.</li>
        <ul>
          <li>CD 25: Caminho padrão.</li>
          <li>CD 30: Caminho mais seguro. Sucesso reduz a CD do teste de Fortitude em <strong>5</strong> nesta rodada.</li>
        </ul>
        <li><strong>Ajudar o Guia (Perícia Variada):</strong> Pode usar qualquer perícia justificada para ajudar, mas cada perícia só pode ser usada uma vez por rodada (ver p. 221).</li>
        <li><strong>Calcular Rota (Conhecimento CD 20):</strong> Sucesso fornece <strong>+5</strong> no próximo teste de <em>Guiar</em>. Falha aumenta a CD do teste de Fortitude em <strong>+5</strong> nesta rodada.</li>
        <li><strong>Proteger-se (Sem teste):</strong> O personagem se protege, recebendo <strong>+5</strong> no teste de Fortitude.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Variante Psíquica:</strong></h6>
      <ul>
        <li>Troque o teste de <strong>Fortitude</strong> por <strong>Vontade</strong>.</li>
        <li>Substitua o dano por <strong>1d4 de perda de PM</strong>.</li>
        <li>Um personagem com <strong>0 PM</strong> fica <strong>catatônico</strong> e incapaz de agir.</li>
        <li>Se todo o grupo entrar em estado catatônico, eles <strong>succumbem à loucura</strong> do labirinto.</li>
      </ul>
    `
  },

  {
    origem: "Ameaças de Arton",
    nd: "7",
    tipo: "Desastre",
    nome: "Naufrágio",
    imagem: "https://media1.tenor.com/m/A9h311k0IScAAAAd/pirate-asterix.gif",
    efeito: `
      <strong>Objetivo:</strong> Sobreviver ao naufrágio.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo está a bordo de uma embarcação que afunda.</li>
        <li>Cada personagem deve resistir à força das águas por um número de rodadas, conforme o tamanho do naufrágio:</li>
        <ul>
          <li><strong>3 rodadas:</strong> Naufrágio pequeno (barco de pesca).</li>
          <li><strong>5 rodadas:</strong> Naufrágio médio (veleiro ou cargueiro).</li>
          <li><strong>7 rodadas:</strong> Naufrágio grande (caravela ou navio de guerra).</li>
        </ul>
        <li>Após esse tempo, a embarcação afunda completamente e as águas se acalmam.</li>
        <li>Em cada rodada, cada personagem escolhe uma ação. Em caso de falha, sofre <strong>3d6 de dano de impacto</strong>.</li>
        <li>Personagens na água podem sofrer penalidades adicionais (ver <em>Nadar</em>).</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Equilibrar-se (Acrobacia CD 20):</strong> Mantém-se sobre os destroços. A cada rodada, a CD aumenta em <strong>+2</strong>. Falha por 5 ou mais faz o personagem cair na água.</li>
        <li><strong>Içar Aliado (Acrobacia CD 25):</strong> Ajuda um aliado a subir nos destroços. Conta como sucesso para ambos.</li>
        <li><strong>Nadar (Atletismo CD 20):</strong> Nada contra a correnteza. Se falhar em <strong>2 testes</strong> antes de voltar aos destroços, é <strong>tragado pelas águas</strong> (ver abaixo).</li>
        <li><strong>Carregar Outro (Atletismo CD 25):</strong> Ajuda um aliado a nadar. Conta como 1 sucesso para ambos.</li>
        <li><strong>Escalar Destroços (Atletismo CD 25):</strong> Tenta subir de volta aos destroços. Só pode ser usada se tiver passado em <em>Nadar</em> na rodada anterior.</li>
      </ul>
      <hr>
      <h6 class="text-primary"><strong>Tragado pelas Águas:</strong></h6>
      <ul>
        <li>Começa a <strong>sufocar</strong> (ver p. 319).</li>
        <li>Sofre <strong>–5 em testes de Atletismo</strong>.</li>
        <li>Só pode usar as ações <em>Nadar</em> e <em>Carregar Outro</em>.</li>
        <li>Retorna à superfície se passar em <strong>2 testes de Nadar</strong> em sequência.</li>
      </ul>
    `
  },

  {
    origem: "Ameaças de Arton",
    nd: "2",
    tipo: "Desafio",
    nome: "Pesquisa",
    imagem: "https://c.tenor.com/5qHvGMx9eJMAAAAC/tenor.gif",
    efeito: `
      <strong>Objetivo:</strong> Encontrar a informação desejada.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo está em uma biblioteca, livraria ou arquivo antigo, vasculhando textos em busca de uma informação importante.</li>
        <li>É necessário acumular <strong>6 sucessos</strong> para encontrar a informação.</li>
        <li>Para cada <strong>falha</strong>, o personagem perde <strong>1 PM</strong> devido ao esforço mental.</li>
        <li>Se um personagem for reduzido a <strong>0 PM</strong> dessa forma, fica <strong>frustrado</strong> até o fim do dia.</li>
        <li>Se o grupo acumular <strong>4 falhas</strong>, todos ficam frustrados e só podem tentar novamente no dia seguinte (mas mantêm os sucessos).</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Usar Biblioteca (Investigação CD 15):</strong> Vasculha os livros e textos disponíveis, reunindo pistas relevantes.</li>
        <li><strong>Estudar Textos (Conhecimento CD 12):</strong> Usa conhecimentos prévios combinados com os textos disponíveis.</li>
        <li><strong>Consultar o Sobrenatural (Misticismo ou Religião CD 15):</strong> Pode ser usado uma vez por personagem se a informação for mística ou divina.</li>
        <li><strong>Ajudar (Perícia Variada, CD 10):</strong> Usa qualquer perícia justificada para auxiliar um aliado. Não conta como sucesso direto.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Frustrado:</strong></h6>
      <ul>
        <li>Um personagem frustrado está desmotivado e não pode participar de novas tentativas até o fim do dia.</li>
        <li>Se todo o grupo estiver frustrado, a pesquisa é interrompida até o próximo dia, mas os sucessos são mantidos.</li>
      </ul>
    `
  },
  {
    origem: "Ameaças de Arton",
    nd: "5",
    tipo: "Desastre",
    nome: "Tempestade de Areia",
    imagem: "https://i.makeagif.com/media/9-15-2015/svCfIX.gif",
    efeito: `
      <strong>Objetivo:</strong> Sobreviver à passagem das areias.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo é surpreendido por uma <strong>tempestade de areia</strong> enquanto atravessa regiões desérticas.</li>
        <li>A tempestade dura <strong>2d4+1 rodadas</strong>. Após esse tempo, torna-se apenas um vento fraco, sem os efeitos abaixo.</li>
        <li>No início de cada rodada, role <strong>1d6</strong> e some a <strong>CD base 20</strong> — essa será a CD de Fortitude da rodada para todos os personagens.</li>
        <li>No início de seu turno, cada personagem faz um <strong>teste de Fortitude</strong> contra essa CD:</li>
        <ul>
          <li>Em caso de <strong>falha</strong>, sofre <strong>4d4 de dano de corte</strong> e fica <strong>cego</strong> até o início de seu próximo turno.</li>
          <li>Em caso de <strong>falha por 10 ou mais</strong>, além disso, começa a <strong>sufocar</strong> (ver p. 319).</li>
        </ul>
        <li>Personagens cegos sofrem <strong>–5</strong> em todas as ações abaixo.</li>
        <li>Ao fim de cada rodada, cada animal ou monstro irracional no grupo deve rolar <strong>1d4</strong>. Se o resultado for <strong>1</strong>, ele foge e desaparece na tempestade.</li>
        <li>Uma criatura que fugiu pode ser reencontrada após a tempestade com um <strong>teste de Sobrevivência (CD 20 + duração da tempestade)</strong>, mas há <strong>25% de chance de estar morta</strong>.</li>
        <li>Antes da tempestade atingir o grupo, todos têm direito a um <strong>teste de Sobrevivência (CD 20)</strong> para notá-la chegando. Quem passar pode realizar uma <strong>ação adicional</strong> na primeira rodada.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Proteger-se (Acrobacia ou Atletismo CD 15):</strong> Encolhe-se no chão e recebe <strong>+2 no próximo teste de Fortitude</strong>.</li>
        <li><strong>Cobrir-se (Sobrevivência CD 15):</strong> Usa um item como capa ou saco de dormir. Ganha <strong>+5 no próximo teste de Fortitude</strong> e <strong>+2 no seguinte</strong>. Depois, o item é destruído.</li>
        <li><strong>Procurar Abrigo (Percepção ou Sobrevivência CD 25):</strong> Encontra proteção (vala, rocha, etc). Ganha <strong>+5 nos testes de Fortitude</strong> até o fim da cena.</li>
        <li><strong>Proteger Aliado (Sobrevivência CD 15):</strong> Usa o próprio corpo para proteger um aliado. Na próxima rodada, recebe <strong>–5 em Fortitude</strong>, mas o aliado ganha <strong>+5</strong>.</li>
        <li><strong>Lavar o Rosto (Cura CD 15):</strong> Remove os efeitos de <strong>cegueira e sufocamento</strong> de si mesmo ou de um aliado.</li>
        <li><strong>Acalmar Animal (Adestramento CD 25):</strong> Acalma um animal ou monstro irracional, impedindo-o de fugir durante a tempestade.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Animais Irracionais:</strong></h6>
      <ul>
        <li>Ao final de cada rodada, role <strong>1d4 para cada animal/monstro irracional</strong> acompanhando o grupo.</li>
        <li>Se sair <strong>1</strong>, a criatura foge na tempestade.</li>
        <li>Para reencontrá-la depois, teste <strong>Sobrevivência</strong> com CD baseada na duração da tempestade. Há <strong>25% de chance da criatura estar morta</strong>.</li>
      </ul>
    `
  },

  {
    origem: "Só Aventuras",
    nd: "2",
    tipo: "Desafio",
    nome: "Embate nas Alturas!",
    imagem: "https://animatedmeta.wordpress.com/wp-content/uploads/2015/04/atla-balloon-plan-1.gif",
    efeito: `
      <strong>Objetivo:</strong> Escapar com vida do ataque dos goblins baloeiros e chegar a Vectora.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo está a bordo de um balão sob ataque de <strong>goblins baloeiros</strong>, tentando alcançar a cidade flutuante de Vectora.</li>
        <li>É necessário acumular <strong>8 sucessos</strong> para alcançar o destino com segurança.</li>
        <li>Ao fim de cada rodada, todos os personagens devem fazer um <strong>teste de Reflexos (CD 15)</strong>.</li>
        <ul>
          <li>Em caso de <strong>falha</strong>, o personagem <strong>cai do balão</strong>.</li>
          <li>Devido à baixa gravidade causada pelo campo de levitação de Vectora, é possível retornar ao balão com ações apropriadas.</li>
          <li>Se o personagem <strong>não retornar em até 3 rodadas</strong>, ele <strong>cai para a morte</strong>.</li>
        </ul>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Conduzir (Pilotagem CD 15):</strong> Assume o controle do balão após Glong ser atingido. Pode ser tentado <strong>uma vez por rodada</strong>.</li>
        <li><strong>Atirar (Ataque à distância, CD variável):</strong> Tenta repelir os goblins baloeiros com ataques. Cada sucesso válido ajuda a acumular progressos.</li>
        <li><strong>Manobrar Balão (Acrobacia ou Pilotagem CD 15):</strong> Realiza manobras evasivas contra os inimigos. Sucesso contribui para os sucessos totais.</li>
        <li><strong>Reparar (Ofício ou Engenharia CD 15):</strong> Conserta partes danificadas do balão, prevenindo penalidades ou queda.</li>
        <li><strong>Segurar-se (Atletismo ou Reflexos CD 15):</strong> Se estiver caindo, permite <strong>agarrar cordas ou partes do balão</strong> e retornar com sucesso.</li>
        <li><strong>Ajudar (Perícia Variada, CD 10):</strong> Usa uma perícia justificada para auxiliar um aliado. Não conta como sucesso direto.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Caindo do Balão:</strong></h6>
      <ul>
        <li>Se falhar no teste de Reflexos no final da rodada, o personagem cai.</li>
        <li>Durante até <strong>3 rodadas</strong>, pode tentar <strong>segurar-se ou voltar ao balão</strong> com testes apropriados.</li>
        <li>Se não conseguir retornar nesse tempo, <strong>cai para a morte</strong>.</li>
      </ul>
    `
  },

  {
    origem: "Só Aventuras",
    nd: "5",
    tipo: "Desafio",
    nome: "Passagem pela Casa de Chá",
    imagem: "https://i.pinimg.com/originals/d5/d0/ea/d5d0eac0f4ec5e6d9a3c9e8fd0fe21c0.gif",
    efeito: `
      <strong>Objetivo:</strong> Atravessar a Casa de Chá passando pelos capangas sem ser notado — ou eliminar todos os guardas.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>Cada personagem deve acumular <strong>3 sucessos</strong> em <strong>Passar Despercebido</strong> ou <strong>Passar por Cima</strong> para alcançar os aposentos de Taerir.</li>
        <li>Ao final de cada rodada, todos devem fazer um <strong>teste de Furtividade (CD 18)</strong>.</li>
        <ul>
          <li>Em caso de <strong>falha</strong>, o personagem é notado pelos capangas e sofre <strong>6d8+16 de dano de impacto</strong>.</li>
        </ul>
        <li>Se o grupo preferir lutar, o desafio se encerra ao somarem <strong>10 sucessos</strong> em <strong>Revidar</strong> ou <strong>Lançar Magia</strong>.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Passar Despercebido (Furtividade CD 20):</strong> Move-se entre os guardas sem ser notado. Somente personagens não descobertos ou que tenham tido sucesso em <strong>Despistar</strong> podem tentar.</li>
        <li><strong>Passar por Cima (Atletismo, Acrobacia ou Luta CD 20):</strong> Usa força ou agilidade para romper o cerco dos capangas e avançar. Personagens que usam esta ação <strong>não podem mais tentar Passar Despercebido</strong>, a menos que tenham sucesso em <strong>Despistar</strong>.</li>
        <li><strong>Revidar (Luta ou Pontaria CD 24):</strong> Combate direto com os capangas. Cada sucesso contribui para a contagem de 10 sucessos totais para encerrar o desafio por combate.</li>
        <li><strong>Lançar Magia (Vontade, CD 20 + custo em PM):</strong> Lança magia em meio ao caos da Casa de Chá. O ambiente é <strong>hostil à magia</strong>, dificultando a concentração.</li>
        <li><strong>Despistar (Enganação ou Furtividade CD 24):</strong> Usa o ambiente caótico e a fumaça para sair da linha de visão. Permite voltar a tentar <strong>Passar Despercebido</strong>. Se outro personagem tiver usado <strong>Revidar</strong> na rodada, a CD reduz em <strong>–5</strong>.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Detectado pelos Capangas:</strong></h6>
      <ul>
        <li>Falhar no teste de Furtividade no fim da rodada faz com que o personagem seja descoberto.</li>
        <li>Recebe <strong>6d8+16 de dano de impacto</strong> dos ataques dos guardas.</li>
        <li>Personagens descobertos não podem mais tentar <strong>Passar Despercebido</strong>, exceto se tiverem sucesso em <strong>Despistar</strong>.</li>
      </ul>
    `
  },

  {
    origem: "Só Aventuras",
    nd: "11",
    tipo: "Desafio",
    nome: "Corredores em Chamas",
    imagem: "https://i.pinimg.com/originals/b0/b8/98/b0b89861ed00a56409b2b9dac744ae51.gif",
    efeito: `
      <strong>Objetivo:</strong> Correr pelos corredores em chamas até alcançar o salão principal.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O desafio dura <strong>cinco rodadas</strong>. Todos os personagens devem acumular sucessos em <strong>Correr</strong> ou <strong>Carregar Outro</strong>.</li>
        <li>No início de cada rodada, cada personagem sofre <strong>1d6 de dano de fogo</strong>, aumentando em +1d6 a cada rodada (máximo 5d6).</li>
        <li>Ao final da quinta rodada, o número de sucessos determina o destino de cada personagem:</li>
        <ul>
          <li><strong>0–2 sucessos:</strong> Sofre <strong>16d6 de dano de impacto</strong> e fica <strong>soterrado</strong>.</li>
          <li><strong>3–4 sucessos:</strong> Sofre <strong>8d6 de dano de impacto</strong>, mas escapa.</li>
          <li><strong>5 sucessos:</strong> Escapa completamente, sem ser atingido.</li>
        </ul>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Correr (Atletismo CD 26):</strong> Avança pelos corredores flamejantes. Um sucesso com 10 ou mais (ou um 20 natural) conta como <strong>dois sucessos</strong>.</li>
        <li><strong>Carregar Outro (Atletismo CD 30):</strong> Carrega um aliado com até um sucesso de diferença. Se bem-sucedido, concede <strong>um sucesso para ambos</strong>.</li>
        <li><strong>Procurar Caminho (Percepção CD 20):</strong> Analisa o trajeto em busca de uma rota mais segura. Se passar, <strong>todos recebem +5</strong> em testes de <strong>Correr</strong> e <strong>Carregar Outro</strong> (não cumulativo).</li>
        <li><strong>Soltar-se (Força CD 25):</strong> Usado para libertar-se ou libertar um aliado soterrado. Pode receber ajuda de outros personagens.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Personagens Soterrados:</strong></h6>
      <ul>
        <li>Ficam <strong>imóveis</strong> e sofrem <strong>1d6 de dano de impacto</strong> no início de cada turno, além de <strong>5d6 de dano contínuo de fogo</strong>.</li>
        <li>É necessário um teste de <strong>Força (CD 25)</strong> para se libertar ou libertar um aliado soterrado.</li>
      </ul>
    `
  },
  {
    origem: "Só Aventuras",
    nd: "2",
    tipo: "Desafio",
    nome: "Resgate nas Chamas",
    imagem: "https://i.gifer.com/origin/a4/a40a7366f3f3fd565392d967bf2c0c5d.gif",
    efeito: `
      <strong>Objetivo:</strong> Salvar o maior número possível de pessoas presas no salão em chamas antes que ele desabe.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O salão queima durante <strong>cinco rodadas</strong>, desabando ao final da última. Use a ação <strong>Apagar</strong> para atrasar esse colapso.</li>
        <li>Os personagens mantêm a ordem de iniciativa e quaisquer efeitos ativos do combate anterior.</li>
        <li>No início de cada turno dentro do salão, cada personagem deve fazer um <strong>teste de Fortitude (CD 10 +1 por teste anterior)</strong> para resistir à fumaça. Criaturas que não respiram ignoram este efeito. Usar um pano úmido fornece <strong>+2</strong>.</li>
        <li>Existem <strong>8 NPCs</strong> presos (cada um ocupa 10 espaços; Nanamo ocupa 5).</li>
        <li>Quando o salão desaba, quem estiver dentro sofre <strong>6d6 de dano de fogo</strong> e fica <strong>soterrado</strong>. NPCs não resgatados morrem.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Apagar (Destreza ou Inteligência CD 10):</strong> Abafa focos do incêndio, <strong>adiando o colapso do salão em 1 rodada</strong>. Pode ser feito de fora.</li>
        <li><strong>Escapar (Acrobacia ou Atletismo CD 10):</strong> Tenta sair do salão sem carregar um NPC. Falha impede a saída naquela rodada.</li>
        <li><strong>Localizar (Investigação ou Percepção CD 15):</strong> Entra no salão para encontrar vítimas. Se bem-sucedido, pode usar <strong>Resgatar</strong> na próxima ação.</li>
        <li><strong>Resgatar (Atletismo CD 15):</strong> Carrega um NPC localizado para fora. <strong>Penalidade de -5</strong> se estiver sobrecarregado. Falha impede a saída.</li>
        <li><strong>Soltar-se (Força CD 17):</strong> Liberta a si ou a outro personagem soterrado. Cada tentativa causa <strong>1d6 de dano de fogo</strong>. Outros podem ajudar.</li>
      </ul>
      <hr>
      <h6 class="text-warning"><strong>Personagens Soterrados:</strong></h6>
      <ul>
        <li>Ficam <strong>imóveis</strong> e sofrem <strong>dano contínuo de fogo</strong>.</li>
        <li>Podem ser libertados com <strong>Força (CD 17)</strong>. Cada tentativa causa <strong>1d6 de dano de fogo</strong>. Vários personagens podem ajudar.</li>
      </ul>
    `
  },

  {
    origem: "Libertação de Valkaria",
    nd: "1",
    tipo: "Desafio",
    nome: "Procurar o Covil",
    imagem: "https://media.giphy.com/media/Eyd28c2wDWKOc/giphy.gif",
    efeito: `
      <strong>Objetivo:</strong> Encontrar a entrada do covil sszzaazita nas cavernas do Monte Palidor.
      <hr>
      <strong>Efeito:</strong>
      <ul>
        <li>O grupo deve acumular <strong>5 sucessos</strong> na ação <strong>Vasculhar</strong> para encontrar o covil.</li>
        <li>Para cada <strong>falha</strong>, cada personagem perde <strong>1d6 PV ou 1 PM</strong> (à escolha do jogador), representando cansaço, uso de habilidades ou ferimentos.</li>
      </ul>
      <hr>
      <h6 class="text-danger"><strong>Testes:</strong></h6>
      <ul>
        <li><strong>Vasculhar (Investigação, Percepção ou Sobrevivência CD 15):</strong> Procura pistas do covil nas cavernas. <strong>Hillard</strong>, se presente, concede <strong>+2 nos testes</strong>.</li>
        <li><strong>Proteger (Luta ou Pontaria CD 15):</strong> Ajuda o grupo enfrentando perigos e aliviando a jornada. Se passar, <strong>evita a penalidade de PV ou PM para um aliado</strong> em uma falha futura. A cada 5 pontos acima da CD, protege um personagem adicional.</li>
        <li>Outras perícias podem ser usadas uma única vez, desde que justificadas e aprovadas pelo mestre.</li>
      </ul>
    `
  }
  


];

const buscaInput = document.querySelector("#busca");
const origemSelect = document.querySelector("#origem");
const ndSelect = document.querySelector("#nd");
const tipoSelect = document.querySelector("#tipo");
const container = document.querySelector("#perigos-container");
const ordemSelect = document.querySelector("#ordem");


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
  ordemSelect.addEventListener("change", filtrarPerigos);
  const origens = Array.from(new Set(perigos.map(p => p.origem))).sort();
  const nds = Array.from(new Set(perigos.map(p => p.nd))).sort((a, b) => parseFloat(a) - parseFloat(b));
  const tipos = Array.from(new Set(perigos.map(p => p.tipo))).sort();

  preencherSelect(origemSelect, origens);
  preencherSelect(ndSelect, nds);
  preencherSelect(tipoSelect, tipos);

  origemSelect.addEventListener("change", filtrarPerigos);
  ndSelect.addEventListener("change", filtrarPerigos);
  tipoSelect.addEventListener("change", filtrarPerigos);
  buscaInput.addEventListener("input", filtrarPerigos);

  perigos.forEach(p => {
    p.efeito = formatarEfeito(p.efeito);
  });

  filtrarPerigos();
}

function filtrarPerigos() {
  const origem = origemSelect.value;
  const nd = ndSelect.value;
  const tipo = tipoSelect.value;
  const busca = buscaInput.value.toLowerCase();
  const ordem = ordemSelect.value;

  let filtrados = perigos.filter(p => {
    const textoCompleto = (
      p.nome + " " +
      p.nd + " " +
      p.origem + " " +
      p.tipo + " " +
      p.efeito
    ).toLowerCase();

    return (
      (origem === "todos" || p.origem === origem) &&
      (nd === "todos" || p.nd === nd) &&
      (tipo === "todos" || p.tipo === tipo) &&
      textoCompleto.includes(busca)
    );
  });

  // Ordenar se necessário
  if (ordem === "crescente") {
    filtrados.sort((a, b) => parseFloat(a.nd) - parseFloat(b.nd));
  } else if (ordem === "decrescente") {
    filtrados.sort((a, b) => parseFloat(b.nd) - parseFloat(a.nd));
  }

  container.innerHTML = "";
  filtrados.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4";
    card.innerHTML = `
      <div class="card h-100 perigo-card" style="cursor: pointer;">
        <img src="${p.imagem}" class="card-img-top" alt="${p.nome}">
        <div class="card-body">
          <h5 class="card-title text-danger fw-bold mb-1">${p.nome} (ND ${p.nd})</h5>
          <h6 class="card-subtitle text-warning fw-bold mb-2">${p.origem} - ${p.tipo}</h6>
          <div class="efeito collapse">${p.efeito}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}


// Expansão/recolhimento do efeito ao clicar no card
document.addEventListener("click", function (e) {
  const card = e.target.closest(".perigo-card");
  if (card) {
    const efeito = card.querySelector(".efeito");
    efeito.classList.toggle("collapse");
  }
});


function formatarEfeito(html) {
  return html
    // Objetivo e Efeito em vermelho e negrito
    .replace(/<strong>Objetivo:<\/strong>/g, `<span class="text-danger fw-bold">Objetivo:</span>`)
    .replace(/<strong>Efeito:<\/strong>/g, `<span class="text-danger fw-bold">Efeito:</span>`)
    // Remover "Testes:"
    .replace(/<h6[^>]*>.*?Testes:.*?<\/h6>/gi, '')
    // Deixa todos os títulos dos testes em vermelho e negrito
    .replace(/<strong>([^<]+?)<\/strong>/g, `<span class="text-danger fw-bold">$1</span>`)
    // CD xx → negrito e roxo
    .replace(/\b(CD\s*\d+)\b/gi, `<span class="fw-bold text-purple">$1</span>`)
    // Dados de dano tipo 1d6, 16d6 etc → negrito e azul
    .replace(/\b(\d+d\d+)\b/gi, `<span class="fw-bold text-primary">$1</span>`);
}


carregarPerigos();

