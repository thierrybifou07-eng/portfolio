import Reveal from '../animations/Reveal.jsx'
import SafeImage from '../common/SafeImage.jsx'

function AboutIntroduction({ about, profile, profileAbout }) {
  return (
    <section className="about-introduction" aria-labelledby="about-title">
      <Reveal className="about-introduction-content">
        <p className="page-eyebrow">{about.eyebrow}</p>
        <h1 id="about-title">{about.title}</h1>
        <p className="about-role">{profile.role}</p>
        <p className="about-summary">{profile.summary}</p>

        <div className="about-biography">
          <h2>{about.introductionTitle}</h2>
          {profile.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal className="about-profile-card" delay={0.08}>
        <SafeImage
          className="about-profile-image"
          src={profileAbout.image}
          alt={profileAbout.imageAlt}
          width="800"
          height="800"
        />
        <div className="about-profile-details">
          <strong>{profile.name}</strong>
          <span>{profile.location}</span>
          <p>{profile.availability}</p>
        </div>
      </Reveal>
    </section>
  )
}

export default AboutIntroduction
