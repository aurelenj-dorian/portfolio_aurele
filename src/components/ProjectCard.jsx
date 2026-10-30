import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { ProjectCover } from './Covers.jsx'

export function ProjectCard({ project, index }) {
  return (
    <Link to={`/projets/${project.slug}`} viewTransition className="project-card">
      <ProjectCover project={project} />
      <div className="project-card__meta">
        <span className="project-card__num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="project-card__text">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__kicker">{project.kicker}</p>
        </div>
        <ArrowRight className="project-card__arrow" size={22} aria-hidden="true" />
      </div>
    </Link>
  )
}
