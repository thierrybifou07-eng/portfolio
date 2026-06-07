import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="layout-container footer-content">
        <div>
          <Link className="footer-brand" to="/">
            {t('site.name')}
          </Link>
          <p>{t('footer.tagline')}</p>
        </div>

        <nav aria-label={t('navigation.secondaryLabel')}>
          <ul className="footer-links">
            <li>
              <Link to="/projects">{t('navigation.projects')}</Link>
            </li>
            <li>
              <Link to="/resume">{t('navigation.resume')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('navigation.contact')}</Link>
            </li>
          </ul>
        </nav>

        <p className="footer-copyright">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  )
}

export default Footer
