import { withBase } from '../paths'
import { pillars } from '../data'
import { HeadMistressSection } from './HeadMistressSection'
import { Icon } from './Icon'
import { MontessoriAreasSection } from './MontessoriAreasSection'
import { PageHero } from './PageHero'
import { SchoolLifeSection } from './SchoolLifeSection'
import { SectionHeading } from './SectionHeading'

export function AboutUsPage() {
  return (
    <>
      <PageHero
        title="A prepared world for growing minds"
        tagline="Our philosophy"
        text="Montessori is more than a method here. It is the way we see children: capable, connected and wonderfully full of possibility."
      />

      <section className="shell section about-intro">
        <img className="blob-photo" src={withBase('/about-montessori-materials.png')} alt="Montessori wooden puzzle learning materials" />
        <div>
          <SectionHeading title="Education that starts with respect" />
          <div className="prose">
            <p>
              Alagappa Montessori School was founded in 1953 by Dr. Alagappa Chettiar. Being among the first Montessori schools in the region, education is imparted to children in the Play Way method, paving the way for a child to learn effectively.
            </p>
            <p>
              The Montessori education method calls for free activity within a &ldquo;prepared environment&rdquo;, meaning an educational environment tailored to meet basic human characteristics, to the specific characteristics of children at different ages, and to the individual personalities of each child. This allows the child to develop independence in all areas according to his or her inner psychological directives.
            </p>
            <p>
              The school has a vast area for playing. There are fifteen classrooms with sufficient ventilation and adequate furniture. The classes function from Lower Kindergarten to V Standard. A large number of play things are provided to educate and entertain the kids. Safe and efficient transport service is also available to the children.
            </p>
            <p>
              Our Montessori teachers are certified in using Dr. Montessori&rsquo;s methods and materials to lovingly guide each child in developing unique abilities within a carefully planned curriculum.
            </p>
          </div>
          <a className="btn" href={withBase('/management')}>Meet our people <Icon name="arrow" size={20} /></a>
        </div>
      </section>

      <section className="shell section pillars">
        {pillars.map(([title, text, tint]) => (
          <div className={`pillar tint-${tint}`} key={title}><h3>{title}</h3><p>{text}</p></div>
        ))}
      </section>

      <MontessoriAreasSection />
      <SchoolLifeSection />
      <HeadMistressSection />

      <section className="shell section">
        <div className="closing-quote">
          <blockquote>&ldquo;The child is both a hope and a promise for mankind.&rdquo;</blockquote>
          <cite>Maria Montessori</cite>
        </div>
      </section>
    </>
  )
}
