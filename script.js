/* Mundo dos Dramas — versão B (quiz)
   Fluxo (estrutura do quiz do Desaposta):
   intro → 4 perguntas → pausa de reflexão → 2 perguntas → pausa com capas
   → 3 perguntas → análise → resultado (mini página de vendas) → oferta → FAQ.
   Único botão de checkout: o da oferta, no fim. */

const CONFIG = {
  checkoutUrl: "https://pay.lowify.com.br/checkout?product_id=eyt20W",
  whatsapp: "https://wa.me/5579991072715",
  capasDir: "assets/capas/",
  analiseMs: 4200,
};

/* ---------------- catálogo ---------------- */
const CATEGORIAS = {
  vinganca:    { nome: "Vingança e Suspense", emoji: "🔥", capa: "o-bebe-trocado.jpg", perfil: "Rainha da Reviravolta",
                 frase: "Você não sossega até ver quem foi humilhada dar a volta por cima." },
  romance:     { nome: "Romance e Traição", emoji: "💔", capa: "gemeos-secretos-do-don.jpg", perfil: "Coração Intenso",
                 frase: "Você sente cada traição e precisa saber se o casal fica junto." },
  turcos:      { nome: "Dramas Turcos", emoji: "🇹🇷", capa: "nunca-vivido.jpg", perfil: "Alma de Novela Turca",
                 frase: "Paixão, família poderosa e segredo guardado do começo ao fim." },
  coreanos:    { nome: "Doramas Coreanos", emoji: "🌸", capa: "o-amor-na-primeira-neve.jpg", perfil: "Doramaníaca de Carteirinha",
                 frase: "Romance que cresce devagar, com frio na barriga a cada episódio." },
  brasileiros: { nome: "Dramas Brasileiros", emoji: "🇧🇷", capa: "fazendeiro.jpg", perfil: "Noveleira Raiz",
                 frase: "História com cara de vida real: família, segredo e muito barraco." },
  asiaticas:   { nome: "Séries Asiáticas", emoji: "🏯", capa: "traido-pelo-dragao-duas-fenix.jpg", perfil: "Aventureira do Oriente",
                 frase: "Poder escondido, destino e batalha épica: nada de história comum." },
  americanas:  { nome: "Séries Americanas", emoji: "🇺🇸", capa: "50-centavos-pai-bilionario.jpg", perfil: "Fã de Bilionário Secreto",
                 frase: "Herdeiro escondido, pai bilionário e virada no tribunal." },
};

// título → arquivo da capa (mesmos nomes da página A)
const ARQUIVOS_CAPAS = {
  "50 Centavos para Encontrar Meu Pai Bilionário": "50-centavos-pai-bilionario.jpg",
  "O Deus do Trovão é Meu Marido Sem-Teto": "deus-do-trovao-marido-sem-teto.jpg",
  "Todos Congelaram Quando Meu Filho Entrou no Tribunal": "todos-congelaram-tribunal.jpg",
  "Os Gêmeos Secretos do Don": "gemeos-secretos-do-don.jpg",
  "Teste de Amor: Casada com um Bilionário Cadeirante": "teste-de-amor-bilionario-cadeirante.jpg",
  "Traído pelo Meu Dragão, de Volta com Duas Fênix": "traido-pelo-dragao-duas-fenix.jpg",
  "O Bebê Trocado": "o-bebe-trocado.jpg",
  "Não Sou Mais Lixo: Meu Pai Bilionário Me Encontrou": "nao-sou-mais-lixo.jpg",
  "Rejeitando as Cinco Destinadas": "rejeitando-cinco-destinadas.jpg",
  "Todos Me Traíram": "todos-me-trairam.jpg",
  "Depois do Divórcio, Virei a Esposa XXL do Padrinho": "esposa-xxl-do-padrinho.jpg",
  "Beije a Zumbi, Salve o Mundo": "beije-a-zumbi.jpg",
  "A Vida Secreta do Meu Marido Bilionário": "marido-bilionario.jpg",
  "Divorciada no Dia do Casamento": "divorciada.jpg",
  "Apaixonada por Um Fazendeiro": "fazendeiro.jpg",
  "Se Eu Nunca Tivesse Vivido Você": "nunca-vivido.jpg",
  "Minha Irmã é a Rainha Guerreira": "rainha-guerreira.jpg",
  "A Amante Secreta do Poderoso Chefão": "a-amante-secreta-do-poderoso-chefao.jpg",
  "Brilhante Vingança": "brilhante-vinganca.jpg",
  "Xiu… Somos Um Segredo": "xiu-somos-um-segredo.jpg",
  "A Herdeira Sheeran Retorna": "a-herdeira-sheeran-retorna.jpg",
  "Adeus, Minha Tentadora Esposa": "adeus-minha-tentadora-esposa.jpg",
  "O Casamento que Virou Escândalo": "o-casamento-que-virou-escandalo.jpg",
  "Fingindo Ser Pobre": "fingindo-ser-pobre.jpg",
  "Amor em Jogo com o Bilionário": "amor-em-jogo-com-o-bilionario.jpg",
  "Sai da Frente, Sou a Ex Intocável": "sai-da-frente-sou-a-ex-intocavel.jpg",
  "A Garota Encontra o Seu Amor": "a-garota-encontra-o-seu-amor.jpg",
  "Papai Campeão e Sua Filha da Sorte": "papai-campeao-e-sua-filha-da-sorte.jpg",
  "Uau! Minha Esposa Mendiga é uma Lenda": "uau-minha-esposa-mendiga-e-uma-lenda.jpg",
  "A Bisavó de 7 Anos Conserta a Família": "a-bisavo-de-7-anos-conserta-a-familia.jpg",
  "Por Favor, Amarre-me, Tio": "por-favor-amarre-me-tio.jpg",
  "Um Só Golpe: Modo Deus": "um-so-golpe-modo-deus.jpg",
  "Papai, Essa Criança Nem É Sua": "papai-essa-crianca-nem-e-sua.jpg",
  "Não Com Boca de Praga, Sou Pé-Quente!": "nao-com-boca-de-praga-sou-pe-quente.jpg",
  "Dessa Vez, Eu Escolhi o Mafioso": "dessa-vez-eu-escolhi-o-mafioso.jpg",
  "O Chefe da Máfia Implora": "o-chefe-da-mafia-implora.jpg",
  "Minhas Lágrimas São Águas Passadas": "minhas-lagrimas-sao-aguas-passadas.jpg",
  "O Aniversário do Papai se Tornou o Funeral da Filha": "o-aniversario-do-papai-se-tornou-o-funeral-da-filha.jpg",
  "Ligada à Honra": "ligada-a-honra.jpg",
  "O Amor na Primeira Neve": "o-amor-na-primeira-neve.jpg",
  "Grávida dos Gêmeos do Bilionário, o Amor Começa": "gravida-dos-gemeos-do-bilionario-o-amor-comeca.jpg",
  "O Super Sistema me Deu 3 Garotas": "o-super-sistema-me-deu-3-garotas.jpg",
  "A Rainha Volta com Poder": "a-rainha-volta-com-poder.jpg",
  "Dinheiro Caindo Sem Fim": "dinheiro-caindo-sem-fim.jpg",
  "Amor Após as Grades": "amor-apos-as-grades.jpg",
  "Bebezita, Sou Eu a Verdadeira Princesa": "bebezita-sou-eu-a-verdadeira-princesa.jpg",
  "O Ás Abandonado": "o-as-abandonado.jpg",
  "O Herdeiro e Sua Deusa Apegada": "o-herdeiro-e-sua-deusa-apegada.jpg",
  "Nono Príncipe e Deusa da Guerra": "nono-principe-e-deusa-da-guerra.jpg",
  "Ops, Casei com Meu Inimigo": "ops-casei-com-meu-inimigo.jpg",
  "De Ex-Presa à Esposa Mimada do CEO": "de-ex-presa-a-esposa-mimada-do-ceo.jpg",
  "Minha Garota da Sorte": "minha-garota-da-sorte.jpg",
  "Querido Irmão, Seu Amor Veio Tarde Demais": "querido-irmao-seu-amor-veio-tarde-demais.jpg",
};

const CATALOGO = [
  ["50 Centavos para Encontrar Meu Pai Bilionário", "americanas"],
  ["O Deus do Trovão é Meu Marido Sem-Teto", "americanas"],
  ["Todos Congelaram Quando Meu Filho Entrou no Tribunal", "vinganca"],
  ["Os Gêmeos Secretos do Don", "romance"],
  ["Teste de Amor: Casada com um Bilionário Cadeirante", "romance"],
  ["Traído pelo Meu Dragão, de Volta com Duas Fênix", "asiaticas"],
  ["O Bebê Trocado", "vinganca"],
  ["Não Sou Mais Lixo: Meu Pai Bilionário Me Encontrou", "americanas"],
  ["Rejeitando as Cinco Destinadas", "romance"],
  ["Todos Me Traíram", "romance"],
  ["Depois do Divórcio, Virei a Esposa XXL do Padrinho", "romance"],
  ["Beije a Zumbi, Salve o Mundo", "vinganca"],
  ["A Vida Secreta do Meu Marido Bilionário", "brasileiros"],
  ["Divorciada no Dia do Casamento", "romance"],
  ["Apaixonada por Um Fazendeiro", "brasileiros"],
  ["Se Eu Nunca Tivesse Vivido Você", "turcos"],
  ["Minha Irmã é a Rainha Guerreira", "americanas"],
  ["A Amante Secreta do Poderoso Chefão", "vinganca"],
  ["Brilhante Vingança", "vinganca"],
  ["Xiu… Somos Um Segredo", "romance"],
  ["A Herdeira Sheeran Retorna", "turcos"],
  ["Adeus, Minha Tentadora Esposa", "romance"],
  ["O Casamento que Virou Escândalo", "romance"],
  ["Fingindo Ser Pobre", "vinganca"],
  ["Amor em Jogo com o Bilionário", "turcos"],
  ["Sai da Frente, Sou a Ex Intocável", "vinganca"],
  ["A Garota Encontra o Seu Amor", "coreanos"],
  ["Papai Campeão e Sua Filha da Sorte", "brasileiros"],
  ["Uau! Minha Esposa Mendiga é uma Lenda", "vinganca"],
  ["A Bisavó de 7 Anos Conserta a Família", "brasileiros"],
  ["Por Favor, Amarre-me, Tio", "romance"],
  ["Um Só Golpe: Modo Deus", "vinganca"],
  ["Papai, Essa Criança Nem É Sua", "romance"],
  ["Não Com Boca de Praga, Sou Pé-Quente!", "romance"],
  ["Dessa Vez, Eu Escolhi o Mafioso", "vinganca"],
  ["O Chefe da Máfia Implora", "vinganca"],
  ["Minhas Lágrimas São Águas Passadas", "romance"],
  ["O Aniversário do Papai se Tornou o Funeral da Filha", "vinganca"],
  ["Ligada à Honra", "asiaticas"],
  ["O Amor na Primeira Neve", "coreanos"],
  ["Grávida dos Gêmeos do Bilionário, o Amor Começa", "turcos"],
  ["O Super Sistema me Deu 3 Garotas", "asiaticas"],
  ["A Rainha Volta com Poder", "vinganca"],
  ["Dinheiro Caindo Sem Fim", "asiaticas"],
  ["Amor Após as Grades", "romance"],
  ["Bebezita, Sou Eu a Verdadeira Princesa", "vinganca"],
  ["O Ás Abandonado", "vinganca"],
  ["O Herdeiro e Sua Deusa Apegada", "turcos"],
  ["Nono Príncipe e Deusa da Guerra", "asiaticas"],
  ["Ops, Casei com Meu Inimigo", "romance"],
  ["De Ex-Presa à Esposa Mimada do CEO", "vinganca"],
  ["Minha Garota da Sorte", "coreanos"],
  ["Querido Irmão, Seu Amor Veio Tarde Demais", "brasileiros"],
].map(([titulo, cat], i) => ({ titulo, cat, alta: i < 12, arquivo: ARQUIVOS_CAPAS[titulo] }));

/* ---------------- perguntas ---------------- */
const PERGUNTAS = {
  motivo: { titulo: "O que fez você chegar até aqui?", opcoes: [
    ["final", "😩", "Cansei de ver só pedacinho e nunca saber o final"],
    ["especifico", "🔎", "Estou procurando um drama que vi no Instagram"],
    ["diario", "📺", "Quero ter o que assistir todo dia"],
    ["indicacao", "💬", "Uma amiga me falou e fiquei curiosa"],
  ]},
  onde: { titulo: "Onde você mais vê dramas hoje?", opcoes: [
    ["instagram", "📸", "Reels do Instagram"],
    ["tiktok", "🎵", "TikTok"],
    ["facebook", "👍", "Facebook"],
    ["app", "📱", "Em app pago de drama"],
  ]},
  frequencia: { titulo: "Você já ficou sem saber o final de um drama que estava amando?", opcoes: [
    ["muitas", "😭", "Sim, várias vezes"],
    ["algumas", "😕", "Algumas vezes"],
    ["raro", "🙂", "Quase nunca"],
  ]},
  reacao: { titulo: "Quando o vídeo acaba no meio, o que você faz?", opcoes: [
    ["procura", "🔁", "Procuro a parte 2 e só acho os mesmos 40 segundos"],
    ["comentarios", "💭", "Peço nos comentários pra alguém contar o final"],
    ["desiste", "🚪", "Acabo desistindo e esquecendo a história"],
    ["paga", "💸", "Pago app ou pacote pra ver o resto"],
  ]},
  gasto: { titulo: "Você já pagou por algum app ou pacote de dramas?", opcoes: [
    ["assinatura", "🔄", "Sim, assinatura semanal ou mensal"],
    ["pacote", "📦", "Sim, pacotes com poucos dramas"],
    ["nunca", "🙅‍♀️", "Não, só vejo o que aparece de graça"],
  ]},
  gostos: { titulo: "Que tipo de história mais prende você?", sub: "Pode escolher mais de uma. É só pra montar sua lista inicial — o acesso libera todas.", multi: true },
  idioma: { titulo: "Como você prefere assistir?", opcoes: [
    ["dublado", "🎙️", "Dublado, sem ficar lendo"],
    ["legendado", "💬", "Legendado, com o áudio original"],
    ["tanto", "🤷‍♀️", "Tanto faz, quero a história"],
  ]},
  momento: { titulo: "Em que momento você mais assiste?", opcoes: [
    ["noite", "🌙", "Antes de dormir"],
    ["pausa", "☕", "Nos intervalos do dia"],
    ["casa", "🏠", "Em casa, enquanto faço as coisas"],
    ["sempre", "⏰", "A qualquer hora, sou viciada"],
  ]},
  objetivo: { titulo: "O que você mais quer daqui pra frente?", opcoes: [
    ["final", "🎬", "Assistir meus dramas até o final"],
    ["novidade", "🆕", "Ter drama novo pra ver todo dia"],
    ["economia", "💰", "Parar de pagar toda semana"],
    ["organizado", "📚", "Ter tudo num lugar só, sem procurar"],
  ]},
};

// Ordem das telas do quiz. "pausa:*" são as telas de reflexão entre perguntas.
const ROTEIRO = ["motivo", "onde", "frequencia", "reacao", "pausa:reflexao",
                 "gasto", "gostos", "pausa:capas", "idioma", "momento", "objetivo"];

/* ---------------- estado ---------------- */
const respostas = {};
let passo = -1; // -1 = intro; ROTEIRO.length = análise; acima disso = resultado
const app = document.getElementById("app");
const trilho = document.getElementById("trilho");

/* ---------------- utilidades ---------------- */
function capaHTML(item, i = 0, comTag = false) {
  return `<div class="capa" style="--h:${(i * 47 + 300) % 360}">
    <img src="${CONFIG.capasDir}${item.arquivo}" alt="${item.titulo}" loading="lazy" onerror="this.remove()">
    ${comTag && item.alta ? '<span class="tag">🔥 Em alta</span>' : ""}
  </div>`;
}

function checkoutHref() {
  const url = new URL(CONFIG.checkoutUrl);
  new URLSearchParams(location.search).forEach((v, k) => url.searchParams.set(k, v));
  return url.toString();
}

function gostosEscolhidos() {
  return respostas.gostos?.length ? respostas.gostos : Object.keys(CATEGORIAS);
}

// Intercala as categorias escolhidas, com os "em alta" primeiro.
function listaPersonalizada(qtd) {
  const porCat = gostosEscolhidos().map((g) =>
    CATALOGO.filter((c) => c.cat === g).sort((a, b) => b.alta - a.alta));
  const lista = [];
  for (let i = 0; lista.length < qtd && porCat.some((l) => l[i]); i++) {
    porCat.forEach((l) => l[i] && lista.length < qtd && lista.push(l[i]));
  }
  for (const c of CATALOGO) { if (lista.length >= qtd) break; if (!lista.includes(c)) lista.push(c); }
  return lista;
}

function mostrar(html, classe = "") {
  app.innerHTML = `<div class="tela ${classe}">${html}</div>`;
  window.scrollTo(0, 0);
}

function atualizarTrilho() {
  trilho.hidden = passo < 0 || passo > ROTEIRO.length;
  const pct = passo >= ROTEIRO.length ? 100 : ((passo + 1) / (ROTEIRO.length + 1)) * 100;
  trilho.firstElementChild.style.width = `${pct}%`;
}

const voltarHTML = '<button class="voltar" type="button" data-acao="voltar">‹ Voltar</button>';

/* ================= TELAS ================= */
function telaIntro() {
  mostrar(`
    <section class="intro subir">
      <h1 class="t-grande">Cansada de ver só <span class="pilula">40 segundos</span> e nunca saber o final?</h1>
      <p class="sub">Responda 9 perguntas rápidas e descubra quais dramas completos combinam com você.</p>
      <div class="vitrine">
        <img class="lado esq" src="assets/hero-celular-esquerda.webp" alt="" aria-hidden="true">
        <img class="lado dir" src="assets/hero-celular-direita.webp" alt="" aria-hidden="true">
        <div class="centro-cel" id="celRotativo"><img src="${TELAS_CELULAR[0]}" alt="Catálogo do Mundo dos Dramas aberto no celular" fetchpriority="high"></div>
        <span class="chip chip-a">⭐ 4,9 · +8 mil clientes</span>
        <span class="chip chip-b">🎬 Novos todo dia</span>
      </div>
      <div>
        <button class="btn pulsar" type="button" data-acao="avancar">Quero descobrir meus Dramas</button>
        <p class="nota">⏱️ Leva menos de 1 minuto · sem cadastro</p>
      </div>
    </section>`);
}

/* Celular central da abertura: troca de tela a cada 4,2 s com crossfade,
   igual ao topo da página A (mesmas telas, mesma ordem). */
const TELAS_CELULAR = [16, 9, 15, 10, 14, 3, 13, 12, 19, 2, 11, 18, 20]
  .map((n) => `assets/hero-celular-centro-${n}.webp`);
const telasProntas = new Set([TELAS_CELULAR[0]]);
let timerCelular = null;

// Pré-carrega uma tela por vez, com prioridade baixa, depois que a página carregou.
function baixarTelas(i = 1) {
  if (i >= TELAS_CELULAR.length) return;
  const pre = new Image();
  if ("fetchPriority" in pre) pre.fetchPriority = "low";
  pre.onload = pre.onerror = () => { if (pre.naturalWidth) telasProntas.add(TELAS_CELULAR[i]); baixarTelas(i + 1); };
  pre.src = TELAS_CELULAR[i];
}
if (document.readyState === "complete") setTimeout(baixarTelas, 1500);
else addEventListener("load", () => setTimeout(baixarTelas, 1500), { once: true });

function girarCelular() {
  clearTimeout(timerCelular);
  let indice = 0;
  const trocar = () => {
    const caixa = document.getElementById("celRotativo");
    if (!caixa) return; // saiu da abertura
    timerCelular = setTimeout(trocar, 4200);
    const prox = (indice + 1) % TELAS_CELULAR.length;
    if (!telasProntas.has(TELAS_CELULAR[prox])) return; // ainda baixando: tenta na próxima rodada
    indice = prox;
    const antiga = caixa.lastElementChild;
    const nova = document.createElement("img");
    nova.src = TELAS_CELULAR[indice];
    nova.alt = "";
    nova.style.opacity = "0";
    caixa.insertBefore(nova, antiga);
    requestAnimationFrame(() => { nova.style.opacity = "1"; antiga.style.opacity = "0"; });
    setTimeout(() => antiga.remove(), 750);
  };
  timerCelular = setTimeout(trocar, 4200);
}

function telaPergunta(id) {
  const p = PERGUNTAS[id];
  const atual = respostas[id] ?? (p.multi ? [] : null);

  const corpo = p.multi
    ? `<div class="tiles">${Object.entries(CATEGORIAS).map(([k, c]) => `
        <button type="button" class="tile" data-valor="${k}" aria-pressed="${atual.includes(k)}">
          <img src="${CONFIG.capasDir}${c.capa}" alt="" loading="lazy">
          <span class="rot"><span>${c.emoji}</span>${c.nome}</span>
          <span class="radio"></span>
        </button>`).join("")}</div>
       <button class="btn" type="button" data-acao="avancar" ${atual.length ? "" : "disabled"}>Continuar</button>`
    : `<div class="opcoes">${p.opcoes.map(([v, e, t]) => `
        <button type="button" class="opcao" data-valor="${v}" aria-pressed="${atual === v}">
          <span class="emoji">${e}</span><span>${t}</span><span class="radio"></span>
        </button>`).join("")}</div>`;

  mostrar(`
    ${voltarHTML}
    <section class="pergunta">
      <h2 class="t-medio">${p.titulo}</h2>
      ${p.sub ? `<p class="sub">${p.sub}</p>` : ""}
      ${corpo}
    </section>`);
}

// Pausa 1 — quebra a crença (mesmo papel do "Só mais uma pra recuperar" do Desaposta)
function telaReflexao() {
  const frase = {
    procura:     ["“Cadê a parte 2?”", "Você procura, acha o mesmo trecho de 40 segundos de novo, e a história nunca anda."],
    comentarios: ["“Alguém conta o final?”", "Saber pelo resumo dos outros não é a mesma coisa que ver a cena acontecer."],
    desiste:     ["“Depois eu procuro…”", "E o depois nunca chega. A história fica pela metade e você nem lembra o nome."],
    paga:        ["“Só mais um pacote…”", "Pacote com poucos dramas ou assinatura que vence: o gasto volta toda semana."],
  }[respostas.reacao] || ["“Cadê a parte 2?”", "Você procura e só acha o mesmo trecho de 40 segundos."];

  mostrar(`
    ${voltarHTML}
    <section class="pausa subir">
      <h2 class="t-medio">Você não precisa caçar o resto pra <span class="pilula">ver o final</span>.</h2>
      <div class="citacao">
        <span class="aspas">”</span>
        <strong>${frase[0]}</strong>
        <p>${frase[1]}</p>
      </div>
      <p class="fecho">A história completa já existe —<br>do episódio 1 ao último.</p>
      <p class="sub">Nas próximas perguntas, vamos montar a sua lista.</p>
      <button class="btn" type="button" data-acao="avancar">Quero continuar</button>
    </section>`);
}

// Pausa 2 — desejo: mostra capas das categorias escolhidas no meio do quiz
function telaCapas() {
  const nomes = gostosEscolhidos().map((g) => CATEGORIAS[g].nome);
  const texto = nomes.length > 2 ? `${nomes.slice(0, 2).join(", ")} e mais` : nomes.join(" e ");
  mostrar(`
    ${voltarHTML}
    <section class="pausa subir">
      <h2 class="t-medio">Boa escolha! Olha o que já está <span class="pilula">te esperando</span></h2>
      <p class="sub" style="margin:-10px 0 16px">${texto} — todos completos e na ordem.</p>
      <div class="fileira">${listaPersonalizada(8).map((c, i) => capaHTML(c, i, true)).join("")}</div>
      <p class="fecho">E isso é só o começo.</p>
      <p class="aviso-todas">🔓 Seu acesso libera <strong>todas as 7 categorias</strong>, não só as que você escolheu.</p>
      <p class="sub">Faltam 3 perguntas pra sua lista ficar pronta.</p>
      <button class="btn" type="button" data-acao="avancar">Continuar</button>
    </section>`);
}

function telaAnalise() {
  const etapas = [
    "Revendo o que você contou",
    "Separando suas categorias favoritas",
    respostas.idioma === "legendado" ? "Filtrando títulos legendados" : "Filtrando títulos dublados",
    "Preparando seu resultado",
  ];
  mostrar(`
    <section class="analise">
      <div class="anel">
        <svg viewBox="0 0 150 150" aria-hidden="true">
          <defs><linearGradient id="gradAnel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c2338f"/><stop offset="1" stop-color="#a03fe0"/></linearGradient></defs>
          <circle class="fundo-anel" cx="75" cy="75" r="68"/>
          <circle class="progresso-anel" cx="75" cy="75" r="68"/>
        </svg>
        <span class="simbolo simbolo-grande" aria-hidden="true"><img src="assets/logo.png" alt=""></span>
      </div>
      <h2 class="t-medio">Analisando suas respostas…</h2>
      <ul class="etapas">${etapas.map((t) => `<li><i></i>${t}</li>`).join("")}</ul>
    </section>`);

  const arco = app.querySelector(".progresso-anel");
  const itens = [...app.querySelectorAll(".etapas li")];
  const inicio = performance.now();
  (function tick(agora) {
    const t = Math.min(1, (agora - inicio) / CONFIG.analiseMs);
    arco.style.strokeDashoffset = 427 * (1 - t);
    const feitas = Math.floor(t * itens.length + 0.0001);
    itens.forEach((li, i) => {
      li.classList.toggle("ok", i < feitas);
      li.classList.toggle("ativa", i === feitas);
    });
    if (t < 1) requestAnimationFrame(tick);
    else setTimeout(() => { passo++; render(); }, 500);
  })(inicio);
}

/* ================= RESULTADO ================= */
function blocoOndeEsta() {
  const hoje = {
    procura: "Caçando a parte 2", comentarios: "Pedindo o final nos comentários",
    desiste: "Desistindo no meio da história", paga: "Pagando pra ver o resto",
  }[respostas.reacao] || "Vendo só trechos";
  const meta = {
    final: ["🎬", "Ver todos os finais"], novidade: ["🆕", "Drama novo todo dia"],
    economia: ["💰", "Parar de pagar toda semana"], organizado: ["📚", "Tudo num lugar só"],
  }[respostas.objetivo] || ["🎬", "Ver todos os finais"];

  const linhas = [
    ["Finais que você perdeu", { muitas: 1, algumas: 2, raro: 3 }, { muitas: "Várias vezes", algumas: "Algumas vezes", raro: "Quase nunca" }, "frequencia", "Todos os finais"],
    ["Quando o vídeo acaba", { procura: 1, comentarios: 1, desiste: 1, paga: 2 }, { procura: "Caça a parte 2", comentarios: "Pede spoiler", desiste: "Desiste no meio", paga: "Paga pra ver o resto" }, "reacao", "Próximo episódio na hora"],
    ["Gasto com dramas", { assinatura: 1, pacote: 1, nunca: 2 }, { assinatura: "Assinatura que renova", pacote: "Pacote com poucos dramas", nunca: "Só trechos grátis" }, "gasto", "Uma vez só, pra sempre"],
    ["Onde você assiste", { instagram: 1, tiktok: 1, facebook: 1, app: 2 }, { instagram: "Trechos no Reels", tiktok: "Trechos no TikTok", facebook: "Trechos no Facebook", app: "App pago" }, "onde", "Catálogo completo"],
  ];
  const seg = (n, cls) => `<div class="seg ${cls}">${[1, 2, 3, 4].map((k) => `<i class="${k <= n ? "on" : ""}"></i>`).join("")}</div>`;

  return `
    <section>
      <div class="centro"><span class="selo">✅ Seu resultado está pronto</span></div>
      <h1 class="t-grande" style="margin-top:12px">Onde você está e onde quer <span class="pilula">chegar</span></h1>
      <div class="hoje-meta">
        <div class="hj"><small>HOJE</small><span class="em">😩</span>${hoje}</div>
        <div class="mt"><small>SEU OBJETIVO</small><span class="em">${meta[0]}</span>${meta[1]}</div>
      </div>
      <div class="metricas">${linhas.map(([nome, nivel, rotulo, chave, alvo]) => `
        <div class="metrica">
          <b>${nome}</b>
          <div class="barras">${seg(nivel[respostas[chave]] || 1, "ruim")}${seg(4, "bom")}</div>
          <div class="rotulos"><span>${rotulo[respostas[chave]] || "—"}</span><span>${alvo}</span></div>
        </div>`).join("")}
      </div>
    </section>`;
}

function blocoGrafico() {
  const objetivo = {
    final: "assistir seus dramas até o final", novidade: "ter drama novo todo dia",
    economia: "parar de pagar toda semana", organizado: "ter tudo num lugar só",
  }[respostas.objetivo] || "assistir seus dramas até o final";
  const quando = { noite: "Hoje à noite", pausa: "No intervalo", casa: "Hoje em casa", sempre: "Agora mesmo" }[respostas.momento] || "Hoje";

  return `
    <section>
      <h2 class="t-medio">Como sua maratona vai <span class="pilula">acontecer</span></h2>
      <p class="sub">Seu objetivo: <strong>${objetivo}</strong>.</p>
      <div class="grafico">
        <svg viewBox="0 0 320 160" aria-hidden="true">
          <defs>
            <linearGradient id="gl" x1="0" x2="1"><stop offset="0" stop-color="#e5334a"/><stop offset=".35" stop-color="#e2449f"/><stop offset=".7" stop-color="#b33fd6"/><stop offset="1" stop-color="#7a2aa8"/></linearGradient>
            <linearGradient id="gm" x1="0" x2="1"><stop offset="0" stop-color="#c2338f"/><stop offset="1" stop-color="#a03fe0"/></linearGradient>
            <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a03fe0" stop-opacity=".16"/><stop offset="1" stop-color="#e2449f" stop-opacity="0"/></linearGradient>
          </defs>
          ${[40, 80, 120].map((y) => `<line x1="10" x2="310" y1="${y}" y2="${y}" stroke="#e8dcef" stroke-dasharray="5 6"/>`).join("")}
          <path d="M40 128 L120 104 L200 70 L280 30 L280 150 L40 150 Z" fill="url(#ga)"/>
          <path class="linha" d="M40 128 L120 104 L200 70 L280 30" fill="none" stroke="url(#gl)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <g class="pt"><circle cx="40" cy="128" r="13" fill="#e5334a" opacity=".15"/><circle cx="40" cy="128" r="8" fill="#fff" stroke="#e5334a" stroke-width="4"/></g>
          <g class="pt"><circle cx="120" cy="104" r="8" fill="#fff" stroke="#e2449f" stroke-width="4"/></g>
          <g class="pt"><circle cx="200" cy="70" r="8" fill="#fff" stroke="#b33fd6" stroke-width="4"/></g>
          <g class="pt"><circle cx="280" cy="30" r="15" fill="#7a2aa8" opacity=".15"/><circle cx="280" cy="30" r="9" fill="#fff" stroke="#7a2aa8" stroke-width="4"/>
            <rect x="258" y="-4" width="44" height="20" rx="10" fill="url(#gm)"/><text x="280" y="10" text-anchor="middle" font-size="11" font-weight="700" fill="#fff" font-family="Open Sans, sans-serif">Meta</text></g>
        </svg>
        <div class="eixo"><span>Hoje</span><span>${quando}</span><span>1º final</span><span>Maratona</span></div>
      </div>
    </section>`;
}

function blocoLista() {
  const principal = CATEGORIAS[gostosEscolhidos()[0]];
  return `
    <section>
      <h2 class="t-medio">Sua lista pra <span class="pilula">começar hoje</span></h2>
      <div class="perfil">
        <span class="em">${principal.emoji}</span>
        <div><small>Seu perfil</small><strong>${principal.perfil}</strong><p>${principal.frase}</p></div>
      </div>
      <div class="grade">${listaPersonalizada(6).map((c, i) => capaHTML(c, i, true)).join("")}</div>
      <p class="legenda">Todos completos, do episódio 1 ao último</p>
      <div class="todas">
        <strong>🔓 E não para aqui: seu acesso libera o catálogo inteiro</strong>
        <div class="chips">${Object.entries(CATEGORIAS).map(([k, c]) => `<span class="${gostosEscolhidos().includes(k) && respostas.gostos?.length ? "sua" : ""}">${c.emoji} ${c.nome}</span>`).join("")}</div>
        <small>Mais de 8.300 dramas em todas as categorias · suas escolhas aparecem em destaque</small>
      </div>
    </section>`;
}

function blocoPassos() {
  const primeiro = listaPersonalizada(1)[0].titulo;
  return `
    <section>
      <h2 class="t-medio">Por onde <span class="pilula">começar</span></h2>
      <p class="sub">Do pagamento ao primeiro episódio em minutos.</p>
      <div class="passos">
        <div class="passo"><span class="ic">💳</span><div><small>PASSO 1</small><strong>Pague uma vez só</strong><p>R$ 14,90, sem mensalidade e sem susto no fim do mês.</p></div></div>
        <div class="passo"><span class="ic">📲</span><div><small>PASSO 2</small><strong>Receba o link no WhatsApp</strong><p>Chega na hora e abre o canal do catálogo no Telegram (é grátis).</p></div></div>
        <div class="passo"><span class="ic">▶️</span><div><small>PASSO 3</small><strong>Dê play na sua lista</strong><p>Comece por “${primeiro}” — do episódio 1 ao último.</p></div></div>
      </div>
    </section>`;
}

// Prints reais de mensagens de clientes. O cartão mostra só o trecho da mensagem
// (assets/provas/msg-*.jpg, recortado do print); tocar abre o print completo.
const PRINTS = [
  ["rosangela-prova", "Rosângela P."],
  ["claudia", "Cláudia S."],
  ["paty", "Paty M."],
  ["maria", "Maria Helena S."],
  ["marcos-prova", "Marcos O."],
];

function blocoProva() {
  const cartoes = PRINTS.map(([arq, nome]) => `
    <figure class="dm" data-print="${arq}" role="button" tabindex="0" aria-label="Ver print completo da mensagem de ${nome}">
      <figcaption><span class="av">${nome[0]}</span><b>${nome}</b><small>mensagem no Instagram</small></figcaption>
      <div class="dm-msg"><img src="assets/provas/msg-${arq}.jpg" alt="Mensagem de ${nome} agradecendo pelo acesso" loading="lazy"></div>
    </figure>`).join("");
  return `
    <section>
      <h2 class="t-medio">Quem já está <span class="pilula">assistindo</span></h2>
      <div class="contador"><span class="em">⭐</span><div><strong>+8 mil</strong><span>clientes · nota 4,9 de 5</span></div></div>
      <div class="esteira" aria-label="Mensagens de clientes">
        <div class="esteira-trilho">${cartoes}<div class="esteira-copia" aria-hidden="true">${cartoes}</div></div>
      </div>
      <p class="legenda">Toque numa mensagem para ver o print completo</p>
    </section>`;
}

function abrirPrint(nome) {
  const caixa = document.createElement("div");
  caixa.className = "lightbox";
  caixa.innerHTML = `<img src="assets/provas/${nome}.jpg" alt="Print original da mensagem da cliente"><button type="button" aria-label="Fechar">×</button>`;
  caixa.addEventListener("click", () => caixa.remove());
  document.body.appendChild(caixa);
}

function blocoOferta() {
  const principal = CATEGORIAS[gostosEscolhidos()[0]];
  return `
    <section class="oferta" id="acesso">
      <h2 class="t-medio">Sua lista está <span class="pilula">pronta</span></h2>
      <p class="sub">Um pagamento só, e você começa hoje.</p>
      <div class="cartao-oferta">
        <div class="faixa">ACESSO VITALÍCIO AO MUNDO DOS DRAMAS</div>
        <div class="preco-box">
          <div class="de">De R$ 24,90</div>
          <div class="preco"><small>R$</small>14,90</div>
          <span>pagamento único · sem mensalidade</span>
        </div>
        <div class="inclui">
          <h3>O que está incluído</h3>
          <ul>
            <li>Mais de 8.300 dramas completos, do 1º ao último episódio</li>
            <li>Sua lista de ${principal.nome} pronta pra começar</li>
            <li>${respostas.idioma === "legendado" ? "Legendado e dublado" : "Dublado e legendado"}, no formato vertical</li>
            <li>Títulos novos todos os dias</li>
            <li>Peça o drama que quiser</li>
            <li>Tutorial passo-a-passo junto com o acesso</li>
          </ul>
        </div>
      </div>
      <a class="btn pulsar" id="btn-checkout" href="${checkoutHref()}">Quero assistir até o final →</a>
      <p class="nota">📲 Liberação imediata no seu WhatsApp · 🔒 Pagamento seguro pela Lowify</p>
      <div class="garantia">
        <span class="em">🛡️</span>
        <div><strong>Garantia de 7 dias</strong><p>Não gostou? Peça o reembolso em até 7 dias após a compra.</p></div>
      </div>
    </section>`;
}

function blocoFaq() {
  const itens = [
    ["Vou ter acesso só às categorias que escolhi no quiz?", "Não. O quiz só monta uma lista pra você começar. O acesso libera o catálogo inteiro, com todas as categorias: dramas turcos, doramas coreanos, dramas brasileiros, séries asiáticas, americanas, romance e vingança."],
    ["Os dramas são completos mesmo?", "Sim. Cada drama vem do episódio 1 ao último, na ordem certa, sem pedaço faltando."],
    ["Como recebo o acesso?", "Assim que o pagamento é aprovado, o link chega no seu WhatsApp junto com um tutorial. Ele abre o canal do catálogo no Telegram."],
    ["Preciso instalar algum aplicativo?", "Só o Telegram, que é gratuito e parecido com o WhatsApp. Se ainda não tiver, o tutorial mostra como instalar em menos de 2 minutos."],
    ["Tem mensalidade?", "Não. É um pagamento único de R$ 14,90 e o acesso é vitalício. Nada mais é cobrado."],
    ["E se o drama que eu quero não estiver lá?", "É só pedir pelo suporte. A equipe adiciona títulos novos com frequência e leva os pedidos a sério."],
    ["Posso pedir reembolso?", "Sim. Você tem 7 dias de garantia: se não gostar, é só pedir o reembolso pelo suporte."],
  ];
  return `
    <section>
      <h2 class="t-medio">Perguntas <span class="pilula">frequentes</span></h2>
      <div class="faq">${itens.map(([q, r], i) => `<details ${i < 2 ? "open" : ""}><summary>${q}</summary><p>${r}</p></details>`).join("")}</div>
    </section>
    <footer class="rodape">
      <p>© 2026 Mundo dos Dramas · Pagamento processado pela Lowify</p>
      <p><a href="${CONFIG.whatsapp}" target="_blank" rel="noopener">Falar com o suporte no WhatsApp</a></p>
    </footer>`;
}

function telaResultado() {
  mostrar(`<div class="resultado">
    ${blocoOndeEsta()}
    ${blocoGrafico()}
    ${blocoLista()}
    ${blocoPassos()}
    ${blocoProva()}
    ${blocoOferta()}
    ${blocoFaq()}
  </div>`);

  // faixa esfumaçada: some quando o botão de checkout aparece (ou já passou)
  const fumaca = document.getElementById("fumaca");
  fumaca.classList.add("on");
  new IntersectionObserver(([e]) => {
    fumaca.classList.toggle("on", !e.isIntersecting && e.boundingClientRect.top > 0);
  }).observe(document.getElementById("btn-checkout"));

  // gráfico desenha quando aparece na tela
  const grafico = app.querySelector(".grafico");
  new IntersectionObserver(([e], obs) => {
    if (e.isIntersecting) { grafico.classList.add("on"); obs.disconnect(); }
  }, { threshold: 0.4 }).observe(grafico);
}

/* ================= NAVEGAÇÃO ================= */
function render() {
  atualizarTrilho();
  document.getElementById("fumaca").classList.remove("on");
  if (passo < 0) { telaIntro(); return girarCelular(); }
  if (passo > ROTEIRO.length) return telaResultado();
  if (passo === ROTEIRO.length) return telaAnalise();
  const etapa = ROTEIRO[passo];
  if (etapa === "pausa:reflexao") return telaReflexao();
  if (etapa === "pausa:capas") return telaCapas();
  telaPergunta(etapa);
}

function avancar() { passo++; render(); }

app.addEventListener("click", (ev) => {
  const acao = ev.target.closest("[data-acao]")?.dataset.acao;
  if (acao === "avancar") return avancar();
  if (acao === "voltar") { passo--; return render(); }

  const botao = ev.target.closest(".opcao, .tile");
  if (!botao) return;
  const id = ROTEIRO[passo];
  const v = botao.dataset.valor;

  if (PERGUNTAS[id].multi) {
    const sel = respostas[id] || (respostas[id] = []);
    const idx = sel.indexOf(v);
    idx >= 0 ? sel.splice(idx, 1) : sel.push(v);
    botao.setAttribute("aria-pressed", idx < 0);
    app.querySelector('[data-acao="avancar"]').disabled = sel.length === 0;
  } else {
    respostas[id] = v;
    app.querySelectorAll(".opcao").forEach((b) => b.setAttribute("aria-pressed", b === botao));
    setTimeout(avancar, 280);
  }
});

// recalcula UTMs/fbclid na hora do clique no checkout
document.addEventListener("click", (ev) => {
  const ck = ev.target.closest("#btn-checkout");
  if (ck) ck.href = checkoutHref();
  const depo = ev.target.closest("[data-print]");
  if (depo) abrirPrint(depo.dataset.print);
});
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") document.querySelector(".lightbox")?.remove();
  if (ev.key === "Enter" && ev.target.matches?.("[data-print]")) abrirPrint(ev.target.dataset.print);
});

render();
