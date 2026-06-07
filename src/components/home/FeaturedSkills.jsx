import Reveal from '../animations/Reveal.jsx'
import ButtonLink from '../common/ButtonLink.jsx'

function FeaturedSkills({ home, skillGroups }) {
  return (
    <section className="home-section" aria-labelledby="featured-skills-title">
      <Reveal className="home-section-heading">
        <h2 id="featured-skills-title">{home.featuredSkillsTitle}</h2>
        <ButtonLink to="/skills" variant="secondary">
          {home.skillsAction}
        </ButtonLink>
      </Reveal>

      <div className="home-skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.06}>
            <article className="surface-card home-skill-card">
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <ul className="home-skill-list">
                {group.skills.slice(0, 3).map((skill) => (
                  <li key={skill.id}>
                    <span>{skill.label}</span>
                    <small>{skill.levelLabel}</small>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default FeaturedSkills
