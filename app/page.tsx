import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, FileText, Layers, PenLine, RefreshCw, Settings, Smartphone, Zap } from "lucide-react";
import { ContactForm } from "./ContactForm";

type CardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const services: CardItem[] = [
  {
    title: "Yhden sivun nettisivu",
    text: "Selkeä ja tehokas ratkaisu yritykselle, joka haluaa hyvän ensivaikutelman.",
    icon: FileText,
  },
  {
    title: "Yrityssivusto",
    text: "Useamman sivun kokonaisuus palveluiden ja yrityksen esittelyyn.",
    icon: Layers,
  },
  {
    title: "Sivuston uudistus",
    text: "Päivitä vanha sivuston moderniksi, selkeämmäksi ja toimivammaksi.",
    icon: RefreshCw,
  },
  {
    title: "Ylläpito",
    text: "Apua päivityksiin ja pieniin muutoksiin myös julkaisun jälkeen.",
    icon: Settings,
  },
];

const benefits: CardItem[] = [
  {
    title: "Selkeä prosessi",
    text: "Tiedät koko ajan, mitä tehdään ja mitä tapahtuu seuraavaksi.",
    icon: CheckCircle2,
  },
  {
    title: "Moderni ulkoasu",
    text: "Tyylikäs ja luotettava lopputulos, joka sopii yrityksesi ilmeeseen.",
    icon: PenLine,
  },
  {
    title: "Toimii mobiilissa",
    text: "Sivusto näyttää hyvältä puhelimella, tabletilla ja tietokoneella.",
    icon: Smartphone,
  },
  {
    title: "Nopea toteutus",
    text: "Tehokas eteneminen ilman turhaa säätöä.",
    icon: Zap,
  },
];

const pricing = [
  {
    title: "Startti",
    price: "249 €",
    text: "Yhden sivun nettisivu pienelle yritykselle.",
    items: ["Selkeä ja tehokas", "Nopea toimitus", "Mobiiliystävällinen"],
  },
  {
    title: "Yritys",
    price: "499 €",
    text: "Useamman sivun yrityssivusto.",
    items: ["Räätälöity ulkoasu", "Useita sivuja", "Hakukoneystävällinen"],
    featured: true,
  },
  {
    title: "Uudistus",
    price: "299 €",
    text: "Vanhan sivuston modernisointi.",
    items: ["Uusi ilme ja rakenne", "Parempi käytettävyys", "Mobiilioptimoitu"],
  },
  {
    title: "Ylläpito",
    price: "29 €/kk",
    text: "Päivitykset ja tekninen huolenpito.",
    items: ["Päivitykset", "Varmuuskopiot", "Tuki ja neuvonta"],
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="NODRA etusivulle">
            NODRA
          </a>
          <nav className="desktop-nav" aria-label="Päänavigaatio">
            <a href="#palvelut">Palvelut</a>
            <a href="#miksi">Miksi NODRA</a>
            <a href="#minusta">Minusta</a>
            <a href="#hinnat">Hinnat</a>
            <a href="#yhteys">Yhteys</a>
          </nav>
          <a className="header-cta" href="#yhteys">
            Pyydä tarjous
          </a>
          <button className="menu-button" type="button" aria-label="Avaa valikko">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section id="top" className="intro-section">
        <div className="container intro-grid">
          <div className="intro-content">
            <div className="eyebrow">Selkeät nettisivut yrityksille</div>
            <h1>Nettisivut, jotka tekevät yrityksestäsi uskottavamman</h1>
            <p>
              NODRA suunnittelee ja toteuttaa selkeät, modernit ja mobiiliystävälliset nettisivut yrityksille,
              jotka haluavat paremman ensivaikutelman ja enemmän yhteydenottoja.
            </p>
            <div className="intro-actions">
              <a className="button button-primary" href="#yhteys">
                Pyydä tarjous
              </a>
              <a className="button button-secondary" href="#palvelut">
                Katso palvelut
              </a>
            </div>
            <div className="intro-features" aria-label="NODRAn vahvuudet">
              <div><CheckCircle2 className="icon" /><span>Selkeä prosessi</span></div>
              <div><Smartphone className="icon" /><span>Mobiiliystävällinen</span></div>
              <div><Zap className="icon" /><span>Nopea toteutus</span></div>
            </div>
          </div>
          <div className="intro-visual" aria-hidden="true">
            <Image src="/Esimerkki.PNG" alt="" width={1040} height={768} priority sizes="(min-width: 1024px) 600px, 100vw" />
          </div>
        </div>
      </section>

      <section id="palvelut" className="section-block services-block">
        <div className="container">
          <div className="panel services-panel">
            <h2>Palvelut</h2>
            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <Icon className="icon" />
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                    <span className="arrow" aria-hidden="true">→</span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="miksi" className="section-block why-about-block">
        <div className="container why-about-grid">
          <div className="why-panel">
            <h2>Miksi NODRA?</h2>
            <div className="benefit-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article className="benefit-item" key={benefit.title}>
                    <Icon className="icon" />
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <article id="minusta" className="about-card">
            <p className="section-label">Minusta</p>
            <div className="about-inner">
              <Image src="/Minusta.PNG" alt="NODRAn tekijä profiilikuvassa" width={512} height={512} sizes="132px" />
              <div>
                <h2>Tekijä NODRAn takana</h2>
                <p>
                  Olen NODRAn tekijä ja autan yrityksiä saamaan selkeät, modernit ja toimivat nettisivut ilman
                  monimutkaista prosessia. Tavoitteeni on tehdä sivusto, joka näyttää hyvältä, toimii puhelimella
                  ja tekee yrityksestä luotettavamman asiakkaiden silmissä.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="hinnat" className="section-block pricing-contact-block">
        <div className="container pricing-contact-grid">
          <div className="pricing-area">
            <h2>Hinnat</h2>
            <div className="pricing-grid">
              {pricing.map((item) => (
                <article className={`price-card${item.featured ? " featured" : ""}`} key={item.title}>
                  {item.featured && <div className="featured-label">Suosituin</div>}
                  <h3>{item.title}</h3>
                  <p className="price-prefix">alk.</p>
                  <p className="price">{item.price}</p>
                  <p className="price-text">{item.text}</p>
                  <ul>{item.items.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>

          <section id="yhteys" className="contact-card" aria-labelledby="contact-heading">
            <div>
              <h2 id="contact-heading">Haluatko paremmat nettisivut yrityksellesi?</h2>
              <p>Kerro lyhyesti mitä tarvitset, niin vastaan sinulle ehdotuksella ja alkaen-hinnalla.</p>
            </div>
            <ContactForm />
          </section>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="footer-logo" href="#top">NODRA</a>
            <p>Selkeät nettisivut yrityksille</p>
          </div>
          <nav aria-label="Alatunnisteen navigaatio">
            <a href="#palvelut">Palvelut</a>
            <a href="#miksi">Miksi NODRA</a>
            <a href="#minusta">Minusta</a>
            <a href="#hinnat">Hinnat</a>
            <a href="#yhteys">Yhteys</a>
          </nav>
          <p className="copyright">© NODRA. Kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </main>
  );
}
