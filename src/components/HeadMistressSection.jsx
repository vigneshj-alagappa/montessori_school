import { headmistressLeader } from '../data'
import { LeaderCard } from './LeaderCard'
import { SectionHeading } from './SectionHeading'

export function HeadMistressSection() {
  return (
    <section className="shell section" id="headmistress">
      <SectionHeading center title="Head Mistress’s desk" sub="A warm welcome from our Head Mistress, guiding young minds with love and purpose." />
      <LeaderCard person={headmistressLeader} tint="mint" greeting="Dear Students and Parents," />
    </section>
  )
}
