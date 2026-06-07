import ResumeTimeline from './ResumeTimeline.jsx'

function ResumeSection({ children, id, title }) {
  return (
    <section className="resume-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  )
}

function ResumePreview({
  contact,
  education,
  experience,
  locale,
  profile,
  resume,
  skills,
}) {
  return (
    <article className="resume-sheet">
      <header className="resume-sheet-header">
        <div>
          <p className="resume-name">{profile.name}</p>
          <p className="resume-role">{resume.headline}</p>
        </div>
        <p className="resume-summary">{resume.summary}</p>
      </header>

      <div className="resume-sheet-grid">
        <aside className="resume-sidebar">
          <ResumeSection id="resume-contact" title={resume.sections.contact}>
            <address className="resume-contact">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <span>{profile.location}</span>
              <span>{profile.availability}</span>
            </address>
          </ResumeSection>

          <ResumeSection id="resume-skills" title={resume.sections.skills}>
            <div className="resume-skill-groups">
              {skills.map((group) => (
                <div key={group.id}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill.id}>
                        <span>{skill.label}</span>
                        <small>{skill.levelLabel}</small>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection id="resume-languages" title={resume.sections.languages}>
            <ul className="resume-languages">
              {resume.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </ResumeSection>
        </aside>

        <div className="resume-main">
          <ResumeSection
            id="resume-experience"
            title={resume.sections.experience}
          >
            <ResumeTimeline
              currentLabel={resume.currentLabel}
              items={experience}
              locale={locale}
              type="experience"
            />
          </ResumeSection>

          <ResumeSection
            id="resume-education"
            title={resume.sections.education}
          >
            <ResumeTimeline
              currentLabel={resume.currentLabel}
              items={education}
              locale={locale}
              type="education"
            />
          </ResumeSection>
        </div>
      </div>
    </article>
  )
}

export default ResumePreview
