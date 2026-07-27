function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <h3>{project.title}</h3>
        <div>
          {project.client && <span>{project.client}</span>}
          {project.year && <span>{project.year}</span>}
        </div>
      </div>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
        Learn more
      </a>
    </article>
  )
}

export default ProjectCard
