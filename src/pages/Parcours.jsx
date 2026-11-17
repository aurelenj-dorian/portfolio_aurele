import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import portrait from '../assets/portrait-face.webp'
import { PageHead } from '../components/PageHead.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { certifications, profile, timeline } from '../data/profile.js'

export function Parcours() {
  return (
    <>
      <title>Parcours — NJEUHA AURELE DORIAN</title>
      <PageHead index="01 · Parcours" title="Parcours" intro="Du code à la sécurité : une même chaîne, apprise maillon par maillon." />

      <section className="about">
        <div className="about__portrait">
          <img src={portrait} alt="Njeuha Aurele Dorian, en pied, en costume bleu marine" width="266" height="916" />
        </div>
        <div className="about__text">
          {profile.bio.map((paragraph, index) => (
            <Reveal as="p" key={index} delay={index * 60}>
              {paragraph}
            </Reveal>
          ))}
          <Reveal as="dl" className="about__langs">
            {profile.languages.map((language) => (
              <div key={language.label}>
                <dt>{language.label}</dt>
                <dd>{language.level}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="etapes-titre">
        <h2 id="etapes-titre" className="section-head__title">
          Les étapes
        </h2>
        <ol className="timeline">
          {timeline.map((entry) => (
            <Reveal as="li" key={entry.title} className={`timeline__item ${entry.current ? 'is-current' : ''}`}>
              <p className="timeline__period">{entry.period}</p>
              <div>
                <h3 className="timeline__title">{entry.title}</h3>
                <p className="timeline__place">{entry.place}</p>
                {entry.text && <p className="timeline__text">{entry.text}</p>}
                {entry.link && (
                  <Link to={entry.link.to} viewTransition className="link-arrow">
                    {entry.link.label} <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="section" aria-labelledby="certifications-titre">
        <h2 id="certifications-titre" className="section-head__title">
          Certifications
        </h2>
        <ul className="certs">
          {certifications.map((cert, index) => (
            <Reveal as="li" key={cert.href} className="cert" delay={(index % 3) * 70}>
              <p className="cert__issuer">{cert.issuer}</p>
              <h3 className="cert__title">{cert.title}</h3>
              <p className="cert__date">{cert.date}</p>
              <a href={cert.href} target="_blank" rel="noreferrer" className="link-arrow">
                Vérifier la certification <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  )
}
