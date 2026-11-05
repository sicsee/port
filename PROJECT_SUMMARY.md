# Portfolio — Nicolas David

> Portfolio pessoal minimalista com animações suaves, construído com Next.js 15, Tailwind CSS v4 e Framer Motion (motion v12).

---

## 🎯 Visão Geral

Portfolio de desenvolvedor full stack focado em **React, Node.js e PostgreSQL**. Design minimalista (dark-first), animações purposeful, performance e acessibilidade como prioridades.

### Stack Principal

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | Next.js 15 (App Router, RSC, Turbopack) |
| **Styling** | Tailwind CSS v4 (CSS-first config), `@theme` tokens |
| **Animações** | Framer Motion (motion v12), CSS animations para scroll reveals |
| **UI Base** | Componentes customizados (padrão shadcn/ui, sem dependência) |
| **Ícones** | Lucide React |
| **Utils** | clsx + tailwind-merge |
| **Fonts** | `Space Grotesk` (display) + `Geist` (UI) via `next/font` |
| **Deploy** | Vercel (preview deploys, analytics, speed insights) |

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata, providers
│   ├── page.tsx                # Home (Hero + Projects preview + Skills + CTA)
│   ├── about/page.tsx          # Sobre (bio, timeline, valores, conquistas)
│   ├── projects/page.tsx       # Grid filterable de todos os projetos
│   ├── contact/page.tsx        # Contato (links + formulário Web3Forms)
│   └── globals.css             # @theme tokens, utilities, keyframes
├── components/
│   ├── ui/
│   │   └── Button.tsx          # Button variants + MagneticButton
│   ├── layout/
│   │   ├── Section.tsx         # Section + Container wrappers semânticos
│   │   ├── Header.tsx          # Nav fixa, theme toggle, mobile sheet
│   │   └── Footer.tsx          # Links, social, back-to-top
│   ├── hero/
│   │   └── Hero.tsx            # Headline word-reveal, CTAs, scroll indicator
│   ├── projects/
│   │   ├── ProjectCard.tsx     # Card com hover reveal, tags, métricas
│   │   └── ProjectGrid.tsx     # Grid stagger + FilterTabs + Project type
│   ├── motion/
│   │   ├── Reveal.tsx          # Reveal, StaggerContainer, StaggerItem (CSS)
│   │   └── MotionComponents.tsx # (legacy, não usado)
│   └── common/                 # (futuro) Tag, LinkIcon, ScrollIndicator
├── lib/
│   ├── utils.ts                # cn(), formatDate, truncate, slugify
│   └── motion.ts               # Variants reutilizáveis (fadeInUp, stagger, magnetic, etc.)
├── content/
│   ├── site.ts                 # Config global (name, links, nav, SEO)
│   └── projects/               # .mdx files por projeto (futuro)
└── styles/                     # (opcional) globals.css já está em app/
```

---

## 🎨 Design System (Tokens)

Definidos em `src/app/globals.css` via `@theme` (Tailwind v4):

### Cores
```css
--color-bg: #0a0a0b;              /* Background principal */
--color-bg-elevated: #131316;     /* Cards, modais */
--color-border: #27272a;          /* Borders sutis */
--color-border-hover: #3f3f46;    /* Borders no hover */
--color-text: #fafafa;            /* Texto principal */
--color-text-muted: #a1a1aa;      /* Texto secundário */
--color-text-subtle: #71717a;     /* Texto terciário */
--color-accent: #f59e0b;          /* Amber 500 - cor de ação */
--color-accent-hover: #fbbf24;    /* Amber 400 */
--color-accent-muted: #fef3c7;    /* Amber 100 */
--color-accent-bg: #1f1a0a;       /* Amber 950/50 para backgrounds de accent */
```

### Tipografia
```css
--font-display: "Space Grotesk", sans-serif;  /* Headlines */
--font-ui: "Geist", sans-serif;               /* UI, body */
--font-mono: "Geist Mono", monospace;         /* Código */
```

### Espaçamento
```css
--spacing-section: clamp(3rem, 8vw, 6rem);    /* Padding vertical de sections */
--spacing-section-sm: clamp(2rem, 5vw, 4rem); /* Sections menores */
```

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;
--radius-full: 9999px;
```

### Sombras & Glow
```css
--shadow-card: 0 4px 24px -8px rgb(0 0 0 / 0.4);
--shadow-card-hover: 0 12px 48px -12px rgb(0 0 0 / 0.5);
--shadow-glow: 0 0 32px -8px rgb(245 158 11 / 0.3);
--shadow-glow-strong: 0 0 48px -4px rgb(245 158 11 / 0.4);
```

### Motion Tokens
```css
--duration-fast: 150ms;
--duration-base: 300ms;
--duration-slow: 500ms;
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Utilities Customizadas
```css
@utility container { /* max-w-7xl, mx-auto, px-responsive */ }
@utility text-balance { text-wrap: balance; }
@utility animate-fade-in { /* keyframes fade-in */ }
@utility animate-slide-up { /* keyframes slide-up */ }
@utility animate-scale-in { /* keyframes scale-in */ }
```

---

## 🧩 Componentes Core

### `Section` / `Container` (`src/components/layout/Section.tsx`)
Wrappers semânticos com variants:
- `Section`: `variant="default|elevated|bordered"`, `container=true|false`
- `Container`: `size="sm|md|lg|xl|full"`

### `Reveal` / `StaggerContainer` / `StaggerItem` (`src/components/motion/Reveal.tsx`)
- **CSS-only** (sem motion) para evitar bugs do SWC Next.js 15
- `Reveal`: `variant="fadeInUp|fadeIn|scaleIn|slideFromLeft|slideFromRight"`, `delay`, `stagger`
- `StaggerContainer`: anima filhos em sequência (`staggerChildren: 0.08s` via `animation-delay`)
- `StaggerItem`: item individual dentro do container

### `Button` / `MagneticButton` (`src/components/ui/Button.tsx`)
- `Button`: `variant="primary|secondary|ghost|outline"`, `size="sm|md|lg"`, `loading`
- `MagneticButton`: segue cursor com spring (usa `motion` só aqui)

### `Header` (`src/components/layout/Header.tsx`)
- Fixa, backdrop-blur no scroll
- Nav links com underline animado (CSS)
- Theme toggle (Sun/Moon)
- Mobile sheet (AnimatePresence)

### `Hero` (`src/components/hero/Hero.tsx`)
- Word-reveal stagger no headline (CSS `animate-slide-up` com delay)
- Subtexto line-reveal
- CTAs primário/secundário
- Scroll indicator animado (CSS `animate-bounce`)
- Background radial sutil animado (motion `scale` loop)

### `ProjectCard` (`src/components/projects/ProjectCard.tsx`)
- Imagem `next/image` (fill, object-cover)
- Hover: scale 1.05 + overlay gradient + ações (GitHub/Demo)
- Tags de stack (limit 5 + "+N")
- Métricas opcionais com ícones
- Botão "Ver detalhes"

### `ProjectGrid` + `FilterTabs` (`src/components/projects/ProjectGrid.tsx`)
- Grid responsivo (1/2/3 colunas) + stagger entrance via `StaggerContainer`
- `FilterTabs`: pills animadas (preparado para filtrar real)

### `Footer` (`src/components/layout/Footer.tsx`)
- Brand + description + social links
- Nav links
- Resources (CV, GitHub)
- Copyright + back-to-top smooth scroll

---

## 📝 Conteúdo & Configuração

### `src/content/site.ts`
```typescript
export const siteConfig = {
  name: "Nicolas David",
  title: "Full Stack Developer",
  description: "Building clean, performant web applications with React, Node.js, and PostgreSQL.",
  url: "https://nicolasdavid.dev",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/sicsee",
    linkedin: "https://linkedin.com/in/nicolasdavid",
    email: "mailto:nicolas@nicolasdavid.dev",
    resume: "/resume.pdf",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Sobre" },
  { href: "/projects", label: "Projetos" },
  { href: "/contact", label: "Contato" },
];
```

### Projetos (atualmente em `page.tsx` e `projects/page.tsx`)
Cada projeto segue o tipo `Project` (definido em `ProjectGrid.tsx`):
```typescript
interface Project {
  slug: string;
  title: string;
  description: string;        // Longa (case study)
  shortDescription: string;   // 1 linha para cards
  image: string;              // /projects/*.jpg
  tags: string[];             // Categorias visuais
  stack: string[];            // Tech stack (chips)
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  role: string;
  metrics?: string[];         // Bullets de resultado
}
```

**Projetos atuais:**
1. **Roblox Aim Trainer** — Trainer estilo Aim Lab/Kovaaks (Luau, Raycasting)
2. **Habit Tracker** — Heatmap + Telegram bot + Dashboard (PHP, MySQL)
3. **SI e Sociedade** — Knowledge base Obsidian (Zettelkasten, Dataview)
4. **VeloceGarage** — Landing page oficina (HTML/CSS/JS)
5. **La Ascensión** — E-commerce marca roupas (React, Node, PostgreSQL, Stripe)
6. **Portfolio v1** — Versão anterior (Next.js 14, Framer Motion)

---

## ⚡ Animações Implementadas

| Animação | Onde | Tipo |
|----------|------|------|
| **Word-reveal stagger** | Hero headline | CSS `animate-slide-up` + delay |
| **Line-reveal** | Hero subtexto, section headers | CSS `animate-fade-in-up` |
| **Stagger grid entrance** | Projects grid, skills | `StaggerContainer` + `animation-delay` |
| **Card hover lift + glow** | ProjectCard | CSS `transform: scale(1.05)` + `box-shadow` |
| **Magnetic button** | CTAs principais | Framer Motion (`whileHover`, `whileTap`) |
| **Nav underline slide** | Header links | CSS `after:transition-width` |
| **Scroll indicator bounce** | Hero | CSS `animate-bounce` |
| **Page background pulse** | Hero bg radial | Motion `scale` loop |

---

## ♿ Acessibilidade

- Semântica HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`)
- `aria-label` em navegação, botões icon-only, filtros
- `role="list"` / `role="listitem"` em grids
- Focus visible em todos os interativos (`focus-visible:ring-2`)
- Contraste AA+ (dark-first, accent amber sobre bg dark)
- Imagens com `alt` descritivos
- Formulário com labels associados, `required`, tipos corretos

---

## 🚀 Scripts & Comandos

```bash
# Desenvolvimento (Turbopack)
npm run dev

# Build produção
npm run build

# Preview build local
npm run start

# Lint (ESLint Next.js)
npm run lint

# Typecheck (tsc --noEmit)
npm run typecheck

# Format (Prettier + plugin tailwindcss)
npm run format

# Preparar husky (roda na instalação)
npm run prepare
```

---

## 🔧 Configuração de Qualidade

### ESLint (`eslint.config.mjs`)
- `eslint-config-next` (core-web-vitals, typescript)
- Regras custom: no-unused-vars (warn), react-hooks exhaustive-deps

### Prettier (`.prettierrc`)
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Husky + lint-staged (`.husky/pre-commit`)
```bash
npx lint-staged
```

---

## 📦 Dependências Principais

```json
"dependencies": {
  "@tailwindcss/typography": "0.5.15",
  "autoprefixer": "^10.6.2",
  "clsx": "2.1.1",
  "lucide-react": "0.462.0",
  "motion": "^12.0.0",
  "next": "15.1.0",
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "tailwind-merge": "2.5.5"
}
```

### DevDependencies
```json
"devDependencies": {
  "@tailwindcss/postcss": "4.0.0-alpha.25",
  "@types/node": "22.10.1",
  "@types/react": "19.0.0",
  "@types/react-dom": "19.0.0",
  "typescript": "5.7.2",
  "tailwindcss": "4.0.0-alpha.25",
  "postcss": "8.4.49",
  "eslint": "9.15.0",
  "eslint-config-next": "15.1.0",
  "prettier": "3.4.1",
  "prettier-plugin-tailwindcss": "0.6.9",
  "husky": "9.1.7",
  "lint-staged": "15.2.11"
}
```

---

## 📋 Checklist de Implementação

### ✅ Feito (Scaffold)
- [x] Package.json + scripts
- [x] TypeScript config (path aliases `@/*`)
- [x] Next.js 15 config (image optimization, package imports)
- [x] Tailwind v4 CSS-first (`globals.css` com `@theme`)
- [x] PostCSS config
- [x] Root layout (fonts, metadata, viewport)
- [x] Design tokens (cores, spacing, radius, shadows, motion)
- [x] Utils (`cn`, `formatDate`, `slugify`)
- [x] Motion variants library
- [x] Site config (`content/site.ts`)
- [x] Section / Container
- [x] Reveal / StaggerContainer / StaggerItem (CSS)
- [x] Button + MagneticButton
- [x] Header (nav, theme toggle, mobile)
- [x] Hero (word-reveal, CTAs, scroll indicator)
- [x] ProjectCard (hover reveal, tags, metrics)
- [x] ProjectGrid + FilterTabs + Project type
- [x] Footer (social, nav, back-to-top)
- [x] Home page (Hero, featured projects, skills, CTA)
- [x] About page (bio, timeline, values, achievements)
- [x] Projects page (grid, filter tabs, all projects)
- [x] Contact page (links cards, Web3Forms form, availability)

### 🔄 Próximos Passos

#### Visual (você faz)
- [ ] Definir paleta final (confirmar amber ou trocar para cyan/emerald/violet)
- [ ] Escolher/criar imagens de projeto (`public/projects/*.jpg`) — 16:9, ~1200px wide
- [ ] Ajustar `globals.css` tokens se quiser outro "feel"
- [ ] Revisar espaçamentos, tipografia, hierarchy visual
- [ ] Criar `og-image.png` (1200x630) e `favicon` set
- [ ] Testar responsivo (320px, 768px, 1024px, 1440px)

#### Conteúdo (eu faço com humanizer depois)
- [ ] Revisar copy de todas as páginas (Hero, About, Projects, Contact)
- [ ] Escrever case studies completos para cada projeto (MDX)
- [ ] Bio curta + longa (2-3 linhas + parágrafo)
- [ ] Skills organizadas por categoria + nível
- [ ] Métricas reais dos projetos (users, performance, revenue, etc.)
- [ ] SEO: titles, descriptions, OG tags por página

#### Técnico (eu faço)
- [ ] Migrar projetos para `content/projects/*.mdx` + loader
- [ ] Implementar filtro real no `FilterTabs` (estado + derive)
- [ ] Adicionar `prefers-reduced-motion` support
- [ ] Vercel Analytics + Speed Insights
- [ ] Lighthouse CI no GitHub Actions
- [ ] Deploy preview + production na Vercel

---

## 🎨 Referências Visuais (Para Decisão)

| Estilo | Referência | Características |
|--------|------------|-----------------|
| **Editorial/Magazine** | Codebucks tutorial, Benjamin Tousley | Reveal scroll, hover color-shift, page transitions |
| **Dark mono + micro** | Anna Froltsova, Desdoigts, Nicolas Desle | Hover reveal, custom cursor, scroll-triggered |
| **Grid assimétrico** | Paul & Henriette, Patrick Johnson | Greyscale→color hover, stagger grid |
| **One-page imersivo** | URFD, Guillaume Colombel | Lenis, parallax, full-screen sections |
| **Type-first/brutalist** | Mark Tantongco, Sang Han | GSAP scroll, tipografia animada, offset shadows |

---

## 📝 Convenções de Código

### Componentes
- `"use client"` apenas quando necessário (interatividade, motion, hooks)
- Server Components por default (pages, layouts, data fetching)
- Props tipadas com `interface` + JSDoc se complexo
- `cn()` para className condicional
- `forwardRef` em componentes base (Button, Input futuros)

### Animações
- Variants em `lib/motion.ts` (reutilizáveis, testáveis)
- CSS animations para scroll reveals (evita bug SWC)
- `motion` apenas para interações (hover, tap, magnetic)
- Tokens CSS para duration/ease

### Estilo
- Mobile-first (Tailwind: `sm:` `md:` `lg:` `xl:`)
- Dark-first (não precisa `dark:` prefix nos tokens)
- Semântico > visual (HTML certo, CSS faz o visual)
- Acessibilidade nativa (não `div` onde `button` serve)

---

## 🔗 Links Úteis

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel Deploy](https://vercel.com/docs)

---

## 👤 Autor

**Nicolas David** — Full Stack Developer
- GitHub: [@sicsee](https://github.com/sicsee)
- LinkedIn: [/in/nicolasdavid](https://linkedin.com/in/nicolasdavid)
- Email: nicolas@nicolasdavid.dev

---

## 📄 Licença

MIT — Use como base para seu próprio portfolio. Créditos apreciados mas não obrigatórios.