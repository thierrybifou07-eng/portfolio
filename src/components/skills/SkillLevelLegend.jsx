import Reveal from '../animations/Reveal.jsx'
import SkillLevelIndicator from './SkillLevelIndicator.jsx'

function SkillLevelLegend({ levels, title }) {
  return (
    <Reveal className="skills-legend">
      <h2>{title}</h2>
      <ul>
        {levels.map((level) => (
          <li key={level.id}>
            <SkillLevelIndicator label={level.label} rank={level.rank} />
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

export default SkillLevelLegend
