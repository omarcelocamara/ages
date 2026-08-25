# AGES Creative Studio — site institucional

Site de página única para a **AGES Creative Studio**, com apresentação institucional,
serviços, processo, portfólio e formulário de solicitação de orçamento que envia as
respostas por e-mail para `adm.agesstudio@gmail.com`.

Feito em **Next.js (App Router) + TypeScript + CSS puro**. Sem framework de CSS —
todo o sistema visual está em [`app/globals.css`](app/globals.css), baseado na paleta
e na tipografia da marca.

---

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

Acesse http://localhost:3000.

---

## Configurando o envio de e-mail

O formulário envia para o endpoint `POST /api/orcamento`, que despacha o e-mail.
Sem credenciais configuradas o site funciona normalmente, mas o envio responde
`503` e o formulário mostra o e-mail de contato como alternativa.

Copie `.env.example` para `.env.local` e preencha **uma** das opções:

```bash
cp .env.example .env.local
```

### Opção A — Gmail com senha de app (mais simples)

Não exige domínio próprio. Use a própria conta `adm.agesstudio@gmail.com`:

1. Ative a **verificação em 2 etapas** na Conta Google.
2. Gere uma **senha de app** em https://myaccount.google.com/apppasswords.
3. Preencha:

```
GMAIL_USER=adm.agesstudio@gmail.com
GMAIL_APP_PASSWORD=a-senha-de-16-caracteres
```

### Opção B — Resend (recomendado com domínio próprio)

1. Crie a chave em https://resend.com/api-keys.
2. Verifique o domínio da AGES no painel do Resend.
3. Preencha:

```
RESEND_API_KEY=re_xxxxxxxx
RESEND_FROM="AGES Creative Studio <site@seudominio.com.br>"
```

### Opção C — SMTP genérico

Para qualquer outro provedor (Zoho, Brevo, SendGrid, servidor próprio):

```
SMTP_HOST=smtp.provedor.com
SMTP_PORT=587
SMTP_USER=usuario
SMTP_PASSWORD=senha
SMTP_FROM="AGES Creative Studio <site@seudominio.com.br>"
```

> A ordem de precedência é **Resend → SMTP/Gmail**. O destinatário pode ser trocado
> pela variável `CONTACT_TO_EMAIL`.

O e-mail sai formatado com as cores da marca, e o campo **Reply-To** é preenchido
automaticamente quando a pessoa informa um e-mail no campo de contato — basta
responder a mensagem para falar com ela.

---

## Publicando na Vercel

1. Suba o repositório para o GitHub.
2. Na Vercel, **Add New → Project** e importe o repositório.
   O framework é detectado como Next.js — não é preciso mudar nada no build.
3. Em **Settings → Environment Variables**, adicione as variáveis da opção
   escolhida acima (marque *Production*, *Preview* e *Development*).
4. **Deploy**.

> Se as variáveis forem adicionadas depois do primeiro deploy, use
> **Deployments → Redeploy** para que passem a valer.

---

## Estrutura

```
app/
  layout.tsx              metadados, fontes e SEO
  page.tsx                composição da página
  globals.css             sistema visual completo (paleta, tipografia, animações)
  api/orcamento/route.ts  recebe o formulário e envia o e-mail
components/
  Nav.tsx                 navegação fixa, seção ativa e menu mobile
  Reveal.tsx              animações de entrada por IntersectionObserver
  Services.tsx            acordeão dos 4 serviços
  Works.tsx               grade do portfólio + lightbox dos projetos
  QuoteForm.tsx           formulário de orçamento (validação + envio)
lib/
  content.ts              TODO o conteúdo do site (textos, serviços, projetos)
public/
  portfolio/              imagens dos projetos
  socias/                 fotos das sócias
  logo/                   variações da marca
```

### Editando o conteúdo

Praticamente todo o texto do site vive em [`lib/content.ts`](lib/content.ts):
serviços, etapas do processo, projetos do portfólio, listas de "somos a escolha
certa" e as opções do formulário. Para adicionar um projeto novo, inclua um item
em `PROJECTS` e coloque as imagens em `public/portfolio/`.

---

## Notas de implementação

- **Fontes** — `MuseoModerno` (títulos e marca) e `Bebas Neue` (rótulos) vêm do
  Google Fonts via `next/font`. O corpo do texto usa a stack Helvetica, conforme
  o material gráfico da AGES. *Agrandir* não é uma fonte livre; se a AGES tiver a
  licença, basta adicioná-la em `public/fonts/` e trocar `--font-body`.
- **Acessibilidade** — navegação por teclado, `Esc` fecha lightbox e menu, foco
  visível, rótulos associados, mensagens de erro com `role="alert"` e respeito a
  `prefers-reduced-motion`.
- **Anti-spam** — o formulário tem um campo isca (*honeypot*) invisível; envios
  que o preenchem são descartados em silêncio.
- **Imagens** — servidas pelo `next/image` (AVIF/WebP, `srcset` e lazy-load).
