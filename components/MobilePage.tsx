"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  HeartPulse,
  Home,
  Instagram,
  LayoutPanelTop,
  Linkedin,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  RefreshCcw,
  Rocket,
  Scissors,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Store,
  Trees,
  X,
  Zap
} from "lucide-react";

type NavItem = { id: string; label: string };
type IconCard = { title: string; text: string; icon: LucideIcon };
type ContactItem = { icon: LucideIcon; title: string; text: string };

const navItems: NavItem[] = [
  { id: "m-palvelut", label: "Palvelut" },
  { id: "m-kenelle", label: "Kenelle sopii" },
  { id: "m-prosessi", label: "Prosessi" },
  { id: "m-hinnat", label: "Hinnat" },
  { id: "m-ukk", label: "UKK" },
  { id: "m-yhteys", label: "Yhteys" }
];

const services: IconCard[] = [
  { title: "Yhden sivun kotisivu", text: "Selkeä ja tyylikäs sivu, josta asiakkaasi löytävät kaiken tärkeän nopeasti.", icon: MonitorSmartphone },
  { title: "Yrityssivusto", text: "Laajempi kokonaisuus useilla osioilla tai alasivuilla palveluille, hinnastolle ja yhteydenotolle.", icon: LayoutPanelTop },
  { title: "Sivujen uudistus", text: "Päivitetään vanhat sivut moderniksi, nopeaksi ja luotettavaksi kokonaisuudeksi.", icon: RefreshCcw },
  { title: "Ylläpito", text: "Pienet muutokset, päivitykset ja jatkuva apu myös julkaisun jälkeen.", icon: Settings }
];

const audiences: IconCard[] = [
  { title: "Rakennus- ja remonttifirmat", text: "Esittele palvelut, referenssit ja tee yhteydenotosta helppoa.", icon: Home },
  { title: "Siivouspalvelut", text: "Luo luotettava ja ammattimainen ensivaikutelma uusille ja nykyisille asiakkaille.", icon: Sparkles },
  { title: "Parturit ja kauneusala", text: "Näytä palvelut, hinnasto ja varausmahdollisuus selkeästi yhdessä paikassa.", icon: Scissors },
  { title: "Hierojat ja hyvinvointipalvelut", text: "Kerro palveluista, aukioloajoista ja luo rauhallinen sekä luotettava ilme.", icon: HeartPulse },
  { title: "Pihatyöt ja kiinteistöhuolto", text: "Tuo esiin osaaminen, palvelualue ja yhteystiedot vaivattomasti.", icon: Trees },
  { title: "Muut pienet paikalliset yritykset", text: "Sopii yrityksille, jotka haluavat selkeät sivut ilman monimutkaisuutta.", icon: Store }
];

const processSteps: IconCard[] = [
  { title: "1. Yhteydenotto", text: "Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset.", icon: MessageCircle },
  { title: "2. Suunnittelu", text: "Teen rakenteen ja tyylin, joka sopii yrityksellesi.", icon: LayoutPanelTop },
  { title: "3. Toteutus", text: "Rakennan sivut selkeiksi, nopeiksi ja mobiiliystävällisiksi.", icon: Code2 },
  { title: "4. Julkaisu", text: "Viimeistellään sivut ja julkaistaan ne valmiiksi käyttöön.", icon: Rocket }
];

const pricing = [
  { name: "Aloitus", price: "299 €", featured: false, features: ["Yhden sivun kotisivu", "Mobiiliystävällinen toteutus", "Yhteydenottolomake"] },
  { name: "Yrityssivu", price: "499 €", featured: true, features: ["Useampi osio tai alasivu", "Palvelut ja hinnasto", "Selkeä yritysilme"] },
  { name: "Laajempi", price: "799 €", featured: false, features: ["Useampi alasivu", "Tarkempi ulkoasu", "Julkaisun jälkeinen apu"] }
];

const faqs = [
  { question: "Kauanko sivujen tekeminen kestää?", answer: "Yleensä noin 1–3 viikkoa riippuen sivujen laajuudesta." },
  { question: "Tarvitsenko valmiit tekstit?", answer: "Et välttämättä. Voin auttaa rakenteessa ja tekstien muotoilussa." },
  { question: "Toimivatko sivut puhelimella?", answer: "Kyllä. Sivut suunnitellaan mobiiliystävällisiksi alusta asti." },
  { question: "Voinko pyytää muutoksia myöhemmin?", answer: "Kyllä. Pieniä muutoksia voidaan tehdä myös julkaisun jälkeen." },
  { question: "Tarvitsenko domainin ja webhotellin?", answer: "Kyllä. Voin neuvoa niiden hankinnassa ja valinnassa." }
];

const contactItems: ContactItem[] = [
  { icon: Clock3, title: "Vastaan mahdollisimman pian", text: "Pyrin vastaamaan kaikkiin viesteihin 24 tunnin kuluessa." },
  { icon: MapPin, title: "Etänä koko Suomeen", text: "Palvelen asiakkaita joustavasti missä päin Suomea tahansa." },
  { icon: ShieldCheck, title: "Selkeä tarjous ilman sitoumusta", text: "Saat selkeän ehdotuksen ja hinnan ilman piilokuluja." }
];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="text-[28px] font-light tracking-[0.34em] text-white" aria-label="Siirry alkuun">
      NODRA
    </button>
  );
}

function SectionIntro({ id, title, subtitle, dark = false }: { id: string; title: string; subtitle: string; dark?: boolean }) {
  return (
    <div id={id} className={`${dark ? "bg-[#111]" : "bg-[#f28a12]"} scroll-mt-24 px-5 pb-12 pt-32`}>
      <h2 className="max-w-full font-serif text-[clamp(70px,18vw,96px)] leading-[0.9] tracking-[-0.065em] text-white">
        {title}
      </h2>
      <p className={`mt-7 max-w-full text-[24px] leading-[1.25] ${dark ? "text-[#e7bd91]" : "text-[#15120d]"}`}>
        {subtitle}
      </p>
    </div>
  );
}

function DarkCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-full rounded-[24px] border border-white/10 bg-[#111] text-white shadow-[0_24px_70px_rgba(0,0,0,0.34)] ${className}`}>
      {children}
    </div>
  );
}

function CTA({ children, dark = false, onClick }: { children: ReactNode; dark?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex min-h-[58px] w-full items-center justify-center rounded-[14px] px-6 text-[19px] font-medium ${dark ? "bg-[#111] text-white" : "border border-[#f28a12] text-[#f28a12]"}`}
    >
      <span>{children}</span>
      <ArrowRight className="ml-3 h-5 w-5" />
    </button>
  );
}

function MobileHeader({ openMenu }: { openMenu: () => void }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#f28a12]/95 px-5 py-5 backdrop-blur-md">
      <div className="flex w-full items-center justify-between">
        <Logo onClick={() => goTo("m-hero")} />
        <button onClick={openMenu} className="grid h-14 w-14 place-items-center rounded-[18px] bg-[#111] text-white shadow-[0_18px_45px_rgba(0,0,0,0.32)]" aria-label="Avaa valikko">
          <Menu className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
}

function MobileHero() {
  return (
    <section id="m-hero" className="scroll-mt-24 bg-[#f28a12] px-5 pb-14 pt-32">
      <p className="text-[14px] font-bold uppercase leading-6 tracking-[0.16em] text-[#15120d]">
        Verkkosivut, jotka toimivat ja näyttävät hyvältä.
      </p>
      <h1 className="mt-8 max-w-full font-serif text-[clamp(58px,17vw,90px)] leading-[0.95] tracking-[-0.065em] text-white">
        Selkeät verkkosivut pienille yrityksille
      </h1>
      <p className="mt-8 text-[23px] leading-[1.35] text-[#15120d]">
        Teen moderneja ja mobiiliystävällisiä verkkosivuja yrityksille, jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta helppoa.
      </p>
      <p className="mt-7 text-[21px] leading-[1.4] text-[#15120d]/90">
        Ei turhaa monimutkaisuutta — vain siisti sivu, selkeä rakenne ja toimiva yhteydenotto.
      </p>
      <div className="mt-10 grid gap-4">
        <CTA dark onClick={() => goTo("m-yhteys")}>Pyydä tarjous</CTA>
        <button onClick={() => goTo("m-hinnat")} className="min-h-[58px] rounded-[14px] border border-[#15120d] text-[19px] font-medium text-[#15120d]">
          Katso hinnat
        </button>
      </div>
      <div className="mt-10 grid grid-cols-3 divide-x divide-[#15120d]/20 text-center text-[#15120d]">
        <div className="grid justify-items-center gap-2 px-2"><Zap className="h-8 w-8" /><span className="text-sm leading-tight">Nopea aloitus</span></div>
        <div className="grid justify-items-center gap-2 px-2"><CheckCircle2 className="h-8 w-8" /><span className="text-sm leading-tight">Selkeä prosessi</span></div>
        <div className="grid justify-items-center gap-2 px-2"><MapPin className="h-8 w-8" /><span className="text-sm leading-tight">Etänä koko Suomeen</span></div>
      </div>
      <img
        src="/puuhaus-esimerkki.jpg"
        alt="Puuhaus-esimerkkisivu"
        loading="eager"
        decoding="async"
        className="mt-12 w-full rounded-[22px] shadow-[0_24px_70px_rgba(0,0,0,0.34)]"
      />
    </section>
  );
}

function CardGrid({ items }: { items: IconCard[] }) {
  return (
    <div className="grid gap-5">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <DarkCard key={item.title} className="grid grid-cols-[72px_1fr] gap-5 p-6">
            <Icon className="h-14 w-14 text-[#f28a12]" strokeWidth={1.45} />
            <div>
              <h3 className="font-serif text-[30px] leading-tight tracking-[-0.04em] text-white">{item.title}</h3>
              <p className="mt-3 text-[16px] leading-7 text-white/65">{item.text}</p>
            </div>
          </DarkCard>
        );
      })}
    </div>
  );
}

export default function MobilePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#f28a12] text-[#f7f3ec] md:hidden">
      <MobileHeader openMenu={() => setMenuOpen(true)} />
      {menuOpen && (
        <div className="fixed inset-0 z-[80] bg-black/70 p-4 backdrop-blur-xl">
          <div className="rounded-[24px] border border-white/10 bg-[#111] p-6">
            <div className="flex items-center justify-between">
              <Logo />
              <button onClick={() => setMenuOpen(false)} className="grid h-12 w-12 place-items-center rounded-xl border border-white/10" aria-label="Sulje valikko"><X /></button>
            </div>
            <div className="mt-8 grid">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { setMenuOpen(false); goTo(item.id); }} className="border-b border-white/10 py-5 text-left font-serif text-4xl text-white">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <MobileHero />

      <SectionIntro id="m-palvelut" title="Palvelut" subtitle="Kaikki mitä tarvitset selkeään ja toimivaan yrityssivuun." />
      <section className="bg-[#111] px-5 py-10"><CardGrid items={services} /><div className="mt-8"><CTA onClick={() => goTo("m-yhteys")}>Pyydä tarjous</CTA></div></section>

      <SectionIntro id="m-kenelle" title="Kenelle tämä sopii?" subtitle="Yrityksille, jotka haluavat selkeät sivut ilman turhaa säätöä." />
      <section className="bg-[#111] px-5 py-10"><CardGrid items={audiences} /><div className="mt-8 rounded-[22px] border border-[#f28a12]/40 p-6"><h3 className="font-serif text-3xl text-white">Sopisiko tämä yrityksellesi?</h3><p className="mt-3 text-white/65">Varmistetaan yhdessä, että saat juuri sellaiset sivut, jotka tukevat liiketoimintaasi.</p><div className="mt-6"><CTA onClick={() => goTo("m-yhteys")}>Pyydä tarjous</CTA></div></div></section>

      <SectionIntro id="m-prosessi" title="Prosessi" subtitle="Selkeä eteneminen ensimmäisestä viestistä julkaisuun." />
      <section className="bg-[#111] px-5 py-10">
        <div className="grid gap-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <DarkCard key={step.title} className="p-6 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#f28a12] text-2xl text-[#f28a12]">{index + 1}</div>
                <Icon className="mx-auto mt-8 h-16 w-16 text-[#f28a12]" strokeWidth={1.45} />
                <h3 className="mt-8 font-serif text-[31px] tracking-[-0.04em] text-white">{step.title}</h3>
                <div className="mx-auto mt-5 h-[2px] w-14 bg-[#f28a12]" />
                <p className="mt-6 text-[16px] leading-7 text-white/65">{step.text}</p>
              </DarkCard>
            );
          })}
        </div>
        <DarkCard className="mt-8 p-6"><div className="flex items-center gap-5"><Send className="h-14 w-14 rounded-full border border-[#f28a12] p-3 text-[#f28a12]" /><div><h3 className="font-serif text-3xl text-white">Valmis aloittamaan?</h3><p className="mt-1 text-white/65">Otan mielelläni vastaan uusia projekteja.</p></div></div><div className="mt-6"><CTA onClick={() => goTo("m-yhteys")}>Pyydä tarjous</CTA></div></DarkCard>
      </section>

      <SectionIntro id="m-hinnat" title="Hinnat" subtitle="Selkeät paketit pienille yrityksille." />
      <section className="bg-[#f28a12] px-5 pb-12">
        <div className="grid gap-5">
          {pricing.map((plan) => (
            <DarkCard key={plan.name} className={`p-7 ${plan.featured ? "border-[#f28a12]" : ""}`}>
              {plan.featured && <span className="mb-5 inline-block rounded-full bg-[#f28a12] px-5 py-2 text-xs font-bold uppercase text-[#15120d]">Suosituin</span>}
              <h3 className="font-serif text-[40px] text-white">{plan.name}</h3>
              <p className="mt-5"><span className="mr-2 text-[#f28a12]">alk.</span><span className="font-serif text-[68px] leading-none text-[#f28a12]">{plan.price}</span></p>
              <div className="mt-5 h-[2px] w-16 bg-[#f28a12]" />
              <ul className="mt-7 grid gap-4">
                {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-white/80"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#f28a12]" />{feature}</li>)}
              </ul>
            </DarkCard>
          ))}
        </div>
        <p className="mt-7 text-center text-[#15120d]">Lopullinen hinta riippuu sivujen laajuudesta ja sisällöstä.</p>
        <div className="mt-6"><CTA dark onClick={() => goTo("m-yhteys")}>Pyydä tarjous</CTA></div>
      </section>

      <SectionIntro id="m-ukk" title="UKK" subtitle="Usein kysytyt kysymykset ennen projektin aloitusta." dark />
      <section className="bg-[#111] px-5 pb-12">
        <div className="grid gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <DarkCard key={faq.question} className="overflow-hidden">
                <button onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                  <span className="font-serif text-[29px] leading-tight text-white">{faq.question}</span>
                  <ChevronDown className={`h-6 w-6 shrink-0 text-[#f28a12] ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="border-t border-white/10 px-6 pb-6 pt-4 text-[17px] leading-8 text-white/65">{faq.answer}</p>}
              </DarkCard>
            );
          })}
        </div>
      </section>

      <SectionIntro id="m-yhteys" title="Yhteys" subtitle="Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset." />
      <section className="bg-[#f28a12] px-5 pb-14">
        <DarkCard className="p-6">
          {contactItems.map((item) => {
            const RowIcon = item.icon;
            return <div key={item.title} className="flex gap-5 border-b border-[#f28a12]/30 py-6 first:pt-0 last:border-0 last:pb-0"><RowIcon className="h-14 w-14 shrink-0 rounded-full border border-[#f28a12] p-3 text-[#f28a12]" /><div><h3 className="font-serif text-2xl text-white">{item.title}</h3><p className="mt-2 leading-7 text-white/62">{item.text}</p></div></div>;
          })}
        </DarkCard>
        <DarkCard className="mt-7 p-6">
          <form onSubmit={(event) => event.preventDefault()} className="grid gap-4">
            {["Nimi", "Yritys", "Sähköposti", "Puhelin"].map((field) => <input key={field} aria-label={field} placeholder={field} className="h-14 w-full rounded-xl border border-[#f28a12]/25 bg-black/20 px-5 text-white outline-none placeholder:text-white/45" />)}
            <textarea aria-label="Viesti" placeholder="Viesti" rows={7} className="w-full resize-none rounded-xl border border-[#f28a12]/25 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-white/45" />
            <button className="flex min-h-[64px] w-full items-center justify-center rounded-xl bg-[#f28a12] px-6 text-lg font-medium text-[#15120d]">Lähetä viesti <ArrowRight className="ml-3 h-5 w-5" /></button>
            <p className="flex items-center justify-center gap-2 text-sm text-white/45"><LockKeyhole className="h-4 w-4" />Tietosi käsitellään luottamuksellisesti.</p>
          </form>
        </DarkCard>
      </section>

      <footer className="bg-[linear-gradient(90deg,#f28a12_0%,#f28a12_50%,#1d1d1d_50%,#1d1d1d_100%)] px-5 py-14">
        <DarkCard className="p-7">
          <div className="text-3xl font-light tracking-[0.36em] text-white">NODRA</div>
          <h2 className="mt-10 font-serif text-[40px] leading-[1.05] tracking-[-0.05em] text-white">Selkeät verkkosivut pienille yrityksille.</h2>
          <div className="mt-6 h-[2px] w-20 bg-[#f28a12]" />
          <p className="mt-7 text-[17px] leading-8 text-white/65">Moderneja ja mobiiliystävällisiä verkkosivuja yrityksille, jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta helppoa.</p>
          <div className="mt-8 flex gap-6 text-[#f28a12]"><Linkedin /><Instagram /><Mail /></div>
          <div className="mt-10 border-t border-white/10 pt-8"><h3 className="text-xl text-[#f28a12]">Pikavalikot</h3>{navItems.map((item) => <button key={item.id} onClick={() => goTo(item.id)} className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-lg text-white/82">{item.label}<ArrowRight className="h-5 w-5 text-[#f28a12]" /></button>)}</div>
          <div className="mt-10 border-t border-white/10 pt-8"><h3 className="text-xl text-[#f28a12]">Ota yhteyttä</h3><div className="mt-6 grid gap-6"><p className="flex gap-4"><Mail className="text-[#f28a12]" /> hello@nodra.fi</p><p className="flex gap-4"><Phone className="text-[#f28a12]" /> 040 123 4567</p><p className="flex gap-4"><MapPin className="text-[#f28a12]" /> Etänä koko Suomeen</p></div></div>
          <p className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">© NODRA 2026 · Kaikki oikeudet pidätetään.</p>
        </DarkCard>
      </footer>
    </main>
  );
}
