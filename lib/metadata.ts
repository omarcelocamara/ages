import type { Metadata, Viewport } from "next";
import { CONTENT, PATHS, STUDIO, type Lang } from "./content";

export const viewport: Viewport = {
  themeColor: "#551515",
  colorScheme: "light",
};

/** Metadados de uma versão do site, com hreflang apontando para a outra. */
export function buildMetadata(lang: Lang): Metadata {
  const t = CONTENT[lang];

  return {
    metadataBase: new URL(STUDIO.site),
    title: { default: t.meta.title, template: `%s | ${STUDIO.name}` },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: STUDIO.name }],
    alternates: {
      canonical: PATHS[lang],
      languages: { "pt-BR": PATHS.pt, en: PATHS.en, "x-default": PATHS.pt },
    },
    openGraph: {
      type: "website",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      url: PATHS[lang],
      siteName: STUDIO.name,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: "/portfolio/ebb-hero.jpg", width: 1200, height: 800, alt: STUDIO.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: STUDIO.name,
      description: t.meta.description,
      images: ["/portfolio/ebb-hero.jpg"],
    },
    icons: {
      icon: "/logo/ages-cream-on-burgundy.png",
      apple: "/logo/ages-cream-on-burgundy.png",
    },
  };
}
