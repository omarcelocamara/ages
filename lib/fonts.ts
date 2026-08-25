import { Bebas_Neue, MuseoModerno } from "next/font/google";

export const museo = MuseoModerno({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-museo",
  display: "swap",
});

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});
