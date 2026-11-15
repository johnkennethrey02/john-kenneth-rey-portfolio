import { motion, useReducedMotion } from 'framer-motion'
import { Award, BadgeCheck, ClipboardList, GraduationCap, Languages, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../../data/profile'
import profilePhoto from '../../assets/profile.jpg'
import SectionHeading from '../ui/SectionHeading'

const factIcons = {
  education: GraduationCap,
  role: ClipboardList,
  location: MapPin,
  languages: Languages,
  honors: Award,
  certification: BadgeCheck,
}

export default function About() {
  const reduce = useReducedMotion()
  const { about } = profile

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="About Me" title="Getting to know me" />

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Photo */}
          <motion.div {...reveal()} className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-accent-500/25 via-accent-500/5 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 p-2 shadow-2xl shadow-black/40">
                <img
                  src={profilePhoto}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text + facts */}
          <div>
            <div className="space-y-5">
              {about.paragraphs.map((text, i) => (
                <motion.p key={i} {...reveal(0.05 * i)} className="text-base leading-relaxed text-slate-300 sm:text-lg">
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.ul {...reveal(0.1)} className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.facts.map(({ icon, label, value, detail, wide }) => {
                const Icon = factIcons[icon]
                return (
                  <li
                    key={label}
                    className={`flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent-400/30 hover:bg-white/[0.04] ${
                      wide ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                      {Icon && <Icon size={18} aria-hidden="true" />}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
                      <p className="mt-1 font-medium text-white">{value}</p>
                      {detail && <p className="mt-0.5 text-sm text-slate-400">{detail}</p>}
                    </div>
                  </li>
                )
              })}
            </motion.ul>

            <motion.div {...reveal(0.15)} className="mt-10">
              <p className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-400">
                <Sparkles size={16} className="text-accent-400" aria-hidden="true" />
                Areas I’m interested in
              </p>
              <ul className="flex flex-wrap gap-2">
                {about.interests.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-accent-400/20 bg-accent-500/[0.07] px-4 py-1.5 text-sm text-accent-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
