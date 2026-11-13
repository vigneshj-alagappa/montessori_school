import { withBase } from '../paths'
import { Decor } from './Decor'
import { Wave } from './Wave'

/* Sky-blue header at the top of every inner page */
export function PageHero({ title, tagline, text, photo, photoAlt }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-inner">
        <div className="page-hero-copy">
          <h1>{title}</h1>
          {tagline && <p className="brush">{tagline}</p>}
          {text && <p className="page-hero-text">{text}</p>}
        </div>
        {photo ? <img className="page-hero-photo" src={withBase(photo)} alt={photoAlt} /> : <Decor />}
      </div>
      <Wave />
    </section>
  )
}
