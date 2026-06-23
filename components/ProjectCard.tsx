import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.accent}`}>
      <div className="project-image" aria-hidden="true" />
      <div className="project-card-inner">
        <div className="project-meta">
          <span>{project.category}</span>
        </div>

        <div className="project-main">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-title">{project.title}</p>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="project-footer">
          <a className="project-link" href={project.href}>{project.cta} ↗</a>
        </div>
      </div>
    </article>
  );
}
