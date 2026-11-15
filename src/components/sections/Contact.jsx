import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Copy, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import SocialLinks from '../ui/SocialLinks'

function useCopy(text) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // Fallback for browsers without the Clipboard API
      const input = document.createElement('textarea')
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return [copied, copy]
}

export default function Contact() {
  const reduce = useReducedMotion()
  const { contact, location } = profile
  const [copied, copy] = useCopy(contact.email)

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-500/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading label="Contact" title="Get in touch" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Invitation */}
          <motion.div {...reveal()}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 text-sm text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {contact.availability}
            </span>

            <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">{contact.message}</p>

            <p className="mt-8 mb-3 text-sm font-medium text-slate-400">Open to</p>
            <ul className="flex flex-wrap gap-2">
              {contact.openTo.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-accent-400/20 bg-accent-500/[0.07] px-4 py-1.5 text-sm text-accent-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact cards */}
          <motion.div {...reveal(0.1)} className="space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-linear-to-b from-white/[0.05] to-white/[0.01] p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block break-all text-lg font-medium text-white transition-colors hover:text-accent-300"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgb(47_123_255/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400 motion-reduce:hover:translate-y-0"
                >
                  <Send size={15} aria-hidden="true" /> Send email
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white motion-reduce:hover:translate-y-0"
                >
                  {copied ? (
                    <>
                      <Check size={15} className="text-emerald-400" aria-hidden="true" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={15} aria-hidden="true" /> Copy email
                    </>
                  )}
                </button>
              </div>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Location</p>
                  <p className="mt-1 font-medium text-white">{location}</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Find me on</p>
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
