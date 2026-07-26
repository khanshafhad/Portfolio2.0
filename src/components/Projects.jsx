import ProjectCard from './ProjectCard.jsx'

function Projects({ projects, loading, error }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work that showcases UI craftsmanship and React-driven interactions.</p>
      </div>

      {loading && <p>Loading projects…</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
