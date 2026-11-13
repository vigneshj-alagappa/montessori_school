import { Icon } from './Icon'
import { Wave } from './Wave'

/* Admissions band at the bottom of the home page */
export function CtaSection() {
  return (
    <section className="admissions">
      <Wave className="wave-top" />
      <div className="shell admissions-inner">
        <img src="/Children_cropped.png" alt="" loading="lazy" />
        <div>
          <h2>Admissions open</h2>
          <p className="brush">LKG to V Standard</p>
        </div>
        <a className="btn" href="/contact">Enquire now <Icon name="arrow" size={20} /></a>
      </div>
    </section>
  )
}
