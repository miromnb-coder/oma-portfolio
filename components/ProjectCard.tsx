import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-card-inner">
        <div className="project-meta">
          <span>{project.name}</span>
          <span>{project.category}</span>
        </div>

        <div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-footer">
          <a className="project-link" href={project.href}>
            {project.cta}
          </a>
          <a className="arrow-button" href={project.href} aria-label={project.cta}>
            ↗
          </a>
        </div>
      </div>
    </article>
  );
}
