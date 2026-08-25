"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PATHS, type Dictionary } from "@/lib/content";

export default function Nav({ t }: { t: Dictionary }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = [
    { href: "#estudio", label: t.nav.studio },
    { href: "#servicos", label: t.nav.services },
    { href: "#processo", label: t.nav.process },
    { href: "#portfolio", label: t.nav.works },
    { href: "#socias", label: t.nav.team },
  ];

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção que ocupa o centro da tela.
  useEffect(() => {
    const sections = ["#estudio", "#servicos", "#processo", "#portfolio", "#socias"]
      .map((h) => document.querySelector(h))
      .filter((el): el is Element => Boolean(el));
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

  // Cada idioma é uma rota própria, então o alternador é um link comum:
  // continua funcionando sem JS e pode ser compartilhado.
  const langSwitch = (
    <div className="lang" role="group" aria-label={t.lang === "pt" ? "Idioma" : "Language"}>
      {(["pt", "en"] as const).map((code) => (
        <a
          key={code}
          href={PATHS[code]}
          className="lang__opt"
          data-current={t.lang === code}
          aria-current={t.lang === code ? "true" : undefined}
          hrefLang={code}
        >
          {code.toUpperCase()}
        </a>
      ))}
    </div>
  );

  return (
    <>
      <header className={`nav ${stuck ? "nav--stuck" : ""}`}>
        <div className="nav__inner">
          <a href={PATHS[t.lang]} className="nav__logo" aria-label={`${"AGES Creative Studio"}`}>
            <Image
              src="/logo/ages-mark-cream.png"
              alt="AGES Creative Studio"
              width={608}
              height={226}
              priority
            />
          </a>

          <nav className="nav__links" aria-label={t.lang === "pt" ? "Navegação principal" : "Main navigation"}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__link" data-active={active === l.href}>
                {l.label}
              </a>
            ))}
            {langSwitch}
            <a href="#orcamento" className="btn btn--ghost">
              {t.nav.cta}
            </a>
          </nav>

          <div className="nav__mobile">
            {langSwitch}
            <button
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? (t.lang === "pt" ? "Fechar menu" : "Close menu") : t.lang === "pt" ? "Abrir menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="drawer" id="menu-mobile" data-open={open} aria-hidden={!open}>
        {[...links, { href: "#orcamento", label: t.nav.cta }].map((l, i) => (
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
