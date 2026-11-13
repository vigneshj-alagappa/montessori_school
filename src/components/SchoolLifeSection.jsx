import { schoolLife } from '../data'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function SchoolLifeSection() {
  return (
    <section className="shell section">
      <SectionHeading title="Life at school" />
      <ul className="life-grid">
        {schoolLife.map(([icon, title, text]) => (
          <li key={title}><span><Icon name={icon} /></span><div><h3>{title}</h3><p>{text}</p></div></li>
        ))}
      </ul>
    </section>
  )
}
