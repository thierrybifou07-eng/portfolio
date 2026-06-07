import { NavLink } from 'react-router'

const navigationItems = [
  { label: 'Accueil', to: '/', end: true },
  { label: 'À propos', to: '/about' },
  { label: 'Projets', to: '/projects' },
  { label: 'Compétences', to: '/skills' },
  { label: 'CV', to: '/resume' },
  { label: 'Contact', to: '/contact', featured: true },
]

function Navbar({ isOpen, onNavigate }) {
  return (
    <nav
      id="primary-navigation"
      className="site-navigation"
      aria-label="Navigation principale"
      data-open={isOpen}
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
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
