import { Link, useLocation } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { profile } from '../data/profile.js'

export function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="site-footer">
      {pathname !== '/contact' && (
        <div className="footer-cta">
          <p className="footer-cta__title">
            Un projet, un stage,
            <br />
            une question ?
          </p>
          <Link to="/contact" viewTransition className="btn btn--solid">
            Me contacter <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      )}

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="footer-social">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
