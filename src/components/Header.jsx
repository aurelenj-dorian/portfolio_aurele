import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/profile.js'

const socialIcons = { GitHub: Github, LinkedIn: Linkedin }
const headerSocials = profile.socials.filter((social) => socialIcons[social.label])

function SocialLinks({ className }) {
  return headerSocials.map(({ label, href }) => {
    const Icon = socialIcons[label]
    return (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={`${label} (nouvel onglet)`}
        title={label}
      >
        <Icon size={18} aria-hidden="true" />
      </a>
    )
  })
}

const navItems = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/parcours', label: 'Parcours' },
  { to: '/competences', label: 'Compétences' },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
]

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]').content = next === 'light' ? '#ffffff' : '#0b0a0a'
    setTheme(next)
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch {
      // Stockage indisponible : le thème reste valable pour la session.
    }
  }

  const label = theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={label} title={label}>
      {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}

export function Header() {
  const menuRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    menuRef.current?.close()
  }, [pathname])

  return (
    <header className="site-header">
      <Link to="/" className="brand" viewTransition aria-label={`${profile.name}, accueil`}>
        <span className="brand__mark" aria-hidden="true" />
        <span className="brand__name">{profile.name}</span>
      </Link>

      <nav className="site-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} viewTransition className="site-nav__link">
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-header__actions">
        <SocialLinks className="icon-btn social-btn" />
        <ThemeToggle />
        <button
          type="button"
          className="icon-btn menu-btn"
          onClick={() => menuRef.current?.showModal()}
          aria-label="Ouvrir le menu"
          aria-haspopup="dialog"
        >
          <Menu size={20} aria-hidden="true" />
        </button>
      </div>

      <dialog ref={menuRef} className="mobile-menu" aria-label="Menu">
        <div className="mobile-menu__top">
          <span className="eyebrow">Menu</span>
          <button
            type="button"
            className="icon-btn"
            onClick={() => menuRef.current?.close()}
            aria-label="Fermer le menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navigation mobile">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              viewTransition
              className="mobile-menu__link"
              onClick={() => menuRef.current?.close()}
            >
              <span className="mobile-menu__num" aria-hidden="true">
                0{i + 1}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <p>{profile.location}</p>
          <div className="mobile-menu__socials">
            <SocialLinks className="icon-btn" />
          </div>
        </div>
      </dialog>
    </header>
  )
}
