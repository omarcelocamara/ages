import Image from "next/image";
import Nav from "./Nav";
import Reveal from "./Reveal";
import Services from "./Services";
import Works from "./Works";
import QuoteCta from "./QuoteCta";
import { CONTENT, PARTNERS, QUOTE_FORM, STUDIO, type Lang } from "@/lib/content";

export default function Site({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];

  return (
    <>
      <Nav t={t} />

      <main id="topo">
        {/* ═══ Hero ═══════════════════════════════════════════════════ */}
        <section className="hero grain">
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />

          <div className="hero__inner">
            <h1 className="hero__wordmark">
              <Reveal variant="lines" as="span" delay={0.25}>
                <span>{t.hero.line1}</span>
              </Reveal>
              <Reveal variant="lines" as="span" delay={0.36}>
                <span>
                  {t.hero.line2}
                  <em>{t.hero.line2Accent}</em>
                </span>
              </Reveal>
            </h1>

            <div className="hero__meta">
              <Reveal delay={0.55}>
                <p className="hero__statement">
                  <strong>{t.hero.statementStrong}</strong>
                  {t.hero.statement}
                </p>
              </Reveal>

              <Reveal delay={0.65}>
                <div className="stack">
                  <div className="hero__actions">
                    <a
                      href={QUOTE_FORM[lang]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--light"
                    >
                      {t.hero.ctaPrimary}
                      <span className="btn__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                    <a href="#portfolio" className="btn btn--ghost">
                      {t.hero.ctaSecondary}
                    </a>
                  </div>
                  <span className="hero__scroll">
                    <i aria-hidden="true" /> {t.hero.scroll}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ Marquee de serviços ════════════════════════════════════ */}
        <div className="surface-deep">
          <div className="marquee" aria-hidden="true">
            {[0, 1].map((copy) => (
              <div className="marquee__track" key={copy}>
                {t.marquee.map((item) => (
                  <span className="marquee__item" key={`${copy}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ═══ Estúdio ════════════════════════════════════════════════ */}
        <section className="section surface-cream" id="estudio">
          <div className="shell">
            <div className="about">
              <div>
                <Reveal>
                  <span className="eyebrow">{t.about.eyebrow}</span>
                </Reveal>

                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ margin: "1.5rem 0 2rem", maxWidth: "16ch" }}>
                    {t.about.title}
                  </h2>
                </Reveal>

                <div className="about__copy">
                  <Reveal delay={0.14}>
                    <p className="lead">
                      <strong>{t.about.p1Strong}</strong>
                      {t.about.p1}
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="muted">{t.about.p2}</p>
                  </Reveal>
                  <Reveal delay={0.26}>
                    <p className="muted">
                      {lang === "pt" ? "Valorizamos " : "We value "}
                      <strong>{t.about.p3StrongA}</strong>,{" "}
                      <strong>{t.about.p3StrongB}</strong> {t.about.p3}
                    </p>
                  </Reveal>
                </div>

                <div className="stats">
                  {t.about.stats.map((s, i) => (
                    <Reveal key={s.n} delay={0.1 + i * 0.08}>
                      <div className="stat">
                        <div className="stat__n">{s.n}</div>
                        <p className="stat__l">{s.l}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <Reveal variant="mask" delay={0.18}>
                <figure className="about__figure">
                  <Image
                    src="/socias/socias-branco-01.jpg"
                    alt={t.about.caption}
                    width={853}
                    height={1280}
                    sizes="(max-width: 950px) 100vw, 40vw"
                  />
                  <figcaption>{t.about.caption}</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ Manifesto ══════════════════════════════════════════════ */}
        <section className="section surface-dark grain">
          <div className="shell">
            <div className="quote">
              <Reveal>
                <span className="eyebrow">{t.manifesto.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="quote__text">
                  {t.manifesto.quote}
                  <em>{t.manifesto.quoteAccent}</em>
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="muted" style={{ maxWidth: "44ch", color: "inherit", opacity: 0.7 }}>
                  {t.manifesto.body}
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <span className="quote__sig">{STUDIO.name}</span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ Serviços ═══════════════════════════════════════════════ */}
        <section className="section surface-cream" id="servicos">
          <div className="shell">
            <div className="section-head section-head--split">
              <div>
                <Reveal>
                  <span className="eyebrow">{t.services.eyebrow}</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "13ch" }}>
                    {t.services.title}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead muted">{t.services.intro}</p>
              </Reveal>
            </div>

            <Services t={t} />
          </div>
        </section>

        {/* ═══ Processo ═══════════════════════════════════════════════ */}
        <section className="section surface-sand" id="processo">
          <div className="shell">
            <div className="section-head section-head--split">
              <div>
                <Reveal>
                  <span className="eyebrow">{t.process.eyebrow}</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "14ch" }}>
                    {t.process.title}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead muted">{t.process.intro}</p>
              </Reveal>
            </div>

            <div className="process">
              {t.process.steps.map((step, i) => (
                <Reveal key={step.n} delay={(i % 3) * 0.08}>
                  <article className="step">
                    <span className="step__n">{step.n}</span>
                    <h3 className="step__t">{step.title}</h3>
                    <p className="step__b">{step.body}</p>
                    <div className="step__items">
                      {step.items.map((it) => (
                        <span className="chip" key={it}>
                          {it}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Portfólio ══════════════════════════════════════════════ */}
        <section className="section surface-cream" id="portfolio">
          <div className="shell">
            <div className="section-head section-head--split">
              <div>
                <Reveal>
                  <span className="eyebrow">{t.works.eyebrow}</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "12ch" }}>
                    {t.works.title}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead muted">{t.works.intro}</p>
              </Reveal>
            </div>

            <Works t={t} />
          </div>
        </section>

        {/* ═══ Sócias ═════════════════════════════════════════════════ */}
        <section className="section surface-deep grain" id="socias">
          <div className="shell">
            <div className="section-head section-head--split">
              <div>
                <Reveal>
                  <span className="eyebrow">{t.team.eyebrow}</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "13ch" }}>
                    {t.team.title}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead" style={{ opacity: 0.75 }}>
                  {t.team.intro}
                </p>
              </Reveal>
            </div>

            <div className="team">
              {["/socias/socias-riso.jpg", "/socias/socias-sofa.jpg", "/socias/socias-branco-02.jpg"].map(
                (src, i) => (
                  <Reveal key={src} variant="mask" delay={i * 0.1}>
                    <figure>
                      <Image
                        src={src}
                        alt={t.about.caption}
                        width={933}
                        height={1400}
                        sizes="(max-width: 780px) 100vw, 33vw"
                      />
                    </figure>
                  </Reveal>
                ),
              )}
            </div>

            <Reveal delay={0.15}>
              <div className="names">
                {PARTNERS.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══ Somos a escolha certa? ═════════════════════════════════ */}
        <section className="section surface-cream">
          <div className="shell">
            <div className="section-head">
              <Reveal>
                <span className="eyebrow">{t.fit.eyebrow}</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="h2" style={{ maxWidth: "12ch" }}>
                  {t.fit.title}
                  <span className="serif-accent">{t.fit.titleAccent}</span>
                </h2>
              </Reveal>
            </div>

            <div className="fit">
              <Reveal>
                <div className="fit__col">
                  <h3>{t.fit.yesTitle}</h3>
                  <ul className="fit__list">
                    {t.fit.yes.map((f) => (
                      <li key={f}>
                        <span className="fit__mark" aria-hidden="true">
                          <svg viewBox="0 0 12 12">
                            <path
                              d="M2.5 6.3l2.4 2.4L9.6 3.9"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="fit__col">
                  <h3>{t.fit.noTitle}</h3>
                  <ul className="fit__list">
                    {t.fit.no.map((f) => (
                      <li key={f}>
                        <span className="fit__mark" aria-hidden="true">
                          <svg viewBox="0 0 12 12">
                            <path
                              d="M3.5 3.5l5 5M8.5 3.5l-5 5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══ Orçamento ══════════════════════════════════════════════ */}
        <section className="section surface-dark grain" id="orcamento">
          <div className="shell">
            <QuoteCta t={t} />
          </div>
        </section>
      </main>

      {/* ═══ Rodapé ═══════════════════════════════════════════════════ */}
      <footer className="footer surface-deep">
        <div className="shell">
          <div className="footer__top">
            <Reveal>
              <p className="footer__cta">
                {t.footer.cta}
                <span className="serif-accent">{t.footer.ctaAccent}</span>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="footer__contacts">
                <div className="footer__row">
                  <span className="mini-label" style={{ marginBottom: 0 }}>
                    {t.footer.email}
                  </span>
                  <a className="link-slide" href={`mailto:${STUDIO.email}`}>
                    {STUDIO.email}
                  </a>
                </div>
                <div className="footer__row">
                  <span className="mini-label" style={{ marginBottom: 0 }}>
                    {t.footer.instagram}
                  </span>
                  <a
                    className="link-slide"
                    href={STUDIO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{STUDIO.instagram}
                  </a>
                </div>
                <div className="footer__row">
                  <span className="mini-label" style={{ marginBottom: 0 }}>
                    {t.footer.base}
                  </span>
                  <span>{t.city}</span>
                </div>
                <a
                  href={QUOTE_FORM[lang]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                  style={{ justifySelf: "start" }}
                >
                  {t.nav.cta}
                  <span className="btn__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="footer__bottom">
            <Image
              className="footer__mark"
              src="/logo/ages-mark-cream.png"
              alt={STUDIO.name}
              width={608}
              height={226}
            />
            <span>
              © {new Date().getFullYear()} {STUDIO.name}. {t.footer.rights}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
