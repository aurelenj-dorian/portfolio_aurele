export function PageHead({ index, title, intro }) {
  return (
    <header className="page-head">
      <p className="eyebrow">{index}</p>
      <h1 className="page-head__title" style={{ '--chars': title.length }}>
        {title}
      </h1>
      {intro && <p className="page-head__intro">{intro}</p>}
    </header>
  )
}

export function SectionHead({ title, action }) {
  return (
    <div className="section-head">
      <h2 className="section-head__title">{title}</h2>
      <span className="section-head__rule" aria-hidden="true" />
      {action}
    </div>
  )
}
