import { galleryPreview } from '../data'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

/* Four photos on the home page, linking to the full Gallery */
export function GalleryPreview() {
  return (
    <div>
      <SectionHeading title="Gallery" />
      <div className="gallery-strip">
        {galleryPreview.map(([alt, src]) => <img key={src} src={src} alt={alt} loading="lazy" />)}
      </div>
      <a className="btn-outline" href="/gallery">See all photos <Icon name="arrow" size={18} /></a>
    </div>
  )
}
