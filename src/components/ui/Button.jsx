const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide ' +
  'transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ' +
  'motion-reduce:transition-none motion-reduce:hover:translate-y-0'

const variants = {
  primary:
    'bg-accent-500 text-white shadow-[0_0_0_1px_rgb(91_155_255/0.4),0_8px_24px_-8px_rgb(47_123_255/0.6)] ' +
    'hover:bg-accent-400 hover:shadow-[0_0_0_1px_rgb(138_184_255/0.5),0_12px_32px_-8px_rgb(47_123_255/0.75)]',
  secondary:
    'border border-white/10 bg-white/[0.03] text-slate-200 backdrop-blur-sm ' +
    'hover:border-accent-400/50 hover:bg-accent-500/10 hover:text-white',
}

/**
 * Link styled as a button.
 * @param {'primary'|'secondary'} variant
 * @param {React.ComponentType} icon - optional Lucide icon shown after the label
 */
export default function Button({ href, variant = 'primary', icon: Icon, children, className = '', ...props }) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && (
        <Icon
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      )}
    </a>
  )
}
