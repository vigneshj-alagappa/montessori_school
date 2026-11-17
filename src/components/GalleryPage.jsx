import { useState } from 'react'
import { withBase } from '../paths'
import { gallerySections } from '../data'
import { Lightbox } from './Lightbox'
import { PageHero } from './PageHero'
import { SectionHeading } from './SectionHeading'

const sectionId = (title) => title.toLowerCase().replace(/[^a-z]+/g, '-')

export function GalleryPage() {
  const jumpTo = (title) => document.getElementById(sectionId(title))?.scrollIntoView()
  // Photo shown full size: { photos, index } of its section, or null
  const [view, setView] = useState(null)

  return (
    <>
      <PageHero title="Gallery" tagline="Moments from our classrooms and campus" />
      <div className="shell">
        <ul className="gal-nav">
          {gallerySections.map(({ title }) => (
            <li key={title}><button type="button" onClick={() => jumpTo(title)}>{title}</button></li>
          ))}
        </ul>
      </div>
      {gallerySections.map(({ title, sub, photos }) => (
        <section className="shell section gal-section" id={sectionId(title)} key={title}>
          <SectionHeading title={title} sub={sub} />
          <div className="gal">
            {photos.map(([caption, src], index) => (
              <figure key={src}>
                <button type="button" className="gal-open" onClick={() => setView({ photos, index })} aria-label={`View larger: ${caption}`}>
                  <img src={withBase(src)} alt={caption} loading="lazy" />
                </button>
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
      <Lightbox
        photos={view?.photos}
        index={view ? view.index : null}
        onChange={(index) => setView((v) => ({ ...v, index }))}
        onClose={() => setView(null)}
      />
    </>
  )
}
