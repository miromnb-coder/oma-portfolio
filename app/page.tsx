const services = [
  {
    icon: "▱",
    title: "Yhden sivun kotisivu",
    text: "Selkeä ja tyylikäs sivu, josta asiakkaasi löytävät tärkeimmät tiedot nopeasti."
  },
  {
    icon: "◇",
    title: "Yrityssivusto",
    text: "Useampi osio tai alasivu palveluille, hinnastolle, referensseille ja yhteydenotolle."
  },
  {
    icon: "↻",
    title: "Sivujen uudistus",
    text: "Päivitetään vanha sivu moderniksi, nopeaksi ja luotettavan näköiseksi kokonaisuudeksi."
  },
  {
    icon: "✦",
    title: "Ylläpito ja muutokset",
    text: "Pienet päivitykset, tekstimuutokset ja jatkuva apu myös julkaisun jälkeen."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Yhteydenotto",
    text: "Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset."
  },
  {
    number: "02",
    title: "Suunnittelu",
    text: "Teen selkeän rakenteen ja ehdotuksen ulkoasusta."
  },
  {
    number: "03",
    title: "Toteutus",
    text: "Rakennan sivun valmiiksi ja viimeistelen sisällön."
  },
  {
    number: "04",
    title: "Julkaisu",
    text: "Sivu julkaistaan ja käydään läpi viimeiset muutokset."
  }
];

const audience = [
  "Rakennus- ja remonttifirmat",
  "Siivouspalvelut",
  "Parturit ja kauneusala",
  "Hierojat ja hyvinvointipalvelut",
  "Pihatyöt ja kiinteistöhuolto",
  "Muut pienet paikalliset yritykset"
];

const prices = [
  {
    name: "Aloitus",
    price: "299 €",
    text: "Yhden sivun selkeä kotisivu.",
    features: ["Yhden sivun kotisivu", "Mobiiliystävällinen toteutus", "Yhteydenottolomake"]
  },
  {
    name: "Yrityssivu",
    price: "499 €",
    text: "Suosittu paketti pienyritykselle.",
    highlighted: true,
    features: ["Useampi osio", "Palvelut ja hinnasto", "Selkeä yritysilme"]
  },
  {
    name: "Laajempi",
    price: "799 €",
    text: "Laajempi kokonaisuus useammalla sivulla.",
    features: ["Useampi alasivu", "Tarkempi ulkoasu", "Julkaisun jälkeinen apu"]
  }
];

const faqs = [
  {
    q: "Kauanko sivujen tekeminen kestää?",
    a: "Yleensä noin 1–3 viikkoa riippuen sivujen laajuudesta ja siitä, ovatko tekstit ja kuvat valmiina."
  },
  { q: "Tarvitsenko valmiit tekstit?" },
  { q: "Toimivatko sivut puhelimella?" },
  { q: "Sisältyykö domain ja webhotelli?" },
  { q: "Voinko pyytää muutoksia myöhemmin?" }
];

export default function Page() {
  return (
    <main className="be-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .be-page {
              --wine: #4a1728;
              --wine-2: #68233a;
              --rose: #b95876;
              --dark: #09090b;
              --dark-2: #101014;
              --cream: #f4eee8;
              --muted: rgba(244,238,232,.68);
              --line: rgba(244,238,232,.12);
              --line-strong: rgba(185,88,118,.44);
              min-height: 100vh;
              overflow-x: hidden;
              background: #09090b;
              color: var(--cream);
              font-family: var(--font-sans), Inter, system-ui, sans-serif;
              isolation: isolate;
            }

            .be-page * { box-sizing: border-box; }
            .be-serif { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -0.045em; }
            .be-section { position: relative; min-height: 100svh; overflow: hidden; border-bottom: 1px solid rgba(244,238,232,.07); }
            .be-section::before {
              content: "";
              position: absolute;
              inset: 0;
              background:
                radial-gradient(circle at 72% 10%, rgba(255,255,255,.055), transparent 28%),
                radial-gradient(circle at 18% 18%, rgba(185,88,118,.08), transparent 36%),
                linear-gradient(115deg, #121116 0%, #09090b 58%, #070708 100%);
              z-index: -4;
            }
            .be-section::after {
              content: "";
              position: absolute;
              inset: 0;
              opacity: .12;
              z-index: -2;
              pointer-events: none;
              background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,.45) 1px, transparent 0);
              background-size: 19px 19px;
              mix-blend-mode: soft-light;
            }
            .be-wine {
              position: absolute;
              inset: 0;
              z-index: -3;
              background:
                radial-gradient(circle at 20% 20%, rgba(255,255,255,.055), transparent 32%),
                linear-gradient(145deg, #5c2037 0%, #3b1323 54%, #281019 100%);
              clip-path: var(--clip);
              box-shadow: 22px 0 80px rgba(0,0,0,.38);
            }
            .be-wine::after {
              content: "";
              position: absolute;
              inset: 0;
              opacity: .16;
              background:
                radial-gradient(circle at 30% 20%, rgba(255,255,255,.25), transparent 2px),
                repeating-linear-gradient(84deg, rgba(255,255,255,.025) 0 1px, transparent 1px 9px);
              mix-blend-mode: overlay;
            }
            .be-wrap { width: min(1440px, calc(100% - 72px)); margin: 0 auto; position: relative; z-index: 2; }
            .be-header { position: fixed; top: 0; left: 0; right: 0; z-index: 60; padding: 28px 0 14px; pointer-events: none; }
            .be-header-inner { width: min(1440px, calc(100% - 72px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; pointer-events: auto; }
            .be-header::before { content: ""; position: absolute; inset: 0; height: 92px; z-index: -1; background: linear-gradient(to bottom, rgba(9,9,11,.82), rgba(9,9,11,.28), transparent); backdrop-filter: blur(10px); mask-image: linear-gradient(to bottom, black 35%, transparent 100%); }
            .be-logo { font-family: Georgia, 'Times New Roman', serif; font-size: 32px; letter-spacing: .12em; color: var(--cream); line-height: 1; }
            .be-nav { display: flex; align-items: center; gap: 44px; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: rgba(244,238,232,.78); }
            .be-nav a { transition: color .25s ease; }
            .be-nav a:hover { color: white; }
            .be-cta, .be-outline, .be-submit { display: inline-flex; align-items: center; justify-content: center; gap: 14px; border: 1px solid var(--line-strong); color: var(--cream); min-height: 54px; padding: 0 28px; background: rgba(86,28,48,.55); box-shadow: 0 18px 54px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.08); transition: transform .25s ease, background .25s ease, border-color .25s ease; }
            .be-outline { background: rgba(8,8,10,.28); border-color: rgba(244,238,232,.2); }
            .be-cta:hover, .be-outline:hover, .be-submit:hover { transform: translateY(-2px); border-color: rgba(244,238,232,.38); background: rgba(116,40,66,.72); }
            .be-menu { display: none; }
            .be-hero { display: grid; align-items: center; padding: 126px 0 72px; }
            .be-hero-grid { display: grid; grid-template-columns: .95fr 1.08fr; align-items: center; gap: clamp(44px, 6vw, 88px); }
            .be-eyebrow { color: #de7790; font-size: 12px; font-weight: 700; letter-spacing: .38em; text-transform: uppercase; }
            .be-title { margin: 24px 0 0; color: var(--cream); font-size: clamp(58px, 6.7vw, 104px); line-height: .97; text-shadow: 0 25px 80px rgba(0,0,0,.34); }
            .be-copy { margin-top: 24px; max-width: 610px; color: var(--muted); font-size: 19px; line-height: 1.7; }
            .be-actions { margin-top: 36px; display: flex; gap: 22px; flex-wrap: wrap; }
            .be-points { margin-top: 54px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; max-width: 690px; color: rgba(244,238,232,.76); }
            .be-point { display: flex; align-items: center; gap: 13px; padding-right: 22px; margin-right: 22px; border-right: 1px solid rgba(244,238,232,.12); font-size: 14px; }
            .be-point:last-child { border-right: 0; }
            .be-icon-circle { width: 44px; height: 44px; border: 1px solid rgba(185,88,118,.52); border-radius: 999px; display: grid; place-items: center; color: #d36c86; font-size: 19px; flex: 0 0 auto; }
            .be-browser { position: relative; border: 1px solid rgba(244,238,232,.18); background: rgba(13,13,16,.72); box-shadow: 0 34px 110px rgba(0,0,0,.55); overflow: hidden; border-radius: 22px; backdrop-filter: blur(18px); }
            .be-browser::before { content: ""; position: absolute; inset: -1px; pointer-events: none; border-radius: inherit; background: linear-gradient(130deg, rgba(255,255,255,.12), transparent 38%, rgba(185,88,118,.14)); opacity: .75; }
            .be-bar { height: 54px; display: flex; align-items: center; gap: 9px; padding: 0 20px; border-bottom: 1px solid rgba(244,238,232,.08); background: rgba(255,255,255,.025); }
            .be-dot { width: 10px; height: 10px; border-radius: 999px; background: #cc526d; }
            .be-dot:nth-child(2) { background: #d4a85e; }
            .be-dot:nth-child(3) { background: #6caf74; }
            .be-address { margin: 0 auto; border-radius: 999px; background: rgba(255,255,255,.045); padding: 7px 72px; font-size: 12px; color: rgba(244,238,232,.5); }
            .be-preview { position: relative; min-height: 450px; display: grid; grid-template-columns: .9fr 1.1fr; align-items: stretch; background: #0b0b0e; }
            .be-preview-text { padding: 54px 38px; }
            .be-preview-logo { font-family: Georgia, 'Times New Roman', serif; letter-spacing: .18em; font-size: 18px; color: rgba(244,238,232,.86); }
            .be-preview-title { margin-top: 54px; font-family: Georgia, 'Times New Roman', serif; font-size: 48px; line-height: 1.05; letter-spacing: -.045em; }
            .be-preview-p { margin-top: 16px; color: rgba(244,238,232,.58); line-height: 1.6; }
            .be-preview-img { min-height: 100%; background: linear-gradient(to right, rgba(11,11,14,.35), transparent 35%), url('/puuhaus-esimerkki.jpg') center/cover; opacity: .72; }
            .be-stats { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(244,238,232,.09); background: rgba(0,0,0,.33); }
            .be-stat { padding: 22px 18px; text-align: center; border-right: 1px solid rgba(244,238,232,.08); }
            .be-stat strong { display: block; font-size: 22px; font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
            .be-stat span { display: block; margin-top: 4px; color: rgba(244,238,232,.48); font-size: 11px; }
            .be-content-section { min-height: auto; padding: 104px 0; }
            .be-two { display: grid; grid-template-columns: .36fr .64fr; gap: 70px; align-items: start; }
            .be-section-title { font-size: clamp(42px, 4.8vw, 76px); line-height: 1.04; margin: 16px 0 0; }
            .be-section-copy { margin-top: 22px; color: var(--muted); font-size: 17px; line-height: 1.65; max-width: 420px; }
            .be-service-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
            .be-service { padding: 20px 26px 10px; min-height: 240px; border-right: 1px solid var(--line); }
            .be-service:last-child { border-right: 0; }
            .be-service-symbol { color: #cd627c; font-size: 32px; min-height: 42px; }
            .be-service h3, .be-step h3 { margin-top: 22px; font-size: 22px; font-weight: 500; }
            .be-service p, .be-step p, .be-price p { color: rgba(244,238,232,.62); line-height: 1.6; font-size: 14px; }
            .be-link { display: inline-flex; margin-top: 18px; color: #df7992; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; }
            .be-audience { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
            .be-audience-card, .be-price, .be-faq-row, .be-info-card, .be-form { border: 1px solid var(--line); background: rgba(12,12,15,.54); box-shadow: 0 24px 70px rgba(0,0,0,.24); backdrop-filter: blur(12px); }
            .be-audience-card { min-height: 180px; padding: 30px; }
            .be-audience-card h3 { font-size: 29px; line-height: 1.08; margin: 16px 0 0; }
            .be-audience-card p { color: var(--muted); line-height: 1.6; margin-top: 14px; }
            .be-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; }
            .be-step { position: relative; padding-top: 6px; }
            .be-step-number { width: 54px; height: 54px; border-radius: 999px; border: 1px solid rgba(185,88,118,.6); display: grid; place-items: center; color: #dc718b; margin-bottom: 28px; background: rgba(74,23,40,.28); }
            .be-step::before { content: ""; position: absolute; top: 32px; left: 68px; right: -12px; height: 1px; border-top: 1px dashed rgba(185,88,118,.35); }
            .be-step:last-child::before { display: none; }
            .be-pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
            .be-price { padding: 34px; text-align: center; }
            .be-price.featured { border-color: rgba(185,88,118,.72); background: linear-gradient(160deg, rgba(84,26,47,.44), rgba(12,12,15,.64)); transform: translateY(-12px); }
            .be-badge { display: inline-flex; padding: 8px 18px; border: 1px solid rgba(185,88,118,.62); background: rgba(185,88,118,.24); color: #f0b7c6; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 16px; }
            .be-price h3 { font-size: 34px; margin: 0; }
            .be-price strong { display: block; margin-top: 18px; color: #d66b85; font-size: 54px; font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
            .be-price ul { margin: 28px 0 0; padding: 0; list-style: none; text-align: left; display: grid; gap: 12px; color: rgba(244,238,232,.72); }
            .be-price li::before { content: "✓"; color: #d66b85; margin-right: 12px; }
            .be-note { margin-top: 28px; text-align: center; color: rgba(244,238,232,.48); }
            .be-faq { display: grid; gap: 14px; }
            .be-faq-row { padding: 24px 28px; display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; }
            .be-faq-row strong { font-family: Georgia, 'Times New Roman', serif; font-size: 23px; font-weight: 400; }
            .be-faq-row p { grid-column: 1 / -1; color: var(--muted); line-height: 1.65; max-width: 720px; }
            .be-plus { color: #d66b85; font-size: 24px; }
            .be-contact-grid { display: grid; grid-template-columns: .42fr .58fr; gap: 70px; }
            .be-info { display: grid; gap: 18px; margin-top: 36px; }
            .be-info-card { display: grid; grid-template-columns: 58px 1fr; gap: 22px; align-items: start; padding: 24px; }
            .be-info-card h3 { margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 25px; font-weight: 400; }
            .be-info-card p { margin: 8px 0 0; color: var(--muted); line-height: 1.55; }
            .be-form { padding: 34px; display: grid; gap: 18px; }
            .be-form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
            .be-field { display: grid; gap: 8px; color: rgba(244,238,232,.82); }
            .be-input, .be-textarea { width: 100%; border: 1px solid rgba(244,238,232,.14); background: rgba(0,0,0,.18); color: var(--cream); padding: 16px; outline: none; }
            .be-input:focus, .be-textarea:focus { border-color: rgba(185,88,118,.7); }
            .be-textarea { min-height: 170px; resize: vertical; }
            .be-submit { width: 100%; border: 0; font-size: 14px; letter-spacing: .13em; text-transform: uppercase; }
            .be-privacy { text-align: center; color: rgba(244,238,232,.42); font-size: 13px; }
            .be-footer { padding: 42px 0; border-top: 1px solid var(--line); color: rgba(244,238,232,.58); }
            .be-footer-grid { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
            .be-footer-logo { font-family: Georgia, 'Times New Roman', serif; font-size: 30px; letter-spacing: .13em; color: var(--cream); }

            @media (max-width: 1050px) {
              .be-wrap, .be-header-inner { width: min(100% - 42px, 760px); }
              .be-nav { display: none; }
              .be-menu { display: inline-grid; place-items: center; width: 54px; height: 54px; border: 1px solid var(--line); background: rgba(10,10,12,.55); color: var(--cream); font-size: 24px; }
              .be-header .be-cta { display: none; }
              .be-section { min-height: auto; }
              .be-wine { clip-path: polygon(0 0, 100% 0, 100% 36%, 0 54%) !important; }
              .be-hero { padding: 112px 0 62px; }
              .be-hero-grid, .be-two, .be-contact-grid { grid-template-columns: 1fr; gap: 44px; }
              .be-title { font-size: clamp(52px, 14vw, 84px); }
              .be-copy { font-size: 17px; }
              .be-actions { flex-direction: column; }
              .be-cta, .be-outline { width: 100%; }
              .be-points { grid-template-columns: 1fr; gap: 14px; }
              .be-point { border-right: 0; border-bottom: 1px solid rgba(244,238,232,.1); margin-right: 0; padding: 0 0 14px; }
              .be-preview { grid-template-columns: 1fr; min-height: auto; }
              .be-preview-img { min-height: 260px; order: -1; }
              .be-preview-title { margin-top: 30px; font-size: 38px; }
              .be-address { padding-inline: 34px; }
              .be-stats { grid-template-columns: repeat(2, 1fr); }
              .be-content-section { padding: 74px 0; }
              .be-service-grid, .be-audience, .be-steps, .be-pricing, .be-form-grid { grid-template-columns: 1fr; }
              .be-service { border-right: 0; border-bottom: 1px solid var(--line); min-height: auto; padding: 28px 0; }
              .be-step::before { display: none; }
              .be-price.featured { transform: none; }
              .be-footer-grid { align-items: flex-start; flex-direction: column; }
            }
          `
        }}
      />

      <header className="be-header">
        <div className="be-header-inner">
          <a href="#hero" className="be-logo">NODRA</a>
          <nav className="be-nav" aria-label="Päänavigaatio">
            <a href="#palvelut">Palvelut</a>
            <a href="#prosessi">Prosessi</a>
            <a href="#hinnat">Hinnat</a>
            <a href="#ukk">UKK</a>
            <a href="#yhteys">Yhteys</a>
          </nav>
          <a className="be-cta" href="#yhteys">Pyydä tarjous <span>→</span></a>
          <a className="be-menu" href="#yhteys" aria-label="Siirry yhteydenottoon">≡</a>
        </div>
      </header>

      <section id="hero" className="be-section be-hero">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 53% 0, 42% 100%, 0 100%)" }} />
        <div className="be-wrap be-hero-grid">
          <div>
            <p className="be-eyebrow">Verkkosivut, jotka toimivat ja näyttävät hyvältä</p>
            <h1 className="be-serif be-title">Selkeät verkkosivut pienille yrityksille</h1>
            <p className="be-copy">
              Teen moderneja ja mobiiliystävällisiä verkkosivuja yrityksille, jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta helppoa.
            </p>
            <p className="be-copy">
              Ei turhaa monimutkaisuutta — vain siisti sivu, selkeä rakenne ja toimiva yhteydenotto.
            </p>
            <div className="be-actions">
              <a className="be-cta" href="#yhteys">Pyydä tarjous <span>→</span></a>
              <a className="be-outline" href="#hinnat">Katso hinnat <span>→</span></a>
            </div>
            <div className="be-points">
              <div className="be-point"><span className="be-icon-circle">↯</span>Nopea aloitus</div>
              <div className="be-point"><span className="be-icon-circle">☷</span>Selkeä prosessi</div>
              <div className="be-point"><span className="be-icon-circle">⌖</span>Etänä koko Suomeen</div>
            </div>
          </div>

          <div className="be-browser" aria-label="Esimerkkisivun näkymä">
            <div className="be-bar">
              <span className="be-dot" />
              <span className="be-dot" />
              <span className="be-dot" />
              <span className="be-address">puuhaus.fi</span>
            </div>
            <div className="be-preview">
              <div className="be-preview-text">
                <div className="be-preview-logo">PUUHAUS OY</div>
                <h2 className="be-preview-title">Luotettavaa rakentamista pienille ja suurille kohteille.</h2>
                <p className="be-preview-p">Esimerkkisivu näyttää, miten palvelut, luottamus ja yhteydenotto voidaan tuoda selkeästi esiin.</p>
                <a className="be-outline" href="#palvelut">Tutustu palveluihin →</a>
              </div>
              <div className="be-preview-img" />
              <div className="be-stats">
                <div className="be-stat"><strong>Selkeä</strong><span>rakenne</span></div>
                <div className="be-stat"><strong>Nopea</strong><span>käyttökokemus</span></div>
                <div className="be-stat"><strong>Mobiili</strong><span>ystävällinen</span></div>
                <div className="be-stat"><strong>Helppo</strong><span>yhteydenotto</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="palvelut" className="be-section be-content-section">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 42% 0, 32% 100%, 0 100%)" }} />
        <div className="be-wrap be-two">
          <div>
            <p className="be-eyebrow">Palvelut</p>
            <h2 className="be-serif be-section-title">Kaikki mitä tarvitset, yhdestä paikasta.</h2>
            <p className="be-section-copy">Selkeä kokonaisuus yritykselle, joka haluaa näyttää luotettavalta verkossa.</p>
          </div>
          <div className="be-service-grid">
            {services.map((service) => (
              <article className="be-service" key={service.title}>
                <div className="be-service-symbol">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="be-link" href="#yhteys">Lue lisää →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kenelle" className="be-section be-content-section">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 36% 0, 27% 100%, 0 100%)" }} />
        <div className="be-wrap be-two">
          <div>
            <p className="be-eyebrow">Kenelle sopii?</p>
            <h2 className="be-serif be-section-title">Sivut pienille paikallisille yrityksille.</h2>
            <p className="be-section-copy">Sopii yrityksille, jotka haluavat selkeät verkkosivut ilman turhaa säätöä.</p>
          </div>
          <div className="be-audience">
            {audience.map((item) => (
              <article className="be-audience-card" key={item}>
                <span className="be-icon-circle">✧</span>
                <h3 className="be-serif">{item}</h3>
                <p>Esittele palvelusi selkeästi ja tee yhteydenotosta helppoa.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prosessi" className="be-section be-content-section">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 30% 0, 22% 100%, 0 100%)" }} />
        <div className="be-wrap be-two">
          <div>
            <p className="be-eyebrow">Prosessi</p>
            <h2 className="be-serif be-section-title">Selkeä prosessi, sujuva yhteistyö.</h2>
            <p className="be-section-copy">Tiedät koko ajan mitä tehdään ja missä vaiheessa projekti menee.</p>
          </div>
          <div className="be-steps">
            {processSteps.map((step) => (
              <article className="be-step" key={step.number}>
                <div className="be-step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hinnat" className="be-section be-content-section">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 24% 0, 17% 100%, 0 100%)" }} />
        <div className="be-wrap be-two">
          <div>
            <p className="be-eyebrow">Hinnat</p>
            <h2 className="be-serif be-section-title">Selkeät hinnat, läpinäkyvästi.</h2>
            <p className="be-section-copy">Lopullinen hinta riippuu sivujen laajuudesta ja sisällöstä.</p>
          </div>
          <div>
            <div className="be-pricing">
              {prices.map((price) => (
                <article className={`be-price ${price.highlighted ? "featured" : ""}`} key={price.name}>
                  {price.highlighted ? <span className="be-badge">Suosittu</span> : null}
                  <h3 className="be-serif">{price.name}</h3>
                  <p>{price.text}</p>
                  <strong>alk. {price.price}</strong>
                  <ul>
                    {price.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="be-note">Hinta tarkentuu aina sivujen laajuuden ja tarvittavan sisällön mukaan.</p>
          </div>
        </div>
      </section>

      <section id="ukk" className="be-section be-content-section">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 18% 0, 11% 100%, 0 100%)" }} />
        <div className="be-wrap be-two">
          <div>
            <p className="be-eyebrow">UKK</p>
            <h2 className="be-serif be-section-title">Usein kysytyt kysymykset.</h2>
            <p className="be-section-copy">Vastauksia ennen projektin aloitusta.</p>
          </div>
          <div className="be-faq">
            {faqs.map((faq, index) => (
              <article className="be-faq-row" key={faq.q}>
                <strong>{faq.q}</strong>
                <span className="be-plus">{index === 0 ? "−" : "+"}</span>
                {faq.a ? <p>{faq.a}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="yhteys" className="be-section be-content-section">
        <div className="be-wine" style={{ clipPath: "polygon(0 0, 14% 0, 0 100%, 0 100%)" }} />
        <div className="be-wrap be-contact-grid">
          <div>
            <p className="be-eyebrow">Yhteys</p>
            <h2 className="be-serif be-section-title">Ota yhteyttä, keskustellaan.</h2>
            <p className="be-section-copy">Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset.</p>
            <div className="be-info">
              <article className="be-info-card"><span className="be-icon-circle">◷</span><div><h3>Vastaan mahdollisimman pian</h3><p>Pyrin vastaamaan kaikkiin viesteihin 24 tunnin kuluessa.</p></div></article>
              <article className="be-info-card"><span className="be-icon-circle">⌖</span><div><h3>Etänä koko Suomeen</h3><p>Palvelen asiakkaita joustavasti missä päin Suomea tahansa.</p></div></article>
              <article className="be-info-card"><span className="be-icon-circle">✉</span><div><h3>Sähköposti</h3><p>nodra.verkkosivut@gmail.com</p></div></article>
            </div>
          </div>

          <form className="be-form">
            <div className="be-form-grid">
              <label className="be-field">Nimi<input className="be-input" name="Nimi" aria-label="Nimi" placeholder="Nimesi" required /></label>
              <label className="be-field">Yritys<input className="be-input" name="Yritys" aria-label="Yritys" placeholder="Yrityksen nimi" /></label>
              <label className="be-field">Sähköposti<input className="be-input" type="email" name="Sähköposti" aria-label="Sähköposti" placeholder="Sähköpostiosoitteesi" required /></label>
              <label className="be-field">Aihe<input className="be-input" name="Aihe" aria-label="Aihe" placeholder="Esim. uudet verkkosivut" /></label>
            </div>
            <label className="be-field">Viesti<textarea className="be-textarea" name="Viesti" aria-label="Viesti" placeholder="Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset." required /></label>
            <button className="be-submit" type="submit">Lähetä viesti</button>
            <p className="be-privacy">Tietosi käsitellään luottamuksellisesti.</p>
          </form>
        </div>
      </section>

      <footer className="be-footer">
        <div className="be-wrap be-footer-grid">
          <div className="be-footer-logo">NODRA</div>
          <p>© NODRA 2026. Kaikki oikeudet pidätetään.</p>
          <p><a href="/tietosuojaseloste">Tietosuojaseloste</a></p>
        </div>
      </footer>
    </main>
  );
}
