# Guia Completo do Portfólio

## 📋 Índice
1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Como Usar o Painel Admin](#como-usar-o-painel-admin)
3. [Download do CV](#download-do-cv)
4. [Adicionando Projetos](#adicionando-projetos)
5. [Exportar/Importar Dados](#exportarimportar-dados)
6. [Personalizações](#personalizações)
7. [Deploy](#deploy)

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Home
│   ├── globals.css          # Estilos globais
│   ├── about/
│   │   └── page.tsx         # Página About
│   ├── projects/
│   │   └── page.tsx         # Página Projects
│   ├── admin/
│   │   └── page.tsx         # Painel Admin
│   └── api/
│       └── download-cv/
│           └── route.ts     # API para download CV
├── components/
│   ├── Navbar.tsx           # Navegação
│   ├── Header.tsx           # Header com nome
│   ├── Hero.tsx             # Seção hero da home
│   ├── Button.tsx           # Componente Button reutilizável
│   └── ProjectCard.tsx      # Card de projeto
└── lib/
    └── projects.ts          # Dados dos projetos
```

---

## Como Usar o Painel Admin

### Acessar o Painel
1. Abra `http://localhost:3000/admin` no seu navegador
2. Você verá um formulário à esquerda e a lista de projetos à direita

### Interface do Admin

**Lado Esquerdo (Formulário):**
- Campo para título do projeto (obrigatório)
- Descrição (obrigatório)
- URL da imagem
- Tags (separadas por vírgula)
- Link do projeto
- Link do GitHub
- Checkbox para marcar como "Featured"

**Lado Direito (Lista):**
- Todos os seus projetos
- Botões para Editar e Deletar
- Contador de projetos

---

## Download do CV

### Preparar seu CV

1. **Substituir o arquivo de exemplo:**
   - Navegue até `public/cv.txt`
   - Abra em um editor de texto
   - Atualize com suas informações pessoais

2. **Usar um PDF em vez de TXT:**
   - Coloque seu CV em `public/cv.pdf`
   - Atualize o arquivo `src/app/api/download-cv/route.ts`:

```typescript
// Altere de "cv.txt" para "cv.pdf"
const cvPath = join(process.cwd(), "public", "cv.pdf");

// E altere o Content-Type:
"Content-Type": "application/pdf",
"Content-Disposition": 'attachment; filename="Nicolas-Godinho-CV.pdf"',
```

3. **Botão Download CV:**
   - Disponível na página Home
   - Clique para baixar automaticamente

---

## Adicionando Projetos

### Passo a Passo

1. **Acesse o Admin:**
   - Vá para `http://localhost:3000/admin`

2. **Preencha o Formulário:**
   ```
   Título: E-commerce Platform
   Descrição: Full-stack e-commerce built with Next.js and Laravel
   Image URL: /projects/ecommerce.jpg
   Tags: Next.js, Laravel, React, Tailwind
   Project Link: https://example.com
   GitHub Link: https://github.com/sicsee/ecommerce
   Featured: ✓ (marque se for um projeto destaque)
   ```

3. **Clique em "Add":**
   - O projeto aparecerá na lista
   - Se marcado como Featured, aparecerá na seção "Featured" da página Projects

4. **Editar Projeto:**
   - Clique em "Edit" no projeto
   - Altere os dados
   - Clique em "Update"

5. **Deletar Projeto:**
   - Clique em "Delete"
   - Confirme a exclusão

---

## Exportar/Importar Dados

### Backup dos Projetos

**Exportar para JSON:**
1. Vá ao Painel Admin
2. Clique em "Export JSON"
3. Um arquivo `projects.json` será baixado
4. Salve em um local seguro

**Arquivo Exportado:**
```json
[
  {
    "id": "1",
    "title": "E-commerce Platform",
    "description": "Full-stack e-commerce built with Next.js and Laravel",
    "image": "/projects/ecommerce.jpg",
    "tags": ["Next.js", "Laravel", "React", "Tailwind"],
    "link": "https://example.com",
    "github": "https://github.com/sicsee/ecommerce",
    "featured": true
  }
]
```

### Importar Dados

**Restaurar Projetos:**
1. Vá ao Painel Admin
2. Clique em "Import JSON"
3. Selecione o arquivo `projects.json`
4. Os projetos serão carregados automaticamente

---

## Personalizações

### Alterar Cores e Styling

**Arquivo:** `src/app/globals.css`

```css
:root {
  --background: #000000;      /* Cor de fundo */
  --foreground: #ffffff;      /* Cor de texto */
  --accent: #ffffff;          /* Cor de destaque */
  --border: rgba(255, 255, 255, 0.1);        /* Cor de borda */
  --border-hover: rgba(255, 255, 255, 0.2);  /* Cor de borda ao passar mouse */
}
```

### Modificar Componente Button

**Arquivo:** `src/components/Button.tsx`

Altere as variantes para customizar cores:
```typescript
const variants = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "bg-transparent text-white hover:bg-white/10",
};
```

### Adicionar Novas Fontes

**Arquivo:** `src/app/layout.tsx`

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Adicionar Links Sociais

**Arquivo:** `src/components/Header.tsx` ou `src/app/about/page.tsx`

Altere as URLs dos links:
```typescript
<Link href="https://github.com/sicsee" target="_blank">
  GitHub
</Link>
```

---

## Deploy

### Preparar para Deploy

1. **Build do projeto:**
```bash
npm run build
```

2. **Testar build localmente:**
```bash
npm run start
```

### Deploy no Vercel

1. **Push seu código para GitHub:**
```bash
git add .
git commit -m "feat: Complete portfolio setup"
git push origin main
```

2. **Conectar ao Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu repositório
   - Clique em "Deploy"

3. **Configurar variáveis de ambiente (se necessário):**
   - Vá para Settings > Environment Variables
   - Adicione suas variáveis

### Deploy em Outras Plataformas

**Netlify:**
```bash
npm run build
# Deploy com: netlify deploy --prod --dir=.next
```

**AWS Amplify:**
- Conecte seu GitHub
- Defina build command: `npm run build`
- Output directory: `.next`

---

## 🚀 Próximos Passos

1. **Substituir CV:**
   - Coloque seu CV real em `public/cv.pdf` ou `public/cv.txt`

2. **Adicionar Imagens:**
   - Crie pasta `public/projects/`
   - Coloque imagens dos seus projetos lá

3. **Personalizar Conteúdo:**
   - Altere dados em `src/lib/projects.ts`
   - Customize cores em `src/app/globals.css`

4. **Adicionar Projetos:**
   - Use o Painel Admin em `/admin`
   - Ou edite diretamente `src/lib/projects.ts`

5. **Deploy:**
   - Escolha uma plataforma (Vercel, Netlify, etc)
   - Faça push para GitHub
   - Conecte e deploy

---

## 📱 Mobile-First Design

Seu portfólio é totalmente responsivo:

- **Mobile:** Optimizado para telas pequenas
- **Tablet:** Layout adaptado
- **Desktop:** Layout completo com 2 colunas

Teste no seu celular: `http://192.168.1.11:3001` (substitua pelo IP da sua máquina)

---

## 🛠️ Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build de produção localmente
npm run start

# Lint do código
npm run lint
```

---

## ❓ FAQ

**P: Como mudo as cores do site?**
A: Edite `src/app/globals.css` nas variáveis CSS no início do arquivo.

**P: Como adiciono mais páginas?**
A: Crie uma pasta em `src/app/` com o nome da rota e um arquivo `page.tsx` dentro.

**P: Como faço para usar um PDF como CV?**
A: Coloque o arquivo em `public/cv.pdf` e atualize a rota em `src/app/api/download-cv/route.ts`.

**P: Posso mudar o font?**
A: Sim, edite `src/app/layout.tsx` e importe uma fonte diferente do Google Fonts.

**P: Como faço backup dos meus projetos?**
A: Use "Export JSON" no painel admin e salve o arquivo em segurança.

---

## 📞 Suporte

Para problemas ou dúvidas sobre Next.js:
- Documentação: https://nextjs.org/docs
- Comunidade: https://discord.gg/nextjs

