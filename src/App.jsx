import { useEffect, useState } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

 //onst dataUrl = import.meta.env.VITE_PROJECTS_URL || '/projects.json'
 const dataUrl = `${import.meta.env.BASE_URL}projects.json`;

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(dataUrl)
      if (!response.ok) {
        throw new Error(`Unable to load projects: ${response.status}`)
      }
      const data = await response.json()
      setProjects(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [dataUrl])

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Shafhad Khan</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta-button" href="/Shafhad_Khan_Resume_2026-07-05.pdf" download>
          Download Resume
        </a>
      </header>

      <main>
        <Hero />
        <About />
        <Projects
          projects={projects}
          loading={loading}
          error={error}
        />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2026 Portfolio · Built with React and Vite</p>
      </footer>
    </div>
  )
}

export default App
