export type NavItem = { label: string; href: string };

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: "monitor" | "target" | "pen" | "rocket";
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

export type ProcessStep = { number: string; title: string; description: string };
export type ValuePoint = { title: string; description: string; icon: "structure" | "design" | "speed" };

export const site = {
  name: "NODRA",
  tagline: "Verkkosivustoja, jotka tuntuvat laadukkailta",
  headline: "NODRA",
  subtitle: "Modernit verkkosivut yrityksille, jotka haluavat näyttää paremmilta ja saada enemmän asiakkaita.",
  supportingText: "Suunnittelu, toteutus ja julkaisu yhdestä paikasta.",
  primaryCta: "Pyydä tarjous",
  secondaryCta: "Katso työt"
};

export const navItems: NavItem[] = [
  { label: "Palvelut", href: "#palvelut" },
  { label: "Työt", href: "#tyot" },
  { label: "Prosessi", href: "#prosessi" },
  { label: "Yhteys", href: "#yhteys" }
];

export const heroProof = ["Nopeat sivut", "Mobiilioptimoitu", "Premium design", "Valmis julkaisuun"];

export const socialLinks = [
  { label: "Fb", href: "#" },
  { label: "Ig", href: "#" },
  { label: "In", href: "#" }
];

export const services: Service[] = [
  { number: "01", title: "Yrityssivut", description: "Ammattimaiset ja nopeat yrityssivut, jotka vahvistavat brändiäsi.", icon: "monitor" },
  { number: "02", title: "Landing paget", description: "Konversioon suunnitellut sivut kampanjoille ja palveluille.", icon: "target" },
  { number: "03", title: "Brändi & UI", description: "Visuaalinen ilme ja käyttöliittymä, jotka tekevät vaikutuksen.", icon: "pen" },
  { number: "04", title: "Julkaisu & optimointi", description: "Sivuston julkaisu, nopeusoptimointi ja viimeistely käyttöön.", icon: "rocket" }
];

export const projects: Project[] = [
  { name: "Aurora Cafe", category: "Ravintola & kahvila", title: "Lämmin ja tunnelmallinen sivusto kahvilalle.", description: "Brändiä tukeva sivu, jossa menu, tarina ja yhteydenotto löytyvät nopeasti.", cta: "Katso projekti", href: "#yhteys", accent: "cafe" },
  { name: "Lumi Studio", category: "Kauneus & wellness", title: "Elegantti verkkosivusto premium-hoitolalle.", description: "Rauhallinen käyttöliittymä palveluille ja ajanvaraukselle.", cta: "Katso projekti", href: "#yhteys", accent: "studio" },
  { name: "Nordic Build", category: "Rakennus & arkkitehtuuri", title: "Luotettava yrityssivu rakennusalalle.", description: "Selkeä rakenne palveluille, referensseille ja yhteydenotoille.", cta: "Katso projekti", href: "#yhteys", accent: "build" }
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Kartoitus", description: "Kartoitamme tavoitteet, kohdeyleisön ja projektin laajuuden." },
  { number: "02", title: "Suunnittelu", description: "Luomme rakenteen, visuaalisen ilmeen ja prototyypin." },
  { number: "03", title: "Toteutus", description: "Rakennamme nopean ja responsiivisen sivuston." },
  { number: "04", title: "Julkaisu", description: "Julkaisemme sivuston ja viimeistelemme sen käyttöön." }
];

export const whyNodra = {
  eyebrow: "Miksi NODRA",
  title: "Hyvä verkkosivu ei ole vain ulkonäköä.",
  copy: "Se on yrityksesi tärkeä myyntikanava. Rakennamme sivustoja, jotka herättävät luottamusta, toimivat nopeasti ja tekevät yhteydenoton helpoksi."
};

export const valuePoints: ValuePoint[] = [
  { title: "Selkeä rakenne", description: "Sivut ohjaavat kävijän oikeaan toimintaan.", icon: "structure" },
  { title: "Laadukas visuaalinen ilme", description: "Brändiä tukeva design, joka jättää muistijäljen.", icon: "design" },
  { title: "Nopea ja mobiiliystävällinen toteutus", description: "Sivusto toimii hyvin kaikilla laitteilla.", icon: "speed" }
];

export const contact = {
  eyebrow: "Ota yhteyttä",
  title: "Valmis nostamaan yrityksesi ilmeen uudelle tasolle?",
  copy: "Kerro lyhyesti millaisen sivuston tarvitset. Saat selkeän ehdotuksen projektin toteutuksesta.",
  email: "hello@nodra.fi",
  phone: "040 123 4567",
  location: "Helsinki, Suomi"
};
