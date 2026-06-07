import { Link } from 'react-router'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="layout-container footer-content">
        <div>
          <Link className="footer-brand" to="/">
            Portfolio
          </Link>
          <p>Portfolio personnel fictif, prêt à être personnalisé.</p>
        </div>

        <nav aria-label="Navigation secondaire">
          <ul className="footer-links">
            <li>
              <Link to="/projects">Projets</Link>
            </li>
            <li>
              <Link to="/resume">CV</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <p className="footer-copyright">
          © {currentYear} Portfolio. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer
