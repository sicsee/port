# projetos-port — roadmap de projetos backend

> plano de enriquecimento do portfolio (Nicolas David — posicionamento **Backend Developer**, estudante de Ciência da Computação @ Newton Paiva).
> tese: cada projeto nasce **deployável** (vercel/vps) com **repo público**, porque a regra do portfolio é *artifacts over adjectives* — todo claim precisa ter um link que abre.

## estado atual (o que o portfolio já mostra)

| projeto | status | link vivo |
|---|---|---|
| La Ascensión (capstone do técnico) | landing B2B funerária + caminho de compra (stripe/cart/admin) | repo público `WebPage-FunerariaB2B` |
| Habit Tracker (php + mysql + telegram bot) | completo, no vps | repo público `habit-tracker` |
| VeloceGarage (exercício do técnico) | landing e-commerce de miniaturas, vanilla js | repo público `WebPage-VeloceGarage` · demo pendente de redeploy |
| Portfolio v2 (este site) | no ar, next.js | live |
| Roblox Aim Trainer / SI e Sociedade | em desenvolvimento (sem repos públicos) | — |

## esteira prioritária

### 🟢 B — URL Shortener + analytics (primeiro passo)

- **prova**: roteamento dinâmico, redirect 301/302, contagem de hits, rate limiting, cache
- **stack**: node.js + typescript (ou php/laravel — ver decisão de linguagem abaixo) + postgres (vercel/neon) + redis/kv para cache
- **entregável**: `POST /shorten`, `GET /:code` (redirect), `/stats/:code` (hits por dia), rate limit por ip
- **esforço**: fim de semana + 2 dias de case study
- **por que primeiro**: escopo fechado, deploy rápido, é o projeto que *todo* avaliador de backend conhece — abre a conversa

### 🟡 A — Payments Lab (projeto assinatura)

- **prova**: transforma o claim que o case La Ascensión já faz ("pagamentos são 80% handling de failure paths") em **produto demonstrável**
- **stack**: node + typescript + stripe (test keys) + webhook receiver público com idempotência
- **entregável**: checkout sandbox, webhook idempotente (retries do stripe inserindo 2× não cria pedido duplo), state machine do pedido (`created → paid → shipped`), página de status de pedidos, endpoint de replay
- **esforço**: 1–2 semanas + case study escrito
- **assinatura**: combina com o case do capstone — o recrutador entende que você *entende* o caminho de falha do dinheiro

### 🟡 C — Reminder Service (evolui o Habit Tracker)

- **prova**: cron, filas, retries/backoff, observabilidade
- **stack**: **php** (mesma infra do Habit Tracker — sinergia direta com o repo que existe) ou node
- **entregável**: bot telegram como consumer; worker agenda lembretes (cron), fila simples persistida em mysql com retry + backoff, log de execuções
- **esforço**: 1 semana
- **bônus**: respira vida nova num repo que já tem deployment real no vps

### 🟢 D — API pública do portfolio (dogfooding)

- **prova**: api versionada, cache http real (`stale-while-revalidate`), rate limit por ip, contrato estável
- **stack**: next.js route handlers (o próprio site)
- **entregável**: `/api/projects` (snapshot dos dados do site), `/api/github/stats` (cache das stats do github que o heatmap usa)
- **esforço**: 2–3 dias
- **detalhe**: o site deixa de chamar o github direto e passa a consumir sua própria api

### 🟡 E — Auth Service (JWT + refresh rotation)

- **prova**: segurança aplicada: access/refresh tokens, rotation, revogação, sessions
- **stack**: node + typescript (fastify) + postgres
- **entregável**: `/auth/login`, `/auth/refresh` (rotation + detecção de reuso), `/auth/logout` (revogação), mini página de teste
- **esforço**: 1 semana
- **diferencial**: raro em júnior — conversa direta com segurança backend

## sequência recomendada

**B → A → C** (D cabe de graça quando o portfolio precisar; E fica na reserva até os três primeiros existirem)

## decisão de linguagem — C/C++ vs PHP vs Node

| via | mercado jr no brasil | seu rodapé atual | veredicto |
|---|---|---|---|
| **C/C++ puro** | poucas vagas web; mais embarcados/jogos/sistemas; curva de entrada longa | estudo novo | **fundamentos, não vitrine** |
| **PHP (Laravel)** | muitas vagas backend jr/estágio | já tem repo php público com deployment real | **rota de estágio** |
| **Node/TS** | muitas vagas | next.js/js já é seu dia a dia | **ponte natural** |

**recomendação**: se o objetivo é primeiro estágio em ~6–12 meses, **php + laravel** é o caminho mais curto: você já tem projeto php real publicado, o mercado brasileiro contrata muito nessa área, e laravel entrega backend estruturado pronto (orm, migrations, filas, auth). **c/c++ é o estudo de fundamentos** (memória, ponteiros, o que o php esconde) — vale velocidade máxima como *paralelo de crescimento*, não como via de primeiro emprego. node/ts entra como ponte porque você já o usa no dia a dia (e os projetos A/B/D do roadmap são nele).

---

*lembrete de tese: cada projeto que entrar na esteira também entra em `carousel-projects.ts` + case study completo — projeto sem caso narrado é só um slide no carrosel.*
