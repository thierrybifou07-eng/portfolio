import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router'
import PreferenceControls from './PreferenceControls.jsx'

const navigationItems = [
  { labelKey: 'navigation.home', to: '/', end: true },
  { labelKey: 'navigation.about', to: '/about' },
  { labelKey: 'navigation.projects', to: '/projects' },
  { labelKey: 'navigation.skills', to: '/skills' },
  { labelKey: 'navigation.resume', to: '/resume' },
  { labelKey: 'navigation.contact', to: '/contact', featured: true },
]

function Navbar({ isOpen, onNavigate, onMouseEnter, onMouseLeave, ref }) {
  const { t } = useTranslation()

  return (
    <nav
      ref={ref}
      id="primary-navigation"
      className="site-navigation"
      aria-label={t('navigation.primaryLabel')}
      data-open={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul>
        {navigationItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'navigation-link',
                  isActive ? 'is-active' : '',
                  item.featured ? 'is-featured' : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
              onClick={onNavigate}
            >
              {t(item.labelKey)}
            </NavLink>
          </li>
        ))}
      </ul>
      <PreferenceControls />
    </nav>
  )
}

export default Navbar
