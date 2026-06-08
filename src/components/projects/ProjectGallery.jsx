import { useId, useRef, useState } from 'react'
import Reveal from '../animations/Reveal.jsx'
import SafeImage from '../common/SafeImage.jsx'
import {
  detectProjectGalleryDisplayMode,
  resolveProjectGalleryDisplayMode,
} from './projectGalleryDisplay.js'
import '../../styles/project-gallery.css'

function getImageKey(image) {
  return `${image.id}:${image.src ?? ''}`
}

function getFallbackImage(title) {
  return {
    id: 'gallery-fallback',
    src: null,
    alt: title,
    caption: null,
    displayMode: 'auto',
    fit: 'contain',
    thumbnailSrc: null,
  }
}

function ProjectGallery({ images, labels, title }) {
  const galleryId = useId()
  const thumbnailRefs = useRef([])
  const validImages = Array.isArray(images)
    ? images.filter(
        (image) =>
          image &&
          typeof image.id === 'string' &&
          typeof image.alt === 'string',
      )
    : []
  const galleryImages =
    validImages.length > 0 ? validImages : [getFallbackImage(title)]
  const [activeId, setActiveId] = useState(galleryImages[0].id)
  const [detectedModes, setDetectedModes] = useState({})
  const requestedActiveIndex = galleryImages.findIndex(
    ({ id }) => id === activeId,
  )
  const activeIndex = requestedActiveIndex >= 0 ? requestedActiveIndex : 0
  const activeImage = galleryImages[activeIndex]
  const hasMultipleImages = galleryImages.length > 1
  const activeImageKey = getImageKey(activeImage)
  const activeDisplayMode = resolveProjectGalleryDisplayMode(
    activeImage.displayMode,
    detectedModes[activeImageKey],
  )
  const activeFit = activeImage.fit ?? 'contain'
  const headingId = `${galleryId}-heading`
  const statusId = `${galleryId}-status`

  const selectImage = (index, shouldFocusThumbnail = false) => {
    const normalizedIndex =
      (index + galleryImages.length) % galleryImages.length

    setActiveId(galleryImages[normalizedIndex].id)

    if (shouldFocusThumbnail) {
      requestAnimationFrame(() =>
        thumbnailRefs.current[normalizedIndex]?.focus(),
      )
    }
  }

  const handleImageLoad = (image, event) => {
    if (image.displayMode !== 'auto') {
      return
    }

    const detectedMode = detectProjectGalleryDisplayMode(
      event.currentTarget.naturalWidth,
      event.currentTarget.naturalHeight,
    )
    const imageKey = getImageKey(image)

    setDetectedModes((currentModes) =>
      currentModes[imageKey] === detectedMode
        ? currentModes
        : { ...currentModes, [imageKey]: detectedMode },
    )
  }

  const handleKeyDown = (event) => {
    if (
      !hasMultipleImages ||
      (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')
    ) {
      return
    }

    event.preventDefault()

    const direction = event.key === 'ArrowLeft' ? -1 : 1
    const shouldFocusThumbnail = thumbnailRefs.current.includes(
      document.activeElement,
    )

    selectImage(activeIndex + direction, shouldFocusThumbnail)
  }

  return (
    <section
      className="project-gallery"
      aria-labelledby={headingId}
      onKeyDown={handleKeyDown}
    >
      <Reveal>
        <h2 id={headingId}>{title}</h2>
      </Reveal>

      <div
        className="project-gallery-viewer"
        tabIndex={hasMultipleImages ? 0 : undefined}
        aria-describedby={hasMultipleImages ? statusId : undefined}
      >
        <figure className="project-gallery-main">
          <div
            className="project-gallery-stage"
            data-display-mode={activeDisplayMode}
            data-fit={activeFit}
          >
            <div className="project-gallery-frame">
              <SafeImage
                className="project-gallery-main-image"
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeDisplayMode === 'mobile' ? 750 : 1200}
                height={activeDisplayMode === 'mobile' ? 1334 : 750}
                loading="eager"
                fetchPriority="high"
                onLoad={(event) => handleImageLoad(activeImage, event)}
              />
            </div>
          </div>

          {activeImage.caption ? (
            <figcaption>{activeImage.caption}</figcaption>
          ) : null}
        </figure>

        {hasMultipleImages ? (
          <>
            <div className="project-gallery-toolbar">
              <span className="project-gallery-counter" aria-hidden="true">
                {activeIndex + 1} / {galleryImages.length}
              </span>

              <div className="project-gallery-navigation">
                <button
                  type="button"
                  className="project-gallery-navigation-button"
                  aria-label={labels.previousAction}
                  onClick={() => selectImage(activeIndex - 1)}
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className="project-gallery-navigation-button"
                  aria-label={labels.nextAction}
                  onClick={() => selectImage(activeIndex + 1)}
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <ul className="project-gallery-thumbnails">
              {galleryImages.map((image, index) => {
                const imageKey = getImageKey(image)
                const displayMode = resolveProjectGalleryDisplayMode(
                  image.displayMode,
                  detectedModes[imageKey],
                )
                const isActive = index === activeIndex

                return (
                  <li key={image.id}>
                    <button
                      ref={(element) => {
                        thumbnailRefs.current[index] = element
                      }}
                      type="button"
                      className="project-gallery-thumbnail"
                      aria-label={`${labels.thumbnailAction} ${index + 1} / ${galleryImages.length}: ${image.alt}`}
                      aria-current={isActive ? 'true' : undefined}
                      aria-pressed={isActive}
                      data-display-mode={displayMode}
                      onClick={() => selectImage(index)}
                    >
                      <SafeImage
                        src={image.thumbnailSrc ?? image.src}
                        alt=""
                        width={displayMode === 'mobile' ? 72 : 112}
                        height={displayMode === 'mobile' ? 128 : 70}
                        loading="lazy"
                        onLoad={(event) => handleImageLoad(image, event)}
                      />
                      <span
                        className="project-gallery-thumbnail-index"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>

            <p
              id={statusId}
              className="visually-hidden"
              aria-live="polite"
            >
              {labels.counterLabel} {activeIndex + 1} / {galleryImages.length}:{' '}
              {activeImage.alt}
            </p>
          </>
        ) : null}
      </div>
    </section>
  )
}

export default ProjectGallery
