"use client";

import { useEffect, useState } from "react";
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

const navItems: NavItem[] = [
  { id: "palvelut", label: "Palvelut" },
  { id: "kenelle", label: "Kenelle sopii" },
  { id: "prosessi", label: "Prosessi" },
  { id: "hinnat", label: "Hinnat" },
  { id: "ukk", label: "UKK" },
  { id: "yhteys", label: "Yhteys" }
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
  { question: "Kauanko sivujen tekeminen kestää?", answer: "Yleensä noin 1–3 viikkoa riippuen sivujen laajuudesta ja siitä, ovatko tekstit ja kuvat valmiina." },
  { question: "Tarvitsenko valmiit tekstit?", answer: "Et välttämättä. Voin auttaa rakenteessa ja tekstien muotoilussa, jotta sivusta tulee selkeä ja luotettava." },
  { question: "Toimivatko sivut puhelimella?", answer: "Kyllä. Sivut tehdään mobiiliystävällisiksi, koska suuri osa asiakkaista selaa sivuja puhelimella." },
  { question: "Voinko pyytää muutoksia myöhemmin?", answer: "Kyllä. Pieniä muutoksia voidaan tehdä myös julkaisun jälkeen erikseen sovitusti." },
  { question: "Tarvitsenko domainin ja webhotellin?", answer: "Kyllä. Voin neuvoa niiden hankinnassa ja kertoa, mikä ratkaisu sopii parhaiten yrityksellesi." }
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return <button onClick={() => scrollToId("hero")} className="text-[30px] font-light tracking-[0.38em] text-white">NODRA</button>;
}

function DarkCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[20px] border border-white/10 bg-[#111]/92 shadow-[0_30px_90px_rgba(0,0,0,0.36)] backdrop-blur-xl ${className}`}>{children}</div>;
}

function PrimaryButton({ children, onClick, dark = false }: { children: React.ReactNode; onClick?: () => void; dark?: boolean }) {
  return <button onClick={onClick} className={`group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[10px] px-7 text-[15px] font-medium transition ${dark ? "border border-[#f28a12]/70 bg-[#111] text-[#f28a12] hover:bg-[#f28a12] hover:text-[#15120d]" : "bg-[#e7bd91] text-[#15120d] hover:bg-[#f3c99a]"}`}>{children}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>;
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="max-w-[760px]"><h2 className="font-serif text-[clamp(76px,9vw,145px)] leading-[0.92] tracking-[-0.065em] text-white">{title}</h2><p className="mt-7 max-w-[680px] text-[clamp(18px,2vw,24px)] leading-[1.35] text-[#17120d]">{subtitle}</p></div>;
}

function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/15 bg-[#101010] shadow-[0_38px_120px_rgba(0,0,0,0.58)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#ffbd2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="mx-auto rounded-md bg-white/10 px-24 py-2 text-xs text-white/70">puuhaus.fi</div>
      </div>
      <div className="relative min-h-[430px] overflow-hidden bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(242,138,18,0.34),transparent_35%),linear-gradient(135deg,#262626,#050505)]" />
        <div className="relative z-10 flex min-h-[430px] flex-col justify-center px-10">
          <p className="mb-5 text-sm text-white/55">Lisää tähän myöhemmin oma kuvasi</p>
          <h2 className="max-w-[540px] font-serif text-[58px] leading-[0.95] tracking-[-0.055em] text-white">Luotettavaa rakentamista pienille ja suurille kohteille.</h2>
          <button className="mt-8 w-fit rounded-lg bg-[#e7bd91] px-6 py-3 text-sm text-[#15120d]">Ota yhteyttä</button>
        </div>
        <div className="relative z-10 grid grid-cols-4 border-t border-black bg-[#f4f0e7] text-[#111]">
          {["Rakennuspalvelut", "Terassit ja pihat", "Remontit", "Yhteydenotto"].map((item) => <div key={item} className="border-r border-black/10 p-5 text-center"><p className="text-sm font-semibold">{item}</p><p className="mt-2 text-[11px] leading-4 text-black/60">Selkeä palvelukuvaus asiakkaalle.</p></div>)}
        </div>
      </div>
    </div>
  );
}

export default function DesktopPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const ids = ["hero", ...navItems.map((item) => item.id), "footer"];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActiveSection(visible.target.id);
    }, { threshold: [0.25, 0.45, 0.65], rootMargin: "-20% 0px -45% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden text-[#f7f3ec]">
      <div aria-hidden="true" className="fixed inset-0 z-0 grid grid-cols-2"><div className="bg-[#f28a12]" /><div className="bg-[#1d1d1d]" /></div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.75) 1px, transparent 0)", backgroundSize: "18px 18px" }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_52%_0%,rgba(255,255,255,0.14),transparent_34%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.18))]" />

      <header className="fixed left-0 top-0 z-50 w-full px-12 py-5">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 text-[15px] text-white/85 lg:flex">
            {navItems.map((item) => <button key={item.id} onClick={() => scrollToId(item.id)} className={`transition hover:text-[#f28a12] ${activeSection === item.id ? "text-[#f28a12]" : ""}`}>{item.label}</button>)}
            <button onClick={() => scrollToId("yhteys")} className="ml-3 rounded-[10px] bg-[#e7bd91] px-7 py-4 text-[#18120d] transition hover:bg-[#f3c99a]">Pyydä tarjous</button>
          </nav>
          <button onClick={() => setMobileOpen(true)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-black/25 text-white backdrop-blur lg:hidden" aria-label="Avaa valikko"><Menu className="h-5 w-5" /></button>
        </div>
      </header>

      {mobileOpen && <div className="fixed inset-0 z-[70] bg-black/70 p-4 backdrop-blur-xl lg:hidden"><div className="rounded-[24px] border border-white/10 bg-[#111] p-6 shadow-2xl"><div className="mb-6 flex items-center justify-between"><Logo /><button onClick={() => setMobileOpen(false)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10"><X className="h-5 w-5" /></button></div>{navItems.map((item) => <button key={item.id} onClick={() => { setMobileOpen(false); scrollToId(item.id); }} className="block w-full border-b border-white/10 py-5 text-left font-serif text-4xl">{item.label}</button>)}</div></div>}

      <section id="hero" className="relative z-10 grid min-h-screen items-center px-12 pb-16 pt-28">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-12 lg:grid-cols-2">
          <div className="max-w-[690px]"><p className="mb-7 text-[13px] font-bold uppercase tracking-[0.12em] text-[#15120d]">Verkkosivut, jotka toimivat ja näyttävät hyvältä.</p><h1 className="font-serif text-[clamp(58px,7vw,106px)] leading-[0.98] tracking-[-0.058em] text-white">Selkeät verkkosivut pienille yrityksille</h1><p className="mt-8 max-w-[590px] text-[clamp(18px,2vw,24px)] leading-[1.45] text-[#15120d]">Teen moderneja ja mobiiliystävällisiä verkkosivuja yrityksille, jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta helppoa.</p><p className="mt-7 max-w-[560px] text-[clamp(17px,1.8vw,22px)] leading-[1.55] text-[#15120d]/90">Ei turhaa monimutkaisuutta — vain siisti sivu, selkeä rakenne ja toimiva yhteydenotto.</p><div className="mt-10 flex gap-5"><button onClick={() => scrollToId("yhteys")} className="rounded-[10px] bg-[#111] px-8 py-4 text-lg text-white shadow-[0_18px_50px_rgba(0,0,0,0.3)]">Pyydä tarjous</button><button onClick={() => scrollToId("hinnat")} className="rounded-[10px] border border-[#15120d] px-8 py-4 text-lg text-[#15120d]">Katso hinnat</button></div><div className="mt-14 grid gap-5 text-[#15120d] sm:grid-cols-3"><div className="flex items-center gap-3"><Zap className="h-7 w-7" />Nopea aloitus</div><div className="flex items-center gap-3"><CheckCircle2 className="h-7 w-7" />Selkeä prosessi</div><div className="flex items-center gap-3"><MapPin className="h-7 w-7" />Etänä koko Suomeen</div></div></div>
          <BrowserMockup />
        </div>
      </section>

      <section id="palvelut" className="relative z-10 min-h-screen px-12 py-28"><div className="mx-auto max-w-[1500px]"><SectionTitle title="Palvelut" subtitle="Kaikki mitä tarvitset selkeään ja toimivaan yrityssivuun." /><div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{services.map((service) => { const Icon = service.icon; return <DarkCard key={service.title} className="p-8 text-center"><Icon className="mx-auto h-16 w-16 text-[#f28a12]" strokeWidth={1.4} /><h3 className="mt-9 font-serif text-3xl leading-tight tracking-[-0.04em]">{service.title}</h3><div className="mx-auto mt-6 h-[2px] w-12 bg-[#f28a12]" /><p className="mt-7 text-[15px] leading-7 text-white/68">{service.text}</p></DarkCard>; })}</div><div className="mt-12 flex justify-between"><button onClick={() => scrollToId("yhteys")} className="group flex items-center gap-4 text-[#15120d]">Kysy lisää palveluistamme <ArrowRight className="h-5 w-5" /></button><PrimaryButton onClick={() => scrollToId("yhteys")} dark>Pyydä tarjous</PrimaryButton></div></div></section>

      <section id="kenelle" className="relative z-10 min-h-screen px-12 py-28"><div className="mx-auto max-w-[1500px]"><SectionTitle title="Kenelle tämä sopii?" subtitle="Yrityksille, jotka haluavat selkeät sivut ilman turhaa säätöä." /><div className="mt-14 grid gap-6 lg:grid-cols-3">{audiences.map((audience) => { const Icon = audience.icon; return <DarkCard key={audience.title} className="grid gap-6 p-8 sm:grid-cols-[90px_1fr]"><Icon className="h-16 w-16 text-[#f28a12]" strokeWidth={1.4} /><div><div className="mb-5 h-[2px] w-12 bg-[#f28a12]" /><h3 className="font-serif text-3xl leading-tight tracking-[-0.04em]">{audience.title}</h3><p className="mt-5 text-[14px] leading-7 text-white/65">{audience.text}</p></div></DarkCard>; })}</div><div className="mt-12 flex items-center justify-between gap-6 border-t border-[#f28a12]/45 pt-8"><h3 className="font-serif text-3xl text-[#15120d]">Sopisiko tämä yrityksellesi?</h3><p className="max-w-[520px] text-white/75">Varmistetaan yhdessä, että saat juuri sellaiset sivut, jotka tukevat liiketoimintaasi.</p><PrimaryButton onClick={() => scrollToId("yhteys")} dark>Pyydä tarjous</PrimaryButton></div></div></section>

      <section id="prosessi" className="relative z-10 min-h-screen px-12 py-28"><div className="mx-auto max-w-[1500px]"><SectionTitle title="Prosessi" subtitle="Selkeä eteneminen ensimmäisestä viestistä julkaisuun." /><div className="mt-16 grid gap-6 lg:grid-cols-4">{processSteps.map((step, index) => { const Icon = step.icon; return <DarkCard key={step.title} className="p-8 text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#f28a12] text-2xl text-[#f28a12]">{index + 1}</div><Icon className="mx-auto mt-9 h-16 w-16 text-[#f28a12]" strokeWidth={1.4} /><h3 className="mt-9 font-serif text-3xl tracking-[-0.04em]">{step.title}</h3><div className="mx-auto mt-6 h-[2px] w-12 bg-[#f28a12]" /><p className="mt-7 text-[15px] leading-7 text-white/68">{step.text}</p></DarkCard>; })}</div><DarkCard className="mt-10 flex items-center justify-between p-8"><div className="flex items-center gap-5"><Send className="h-14 w-14 rounded-full border border-[#f28a12] p-3 text-[#f28a12]" /><div><h3 className="font-serif text-3xl tracking-[-0.04em]">Valmis aloittamaan?</h3><p className="mt-2 text-white/65">Otan mielelläni vastaan uusia projekteja.</p></div></div><PrimaryButton onClick={() => scrollToId("yhteys")} dark>Pyydä tarjous</PrimaryButton></DarkCard></div></section>

      <section id="hinnat" className="relative z-10 min-h-screen px-12 py-28"><div className="mx-auto max-w-[1500px]"><SectionTitle title="Hinnat" subtitle="Selkeät paketit pienille yrityksille." /><div className="mt-16 grid items-center gap-7 lg:grid-cols-3">{pricing.map((plan) => <DarkCard key={plan.name} className={`relative p-9 ${plan.featured ? "border-[#f28a12]" : ""}`}>{plan.featured && <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-[#f28a12] px-6 py-2 text-xs font-bold uppercase text-[#15120d]">Suosituin</div>}<div className={plan.featured ? "pt-10" : ""}><h3 className="text-center font-serif text-4xl tracking-[-0.04em]">{plan.name}</h3><div className="mt-8 text-center"><span className="mr-3 text-xl text-[#f28a12]">alk.</span><span className="font-serif text-7xl tracking-[-0.06em] text-[#f28a12]">{plan.price}</span></div><div className="mx-auto mt-7 h-[2px] w-14 bg-[#f28a12]" /><ul className="mt-9 grid gap-5">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-4 text-white/82"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#f28a12]" />{feature}</li>)}</ul></div></DarkCard>)}</div><p className="mt-10 text-center text-white/70">Lopullinen hinta riippuu sivujen laajuudesta ja sisällöstä.</p><div className="mt-7 flex justify-center"><PrimaryButton onClick={() => scrollToId("yhteys")} dark>Pyydä tarjous</PrimaryButton></div></div></section>

      <section id="ukk" className="relative z-10 min-h-screen px-12 py-28"><div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.82fr_1.25fr] lg:items-center"><div><h2 className="font-serif text-[clamp(90px,13vw,180px)] leading-none tracking-[-0.07em] text-white">UKK</h2><p className="mt-8 max-w-[420px] text-[clamp(20px,2.4vw,30px)] leading-[1.25] text-[#15120d]">Usein kysytyt kysymykset ennen projektin aloitusta.</p></div><div className="grid gap-5">{faqs.map((faq, index) => { const isOpen = openFaq === index; return <DarkCard key={faq.question} className="overflow-hidden"><button onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-6 p-7 text-left"><span className="font-serif text-[clamp(24px,2.8vw,36px)] leading-tight tracking-[-0.04em]">{faq.question}</span><ChevronDown className={`h-6 w-6 shrink-0 text-[#f28a12] transition ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <p className="px-7 pb-8 text-[17px] leading-8 text-white/65">{faq.answer}</p>}</DarkCard>; })}</div></div></section>

      <section id="yhteys" className="relative z-10 min-h-screen px-12 py-28"><div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.78fr_1.35fr] lg:items-center"><div><h2 className="font-serif text-[clamp(78px,10vw,150px)] leading-none tracking-[-0.07em] text-white">Yhteys</h2><p className="mt-8 max-w-[520px] text-[clamp(20px,2.5vw,30px)] leading-[1.25] text-[#15120d]">Kerro lyhyesti yrityksestäsi ja millaiset sivut tarvitset.</p><DarkCard className="mt-16 grid gap-8 p-8">{[[Clock3,"Vastaan mahdollisimman pian","Pyrin vastaamaan kaikkiin viesteihin 24 tunnin kuluessa."],[MapPin,"Etänä koko Suomeen","Palvelen asiakkaita joustavasti missä päin Suomea tahansa."],[ShieldCheck,"Selkeä tarjous ilman sitoumusta","Saat selkeän ehdotuksen ja hinnan ilman piilokuluja."]].map(([Icon,title,text]) => { const RowIcon = Icon as LucideIcon; return <div key={title as string} className="flex gap-6 border-b border-[#f28a12]/35 pb-8 last:border-0 last:pb-0"><RowIcon className="h-14 w-14 shrink-0 rounded-full border border-[#f28a12] p-3 text-[#f28a12]" /><div><h3 className="font-serif text-2xl">{title as string}</h3><p className="mt-2 leading-7 text-white/62">{text as string}</p></div></div>; })}</DarkCard></div><DarkCard className="p-10"><form onSubmit={(event) => event.preventDefault()} className="grid gap-6"><div className="grid gap-6 md:grid-cols-2"><input aria-label="Nimi" placeholder="Nimi" className="h-16 rounded-xl border border-[#f28a12]/25 bg-black/15 px-6 text-white outline-none placeholder:text-white/55" /><input aria-label="Yritys" placeholder="Yritys" className="h-16 rounded-xl border border-[#f28a12]/25 bg-black/15 px-6 text-white outline-none placeholder:text-white/55" /><input aria-label="Sähköposti" placeholder="Sähköposti" type="email" className="h-16 rounded-xl border border-[#f28a12]/25 bg-black/15 px-6 text-white outline-none placeholder:text-white/55" /><input aria-label="Puhelin" placeholder="Puhelin" className="h-16 rounded-xl border border-[#f28a12]/25 bg-black/15 px-6 text-white outline-none placeholder:text-white/55" /></div><textarea aria-label="Viesti" placeholder="Viesti" rows={8} className="resize-none rounded-xl border border-[#f28a12]/25 bg-black/15 px-6 py-5 text-white outline-none placeholder:text-white/55" /><button type="submit" className="group flex min-h-[68px] items-center justify-center rounded-xl bg-[#f28a12] px-8 text-lg font-medium text-[#15120d]">Lähetä viesti<ArrowRight className="ml-auto h-5 w-5" /></button><p className="flex items-center justify-center gap-3 text-sm text-white/45"><LockKeyhole className="h-4 w-4" />Tietosi käsitellään luottamuksellisesti.</p></form></DarkCard></div></section>

      <footer id="footer" className="relative z-10 px-12 pb-12 pt-24"><DarkCard className="mx-auto max-w-[1500px] p-12"><div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_1fr]"><div><div className="text-4xl font-light tracking-[0.38em]">NODRA</div><h2 className="mt-12 max-w-[460px] font-serif text-5xl leading-[1.05] tracking-[-0.05em]">Selkeät verkkosivut pienille yrityksille.</h2><div className="mt-7 h-[2px] w-20 bg-[#f28a12]" /><p className="mt-8 max-w-[500px] text-[17px] leading-8 text-white/65">Moderneja ja mobiiliystävällisiä verkkosivuja yrityksille, jotka haluavat näyttää luotettavilta ja tehdä yhteydenotosta helppoa.</p><div className="mt-9 flex gap-6 text-[#f28a12]"><Linkedin /><Instagram /><Mail /></div></div><div className="border-l border-white/10 pl-12"><h3 className="text-xl text-[#f28a12]">Pikavalikot</h3><div className="mt-8 grid">{navItems.map((item) => <button key={item.id} onClick={() => scrollToId(item.id)} className="group flex items-center justify-between border-b border-white/10 py-4 text-left text-lg text-white/82">{item.label}<ArrowRight className="h-5 w-5 text-[#f28a12]" /></button>)}</div></div><div className="border-l border-white/10 pl-12"><h3 className="text-xl text-[#f28a12]">Ota yhteyttä</h3><div className="mt-8 grid gap-8"><p>Sähköposti<br /><span className="text-white/65">hello@nodra.fi</span></p><p>Puhelin<br /><span className="text-white/65">040 123 4567</span></p><p>Etänä koko Suomeen<br /><span className="text-white/65">Palvelen sinua etänä — missä päin Suomea tahansa.</span></p></div></div></div><div className="mt-14 flex justify-between border-t border-white/10 pt-8 text-sm text-white/50"><p>© NODRA 2026 · Kaikki oikeudet pidätetään.</p><div className="flex gap-6"><span>Tietosuojaseloste</span><span>Evästekäytäntö</span></div></div></DarkCard></footer>
    </main>
  );
}
