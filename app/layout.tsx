import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

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

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

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
              window.__nodraWeb3FormsAccessKey = ${JSON.stringify(web3FormsAccessKey)};

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

              function getFormValue(form, label) {
                var fields = Array.from(form.querySelectorAll("input, textarea"));
                var field = fields.find(function (item) {
                  var aria = item.getAttribute("aria-label") || "";
                  var placeholder = item.getAttribute("placeholder") || "";
                  var name = item.getAttribute("name") || "";
                  return aria.toLowerCase() === label.toLowerCase() || placeholder.toLowerCase() === label.toLowerCase() || name.toLowerCase() === label.toLowerCase();
                });
                return field && "value" in field ? field.value.trim() : "";
              }

              function setupWeb3Forms() {
                if (window.__nodraWeb3FormsReady) return;
                window.__nodraWeb3FormsReady = true;

                document.addEventListener("submit", async function (event) {
                  var form = event.target;
                  if (!(form instanceof HTMLFormElement)) return;

                  event.preventDefault();
                  event.stopPropagation();
                  if (event.stopImmediatePropagation) event.stopImmediatePropagation();

                  var accessKey = window.__nodraWeb3FormsAccessKey;
                  if (!accessKey) {
                    alert("Lomakkeen lähetysavain puuttuu. Lisää Verceliin ympäristömuuttuja NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.");
                    return;
                  }

                  var name = getFormValue(form, "Nimi");
                  var company = getFormValue(form, "Yritys");
                  var email = getFormValue(form, "Sähköposti");
                  var phone = getFormValue(form, "Puhelin");
                  var message = getFormValue(form, "Viesti");

                  if (!name || !email || !message) {
                    alert("Täytä ainakin nimi, sähköposti ja viesti.");
                    return;
                  }

                  var submitButton = form.querySelector("button[type='submit'], button:not([type])");
                  var originalButtonHtml = submitButton ? submitButton.innerHTML : "";

                  if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.innerHTML = "Lähetetään...";
                  }

                  var data = new FormData();
                  data.append("access_key", accessKey);
                  data.append("subject", "Uusi yhteydenotto NODRA-sivulta");
                  data.append("from_name", "NODRA yhteydenottolomake");
                  data.append("name", name);
                  data.append("company", company);
                  data.append("email", email);
                  data.append("phone", phone);
                  data.append("message", message);

                  try {
                    var response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: data
                    });
                    var result = await response.json();

                    if (result.success) {
                      alert("Kiitos! Viestisi lähetettiin.");
                      form.reset();
                    } else {
                      alert("Viestin lähetys ei onnistunut. Tarkista tiedot ja yritä uudelleen.");
                    }
                  } catch (error) {
                    alert("Viestin lähetys ei onnistunut. Yritä hetken päästä uudelleen.");
                  } finally {
                    if (submitButton) {
                      submitButton.disabled = false;
                      submitButton.innerHTML = originalButtonHtml;
                    }
                  }
                }, true);
              }

              fixFooterLinks();
              setupWeb3Forms();
              document.addEventListener("DOMContentLoaded", function () {
                fixFooterLinks();
                setupWeb3Forms();
              });

              var observer = new MutationObserver(fixFooterLinks);
              observer.observe(document.body, { childList: true, subtree: true });
            `
          }}
        />
      </body>
    </html>
  );
}
