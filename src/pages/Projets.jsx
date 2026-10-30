import { useState } from 'react'
import { PageHead } from '../components/PageHead.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projects, projectTypes } from '../data/projects.js'

export function Projets() {
  const [filter, setFilter] = useState('Tous')
  const visible = filter === 'Tous' ? projects : projects.filter((project) => project.type === filter)

  return (
    <>
      <title>Projets — NJEUHA AURELE DORIAN</title>
      <PageHead
        index="03 · Projets"
        title="Projets"
        intro="Web, desktop, jeux : des projets de cours et un projet réel en entreprise."
      />

      <section className="section section--flush" aria-label="Liste des projets">
        <div className="filters" role="group" aria-label="Filtrer par type de projet">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              className="filter"
              aria-pressed={filter === type}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <p className="filters__count" role="status">
          {visible.length} projet{visible.length > 1 ? 's' : ''}
        </p>
        <div className="project-grid project-grid--all">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
          ))}
        </div>
      </section>
    </>
  )
}
