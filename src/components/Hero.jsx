import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, MapPin } from 'lucide-react'
import portrait from '../assets/portrait-profil.webp'
import { profile } from '../data/profile.js'

const WORD = ['DEV', 'SEC', 'OPS']
const DISPLAY_FONT = '900 1em "Sofia Sans Extra Condensed Variable"'

function HeroWord({ outline = false }) {
  let letterIndex = 0
  return (
    <div className={`hero-word ${outline ? 'hero-word--outline' : ''}`} aria-hidden="true">
      {WORD.map((group) => (
        <span key={group} className={`hero-word__group hero-word__group--${group.toLowerCase()}`}>
          {[...group].map((letter, i) => (
            <span key={i} className="hero-word__letter" style={{ '--i': letterIndex++ }}>
              {letter}
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

export function Hero() {
  const heroRef = useRef(null)
  const portraitRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [portraitReady, setPortraitReady] = useState(false)

  // Le mot géant est décoratif et sa largeur dépend de sa police :
  // il reste caché tant qu'elle n'est pas arrivée, sans délai de secours.
  useEffect(() => {
    let alive = true
    document.fonts
      .load(DISPLAY_FONT, WORD.join(''))
      .then((faces) => {
        if (alive && faces.length > 0) setReady(true)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  // Une image déjà en cache peut être complète avant le rendu.
  useEffect(() => {
    if (portraitRef.current?.complete && portraitRef.current.naturalWidth > 0) setPortraitReady(true)
  }, [])

  // Léger décalage de profondeur entre le mot et le portrait.
  useEffect(() => {
    const hero = heroRef.current
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hero || !canHover || calm) return undefined
    let frame = 0
    const onMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5
        hero.style.setProperty('--px', x.toFixed(3))
      })
    }
    hero.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(frame)
      hero.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <section ref={heroRef} className={`hero ${ready ? 'is-ready' : ''}`} aria-labelledby="hero-title">
      <div className="hero__stage">
        <HeroWord />
        <img
          ref={portraitRef}
          className={`hero__portrait ${portraitReady ? 'is-loaded' : ''}`}
          onLoad={() => setPortraitReady(true)}
          src={portrait}
          alt="Portrait de Njeuha Aurele Dorian en costume bleu marine"
          width="300"
          height="970"
          fetchPriority="high"
        />
        <HeroWord outline />
      </div>

      <div className="hero__content">
        <div className="hero__intro">
          <p className="hero__hello">Bonjour, je suis</p>
          <h1 id="hero-title" className="hero__name">
            {profile.nameLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <Link to="/projets" viewTransition className="btn btn--solid">
              Voir les projets <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/parcours" viewTransition className="btn btn--ghost">
              Mon parcours
            </Link>
          </div>
        </div>

        <div className="hero__side">
          <p className="hero__status">
            <span className="hero__pulse" aria-hidden="true" />
            {profile.availability}
          </p>
          <dl className="hero__stats">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="hero__place">
            <MapPin size={15} aria-hidden="true" /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}
