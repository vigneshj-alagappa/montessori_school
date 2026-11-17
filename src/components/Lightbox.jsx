import { useEffect, useRef } from 'react'
import { withBase } from '../paths'

const Chevron = ({ d }) => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
)

/* Full-size view of one gallery photo, with previous/next within its section.
   photos: [[caption, src], ...]; index: the open photo, or null when closed. */
export function Lightbox({ photos, index, onChange, onClose }) {
  const dialog = useRef(null)
  const open = index !== null

  useEffect(() => {
    const d = dialog.current
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  if (!photos) return <dialog ref={dialog} className="lightbox" onClose={onClose} />

  const count = photos.length
  const go = (step) => onChange((index + step + count) % count)
  const [caption, src] = photos[index ?? 0]

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={caption}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <figure>
        <img src={withBase(src)} alt={caption} />
        <figcaption>{caption} <span>{(index ?? 0) + 1} / {count}</span></figcaption>
      </figure>
      <button type="button" className="lb-close" onClick={onClose} aria-label="Close">
        <Chevron d="M6 6l12 12M18 6L6 18" />
      </button>
      {count > 1 && (
        <>
          <button type="button" className="lb-prev" onClick={() => go(-1)} aria-label="Previous photo"><Chevron d="M15 5l-7 7 7 7" /></button>
          <button type="button" className="lb-next" onClick={() => go(1)} aria-label="Next photo"><Chevron d="M9 5l7 7-7 7" /></button>
        </>
      )}
    </dialog>
  )
}
