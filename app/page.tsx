import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";
import WhyNodra from "@/components/WhyNodra";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="site-main">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <WhyNodra />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
