export default function Home() {
  return (
    <main>
      <section className="section flex items-center justify-center px-6 text-center">
        <div className="max-w-5xl pt-24">
          <p className="eyebrow">Verkkosivustoja, jotka toimivat</p>
          <h1 className="mt-8 text-[20vw] font-black leading-[0.86] tracking-[-0.055em] md:text-[13vw] lg:text-[178px]">
            NODRA
          </h1>
          <p className="mt-8 text-xl text-white md:text-2xl">Nettisivuja yrityksille</p>
          <p className="mt-2 text-base text-white/55 md:text-xl">Modern websites for businesses</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 md:gap-6">
            <a href="#yhteys" className="premium-button premium-button--light">
              Pyydä tarjous
            </a>
            <a href="#tyot" className="premium-button">
              Katso työt
            </a>
          </div>
        </div>
      </section>

      <section id="tyot" className="section flex items-center py-20">
        <div className="container text-center">
          <p className="eyebrow">Tuloksia, joilla on merkitystä</p>
          <h2 className="mt-5 text-3xl font-extrabold uppercase tracking-[0.1em] md:text-5xl">
            Yrityksille suunniteltu
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Suunnittelemme ja toteutamme modernit, nopeat ja myyvät verkkosivustot.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
            <article className="min-h-[230px] border border-white/10 bg-white/[0.025] p-6 text-left md:min-h-[420px]">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Aurora Cafe</h3>
              <p className="mt-16 text-3xl leading-tight tracking-[-0.04em]">Hyvää kahvia, joka päivä.</p>
            </article>
            <article className="min-h-[230px] border border-white/10 bg-white/[0.025] p-6 text-left md:min-h-[420px]">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Lumi Studio</h3>
              <p className="mt-16 text-3xl leading-tight tracking-[-0.04em]">Kauneutta joka päivä.</p>
            </article>
            <article className="min-h-[230px] border border-white/10 bg-white/[0.025] p-6 text-left md:min-h-[420px]">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em]">Nordic Build</h3>
              <p className="mt-16 text-3xl leading-tight tracking-[-0.04em]">Rakennamme luotettavaa tulevaisuutta.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="yhteys" className="section flex items-center py-20">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold uppercase tracking-[0.1em] md:text-6xl">Ota yhteyttä</h2>
            <p className="mt-6 max-w-md text-white/62">
              Autamme yritystäsi erottumaan ja menestymään verkossa.
            </p>
          </div>
          <div className="border border-white/12 bg-white/[0.025] p-6 md:p-12">
            <p className="text-white/70">Lomake tehdään seuraavassa vaiheessa.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
