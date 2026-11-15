import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import BackgroundGlow from '../ui/BackgroundGlow'
import Button from '../ui/Button'
import SocialLinks from '../ui/SocialLinks'

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-20">
      <BackgroundGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-6"
      >
        <motion.p
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_8px_2px_rgb(91_155_255/0.6)]" />
          Portfolio
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Hi, I&apos;m{' '}
          <span className="bg-linear-to-r from-white via-accent-300 to-accent-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-base font-medium text-slate-300 sm:text-lg"
          aria-label="Professional focus"
        >
          {profile.roles.map((role, i) => (
            <li key={role} className="flex items-center gap-4">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-accent-400/70" aria-hidden="true" />}
              {role}
            </li>
          ))}
        </motion.ul>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="#projects" icon={ArrowRight}>
            View Projects
          </Button>
          <Button href="#contact" variant="secondary" icon={Mail}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-5">
          <span className="h-px w-10 bg-white/15" aria-hidden="true" />
          <SocialLinks />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 transition-colors hover:text-accent-300 md:block"
      >
        <motion.span
          className="block"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
        </motion.span>
      </motion.a>
    </section>
  )
}
