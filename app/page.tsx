import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <main className="site-main">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
