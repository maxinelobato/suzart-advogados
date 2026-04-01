# Suzart Advogados — Especificações do Projeto

## Visão Geral

Landing page profissional para escritório de advocacia, focada em conversão via WhatsApp.
Aplicação SPA (Single Page Application) com animações modernas, responsividade mobile e otimização SEO.

---

## Stack Técnica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | React | 19.0.0 |
| Build Tool | Vite | 8.0.3 |
| Linguagem | TypeScript | 5.8.2 |
| Estilização | Tailwind CSS | 4.2.2 |
| Animações | Motion (Framer) | 12.23.24 |
| Ícones | Lucide React | 0.546.0 |
| Forms | React Hook Form | 7.7.2 |
| IA | Google Generative AI | 1.46.0 |
| Deploy | Google Cloud Run (AI Studio) | — |

---

## Estrutura de Diretórios

```
suzart-advogados/
├── src/
│   ├── components/
│   │   ├── fade-in.tsx               # Componente de animação compartilhado
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── contactbar.tsx
│   │   ├── statssection.tsx
│   │   ├── servicessection.tsx
│   │   ├── differentials.tsx
│   │   ├── aboutsection.tsx
│   │   ├── howitworks.tsx
│   │   ├── testimonials.tsx
│   │   ├── gallerysection.tsx
│   │   ├── prcingsection.tsx
│   │   ├── faqsection.tsx
│   │   ├── locationsection.tsx
│   │   ├── footer.tsx
│   │   └── floatingwhatsApp.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env.local
└── metadata.json
```

---

## Componentes

### Ordem de renderização (`App.tsx`)

1. `<Navbar />`
2. `<Hero />`
3. `<ContactBar />`
4. `<StatsSection />`
5. `<ServicesSection />`
6. `<Differentials />`
7. `<AboutSection />`
8. `<HowItWorks />`
9. `<Testimonials />`
10. `<GallerySection />`
11. `<PricingSection />`
12. `<FaqSection />`
13. `<LocationSection />`
14. `<Footer />`
15. `<FloatingWhatsApp />`

### Detalhamento por componente

#### `navbar.tsx`
- Header com scroll-triggered styling (transparente → sólido)
- Menu hamburger para mobile
- CTA "Falar com Advogado" via WhatsApp
- Âncoras: `#inicio`, `#servicos`, `#sobre`, `#depoimentos`, `#faq`, `#localizacao`

#### `hero.tsx`
- Background com vídeo (mixkit.co)
- Texto animado com Motion
- Badge de avaliação 5 estrelas
- Botão CTA com efeito glow e shimmer
- Parallax no scroll (`useScroll`, `useTransform`)

#### `contactbar.tsx`
- Barra horizontal com localização, telefone e horário de atendimento
- Fundo escuro semitransparente

#### `statssection.tsx`
- 4 métricas: 14+ anos, 477+ clientes, 1.2k+ casos, 5.0 avaliação
- Animação de entrada staggered

#### `servicessection.tsx`
- 6 áreas de atuação: Direito Civil, Trabalhista, Família, Empresarial, Consultoria, Imóveis
- Cards com ícone, título, descrição e link WhatsApp por serviço

#### `differentials.tsx`
- 4 diferenciais competitivos com ícones
- Imagem com badge "14+ anos de experiência"

#### `aboutsection.tsx`
- Texto descritivo do escritório/profissional
- Imagem da equipe
- Credenciais e formação

#### `howitworks.tsx`
- 4 etapas numeradas do processo de atendimento

#### `testimonials.tsx`
- 3 cards de depoimentos de clientes
- Avaliação em estrelas por card

#### `gallerysection.tsx`
- Fotos do escritório em layout masonry
- Efeito hover com zoom
- Imagens via Google Maps (referrerPolicy: no-referrer)

#### `prcingsection.tsx`
- Mensagem de primeira consulta gratuita
- CTA para WhatsApp

#### `faqsection.tsx`
- 6 perguntas frequentes em acordeão
- Animação de expand/collapse

#### `locationsection.tsx`
- Endereço, horários e telefone
- Iframe com Google Maps embutido

#### `footer.tsx`
- Links de navegação
- Dados de contato
- Ícones para Instagram, Facebook e LinkedIn

#### `floatingwhatsApp.tsx`
- Botão fixo no canto inferior direito
- Animação pulse constante (`animate-whatsapp`)

---

## Design System

### Paleta de Cores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#2a464f` | Textos principais, fundos de botões |
| `--color-secondary` | `#404b6c` | Uso secundário |
| `--color-accent` | `#3e2822` | Uso de destaque |
| `--color-gold` | `#D4AC0D` | CTAs, ícones, destaques |

Classes Tailwind customizadas: `text-primary`, `bg-primary`, `text-gold`, `bg-gold`

### Tipografia

| Fonte | Tipo | Uso |
|-------|------|-----|
| Cormorant Garamond | Serif | Títulos e headings |
| Fira Sans | Sans-serif | Corpo de texto |

Fonte importada via Google Fonts no `index.css`.

### Espaçamento

```css
--spacing-section: clamp(5rem, 10vw, 7.5rem)
```

### Animações

- **Scroll fade-in**: `FadeIn` wrapper com Motion (`opacity: 0 → 1`, `y: 20 → 0`)
- **Stagger**: delays incrementais nos filhos
- **Parallax**: hero com `useScroll` + `useTransform`
- **WhatsApp pulse**: `@keyframes pulse-whatsapp` (scale pulsante)
- **Hover**: scale e glow em botões e cards
- **Shimmer**: efeito de brilho animado nos botões CTA

Configuração padrão de easing: `[0.21, 0.47, 0.32, 0.98]`, duração `0.8s`

---

## Navegação

SPA com âncoras — sem roteamento de páginas:

| Âncora | Seção |
|--------|-------|
| `#inicio` | Hero |
| `#servicos` | Serviços |
| `#sobre` | Sobre |
| `#depoimentos` | Depoimentos |
| `#faq` | FAQ |
| `#localizacao` | Localização |

---

## Integrações

### WhatsApp
- Número: `5511950391906`
- Padrão de URL: `https://wa.me/5511950391906?text={mensagem}`
- Presente em: Navbar, Hero, ServicesSection, PricingSection, LocationSection, FloatingWhatsApp

### Google Maps
- Iframe embutido na `LocationSection`

### Mídia Externa
- Vídeo hero: mixkit.co
- Imagens de galeria: Google Maps (referrerPolicy: no-referrer)
- Imagens about/differentials: Unsplash

### Google Generative AI
- Dependência `@google/genai` instalada
- API Key exposta via Vite: `VITE_GEMINI_API_KEY`
- Não integrado ativamente nos componentes atuais

---

## Variáveis de Ambiente

Arquivo: `.env.local`

```env
GEMINI_API_KEY=<chave_da_api>
# APP_URL="MY_APP_URL"   # Injetado pelo Cloud Run
```

O `vite.config.ts` expõe `GEMINI_API_KEY` ao frontend como `import.meta.env.GEMINI_API_KEY`.

---

## Configuração Vite (`vite.config.ts`)

```typescript
plugins: [react(), tailwindcss()]
resolve.alias: { '@': root }
server.hmr: false  // quando DISABLE_HMR=true
```

---

## Configuração TypeScript (`tsconfig.json`)

```json
{
  "target": "ES2022",
  "module": "ESNext",
  "jsx": "react-jsx",
  "moduleResolution": "bundler",
  "paths": { "@/*": ["./*"] },
  "experimentalDecorators": true,
  "skipLibCheck": true
}
```

---

## Scripts (`package.json`)

| Script | Comando |
|--------|---------|
| `dev` | `vite --port=3000 --host=0.0.0.0` |
| `build` | `vite build` |
| `preview` | `vite preview` |
| `clean` | `rm -rf dist` |
| `lint` | `tsc --noEmit` |

---

## SEO

- `robots.txt`: permite todos os crawlers
- `sitemap.xml`: entrada única do domínio
- Meta tags Open Graph: `og:title`, `og:description`, `og:image`
- Twitter Card: configurado
- Meta description com palavras-chave do nicho jurídico

---

## Padrões de Código

### Utilitário `cn()`
Combina `clsx` + `tailwind-merge` para classes condicionais Tailwind:
```typescript
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
const cn = (...inputs) => twMerge(clsx(inputs));
```

### Componente `FadeIn` — `src/components/fade-in.tsx`
Componente isolado e importado por todos os componentes que utilizam animação de entrada.

```typescript
import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  [key: string]: any;
}

export const FadeIn = ({ children, delay = 0, y = 20, x = 0, ...props }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    {...props}
  >
    {children}
  </motion.div>
);
```

Uso nos componentes:
```typescript
import { FadeIn } from './fade-in';
```

Componentes que importam `FadeIn`: `contactbar`, `statssection`, `servicessection`, `differentials`, `aboutsection`, `howitworks`, `testimonials`, `gallerysection`, `prcingsection`, `faqsection`, `locationsection`, `footer`.

### Dados como arrays
FAQ, depoimentos, serviços, stats e diferenciais são definidos como arrays de objetos e renderizados via `.map()`.

---

## Dependências de Produção

```json
{
  "@google/genai": "^1.46.0",
  "clsx": "^2.1.1",
  "dotenv": "^17.2.3",
  "express": "^4.21.2",
  "lucide-react": "^0.546.0",
  "motion": "^12.23.24",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hook-form": "^7.72.0",
  "tailwind-merge": "^3.5.0"
}
```

## Dependências de Desenvolvimento

```json
{
  "@tailwindcss/vite": "^4.2.2",
  "@types/express": "^4.17.21",
  "@types/node": "^22.14.0",
  "@vitejs/plugin-react": "^5.0.4",
  "autoprefixer": "^10.4.21",
  "tailwindcss": "^4.2.2",
  "tsx": "^4.21.0",
  "typescript": "~5.8.2",
  "vite": "^8.0.3"
}
```
