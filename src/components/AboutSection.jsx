import { withBase } from '../paths'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

/* Short introduction on the home page, linking to the About page */
export function AboutSection() {
  return (
    <section className="shell section home-about">
      <div>
        <SectionHeading title="About us" />
        <h3>A strong start since 1953</h3>
        <p>Founded by Dr. Alagappa Chettiar, Alagappa Montessori School was among the first Montessori schools in the region. Children learn through the Play Way method, in a prepared environment that helps each child grow in independence.</p>
        <a className="btn-outline" href={withBase('/about')}>Know more <Icon name="arrow" size={18} /></a>
      </div>
      <img className="blob-photo" src={withBase('/Children_cropped.png')} alt="Students walking together on the school campus" />
      <div className="vision-card">
        <div>
          <h3><Icon name="star" /> Our vision</h3>
          <p>Confident, compassionate lifelong learners.</p>
        </div>
        <div>
          <h3><Icon name="sun" /> Our mission</h3>
          <p>Nurture every child&rsquo;s natural joy of learning.</p>
        </div>
      </div>
    </section>
  )
}
