import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { useTranslation } from 'react-i18next'

const visibilityThreshold = 480

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > visibilityThreshold)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  const handleClick = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <m.button
          type="button"
          className="back-to-top"
          aria-label={t('accessibility.backToTop')}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleClick}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 15 6-6 6 6" />
          </svg>
        </m.button>
      ) : null}
    </AnimatePresence>
  )
}

export default BackToTopButton
