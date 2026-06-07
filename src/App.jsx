import { domAnimation, LazyMotion, MotionConfig } from 'motion/react'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <AppRoutes />
      </MotionConfig>
    </LazyMotion>
  )
}

export default App
