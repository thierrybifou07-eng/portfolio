import Reveal from '../animations/Reveal.jsx'

function formatMonth(value, locale) {
  if (!value) {
    return null
  }

  const [year, month] = value.split('-').map(Number)

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

function TimelineSection({ currentLabel, id, items, locale, title }) {
  return (
    <section className="about-timeline-section" aria-labelledby={`${id}-title`}>
      <Reveal className="about-section-heading">
        <h2 id={`${id}-title`}>{title}</h2>
      </Reveal>

      <div className="about-timeline">
        {items.map((item, index) => {
          const itemTitle = item.title ?? item.qualification
          const organization = item.organization ?? item.institution

          return (
            <Reveal key={item.id} delay={index * 0.06}>
              <article className="about-timeline-item">
                <div className="about-timeline-marker" aria-hidden="true" />
                <div className="about-timeline-dates">
                  <time dateTime={item.start}>
                    {formatMonth(item.start, locale)}
                  </time>
                  <span aria-hidden="true">-</span>
                  {item.end ? (
                    <time dateTime={item.end}>
                      {formatMonth(item.end, locale)}
                    </time>
                  ) : (
                    <span>{currentLabel}</span>
                  )}
                </div>

                <div className="about-timeline-content">
                  <h3>{itemTitle}</h3>
                  <p className="about-timeline-organization">
                    {organization}
                    {item.location ? ` · ${item.location}` : null}
                  </p>
                  <p>{item.summary}</p>

                  {item.highlights ? (
                    <ul>
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default TimelineSection
