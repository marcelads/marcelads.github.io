const templates = [
  {
    id: 1,
    nome: "UEFA Champions Intro",
    categoria: "Sports",
    tags: ["intro", "cinematic", "dark", "animated"],
    descricao: "Intro cinematográfica estilo Champions League com partículas e reveal dramático.",
    arquivo: "uefa.html",
    prompt: `# Prompt IA — UEFA Champions Intro

Crie uma página web seguindo exatamente esta identidade visual.

## Identidade Visual
- dark cinematográfico
- partículas douradas flutuantes
- tipografia bold condensada (ex: Bebas Neue, Anton)
- reveal com fade + scale dramático
- paleta: #0a0a0f, #1a1a2e, accent #c9a227 (dourado)
- sons opcionais de intro
- lettering com tracking exagerado

## Estrutura
- fullscreen hero com animação de entrada
- logo/nome central com reveal
- countdown ou stats flutuantes
- transição suave para conteúdo

## Atmosfera
- epicidade máxima
- sem elementos desnecessários
- cada frame deve parecer um poster
`
  },
  {
    id: 2,
    nome: "Dashboard Financeiro",
    categoria: "BI",
    tags: ["dashboard", "dark", "kpi", "executive"],
    descricao: "Dashboard executivo dark com KPIs, gráficos e glassmorphism.",
    arquivo: "finance.html",
    prompt: `# Prompt IA — Dashboard Financeiro Executivo

Crie uma página web seguindo exatamente esta identidade visual.

## Identidade Visual
- dark premium: #0b0f19, #111827, #1f2937
- glassmorphism nos cards: backdrop-filter blur + borda rgba branca
- accent: #fa5f28 (laranja), #2b9d94 (teal)
- fonte: Satoshi ou Poppins
- glow sutil nos elementos em foco
- animações suaves de entrada (stagger 0.1s)

## Componentes
- header com logo + nav + avatar
- hero com KPIs principais (4 cards)
- gráfico de linha + barras
- tabela de transações
- sidebar com filtros

## Atmosfera
- executivo, sério, confiável
- denso de informação mas respirável
- hierarquia visual clara
`
  },
  {
    id: 3,
    nome: "Glassmorphism UI",
    categoria: "UI Kit",
    tags: ["glass", "blur", "modern", "cards"],
    descricao: "Kit de componentes glassmorphism para dashboards e landing pages.",
    arquivo: "glassmorphism.html",
    prompt: `# Prompt IA — Glassmorphism UI Kit

## Identidade Visual
- fundo escuro com gradiente mesh
- cards: background rgba(255,255,255,0.05), backdrop-filter blur(20px)
- bordas: 1px solid rgba(255,255,255,0.1)
- sombra: 0 8px 32px rgba(0,0,0,0.3)
- accent: roxo #7c3aed ou ciano #06b6d4
- hover: elevar card + aumentar blur

## Componentes do Kit
- card básico
- card com ícone
- modal glass
- input glass
- botão glass com glow
- badge/tag glass
- sidebar glass

## Restrições
- manter translucidez em todos os elementos
- nunca usar branco sólido
- camadas de profundidade obrigatórias
`
  },
  // ─── ADICIONE SEUS TEMPLATES AQUI ───────────────────────────────────────────
  // {
  //   id: 4,
  //   nome: "Nome do Template",
  //   categoria: "Categoria",
  //   tags: ["tag1", "tag2"],
  //   descricao: "Descrição curta.",
  //   arquivo: "seu-arquivo.html",
  //   prompt: `# Prompt IA — Nome do Template
  //
  // Cole aqui seu markdown de identidade visual...
  // `
  // },
];

// ─── TEMPLATE 4: ILovePowerBI ────────────────────────────────────────────────
const t4 = {
  id: 4,
  nome: "I ♥ Power BI — Cosmic Intro",
  categoria: "Intro / Landing",
  tags: ["3d", "particles", "dark", "animated", "powerbi"],
  descricao: "Intro cinematográfica com partículas 3D que morfam entre esfera e texto. Grade animada, glow roxo, stagger de entrada.",
  arquivo: "ilovepowerbi.html",
  prompt: `# Prompt IA — Cosmic Dark / Particle Galaxy UI

## Atmosfera
Dark premium. Espacial. Tecnológico com alma. Não hacker, não startup pastel.
Paleta baseada em roxo elétrico, magenta e azul neon sobre fundo quase preto.

## Paleta obrigatória
- Fundo: #0a001a
- Accent principal: #aa44ff (roxo elétrico)
- Accent secundário: #ff44aa (magenta)
- Accent terciário: #44aaff (azul neon)
- Texto: #ffffff (títulos), rgba(255,255,255,0.45) (corpo)
- Grid de fundo: rgba(160,0,255,0.07)

## Gradiente de destaque
linear-gradient(90deg, #aa44ff, #ff44aa) — aplicado em -webkit-background-clip:text

## Tipografia
- Fonte: Inter
- Eyebrow: 11px, letter-spacing 5px, uppercase, #aa44ff
- H1: clamp(36px, 5vw, 62px), weight 700, text-shadow: 0 0 40px rgba(170,68,255,0.5)
- Corpo: 16px, rgba(255,255,255,0.45), line-height 1.8

## Animações obrigatórias
- Entrada: @keyframes gfade {from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)}}
- Stagger delays: 0.8s → 1.1s → 1.4s → 1.8s
- Background: canvas com grid animado (linhas 50px, rgba(160,0,255,0.07))
- Glow orb: div radial pulsante @keyframes gpulse (scale 1→1.3, 3s loop)
- Partículas 3D (Three.js r128): esfera morfando para texto e voltando

## Componentes padrão
- Badges: border-radius 99px, border 1px solid rgba(cor,.4), background rgba(cor,.08)
- Cards: background rgba(255,255,255,0.03), border 1px solid rgba(170,68,255,.15)
- Hover cards: box-shadow 0 0 20px rgba(170,68,255,0.3)

## Camadas z-index
1: canvas grid | 2: Three.js | 3: glow orb | 4: conteúdo

## Regras rígidas
- Não mudar paleta
- Não usar fundo claro
- Não simplificar animações de entrada
- HTML único arquivo, sem dependências além de Three.js CDN
`
};
templates.push(t4);

// ─── TEMPLATE 5: COSMOS ──────────────────────────────────────────────────────
const t5 = {
  id: 5,
  nome: "Cosmos — Deep Space UI",
  categoria: "Intro / Landing",
  tags: ["space", "minimal", "dark", "rings", "stars"],
  descricao: "Minimalismo espacial com anéis orbitais concêntricos, estrelas ascendentes e CTA outline. Frio, preciso, executivo.",
  arquivo: "cosmos.html",
  prompt: `# Prompt IA — Cosmos / Deep Space UI

## Atmosfera
Minimalismo espacial. Frio, preciso, contemplativo.
A quietude do espaço profundo com dados dentro.
Não é dark hacker. É observatório executivo.

## Paleta obrigatória
- Fundo: #000008
- Accent único: #00aaff (azul ciano elétrico)
- Texto principal: #ffffff
- Texto muted: rgba(255,255,255,0.5)
- Bordas/rings: rgba(0,170,255, [0.08 | 0.05 | 0.03])
- Estrelas: rgba(200,220,255, variável)

> PROIBIDO usar roxo, magenta ou qualquer cor que não seja azul ciano como accent.

## Tipografia
- Fonte: Inter
- Eyebrow: 11px, letter-spacing 4px, uppercase, #00aaff
- H1: clamp(36px, 5vw, 56px), weight 700, text-shadow: 0 0 40px rgba(0,170,255,0.4)
- Corpo: 18px, rgba(255,255,255,0.5), line-height 1.7
- CTA: 13px, letter-spacing 2px, uppercase

## Animações obrigatórias
@keyframes fadeup { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
Stagger: 1s → 1.3s → 1.6s → 2s

@keyframes spin1 { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }
Anéis: 300px/18s · 500px/30s · 700px/50s

Canvas estrelas: 200 partículas, movimento ascendente, twinkle senoidal.

## Componentes padrão
- Anéis: border 1px solid rgba(0,170,255,[.08|.05|.03]), border-radius 50%
- CTA: border 1px solid #00aaff, color #00aaff, border-radius 4px, background transparent
  hover: background rgba(0,170,255,0.1), box-shadow 0 0 20px rgba(0,170,255,0.25)
- Cards: background rgba(0,170,255,0.03), border 1px solid rgba(0,170,255,0.1)
- Separadores: border-top 1px solid rgba(0,170,255,0.08)

## Camadas z-index
0: canvas estrelas | 1: anéis orbitais | 2: conteúdo

## Regras rígidas
- Não mudar paleta, não adicionar roxo/magenta
- Manter anéis orbitais como assinatura visual
- CTA sempre outline, nunca fill sólido
- HTML único arquivo, sem dependências externas
`
};
templates.push(t5);

// ─── TEMPLATE 6: MATRIX ──────────────────────────────────────────────────────
const t6 = {
  id: 6,
  nome: "Matrix — Terminal Feed UI",
  categoria: "Intro / Landing",
  tags: ["matrix", "terminal", "green", "realtime", "kpi"],
  descricao: "Urgência operacional. Canvas matrix falling, badge live piscante, divider animado, KPIs à esquerda. Sala de controle às 3h da manhã.",
  arquivo: "matrix.html",
  prompt: `# Prompt IA — Matrix / Terminal Feed UI

## Atmosfera
Urgência operacional. Dados em tempo real. Sala de controle às 3h da manhã.
Verde matrix sobre preto. Tudo parece vivo e em movimento.

## Paleta obrigatória
- Fundo: #000000 (preto absoluto)
- Accent único: #00ff64 (verde matrix)
- Texto principal: #ffffff
- Texto muted: rgba(255,255,255,0.5)
- Texto ghost (labels): rgba(255,255,255,0.3)
- Bordas: rgba(0,255,100,0.3) strong / rgba(0,255,100,0.15) sutil

> PROIBIDO usar azul, roxo ou qualquer cor que não seja verde como accent.

## Tipografia
- Fonte UI: Inter | Fonte canvas: monospace
- Badge: 11px, letter-spacing 2px, uppercase, #00ff64
- H1: clamp(36px, 5vw, 58px), weight 700 — linha 1 branca, linha 2 #00ff64
- Corpo: 16px, rgba(255,255,255,0.5), line-height 1.8
- Stat label: 10px, letter-spacing 2px, uppercase, rgba(255,255,255,0.3)
- Stat value: 28px, weight 700, #00ff64

## Animações obrigatórias
@keyframes mfade { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
⚠️ Entrada é HORIZONTAL (translateX), não vertical.
@keyframes mexp { from{opacity:0;width:0} to{opacity:1;width:60px} }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
Stagger: 1.2s → 1.5s → 1.8s → 2s → 2.3s

Canvas matrix: colunas 16px, chars '01アイウエオカキクケコABCDEF0123456789',
trail rgba(0,0,0,0.05), opacidade Math.random()*.5+.1, setInterval 50ms.
Fade overlay: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7), #000).

## Componentes padrão
- Badge live: inline-flex, gap 6px, background rgba(0,255,100,0.1), border 1px solid rgba(0,255,100,0.3), border-radius 4px, dot 6px piscante
- Divider: height 2px, background #00ff64, animado com mexp
- Cards: background rgba(0,255,100,0.04), border-left 2px solid #00ff64
- Hover: box-shadow 0 0 12px rgba(0,255,100,0.3)

## Layout
- Alinhamento: flex-start (esquerda) — NUNCA centralizado
- Padding: clamp(2rem, 5vw, 5rem)
- Fluxo: badge → headline → divider → subtitle → stats

## Regras rígidas
- Não centralizar o conteúdo
- Não trocar o verde por outra cor
- Não remover badge de status nem divider verde
- Canvas matrix obrigatório no background
- HTML único arquivo
`
};
templates.push(t6);

// ─── TEMPLATE 7: BLUEPRINT ───────────────────────────────────────────────────
const t7 = {
  id: 7,
  nome: "Blueprint — Enterprise Network UI",
  categoria: "Intro / Landing",
  tags: ["enterprise", "network", "skyblue", "navy", "graph", "kpi"],
  descricao: "Precisão corporativa. Grafo de nós flutuante, headline light (300), 4 stat cards, divider gradiente. CTO mood.",
  arquivo: "blueprint.html",
  prompt: `# Prompt IA — Blueprint / Enterprise Network UI

## Atmosfera
Precisão corporativa. Infraestrutura de dados como arte técnica.
Sky blue sobre navy. CTO mostrando a planta para o board.
Frio, controlado, arquitetural.

## Paleta obrigatória
- Fundo: #0c1420 (navy — NÃO é preto)
- Accent único: #38bdf8 (sky blue)
- Fill de cards: rgba(56,189,248,0.04)
- Bordas de cards: rgba(56,189,248,0.12)
- Borda de badge: rgba(56,189,248,0.25)
- Label de stats: rgba(56,189,248,0.5)
- Texto badge: rgba(56,189,248,0.7)
- Texto principal: #ffffff
- Texto muted: rgba(255,255,255,0.35)

> PROIBIDO: verde, roxo, magenta. Apenas sky blue como accent.

## Tipografia
- Fonte: Inter
- Badge: 10px, letter-spacing 3px, uppercase, rgba(56,189,248,0.7)
- H1: clamp(32px,5vw,56px), font-weight:300 (LIGHT) — assinatura do estilo
  palavra-chave em <strong> font-weight:700 color:#38bdf8
  letter-spacing: -1px
- Subtitle: 14px, rgba(255,255,255,0.35), line-height 1.9
- Stat label: 9px, letter-spacing 2px, uppercase, rgba(56,189,248,0.5)
- Stat value: 20px, weight 600, #ffffff (BRANCO, não azul)

⚠️ Headline LIGHT (300) é a assinatura tipográfica. Não trocar para bold.

## Animações obrigatórias
@keyframes bpfade { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
@keyframes bpexp { to{width:200px} }
@keyframes bpblink { 0%,100%{opacity:1} 50%{opacity:.2} }
Stagger: 1s → 1.3s → 1.8s → 2s → 2.4s

Canvas grafo: 18 nós, velocidade ±0.25px/frame, arestas distância <180px,
opacidade 0.12*(1-d/180), requestAnimationFrame.
Nós: rgba(56,189,248,0.4), raio 1–3px.

## Componentes padrão
- Badge: inline-flex, gap 8px, border rgba(56,189,248,0.25), border-radius 4px
  Dot: 6px, #38bdf8, bpblink 1.5s (LENTO — pulse calmo)
- Divider: height 1px, gradient fade transparente nas bordas, width animado até 200px
- Stat cards: border rgba(56,189,248,0.12), border-radius 6px, padding 12px 20px
  hover: border rgba(56,189,248,0.3), background rgba(56,189,248,0.08)
- CTA: border 1px solid #38bdf8, color #38bdf8, background transparent, border-radius 4px

## Layout
- Alinhamento: CENTER
- Fluxo: badge → headline → divider → subtitle → stat cards

## Regras rígidas
- Fundo navy #0c1420, nunca preto puro
- Headline weight 300 obrigatório
- Stat values em branco, não azul
- Sem overlay de gradiente sobre canvas
- Grafo de nós obrigatório no background
- HTML único arquivo
`
};
templates.push(t7);
