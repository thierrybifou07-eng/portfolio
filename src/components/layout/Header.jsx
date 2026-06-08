import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import siteConfig from '../../config/site.js'
import Navbar from './Navbar.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { t } = useTranslation()

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

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
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
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{t('navigation.menu')}</span>
        </button>

        <Navbar isOpen={isMenuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  )
}

export default Header
