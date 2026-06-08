import { formatResumeMonth } from '../../features/resume/formatResumeDate.js'

function ResumeTimeline({ currentLabel, items, locale, type }) {
  return (
    <div className="resume-timeline">
      {items.map((item) => {
        const title = item.title ?? item.qualification
        const organization = item.organization ?? item.institution

        return (
          <article className="resume-timeline-item" key={item.id}>
            <div className="resume-timeline-heading">
              <div>
                <h3>{title}</h3>
                <p>
                  {organization}
                  {item.location ? ` · ${item.location}` : null}
                </p>
              </div>
              <p className="resume-dates">
                <time dateTime={item.start}>
                  {formatResumeMonth(item.start, locale)}
                </time>
                <span aria-hidden="true"> - </span>
                {item.end ? (
                  <time dateTime={item.end}>
                    {formatResumeMonth(item.end, locale)}
                  </time>
                ) : (
                  <span>{currentLabel}</span>
                )}
              </p>
            </div>

            <p>{item.summary}</p>

            {type === 'experience' && item.highlights ? (
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        )
      })}
    </div>
  )
}

export default ResumeTimeline
