function PagePlaceholder({ eyebrow, title, description, children }) {
  return (
    <section aria-labelledby="page-title">
      <p>{eyebrow}</p>
      <h1 id="page-title">{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  )
}

export default PagePlaceholder
