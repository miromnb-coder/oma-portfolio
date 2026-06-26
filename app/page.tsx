import Image from "next/image";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, FileText, Layers, PenLine, RefreshCw, Settings, Smartphone, Zap } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { MobileMenu } from "./MobileMenu";

type CardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
  href?: string;
};

const services: CardItem[] = [
  {
    title: "Yhden sivun nettisivu",
    text: "Selkeä ja tehokas ratkaisu yritykselle, joka haluaa hyvän ensivaikutelman.",
    icon: FileText,
    href: "/palvelut/yhden-sivun-nettisivu",
  },
  {
    title: "Yrityssivusto",
    text: "Useamman sivun kokonaisuus palveluiden ja yrityksen esittelyyn.",
    icon: Layers,
    href: "/palvelut/yrityssivusto",
  },
  {
    title: "Sivuston uudistus",
    text: "Päivitä vanha sivuston moderniksi, selkeämmäksi ja toimivammaksi.",
    icon: RefreshCw,
    href: "/palvelut/sivuston-uudistus",
  },
  {
    title: "Ylläpito",
    text: "Apua päivityksiin ja pieniin muutoksiin myös julkaisun jälkeen.",
    icon: Settings,
    href: "/palvelut/yllapito",
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

const faqItems = [
  {
    question: "Kuinka kauan nettisivujen tekeminen kestää?",
    answer:
      "Aikataulu riippuu sivuston laajuudesta ja siitä, ovatko tekstit ja kuvat valmiina. Yhden sivun nettisivu voidaan yleensä tehdä selvästi nopeammin kuin useamman sivun yrityssivusto.",
  },
  {
    question: "Mitä tarvitsen ennen aloitusta?",
    answer:
      "Tarvitsen yrityksen perustiedot, palvelut, yhteystiedot, mahdolliset kuvat sekä ajatuksen siitä, millaisen tyylin haluat sivulle. Autan myös rakenteen ja tekstien selkeyttämisessä.",
  },
  {
    question: "Toimivatko sivut puhelimella?",
    answer:
      "Kyllä. Sivut suunnitellaan mobiiliystävällisiksi, jotta ne näyttävät hyvältä ja ovat helppokäyttöiset puhelimella, tabletilla ja tietokoneella.",
  },
  {
    question: "Voitko uudistaa vanhat sivuni?",
    answer:
      "Kyllä. Vanhan sivuston ulkoasu, rakenne ja sisältö voidaan päivittää selkeämmäksi, modernimmaksi ja paremmin yhteydenottoihin ohjaavaksi.",
  },
  {
    question: "Sisältyykö ylläpito hintaan?",
    answer:
      "Ylläpito ei automaattisesti sisälly kertahintaan. Sen voi ottaa erikseen kuukausihinnalla, jos haluat apua päivityksiin ja pieniin muutoksiin julkaisun jälkeen.",
  },
  {
    question: "Voinko pyytää muutoksia sivuun myöhemmin?",
    answer:
      "Kyllä. Sivuun voidaan tehdä muutoksia myös julkaisun jälkeen, esimerkiksi tekstien, kuvien, hintojen tai yhteystietojen päivityksiä.",
  },
];

const faqCardStyle: CSSProperties = {
  gridColumn: "1 / -1",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 28,
  alignItems: "start",
  border: "1px solid #e8ded6",
  borderRadius: 16,
  background: "rgba(255, 253, 249, 0.94)",
  boxShadow: "0 18px 46px rgba(23, 25, 29, 0.035)",
  padding: 28,
};

const faqListStyle: CSSProperties = {
  display: "grid",
  gap: 10,
};

const faqItemStyle: CSSProperties = {
  border: "1px solid #e8ded6",
  borderRadius: 12,
  background: "#fffdf9",
  overflow: "hidden",
};

const faqSummaryStyle: CSSProperties = {
  minHeight: 54,
  padding: "16px 18px",
  color: "#17191d",
  fontSize: 15,
  fontWeight: 750,
  cursor: "pointer",
};

const faqAnswerStyle: CSSProperties = {
  margin: 0,
  padding: "0 18px 18px",
  color: "#5f5b57",
  fontSize: 14,
  lineHeight: 1.6,
};

export default function Home() {
  return (
    <main className="site-shell">
      <style>{`
        .showcase-block {
          padding: 0 0 18px;
        }

        .showcase-card {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
          gap: 34px;
          align-items: center;
          border: 1px solid #e8ded6;
          border-radius: 18px;
          background: rgba(255, 253, 249, 0.94);
          box-shadow: 0 18px 46px rgba(23, 25, 29, 0.035);
          padding: 32px;
        }

        .showcase-media {
          overflow: hidden;
          border: 1px solid #e8ded6;
          border-radius: 16px;
          background: #fbf7f2;
          box-shadow: 0 18px 46px rgba(23, 25, 29, 0.08);
        }

        .showcase-media img {
          width: 100%;
          height: auto;
        }

        .showcase-content {
          display: grid;
          gap: 18px;
          align-content: center;
        }

        .showcase-content h2 {
          margin: 0;
          color: #17191d;
          font-size: clamp(32px, 3.4vw, 52px);
          font-weight: 750;
          letter-spacing: -0.045em;
          line-height: 1.04;
        }

        .showcase-badge {
          width: fit-content;
          margin: 0;
          border: 1px solid #e8ded6;
          border-radius: 999px;
          background: #f2e4e1;
          color: #611820;
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 700;
        }

        .showcase-text {
          display: grid;
          gap: 14px;
          color: #343235;
          font-size: 16px;
          line-height: 1.65;
        }

        .showcase-text p {
          margin: 0;
        }

        .showcase-actions {
          display: grid;
          gap: 14px;
          justify-items: start;
          margin-top: 2px;
        }

        .showcase-note {
          margin: 0;
          color: #5f5b57;
          font-size: 13px;
          line-height: 1.5;
        }

        .showcase-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 2px;
        }

        .showcase-tags span {
          display: inline-flex;
          border: 1px solid #e8ded6;
          border-radius: 999px;
          background: #fbf7f2;
          color: #611820;
          padding: 7px 13px;
          font-size: 13px;
          font-weight: 650;
        }

        @media (max-width: 900px) {
          .showcase-card {
            grid-template-columns: 1fr;
            padding: 24px 20px;
          }

          .showcase-content h2 {
            font-size: 30px;
            line-height: 1.08;
            letter-spacing: -0.035em;
          }

          .showcase-actions,
          .showcase-actions .button {
            width: 100%;
          }

          .showcase-actions .button {
            justify-content: center;
          }
        }
      `}</style>

      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="NODRA etusivulle">
            NODRA
          </a>
          <nav className="desktop-nav" aria-label="Päänavigaatio">
            <a href="#palvelut">Palvelut</a>
            <a href="#tyonayte">Työnäyte</a>
            <a href="#miksi">Miksi NODRA</a>
            <a href="#minusta">Minusta</a>
            <a href="#hinnat">Hinnat</a>
            <a href="#ukk">UKK</a>
            <a href="#yhteys">Yhteys</a>
          </nav>
          <a className="header-cta" href="#yhteys">
            Pyydä tarjous
          </a>
          <MobileMenu />
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
                  <a className="service-card" href={service.href} key={service.title}>
                    <Icon className="icon" />
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                    <span className="arrow" aria-hidden="true">→</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="tyonayte" className="section-block showcase-block">
        <div className="container">
          <article className="showcase-card">
            <div className="showcase-media">
              <Image
                src="/kallio-tyonayte.PNG"
                alt="Kallio Rakennus -konseptisivun työnäyte"
                width={1792}
                height={1024}
                sizes="(min-width: 1024px) 760px, 100vw"
              />
            </div>

            <div className="showcase-content">
              <p className="section-label">Työnäyte</p>
              <h2>Esimerkkisivu rakennusyritykselle</h2>
              <p className="showcase-badge">Rakennusalan konseptisivu</p>

              <div className="showcase-text">
                <p>
                  Tein konseptisivun rakennusalan yritykselle näyttämään, millainen selkeä yhden sivun nettisivu voisi olla käytännössä.
                </p>
                <p>
                  Sivulla esitellään palvelut, työnäytteet, hinta-arviot ja yhteydenotto helposti ymmärrettävällä tavalla.
                </p>
                <p>
                  Tyyli on suunniteltu niin, että yritys näyttää luotettavalta ja asiakkaan on helppo ottaa yhteyttä.
                </p>
              </div>

              <div className="showcase-actions">
                <a className="button button-primary" href="https://miromnb-coder.github.io/Kallio/" target="_blank" rel="noopener noreferrer">
                  Katso esimerkkisivu →
                </a>
                <p className="showcase-note">Konseptisivu – ei oikea asiakasprojekti.</p>
              </div>

              <div className="showcase-tags" aria-label="Esimerkkisivun sisältö">
                <span>Palvelut</span>
                <span>Työnäytteet</span>
                <span>Hinta-arviot</span>
                <span>Yhteydenotto</span>
              </div>
            </div>
          </article>
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
                  Olen Miro, NODRAn tekijä ja autan yrityksiä saamaan selkeät, modernit ja toimivat nettisivut ilman
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
            <p className="vat-note">Hinnat alv 0 %. Hintoihin lisätään ALV 25,5 %.</p>
          </div>

          <section id="ukk" className="faq-card" aria-labelledby="faq-heading" style={faqCardStyle}>
            <div className="faq-heading">
              <p className="section-label">UKK</p>
              <h2 id="faq-heading" style={{ margin: "0 0 12px", fontSize: 28, fontWeight: 750, letterSpacing: "-0.03em" }}>
                Usein kysyttyä
              </h2>
              <p style={{ margin: 0, color: "#5f5b57", fontSize: 14, lineHeight: 1.55 }}>
                Vastauksia yleisimpiin kysymyksiin ennen yhteydenottoa.
              </p>
            </div>
            <div className="faq-list" style={faqListStyle}>
              {faqItems.map((item) => (
                <details className="faq-item" key={item.question} style={faqItemStyle}>
                  <summary style={faqSummaryStyle}>{item.question}</summary>
                  <p style={faqAnswerStyle}>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="yhteys" className="contact-card" aria-labelledby="contact-heading" style={{ gridColumn: "1 / -1" }}>
            <div>
              <h2 id="contact-heading">Haluatko paremmat nettisivut yrityksellesi?</h2>
              <p>Kerro lyhyesti mitä tarvitset, niin vastaan sinulle ehdotuksella ja alkaen-hinnalla.</p>
              <p className="contact-email">
                Sähköposti: <a href="mailto:nodra.verkkosivut@gmail.com">nodra.verkkosivut@gmail.com</a>
              </p>
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
            <p><a className="footer-email" href="mailto:nodra.verkkosivut@gmail.com">nodra.verkkosivut@gmail.com</a></p>
          </div>
          <nav aria-label="Alatunnisteen navigaatio">
            <a href="#palvelut">Palvelut</a>
            <a href="#tyonayte">Työnäyte</a>
            <a href="#miksi">Miksi NODRA</a>
            <a href="#minusta">Minusta</a>
            <a href="#hinnat">Hinnat</a>
            <a href="#ukk">UKK</a>
            <a href="#yhteys">Yhteys</a>
            <a href="/tietosuojaseloste">Tietosuoja</a>
          </nav>
          <p className="copyright">© NODRA. Kaikki oikeudet pidätetään.</p>
        </div>
      </footer>
    </main>
  );
}
