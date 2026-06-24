import { MessageCircle, Monitor, Smartphone } from "lucide-react";
import BrowserMockup from "./BrowserMockup";
import Navbar from "./Navbar";

const highlights = [
  {
    icon: Monitor,
    title: "Moderni design",
  },
  {
    icon: Smartphone,
    title: "Mobiilioptimoitu",
  },
  {
    icon: MessageCircle,
    title: "Selkeä yhteydenotto",
  },
];

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <Navbar />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Verkkosivut yrityksille</p>

          <h1>
            Modernit verkkosivut,
            <span> jotka näyttävät ja myyvät</span>
          </h1>

          <p className="hero-description">
            NODRA suunnittelee ja rakentaa moderneja verkkosivuja yrityksille,
            jotka haluavat erottua, vaikuttaa uskottavasti ja tehdä
            yhteydenotosta helppoa.
          </p>

          <div className="hero-actions" aria-label="Ensisijaiset toiminnot">
            <a className="button button-primary" href="#yhteys">
              Pyydä tarjous
            </a>
            <a className="button button-secondary" href="#projektit">
              Katso projektit
            </a>
          </div>

          <div className="hero-highlights" aria-label="NODRA:n vahvuudet">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="highlight" key={item.title}>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hero-visual">
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}
