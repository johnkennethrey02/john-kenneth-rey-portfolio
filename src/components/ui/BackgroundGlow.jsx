import { motion, useReducedMotion } from 'framer-motion'

// Decorative, slow-drifting gradient glows behind the hero.
export default function BackgroundGlow() {
  const reduce = useReducedMotion()

  const drift = (x, y, duration) =>
    reduce
      ? {}
      : {
          animate: { x: [0, x, 0], y: [0, y, 0] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' },
        }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <motion.div
        className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-[120px]"
        {...drift(40, 30, 18)}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-[120px]"
        {...drift(-30, 40, 22)}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink-950" />
    </div>
  )
}
