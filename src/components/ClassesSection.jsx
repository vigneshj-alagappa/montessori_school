import { classes, programTints } from '../data'
import { SectionHeading } from './SectionHeading'

export function ClassesSection() {
  return (
    <section className="shell section">
      <SectionHeading title="Our classes" sub="Hands-on classrooms for every stage" />
      <div className="programs">
        {classes.map(([c, a, photo], n) => (
          <article className={`program tint-${programTints[n % programTints.length]}`} key={c}>
            <img src={photo} alt={`${c} students in class`} loading="lazy" />
            <div><h3>{c}</h3><p>Age {a}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
