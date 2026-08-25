"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** `fade` sobe com opacidade, `mask` revela por clip-path, `lines` sobe atrás de uma máscara. */
  variant?: "fade" | "mask" | "lines";
  delay?: number;
  as?: ElementType;
  className?: string;
  /** Fração do elemento visível antes de disparar. */
  amount?: number;
};

const VARIANT_CLASS = {
  fade: "reveal",
  mask: "reveal-mask",
  lines: "line-mask",
} as const;

export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  as: Tag = "div",
  className = "",
  amount = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Sem IntersectionObserver (ou com movimento reduzido), mostra direto.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.shown = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-shown", "true");
          observer.disconnect();
        }
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <Tag
      ref={ref}
      data-shown="false"
      className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
      style={delay ? ({ "--d": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
