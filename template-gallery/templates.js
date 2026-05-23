// ============================================================
//  TEMPLATE GALLERY — templates.js
//  Marcela DS · marcelads.github.io
// ============================================================
//
//  COMO ADICIONAR UM NOVO TEMPLATE:
//  1. Coloque o arquivo HTML na mesma pasta deste arquivo
//  2. Copie o bloco de exemplo no final deste arquivo
//  3. Preencha os campos (id, nome, categoria, tags, etc.)
//  4. git add . && git commit -m "novo template" && git push
//
// ============================================================


// ── COR DE DESTAQUE DA GALERIA ───────────────────────────────
//  Usada no header, sidebar ativa, botões e detalhes da UI.
//  Cor atual: #42B9BE (teal — identidade Marcela DS)
//  Para trocar: substitua o valor abaixo e salve.
//
//  Opções disponíveis da identidade visual:
//    #E5007E  →  magenta forte
//    #70539D  →  roxo médio
//    #42B9BE  →  teal (ATUAL)
//    #FFEC00  →  amarelo elétrico
// ─────────────────────────────────────────────────────────────
const GALLERY_ACCENT = '#42B9BE';


// ============================================================
//  ARRAY PRINCIPAL DE TEMPLATES
//  Cada objeto = 1 card no menu lateral da galeria
// ============================================================
const templates = [

  // ── TEMPLATE 1 ──────────────────────────────────────────────
  {
    id: 1,
    nome: "I ♥ Power BI — Cosmic Intro",
    categoria: "Intro / Landing",
    tags: ["3d", "particles", "dark", "animated"],

    // Texto exibido abaixo do nome no card da galeria
    descricao: "Partículas 3D que morfam entre esfera e texto. Grade animada, glow roxo, stagger de entrada.",

    // Nome do arquivo HTML na mesma pasta
    arquivo: "ilovepowerbi.html",
    md:      "ilovepowerbi.md",
    dax:     "ilovepowerbi.txt",   // ← adiciona isso

    // Prompt copiado pelo botão "Copiar Prompt MD"
    // Cole aqui o markdown completo de identidade visual
    prompt: `# Prompt IA — Cosmic Dark / Particle Galaxy UI

## Atmosfera
Dark premium. Espacial. Tecnológico com alma.
Roxo elétrico + magenta + azul neon sobre fundo quase preto.

## Paleta
- Fundo: #0a001a
- Accent: #aa44ff (roxo), #ff44aa (magenta), #44aaff (azul)
- Texto: #ffffff / rgba(255,255,255,0.45)
- Grid: rgba(160,0,255,0.07)

## Tipografia
- Inter · eyebrow 11px ls-5px · H1 clamp(36,5vw,62px) w700
- text-shadow: 0 0 40px rgba(170,68,255,0.5)

## Animações
- gfade: opacity+translateY(16px), stagger 0.8→1.1→1.4→1.8s
- gpulse: scale 1→1.3, 3s loop
- Canvas grid 50px animado
- Three.js r128: esfera → texto → esfera

## Regras
- Fundo sempre #0a001a
- Badges: border-radius 99px, border rgba(cor,.4), bg rgba(cor,.08)
- HTML único arquivo, Three.js via CDN cdnjs r128
`
  },

  // ── TEMPLATE 2 ──────────────────────────────────────────────
  {
    id: 2,
    nome: "Cosmos — Deep Space UI",
    categoria: "Intro / Landing",
    tags: ["space", "minimal", "dark", "rings", "stars"],
    descricao: "Anéis orbitais concêntricos, estrelas ascendentes e CTA outline. Observatório executivo.",
    arquivo: "cosmos.html",
    prompt: `# Prompt IA — Cosmos / Deep Space UI

## Atmosfera
Minimalismo espacial. Frio, preciso, contemplativo.
Azul ciano único sobre quase-preto.

## Paleta
- Fundo: #000008
- Accent único: #00aaff
- Texto: #ffffff / rgba(255,255,255,0.5)
- Rings: rgba(0,170,255,[0.08|0.05|0.03])
- Estrelas: rgba(200,220,255,variável)
⛔ PROIBIDO roxo, magenta

## Tipografia
- Inter · eyebrow 11px ls-4px · H1 clamp(36,5vw,56px) w700
- text-shadow: 0 0 40px rgba(0,170,255,0.4)
- CTA: 13px ls-2px uppercase

## Animações
- fadeup: opacity+translateY(20px), stagger 1→1.3→1.6→2s
- spin1: 3 anéis — 300px/18s · 500px/30s · 700px/50s
- Canvas: 200 estrelas ascendentes com twinkle senoidal

## Componentes
- Anéis: border 1px solid rgba(0,170,255,[.08|.05|.03])
- CTA: outline #00aaff, hover bg rgba(0,170,255,0.1)
- Camadas: z0 canvas · z1 anéis · z2 conteúdo
`
  },

  // ── TEMPLATE 3 ──────────────────────────────────────────────
  {
    id: 3,
    nome: "Matrix — Terminal Feed UI",
    categoria: "Intro / Landing",
    tags: ["matrix", "terminal", "green", "realtime", "kpi"],
    descricao: "Canvas matrix falling, badge live piscante, KPIs à esquerda. Sala de controle às 3h da manhã.",
    arquivo: "matrix.html",
    prompt: `# Prompt IA — Matrix / Terminal Feed UI

## Atmosfera
Urgência operacional. Dados em tempo real. Verde matrix sobre preto.
⛔ PROIBIDO azul, roxo — apenas verde #00ff64

## Paleta
- Fundo: #000000
- Accent único: #00ff64
- Texto: #ffffff / rgba(255,255,255,0.5) / rgba(255,255,255,0.3)
- Bordas: rgba(0,255,100,0.3) forte / rgba(0,255,100,0.15) sutil

## Tipografia
- Inter (UI) + monospace (canvas)
- H1: linha 1 branca, linha 2 #00ff64
- Stat value: 28px w700 #00ff64 · Stat label: 10px ghost uppercase

## Animações
- mfade: translateX(-20px→0) ← HORIZONTAL, não vertical
- mexp: width 0→60px (divider)
- blink: 1s dot piscante
- Stagger: 1.2→1.5→1.8→2→2.3s
- Canvas: colunas 16px, trail rgba(0,0,0,0.05), setInterval 50ms

## Layout
- flex-start ESQUERDA — nunca centralizado
- badge → headline → divider 2px sólido → subtitle → stats
`
  },

  // ── TEMPLATE 4 ──────────────────────────────────────────────
  {
    id: 4,
    nome: "Blueprint — Enterprise Network UI",
    categoria: "Intro / Landing",
    tags: ["enterprise", "network", "skyblue", "navy", "graph"],
    descricao: "Grafo de nós flutuante, headline light (300), 4 stat cards, divider gradiente. CTO mood.",
    arquivo: "blueprint.html",
    prompt: `# Prompt IA — Blueprint / Enterprise Network UI

## Atmosfera
Precisão corporativa. Sky blue sobre navy.
⛔ PROIBIDO verde, roxo, magenta

## Paleta
- Fundo: #0c1420 (NAVY — não é preto)
- Accent: #38bdf8
- Cards: bg rgba(56,189,248,0.04) · border rgba(56,189,248,0.12)
- Badge border: rgba(56,189,248,0.25) · badge text: rgba(56,189,248,0.7)
- Stat label: rgba(56,189,248,0.5) · Stat value: #ffffff (BRANCO)

## Tipografia
- Inter · H1 font-weight:300 (LIGHT) ← assinatura do estilo
- <strong> na palavra-chave: w700 #38bdf8 · letter-spacing:-1px
- Subtitle: 14px rgba(255,255,255,0.35)

## Animações
- bpfade: translateY(12px→0), stagger 1→1.3→1.8→2→2.4s
- bpexp: divider width 0→200px gradiente fade
- bpblink: 1.5s LENTO (pulse calmo)
- Canvas: 18 nós ±0.25px/frame, arestas <180px, rAF

## Regras
- Stat values BRANCOS, não azuis
- Sem overlay sobre canvas
- Headline weight 300 obrigatório
`
  },

  // ── TEMPLATES 5–10: PREENCHA AQUI ───────────────────────────
  //
  //  Copie o bloco abaixo, descomente e preencha:
  //
  // {
  //   id: 5,                          // ← número único (não repetir)
  //   nome: "Nome do Template",       // ← aparece no menu lateral
  //   categoria: "Intro / Landing",   // ← ex: BI, Sports, UI Kit, Intro
  //   tags: ["tag1", "tag2"],         // ← palavras-chave para referência
  //   descricao: "Frase curta.",      // ← exibida abaixo do nome
  //   arquivo: "meu-template.html",   // ← nome do HTML na mesma pasta
  //   prompt: `
  // # Prompt IA — Nome do Template
  //
  // Cole aqui o markdown completo de identidade visual.
  // Quanto mais detalhado, melhor a IA replica o estilo.
  //   `
  // },

];


// ============================================================
//  NÃO EDITE ABAIXO DESTA LINHA
//  (a não ser que saiba o que está fazendo)
// ============================================================

// Injeta a cor de destaque nas variáveis CSS da galeria
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--accent', GALLERY_ACCENT);

  // Derivadas automáticas da cor de destaque
  // glow = mesma cor com 15% de opacidade
  const hex = GALLERY_ACCENT.replace('#','');
  const r = parseInt(hex.slice(0,2),16);
  const g = parseInt(hex.slice(2,4),16);
  const b = parseInt(hex.slice(4,6),16);
  document.documentElement.style.setProperty('--glow', `rgba(${r},${g},${b},0.15)`);
  document.documentElement.style.setProperty('--accent-rgb', `${r},${g},${b}`);
});
