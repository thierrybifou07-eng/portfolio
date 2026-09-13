import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router'
import siteConfig from '../../config/site.js'
import useOutsideInteraction from '../../hooks/useOutsideInteraction.js'
import Navbar from './Navbar.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef(null)
  const navigationRef = useRef(null)
  const closeTimerRef = useRef(null)
  const { pathname } = useLocation()
  const { t } = useTranslation()

  useOutsideInteraction({
    enabled: isMenuOpen,
    onOutside: () => setIsMenuOpen(false),
    refs: [menuButtonRef, navigationRef],
  })

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      closeTimerRef.current = null
      setIsMenuOpen(false)
    }, 0)

    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => () => clearTimeout(closeTimerRef.current), [])

  const openMenu = () => {
    clearTimeout(closeTimerRef.current)
    setIsMenuOpen(true)
  }

  const scheduleClose = () => {
    clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => setIsMenuOpen(false), 150)
  }

  const closeMenu = () => {
    clearTimeout(closeTimerRef.current)
    setIsMenuOpen(false)
  }

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="layout-container header-content">
        <Link className="site-brand" to="/" onClick={closeMenu}>
          <span aria-hidden="true">{siteConfig.shortName}</span>
          <span>{t('site.name')}</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{t('navigation.menu')}</span>
        </button>

        <Navbar
          ref={navigationRef}
          isOpen={isMenuOpen}
          onNavigate={closeMenu}
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        />
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="navigation-backdrop"
          aria-label={t('navigation.closeMenu')}
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

export default Header
