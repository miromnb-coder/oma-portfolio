import {
  ArrowRight,
  CheckCircle2,
  Hammer,
  Home,
  Mail,
  MapPin,
  ShieldCheck,
  Zap
} from "lucide-react";

const navItems = ["Palvelut", "Prosessi", "Hinnat", "UKK", "Yhteys"];

const previewServices = [
  {
    icon: Home,
    title: "Rakennuspalvelut",
    text: "Uudisrakentaminen ja laajennukset."
  },
  {
    icon: ShieldCheck,
    title: "Terassit ja pihat",
    text: "Terassit, aidat ja pihatyöt ammattitaidolla."
  },
  {
    icon: Hammer,
    title: "Remontit",
    text: "Keittiö-, kylpyhuone- ja sisäremontit."
  },
  {
    icon: Mail,
    title: "Yhteydenotto",
    text: "Ota yhteyttä ja pyydä tarjous helposti."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#1d1d1c] text-white">
      <section className="relative min-h-screen p-4 md:p-8">
        <div className="relative mx-auto min-h-[calc(100vh-2rem)] max-w-[1500px] overflow-hidden rounded-sm shadow-[0_35px_90px_rgba(0,0,0,0.45)] md:min-h-[calc(100vh-4rem)]">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#f3981f]" />
            <div className="bg-[#242423]" />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_78%_16%,rgba(255,255,255,0.04),transparent_28%)]" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 flex min-h-[calc(100vh-2rem)] flex-col md:min-h-[calc(100vh-4rem)]">
            <header className="flex items-center justify-between px-6 py-6 md:px-14 lg:px-20">
              <a href="#" className="text-2xl tracking-[0.45em] text-white md:text-3xl">
                NODRA
              </a>

              <nav className="hidden items-center gap-8 text-sm text-white/90 lg:flex">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-white">
                    {item}
                  </a>
                ))}
              </nav>

              <a
                href="#"
                className="rounded-xl bg-[#f0c099] px-5 py-3 text-sm font-semibold text-[#191614] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#f5cfad]"
              >
                Pyydä tarjous
              </a>
            </header>

            <div className="grid flex-1 items-center gap-10 px-6 pb-12 pt-6 md:grid-cols-2 md:px-14 lg:px-20">
              <div className="max-w-2xl">
                <p className="mb-6 text-xs font-bold uppercase tracking-[0.16em] text-[#1a1510] md:text-sm">
                  Verkkosivut, jotka toimivat ja näyttävät hyvältä.
                </p>

                <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.055em] text-[#fff5e8] md:text-7xl lg:text-8xl">
                  Selkeät verkkosivut pienille yrityksille
                </h1>

                <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[#1d1712] md:text-lg">
                  <p>
                    Teen moderneja ja mobiiliystävällisiä verkkosivuja yrityksille,
                    jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta
                    helppoa.
                  </p>

                  <p>
                    Ei turhaa monimutkaisuutta — vain siisti sivu, selkeä rakenne
                    ja toimiva yhteydenotto.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-3 rounded-xl bg-[#202020] px-7 py-4 text-base font-semibold text-white shadow-[0_16px_35px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#121212]"
                  >
                    Pyydä tarjous
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center rounded-xl border border-[#1c1712]/70 px-7 py-4 text-base font-semibold text-[#17120e] transition hover:-translate-y-0.5 hover:bg-[#1c1712]/10"
                  >
                    Katso hinnat
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap gap-5 text-sm font-medium text-[#17120e]">
                  <span className="inline-flex items-center gap-2">
                    <Zap size={19} />
                    Nopea aloitus
                  </span>
                  <span className="hidden h-6 w-px bg-[#17120e]/25 sm:block" />
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 size={19} />
                    Selkeä prosessi
                  </span>
                  <span className="hidden h-6 w-px bg-[#17120e]/25 sm:block" />
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={19} />
                    Etänä koko Suomeen
                  </span>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[660px] overflow-hidden rounded-2xl border border-white/15 bg-[#0f0f0f] shadow-[0_35px_95px_rgba(0,0,0,0.55)]">
                  <div className="flex items-center gap-3 border-b border-white/10 bg-[#1b1b1b] px-5 py-3">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>

                    <div className="mx-auto hidden w-72 rounded-full bg-white/10 px-4 py-1.5 text-center text-xs text-white/75 sm:block">
                      🔒 puuhaus.fi
                    </div>

                    <span className="text-xl text-white/70">+</span>
                  </div>

                  <div className="bg-[#111]">
                    <div className="flex items-center justify-between px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Home size={28} className="text-white" />
                        <span className="font-serif text-2xl tracking-wide text-white">
                          PUUHAUS OY
                        </span>
                      </div>

                      <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
                        <span>Palvelut</span>
                        <span>Referenssit</span>
                        <span>Tietoa meistä</span>
                        <button className="rounded-lg bg-[#f3dfc9] px-4 py-2 font-semibold text-[#15120f]">
                          Ota yhteyttä
                        </button>
                      </div>
                    </div>

                    <div className="relative min-h-[360px] overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.18)),url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center" />

                      <div className="relative z-10 max-w-[420px] px-7 py-16 md:px-10">
                        <h2 className="font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-white md:text-5xl">
                          Luotettavaa rakentamista pienille ja suurille kohteille.
                        </h2>

                        <a
                          href="#"
                          className="mt-7 inline-flex rounded-lg bg-[#f0c099] px-6 py-3 text-sm font-semibold text-[#17120e]"
                        >
                          Ota yhteyttä
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-px bg-[#d8c8b5] md:grid-cols-4">
                      {previewServices.map((service) => {
                        const Icon = service.icon;

                        return (
                          <div key={service.title} className="bg-[#f4ecdf] px-5 py-7 text-center text-[#17120e]">
                            <Icon size={34} strokeWidth={1.6} className="mx-auto mb-4" />
                            <h3 className="text-sm font-bold">{service.title}</h3>
                            <p className="mt-2 text-xs leading-5 text-[#3a332c]">
                              {service.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </section>
    </main>
  );
}
