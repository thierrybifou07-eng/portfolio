import { Route, Routes } from 'react-router'
import AboutPage from '../pages/AboutPage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import ProjectDetailPage from '../pages/ProjectDetailPage.jsx'
import ProjectsPage from '../pages/ProjectsPage.jsx'
import ResumePage from '../pages/ResumePage.jsx'
import SkillsPage from '../pages/SkillsPage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="projects/:slug" element={<ProjectDetailPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
