import { PageHead } from '../components/PageHead.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Pipeline } from '../components/Pipeline.jsx'
import { foundations, skillDomains, tools } from '../data/skills.js'

export function Competences() {
  return (
    <>
      <title>Compétences — NJEUHA AURELE DORIAN</title>
      <PageHead
        index="02 · Compétences"
        title="Compétences"
        intro="Une base de développeur, et une spécialisation en cours sur l'administration et la sécurité."
      />

      <section className="section section--flush" aria-label="Domaines de compétences">
        <div className="domains">
          {skillDomains.map((domain, index) => (
            <Reveal as="article" key={domain.code} className="domain" delay={(index % 3) * 70}>
              <div className="domain__head">
                <span className="domain__code" aria-hidden="true">
                  {domain.code}
                </span>
                {domain.note && <span className="tag tag--live">{domain.note}</span>}
              </div>
              <h2 className="domain__title">{domain.title}</h2>
              <ul className="domain__list">
                {domain.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section method-wide" aria-labelledby="methode-titre">
        <div>
          <h2 id="methode-titre" className="method-wide__title">
            Ma méthode
          </h2>
          <p className="section-lead">Six étapes, et un contrôle de sécurité à chacune.</p>
        </div>
        <Pipeline />
      </section>

      <section className="section section--two" aria-label="Outils et socle académique">
        <Reveal>
          <h2 className="block-title">Outils du quotidien</h2>
          <ul className="chips">
            {tools.map((tool) => (
              <li key={tool} className="chip">
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="block-title">Socle académique</h2>
          <ul className="chips">
            {foundations.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  )
}
