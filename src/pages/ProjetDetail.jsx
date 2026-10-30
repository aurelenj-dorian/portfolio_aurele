import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { ProjectCover } from '../components/Covers.jsx'
import { projects } from '../data/projects.js'
import { NotFound } from './NotFound.jsx'

export function ProjetDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((project) => project.slug === slug)
  if (index < 0) return <NotFound />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]
  const longestWord = Math.max(...project.title.split(' ').map((word) => word.length))

  return (
    <article className="case">
      <title>{`${project.title} — NJEUHA AURELE DORIAN`}</title>

      <header className="case__head">
        <Link to="/projets" viewTransition className="link-arrow link-arrow--back">
          <ArrowLeft size={18} aria-hidden="true" /> Tous les projets
        </Link>
        <p className="eyebrow">
          {String(index + 1).padStart(2, '0')} · {project.kicker}
          {project.year ? ` · ${project.year}` : ''}
        </p>
        <h1 className="case__title" style={{ '--chars': longestWord }}>
          {project.title}
        </h1>
        <p className="case__summary">{project.summary}</p>
        {project.links?.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="btn btn--solid">
            {link.label} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ))}
      </header>

      <div className="case__cover">
        <ProjectCover project={project} priority />
      </div>

      {project.figures && (
        <dl className="case__figures">
          {project.figures.map((figure) => (
            <div key={figure.label}>
              <dt>{figure.label}</dt>
              <dd>{figure.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="case__body">
        <section className="case__block">
          <h2>Contexte</h2>
          <p>{project.context}</p>
        </section>

        <section className="case__block">
          <h2>Ce que j'ai réalisé</h2>
          <ul className="case__list">
            {project.delivered.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {project.security && (
          <section className="case__block case__block--security">
            <h2>
              <ShieldCheck size={22} aria-hidden="true" /> Sécurité
            </h2>
            <ul className="case__list">
              {project.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {project.method && (
          <section className="case__block">
            <h2>Méthode</h2>
            <p>{project.method}</p>
          </section>
        )}

        <section className="case__block">
          <h2>Technologies</h2>
          <ul className="chips">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Link to={`/projets/${next.slug}`} viewTransition className="case__next">
        <span className="eyebrow">Projet suivant</span>
        <span className="case__next-title">
          {next.title} <ArrowRight size={32} aria-hidden="true" />
        </span>
      </Link>
    </article>
  )
}
