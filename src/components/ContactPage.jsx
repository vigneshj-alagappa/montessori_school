import { ContactDetails } from './ContactDetails'
import { EnquiryForm } from './EnquiryForm'
import { PageHero } from './PageHero'

export function ContactPage() {
  return (
    <>
      <PageHero title="Contact us" tagline="We would love to hear from you" />
      <section className="shell section contact-grid">
        <ContactDetails />
        <EnquiryForm />
      </section>
    </>
  )
}
