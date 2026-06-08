import Reveal from '../animations/Reveal.jsx'
import ButtonLink from '../common/ButtonLink.jsx'
import SafeImage from '../common/SafeImage.jsx'

function HomeHero({ home, profile }) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <Reveal className="home-hero-content">
        <p className="page-eyebrow">{home.eyebrow}</p>
        <h1 id="home-title">{home.headline}</h1>
        <p className="home-hero-role">{profile.role}</p>
        <p className="home-hero-introduction">{home.introduction}</p>

        <div className="home-hero-actions">
          <ButtonLink to="/projects">{home.primaryAction}</ButtonLink>
          <ButtonLink to="/about" variant="secondary">
            {home.secondaryAction}
          </ButtonLink>
        </div>

        <p className="home-availability">
          <span aria-hidden="true" />
          {profile.availability}
        </p>
      </Reveal>

      <Reveal className="home-hero-visual" delay={0.08}>
        <div className="home-profile-frame">
          <SafeImage
            className="home-profile-image"
            src={profile.image}
            alt={profile.imageAlt}
            width="800"
            height="800"
            loading="eager"
            fetchPriority="high"
          />
          <div className="home-profile-caption">
            <strong>{profile.name}</strong>
            <span>{profile.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default HomeHero
