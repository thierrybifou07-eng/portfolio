import Reveal from '../animations/Reveal.jsx'
import SkillLevelIndicator from './SkillLevelIndicator.jsx'

function SkillGroupCard({ delay, group }) {
  return (
    <Reveal delay={delay}>
      <article className="surface-card skill-group-card">
        <header>
          <h3>{group.title}</h3>
          <p>{group.description}</p>
        </header>

        <ul className="skill-group-list">
          {group.skills.map((skill) => (
            <li key={skill.id}>
              <span className="skill-name">{skill.label}</span>
              <SkillLevelIndicator
                rank={skill.levelRank}
              />
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  )
}

export default SkillGroupCard
