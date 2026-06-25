import Image from "next/image";

type IconName = "check" | "phone" | "bolt" | "page" | "stack" | "refresh" | "gear" | "pen";

const services: Array<{
  title: string;
  text: string;
  icon: IconName;
}> = [
  {
    title: "Yhden sivun nettisivu",
    text: "Selkeä ja tehokas ratkaisu yritykselle, joka haluaa hyvän ensivaikutelman.",
    icon: "page",
  },
  {
    title: "Yrityssivusto",
    text: "Useamman sivun kokonaisuus palveluiden ja yrityksen esittelyyn.",
    icon: "stack",
  },
  {
    title: "Sivuston uudistus",
    text: "Päivitä vanha sivuston moderniksi, selkeämmäksi ja toimivammaksi.",
    icon: "refresh",
  },
  {
    title: "Ylläpito",
    text: "Apua päivityksiin ja pieniin muutoksiin myös julkaisun jälkeen.",
    icon: "gear",
  },
];

const benefits: Array<{
  title: string;
  text: string;
  icon: IconName;
}> = [
  {
    title: "Selkeä prosessi",
    text: "Tiedät koko ajan, mitä tehdään ja mitä tapahtuu seuraavaksi.",
    icon: "check",
  },
  {
    title: "Moderni ulkoasu",
    text: "Tyylikäs ja luotettava lopputulos, joka sopii yrityksesi ilmeeseen.",
    icon: "pen",
  },
  {
    title: "Toimii mobiilissa",
    text: "Sivusto näyttää hyvältä puhelimella, tabletilla ja tietokoneella.",
    icon: "phone",
  },
  {
    title: "Nopea toteutus",
    text: "Tehokas eteneminen ilman turhaa säätöä.",
    icon: "bolt",
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

function Icon({ name }: { name: IconName }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {name === "check" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12.5 2.4 2.4L16.5 9" />
        </>
      )}
      {name === "phone" && (
        <>
          <rect x="8" y="3" width="8" height="18" rx="2" />
          <path d="M11 18h2" />
        </>
      )}
      {name === "bolt" && <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" />}
      {name === "page" && (
        <>
          <rect x="6" y="4" width="12" height="16" rx="1.5" />
          <path d="M9 9h6" />
        </>
      )}
      {name === "stack" && (
        <>
          <rect x="5" y="7" width="12" height="12" rx="1.5" />
          <path d="M8 4h11v12" />
        </>
      )}
      {name === "refresh" && (
        <>
          <path d="M4 11a7 7 0 0 1 11.7-5.2L18 8" />
          <path d="M18 4v4h-4" />
          <path d="M20 13a7 7 0 0 1-11.7 5.2L6 16" />
          <path d="M6 20v-4h4" />
        </>
      )}
      {name === "gear" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7.5 7.5 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.8-1L14.4 3h-4.8L9.2 6.1a8 8 0 0 0-1.8 1l-2.4-1-2 3.4L5 11a7.5 7.5 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.8 1l.4 3.1h4.8l.4-3.1a8 8 0 0 0 1.8-1l2.4 1 2-3.4-2-1.5c.1-.3.1-.7.1-1Z" />
        </>
      )}
      {name === "pen" && (
        <>
          <path d="m4 16 11-11 4 4L8 20H4v-4Z" />
          <path d="m13 7 4 4" />
        </>
      )}
    </svg>
  );
}

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

      <section id="top" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">Selkeät nettisivut yrityksille</div>
            <h1>Nettisivut, jotka tekevät yrityksestäsi uskottavamman</h1>
            <p>
              NODRA suunnittelee ja toteuttaa selkeät, modernit ja mobiiliystävälliset nettisivut yrityksille,
              jotka haluavat paremman ensivaikutelman ja enemmän yhteydenottoja.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#yhteys">
                Pyydä tarjous
              </a>
              <a className="button button-secondary" href="#palvelut">
                Katso palvelut
              </a>
            </div>

            <div className="hero-features" aria-label="NODRAn vahvuudet">
              <div>
                <Icon name="check" />
                <span>Selkeä prosessi</span>
              </div>
              <div>
                <Icon name="phone" />
                <span>Mobiiliystävällinen</span>
              </div>
              <div>
                <Icon name="bolt" />
                <span>Nopea toteutus</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <Image
              src="/Esimerkki.PNG"
              alt=""
              width={1040}
              height={768}
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="palvelut" className="section-block services-block">
        <div className="container">
          <div className="panel services-panel">
            <h2>Palvelut</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <Icon name={service.icon} />
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="miksi" className="section-block why-about-block">
        <div className="container why-about-grid">
          <div className="why-panel">
            <h2>Miksi NODRA?</h2>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <article className="benefit-item" key={benefit.title}>
                  <Icon name={benefit.icon} />
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <article id="minusta" className="about-card">
            <p className="section-label">Minusta</p>
            <div className="about-inner">
              <Image
                src="/Minusta.PNG"
                alt="NODRAn tekijä profiilikuvassa"
                width={512}
                height={512}
                sizes="132px"
              />
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
                  <ul>
                    {item.items.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <section id="yhteys" className="contact-card" aria-labelledby="contact-heading">
            <div>
              <h2 id="contact-heading">Haluatko paremmat nettisivut yrityksellesi?</h2>
              <p>Kerro lyhyesti mitä tarvitset, niin vastaan sinulle ehdotuksella ja alkaen-hinnalla.</p>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <label>
                  <span>Nimi</span>
                  <input name="name" type="text" placeholder="Nimi" />
                </label>
                <label>
                  <span>Yritys</span>
                  <input name="company" type="text" placeholder="Yritys" />
                </label>
              </div>
              <label>
                <span>Sähköposti</span>
                <input name="email" type="email" placeholder="Sähköposti" />
              </label>
              <label>
                <span>Mitä tarvitset?</span>
                <textarea name="message" placeholder="Mitä tarvitset?" />
              </label>
              <button type="submit">
                Lähetä <span aria-hidden="true">→</span>
              </button>
            </form>
          </section>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <a className="footer-logo" href="#top">
              NODRA
            </a>
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
