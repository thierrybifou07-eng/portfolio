import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import BackToTopButton from '../components/layout/BackToTopButton.jsx'
import Footer from '../components/layout/Footer.jsx'
import Header from '../components/layout/Header.jsx'
import '../styles/layout.css'

function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>

      <Header />

      <main id="main-content" className="site-main" tabIndex="-1">
        <div className="layout-container">
          <Outlet />
        </div>
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default MainLayout
