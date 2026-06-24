const clients = ["LUOTO", "HELSINKI COFFEE", "NORDIC BALANCE", "ARKTA", "VALO"];

const features = [
  "Nopea aloitus",
  "Selkeä prosessi",
  "Etänä koko Suomeen"
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0c10] text-[#f6f0ea]">
      <section className="relative min-h-[100svh] overflow-hidden px-6 py-7 sm:px-10 lg:px-16 xl:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(120deg,#111014_0%,#0b0b0f_58%,#120d12_100%)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,.45) 1px, transparent 0)",
            backgroundSize: "18px 18px"
          }}
        />

        <div aria-hidden="true" className="absolute -left-10 -top-20 h-44 w-[340px] rounded-[0_0_64px_0] bg-[#6d2a43] shadow-[0_28px_70px_rgba(0,0,0,0.65)] sm:h-56 sm:w-[520px] lg:h-64 lg:w-[650px]" />
        <div aria-hidden="true" className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#4a1b2d] shadow-[0_35px_90px_rgba(0,0,0,0.75)] sm:h-96 sm:w-96" />
        <div aria-hidden="true" className="absolute -right-28 top-0 hidden h-[420px] w-[350px] rounded-bl-[76px] bg-[#161217] shadow-[0_30px_90px_rgba(0,0,0,0.82)] md:block" />
        <div aria-hidden="true" className="absolute -right-24 bottom-12 hidden h-[320px] w-[360px] rounded-l-[90px] bg-[#5b2134] shadow-[0_34px_90px_rgba(0,0,0,0.72)] md:block" />
        <div aria-hidden="true" className="absolute right-[10%] top-0 hidden h-full w-px bg-[#7c2c49]/55 md:block" />

        <header className="relative z-20 flex items-center justify-between">
          <a href="#" className="font-serif text-[28px] tracking-[0.08em] text-white sm:text-[34px]">
            NODRA
          </a>

          <nav className="hidden items-center gap-9 text-[15px] text-white/88 md:flex">
            <a href="#palvelut" className="transition hover:text-white">Palvelut</a>
            <a href="#prosessi" className="transition hover:text-white">Prosessi</a>
            <a href="#hinnat" className="transition hover:text-white">Hinnat</a>
            <a href="#ukk" className="transition hover:text-white">UKK</a>
            <a href="#yhteys" className="transition hover:text-white">Yhteys</a>
          </nav>

          <a
            href="#yhteys"
            className="hidden rounded-[18px] bg-[linear-gradient(135deg,#8d3654,#5d2138)] px-8 py-4 text-[15px] font-medium text-white shadow-[0_18px_42px_rgba(91,33,56,0.42)] transition hover:translate-y-[-1px] md:inline-flex"
          >
            Pyydä tarjous
          </a>

          <button className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-[#151217]/85 text-2xl shadow-[0_18px_45px_rgba(0,0,0,0.45)] md:hidden" aria-label="Avaa valikko">
            ≡
          </button>
        </header>

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-88px)] max-w-[1540px] items-center gap-12 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:pt-8">
          <div className="max-w-[690px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.42em] text-[#b94d6b] sm:text-[13px]">
              Verkkosivut, jotka tuovat asiakkaita
            </p>
            <div className="mt-6 h-px w-14 bg-[#b94d6b]" />

            <h1 className="mt-7 font-serif text-[clamp(48px,7vw,88px)] leading-[0.95] tracking-[-0.055em] text-[#f8f2ec]">
              Selkeät verkkosivut<br />
              pienille yrityksille
            </h1>

            <p className="mt-7 max-w-[640px] text-[18px] leading-[1.65] text-[#c8bfbc] sm:text-[21px]">
              Suunnittelemme modernit ja luotettavat verkkosivut, jotka vahvistavat brändiäsi ja auttavat yritystäsi kasvamaan.
              Selkeä design, nopea toteutus ja reilu hinnoittelu.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#yhteys"
                className="inline-flex items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#9b3f5d,#632239)] px-8 py-4 text-[17px] font-medium text-white shadow-[0_20px_55px_rgba(91,33,56,0.5)] transition hover:translate-y-[-1px]"
              >
                Pyydä tarjous
              </a>
              <a
                href="#hinnat"
                className="inline-flex items-center justify-center rounded-[18px] border border-[#9b3f5d] bg-[#0c0c10]/30 px-8 py-4 text-[17px] font-medium text-white/92 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition hover:bg-white/5"
              >
                Katso hinnat
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px] lg:ml-auto">
            <div className="absolute -inset-5 rounded-[34px] bg-[#7c2c49]/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/16 bg-[#111014]/88 p-2 shadow-[0_34px_90px_rgba(0,0,0,0.62)] backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <div className="mx-auto rounded-full bg-white/6 px-16 py-1.5 text-xs text-white/50">
                  puuhaus.fi
                </div>
              </div>
              <img
                src="/puuhaus-esimerkki.jpg"
                alt="Esimerkkisivu Puuhaus-yritykselle"
                className="h-auto w-full rounded-b-[21px] object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 mt-2 grid gap-5 sm:grid-cols-3 lg:col-span-2 lg:max-w-[640px]">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm text-[#d8cfca]">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#9b3f5d] text-[#d66a86]">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto hidden max-w-[720px] -translate-y-4 text-center lg:block">
          <p className="text-[11px] uppercase tracking-[0.45em] text-white/35">Yli 50 tyytyväistä asiakasta</p>
          <div className="mt-7 flex justify-center gap-14 font-serif text-[22px] tracking-[0.12em] text-white/28">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
