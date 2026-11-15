import { motion, useReducedMotion } from 'framer-motion'
import { ChartColumn, ClipboardCheck, CodeXml, Database, FlaskConical, Globe, MonitorCog, Network, Server } from 'lucide-react'
import { skillCategories } from '../../data/skills'
import SectionHeading from '../ui/SectionHeading'

const categoryIcons = {
  code: CodeXml,
  web: Globe,
  database: Database,
  server: Server,
  network: Network,
  fundamentals: MonitorCog,
  testing: FlaskConical,
  management: ClipboardCheck,
  analytics: ChartColumn,
}

function SkillTag({ skill }) {
  const { name, level } = typeof skill === 'string' ? { name: skill } : skill

  return (
    <li className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300">
      {name}
      {level && (
        <span className="rounded-md bg-accent-500/10 px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-accent-300">
          {level}
        </span>
      )}
    </li>
  )
}

export default function Skills() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.07 } },
  }
  const card = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Technical Skills"
          title="Tools and technologies I work with"
          subtitle="Grouped by the areas I have worked in through my projects and coursework."
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map(({ title, icon, skills }) => {
            const Icon = categoryIcons[icon]
            return (
              <motion.li
                key={title}
                variants={card}
                className="group flex flex-col rounded-2xl border border-white/[0.07] bg-linear-to-b from-white/[0.04] to-white/[0.01] p-6 transition-colors duration-300 hover:border-accent-400/30"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300 transition-colors duration-300 group-hover:bg-accent-500/20">
                    {Icon && <Icon size={18} aria-hidden="true" />}
                  </span>
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillTag key={typeof skill === 'string' ? skill : skill.name} skill={skill} />
                  ))}
                </ul>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
