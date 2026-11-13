import { withBase } from '../paths'
import { heroBadges } from '../data'
import { Decor } from './Decor'
import { Icon } from './Icon'
import { Wave } from './Wave'

export function HeroSection() {
  return (
    <section className="hero">
      <img className="hero-photo" src={withBase('/AM_School_front_elevation.png')} alt="Front view of the Alagappa Montessori School building" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <Decor />
          <h1>Alagappa Montessori School</h1>
          <p className="brush">Where little minds learn by doing</p>
          <ul className="hero-badges">
            {heroBadges.map(([icon, label]) => <li key={label}><span><Icon name={icon} /></span>{label}</li>)}
          </ul>
          <a className="btn" href={withBase('/contact')}>Book a school visit <Icon name="arrow" size={20} /></a>
        </div>
      </div>
      <Wave />
    </section>
  )
}
