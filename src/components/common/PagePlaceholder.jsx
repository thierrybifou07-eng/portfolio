import Reveal from '../animations/Reveal.jsx'

function PagePlaceholder({ eyebrow, title, description, children }) {
  return (
    <section className="page-placeholder" aria-labelledby="page-title">
      <Reveal className="page-placeholder-content">
        <p className="page-eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="page-description">{description}</p>
        {children ? <div className="page-actions">{children}</div> : null}
      </Reveal>
    </section>
  )
}

export default PagePlaceholder
