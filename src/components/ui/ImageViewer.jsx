import { useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Full-screen screenshot viewer.
 * Keyboard: ← / → to browse, Esc to close.
 */
export default function ImageViewer({ images, index, title, onClose, onChange }) {
  const open = index !== null && index >= 0
  const closeRef = useRef(null)
  const count = images.length

  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange])
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && count > 1) prev()
      if (e.key === 'ArrowRight' && count > 1) next()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, count, prev, next, onClose])

  const image = open ? images[index] : null

  // Rendered into <body> so the card's transform/overflow can't clip the full-screen overlay
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-md"
          onClick={onClose}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6" onClick={(e) => e.stopPropagation()}>
            <p className="min-w-0 truncate text-sm text-slate-300">
              <span className="font-medium text-white">{title}</span>
              {count > 1 && <span className="ml-3 text-slate-500">{index + 1} / {count}</span>}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/30 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              // Swipe left/right to browse on touch screens
              drag={count > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.35}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) next()
                else if (info.offset.x > 60) prev()
              }}
              draggable={false}
              className="max-h-full max-w-full cursor-grab touch-pan-y rounded-lg border border-white/10 object-contain shadow-2xl active:cursor-grabbing"
            />

            {count > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={(e) => {
                    e.stopPropagation()
                    prev()
                  }}
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-900/80 text-slate-200 transition-colors hover:border-accent-400/50 hover:text-white sm:left-4"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={(e) => {
                    e.stopPropagation()
                    next()
                  }}
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-900/80 text-slate-200 transition-colors hover:border-accent-400/50 hover:text-white sm:right-4"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          <p className="px-6 pb-6 text-center text-sm text-slate-400" onClick={(e) => e.stopPropagation()}>
            {image.alt}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
