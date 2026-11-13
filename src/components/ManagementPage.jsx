import { managementLeaders } from '../data'
import { LeaderCard } from './LeaderCard'
import { PageHero } from './PageHero'
import { SectionHeading } from './SectionHeading'

const tints = ['sky', 'pink', 'mint']

export function ManagementPage() {
  const { founder, leaders } = managementLeaders

  return (
    <>
      <PageHero
        title="Guided by vision. Inspired by legacy."
        tagline="The vision and legacy"
        text="Rooted in the timeless educational ideals of Padma Bhushan Dr. R.M. Alagappa Chettiar, empowering young minds across generations."
        photo="/management/trust_building.jpg"
        photoAlt="Dr. Alagappa Chettiar Educational Trust, Alagappapuram, Karaikudi"
      />

      <section className="shell section">
        <LeaderCard person={founder} tint="butter" />
      </section>

      <section className="shell section">
        <SectionHeading
          center
          title="Carrying forward an illustrious tradition"
          sub="Eminent leaders committed to academic excellence, compassionate guidance, and community advancement."
        />
        <div className="leader-list">
          {leaders.map((leader, idx) => <LeaderCard person={leader} tint={tints[idx % tints.length]} key={leader.name} />)}
        </div>
      </section>
    </>
  )
}
