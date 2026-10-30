import { useState } from 'react'
import { INFO, classes, Title } from './config'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div className="page-bg contact">
      <section className="wrap">
        <Title sub="We would love to hear from you">Contact Us</Title>
        <div className="split top">
          <div className="info">
            <h3>Reach the school office</h3>
            <p>📍 {INFO.address}</p>
            <p>📞 {INFO.phone}</p>
            <p>✉️ {INFO.email}</p>
            <p>🕘 {INFO.hours}</p>
          </div>
          {sent
            ? <div className="info"><h3>Thank you!</h3><p>We have received your message and will reply soon.</p></div>
            : <form className="card form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <input required placeholder="Parent name" />
                <input required type="tel" placeholder="Phone number" />
                <select defaultValue="">
                  <option value="" disabled>Class of interest</option>
                  {classes.map(([c]) => <option key={c}>{c}</option>)}
                </select>
                <textarea rows="4" placeholder="Your message" />
                <button className="btn">Send message</button>
              </form>}
        </div>
      </section>
    </div>
  )
}
