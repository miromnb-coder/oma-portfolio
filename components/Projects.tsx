import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export default function Projects() {
  return (
    <section id="tyot" className="section projects-section">
      <div className="container">
        <div className="projects-topline">
          <Reveal className="section-heading section-heading--left" y={44} duration={1.08}>
            <p className="eyebrow">Valikoituja konsepteja</p>
            <h2 className="section-title">Tyylikkäitä sivustoja, jotka tekevät vaikutuksen</h2>
          </Reveal>
          <Reveal y={24} delay={0.18} duration={0.9}>
            <a className="text-link" href="#yhteys">Katso kaikki työt ↗</a>
          </Reveal>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.name} className="project-reveal" delay={0.08 + index * 0.12} duration={1.1} y={56} scale={0.985}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
