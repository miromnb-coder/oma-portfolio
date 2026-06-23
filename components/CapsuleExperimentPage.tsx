"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { ArrowRight, CheckCircle2, Code2, LayoutPanelTop, Mail, MapPin, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const emailAddress = "nodra.verkkosivut@gmail.com";

const storySteps = [
  {
    number: "01",
    id: "palvelut",
    label: "Palvelut",
    small: "Mitä tarjoan",
    title: "Selkeät verkkosivut pienille yrityksille",
    eyebrow: "Verkkosivut, jotka toimivat ja näyttävät hyvältä.",
    text: "Kapseli näyttää lopputuloksen konkreettisesti: siisti sivu, selkeä rakenne ja helppo yhteydenotto yhdessä premium-näkymässä."
  },
  {
    number: "02",
    id: "kenelle",
    label: "Kenelle sopii?",
    small: "Kelle autan",
    title: "Sopii yrityksille, jotka haluavat näyttää luotettavilta",
    eyebrow: "Rakennus, siivous, hyvinvointi ja paikalliset palvelut.",
    text: "Rullatessa kapseli pyörii kuin esittelyesine ja ympärille ilmestyy eri yrityksille sopivia käyttötapauksia."
  },
  {
    number: "03",
    id: "prosessi",
    label: "Prosessi",
    small: "Näin teen sen",
    title: "Ensimmäisestä viestistä valmiiseen julkaisuun",
    eyebrow: "Yhteydenotto, suunnittelu, toteutus ja julkaisu.",
    text: "Kapselin liike toimii tarinallisena siirtymänä vaiheesta toiseen, ilman että sivu tuntuu tavalliselta listalta."
  },
  {
    number: "04",
    id: "hinnat",
    label: "Hinnat",
    small: "Selkeät paketit",
    title: "Selkeä hinta ja konkreettinen lopputulos",
    eyebrow: "Paketit alkavat pienelle yritykselle sopivasta tasosta.",
    text: "Näyttävä animaatio tuo wow-fiiliksen, mutta tärkeimmät asiat pysyvät silti selkeinä: mitä saa, kenelle sopii ja mitä maksaa."
  },
  {
    number: "05",
    id: "ukk",
    label: "UKK",
    small: "Usein kysytyt",
    title: "Vastaukset ennen projektin aloitusta",
    eyebrow: "Aikataulu, tekstit, domain ja muutokset.",
    text: "Scroll-kokemus voi pysähtyä tärkeisiin kysymyksiin, jolloin käyttäjä saa varmuutta ennen yhteydenottoa."
  },
  {
    number: "06",
    id: "yhteys",
    label: "Yhteys",
    small: "Otetaan yhteyttä",
    title: "Kun kiinnostus syntyy, yhteydenotto on helppo tehdä",
    eyebrow: "Lomake ja sähköposti ovat selkeästi esillä.",
    text: "Kokeilussa kapseli väistyy lopussa ja antaa tilaa yhteydenottokortille."
  }
];

const ingredientCards = [
  { icon: LayoutPanelTop, title: "Selkeä rakenne", text: "Looginen sivu, joka ohjaa kävijän oikeaan paikkaan.", side: "left", top: "20%" },
  { icon: MonitorSmartphone, title: "Mobiiliystävällinen", text: "Näyttää hyvältä ja toimii kaikilla laitteilla.", side: "left", top: "45%" },
  { icon: Zap, title: "Nopea aloitus", text: "Pääset liikkeelle ilman pitkiä odotuksia.", side: "left", top: "70%" },
  { icon: Mail, title: "Helppo yhteydenotto", text: "Yhteydenotto ja tarjouspyyntö selkeästi esillä.", side: "right", top: "31%" },
  { icon: ShieldCheck, title: "Luotettava ilme", text: "Ammattimainen ulkoasu rakentaa luottamusta.", side: "right", top: "62%" }
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function CapsuleModel({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, "/puuhaus-esimerkki.jpg");

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
  }, [texture]);

  useFrame(() => {
    const group = groupRef.current;
    if (!group) return;

    const targetRoll = progress * Math.PI * 4.25;
    const targetY = -0.22 + Math.sin(progress * Math.PI * 2) * 0.18;
    const targetX = Math.sin(progress * Math.PI * 1.2) * 0.28;
    const targetZ = Math.sin(progress * Math.PI * 2) * 0.05;

    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetRoll, 0.07);
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.07);
    group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, targetZ, 0.07);
    group.position.x = THREE.MathUtils.lerp(group.position.x, targetX, 0.06);
  });

  const glassMaterial = (
    <meshPhysicalMaterial
      color="#f28a12"
      metalness={0.05}
      roughness={0.035}
      transparent
      opacity={0.28}
      transmission={0.42}
      thickness={0.6}
      clearcoat={1}
      clearcoatRoughness={0.04}
      depthWrite={false}
    />
  );

  const darkGlassMaterial = (
    <meshPhysicalMaterial
      color="#050505"
      metalness={0.12}
      roughness={0.08}
      transparent
      opacity={0.5}
      transmission={0.18}
      thickness={0.45}
      clearcoat={1}
      clearcoatRoughness={0.05}
      depthWrite={false}
    />
  );

  return (
    <group position={[0, -0.05, 0]}>
      <mesh receiveShadow position={[0, -0.95, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.55, 96]} />
        <shadowMaterial transparent opacity={0.28} />
      </mesh>

      <mesh position={[0, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.018, 12, 180]} />
        <meshBasicMaterial color="#f28a12" transparent opacity={0.58} />
      </mesh>

      <mesh position={[0, -0.91, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.011, 12, 180]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.14} />
      </mesh>

      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.78, 0.78, 3.55, 96, 1, false]} />
          {glassMaterial}
        </mesh>

        <mesh castShadow position={[-1.78, 0, 0]}>
          <sphereGeometry args={[0.78, 96, 48]} />
          {glassMaterial}
        </mesh>

        <mesh castShadow position={[1.78, 0, 0]}>
          <sphereGeometry args={[0.78, 96, 48]} />
          {darkGlassMaterial}
        </mesh>

        <mesh position={[1.78, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.62, 0.035, 18, 96]} />
          <meshBasicMaterial color="#f28a12" transparent opacity={0.85} />
        </mesh>

        <mesh position={[-1.78, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.62, 0.018, 18, 96]} />
          <meshBasicMaterial color="#f28a12" transparent opacity={0.42} />
        </mesh>

        <mesh position={[0, 0.01, 0.79]}>
          <boxGeometry args={[2.68, 1.18, 0.035]} />
          <meshPhysicalMaterial color="#050505" roughness={0.16} metalness={0.35} clearcoat={0.8} />
        </mesh>

        <mesh position={[0, 0.01, 0.82]}>
          <planeGeometry args={[2.52, 1.05]} />
          <meshBasicMaterial map={texture} toneMapped={false} transparent opacity={0.94} />
        </mesh>

        <mesh position={[0, -0.56, 0.84]}>
          <planeGeometry args={[2.72, 0.12]} />
          <meshBasicMaterial color="#f28a12" transparent opacity={0.22} />
        </mesh>
      </group>
    </group>
  );
}

function CapsuleCanvas({ progress }: { progress: number }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.32, 5.2], fov: 35 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[-4, 4, 4]} intensity={2.8} color="#ff9b28" castShadow />
      <directionalLight position={[4, 2.5, 5]} intensity={1.8} color="#ffffff" />
      <pointLight position={[2.4, 0.4, 1.4]} intensity={3.2} color="#f28a12" />
      <pointLight position={[-2.4, -0.4, 1.2]} intensity={1.6} color="#f28a12" />
      <CapsuleModel progress={progress} />
    </Canvas>
  );
}

function Timeline({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 xl:block">
      <div className="relative grid gap-8 pl-12">
        <div className="absolute left-4 top-4 h-[calc(100%-2rem)] border-l border-dashed border-[#f28a12]/45" />
        {storySteps.map((step, index) => (
          <button key={step.number} className="group relative text-left" onClick={() => document.getElementById("capsule-showcase")?.scrollIntoView({ behavior: "smooth" })}>
            <span className={`absolute -left-12 top-0 grid h-9 w-9 place-items-center rounded-full border text-xs transition ${activeIndex === index ? "border-[#f28a12] bg-[#f28a12] text-[#15120d]" : "border-[#f28a12]/50 bg-[#111] text-[#f28a12]"}`}>{step.number}</span>
            <span className={`block text-[17px] transition ${activeIndex === index ? "text-[#f28a12]" : "text-white/80"}`}>{step.label}</span>
            <span className="mt-1 block text-xs text-white/45">{step.small}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function IngredientCards() {
  return (
    <>
      {ingredientCards.map((card) => {
        const Icon = card.icon;
        const sideClasses = card.side === "left" ? "left-[40%] -translate-x-full" : "right-[14%]";
        return (
          <div
            key={card.title}
            className={`absolute hidden w-[190px] rounded-2xl border border-white/10 bg-[#111]/82 p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl xl:block ${sideClasses}`}
            style={{ top: card.top }}
          >
            <Icon className="mb-4 h-7 w-7 text-[#f28a12]" strokeWidth={1.45} />
            <h3 className="font-serif text-2xl leading-tight tracking-[-0.04em]">{card.title}</h3>
            <p className="mt-3 text-xs leading-5 text-white/60">{card.text}</p>
          </div>
        );
      })}
    </>
  );
}

export default function CapsuleExperimentPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const maxScroll = section.offsetHeight - window.innerHeight;
      const scrolled = clamp(-rect.top, 0, maxScroll);
      setProgress(maxScroll > 0 ? scrolled / maxScroll : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const activeIndex = Math.min(storySteps.length - 1, Math.floor(progress * storySteps.length));
  const activeStep = storySteps[activeIndex];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#111] text-[#f7f3ec]">
      <div aria-hidden="true" className="fixed inset-0 z-0 grid grid-cols-2">
        <div className="bg-[#f28a12]" />
        <div className="bg-[#1d1d1d]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.75) 1px, transparent 0)", backgroundSize: "18px 18px" }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[42vh] bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.34))]" />

      <header className="fixed left-0 top-0 z-50 w-full px-12 py-6">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between">
          <button className="text-[30px] font-light tracking-[0.38em] text-white">NODRA</button>
          <nav className="flex items-center gap-8 text-sm text-white/82">
            {storySteps.slice(0, 5).map((item) => <span key={item.id}>{item.label}</span>)}
            <button className="rounded-[10px] bg-[#e7bd91] px-7 py-4 text-[#18120d]">Pyydä tarjous</button>
          </nav>
        </div>
      </header>

      <section ref={sectionRef} id="capsule-showcase" className="relative z-10 h-[380vh]">
        <div className="sticky top-0 h-screen overflow-hidden px-12 pt-28">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="bg-[#f28a12]" />
            <div className="bg-[#1d1d1d]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[24vh] bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2))]" />
          <div className="absolute bottom-[8vh] left-1/2 z-10 h-[1px] w-[70vw] -translate-x-1/2 rounded-full bg-white/10" />
          <div className="absolute bottom-[8vh] left-1/2 z-10 h-[130px] w-[72vw] -translate-x-1/2 rounded-[50%] border border-[#f28a12]/30 shadow-[0_40px_90px_rgba(0,0,0,0.36)]" />
          <div className="absolute bottom-[11vh] left-1/2 z-10 -translate-x-1/2 text-[11px] uppercase tracking-[0.62em] text-white/38">Scroll to rotate</div>

          <div className="relative z-20 mx-auto grid h-full max-w-[1540px] grid-cols-[0.82fr_1.35fr] items-center gap-10">
            <div className="max-w-[560px] pt-6">
              <p className="mb-7 text-[13px] font-bold uppercase tracking-[0.13em] text-[#15120d]">{activeStep.eyebrow}</p>
              <h1 className="font-serif text-[clamp(56px,6vw,96px)] leading-[0.96] tracking-[-0.06em] text-white">{activeStep.title}</h1>
              <p className="mt-8 text-[clamp(18px,1.5vw,22px)] leading-[1.5] text-[#15120d]">{activeStep.text}</p>
              <div className="mt-10 flex gap-5">
                <button className="rounded-[10px] bg-[#111] px-8 py-4 text-lg text-white shadow-[0_18px_50px_rgba(0,0,0,0.3)]">Pyydä tarjous</button>
                <button className="rounded-[10px] border border-[#15120d] px-8 py-4 text-lg text-[#15120d]">Katso hinnat</button>
              </div>
              <div className="mt-12 grid max-w-[520px] grid-cols-3 divide-x divide-[#15120d]/20 text-sm text-[#15120d]">
                <div className="flex items-center gap-2 pr-4"><Zap className="h-6 w-6" />Nopea aloitus</div>
                <div className="flex items-center gap-2 px-4"><CheckCircle2 className="h-6 w-6" />Selkeä prosessi</div>
                <div className="flex items-center gap-2 pl-4"><MapPin className="h-6 w-6" />Etänä Suomeen</div>
              </div>
            </div>

            <div className="relative h-[76vh] min-h-[620px]">
              <IngredientCards />
              <div className="absolute inset-0">
                <CapsuleCanvas progress={progress} />
              </div>
            </div>
          </div>

          <Timeline activeIndex={activeIndex} />
        </div>
      </section>

      <section className="relative z-20 px-12 pb-16">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 rounded-[18px] border border-white/10 bg-[#111]/90 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <Code2 className="h-14 w-14 rounded-full border border-[#f28a12] p-3 text-[#f28a12]" />
            <div>
              <h2 className="font-serif text-4xl tracking-[-0.04em]">Valmis aloittamaan?</h2>
              <p className="mt-2 text-white/62">Tämä on kokeiluhaaran Three.js-kapseliversio. Main-haara pysyy turvassa.</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 text-white/70 lg:flex"><Mail className="h-5 w-5 text-[#f28a12]" />{emailAddress}</div>
          <button className="group rounded-[12px] border border-[#f28a12] px-8 py-4 text-[#f28a12]">Pyydä tarjous <ArrowRight className="ml-3 inline h-5 w-5 transition group-hover:translate-x-1" /></button>
        </div>
      </section>
    </main>
  );
}
