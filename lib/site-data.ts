export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  accent: "cafe" | "studio" | "build";
};

export const site = {
  name: "NODRA",
  tagline: "Verkkosivustoja, jotka toimivat",
  headline: "NODRA",
  subtitle: "Nettisivuja yrityksille",
  supportingText: "Modern websites for businesses",
  primaryCta: "Pyydä tarjous",
  secondaryCta: "Katso työt"
};

export const navItems: NavItem[] = [
  { label: "Palvelut", href: "#palvelut" },
  { label: "Työt", href: "#tyot" },
  { label: "Yhteys", href: "#yhteys" }
];

export const socialLinks = [
  { label: "Fb", href: "#" },
  { label: "Ig", href: "#" },
  { label: "In", href: "#" }
];

export const projects: Project[] = [
  {
    name: "Aurora Cafe",
    category: "Kahvila & ravintola",
    title: "Hyvää kahvia, joka päivä.",
    description: "Tunnelmallinen sivusto kahvilalle, jossa tärkeimmät asiat löytyvät heti.",
    cta: "Tutustu meihin",
    href: "#yhteys",
    accent: "cafe"
  },
  {
    name: "Lumi Studio",
    category: "Kauneushoitola",
    title: "Kauneutta joka päivä.",
    description: "Premium-ilme ajanvaraukseen keskittyvälle kauneusalan yritykselle.",
    cta: "Varaa aika",
    href: "#yhteys",
    accent: "studio"
  },
  {
    name: "Nordic Build",
    category: "Rakennusala",
    title: "Rakennamme luotettavaa tulevaisuutta.",
    description: "Selkeä ja uskottava yrityssivu palveluille, referensseille ja yhteydenotoille.",
    cta: "Lue lisää",
    href: "#yhteys",
    accent: "build"
  }
];

export const contact = {
  eyebrow: "Aloitetaan projekti",
  title: "Ota yhteyttä",
  copy: "Autamme yritystäsi erottumaan ja menestymään verkossa. Suunnitellaan yhdessä verkkosivusto, joka tukee tavoitteitasi ja kasvattaa liiketoimintaasi.",
  email: "hello@nodra.fi",
  phone: "040 123 4567",
  location: "Helsinki, Suomi"
};
