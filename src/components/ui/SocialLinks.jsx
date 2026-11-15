import { profile } from '../../data/profile'
import { brandIcons } from './BrandIcons'

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {profile.socials.map(({ label, icon, href }) => {
        const Icon = brandIcons[icon]
        const isPlaceholder = !href || href === '#'
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={isPlaceholder ? `${label} (link coming soon)` : label}
              title={isPlaceholder ? `${label} — link coming soon` : label}
              {...(isPlaceholder
                ? { onClick: (e) => e.preventDefault() }
                : { target: '_blank', rel: 'noopener noreferrer' })}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {Icon && <Icon size={18} />}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
