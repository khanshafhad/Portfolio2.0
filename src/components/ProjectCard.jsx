function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <div>
          <h3>{project.title}</h3>
          <p className="project-subtitle">{project.role} · {project.organization}</p>
        </div>
        <div className="project-tags-right">
          {project.duration && <span>{project.duration}</span>}
          {project.projectType && <span>{project.projectType}</span>}
        </div>
      </div>

      <p>{project.description}</p>

      {project.platforms?.length > 0 && (
        <div className="project-platforms">
          {project.platforms.map((platform) => (
            <span key={platform}>{platform}</span>
          ))}
        </div>
      )}

      {project.highlights?.length > 0 && (
        <div className="project-highlights">
          <strong>Highlights</strong>
          <ul>
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      {project.link && (
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      )}
    </article>
  )
}

export default ProjectCard
