import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Expand, FlaskConical, Images } from 'lucide-react'
import { GitHubIcon } from './BrandIcons'
import ImageViewer from './ImageViewer'

function Placeholder() {
  // Designed visual for projects without screenshots (e.g. Selenium testing)
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-linear-to-br from-ink-800 via-ink-900 to-ink-950">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="relative w-3/4 max-w-xs rounded-xl border border-white/10 bg-ink-900/80 p-4 shadow-xl backdrop-blur">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
          <FlaskConical size={16} className="text-accent-300" aria-hidden="true" />
          Selenium IDE
        </div>
        <ul className="space-y-2" aria-hidden="true">
          {[80, 65, 72].map((width, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <Check size={10} />
              </span>
              <span className="h-2 rounded-full bg-white/10" style={{ width: `${width}%` }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ProjectCard({ project }) {
  const reduce = useReducedMotion()
  const [viewerIndex, setViewerIndex] = useState(null)
  const { title, subtitle, label, role, description, highlights, tags, images, links, featured } = project
  const hasImages = images.length > 0
  const cover = hasImages ? images[0] : null

  return (
    <motion.article
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group overflow-hidden rounded-3xl border border-white/[0.07] bg-linear-to-b from-white/[0.04] to-white/[0.01] transition-colors duration-300 hover:border-accent-400/25 ${
        featured ? 'lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]' : 'flex flex-col'
      }`}
    >
      {/* Media */}
      <div className={`border-b border-white/[0.06] ${featured ? 'lg:border-r lg:border-b-0' : ''}`}>
        {hasImages ? (
          <div>
            <button
              type="button"
              onClick={() => setViewerIndex(0)}
              className="relative block w-full overflow-hidden"
              aria-label={`View ${title} screenshots`}
            >
              <img
                src={cover.src}
                alt={cover.alt}
                loading="lazy"
                className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none ${
                  featured ? 'aspect-[16/10]' : 'aspect-video'
                }`}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 opacity-0 transition-all duration-300 hover:bg-ink-950/40 hover:opacity-100">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-ink-900/80 px-4 py-2 text-sm text-white">
                  <Expand size={15} aria-hidden="true" /> View screenshots
                </span>
              </span>
              {images.length > 1 && (
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1 text-xs text-slate-200 backdrop-blur">
                  <Images size={13} aria-hidden="true" /> {images.length}
                </span>
              )}
            </button>

            {featured && images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 p-3">
                {images.slice(1, 5).map((img, i) => {
                  const index = i + 1
                  const remaining = images.length - 5
                  const isLast = i === 3 && remaining > 0
                  return (
                    <button
                      key={img.alt}
                      type="button"
                      onClick={() => setViewerIndex(index)}
                      aria-label={isLast ? `View all ${images.length} screenshots` : `Open screenshot: ${img.alt}`}
                      className="relative overflow-hidden rounded-lg border border-white/10 transition-colors hover:border-accent-400/50"
                    >
                      <img src={img.src} alt="" loading="lazy" className="aspect-video w-full object-cover object-top" />
                      {isLast && (
                        <span className="absolute inset-0 flex items-center justify-center bg-ink-950/75 text-sm font-medium text-white">
                          +{remaining}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          <Placeholder />
        )}
      </div>

      {/* Content */}
      <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-8' : 'p-6'}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium">
          <span className="rounded-full bg-accent-500/10 px-3 py-1 uppercase tracking-wider text-accent-300">{label}</span>
          {role && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">Role: {role}</span>
          )}
        </div>

        <h3 className={`font-semibold tracking-tight text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{title}</h3>
        <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>

        <ul className="mt-5 space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400/80" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">
              {tag}
            </li>
          ))}
        </ul>

        {/* Source code button: only shown when the project has a repo link in projects.js */}
        {links.code && (
          <div className="mt-auto pt-6">
            <a
              href={links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-white"
            >
              <GitHubIcon size={16} /> Source code <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>

      {hasImages && (
        <ImageViewer
          images={images}
          index={viewerIndex}
          title={title}
          onClose={() => setViewerIndex(null)}
          onChange={setViewerIndex}
        />
      )}
    </motion.article>
  )
}
