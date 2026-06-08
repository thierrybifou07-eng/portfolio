import Reveal from '../animations/Reveal.jsx'

function PrincipleList({ items, title }) {
  return (
    <article className="surface-card about-principle-card">
      <h2>{title}</h2>
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}

function AboutPrinciples({ about, profile }) {
  return (
    <section className="about-principles">
      <Reveal>
        <PrincipleList title={about.goalsTitle} items={profile.goals} />
      </Reveal>
      <Reveal delay={0.08}>
        <PrincipleList title={about.valuesTitle} items={profile.values} />
      </Reveal>
    </section>
  )
}

export default AboutPrinciples
