# Quick Start - Guia Rápido Visual

## 🎯 5 Passos para Começar

### 1️⃣ Rodar Localmente
```bash
cd seu-projeto
npm install
npm run dev
```
Abra: **http://localhost:3000**

### 2️⃣ Ir para Admin
```
http://localhost:3000/admin
```

### 3️⃣ Adicionar Primeiro Projeto
```
Título:      Meu Primeiro Projeto
Descrição:   Uma descrição breve
Tags:        Next.js, React
GitHub:      https://github.com/sicsee/seu-projeto
Link:        https://seu-projeto.com
Featured:    ✓ (marque)
```
👉 Clique em **"Add"**

### 4️⃣ Atualizar CV
Coloque seu CV em: `public/cv.pdf` ou `public/cv.txt`

### 5️⃣ Deploy
```bash
git push
# Vercel faz deploy automaticamente
```

---

## 🗺️ Mapa de Rotas

```
home
  └─ http://localhost:3000
    ├─ botão "Read More" → /about
    ├─ botão "Download CV" → API download
    └─ navbar → /projects

about
  └─ http://localhost:3000/about
    ├─ Seu nome e bio
    ├─ Tech stack
    └─ Links sociais

projects
  └─ http://localhost:3000/projects
    ├─ Featured (em destaque)
    └─ Other Projects

admin
  └─ http://localhost:3000/admin
    ├─ Formulário (adicionar/editar)
    ├─ Lista de projetos
    └─ Export/Import JSON
```

---

## 📋 Arquivos que Você Vai Precisar Editar

### 1. Seu CV
```
📁 public/
   └─ cv.txt  ← EDITE AQUI
   └─ cv.pdf  ← OU COLOQUE SEU PDF
```

### 2. Seus Dados Pessoais
```
📁 src/components/
   └─ Header.tsx ← GitHub URL
   
📁 src/app/about/
   └─ page.tsx ← Email, LinkedIn, Bio
```

### 3. Suas Cores
```
📁 src/app/
   └─ globals.css ← Altere as cores CSS
```

### 4. Seus Projetos
**Opção A (Recomendado - Mais fácil):**
- Vá para http://localhost:3000/admin
- Preencha formulário
- Clique Add

**Opção B (Manual):**
```typescript
📁 src/lib/
   └─ projects.ts ← Edite array de projetos
```

---

## 🖼️ Adicionar Imagens de Projetos

1. Crie pasta:
```bash
public/projects/
```

2. Coloque suas imagens lá:
```
public/projects/
  ├─ ecommerce.jpg
  ├─ tasks.jpg
  └─ portfolio.jpg
```

3. Use no admin:
```
Image URL: /projects/ecommerce.jpg
```

---

## 🎨 Personalizações Rápidas

### Mudar Cor Primária
```css
/* src/app/globals.css */
:root {
  --background: #000000;    /* preto → mude aqui */
  --foreground: #ffffff;    /* branco → ou aqui */
}
```

### Mudar Font
```typescript
// src/app/layout.tsx
import { SuaFont } from "next/font/google";

const suaFont = SuaFont({
  variable: "--font-sua-font",
  subsets: ["latin"],
});
```

### Mudar Links Sociais
```typescript
// src/components/Header.tsx
<Link href="https://github.com/SEU-USER">  ← MUDE AQUI
```

---

## 📱 Testar no Celular

1. Note seu IP local:
```bash
# Windows (em outro terminal)
ipconfig

# Procure por: IPv4 Address (ex: 192.168.1.11)
```

2. Acesse do celular:
```
http://192.168.1.11:3000
```

---

## 💾 Backup de Projetos

### Exportar
1. Vá a http://localhost:3000/admin
2. Clique **"Export JSON"**
3. Arquivo salvo: `projects.json`

### Restaurar
1. Vá a http://localhost:3000/admin
2. Clique **"Import JSON"**
3. Selecione seu `projects.json`

---

## 🚀 Deploy em 3 Cliques

### Vercel (Recomendado)
1. Push para GitHub:
```bash
git add .
git commit -m "feat: portfolio inicial"
git push
```

2. Vá para [vercel.com](https://vercel.com)

3. Clique "New Project" → Selecione seu repo → Deploy ✅

**Pronto!** Seu site está online.

### Netlify
1. [netlify.com](https://netlify.com)
2. "Add new site" → GitHub
3. Build command: `npm run build`
4. Deploy ✅

---

## ❓ Problemas Comuns

### "Porta 3000 em uso"
```bash
# Kill do processo
npx lsof -i :3000  # Mac/Linux
netstat -ano | findstr :3000  # Windows

# Mude para outra porta
npm run dev -- -p 3001
```

### "CV não faz download"
Verifique:
- [ ] Arquivo existe em `public/cv.txt` ou `public/cv.pdf`
- [ ] Route configurada em `src/app/api/download-cv/route.ts`
- [ ] Content-Type está correto (text/plain ou application/pdf)

### "Projetos não aparecem"
- [ ] Adicionou via admin? (http://localhost:3000/admin)
- [ ] Ou editou `src/lib/projects.ts`?
- [ ] Recarregue a página (F5)

### "Imagens não aparecem"
- [ ] Estão em `public/projects/`?
- [ ] Caminho no admin está correto? `/projects/image.jpg`
- [ ] Recarregue o navegador

---

## 📊 Checklist de Lançamento

### Antes de Deploy
- [ ] CV atualizado
- [ ] 3+ projetos adicionados
- [ ] Cores customizadas
- [ ] Links sociais corretos
- [ ] Imagens otimizadas
- [ ] Testou no celular
- [ ] Build sem erros: `npm run build`

### No Deploy
- [ ] Repository criado no GitHub
- [ ] Conectado a Vercel/Netlify
- [ ] Domain customizado (opcional)
- [ ] HTTPS ativado ✅

### Pós-Deploy
- [ ] Verificar em produção
- [ ] Testar botão CV
- [ ] Testar links
- [ ] Testar mobile
- [ ] Compartilhar com amigos 🎉

---

## 🔗 Links Úteis

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Google Fonts: https://fonts.google.com
- Vercel: https://vercel.com
- Netlify: https://netlify.com

---

## 💡 Dicas Pro

1. **Sempre faça commits:**
   ```bash
   git add .
   git commit -m "desc curta e clara"
   ```

2. **Teste antes de deploy:**
   ```bash
   npm run build
   npm run start
   ```

3. **Use Export/Import JSON:**
   - Faça backup regular dos projetos
   - Fácil transferir dados entre devices

4. **Aproveite o Dark Mode:**
   - Já vem pronto
   - Ótimo para Portfolio moderno

5. **Mobile-First:**
   - Sempre teste no celular
   - 80% dos visitantes usam mobile

---

## 📞 Precisa de Ajuda?

**Erro no Admin?**
→ F12 (DevTools) → Console → veja o erro

**Projeto não aparece?**
→ Verifique em http://localhost:3000/admin

**CV não baixa?**
→ Verifique http://localhost:3000/api/download-cv (deve ter texto)

**Cores estranhas?**
→ Verifique `src/app/globals.css`

---

## 🎉 Pronto!

Seu portfólio está completo e pronto para o mundo.

**Próximos passos:**
1. ✅ Adicione seus projetos
2. ✅ Atualize seu CV
3. ✅ Customize as cores
4. ✅ Faça deploy
5. ✅ Compartilhe! 🚀

---

**Criado com ❤️ usando Next.js + React + Tailwind**

