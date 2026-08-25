"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#estudio", label: "Estúdio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#socias", label: "Sócias" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção que ocupa o centro da tela.
  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => Boolean(el),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Trava o scroll do corpo enquanto o menu mobile está aberto.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`nav ${stuck ? "nav--stuck" : ""}`}>
        <div className="nav__inner">
          <a href="#topo" className="nav__logo" aria-label="AGES Creative Studio — início">
            <Image
              src="/logo/ages-mark-cream.png"
              alt="AGES Creative Studio"
              width={608}
              height={226}
              priority
            />
          </a>

          <nav className="nav__links" aria-label="Navegação principal">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav__link"
                data-active={active === l.href}
              >
                {l.label}
              </a>
            ))}
            <a href="#orcamento" className="btn btn--ghost">
              Solicitar orçamento
            </a>
          </nav>

          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className="drawer" id="menu-mobile" data-open={open} aria-hidden={!open}>
        {[...LINKS, { href: "#orcamento", label: "Solicitar orçamento" }].map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ "--i": i } as React.CSSProperties}
            tabIndex={open ? 0 : -1}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
