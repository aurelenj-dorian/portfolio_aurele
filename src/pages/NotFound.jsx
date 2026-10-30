import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export function NotFound() {
  return (
    <section className="not-found">
      <title>Page introuvable — NJEUHA AURELE DORIAN</title>
      <p className="not-found__code" aria-hidden="true">
        404
      </p>
      <h1 className="not-found__title">Cette page n'existe pas.</h1>
      <p>Le lien est peut-être incorrect, ou la page a changé d'adresse.</p>
      <Link to="/" viewTransition className="btn btn--solid">
        Retour à l'accueil <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </section>
  )
}
