import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Rekisterinpitäjä",
    text: [
      "NODRA",
      "Pihtipudas, Suomi",
      "Sähköposti: nodra.verkkosivut@gmail.com"
    ]
  },
  {
    title: "2. Mitä tietoja keräämme?",
    text: [
      "Keräämme yhteydenottolomakkeen kautta vain ne tiedot, jotka käyttäjä itse lähettää.",
      "Näitä tietoja voivat olla nimi, sähköpostiosoite, puhelinnumero, yrityksen nimi ja viestin sisältö. Puhelinnumero ja yrityksen nimi ovat vapaaehtoisia tietoja."
    ]
  },
  {
    title: "3. Mihin tietoja käytetään?",
    text: [
      "Tietoja käytetään yhteydenottoihin vastaamiseen, tarjouspyyntöjen käsittelyyn ja mahdollisen verkkosivuprojektin suunnitteluun.",
      "Tietoja ei käytetä uutiskirjeisiin tai markkinointiin ilman erillistä lupaa."
    ]
  },
  {
    title: "4. Käsittelyn oikeusperuste",
    text: [
      "Tietojen käsittely perustuu yhteydenottajan pyyntöön ja oikeutettuun etuun vastata yhteydenottoon sekä hoitaa mahdollista asiakassuhdetta."
    ]
  },
  {
    title: "5. Lomakkeen tekninen välittäjä",
    text: [
      "Yhteydenottolomakkeen teknisenä välittäjänä toimii Web3Forms. Lomakkeen kautta lähetetyt tiedot välitetään NODRA:n sähköpostiin.",
      "Sähköpostipalveluna käytetään Gmailia, joten viestit voivat käsitellä myös Googlen palveluissa."
    ]
  },
  {
    title: "6. Tietojen säilytys",
    text: [
      "Tietoja säilytetään vain niin kauan kuin yhteydenoton käsittely, tarjouspyyntö tai mahdollinen asiakassuhde sitä edellyttää.",
      "Tarpeettomat viestit poistetaan kohtuullisen ajan kuluessa."
    ]
  },
  {
    title: "7. Tietojen luovutus",
    text: [
      "Tietoja ei myydä eikä luovuteta ulkopuolisille markkinointitarkoituksiin.",
      "Tietoja voidaan käsitellä teknisten palveluntarjoajien, kuten Web3Formsin ja sähköpostipalvelun, kautta yhteydenottojen välittämistä varten."
    ]
  },
  {
    title: "8. Rekisteröidyn oikeudet",
    text: [
      "Voit pyytää omien tietojesi tarkistamista, korjaamista tai poistamista ottamalla yhteyttä sähköpostitse.",
      "Yhteydenotot tietosuoja-asioissa: nodra.verkkosivut@gmail.com"
    ]
  },
  {
    title: "9. Evästeet ja seuranta",
    text: [
      "Sivustolla ei tällä hetkellä käytetä analytiikkaa, mainosseurantaa tai markkinointievästeitä.",
      "Jos sivustolle lisätään myöhemmin analytiikkaa tai seurantaa, tietosuojaselostetta päivitetään."
    ]
  },
  {
    title: "10. Päivitetty",
    text: ["Tämä tietosuojaseloste on päivitetty vuonna 2026."]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0b0706] px-5 py-10 text-[#f4eee9] md:px-10 md:py-16">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(94,75,67,0.55), transparent 28%), radial-gradient(circle at 90% 18%, rgba(180,138,110,0.18), transparent 28%), linear-gradient(180deg, #0b0706 0%, #130c09 42%, #0b0706 100%)"
        }}
      />

      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm text-[#d8cbc2] transition hover:border-[#b78b6f]/50 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={16} />
          Takaisin etusivulle
        </a>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-7 md:p-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b48a6e]">
            NODRA
          </p>
          <h1 className="break-words font-serif text-[2.35rem] leading-[1.05] tracking-[-0.05em] text-[#f3e7df] sm:text-5xl md:text-7xl">
            Tietosuojaseloste
          </h1>
          <p className="mt-5 text-base leading-7 text-[#cdbdb3]">
            Tässä selosteessa kerrotaan, miten NODRA käsittelee yhteydenottolomakkeen kautta lähetettyjä henkilötietoja.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl md:p-8"
            >
              <h2 className="font-serif text-2xl text-[#f4e9e1] md:text-3xl">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[#cdbdb3] md:text-base">
                {section.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
