import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Boxes,
  CalendarDays,
  CheckCircle2,
  Clock3,
  EyeOff,
  FileText,
  Gauge,
  Globe,
  Headphones,
  Instagram,
  Layers,
  Linkedin,
  ListChecks,
  MessageCircle,
  Monitor,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { ContactForm } from "./ContactForm";
import { MobileMenu } from "./MobileMenu";
import { MotionEffects } from "./MotionEffects";

type CardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
  href?: string;
};

type PriceItem = {
  title: string;
  price: string;
  subtitle: string;
  text: string;
  icon: LucideIcon;
  items: string[];
  featured?: boolean;
};

const services: CardItem[] = [
  {
    title: "Yhden sivun nettisivu",
    text: "Tiivis ja vaikuttava yhden sivun verkkosivu, joka esittelee yrityksesi ja ohjaa asiakkaat toimintaan.",
    icon: FileText,
    href: "/palvelut/yhden-sivun-nettisivu",
  },
  {
    title: "Yrityssivusto",
    text: "Kokonaisvaltainen verkkosivusto, joka rakentaa luottamusta ja esittelee palvelusi selkeästi.",
    icon: Globe,
    href: "/palvelut/yrityssivusto",
  },
  {
    title: "Sivuston uudistus",
    text: "Päivitetään vanhentunut sivusto vastaamaan nykyajan vaatimuksia sekä hakukoneita että käyttäjiä varten.",
    icon: RefreshCw,
    href: "/palvelut/sivuston-uudistus",
  },
  {
    title: "Ylläpito",
    text: "Huolehdimme sivustosi turvallisuudesta, päivityksistä ja varmuuskopioista, jotta voit keskittyä liiketoimintaasi.",
    icon: ShieldCheck,
    href: "/palvelut/yllapito",
  },
];

const priceItems: PriceItem[] = [
  {
    title: "Startti",
    price: "249 €",
    subtitle: "Yhden sivun nettisivu",
    text: "Kompakti ja uskottava nettisivu, joka esittelee yrityksesi ja vahvistaa luottamusta.",
    icon: FileText,
    items: ["Yhden sivun design", "Responsiivinen toteutus", "Perus-SEO ja yhteydenottolomake"],
  },
  {
    title: "Yritys",
    price: "499 €",
    subtitle: "Laajempi yrityssivusto",
    text: "Monisivuinen, moderni verkkosivusto, joka esittelee palvelusi ja tukee liiketoimintasi kasvua.",
    icon: Layers,
    items: ["1–5 sivua", "Responsiivinen toteutus", "Perus-SEO ja yhteydenottolomake"],
    featured: true,
  },
  {
    title: "Uudistus",
    price: "299 €",
    subtitle: "Sivuston päivitys",
    text: "Päivitä vanhentunut sivustosi moderniksi ja tehokkaaksi ilman, että menetät sisältöäsi.",
    icon: RefreshCw,
    items: ["Moderni ilme ja rakenne", "Responsiivinen toteutus", "Sisällön siirto ja optimointi"],
  },
  {
    title: "Ylläpito",
    price: "29 € / kk",
    subtitle: "Jatkuva tuki",
    text: "Pidämme huolen päivityksistä, varmuuskopioista ja turvallisuudesta – sinä voit keskittyä liiketoimintaasi.",
    icon: ShieldCheck,
    items: ["Päivitykset ja tietoturva", "Varmuuskopiot", "Sähköpostituki"],
  },
];

const pricingBenefits: CardItem[] = [
  { title: "Ei piilokuluja", text: "Selkeä hinnoittelu alusta alkaen.", icon: EyeOff },
  { title: "Nopea toteutus", text: "Sivut valmiina sovitussa aikataulussa.", icon: Clock3 },
  { title: "Mahdollisuus ylläpitoon", text: "Jatkuva tuki ja huoleton käyttö.", icon: RefreshCw },
];

const processRows: CardItem[] = [
  { title: "Selkeä prosessi", text: "Tiedät aina, missä vaiheessa projekti etenee.", icon: CheckCircle2 },
  { title: "Nopea viestintä", text: "Pidetään toteutus sujuvana ja päätökset yksinkertaisina.", icon: MessageCircle },
  { title: "Moderni lopputulos", text: "Sivusto näyttää uskottavalta kaikilla laitteilla.", icon: Monitor },
  { title: "Jatkuva tuki", text: "Apua päivityksiin, ylläpitoon ja jatkokehitykseen.", icon: Headphones },
];

const whyCards: CardItem[] = [
  {
    title: "Suunnittelusta julkaisuun",
    text: "Projektit etenevät vaiheittain ideasta valmiiseen sivustoon ilman turhaa monimutkaisuutta.",
    icon: ListChecks,
  },
  {
    title: "Yrityksesi näköinen",
    text: "Jokainen sivusto suunnitellaan tukemaan juuri sinun palveluitasi, asiakkaitasi ja tavoitteitasi.",
    icon: UserRound,
  },
  {
    title: "Tuloksiin rakennettu",
    text: "Tavoitteena ei ole vain hyvä ulkoasu, vaan myös selkeä rakenne ja enemmän yhteydenottoja.",
    icon: TrendingUp,
  },
];

const workCards: CardItem[] = [
  {
    title: "Selkeä rakenne",
    text: "Looginen sivurakenne ja selkeä navigaatio auttavat käyttäjiä löytämään oleellisen.",
    icon: Boxes,
  },
  {
    title: "Mobiilioptimoitu",
    text: "Sivustot toimivat saumattomasti kaikilla laitteilla – aina ensiluokkaisella käyttökokemuksella.",
    icon: Smartphone,
  },
  {
    title: "Nopea käyttökokemus",
    text: "Optimoitu suorituskyky takaa nopeat latausajat ja parhaan mahdollisen käyttökokemuksen.",
    icon: Gauge,
  },
];

const faqItems = [
  {
    question: "Kuinka nopeasti sivusto valmistuu?",
    answer: "Useimmat sivustot valmistuvat noin 1–3 viikossa riippuen sisällöstä, laajuudesta ja palautteen nopeudesta.",
  },
  {
    question: "Mitä tarvitsen projektin alussa?",
    answer: "Tarvitset yrityksen perustiedot, palvelut, yhteystiedot ja mahdolliset kuvat. Autan myös tekstien ja rakenteen selkeyttämisessä.",
  },
  {
    question: "Voinko päivittää sivustoa itse?",
    answer: "Kyllä. Toteutus voidaan suunnitella niin, että tärkeimmät sisällöt ovat helposti päivitettävissä myös myöhemmin.",
  },
  {
    question: "Sisältyykö domain tai hosting hintaan?",
    answer: "Domain ja hosting eivät automaattisesti sisälly paketteihin, mutta autan valitsemaan ja ottamaan käyttöön sopivan ratkaisun.",
  },
  {
    question: "Tarjoatko ylläpitoa julkaisun jälkeen?",
    answer: "Kyllä. Ylläpitopalveluun voi sisältyä päivityksiä, varmuuskopioita, tietoturvaa ja pieniä muutoksia sivustolle.",
  },
];

const faqCards: CardItem[] = [
  {
    title: "Selkeä aikataulu",
    text: "Suunnittelemme aikataulun yhdessä ja pidämme kiinni sovituista vaiheista.",
    icon: CalendarDays,
  },
  {
    title: "Nopea viestintä",
    text: "Pidämme sinut ajan tasalla jokaisessa vaiheessa ja vastaamme nopeasti.",
    icon: MessageCircle,
  },
  {
    title: "Jatkotuki",
    text: "Emme jätä sinua yksin julkaisun jälkeen – olemme tukenasi jatkossakin.",
    icon: Headphones,
  },
];

const contactCards: CardItem[] = [
  {
    title: "Vastaus nopeasti",
    text: "Viestit käsitellään nopeasti ja saat vastauksen yleensä saman arkipäivän aikana.",
    icon: MessageCircle,
  },
  {
    title: "Selkeä aloitus",
    text: "Projekti alkaa yksinkertaisella keskustelulla ja saat selkeät seuraavat askeleet.",
    icon: ListChecks,
  },
  {
    title: "Yrityksesi mukaan",
    text: "Jokainen ratkaisu suunnitellaan yrityksesi tavoitteiden ja tarpeiden mukaan.",
    icon: UserRound,
  },
];

function FeatureCards({ items, className = "" }: { items: CardItem[]; className?: string }) {
  return (
    <div className={`cards-grid ${className}`} data-stagger>
      {items.map((item) => {
        const Icon = item.icon;
        const content = (
          <>
            <Icon className="card-icon" aria-hidden="true" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <span className="card-arrow" aria-hidden="true">→</span>
          </>
        );

        if (item.href) {
          return (
            <a className="info-card" href={item.href} key={item.title} data-stagger-item>
              {content}
            </a>
          );
        }

        return (
          <article className="info-card" key={item.title} data-stagger-item>
            {content}
          </article>
        );
      })}
    </div>
  );
}

function CtaBand({ title, text, button }: { title: string; text: string; button: string }) {
  return (
    <div className="cta-band" data-animate="fade-up">
      <div className="cta-mark" aria-hidden="true">
        <ArrowUpRight />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <a className="button button-dark" href="#yhteys">
        {button} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <MotionEffects />

      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top" aria-label="NODRA etusivulle">
            <Image
              className="logo-image"
              src="/IMG_4448.PNG"
              alt="NODRA"
              width={420}
              height={140}
              priority
            />
          </a>
          <nav className="desktop-nav" aria-label="Päänavigaatio">
            <a href="#tyot">Työt</a>
            <a href="#palvelut">Palvelut</a>
            <a href="#miksi">Meistä</a>
            <a href="#yhteys">Yhteystiedot</a>
          </nav>
          <a className="header-cta" href="#yhteys">
            Varaa puhelu
          </a>
          <MobileMenu />
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-side">
              <p className="hero-kicker">Mitä teemme</p>
              <h2>Suunnittelemme ja rakennamme moderneja verkkosivuja.</h2>
              <p>
                Jotka auttavat yrityksiä näyttämään luotettavilta ja saamaan enemmän yhteydenottoja.
              </p>
            </div>
            <div className="hero-main">
              <h1>
                <span className="hero-title-line">Rakennamme moderneja</span>
                <span className="hero-title-line">verkkosivuja, jotka tekevät</span>
                <span className="hero-title-line">yrityksestäsi uskottavan.</span>
              </h1>
              <p className="hero-lead">Selkeä design, nopea toteutus ja toimiva käyttökokemus kaikilla laitteilla.</p>
            </div>
          </div>
        </div>
        <div className="hero-media parallax-media">
          <Image
            src="/C.PNG"
            alt="Tumma abstrakti viivarakenne, joka kuvastaa moderneja verkkosivuja"
            fill
            priority
            sizes="100vw"
          />
        </div>
      </section>

      <section id="palvelut" className="content-section services-section">
        <div className="container">
          <div className="split-layout">
            <div className="section-copy" data-animate="fade-left">
              <p className="section-label">Palvelut</p>
              <h2>Ratkaisut yrityksille, jotka tarvitsevat selkeät ja uskottavat verkkosivut.</h2>
              <p>
                Suunnittelemme ja toteutamme moderneja, tehokkaita verkkosivustoja pienyrityksille.
                Jokainen ratkaisu räätälöidään liiketoimintasi tavoitteiden mukaan ja rakennetaan tuottamaan tuloksia.
              </p>
            </div>
            <div className="media-card parallax-media" data-animate="fade-right">
              <Image src="/C.PNG" alt="NODRA-palveluiden abstrakti viivarakenne" fill sizes="(min-width: 1024px) 560px, 100vw" />
            </div>
          </div>
          <FeatureCards items={services} className="four-columns" />
        </div>
      </section>

      <section id="hinnat" className="content-section pricing-section">
        <div className="container">
          <div className="split-layout pricing-top">
            <div className="section-copy" data-animate="fade-left">
              <p className="section-label">Hinnat</p>
              <h2>Selkeät paketit ilman turhaa monimutkaisuutta.</h2>
              <p>
                NODRA tarjoaa selkeät ja läpinäkyvät hinnat pienyrityksille. Oikea paketti riippuu sivuston
                laajuudesta ja tavoitteista – valitset helposti sen, mikä sopii juuri sinulle.
              </p>
            </div>
            <div className="benefit-list-card" data-animate="fade-right">
              {pricingBenefits.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="benefit-row" key={item.title}>
                    <span className="round-icon"><Icon aria-hidden="true" /></span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="price-grid" data-stagger>
            {priceItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className={`price-card${item.featured ? " featured-card" : ""}`} key={item.title} data-stagger-item>
                  {item.featured && <div className="featured-label">★ Suosituin</div>}
                  <div className="price-card-body">
                    <Icon className="card-icon" aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p className="price-value">{item.price}</p>
                    <p className="price-subtitle">{item.subtitle}</p>
                    <p className="price-description">{item.text}</p>
                    <ul>
                      {item.items.map((feature) => (
                        <li key={feature}>✓ {feature}</li>
                      ))}
                    </ul>
                    <span className="card-arrow" aria-hidden="true">→</span>
                  </div>
                </article>
              );
            })}
          </div>

          <CtaBand
            title="Tarvitsetko räätälöidyn ratkaisun?"
            text="Jokainen yritys on erilainen. Tehdään yhdessä juuri sinun tavoitteitasi tukeva sivusto."
            button="Pyydä tarjous"
          />
        </div>
      </section>

      <section id="miksi" className="content-section why-section">
        <div className="container">
          <div className="split-layout why-top">
            <div className="section-copy" data-animate="fade-left">
              <p className="section-label">Miksi NODRA</p>
              <h2>Selkeä prosessi, moderni toteutus ja sivusto, joka tukee liiketoimintaasi.</h2>
              <p>
                NODRA keskittyy siihen, mikä pienyritykselle on tärkeintä: uskottava ilme, helppo käyttökokemus
                ja sivusto, joka ohjaa asiakkaat ottamaan yhteyttä.
              </p>
            </div>
            <div className="process-card parallax-media" data-animate="fade-right">
              <Image src="/C.PNG" alt="Tumma abstrakti prosessitausta NODRA-palvelulle" fill sizes="(min-width: 1024px) 620px, 100vw" />
              <div className="process-overlay" />
              <div className="process-content">
                {processRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div className="process-row" key={row.title}>
                      <Icon aria-hidden="true" />
                      <span className="process-line" aria-hidden="true" />
                      <div>
                        <h3>{row.title}</h3>
                        <p>{row.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <FeatureCards items={whyCards} className="three-columns" />
          <CtaBand
            title="Haluatko saman yrityksellesi?"
            text="Keskustellaan, miten voimme rakentaa sivuston, joka tuo tuloksia myös sinulle."
            button="Pyydä tarjous"
          />
        </div>
      </section>

      <section id="tyot" className="content-section work-section">
        <div className="container">
          <div className="split-layout work-top">
            <div className="section-copy" data-animate="fade-left">
              <p className="section-label">Työt</p>
              <h2>Näe, miltä hyvin suunniteltu verkkosivusto voi näyttää.</h2>
              <p>
                Suunnittelemme sivustoja, jotka eivät vain näytä hyvältä, vaan myös tukevat yrityksesi tavoitteita.
                Tässä esimerkkisivusto, miltä lopputulos voi näyttää.
              </p>
            </div>
            <article className="work-browser" data-animate="fade-right">
              <div className="browser-top">
                <span />
                <span />
                <span />
                <div className="browser-url">🔒 esimerkkiyritys.fi</div>
              </div>
              <div className="work-browser-image">
                <Image
                  src="/kallio-tyonayte.PNG"
                  alt="Esimerkkiprojekti verkkosivun selainmockupissa"
                  width={1792}
                  height={1024}
                  sizes="(min-width: 1024px) 680px, 100vw"
                />
              </div>
              <div className="browser-footer">
                <div>
                  <h3>Esimerkkiprojekti</h3>
                  <p>Yrityssivusto / Uudistus</p>
                </div>
                <a className="button button-dark small" href="https://miromnb-coder.github.io/Kallio/" target="_blank" rel="noopener noreferrer">
                  Katso projekti <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          </div>
          <FeatureCards items={workCards} className="three-columns" />
        </div>
      </section>

      <section id="ukk" className="content-section faq-section">
        <div className="container">
          <div className="split-layout faq-top">
            <div className="section-copy" data-animate="fade-left">
              <p className="section-label">UKK</p>
              <h2>Vastaukset yleisimpiin kysymyksiin ennen projektin aloittamista.</h2>
              <p>
                Haluamme tehdä prosessista mahdollisimman selkeän ja läpinäkyvän. Alla vastaukset yleisimpiin
                kysymyksiin, joita asiakkaamme esittävät ennen projektin käynnistämistä.
              </p>
            </div>
            <div className="faq-panel" data-animate="fade-right">
              {faqItems.map((item, index) => (
                <details className="faq-item" key={item.question} open={index === 0}>
                  <summary>
                    <span className="faq-indicator" aria-hidden="true" />
                    <span>{item.question}</span>
                    <span className="faq-chevron" aria-hidden="true">⌄</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <FeatureCards items={faqCards} className="three-columns" />
          <CtaBand
            title="Etkö löytänyt vastausta?"
            text="Kysy rohkeasti – vastaan mielelläni ja autan valitsemaan sopivan ratkaisun."
            button="Ota yhteyttä"
          />
        </div>
      </section>

      <section id="yhteys" className="content-section contact-section">
        <div className="container">
          <div className="split-layout contact-top">
            <div className="section-copy" data-animate="fade-left">
              <p className="section-label">Yhteydenotto</p>
              <h2>Kerro projektistasi, niin suunnitellaan yrityksellesi sopiva verkkosivusto.</h2>
              <p>
                Voit lähettää viestin tai varata puhelun. Vastaan nopeasti ja autan valitsemaan juuri sinun
                yrityksellesi sopivan ratkaisun.
              </p>
            </div>
            <div className="contact-form-card" data-animate="fade-right">
              <ContactForm />
            </div>
          </div>
          <FeatureCards items={contactCards} className="three-columns" />
          <CtaBand
            title="Valmis aloittamaan?"
            text="Lähetä viesti tai varaa puhelu – katsotaan yhdessä, mikä ratkaisu sopii yrityksellesi parhaiten."
            button="Pyydä tarjous"
          />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid" data-stagger>
            <div className="footer-brand" data-stagger-item>
              <a href="#top" aria-label="NODRA etusivulle">
                <Image className="footer-logo-image" src="/IMG_4448.PNG" alt="NODRA" width={420} height={140} />
              </a>
              <p>Autamme pieniä yrityksiä näyttämään uskottavilta verkossa modernien ja helppokäyttöisten verkkosivujen avulla.</p>
              <div className="social-links" aria-label="Sosiaalisen median linkit">
                <a href="#top" aria-label="Verkkosivusto"><Globe aria-hidden="true" /></a>
                <a href="#top" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a>
                <a href="#top" aria-label="Instagram"><Instagram aria-hidden="true" /></a>
              </div>
            </div>

            <nav className="footer-column" aria-label="Sivukartta" data-stagger-item>
              <h3>Sivukartta</h3>
              <a href="#tyot">Työt</a>
              <a href="#palvelut">Palvelut</a>
              <a href="#miksi">Meistä</a>
              <a href="#yhteys">Yhteystiedot</a>
            </nav>

            <nav className="footer-column" aria-label="Palvelut" data-stagger-item>
              <h3>Palvelut</h3>
              <a href="/palvelut/yhden-sivun-nettisivu">Yhden sivun nettisivu</a>
              <a href="/palvelut/yrityssivusto">Yrityssivusto</a>
              <a href="/palvelut/sivuston-uudistus">Sivuston uudistus</a>
              <a href="/palvelut/yllapito">Ylläpito</a>
            </nav>

            <div className="footer-column" data-stagger-item>
              <h3>Yhteys</h3>
              <a href="mailto:nodra.verkkosivut@gmail.com">nodra.verkkosivut@gmail.com</a>
              <p>Vastaamme yleensä 1 arkipäivän kuluessa.</p>
              <a className="footer-call" href="#yhteys">Varaa puhelu <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 NODRA</p>
            <div>
              <a href="/tietosuojaseloste">Tietosuoja</a>
              <a href="/ehdot">Ehdot</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
