"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { PROJECTS, type Project } from "@/lib/content";

export default function Works() {
  const [active, setActive] = useState<Project | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", Boolean(active));
    return () => document.body.classList.remove("no-scroll");
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <>
      <div className="works">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} variant="fade" delay={(i % 2) * 0.1} className="work-wrap">
            <button className="work" onClick={() => setActive(p)}>
              <div className="work__frame">
                <Image
                  src={p.cover}
                  alt={`${p.title} — ${p.meta}`}
                  fill
                  sizes="(max-width: 820px) 100vw, 55vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="work__veil" aria-hidden="true" />
                <span className="work__view" aria-hidden="true">
                  Ver
                </span>
              </div>

              <div className="work__foot">
                <div>
                  <span className="work__title">{p.title}</span>
                  <p className="work__meta">
                    {p.meta} — {p.location}
                  </p>
                </div>
                <span className="work__idx">{p.index}</span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <div
        className="lb"
        data-open={Boolean(active)}
        role="dialog"
        aria-modal={Boolean(active)}
        aria-label={active ? `Projeto ${active.title}` : undefined}
        aria-hidden={!active}
      >
        {active && (
          <>
            <div className="lb__bar">
              <div>
                <span className="eyebrow">Projeto {active.index}</span>
                <h3 className="h3" style={{ marginTop: "0.6rem" }}>
                  {active.title}
                </h3>
                <p className="muted" style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
                  {active.meta} — {active.location}
                </p>
              </div>
              <button className="lb__close" onClick={close} aria-label="Fechar projeto">
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M1 1l14 14M15 1L1 15"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            <div className="lb__scroll">
              <div className="lb__intro">
                <p className="lead">{active.body}</p>
                <div className="lb__scope">
                  {active.scope.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lb__grid">
                {active.images.map((img) => (
                  <figure key={img.src} className={img.wide ? "wide" : undefined}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 640px) 100vw, 40vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
