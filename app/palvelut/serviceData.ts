export type ServicePage = {
  slug: string;
  title: string;
  intro: string;
  description: string;
  points: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "yhden-sivun-nettisivu",
    title: "Yhden sivun nettisivu",
    intro: "Selkeä ja tehokas ratkaisu yritykselle, joka haluaa hyvän ensivaikutelman nopeasti.",
    description:
      "Yhden sivun nettisivu sopii yritykselle, joka tarvitsee helposti ymmärrettävän sivun palveluiden, yhteystietojen ja tärkeimpien hyötyjen esittelyyn. Sivun tavoite on tehdä yrityksestä uskottava ja ohjata asiakas ottamaan yhteyttä.",
    points: [
      "Selkeä etusivu yrityksesi palveluille",
      "Mobiiliystävällinen toteutus",
      "Yhteydenottolomake tai selkeä yhteydenottopainike",
      "Hyvä valinta aloittavalle tai pienelle yritykselle",
    ],
  },
  {
    slug: "yrityssivusto",
    title: "Yrityssivusto",
    intro: "Useamman sivun kokonaisuus yritykselle, joka haluaa esitellä palvelut ja yrityksen kunnolla.",
    description:
      "Yrityssivusto sopii silloin, kun yhdelle sivulle ei mahdu kaikki tärkeä. Sivustolle voidaan rakentaa esimerkiksi etusivu, palvelusivut, minusta- tai yritysesittely, hinnasto ja yhteydenotto.",
    points: [
      "Useampi sivu yrityksesi tarpeiden mukaan",
      "Selkeä rakenne ja navigaatio",
      "Yrityksen palveluiden parempi esittely",
      "Ammattimainen kokonaisuus kasvavalle yritykselle",
    ],
  },
  {
    slug: "sivuston-uudistus",
    title: "Sivuston uudistus",
    intro: "Vanhan sivuston päivittäminen modernimmaksi, selkeämmäksi ja paremmin toimivaksi.",
    description:
      "Sivuston uudistus sopii yritykselle, jolla on jo nettisivut, mutta ne eivät enää näytä ajankohtaisilta tai eivät toimi hyvin puhelimella. Uudistuksessa voidaan parantaa ulkoasua, rakennetta ja yhteydenottoihin ohjaamista.",
    points: [
      "Modernimpi visuaalinen ilme",
      "Selkeämpi rakenne ja tekstit",
      "Parempi mobiilikäyttö",
      "Vanhan sivuston tärkeimmät tiedot siististi uuteen muotoon",
    ],
  },
  {
    slug: "yllapito",
    title: "Ylläpito",
    intro: "Apua sivuston päivityksiin ja pieniin muutoksiin myös julkaisun jälkeen.",
    description:
      "Ylläpito sopii yritykselle, joka haluaa pitää sivuston ajan tasalla ilman omaa säätöä. Ylläpito voi sisältää pieniä tekstimuutoksia, kuvien vaihtoa, teknisiä tarkistuksia ja muuta jatkuvaa huolenpitoa.",
    points: [
      "Pienet muutokset ja päivitykset",
      "Sivuston sisällön pitäminen ajan tasalla",
      "Tekninen huolenpito tarpeen mukaan",
      "Hyvä lisä valmiin sivuston jälkeen",
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
