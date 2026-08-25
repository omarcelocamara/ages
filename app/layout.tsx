import type { Metadata, Viewport } from "next";
import { Bebas_Neue, MuseoModerno } from "next/font/google";
import { STUDIO } from "@/lib/content";
import "./globals.css";

const museo = MuseoModerno({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-museo",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const description =
  "Estúdio criativo especializado em arquitetura. Renderização, projeto 3D, diagramação de pranchas e detalhamento técnico para arquitetos, escritórios e estudantes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://agesstudio.com.br"),
  title: {
    default: `${STUDIO.name} — Arquitetura, representação visual e suporte de projeto`,
    template: `%s — ${STUDIO.name}`,
  },
  description,
  keywords: [
    "estúdio de arquitetura",
    "renderização arquitetônica",
    "projeto 3D",
    "diagramação de pranchas",
    "detalhamento de mobiliário",
    "projeto de interiores",
    "Porto Alegre",
  ],
  authors: [{ name: STUDIO.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: STUDIO.name,
    title: `${STUDIO.name} — Arquitetura, representação visual e suporte de projeto`,
    description,
    images: [{ url: "/portfolio/ebb-hero.jpg", width: 1200, height: 800, alt: STUDIO.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: STUDIO.name,
    description,
    images: ["/portfolio/ebb-hero.jpg"],
  },
  icons: {
    icon: "/logo/ages-cream-on-burgundy.png",
    apple: "/logo/ages-cream-on-burgundy.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#551515",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${museo.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
