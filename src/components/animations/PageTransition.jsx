import { m, useReducedMotion } from 'motion/react'

function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      className="page-transition"
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 14,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : -8,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.12 : 0.28,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </m.div>
  )
}

export default PageTransition
