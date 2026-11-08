function ResumeSection({ children, id, title }) {
  return (
    <section className="resume-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}

function isExternal(href) {
  return href.startsWith('http')
}

function ResumePreview({ model }) {
  return (
    <article className="resume-sheet">
      <header className="resume-sheet-header">
        <div className="resume-identity">
          <p className="resume-name" translate="no">
            {model.name}
          </p>
          <p className="resume-role">{model.headline}</p>
          <p className="resume-location">{model.location}</p>

          <ul className="resume-contacts">
            {model.contacts.map((contact) => (
              <li key={contact.id} data-contact={contact.id}>
                <span>{contact.label}</span>
                <a
                  href={contact.href}
                  translate="no"
                  {...(isExternal(contact.href)
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <img
          className="resume-photo"
          src={model.photo.src}
          alt={model.photo.alt}
          width="360"
          height="360"
          decoding="async"
        />
      </header>

      <div className="resume-sheet-body">
        <p className="resume-summary">{model.summary}</p>

        <ResumeSection id="resume-skills" title={model.sections.skills}>
          <div className="resume-skill-groups">
            {model.skillGroups.map((group) => (
              <div key={group.id}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3>{model.sections.languages}</h3>
              <ul>
                {model.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection id="resume-projects" title={model.sections.projects}>
          <div className="resume-entries">
            {model.projects.map((project) => (
              <article className="resume-entry" key={project.id}>
                <div className="resume-entry-heading">
                  <h3>{project.title}</h3>
                  <p className="resume-stack">{project.stack}</p>
                </div>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="resume-experience" title={model.sections.experience}>
          <div className="resume-entries">
            {model.experience.map((item) => (
              <article className="resume-entry" key={item.id}>
                <div className="resume-entry-heading">
                  <h3>{item.title}</h3>
                  <p className="resume-dates">{item.dates}</p>
                </div>
                {item.organization ? (
                  <p className="resume-organization">{item.organization}</p>
                ) : null}
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection id="resume-education" title={model.sections.education}>
          <div className="resume-education">
            {model.education.map((item) => (
              <article className="resume-entry" key={item.id}>
                <h3>{item.title}</h3>
                <p className="resume-organization">
                  {item.organization ? `${item.organization} · ` : null}
                  <span className="resume-dates">{item.dates}</span>
                </p>
              </article>
            ))}
          </div>
        </ResumeSection>
      </div>
    </article>
  )
}

export default ResumePreview
