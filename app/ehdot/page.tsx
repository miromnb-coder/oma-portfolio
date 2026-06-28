import Link from "next/link";

export const metadata = {
  title: "Ehdot — NODRA",
  description: "NODRAn yleiset ehdot verkkosivuprojekteille ja yhteydenotoille.",
};

export default function TermsPage() {
  return (
    <main className="site-shell">
      <section className="subpage-section">
        <div className="container subpage-container">
          <Link className="back-link" href="/">
            ← Takaisin etusivulle
          </Link>

          <div className="subpage-card privacy-card">
            <p className="section-label">Ehdot</p>
            <h1>Yleiset ehdot</h1>
            <p className="subpage-lead">
              Tässä kerrotaan lyhyesti NODRAn verkkosivuprojektien yleisistä käytännöistä. Tarkemmat ehdot sovitaan aina projektikohtaisesti.
            </p>

            <h2>Tarjous ja aloitus</h2>
            <p>
              Projekti käynnistyy, kun työn sisältö, aikataulu ja hinta on sovittu. Tarjous perustuu asiakkaan antamiin tietoihin ja projektin arvioituun laajuuteen.
            </p>

            <h2>Sisällöt ja materiaalit</h2>
            <p>
              Asiakas vastaa toimittamiensa tekstien, kuvien, logojen ja muiden materiaalien oikeellisuudesta sekä käyttöoikeuksista.
            </p>

            <h2>Muutokset</h2>
            <p>
              Sovittuun kokonaisuuteen sisältyvät muutokset määritellään projektin alussa. Laajemmat lisätyöt voidaan hinnoitella erikseen.
            </p>

            <h2>Julkaisu</h2>
            <p>
              Sivusto julkaistaan, kun asiakas on hyväksynyt lopputuloksen ja tarvittavat sisällöt ovat valmiina.
            </p>

            <h2>Ylläpito</h2>
            <p>
              Julkaisun jälkeinen ylläpito, päivitykset ja jatkokehitys sovitaan erikseen valitun palvelun mukaan.
            </p>

            <h2>Yhteys</h2>
            <p>
              Kysymyksissä voit ottaa yhteyttä: <a href="mailto:nodra.verkkosivut@gmail.com">nodra.verkkosivut@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
