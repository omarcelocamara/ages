import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import Works from "@/components/Works";
import QuoteForm from "@/components/QuoteForm";
import { FIT_NO, FIT_YES, PARTNERS, PROCESS, STUDIO } from "@/lib/content";

const MARQUEE = [
  "Renderização de imagens",
  "Produção de vídeos",
  "Projeto 3D",
  "Diagramação de pranchas",
  "Detalhamento de mobiliário",
  "Plantas humanizadas",
  "Levantamento de medições",
  "Projeto de interiores",
  "Moodboards",
  "Projeto executivo",
];

export default function Home() {
  return (
    <>
      <Nav />

      <main id="topo">
        {/* ═══ Hero ═══════════════════════════════════════════════════ */}
        <section className="hero grain">
          <div className="hero__bg" aria-hidden="true" />
          <div className="hero__grid" aria-hidden="true" />

          <div className="hero__inner">
            <Reveal variant="lines" as="div" delay={0.15}>
              <span className="eyebrow">Estúdio criativo de arquitetura — {STUDIO.city}</span>
            </Reveal>

            <h1 className="hero__wordmark">
              <Reveal variant="lines" as="span" delay={0.25}>
                <span>Ideias que</span>
              </Reveal>
              <Reveal variant="lines" as="span" delay={0.36}>
                <span>
                  se tornam <em>projeto.</em>
                </span>
              </Reveal>
            </h1>

            <div className="hero__meta">
              <Reveal delay={0.55}>
                <p className="hero__statement">
                  Somos o <strong>braço extra</strong> que arquitetos, escritórios e estudantes
                  procuram para transformar projetos e ideias em apresentações impecáveis.
                </p>
              </Reveal>

              <Reveal delay={0.65}>
                <div className="stack">
                  <div className="hero__actions">
                    <a href="#orcamento" className="btn btn--light">
                      Solicitar orçamento
                      <span className="btn__arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                    <a href="#portfolio" className="btn btn--ghost">
                      Ver portfólio
                    </a>
                  </div>
                  <span className="hero__scroll">
                    <i aria-hidden="true" /> Role para conhecer
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
                {MARQUEE.map((item) => (
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
                  <span className="eyebrow">Olá.</span>
                </Reveal>

                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ margin: "1.5rem 0 2rem", maxWidth: "16ch" }}>
                    Mais do que um serviço, um estúdio.
                  </h2>
                </Reveal>

                <div className="about__copy">
                  <Reveal delay={0.14}>
                    <p className="lead">
                      A <strong>AGES Creative Studio</strong> é um estúdio de arquitetura e design
                      dedicado a transformar ideias em espaços bem resolvidos, funcionais e
                      visualmente marcantes.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="muted">
                      Damos vida às suas ideias — seja na renderização de imagens, criação de vídeo,
                      diagramação de pranchas ou detalhamento de mobiliários. Comunicamo-nos com
                      clareza e profissionalismo para entregar imagens que vendem projetos,
                      conectando estética e estratégia visual para arquitetos e escritórios.
                    </p>
                  </Reveal>
                  <Reveal delay={0.26}>
                    <p className="muted">
                      Valorizamos <strong>processos colaborativos</strong>,{" "}
                      <strong>comunicação transparente</strong> e um olhar cuidadoso em cada etapa,
                      garantindo uma experiência fluida e resultados bem executados.
                    </p>
                  </Reveal>
                </div>

                <div className="stats">
                  {[
                    { n: "04", l: "frentes de serviço, do conceito à execução" },
                    { n: "06", l: "etapas de processo transparente em interiores" },
                    { n: "03", l: "sócias arquitetas à frente de cada projeto" },
                  ].map((s, i) => (
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
                    alt="As três sócias da AGES Creative Studio"
                    width={853}
                    height={1280}
                    sizes="(max-width: 950px) 100vw, 40vw"
                  />
                  <figcaption>
                    Amanda, Eduarda e Eduarda — as sócias por trás de cada entrega.
                  </figcaption>
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
                <span className="eyebrow">Nossa crença</span>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="quote__text">
                  Design não se trata apenas de criar imagens, mas de <em>gerar clareza.</em>
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="muted" style={{ maxWidth: "44ch", color: "inherit", opacity: 0.7 }}>
                  Quando as ideias são claramente definidas, comunicadas e sustentadas, melhores
                  decisões são tomadas — e melhores projetos são construídos.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <span className="quote__sig">AGES Creative Studio</span>
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
                  <span className="eyebrow">O nosso serviço</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "13ch" }}>
                    Suporte em design para todas as etapas.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead muted">
                  Oferecemos suporte modular e colaborativo, adaptável às diferentes etapas do
                  projeto e localizações. Um apoio confiável e de alta qualidade — do conceito até a
                  produção.
                </p>
              </Reveal>
            </div>

            <Services />
          </div>
        </section>

        {/* ═══ Processo ═══════════════════════════════════════════════ */}
        <section className="section surface-sand" id="processo">
          <div className="shell">
            <div className="section-head section-head--split">
              <div>
                <Reveal>
                  <span className="eyebrow">Arquitetura de interiores</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "14ch" }}>
                    Como trabalhamos, etapa por etapa.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead muted">
                  Nosso processo é pensado para trazer clareza, segurança e tranquilidade. Na AGES,
                  o cliente sabe exatamente onde está, o que está sendo desenvolvido e para onde o
                  projeto está indo — do primeiro encontro à entrega final.
                </p>
              </Reveal>
            </div>

            <div className="process">
              {PROCESS.map((step, i) => (
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
                  <span className="eyebrow">Portfólio</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "12ch" }}>
                    Projetos selecionados.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead muted">
                  De apartamentos compactos a hotelaria e cabanas na serra. Clique em um projeto
                  para ver imagens, plantas e detalhamentos.
                </p>
              </Reveal>
            </div>

            <Works />
          </div>
        </section>

        {/* ═══ Sócias ═════════════════════════════════════════════════ */}
        <section className="section surface-deep grain" id="socias">
          <div className="shell">
            <div className="section-head section-head--split">
              <div>
                <Reveal>
                  <span className="eyebrow">Quem faz</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ marginTop: "1.4rem", maxWidth: "13ch" }}>
                    Três arquitetas, um estúdio.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.16}>
                <p className="lead" style={{ opacity: 0.75 }}>
                  Cada projeto nasce do encontro entre estratégia, sensibilidade e técnica. Cada
                  escolha é intencional e cada detalhe tem propósito.
                </p>
              </Reveal>
            </div>

            <div className="team">
              {[
                { src: "/socias/socias-riso.jpg", alt: "As sócias da AGES Creative Studio" },
                { src: "/socias/socias-sofa.jpg", alt: "Retrato das sócias da AGES Creative Studio" },
                {
                  src: "/socias/socias-branco-02.jpg",
                  alt: "As sócias da AGES em ensaio institucional",
                },
              ].map((img, i) => (
                <Reveal key={img.src} variant="mask" delay={i * 0.1}>
                  <figure>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={933}
                      height={1400}
                      sizes="(max-width: 780px) 100vw, 33vw"
                    />
                  </figure>
                </Reveal>
              ))}
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
                <span className="eyebrow">Antes de começar</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="h2" style={{ maxWidth: "12ch" }}>
                  Somos a <span className="serif-accent">escolha certa?</span>
                </h2>
              </Reveal>
            </div>

            <div className="fit">
              <Reveal>
                <div className="fit__col">
                  <h3>Somos a escolha certa se:</h3>
                  <ul className="fit__list">
                    {FIT_YES.map((f) => (
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
                  <h3>Não somos a escolha certa se:</h3>
                  <ul className="fit__list">
                    {FIT_NO.map((f) => (
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
            <div className="form-wrap">
              <div className="form-aside">
                <Reveal>
                  <span className="eyebrow">Solicitação de orçamento</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="h2" style={{ maxWidth: "11ch" }}>
                    Pronto para iniciar um novo projeto?
                  </h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="lead" style={{ opacity: 0.78, maxWidth: "38ch" }}>
                    Preencha o formulário ao lado. Ele nos ajuda a entender suas necessidades,
                    prazos e como podemos apoiar você da melhor forma — para enviarmos uma proposta
                    personalizada, pensada exatamente para o seu projeto.
                  </p>
                </Reveal>
                <Reveal delay={0.24}>
                  <hr className="hairline" style={{ margin: "0.5rem 0" }} />
                </Reveal>
                <Reveal delay={0.3}>
                  <div className="stack" style={{ gap: "0.5rem" }}>
                    <span className="mini-label" style={{ marginBottom: 0 }}>
                      Prefere falar direto?
                    </span>
                    <a className="link-slide" href={`mailto:${STUDIO.email}`}>
                      {STUDIO.email}
                    </a>
                    <a
                      className="link-slide"
                      href={STUDIO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{STUDIO.instagram}
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.1}>
                <QuoteForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Rodapé ═══════════════════════════════════════════════════ */}
      <footer className="footer surface-deep">
        <div className="shell">
          <div className="footer__top">
            <Reveal>
              <p className="footer__cta">
                Como podemos contribuir para o sucesso do seu{" "}
                <span className="serif-accent">próximo projeto?</span>
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="footer__contacts">
                <div className="footer__row">
                  <span className="mini-label" style={{ marginBottom: 0 }}>
                    E-mail
                  </span>
                  <a className="link-slide" href={`mailto:${STUDIO.email}`}>
                    {STUDIO.email}
                  </a>
                </div>
                <div className="footer__row">
                  <span className="mini-label" style={{ marginBottom: 0 }}>
                    Instagram
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
                    Base
                  </span>
                  <span>{STUDIO.city}</span>
                </div>
                <a href="#orcamento" className="btn btn--ghost" style={{ justifySelf: "start" }}>
                  Solicitar orçamento
                  <span className="btn__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="footer__bottom">
            <Image
              className="footer__mark"
              src="/logo/ages-mark-cream.png"
              alt="AGES Creative Studio"
              width={608}
              height={226}
            />
            <span>
              © {new Date().getFullYear()} {STUDIO.name}. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
