import Reveal from "./Reveal";
import { QUOTE_FORM, STUDIO, type Dictionary } from "@/lib/content";

export default function QuoteCta({ t }: { t: Dictionary }) {
  return (
    <div className="cta-wrap">
      <div className="cta-copy">
        <Reveal>
          <span className="eyebrow">{t.cta.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2" style={{ maxWidth: "11ch" }}>
            {t.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lead" style={{ opacity: 0.78, maxWidth: "40ch" }}>
            {t.cta.body}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="cta-panel-wrap">
        <div className="cta-panel">
          <ol className="cta-steps">
            {t.cta.steps.map((step, i) => (
              <li key={step}>
                <span className="cta-steps__n">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="cta-actions">
            <a
              className="btn btn--light btn--lg"
              href={QUOTE_FORM[t.lang]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.cta.button}
              <span className="btn__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <p className="cta-note">{t.cta.note}</p>
          </div>

          <hr className="hairline" />

          <div className="cta-direct">
            <span className="mini-label" style={{ marginBottom: 0 }}>
              {t.cta.directLabel}
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
        </div>
      </Reveal>
    </div>
  );
}
