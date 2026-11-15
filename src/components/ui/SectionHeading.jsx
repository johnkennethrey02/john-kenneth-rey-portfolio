import { motion, useReducedMotion } from 'framer-motion'

/**
 * Reusable section heading: small accent label + large title + optional subtitle.
 */
export default function SectionHeading({ label, title, subtitle, className = '' }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${className}`}
    >
      <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-400">
        <span className="h-px w-8 bg-accent-400/60" aria-hidden="true" />
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </motion.div>
  )
}
