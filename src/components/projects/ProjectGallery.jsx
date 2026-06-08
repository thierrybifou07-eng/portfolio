import Reveal from '../animations/Reveal.jsx'
import SafeImage from '../common/SafeImage.jsx'

function ProjectGallery({ images, title }) {
  return (
    <section className="project-gallery" aria-labelledby="project-gallery-title">
      <Reveal>
        <h2 id="project-gallery-title">{title}</h2>
      </Reveal>

      <div className="project-gallery-grid">
        {images.map((image, index) => (
          <Reveal key={image.alt} delay={index * 0.06}>
            <figure>
              <SafeImage
                src={image.src}
                alt={image.alt}
                width="1200"
                height="800"
              />
              <figcaption>{image.alt}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default ProjectGallery
