import { m, useReducedMotion } from 'motion/react'

function Reveal({ children, className, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <m.div
      className={className}
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 20,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.12 : 0.45,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {children}
    </m.div>
  )
}

export default Reveal
