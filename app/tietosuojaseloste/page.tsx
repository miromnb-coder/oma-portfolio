import Link from "next/link";

export const metadata = {
  title: "Tietosuojaseloste — NODRA",
  description: "NODRAn tietosuojaseloste yhteydenottolomakkeen tietojen käsittelystä.",
};

export default function PrivacyPage() {
  return (
    <main className="site-shell">
      <section className="subpage-section">
        <div className="container subpage-container">
          <Link className="back-link" href="/">
            ← Takaisin etusivulle
          </Link>

          <div className="subpage-card privacy-card">
            <p className="section-label">Tietosuoja</p>
            <h1>Tietosuojaseloste</h1>
            <p className="subpage-lead">
              Tässä kerrotaan lyhyesti, miten NODRA käsittelee yhteydenottolomakkeen kautta lähetettyjä tietoja.
            </p>

            <h2>Mitä tietoja kerätään?</h2>
            <p>
              Yhteydenottolomakkeella voidaan kerätä nimi, yrityksen nimi, sähköpostiosoite ja viestissä annetut tiedot.
            </p>

            <h2>Mihin tietoja käytetään?</h2>
            <p>
              Tietoja käytetään yhteydenottoon vastaamiseen, tarjouspyyntöjen käsittelyyn ja mahdollisen asiakassuhteen hoitamiseen.
            </p>

            <h2>Miten lomake toimii?</h2>
            <p>
              Lomakkeen lähetys välitetään Web3Forms-palvelun kautta, jotta viesti voidaan toimittaa NODRAlle sähköpostitse.
            </p>

            <h2>Tietojen säilytys</h2>
            <p>
              Tietoja säilytetään vain niin kauan kuin se on tarpeellista yhteydenoton käsittelemiseksi tai asiakassuhteen hoitamiseksi.
            </p>

            <h2>Oikeutesi</h2>
            <p>
              Voit pyytää sinua koskevien tietojen tarkistamista, korjaamista tai poistamista ottamalla yhteyttä NODRAan.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
