import { facilities } from '../data'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function FacilitiesSection() {
  return (
    <section className="shell section facilities">
      <div>
        <SectionHeading title="Our facilities" sub="A child-friendly campus to learn, play and grow." />
        <ul className="facility-tiles">
          {facilities.map(([icon, label, tint]) => <li className={`tint-${tint}`} key={label}><Icon name={icon} size={32} />{label}</li>)}
        </ul>
      </div>
      <img className="facility-photo" src="/Drive%20Photos/IMG_1885.jpg" alt="Students working with Montessori materials on the classroom floor" loading="lazy" />
    </section>
  )
}
