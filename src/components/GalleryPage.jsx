import { gallerySections } from '../data'
import { PageHero } from './PageHero'
import { SectionHeading } from './SectionHeading'

const sectionId = (title) => title.toLowerCase().replace(/[^a-z]+/g, '-')

export function GalleryPage() {
  const jumpTo = (title) => document.getElementById(sectionId(title))?.scrollIntoView()

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
            {photos.map(([caption, src]) => (
              <figure key={src}>
                <img src={src} alt={caption} loading="lazy" />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
