import { montessoriAreas } from '../data'
import { SectionHeading } from './SectionHeading'

export function MontessoriAreasSection() {
  return (
    <section className="shell section">
      <SectionHeading title="Five areas of the Montessori classroom" sub="Children have the freedom to choose from a wide range of activities." />
      <div className="areas">
        {montessoriAreas.map(([title, text, tint]) => (
          <div className={`pillar tint-${tint}`} key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </section>
  )
}
