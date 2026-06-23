import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export default function Projects() {
  return (
    <section id="tyot" className="section projects-section">
      <span id="palvelut" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-heading" y={44} duration={1.08}>
          <p className="eyebrow">Tuloksia, joilla on merkitystä</p>
          <h2 className="section-title">Yrityksille suunniteltu</h2>
          <p className="section-copy">
            Suunnittelemme ja toteutamme modernit, nopeat ja myyvät verkkosivustot. Jokainen sivu rakennetaan niin, että se näyttää hyvältä ja ohjaa asiakkaan ottamaan yhteyttä.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              className="project-reveal"
              delay={0.08 + index * 0.12}
              duration={1.1}
              y={56}
              scale={0.985}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-action" y={24} delay={0.26} duration={0.9}>
          <a className="premium-button" href="#yhteys">
            Katso projektit
          </a>
        </Reveal>
      </div>
    </section>
  );
}
