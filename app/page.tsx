const services = [
  ["Yhden sivun kotisivu", "Selkeä ja tyylikäs sivu, josta asiakkaasi löytävät tärkeimmät tiedot nopeasti."],
  ["Yrityssivusto", "Useampi osio tai alasivu palveluille, hinnastolle, referensseille ja yhteydenotolle."],
  ["Sivujen uudistus", "Päivitetään vanha sivu moderniksi, nopeaksi ja luotettavan näköiseksi."],
  ["Ylläpito ja muutokset", "Pienet päivitykset, tekstimuutokset ja jatkuva apu myös julkaisun jälkeen."]
];

const audience = [
  "Rakennus- ja remonttifirmat",
  "Siivouspalvelut",
  "Parturit ja kauneusala",
  "Hierojat ja hyvinvointipalvelut",
  "Pihatyöt ja kiinteistöhuolto",
  "Muut pienet paikalliset yritykset"
];

const steps = [
  ["01", "Yhteydenotto", "Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset."],
  ["02", "Suunnittelu", "Teen selkeän rakenteen ja ehdotuksen ulkoasusta."],
  ["03", "Toteutus", "Rakennan sivun valmiiksi ja viimeistelen sisällön."],
  ["04", "Julkaisu", "Sivu julkaistaan ja käydään läpi viimeiset muutokset."]
];

const prices = [
  ["Aloitus", "299 €", "Yhden sivun kotisivu", "Mobiiliystävällinen toteutus", "Yhteydenottolomake"],
  ["Yrityssivu", "499 €", "Useampi osio", "Palvelut ja hinnasto", "Selkeä yritysilme"],
  ["Laajempi", "799 €", "Useampi alasivu", "Tarkempi ulkoasu", "Julkaisun jälkeinen apu"]
];

const faqs = [
  ["Kauanko sivujen tekeminen kestää?", "Yleensä noin 1–3 viikkoa riippuen sivujen laajuudesta ja siitä, ovatko tekstit ja kuvat valmiina."],
  ["Tarvitsenko valmiit tekstit?", ""],
  ["Toimivatko sivut puhelimella?", ""],
  ["Sisältyykö domain ja webhotelli?", ""],
  ["Voinko pyytää muutoksia myöhemmin?", ""]
];

export default function Page() {
  return (
    <main className="be-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .be-page {
              --wine: #4a1728;
              --wine2: #68233a;
              --rose: #c1657d;
              --dark: #09090b;
              --cream: #f4eee8;
              --muted: rgba(244,238,232,.66);
              --line: rgba(244,238,232,.12);
              position: relative;
              min-height: 100vh;
              overflow-x: hidden;
              background: #09090b;
              color: var(--cream);
              font-family: var(--font-sans), Inter, system-ui, sans-serif;
              isolation: isolate;
            }
            .be-page * { box-sizing: border-box; }
            .be-page::before {
              content: "";
              position: absolute;
              inset: 0;
              z-index: -5;
              background:
                radial-gradient(circle at 68% 8%, rgba(255,255,255,.055), transparent 30%),
                radial-gradient(circle at 15% 18%, rgba(193,101,125,.08), transparent 34%),
                linear-gradient(115deg, #121116 0%, #09090b 58%, #070708 100%);
            }
            .be-page::after {
              content: "";
              position: absolute;
              inset: 0;
              z-index: -3;
              pointer-events: none;
              opacity: .105;
              background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,.45) 1px, transparent 0);
              background-size: 19px 19px;
              mix-blend-mode: soft-light;
            }
            .wine-ribbon {
              position: absolute;
              left: 0;
              top: 0;
              height: 370vh;
              width: 100%;
              z-index: -4;
              pointer-events: none;
              clip-path: polygon(0 0, 52% 0, 24% 100%, 0 100%);
              background:
                radial-gradient(circle at 18% 8%, rgba(255,255,255,.06), transparent 32%),
                linear-gradient(145deg, #64233b 0%, #4a1728 52%, #2a0f1a 100%);
              box-shadow: 24px 0 90px rgba(0,0,0,.42);
            }
            .wine-ribbon::after {
              content: "";
              position: absolute;
              inset: 0;
              opacity: .18;
              background:
                radial-gradient(circle at 30% 20%, rgba(255,255,255,.24), transparent 2px),
                repeating-linear-gradient(84deg, rgba(255,255,255,.025) 0 1px, transparent 1px 9px);
              mix-blend-mode: overlay;
            }
            .serif { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.045em; }
            .wrap { width: min(1440px, calc(100% - 72px)); margin: 0 auto; position: relative; z-index: 2; }
            .header { position: fixed; inset: 0 0 auto; z-index: 50; padding: 28px 0 16px; pointer-events: none; }
            .header::before { content: ""; position: absolute; inset: 0; height: 92px; z-index: -1; background: linear-gradient(to bottom, rgba(9,9,11,.82), rgba(9,9,11,.25), transparent); backdrop-filter: blur(10px); mask-image: linear-gradient(to bottom, black 35%, transparent 100%); }
            .header-inner { width: min(1440px, calc(100% - 72px)); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; pointer-events: auto; }
            .logo { font-family: Georgia, 'Times New Roman', serif; font-size: 32px; letter-spacing: .12em; }
            .nav { display: flex; align-items: center; gap: 42px; color: rgba(244,238,232,.78); font-size: 13px; letter-spacing: .08em; text-transform: uppercase; }
            .nav a:hover { color: white; }
            .button, .ghost, .submit { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 54px; padding: 0 28px; border: 1px solid rgba(193,101,125,.46); background: rgba(92,30,52,.55); color: var(--cream); box-shadow: 0 18px 54px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.08); transition: transform .25s ease, background .25s ease, border-color .25s ease; }
            .ghost { background: rgba(8,8,10,.28); border-color: rgba(244,238,232,.2); }
            .button:hover, .ghost:hover, .submit:hover { transform: translateY(-2px); background: rgba(116,40,66,.72); border-color: rgba(244,238,232,.36); }
            .menu { display: none; }
            .section { position: relative; border-bottom: 1px solid rgba(244,238,232,.07); }
            .hero { min-height: 100svh; display: grid; align-items: center; padding: 126px 0 72px; }
            .hero-grid { display: grid; grid-template-columns: .9fr 1fr; align-items: center; gap: clamp(48px, 6vw, 90px); }
            .eyebrow { color: #e07a93; font-size: 12px; font-weight: 700; letter-spacing: .36em; text-transform: uppercase; }
            .title { margin: 24px 0 0; font-size: clamp(58px, 6.8vw, 105px); line-height: .97; text-shadow: 0 25px 80px rgba(0,0,0,.34); }
            .copy { max-width: 620px; margin-top: 24px; color: var(--muted); font-size: 19px; line-height: 1.7; }
            .actions { display: flex; gap: 22px; flex-wrap: wrap; margin-top: 36px; }
            .points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; margin-top: 54px; max-width: 700px; color: rgba(244,238,232,.76); }
            .point { display: flex; align-items: center; gap: 13px; padding-right: 20px; margin-right: 20px; border-right: 1px solid rgba(244,238,232,.12); font-size: 14px; }
            .point:last-child { border-right: 0; }
            .circle { width: 44px; height: 44px; border: 1px solid rgba(193,101,125,.52); border-radius: 999px; display: grid; place-items: center; color: #d36c86; flex: 0 0 auto; }
            .preview-card { border: 1px solid rgba(244,238,232,.16); background: rgba(12,12,15,.58); box-shadow: 0 34px 110px rgba(0,0,0,.5); backdrop-filter: blur(14px); padding: 52px; min-height: 520px; display: grid; align-content: center; }
            .preview-card .mini { color: #d66b85; letter-spacing: .24em; text-transform: uppercase; font-size: 13px; }
            .preview-card h2 { margin: 28px 0 0; max-width: 620px; font-size: clamp(42px, 4.5vw, 74px); line-height: 1.02; }
            .preview-card p { margin-top: 22px; max-width: 560px; color: var(--muted); font-size: 18px; line-height: 1.7; }
            .stats { margin-top: 54px; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
            .stat { padding: 22px 16px; text-align: center; border-right: 1px solid var(--line); }
            .stat:last-child { border-right: 0; }
            .stat strong { display: block; font-family: Georgia, 'Times New Roman', serif; font-size: 26px; font-weight: 400; }
            .stat span { display: block; margin-top: 5px; color: rgba(244,238,232,.48); font-size: 11px; }
            .content { padding: 108px 0; }
            .two { display: grid; grid-template-columns: .34fr .66fr; gap: 74px; align-items: start; }
            .section-title { margin: 16px 0 0; font-size: clamp(42px, 4.9vw, 76px); line-height: 1.04; }
            .section-copy { margin-top: 22px; max-width: 420px; color: var(--muted); font-size: 17px; line-height: 1.65; }
            .service-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
            .service { min-height: 238px; padding: 24px 26px 16px; border-right: 1px solid var(--line); }
            .service:last-child { border-right: 0; }
            .service-icon { color: #cf657f; font-size: 31px; min-height: 42px; }
            .service h3, .step h3 { margin: 22px 0 0; font-size: 22px; font-weight: 500; }
            .service p, .step p, .price p { color: rgba(244,238,232,.62); line-height: 1.6; font-size: 14px; }
            .link { display: inline-flex; margin-top: 16px; color: #df7992; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; }
            .audience { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
            .card, .price, .faq-row, .info-card, .form { border: 1px solid var(--line); background: rgba(12,12,15,.54); box-shadow: 0 24px 70px rgba(0,0,0,.24); backdrop-filter: blur(12px); }
            .card { min-height: 180px; padding: 30px; }
            .card h3 { margin: 16px 0 0; font-size: 29px; line-height: 1.08; }
            .card p { margin-top: 14px; color: var(--muted); line-height: 1.6; }
            .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
            .step { position: relative; }
            .step-num { width: 56px; height: 56px; border-radius: 999px; border: 1px solid rgba(193,101,125,.58); display: grid; place-items: center; color: #dc718b; margin-bottom: 28px; background: rgba(74,23,40,.25); }
            .step::before { content: ""; position: absolute; top: 28px; left: 70px; right: -12px; height: 1px; border-top: 1px dashed rgba(193,101,125,.34); }
            .step:last-child::before { display: none; }
            .pricing { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
            .price { padding: 34px; text-align: center; }
            .price:nth-child(2) { border-color: rgba(193,101,125,.72); background: linear-gradient(160deg, rgba(84,26,47,.44), rgba(12,12,15,.64)); transform: translateY(-12px); }
            .badge { display: inline-flex; padding: 8px 18px; border: 1px solid rgba(193,101,125,.62); background: rgba(193,101,125,.24); color: #f0b7c6; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 16px; }
            .price h3 { font-size: 34px; margin: 0; }
            .price strong { display: block; margin-top: 18px; color: #d66b85; font-size: 54px; font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
            .price ul { margin: 28px 0 0; padding: 0; list-style: none; text-align: left; display: grid; gap: 12px; color: rgba(244,238,232,.72); }
            .price li::before { content: "✓"; color: #d66b85; margin-right: 12px; }
            .note { margin-top: 28px; text-align: center; color: rgba(244,238,232,.48); }
            .faq { display: grid; gap: 14px; }
            .faq-row { padding: 24px 28px; display: grid; grid-template-columns: 1fr auto; gap: 18px; align-items: center; }
            .faq-row strong { font-family: Georgia, 'Times New Roman', serif; font-size: 23px; font-weight: 400; }
            .faq-row p { grid-column: 1 / -1; color: var(--muted); line-height: 1.65; }
            .plus { color: #d66b85; font-size: 24px; }
            .contact-grid { display: grid; grid-template-columns: .42fr .58fr; gap: 70px; }
            .info { display: grid; gap: 18px; margin-top: 36px; }
            .info-card { display: grid; grid-template-columns: 58px 1fr; gap: 22px; align-items: start; padding: 24px; }
            .info-card h3 { margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 25px; font-weight: 400; }
            .info-card p { margin: 8px 0 0; color: var(--muted); line-height: 1.55; }
            .form { padding: 34px; display: grid; gap: 18px; }
            .form-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
            .field { display: grid; gap: 8px; color: rgba(244,238,232,.82); }
            .input, .textarea { width: 100%; border: 1px solid rgba(244,238,232,.14); background: rgba(0,0,0,.18); color: var(--cream); padding: 16px; outline: none; }
            .input:focus, .textarea:focus { border-color: rgba(193,101,125,.7); }
            .textarea { min-height: 170px; resize: vertical; }
            .submit { width: 100%; border: 0; font-size: 14px; letter-spacing: .13em; text-transform: uppercase; }
            .privacy { text-align: center; color: rgba(244,238,232,.42); font-size: 13px; }
            .footer { padding: 42px 0; border-top: 1px solid var(--line); color: rgba(244,238,232,.58); }
            .footer-grid { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
            .footer-logo { font-family: Georgia, 'Times New Roman', serif; font-size: 30px; letter-spacing: .13em; color: var(--cream); }

            @media (max-width: 1050px) {
              .wrap, .header-inner { width: min(100% - 42px, 760px); }
              .nav, .header .button { display: none; }
              .menu { display: inline-grid; place-items: center; width: 54px; height: 54px; border: 1px solid var(--line); background: rgba(10,10,12,.55); color: var(--cream); font-size: 24px; }
              .wine-ribbon { height: 220vh; clip-path: polygon(0 0, 100% 0, 68% 100%, 0 100%); opacity: .9; }
              .hero { min-height: auto; padding: 118px 0 64px; }
              .hero-grid, .two, .contact-grid { grid-template-columns: 1fr; gap: 44px; }
              .title { font-size: clamp(52px, 14vw, 84px); }
              .copy { font-size: 17px; }
              .actions { flex-direction: column; }
              .button, .ghost { width: 100%; }
              .points { grid-template-columns: 1fr; gap: 14px; }
              .point { border-right: 0; border-bottom: 1px solid rgba(244,238,232,.1); margin-right: 0; padding: 0 0 14px; }
              .preview-card { min-height: auto; padding: 34px; }
              .stats { grid-template-columns: repeat(2, 1fr); }
              .content { padding: 76px 0; }
              .service-grid, .audience, .steps, .pricing, .form-grid { grid-template-columns: 1fr; }
              .service { border-right: 0; border-bottom: 1px solid var(--line); min-height: auto; padding: 28px 0; }
              .step::before { display: none; }
              .price:nth-child(2) { transform: none; }
              .footer-grid { align-items: flex-start; flex-direction: column; }
            }
          `
        }}
      />

      <div className="wine-ribbon" aria-hidden="true" />

      <header className="header">
        <div className="header-inner">
          <a href="#hero" className="logo">NODRA</a>
          <nav className="nav" aria-label="Päänavigaatio">
            <a href="#palvelut">Palvelut</a>
            <a href="#prosessi">Prosessi</a>
            <a href="#hinnat">Hinnat</a>
            <a href="#ukk">UKK</a>
            <a href="#yhteys">Yhteys</a>
          </nav>
          <a className="button" href="#yhteys">Pyydä tarjous <span>→</span></a>
          <a className="menu" href="#yhteys" aria-label="Siirry yhteydenottoon">≡</a>
        </div>
      </header>

      <section id="hero" className="section hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Verkkosivut, jotka toimivat ja näyttävät hyvältä</p>
            <h1 className="serif title">Selkeät verkkosivut pienille yrityksille</h1>
            <p className="copy">Teen moderneja ja mobiiliystävällisiä verkkosivuja yrityksille, jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta helppoa.</p>
            <p className="copy">Ei turhaa monimutkaisuutta — vain siisti sivu, selkeä rakenne ja toimiva yhteydenotto.</p>
            <div className="actions">
              <a className="button" href="#yhteys">Pyydä tarjous <span>→</span></a>
              <a className="ghost" href="#hinnat">Katso hinnat <span>→</span></a>
            </div>
            <div className="points">
              <div className="point"><span className="circle">↯</span>Nopea aloitus</div>
              <div className="point"><span className="circle">☷</span>Selkeä prosessi</div>
              <div className="point"><span className="circle">⌖</span>Etänä koko Suomeen</div>
            </div>
          </div>

          <div className="preview-card">
            <p className="mini">NODRA-toteutus</p>
            <h2 className="serif">Rakenne, joka tekee sivusta selkeän ja luotettavan.</h2>
            <p>Ensimmäinen näkymä ohjaa asiakkaan nopeasti tärkeimpiin asioihin: mitä yritys tekee, miksi siihen voi luottaa ja miten yhteydenotto onnistuu.</p>
            <a className="ghost" href="#palvelut">Tutustu palveluihin →</a>
            <div className="stats">
              <div className="stat"><strong>Selkeä</strong><span>rakenne</span></div>
              <div className="stat"><strong>Nopea</strong><span>käyttökokemus</span></div>
              <div className="stat"><strong>Mobiili</strong><span>ystävällinen</span></div>
              <div className="stat"><strong>Helppo</strong><span>yhteydenotto</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="palvelut" className="section content">
        <div className="wrap two">
          <div>
            <p className="eyebrow">Palvelut</p>
            <h2 className="serif section-title">Kaikki mitä tarvitset, yhdestä paikasta.</h2>
            <p className="section-copy">Selkeä kokonaisuus yritykselle, joka haluaa näyttää luotettavalta verkossa.</p>
          </div>
          <div className="service-grid">
            {services.map(([title, text], index) => (
              <article className="service" key={title}>
                <div className="service-icon">{["▱", "◇", "↻", "✦"][index]}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="link" href="#yhteys">Lue lisää →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kenelle" className="section content">
        <div className="wrap two">
          <div>
            <p className="eyebrow">Kenelle sopii?</p>
            <h2 className="serif section-title">Sivut pienille paikallisille yrityksille.</h2>
            <p className="section-copy">Sopii yrityksille, jotka haluavat selkeät verkkosivut ilman turhaa säätöä.</p>
          </div>
          <div className="audience">
            {audience.map((item) => (
              <article className="card" key={item}>
                <span className="circle">✧</span>
                <h3 className="serif">{item}</h3>
                <p>Esittele palvelusi selkeästi ja tee yhteydenotosta helppoa.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="prosessi" className="section content">
        <div className="wrap two">
          <div>
            <p className="eyebrow">Prosessi</p>
            <h2 className="serif section-title">Selkeä prosessi, sujuva yhteistyö.</h2>
            <p className="section-copy">Tiedät koko ajan mitä tehdään ja missä vaiheessa projekti menee.</p>
          </div>
          <div className="steps">
            {steps.map(([number, title, text]) => (
              <article className="step" key={number}>
                <div className="step-num">{number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="hinnat" className="section content">
        <div className="wrap two">
          <div>
            <p className="eyebrow">Hinnat</p>
            <h2 className="serif section-title">Selkeät hinnat, läpinäkyvästi.</h2>
            <p className="section-copy">Lopullinen hinta riippuu sivujen laajuudesta ja sisällöstä.</p>
          </div>
          <div>
            <div className="pricing">
              {prices.map(([name, price, ...features], index) => (
                <article className="price" key={name}>
                  {index === 1 ? <span className="badge">Suosittu</span> : null}
                  <h3 className="serif">{name}</h3>
                  <strong>alk. {price}</strong>
                  <ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="note">Hinta tarkentuu aina sivujen laajuuden ja tarvittavan sisällön mukaan.</p>
          </div>
        </div>
      </section>

      <section id="ukk" className="section content">
        <div className="wrap two">
          <div>
            <p className="eyebrow">UKK</p>
            <h2 className="serif section-title">Usein kysytyt kysymykset.</h2>
            <p className="section-copy">Vastauksia ennen projektin aloitusta.</p>
          </div>
          <div className="faq">
            {faqs.map(([question, answer], index) => (
              <article className="faq-row" key={question}>
                <strong>{question}</strong>
                <span className="plus">{index === 0 ? "−" : "+"}</span>
                {answer ? <p>{answer}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="yhteys" className="section content">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Yhteys</p>
            <h2 className="serif section-title">Ota yhteyttä, keskustellaan.</h2>
            <p className="section-copy">Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset.</p>
            <div className="info">
              <article className="info-card"><span className="circle">◷</span><div><h3>Vastaan mahdollisimman pian</h3><p>Pyrin vastaamaan kaikkiin viesteihin 24 tunnin kuluessa.</p></div></article>
              <article className="info-card"><span className="circle">⌖</span><div><h3>Etänä koko Suomeen</h3><p>Palvelen asiakkaita joustavasti missä päin Suomea tahansa.</p></div></article>
              <article className="info-card"><span className="circle">✉</span><div><h3>Sähköposti</h3><p>nodra.verkkosivut@gmail.com</p></div></article>
            </div>
          </div>
          <form className="form">
            <div className="form-grid">
              <label className="field">Nimi<input className="input" name="Nimi" aria-label="Nimi" placeholder="Nimesi" required /></label>
              <label className="field">Yritys<input className="input" name="Yritys" aria-label="Yritys" placeholder="Yrityksen nimi" /></label>
              <label className="field">Sähköposti<input className="input" type="email" name="Sähköposti" aria-label="Sähköposti" placeholder="Sähköpostiosoitteesi" required /></label>
              <label className="field">Aihe<input className="input" name="Aihe" aria-label="Aihe" placeholder="Esim. uudet verkkosivut" /></label>
            </div>
            <label className="field">Viesti<textarea className="textarea" name="Viesti" aria-label="Viesti" placeholder="Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset." required /></label>
            <button className="submit" type="submit">Lähetä viesti</button>
            <p className="privacy">Tietosi käsitellään luottamuksellisesti.</p>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-logo">NODRA</div>
          <p>© NODRA 2026. Kaikki oikeudet pidätetään.</p>
          <p><a href="/tietosuojaseloste">Tietosuojaseloste</a></p>
        </div>
      </footer>
    </main>
  );
}
