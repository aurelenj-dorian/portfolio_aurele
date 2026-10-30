import { useState } from 'react'
import { ArrowRight, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { PageHead } from '../components/PageHead.jsx'
import { profile } from '../data/profile.js'

const empty = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Indiquez votre nom.'
  if (!values.email.trim()) errors.email = 'Indiquez votre adresse e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Vérifiez le format, par exemple nom@domaine.com.'
  if (!values.message.trim()) errors.message = 'Écrivez votre message.'
  return errors
}

function Field({ id, label, error, multiline, ...props }) {
  const Control = multiline ? 'textarea' : 'input'
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Control
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="field__error">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    setSent(false)
  }

  function submit(event) {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      event.currentTarget.elements[first].focus()
      return
    }
    const subject = `Contact depuis le portfolio – ${values.name.trim()}`
    const body = `Nom : ${values.name.trim()}\nE-mail : ${values.email.trim()}\n\n${values.message.trim()}`
    window.location.href = `mailto:${profile.emails.join(',')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <title>Contact — NJEUHA AURELE DORIAN</title>
      <PageHead index="04 · Contact" title="Contact" intro="Un projet, un stage, une question : écrivez-moi." />

      <section className="contact">
        <ul className="contact__list">
          <li>
            <MapPin size={20} aria-hidden="true" />
            <span>{profile.location}</span>
          </li>
          <li>
            <Phone size={20} aria-hidden="true" />
            <a href={profile.phoneHref}>{profile.phone}</a>
          </li>
          {profile.emails.map((email) => (
            <li key={email}>
              <Mail size={20} aria-hidden="true" />
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          ))}
          <li>
            <Globe size={20} aria-hidden="true" />
            <a href={`https://${profile.website}`}>{profile.website}</a>
          </li>
        </ul>

        <form className="contact__form" onSubmit={submit} noValidate>
          <h2 className="block-title">Envoyer un message</h2>
          <Field id="name" label="Nom complet" autoComplete="name" value={values.name} onChange={update} error={errors.name} />
          <Field
            id="email"
            label="Adresse e-mail"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update}
            error={errors.email}
          />
          <Field
            id="message"
            label="Message"
            multiline
            rows={6}
            value={values.message}
            onChange={update}
            error={errors.message}
          />
          <button type="submit" className="btn btn--solid">
            Préparer le message <ArrowRight size={18} aria-hidden="true" />
          </button>
          <p className="contact__note" role="status">
            {sent
              ? 'Votre messagerie vient de s’ouvrir avec le message prêt à être envoyé.'
              : 'Le message s’ouvre dans votre messagerie, vous l’envoyez vous-même.'}
          </p>
        </form>
      </section>
    </>
  )
}
