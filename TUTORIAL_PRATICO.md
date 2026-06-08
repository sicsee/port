# 🎓 Tutorial: Como Usar Seu Portfólio

## 📖 Índice de Tutoriais

1. [Adicionar Seu Primeiro Projeto](#adicionar-seu-primeiro-projeto)
2. [Customizar Cores](#customizar-cores)
3. [Atualizar CV](#atualizar-cv)
4. [Fazer Deploy](#fazer-deploy)
5. [Solucionar Problemas](#solucionar-problemas)

---

## Adicionar Seu Primeiro Projeto

### Via Admin Panel (Recomendado)

#### Passo 1: Abrir Admin
```
1. Abra http://localhost:3000/admin
2. Você verá um formulário à esquerda
```

#### Passo 2: Preencher Formulário

```
Exemplo de um projeto real:

┌─────────────────────────────────────┐
│ ADMIN PANEL - Add New Project       │
├─────────────────────────────────────┤
│                                     │
│ Title *                             │
│ ┌─────────────────────────────────┐ │
│ │ E-commerce Platform             │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Description *                       │
│ ┌─────────────────────────────────┐ │
│ │ Full-stack e-commerce built     │ │
│ │ with Next.js and Laravel        │ │
│ │ Features: cart, payment, admin   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Image URL                           │
│ ┌─────────────────────────────────┐ │
│ │ /projects/ecommerce.jpg         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Tags (comma separated)              │
│ ┌─────────────────────────────────┐ │
│ │ Next.js, Laravel, React, MySQL  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Project Link                        │
│ ┌─────────────────────────────────┐ │
│ │ https://ecommerce-demo.com      │ │
│ └─────────────────────────────────┘ │
│                                     │
│ GitHub Link                         │
│ ┌─────────────────────────────────┐ │
│ │ https://github.com/sicsee/eco   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Featured Project                    │
│ ☑ Marque para destacar              │
│                                     │
│ ┌──────────────┐  ┌──────────────┐ │
│ │    [Add]     │  │   [Cancel]   │ │
│ └──────────────┘  └──────────────┘ │
└─────────────────────────────────────┘
```

#### Passo 3: Clicar em "Add"
```
✓ Projeto adicionado!
- Aparece na lista à direita
- Aparece em /projects automaticamente
```

#### Passo 4: Ver no Site
```
1. Acesse http://localhost:3000/projects
2. Seu projeto aparece na seção "Featured"
3. Clique em "View" ou "GitHub" para testar links
```

### Via Código (Alternativo)

Se preferir editar diretamente:

```typescript
// src/lib/projects.ts

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce built with Next.js and Laravel",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Laravel", "React", "MySQL"],
    link: "https://ecommerce-demo.com",
    github: "https://github.com/sicsee/ecommerce",
    featured: true,  // ← Destacado
  },
  // Adicione mais projetos aqui...
];
```

---

## Customizar Cores

### Exemplo Prático

Digamos que você quer mudar de preto/branco para azul/branco.

#### Passo 1: Abrir CSS
```
Arquivo: src/app/globals.css
```

#### Passo 2: Encontrar Variáveis
```css
/* Procure por: */
:root {
  --background: #000000;
  --foreground: #ffffff;
  --border: rgba(255, 255, 255, 0.1);
}
```

#### Passo 3: Alterar
```css
/* De: */
:root {
  --background: #000000;  /* preto */
  --foreground: #ffffff;  /* branco */
}

/* Para: */
:root {
  --background: #0a0e27;  /* azul escuro */
  --foreground: #ffffff;  /* branco */
}
```

#### Passo 4: Salvar e Ver
```
1. Salve o arquivo (Ctrl+S)
2. Navegador atualiza automaticamente
3. Veja as mudanças em http://localhost:3000
```

### Tabela de Cores Sugeridas

```
Background Escuro:
  ├─ #000000 (preto puro - atual)
  ├─ #0a0e27 (azul escuro)
  ├─ #0f172a (azul muito escuro)
  ├─ #1a1a2e (roxo escuro)
  └─ #111827 (cinza escuro)

Foreground Claro:
  ├─ #ffffff (branco - atual)
  ├─ #f3f4f6 (quase branco)
  ├─ #e5e7eb (cinza claro)
  └─ #d1d5db (cinza médio)

Border (semi-transparente):
  ├─ rgba(255, 255, 255, 0.1) (10% - atual)
  ├─ rgba(255, 255, 255, 0.15) (15%)
  └─ rgba(255, 255, 255, 0.2) (20%)
```

---

## Atualizar CV

### Substituir Arquivo de Exemplo

#### Opção 1: Usar Arquivo TXT (Simples)

```
1. Abra: public/cv.txt
2. Altere todo o conteúdo
3. Salve o arquivo

Exemplo de conteúdo:
```

---

```
NICOLAS GODINHO
Software Development Student | React & Next.js Developer

EXPERIENCE
- Junior Developer @ TechCorp (2024-2026)
  • Built e-commerce platform with React and Node.js
  • Improved performance by 40% with optimization
  
EDUCATION
- Software Development | UniverFX (2022-2026)
- IT Basics Course | CodeAcademy (2021)

SKILLS
Backend: Node.js, Laravel, PHP, MySQL
Frontend: React, Next.js, TypeScript, Tailwind
Tools: Git, Docker, Vercel, Figma

PROJECTS
- E-commerce Platform: next-ecommerce.com
- Task Manager: github.com/sicsee/task-app

CONTACT
Email: nicolas@example.com
GitHub: github.com/sicsee
LinkedIn: linkedin.com/in/nicolasgodinho
```

---

```
4. Download funciona automaticamente!
```

#### Opção 2: Usar PDF (Profissional)

```
1. Crie seu CV em Word/Google Docs
2. Exporte como PDF
3. Coloque em: public/cv.pdf
4. Atualize o arquivo: src/app/api/download-cv/route.ts

   // Altere esta linha:
   const cvPath = join(process.cwd(), "public", "cv.pdf");
   
   // E esta:
   "Content-Type": "application/pdf",
   "Content-Disposition": 'attachment; filename="Nicolas-Godinho-CV.pdf"',
```

#### Teste
```
1. Vá para http://localhost:3000
2. Clique em "Download CV"
3. Arquivo baixa com seu CV atualizado ✓
```

---

## Fazer Deploy

### Deploy em Vercel (Recomendado)

#### Passo 1: Preparar Código
```bash
# Terminal - na pasta do projeto

# Fazer commit
git add .
git commit -m "feat: portfolio final"

# Push para GitHub
git push origin main
```

#### Passo 2: Conectar a Vercel
```
1. Abra https://vercel.com
2. Clique em "New Project"
3. Faça login com GitHub
4. Selecione seu repositório "port"
5. Clique em "Import"
6. Deixe as configurações padrão
7. Clique em "Deploy"

Resultado:
```

```
✓ Deploy iniciado!
✓ Build em progresso...
✓ Deploy completo!

Seu site está em:
→ https://seu-nome-aqui.vercel.app
```

#### Passo 3: Usar Domain Customizado (Opcional)
```
1. Vá para Project Settings
2. Clique em "Domains"
3. Adicione seu domínio (ex: nicolasgodinho.com)
4. Siga as instruções de DNS

Seu site agora está em:
→ https://nicolasgodinho.com ✓
```

### Deploy em Netlify (Alternativa)

```bash
# Terminal

npm run build
```

```
1. Vá para https://netlify.com
2. Clique em "New site from Git"
3. Conecte seu GitHub
4. Selecione repositório "port"
5. Build command: npm run build
6. Publish directory: .next

Seu site:
→ https://seu-site-netlify.netlify.app
```

---

## Solucionar Problemas

### Problema 1: "Porta 3000 em uso"

```
Erro no terminal:
"Port 3000 is already in use"

Solução:
```

```bash
# Mude para outra porta
npm run dev -- -p 3001

# Ou mate o processo anterior
# Windows:
netstat -ano | findstr :3000
taskkill /PID XXXX /F  # substitua XXXX pelo PID
```

---

### Problema 2: "Admin não carrega"

```
Você acessa http://localhost:3000/admin
mas vê erro ou página em branco

Checklist:
☐ Servidor está rodando? (npm run dev)
☐ URL está correta? (exatamente /admin)
☐ Browser cache? (Ctrl+Shift+Delete)
☐ Console aberto? (F12 → Console → há erros?)
```

---

### Problema 3: "CV não faz download"

```
Você clica em "Download CV" mas nada acontece

Checklist:
☐ Arquivo existe? (public/cv.txt ou public/cv.pdf)
☐ Rota configurada? (src/app/api/download-cv/route.ts)
☐ Content-Type correto? (text/plain ou application/pdf)
☐ Nome do arquivo correto?

Teste direto:
http://localhost:3000/api/download-cv
```

---

### Problema 4: "Projetos não aparecem"

```
Você adicionou via admin mas não vê em /projects

Checklist:
☐ Clicou em "Add"? (não "Cancel")
☐ Campos obrigatórios preenchidos?
   - Title (obrigatório)
   - Description (obrigatório)
☐ Recarregou a página? (F5)
☐ Verificou /projects? (não /project)
```

---

### Problema 5: "Imagens não carregam"

```
Projeto adicionado mas imagem aparece cinza

Checklist:
☐ Arquivo existe? (public/projects/image.jpg)
☐ Caminho correto? (/projects/image.jpg)
☐ Formato suportado? (.jpg, .png, .gif)
☐ Recarregou? (Ctrl+F5 força reload)

Exemplo correto:
Image URL: /projects/ecommerce.jpg
Arquivo: public/projects/ecommerce.jpg
```

---

### Problema 6: "Cores não mudaram"

```
Você alterou globals.css mas cores não mudaram

Checklist:
☐ Salvou o arquivo? (Ctrl+S)
☐ Recarregou browser? (Ctrl+F5)
☐ Formatação CSS correta?
   :root {
     --background: #000000;  ← com ponto-e-vírgula
   }
```

---

## 📝 Checklist Completo

### Semana 1
- [ ] Rodou `npm run dev`
- [ ] Acessou home, about, projects
- [ ] Testou admin panel
- [ ] Adicionou 3 projetos
- [ ] Testou download de CV

### Semana 2
- [ ] Substituiu CV real
- [ ] Adicionou imagens de projetos
- [ ] Customizou cores
- [ ] Atualizou links sociais
- [ ] Testou no celular

### Semana 3
- [ ] Fez build de produção
- [ ] Deployou em Vercel/Netlify
- [ ] Testou site ao vivo
- [ ] Compartilhou link
- [ ] Recebeu feedback

---

## 🎯 Próximos Passos Avançados

Depois de familiarizado com o básico:

1. **Adicionar Database:**
   - Trocar `src/lib/projects.ts` por PostgreSQL
   - Adicionar autenticação no admin

2. **Melhorias UI:**
   - Adicionar search de projetos
   - Filtro por tags
   - Modo claro/escuro toggle

3. **Mais Pages:**
   - Blog para artigos
   - Página de contato
   - Testimoniais

4. **Analytics:**
   - Google Analytics
   - Vercel Analytics
   - Rastreamento de cliques

---

## 💬 Exemplos de Conteúdo

### Bio Example
```
"Sou desenvolvedor full-stack apaixonado por criar 
aplicações web modernas. Especializado em React, 
Next.js e Laravel. Amo resolver problemas complexos 
e aprender novas tecnologias."
```

### Descrição de Projeto Example
```
"Plataforma de e-commerce completa com carrinho de 
compras, processamento de pagamento e painel admin. 
Desenvolvido com Next.js no frontend e Laravel no 
backend. Aumentou vendas em 120% no primeiro mês."
```

---

## 🎉 Você Está Pronto!

Agora você sabe como:
- ✅ Adicionar projetos
- ✅ Customizar design
- ✅ Atualizar CV
- ✅ Fazer deploy
- ✅ Resolver problemas

**Mãos à obra!** 🚀

