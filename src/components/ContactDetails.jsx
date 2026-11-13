import { admissionSteps, INFO } from '../data'
import { Icon } from './Icon'

/* School office details and the admission steps, beside the enquiry form */
export function ContactDetails() {
  return (
    <div className="contact-side">
      <div className="info tint-sky">
        <h3>Reach the school office</h3>
        <p><Icon name="pin" /> <span>{INFO.address}</span></p>
        <p><Icon name="phone" /> <a href={INFO.phoneHref}>{INFO.phone}</a></p>
        <p><Icon name="mail" /> <a href={`mailto:${INFO.email}`}>{INFO.email}</a></p>
        <p><Icon name="clock" /> <span>{INFO.hours}</span></p>
      </div>
      <div className="info tint-butter">
        <h3>How to apply</h3>
        <ol className="apply-steps">
          {admissionSteps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
    </div>
  )
}
