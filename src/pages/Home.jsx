import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Hero } from '../components/Hero.jsx'
import { Pipeline } from '../components/Pipeline.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { SectionHead } from '../components/PageHead.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { profile, timeline } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { skillDomains } from '../data/skills.js'

const featured = projects.filter((project) => project.featured)
const education = timeline.filter((entry) => entry.current || entry.title.startsWith('Diplôme d'))
const coreStack = ['Flutter', 'React', 'ASP.NET', 'C#', 'SQL Server', 'Python', 'Docker', 'GNS3']

export function Home() {
  return (
    <>
      <title>NJEUHA AURELE DORIAN — DevSecOps en formation</title>
      <Hero />

      <section className="section" aria-labelledby="projets-titre">
        <SectionHead
          title={<span id="projets-titre">Projets sélectionnés</span>}
          action={
            <Link to="/projets" viewTransition className="link-arrow">
              Tous les projets <ArrowRight size={18} aria-hidden="true" />
            </Link>
          }
        />
        <div className="project-grid">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--split" aria-label="Formation et compétences">
        <Reveal className="edu">
          <h2 className="block-title">Formation</h2>
          <ul className="edu__list">
            {education.map((entry) => (
              <li key={entry.title}>
                <p className="edu__title">{entry.title}</p>
                <p className="edu__place">{entry.place}</p>
                {entry.current && <span className="tag tag--live">En cours</span>}
              </li>
            ))}
          </ul>
          <h2 className="block-title block-title--spaced">Compétences clés</h2>
          <ul className="chips">
            {coreStack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
          <p className="edu__more">
            {skillDomains.length} domaines détaillés sur la{' '}
            <Link to="/competences" viewTransition>
              page Compétences
            </Link>
            .
          </p>
        </Reveal>

        <Reveal className="method" delay={80}>
          <h2 className="block-title">Ma méthode</h2>
          <p className="method__lead">Six étapes, et un contrôle de sécurité à chacune.</p>
          <Pipeline />
        </Reveal>

        <Reveal as="figure" className="quote" delay={160}>
          <span className="quote__mark" aria-hidden="true">
            “
          </span>
          <blockquote>{profile.quote}</blockquote>
          <figcaption>Aurele Dorian</figcaption>
        </Reveal>
      </section>
    </>
  )
}
