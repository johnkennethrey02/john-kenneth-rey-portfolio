import { motion, useReducedMotion } from 'framer-motion'
import { Award, BadgeCheck, Briefcase, CalendarDays, GraduationCap } from 'lucide-react'
import { timeline } from '../../data/experience'
import SectionHeading from '../ui/SectionHeading'

const types = {
  experience: { label: 'Experience', icon: Briefcase },
  education: { label: 'Education', icon: GraduationCap },
  certification: { label: 'Certification', icon: BadgeCheck },
}

export default function Experience() {
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Experience & Education" title="My journey so far" />

        <ol className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-5 w-px bg-linear-to-b from-accent-400/70 via-accent-500/30 to-transparent"
          />

          {timeline.map((entry, i) => {
            const { label, icon: Icon } = types[entry.type]
            return (
              <motion.li
                key={`${entry.title}-${entry.period}`}
                initial={{ opacity: 0, y: reduce ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: reduce ? 0 : i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative pb-10 pl-16 last:pb-0"
              >
                {/* Node */}
                <span className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-accent-400/40 bg-ink-900 text-accent-300 shadow-[0_0_18px_-2px_rgb(47_123_255/0.55)]">
                  <Icon size={17} aria-hidden="true" />
                </span>

                <div className="rounded-2xl border border-white/[0.07] bg-linear-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors duration-300 hover:border-accent-400/25">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium">
                    <span className="rounded-full bg-accent-500/10 px-3 py-1 uppercase tracking-wider text-accent-300">
                      {label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-slate-300">
                      <CalendarDays size={12} aria-hidden="true" />
                      {entry.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white sm:text-xl">{entry.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{entry.organization}</p>
                  {entry.detail && <p className="mt-1 text-sm text-slate-500">{entry.detail}</p>}

                  {entry.points && (
                    <ul className="mt-4 space-y-2.5">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/80" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.honors && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {entry.honors.map((honor) => (
                        <li
                          key={honor}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/20 bg-amber-400/[0.06] px-3 py-1.5 text-sm text-amber-200"
                        >
                          <Award size={14} aria-hidden="true" />
                          {honor}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
