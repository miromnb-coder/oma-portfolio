import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import "./mobile.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "NODRA — Nettisivuja yrityksille",
  description: "Modernit, nopeat ja myyvät verkkosivut yrityksille.",
  metadataBase: new URL("https://oma-portfolio.vercel.app"),
  openGraph: {
    title: "NODRA — Nettisivuja yrityksille",
    description: "Modernit, nopeat ja myyvät verkkosivut yrityksille.",
    type: "website",
    locale: "fi_FI"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function fixFooterLinks() {
                document.querySelectorAll("p").forEach(function (element) {
                  if (element.textContent && element.textContent.trim() === "© 2024 NODRA Oy. Kaikki oikeudet pidätetään.") {
                    element.textContent = "© 2026 NODRA. Kaikki oikeudet pidätetään.";
                  }
                });

                document.querySelectorAll("span").forEach(function (element) {
                  if (element.textContent && element.textContent.trim() === "Tietosuojaseloste") {
                    var link = document.createElement("a");
                    link.href = "/tietosuojaseloste";
                    link.textContent = element.textContent;
                    link.className = element.className;
                    link.setAttribute("aria-label", "Avaa tietosuojaseloste");
                    element.replaceWith(link);
                  }

                  if (element.textContent && element.textContent.trim() === "Evästeasetukset") {
                    element.remove();
                  }
                });
              }

              fixFooterLinks();
              document.addEventListener("DOMContentLoaded", fixFooterLinks);

              var observer = new MutationObserver(fixFooterLinks);
              observer.observe(document.body, { childList: true, subtree: true });
            `
          }}
        />
      </body>
    </html>
  );
}
