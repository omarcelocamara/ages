"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/content";

export default function Services() {
  const [open, setOpen] = useState<string | null>(SERVICES[0].id);

  return (
    <div className="services">
      {SERVICES.map((s, i) => {
        const isOpen = open === s.id;
        return (
          <Reveal key={s.id} delay={i * 0.06}>
            <div className="service" data-open={isOpen}>
              <h3>
                <button
                  className="service__head"
                  aria-expanded={isOpen}
                  aria-controls={`painel-${s.id}`}
                  onClick={() => setOpen(isOpen ? null : s.id)}
                >
                  <span className="service__index">{s.index}</span>
                  <span className="service__title">{s.title}</span>
                  <span className="service__plus" aria-hidden="true" />
                </button>
              </h3>

              <div className="service__panel" id={`painel-${s.id}`} role="region">
                <div>
                  <div className="service__body">
                    <div className="stack">
                      <p className="service__lead">{s.lead}</p>
                      <p className="service__text">{s.body}</p>
                    </div>

                    <div>
                      <span className="mini-label">O que fazemos</span>
                      <ul className="tick-list">
                        {s.does.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="mini-label">Ideal para</span>
                      <ul className="tick-list">
                        {s.idealFor.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
