import { admissionSteps, INFO, MAP_LINK } from '../data'
import { Icon } from './Icon'

/* School office details and the admission steps, beside the enquiry form */
export function ContactDetails() {
  return (
    <div className="contact-side">
      <div className="info tint-sky">
        <h3>Reach the school office</h3>
        <p><a className="contact-link" href={MAP_LINK} target="_blank" rel="noopener noreferrer"><Icon name="pin" /> <span>{INFO.address}</span></a></p>
        <p><a className="contact-link" href={INFO.phoneHref}><Icon name="phone" /> <span>{INFO.phone}</span></a></p>
        <p><a className="contact-link" href={`mailto:${INFO.email}`}><Icon name="mail" /> <span>{INFO.email}</span></a></p>
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
