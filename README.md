# AGES Creative Studio — site institucional

Site bilíngue (PT/EN) da **AGES Creative Studio**, com apresentação institucional,
serviços, processo, portfólio e chamada para o formulário de orçamento no Google Forms.

Feito em **Next.js (App Router) + TypeScript + CSS puro**. Sem framework de CSS —
todo o sistema visual está em [`app/globals.css`](app/globals.css), baseado na paleta
e na tipografia da marca.

Publicado em https://agesstudio.com.br.

---

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

- Português → http://localhost:3000
- Inglês → http://localhost:3000/en

Não há variáveis de ambiente: o site é totalmente estático.

---

## Os dois idiomas

Cada idioma é uma **rota real**, não um alternador no cliente. Isso garante URL
própria, indexação separada pelo Google e link compartilhável para cada versão:

| Idioma | URL | Arquivo |
|---|---|---|
| Português | `/` | [`app/(pt)/page.tsx`](app/(pt)/page.tsx) |
| Inglês | `/en` | [`app/(en)/en/page.tsx`](<app/(en)/en/page.tsx>) |

Os dois grupos de rota têm **layouts raiz separados** para que cada versão declare
o seu próprio `<html lang>` (`pt-BR` e `en`) — algo que um único layout não permite.
As tags `hreflang` apontam uma versão para a outra automaticamente.

A página em si é a mesma em ambos: [`components/Site.tsx`](components/Site.tsx)
recebe `lang` e monta tudo a partir do dicionário.

### Editando o conteúdo

**Todo** o texto do site vive em [`lib/content.ts`](lib/content.ts), num dicionário
por idioma (`CONTENT.pt` e `CONTENT.en`) que cobre serviços, etapas do processo,
projetos do portfólio, listas de "somos a escolha certa" e os textos de interface.

O tipo `Dictionary` garante que as duas versões tenham exatamente as mesmas chaves —
se você adicionar um texto em português e esquecer o inglês, o build falha em vez de
publicar uma versão pela metade.

Para adicionar um projeto ao portfólio, inclua um item em `works.items` nos dois
idiomas e coloque as imagens em `public/portfolio/`.

---

## Formulário de orçamento

O site **não processa formulários**. Os botões de orçamento abrem, em nova aba, o
Google Forms correspondente ao idioma. Os dois links ficam em `QUOTE_FORM`, no topo
de [`lib/content.ts`](lib/content.ts):

```ts
export const QUOTE_FORM: Record<Lang, string> = {
  pt: "https://docs.google.com/forms/d/e/1FAIpQLSet.../viewform",
  en: "https://docs.google.com/forms/d/e/1FAIpQLSf0.../viewform",
};
```

Para trocar de formulário, basta editar essas duas URLs. As respostas chegam pelo
próprio Google Forms — nas notificações do formulário ou na planilha vinculada a ele.

> Vale conferir nas configurações de cada formulário se a notificação por e-mail
> para novas respostas está ligada, senão ninguém é avisado quando alguém envia.

---

## Publicando na Vercel

O projeto já está conectado ao repositório: cada push na `main` gera um novo deploy.
Não há variáveis de ambiente para configurar.

Para o domínio, em **Settings → Domains**, com o DNS apontado no registro.br:

| TIPO | NOME | DADOS |
|---|---|---|
| `A` | `agesstudio.com.br` | IP indicado pela Vercel |
| `CNAME` | `www.agesstudio.com.br` | valor indicado pela Vercel |

> Atenção: a Vercel escreve `@` no campo de nome, mas o registro.br interpreta o `@`
> como nome literal e cria um host chamado "@". Use o domínio por extenso.

---

## Estrutura

```
app/
  (pt)/layout.tsx      <html lang="pt-BR"> + metadados PT
  (pt)/page.tsx        rota /
  (en)/layout.tsx      <html lang="en"> + metadados EN
  (en)/en/page.tsx     rota /en
  globals.css          sistema visual completo (paleta, tipografia, animações)
components/
  Site.tsx             a página inteira, parametrizada por idioma
  Nav.tsx              navegação fixa, seção ativa, alternador PT/EN e menu mobile
  Reveal.tsx           animações de entrada por IntersectionObserver
  Services.tsx         acordeão dos 4 serviços
  Works.tsx            grade do portfólio + lightbox dos projetos
  QuoteCta.tsx         bloco que leva ao Google Forms
lib/
  content.ts           TODO o conteúdo, nos dois idiomas
  metadata.ts          metadados e hreflang por idioma
  fonts.ts             MuseoModerno e Bebas Neue via next/font
public/
  portfolio/           imagens dos projetos
  socias/              fotos das sócias
  logo/                variações da marca
```

---

## Notas de implementação

- **Fontes** — `MuseoModerno` (títulos e marca) e `Bebas Neue` (rótulos) vêm do
  Google Fonts via `next/font`. O corpo do texto usa a stack Helvetica, conforme
  o material gráfico da AGES. *Agrandir* não é uma fonte livre; se a AGES tiver a
  licença, basta adicioná-la em `public/fonts/` e trocar `--font-body`.
- **Acessibilidade** — navegação por teclado, `Esc` fecha lightbox e menu, foco
  visível, `aria-current` no idioma ativo e respeito a `prefers-reduced-motion`.
- **Imagens** — servidas pelo `next/image` (AVIF/WebP, `srcset` e lazy-load).
- **Histórico** — o site já teve um formulário próprio com envio por e-mail
  (Resend/SMTP/Gmail). Foi substituído pelo Google Forms; o código continua no
  histórico do Git, caso um dia faça sentido retomar.
