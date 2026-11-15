import { ArrowUp } from 'lucide-react'
import { navLinks, profile } from '../../data/profile'
import SocialLinks from '../ui/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-400/30 bg-accent-500/10 text-xs font-semibold tracking-wider text-accent-300">
                {profile.shortName}
              </span>
              <span className="text-sm font-medium tracking-wide text-slate-200">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-500">{profile.roles.join(' · ')}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className="mt-10 flex flex-col-reverse items-start gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent-400/50">
              <ArrowUp size={14} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
