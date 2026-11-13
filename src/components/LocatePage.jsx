import { INFO, MAP } from '../data'
import { Icon } from './Icon'
import { PageHero } from './PageHero'

export function LocatePage() {
  return (
    <>
      <PageHero title="Locate us" tagline="Come and see the school" />
      <section className="shell section">
        <p className="locate-address"><Icon name="pin" /> {INFO.address}</p>
        <div className="map">
          <iframe title="School location" src={MAP} loading="lazy" />
        </div>
      </section>
    </>
  )
}
