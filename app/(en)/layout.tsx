import { CONTENT } from "@/lib/content";
import { museo } from "@/lib/fonts";
import { buildMetadata, viewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata("en");
export { viewport };

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONTENT.en.htmlLang} className={museo.variable}>
      <body>{children}</body>
    </html>
  );
}
