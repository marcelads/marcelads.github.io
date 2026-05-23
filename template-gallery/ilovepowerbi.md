# 🎨 Template Guide — I Love Power BI
> Use este arquivo para recriar qualquer projeto com esta identidade visual.
> Cole no ChatGPT, Claude ou qualquer IA e responda as perguntas abaixo.

---

## ⚡ COMO USAR ESTE GUIA

Diga para a IA:

> *"Leia este guia e me faça as perguntas necessárias antes de criar qualquer coisa."*

A IA deve **obrigatoriamente perguntar** antes de gerar qualquer código:

---

## 🤖 PERGUNTAS QUE A IA DEVE FAZER

### 1. O que você quer criar?
- [ ] **Só a capa** (hero animado, partículas 3D, texto morphing)
- [ ] **Capa + Landing Page** (hero + seção com features e CTA)
- [ ] **Capa + Dashboard** (hero + seção com KPIs, gráficos e tabela)
- [ ] **Tudo** (capa + landing + dashboard — 3 seções em scroll)

### 2. Qual empresa / produto será representado?
> Ex: "Spotifai", "Teslax", "Nikee" — pode ser fictício ou real

### 3. Qual o conteúdo?
**Se Landing Page:**
- Qual o título principal?
- Qual o subtítulo?
- Quais 3–4 features/benefícios? (ícone, título, descrição)
- Texto dos botões CTA?

**Se Dashboard:**
- Quais KPIs mostrar? (nome, valor, variação ▲▼)
- Dados do gráfico de barras? (categorias + valores relativos em %)
- Dados do gráfico de linha? (valores mensais + meses)
- Dados da tabela? (colunas + linhas)

### 4. Quer manter a animação de partículas 3D?
- [ ] Sim, com morphing de texto (padrão — mais pesado)
- [ ] Sim, só a esfera girando (mais leve)
- [ ] Não, só o fundo de grade animada

### 5. Qual texto aparece no morphing de partículas? *(se aplicável)*
> Padrão: `I ♥ Power BI` — pode trocar por qualquer coisa curta

---

## 🎨 IDENTIDADE VISUAL

### Paleta de cores
| Variável | Valor | Uso |
|---|---|---|
| Background base | `#0a001a` | Fundo de todas as seções |
| Roxo principal | `#aa44ff` | Acentos, gradientes, bordas ativas |
| Rosa principal | `#ff44aa` | Gradientes, botões, destaques |
| Azul accent | `#44aaff` | Tags, barras alternadas |
| Roxo claro | `#cc77ff` | Textos secundários roxos |
| Rosa claro | `#ff88cc` | Textos secundários rosas |
| Azul claro | `#66aaff` | Textos secundários azuis |
| Verde delta | `#44ffaa` | Indicadores positivos ▲ |
| Vermelho delta | `#ff4488` | Indicadores negativos ▼ |
| Amarelo delta | `#ffc844` | Indicadores neutros |
| Texto principal | `#ffffff` | Títulos e valores |
| Texto secundário | `rgba(255,255,255,0.45)` | Subtítulos e descrições |
| Texto terciário | `rgba(255,255,255,0.3)` | Labels, datas, metadados |

### Gradiente principal
```css
background: linear-gradient(90deg, #aa44ff, #ff44aa);
```
> Usado em: logos, títulos em destaque, botões primários, barras de gráfico

### Cards / painéis
```css
background: rgba(255,255,255,0.04);
border: 1px solid rgba(170,68,255,0.2);
border-radius: 14px;
backdrop-filter: blur(8px);
```
> Hover: `border-color: rgba(170,68,255, 0.5)`

### Tags / badges
```css
/* Roxo */
border: 1px solid rgba(170,68,255,.4);
color: #cc77ff;
background: rgba(170,68,255,.08);

/* Rosa */
border: 1px solid rgba(255,68,170,.4);
color: #ff88cc;
background: rgba(255,68,170,.08);

/* Azul */
border: 1px solid rgba(68,170,255,.4);
color: #66aaff;
background: rgba(68,170,255,.08);
```

---

## ✍️ TIPOGRAFIA

| Uso | Fonte | Peso | Tamanho |
|---|---|---|---|
| Corpo | `Inter, sans-serif` | 400 | 13–16px |
| Títulos hero | `Inter` | 700–800 | `clamp(36px, 5vw, 62px)` |
| Labels uppercase | `Inter` | 600 | 10–11px, `letter-spacing: 2–5px` |
| KPI valores | `Inter` | 800 | `clamp(18px, 2vw, 26px)` |
| Eyebrow | `Inter` | 400 | 11px, `letter-spacing: 5px` |

---

## 🌀 ANIMAÇÕES

### Entrada de elementos (fade + slide up)
```css
@keyframes gfade {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Uso: animation: gfade 1s 0.8s forwards; */
/* Escalonar com delays: 0.8s → 1.1s → 1.4s → 1.8s */
```

### Orb de brilho pulsante
```css
@keyframes gpulse {
  0%, 100% { transform: translate(-50%,-50%) scale(1);   opacity: .6; }
  50%       { transform: translate(-50%,-50%) scale(1.3); opacity: 1;  }
}
/* Duração: 3s ease-in-out infinite */
```

### Grade animada (canvas 2D)
- Células de `50px` com linhas `rgba(160,0,255,0.07)`
- Move em X: `velocidade * 0.3` | Move em Y: `velocidade * 0.15`
- Incremento por frame: `gt += 0.5` ← **trocar para acelerar/desacelerar**

### Partículas 3D (Three.js r128)
| Parâmetro | Valor padrão | Como trocar |
|---|---|---|
| Quantidade | `8000` (com texto) / `4000` (só esfera) | Linha `var count=` |
| Tamanho partícula | `0.09` | `PointsMaterial.size` |
| Cor HSL base | `hsl(0.78, 90%, ...)` | `c.setHSL(0.78...)` |
| Duração estado (frames) | `260` | `STATE_DUR` |
| Duração morph (frames) | `110` | `MORPH_DUR` |
| Velocidade rotação | `y+=0.003 / x+=0.001` | No loop `animate()` |
| Texto do morphing | `I ♥ Power BI` | `buildText('SEU TEXTO', 7.5)` |

---

## 📐 ESTRUTURA DE SEÇÕES

```
html { scroll-snap-type: y mandatory; }

.section {
  height: 100vh;
  scroll-snap-align: start;
  overflow: hidden;
}
```

### Dot Nav (bolinhas laterais)
- Posição: `fixed`, `right: 20px`, `top: 50%`
- Bolinha inativa: `rgba(255,255,255,0.25)` com borda `rgba(170,68,255,0.5)`
- Bolinha ativa: `background: #aa44ff`, `box-shadow: 0 0 8px #aa44ff`
- Detecção automática via `IntersectionObserver` com `threshold: 0.5`

---

## 📊 COMPONENTES DE DASHBOARD

### KPI Card
```html
<div class="kpi">
  <div class="kpi-label">NOME DO KPI</div>
  <div class="kpi-value">00.0M</div>
  <div class="kpi-delta up">▲ 00.0% descrição</div>
  <!-- classes: up = verde | dn = vermelho -->
</div>
```

### Gráfico de barras (CSS puro)
- Barras criadas dinamicamente por JS
- Array `barData`: `{ label, pct (0–100), cls ('bar-purple'|'bar-pink'|'bar-blue') }`
- Animação: `barGrow` com `cubic-bezier(.22,1,.36,1)`, delay escalonado por índice

### Gráfico de linha (SVG inline)
- Array `lineData`: valores numéricos
- Array `months`: labels do eixo X
- ViewBox: `"-5 -15 310 145"` — margem negativa para labels não serem cortados
- Área preenchida com gradiente `#aa44ff → transparent`

### Tabela
- Font-size: `11px`
- Header: `rgba(255,255,255,0.3)`, uppercase, `letter-spacing: 1.5px`
- Linha hover: `background: rgba(170,68,255,0.06)`
- Badges: `.badge-green` / `.badge-yellow` / `.badge-red`

---

## 🗂️ ARQUIVOS DO PROJETO

| Arquivo | Descrição |
|---|---|
| `ilovepowerbi_full.html` | HTML completo das 3 seções |
| `TEMPLATE_GUIDE.md` | Este guia (identidade visual + instruções para IA) |
| `MEASURES.dax` | Medidas DAX para integração com Power BI |

---

## 🔗 INTEGRAÇÃO COM POWER BI

O HTML pode receber dados do Power BI de 3 formas:

### Opção 1 — HTML Content Visual (recomendado)
Cole o HTML no visual e use uma medida DAX para injetar dados via JSON:
```dax
HTML Payload = 
"<script>window.PBI_DATA=" & 
  "{""mrr"":" & [MRR] & 
  ",""usuarios"":" & [Usuarios Ativos] & 
  "}</script>"
```
O JS do HTML lê `window.PBI_DATA` e popula os KPIs.

### Opção 2 — URL Parameters
O visual chama o HTML com query string:
```
https://seu-site.com/dashboard.html?mrr=94.7&usuarios=48.2
```
O JS lê via `new URLSearchParams(window.location.search)`.

### Opção 3 — Iframe + postMessage
O Power BI envia mensagem para o iframe via `postMessage`, o HTML escuta com `window.addEventListener('message', ...)`.

---

## ✅ CHECKLIST PARA A IA

Antes de gerar o código, confirme:

- [ ] Quais seções? Capa (banner), corpo do site, dashboard — ou os três?
- [ ] Nome da empresa/produto mock
- [ ] Conteúdo de cada seção preenchido
- [ ] Partículas: com morphing, só esfera, ou sem?
- [ ] Texto do morphing definido
- [ ] No caso de dashboard: KPIs, gráficos e tabela com dados reais ou fictícios?
- [ ] Integração DAX necessária?
