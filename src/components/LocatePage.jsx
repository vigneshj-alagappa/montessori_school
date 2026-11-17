import { INFO, MAP, MAP_LINK } from '../data'
import { Icon } from './Icon'
import { PageHero } from './PageHero'

export function LocatePage() {
  return (
    <>
      <PageHero title="Locate us" tagline="Come and see the school" />
      <section className="shell section">
        <p className="locate-address"><a className="contact-link" href={MAP_LINK} target="_blank" rel="noopener noreferrer"><Icon name="pin" /> <span>{INFO.address}</span></a></p>
        <div className="map">
          <iframe title="School location" src={MAP} loading="lazy" />
        </div>
      </section>
    </>
  )
}
