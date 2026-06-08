function SkillLevelIndicator({ label, rank }) {
  return (
    <div className="skill-level" role="img" aria-label={label}>
      <span className="skill-level-label">{label}</span>
      <span className="skill-level-segments" aria-hidden="true">
        {[1, 2, 3].map((step) => (
          <span
            key={step}
            className={step <= rank ? 'is-active' : undefined}
          />
        ))}
      </span>
    </div>
  )
}

export default SkillLevelIndicator
