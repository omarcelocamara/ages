import { CONTENT } from "@/lib/content";
import { museo } from "@/lib/fonts";
import { buildMetadata, viewport } from "@/lib/metadata";
import "../globals.css";

export const metadata = buildMetadata("pt");
export { viewport };

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={CONTENT.pt.htmlLang} className={museo.variable}>
      <body>{children}</body>
    </html>
  );
}
