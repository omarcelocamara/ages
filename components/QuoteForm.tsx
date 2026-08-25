"use client";

import { useState } from "react";
import { AJUDAS, PERFIS, STUDIO } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"perfil" | "nome" | "contato" | "ajuda" | "projeto", string>>;

export default function QuoteForm() {
  const [perfil, setPerfil] = useState("");
  const [perfilOutro, setPerfilOutro] = useState("");
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [ajuda, setAjuda] = useState<string[]>([]);
  const [ajudaOutro, setAjudaOutro] = useState("");
  const [projeto, setProjeto] = useState("");
  const [honeypot, setHoneypot] = useState(""); // isca anti-spam, invisível para humanos

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverError, setServerError] = useState("");

  const toggleAjuda = (item: string) =>
    setAjuda((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item],
    );

  function validate(): Errors {
    const e: Errors = {};
    if (!perfil) e.perfil = "Escolha uma das opções.";
    if (perfil === "Outro" && !perfilOutro.trim()) e.perfil = "Conte para nós qual é o seu perfil.";
    if (!nome.trim()) e.nome = "Precisamos do seu nome ou do nome do escritório.";
    if (!contato.trim()) e.contato = "Deixe ao menos uma forma de contato.";
    if (!ajuda.length && !ajudaOutro.trim()) e.ajuda = "Selecione ao menos um serviço.";
    if (projeto.trim().length < 12) e.projeto = "Conte um pouco mais — ajuda muito no orçamento.";
    return e;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setServerError("");

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) {
      document
        .querySelector<HTMLElement>("[data-invalid='true']")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          perfil: perfil === "Outro" ? `Outro: ${perfilOutro.trim()}` : perfil,
          nome: nome.trim(),
          contato: contato.trim(),
          ajuda: ajudaOutro.trim() ? [...ajuda, `Outro: ${ajudaOutro.trim()}`] : ajuda,
          projeto: projeto.trim(),
          website: honeypot,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Não foi possível enviar agora.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Não foi possível enviar agora.");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent">
        <span className="sent__mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22">
            <path
              d="M4 11.5l4.5 4.5L18 6.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="h3">Recebemos o seu pedido.</h3>
        <p className="lead" style={{ maxWidth: "46ch" }}>
          Obrigada! Vamos analisar as informações do seu projeto e retornar com uma proposta
          personalizada pelo contato que você deixou.
        </p>
        <p className="form__note">
          Alguma dúvida no meio do caminho? Escreva para{" "}
          <a className="link-slide" href={`mailto:${STUDIO.email}`}>
            {STUDIO.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {/* Campo isca: bots preenchem, pessoas não veem. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* 1 — Perfil
          Usamos role="group" em vez de fieldset/legend: dentro de um grid,
          o <legend> escapa do fluxo e sobrepõe o conteúdo seguinte. */}
      <div className="field" role="group" aria-labelledby="q1" data-invalid={Boolean(errors.perfil)}>
        <div className="field__q">
          <span className="field__label" id="q1">
            <span className="field__n">01</span>
            Nos conte quem você é!
          </span>
        </div>

        <div className="options options--two" role="radiogroup" aria-label="Seu perfil">
          {[...PERFIS, "Outro"].map((p) => (
            <label key={p} className="opt">
              <input
                type="radio"
                name="perfil"
                value={p}
                checked={perfil === p}
                onChange={() => setPerfil(p)}
              />
              <span className="opt__box opt__box--round" aria-hidden="true" />
              <span>{p}</span>
            </label>
          ))}
        </div>

        {perfil === "Outro" && (
          <input
            className="input"
            placeholder="Conte para nós qual é o seu perfil"
            value={perfilOutro}
            onChange={(e) => setPerfilOutro(e.target.value)}
            aria-label="Outro perfil"
            autoFocus
          />
        )}

        {errors.perfil && <FieldError>{errors.perfil}</FieldError>}
      </div>

      {/* 2 — Nome */}
      <div className="field" data-invalid={Boolean(errors.nome)}>
        <div className="field__q">
          <label className="field__label" htmlFor="nome">
            <span className="field__n">02</span>
            Qual o seu nome?
          </label>
          <p className="field__hint">Nos conte seu nome ou o nome do escritório/empresa.</p>
        </div>
        <input
          id="nome"
          className="input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome ou escritório"
          autoComplete="name"
          aria-invalid={Boolean(errors.nome)}
        />
        {errors.nome && <FieldError>{errors.nome}</FieldError>}
      </div>

      {/* 3 — Contato */}
      <div className="field" data-invalid={Boolean(errors.contato)}>
        <div className="field__q">
          <label className="field__label" htmlFor="contato">
            <span className="field__n">03</span>
            E como podemos retomar o contato com você?
          </label>
          <p className="field__hint">
            Qual a melhor maneira para enviarmos um retorno sobre o orçamento? Telefone, e-mail,
            Instagram… nos envie abaixo!
          </p>
        </div>
        <input
          id="contato"
          className="input"
          value={contato}
          onChange={(e) => setContato(e.target.value)}
          placeholder="E-mail, WhatsApp ou @instagram"
          aria-invalid={Boolean(errors.contato)}
        />
        {errors.contato && <FieldError>{errors.contato}</FieldError>}
      </div>

      {/* 4 — Serviços */}
      <div className="field" role="group" aria-labelledby="q4" data-invalid={Boolean(errors.ajuda)}>
        <div className="field__q">
          <span className="field__label" id="q4">
            <span className="field__n">04</span>
            Como a AGES pode te ajudar?
          </span>
          <p className="field__hint">Pode marcar quantas opções fizerem sentido.</p>
        </div>

        <div className="options options--two">
          {AJUDAS.map((a) => (
            <label key={a} className="opt">
              <input type="checkbox" checked={ajuda.includes(a)} onChange={() => toggleAjuda(a)} />
              <span className="opt__box" aria-hidden="true" />
              <span>{a}</span>
            </label>
          ))}
        </div>

        <input
          className="input"
          placeholder="Outro: descreva o que você precisa"
          value={ajudaOutro}
          onChange={(e) => setAjudaOutro(e.target.value)}
          aria-label="Outro serviço"
        />

        {errors.ajuda && <FieldError>{errors.ajuda}</FieldError>}
      </div>

      {/* 5 — Projeto */}
      <div className="field" data-invalid={Boolean(errors.projeto)}>
        <div className="field__q">
          <label className="field__label" htmlFor="projeto">
            <span className="field__n">05</span>
            Explique um pouco mais sobre o seu projeto
          </label>
          <p className="field__hint">
            Metragem, etapa em que está, prazo desejado, referências — quanto mais contexto, mais
            precisa fica a proposta.
          </p>
        </div>
        <textarea
          id="projeto"
          className="textarea"
          value={projeto}
          onChange={(e) => setProjeto(e.target.value)}
          placeholder="Conte sobre o projeto…"
          aria-invalid={Boolean(errors.projeto)}
        />
        {errors.projeto && <FieldError>{errors.projeto}</FieldError>}
      </div>

      <div className="form__submit">
        <button className="btn btn--light" type="submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Enviando
            </>
          ) : (
            <>
              Enviar solicitação
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </>
          )}
        </button>
        <p className="form__note">
          As informações vão direto para {STUDIO.email} e são usadas apenas para preparar a sua
          proposta.
        </p>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {status === "sending" ? "Enviando solicitação" : ""}
      </p>

      {status === "error" && (
        <div className="error" role="alert" style={{ fontSize: "0.92rem" }}>
          <span>
            {serverError} Se preferir, escreva direto para{" "}
            <a className="link-slide" href={`mailto:${STUDIO.email}`}>
              {STUDIO.email}
            </a>
            .
          </span>
        </div>
      )}
    </form>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="error" role="alert">
      <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
        <circle cx="6.5" cy="6.5" r="5.8" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M6.5 3.4v3.9M6.5 9.2v.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      {children}
    </p>
  );
}
