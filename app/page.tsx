import {
  ArrowRight,
  Check,
  ChevronDown,
  Gauge,
  Mail,
  MapPin,
  Monitor,
  PenLine,
  Rocket,
  Smartphone,
  Tags,
  Users,
  Zap
} from "lucide-react";

const navItems = [
  { label: "Palvelut", href: "#palvelut" },
  { label: "Työt", href: "#tyot" },
  { label: "Hinnoittelu", href: "#hinnoittelu" },
  { label: "Tietoa meistä", href: "#aloitus" },
  { label: "Yhteys", href: "#yhteys" }
];

const services = [
  {
    icon: Monitor,
    title: "Verkkosivut",
    text: "Nopeat, turvalliset ja hakukoneystävälliset verkkosivut, jotka muuntavat kävijät asiakkaiksi."
  },
  {
    icon: PenLine,
    title: "Design",
    text: "Tyylikästä ja toimivaa designia, joka vahvistaa brändiäsi ja parantaa käyttökokemusta."
  },
  {
    icon: Gauge,
    title: "Nopeus",
    text: "Optimoimme suorituskyvyn, jotta sivusi latautuvat nopeasti ja pitävät kävijät sitoutuneina."
  },
  {
    icon: Smartphone,
    title: "Mobiiliystävällisyys",
    text: "Responsiiviset ratkaisut, jotka toimivat saumattomasti kaikilla laitteilla."
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Nopea toteutus",
    text: "Selkeä ja tehokas prosessi, jotta sivusi valmistuvat nopeasti."
  },
  {
    icon: Tags,
    title: "Selkeä hinnoittelu",
    text: "Yksinkertaiset paketit ilman turhaa monimutkaisuutta."
  },
  {
    icon: Monitor,
    title: "Moderni ulkoasu",
    text: "Tyylikäs ja ammattimainen design, joka tekee hyvän ensivaikutelman."
  },
  {
    icon: Users,
    title: "Sopii pienille yrityksille",
    text: "Ratkaisut erityisesti aloittaville ja pienille yrityksille."
  }
];

const steps = [
  {
    number: "1",
    title: "Kartoitus",
    text: "Tutustumme yritykseesi, tavoitteisiin ja kohderyhmääsi."
  },
  {
    number: "2",
    title: "Suunnittelu",
    text: "Suunnittelemme rakenteen ja designin tavoitteet edellä."
  },
  {
    number: "3",
    title: "Toteutus",
    text: "Rakennamme nopeat ja toimivat verkkosivut."
  },
  {
    number: "4",
    title: "Julkaisu",
    text: "Testaamme, julkaisemme ja viimeistelemme sivuston."
  }
];

const packages = [
  {
    name: "Startti",
    price: "249 €",
    featured: false,
    items: [
      "Yhden sivun verkkosivu",
      "4–6 osiota",
      "Mobiiliystävällinen",
      "Yhteydenottopainike"
    ]
  },
  {
    name: "Perus",
    price: "499 €",
    featured: true,
    items: [
      "Laajempi yhden sivun sivusto",
      "Yhteydenottolomake",
      "Selkeä rakenne",
      "Perus SEO"
    ]
  },
  {
    name: "Kasvu",
    price: "899 €",
    featured: false,
    items: [
      "3–5 sivua",
      "Etusivu + alasivut",
      "Parempi rakenne",
      "Julkaisun jälkeiset pienet korjaukset"
    ]
  }
];

const faqs = [
  "Kuinka kauan verkkosivuprojekti kestää?",
  "Sisältyykö sivuihin hakukoneoptimointi (SEO)?",
  "Mitä tarvitsette projektin alussa?",
  "Voinko päivittää sivuja itse julkaisun jälkeen?",
  "Tarjoatteko ylläpitoa ja tukea julkaisun jälkeen?",
  "Miten hinnoittelu määräytyy?"
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b48a6e]">
      {children}
    </p>
  );
}

function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0706] text-[#f4eee9]">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(94,75,67,0.55), transparent 28%), radial-gradient(circle at 90% 18%, rgba(180,138,110,0.18), transparent 28%), linear-gradient(180deg, #0b0706 0%, #130c09 42%, #0b0706 100%)"
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0706]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#" className="text-2xl tracking-[0.42em] text-[#f6eee7]">
            NODRA
          </a>

          <nav className="hidden items-center gap-9 text-sm text-[#d8cbc2] md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#yhteys"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#5e4b43]/70 px-5 py-3 text-sm text-white shadow-lg transition hover:bg-[#7a6257]"
          >
            Pyydä tarjous
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-[1fr_1.05fr] md:px-10 md:pb-20 md:pt-20">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfa18f]">
            Moderneja verkkosivustoja, jotka tuovat tuloksia
          </div>

          <h1 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-[#f3e7df] md:text-7xl">
            Modernit verkkosivut yrityksellesi, jotka tuottavat tuloksia.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#cdbdb3]">
            NODRA suunnittelee ja toteuttaa nopeat, kauniit ja käyttäjäystävälliset verkkosivut,
            jotka vahvistavat brändiäsi ja kasvattavat liiketoimintaasi.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#yhteys"
              className="inline-flex items-center gap-3 rounded-full bg-[#b78b6f] px-6 py-4 text-sm font-semibold text-[#1b100d] transition hover:bg-[#d0a184]"
            >
              Pyydä tarjous
              <ArrowRight size={17} />
            </a>

            <a
              href="#hinnoittelu"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-[#f5eee8] transition hover:bg-white/10"
            >
              Katso hinnat
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-5 text-xs text-[#bca99d]">
            {["Nopea aloitus", "Selkeä hinta", "Kotimainen tekijä"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check size={15} className="text-[#b78b6f]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[360px]">
          <div className="absolute right-0 top-10 h-64 w-64 rounded-full bg-[#5e4b43]/30 blur-3xl" />

          <div className="relative ml-auto max-w-2xl rotate-[-3deg] rounded-[2rem] border border-white/15 bg-[#18100d] p-3 shadow-[0_50px_120px_rgba(0,0,0,0.65)]">
            <div className="rounded-[1.45rem] border border-white/10 bg-[#0d0807] p-8">
              <div className="mb-16 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#d8c8bd]">
                <span>AURUM</span>
                <div className="hidden gap-5 md:flex">
                  <span>Palvelut</span>
                  <span>Työt</span>
                  <span>Tietoa</span>
                  <span>Yhteys</span>
                </div>
              </div>

              <div className="grid items-end gap-8 md:grid-cols-2">
                <div>
                  <h2 className="font-serif text-3xl leading-tight text-[#f3e8df]">
                    Luomme digitaalista elämystä, joka erottuu.
                  </h2>
                  <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-[#d7c8bf]">
                    Tutustu työhömme
                    <ArrowRight size={13} />
                  </button>
                </div>

                <div className="relative h-44">
                  <div className="absolute bottom-0 right-2 h-28 w-36 rounded-xl bg-gradient-to-br from-[#5e4b43] to-[#1a100d] shadow-2xl" />
                  <div className="absolute bottom-8 right-16 h-28 w-36 rounded-xl bg-gradient-to-br from-[#3b2923] to-[#120b09] shadow-2xl" />
                </div>
              </div>
            </div>

            <div className="mx-auto h-5 w-[78%] rounded-b-3xl bg-[#3a302d]" />
          </div>

          <div className="absolute bottom-0 right-4 h-24 w-[85%] rounded-[50%] bg-[#5e4b43]/25 blur-2xl" />
        </div>
      </section>

      <section id="palvelut" className="border-y border-white/10 bg-[#120c0a]/70 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Palvelumme</SectionLabel>
          <h2 className="text-center font-serif text-3xl tracking-[-0.03em] text-[#f0e4dc] md:text-5xl">
            Kokonaisvaltaista suunnittelua ja toteutusta
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title} className="p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                  <Icon size={30} strokeWidth={1.5} className="mb-8 text-[#b78b6f]" />
                  <h3 className="font-serif text-2xl text-[#f4e9e1]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c3b2a7]">{service.text}</p>
                  <a href="#yhteys" className="mt-6 inline-flex items-center gap-2 text-sm text-[#caa38d]">
                    Lue lisää
                    <ArrowRight size={14} />
                  </a>
                </Card>
              );
            })}
          </div>

          <SectionLabel>Miksi valita NODRA?</SectionLabel>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <Card key={benefit.title} className="p-7">
                  <Icon size={30} strokeWidth={1.5} className="mb-6 text-[#b78b6f]" />
                  <h3 className="font-serif text-2xl text-[#f4e9e1]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c3b2a7]">{benefit.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tyot" className="px-5 py-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Näin projekti etenee</SectionLabel>

          <div className="grid gap-6 border-y border-white/10 py-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute right-[-16px] top-5 hidden text-[#9f7a64] md:block">
                    <ArrowRight size={18} />
                  </div>
                )}

                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#5e4b43] text-sm font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="font-serif text-2xl text-[#f4e9e1]">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-48 text-sm leading-6 text-[#bca99d]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hinnoittelu" className="px-5 pb-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Hinnoittelu</SectionLabel>
          <h2 className="text-center font-serif text-3xl tracking-[-0.03em] text-[#f0e4dc] md:text-5xl">
            Läpinäkyvät paketit yrityksesi tarpeisiin
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((item) => (
              <Card
                key={item.name}
                className={`relative p-8 ${
                  item.featured
                    ? "border-[#b78b6f]/70 bg-[#3a2923]/70 shadow-[0_30px_100px_rgba(183,139,111,0.16)]"
                    : ""
                }`}
              >
                {item.featured && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b78b6f] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1b100d]">
                    Suosituin
                  </div>
                )}

                <h3 className="font-serif text-2xl text-[#f4e9e1]">{item.name}</h3>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-serif text-5xl text-[#f3e7df]">{item.price}</span>
                  <span className="pb-2 text-sm text-[#bca99d]">alkaen</span>
                </div>

                <ul className="mt-7 space-y-3 text-sm text-[#d1c0b5]">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#b78b6f]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#yhteys"
                  className={`mt-8 flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition ${
                    item.featured
                      ? "bg-[#b78b6f] text-[#1b100d] hover:bg-[#d0a184]"
                      : "text-[#f4e9e1] hover:bg-white/10"
                  }`}
                >
                  Pyydä tarjous
                </a>
              </Card>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-[#bca99d]">
            Kaikki paketit räätälöidään tarpeidesi mukaan.
          </p>
        </div>
      </section>

      <section id="aloitus" className="px-5 pb-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Card className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b48a6e]">
                Ensimmäisille asiakkaille
              </p>
              <h2 className="font-serif text-3xl tracking-[-0.03em] text-[#f0e4dc] md:text-5xl">
                Aloitushintaan ensimmäisille asiakkaille
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-[#cdbdb3]">
                NODRA tarjoaa ensimmäisille asiakkaille modernit verkkosivut edullisemmin,
                koska rakennamme samalla ensimmäisiä referenssejämme. Saat tyylikkään ja toimivan
                sivuston selkeällä prosessilla ja rehellisellä hinnalla.
              </p>
            </div>

            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#b78b6f]/50 bg-[#2e1f1b] text-center">
              <div>
                <Rocket className="mx-auto mb-2 text-[#b78b6f]" size={30} strokeWidth={1.4} />
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f1dfd4]">
                  Aloitus
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b48a6e]">
            Usein kysytyt kysymykset
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm text-[#e6d8cf]"
              >
                {faq}
                <ChevronDown size={17} className="text-[#b78b6f]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="yhteys" className="border-y border-white/10 bg-[#1a100d]/80 px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-[#f0e4dc] md:text-5xl">
              Valmis viemään yrityksesi verkkopresenssin uudelle tasolle?
            </h2>
            <p className="mt-4 text-[#cdbdb3]">
              Ota yhteyttä, niin katsotaan miten voimme auttaa.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#d0c0b6]">
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-[#b78b6f]" />
                nodra.verkkosivut@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <Check size={18} className="text-[#b78b6f]" />
                Vastaamme yleensä 1–2 päivän sisällä
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-[#b78b6f]" />
                Pihtipudas, Suomi
              </p>
            </div>
          </div>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-4"
          >
            <input type="hidden" name="access_key" value="de5e3d6d-e641-404c-8a9d-5bb1f5f88cd7" />
            <input type="hidden" name="subject" value="Uusi yhteydenotto NODRA-sivulta" />
            <input type="hidden" name="from_name" value="NODRA verkkosivut" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" required className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4 text-sm outline-none placeholder:text-[#8f7f76] focus:border-[#b78b6f]" placeholder="Nimi" />
              <input name="email" type="email" required className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4 text-sm outline-none placeholder:text-[#8f7f76] focus:border-[#b78b6f]" placeholder="Sähköposti" />
              <input name="phone" className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4 text-sm outline-none placeholder:text-[#8f7f76] focus:border-[#b78b6f]" placeholder="Puhelin" />
              <input name="company" className="rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4 text-sm outline-none placeholder:text-[#8f7f76] focus:border-[#b78b6f]" placeholder="Yritys" />
            </div>

            <textarea
              name="message"
              required
              className="min-h-32 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-4 text-sm outline-none placeholder:text-[#8f7f76] focus:border-[#b78b6f]"
              placeholder="Kerro lyhyesti projektistasi ja tavoitteistasi"
            />

            <button type="submit" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#b78b6f] px-8 py-4 text-sm font-semibold text-[#1b100d] transition hover:bg-[#d0a184]">
              Lähetä viesti
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </section>

      <footer className="px-5 py-10 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div>
            <div className="text-2xl tracking-[0.42em] text-[#f6eee7]">NODRA</div>
            <p className="mt-4 text-sm leading-6 text-[#bca99d]">
              Modernit ja tehokkaat verkkosivut yrityksille, jotka haluavat kasvaa.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b48a6e]">
              Palvelut
            </h3>
            <ul className="space-y-2 text-sm text-[#cdbdb3]">
              <li>Verkkosivut</li>
              <li>Design</li>
              <li>Nopeus</li>
              <li>Mobiiliystävällisyys</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b48a6e]">
              Yritys
            </h3>
            <ul className="space-y-2 text-sm text-[#cdbdb3]">
              <li>Tietoa meistä</li>
              <li>Työt</li>
              <li>Hinnoittelu</li>
              <li>Yhteys</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#b48a6e]">
              Yhteystiedot
            </h3>
            <ul className="space-y-2 text-sm text-[#cdbdb3]">
              <li>nodra.verkkosivut@gmail.com</li>
              <li>Vastaamme yleensä 1–2 päivän sisällä</li>
              <li>Pihtipudas, Suomi</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 pt-6 text-xs text-[#8f7f76] md:flex-row">
          <p>© 2024 NODRA Oy. Kaikki oikeudet pidätetään.</p>
          <div className="flex gap-6">
            <span>Tietosuojaseloste</span>
            <span>Evästeasetukset</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
