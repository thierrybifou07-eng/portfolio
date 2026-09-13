import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/HomePage.jsx'

const AboutPage = lazy(() => import('../pages/AboutPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'))
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage.jsx'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage.jsx'))
const ResumePage = lazy(() => import('../pages/ResumePage.jsx'))
const SkillsPage = lazy(() => import('../pages/SkillsPage.jsx'))

function RouteLoading() {
  const { t } = useTranslation()

  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="route-loading-spinner" aria-hidden="true" />
      <span>{t('accessibility.loadingPage')}</span>
    </div>
  )
}

function DeferredPage({ children }) {
  return <Suspense fallback={<RouteLoading />}>{children}</Suspense>
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={
            <DeferredPage>
              <AboutPage />
            </DeferredPage>
          }
        />
        <Route
          path="projects"
          element={
            <DeferredPage>
              <ProjectsPage />
            </DeferredPage>
          }
        />
        <Route
          path="projects/:slug"
          element={
            <DeferredPage>
              <ProjectDetailPage />
            </DeferredPage>
          }
        />
        <Route
          path="skills"
          element={
            <DeferredPage>
              <SkillsPage />
            </DeferredPage>
          }
        />
        <Route
          path="resume"
          element={
            <DeferredPage>
              <ResumePage />
            </DeferredPage>
          }
        />
        <Route
          path="contact"
          element={
            <DeferredPage>
              <ContactPage />
            </DeferredPage>
          }
        />
        <Route
          path="*"
          element={
            <DeferredPage>
              <NotFoundPage />
            </DeferredPage>
          }
        />
      </Route>
    </Routes>
  )
}

export default AppRoutes
