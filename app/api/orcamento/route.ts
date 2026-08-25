import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TO = process.env.CONTACT_TO_EMAIL || "adm.agesstudio@gmail.com";

type Payload = {
  perfil?: string;
  nome?: string;
  contato?: string;
  ajuda?: string[];
  projeto?: string;
  website?: string;
};

/** Escapa entidades HTML para que nada digitado no formulário vire markup no e-mail. */
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Remove CR/LF para impedir injeção de cabeçalhos no assunto/reply-to. */
function oneLine(value: string, max = 180): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, max);
}

function buildEmail(data: Required<Omit<Payload, "website">>) {
  const { perfil, nome, contato, ajuda, projeto } = data;

  const rows: [string, string][] = [
    ["01 — Quem é", perfil],
    ["02 — Nome / escritório", nome],
    ["03 — Melhor contato", contato],
    ["04 — Como a AGES pode ajudar", ajuda.join("\n")],
    ["05 — Sobre o projeto", projeto],
  ];

  const text = rows.map(([k, v]) => `${k}\n${v}`).join("\n\n");

  const html = `<!doctype html><html lang="pt-BR"><body style="margin:0;padding:32px 16px;background:#f6f2e7;font-family:Helvetica,Arial,sans-serif;color:#2a1210">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #ded6c0">
    <tr><td style="background:#551515;padding:26px 30px">
      <p style="margin:0;font-size:11px;letter-spacing:.32em;text-transform:uppercase;color:#ece6d3;opacity:.72">AGES Creative Studio</p>
      <h1 style="margin:8px 0 0;font-size:22px;font-weight:400;color:#ece6d3">Nova solicitação de orçamento</h1>
    </td></tr>
    <tr><td style="padding:12px 30px 30px">
      ${rows
        .map(
          ([label, value]) => `<div style="padding:18px 0;border-bottom:1px solid #ece6d3">
        <p style="margin:0 0 6px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#7f7c6d">${esc(label)}</p>
        <p style="margin:0;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(value)}</p>
      </div>`,
        )
        .join("")}
      <p style="margin:22px 0 0;font-size:12px;color:#7f7c6d">Enviado pelo formulário do site — ${esc(
        new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      )}</p>
    </td></tr>
  </table>
</body></html>`;

  return { text, html };
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Isca anti-spam preenchida => descarta silenciosamente.
  if (body.website) return NextResponse.json({ ok: true });

  const perfil = oneLine(String(body.perfil ?? ""));
  const nome = oneLine(String(body.nome ?? ""), 120);
  const contato = oneLine(String(body.contato ?? ""), 200);
  const ajuda = Array.isArray(body.ajuda) ? body.ajuda.map((a) => oneLine(String(a))) : [];
  const projeto = String(body.projeto ?? "").trim().slice(0, 5000);

  if (!perfil || !nome || !contato || !projeto || !ajuda.length) {
    return NextResponse.json({ error: "Preencha todos os campos obrigatórios." }, { status: 400 });
  }

  const { text, html } = buildEmail({ perfil, nome, contato, ajuda, projeto });
  const subject = `Orçamento — ${nome} (${perfil})`;
  // Se o contato informado for um e-mail, permite responder direto pelo cliente de e-mail.
  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contato) ? contato : undefined;

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM || "AGES Creative Studio <onboarding@resend.dev>",
        to: [TO],
        subject,
        text,
        html,
        ...(replyTo ? { replyTo } : {}),
      });
      if (error) throw new Error(error.message);
      return NextResponse.json({ ok: true });
    }

    // SMTP genérico (SMTP_HOST) ou Gmail via senha de app.
    const smtpHost = process.env.SMTP_HOST;
    const gmailUser = process.env.GMAIL_USER;

    if (smtpHost || (gmailUser && process.env.GMAIL_APP_PASSWORD)) {
      const nodemailer = (await import("nodemailer")).default;
      const port = Number(process.env.SMTP_PORT || 587);
      const user = process.env.SMTP_USER || gmailUser;
      const pass = process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD;

      const transporter = nodemailer.createTransport(
        smtpHost
          ? {
              host: smtpHost,
              port,
              secure: port === 465,
              ...(user && pass ? { auth: { user, pass } } : {}),
            }
          : { service: "gmail", auth: { user: user!, pass: pass! } },
      );

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"AGES Creative Studio" <${user}>`,
        to: TO,
        subject,
        text,
        html,
        ...(replyTo ? { replyTo } : {}),
      });
      return NextResponse.json({ ok: true });
    }

    console.error(
      "[orcamento] Nenhum provedor de e-mail configurado. Defina RESEND_API_KEY ou GMAIL_USER + GMAIL_APP_PASSWORD.",
    );
    return NextResponse.json(
      { error: "O envio ainda não está configurado no servidor." },
      { status: 503 },
    );
  } catch (err) {
    console.error("[orcamento] Falha ao enviar e-mail:", err);
    return NextResponse.json({ error: "Não foi possível enviar agora." }, { status: 502 });
  }
}
