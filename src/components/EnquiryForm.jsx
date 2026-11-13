import { useState } from 'react'
import { classes, INFO } from '../data'
import { Icon } from './Icon'

/* Opens the parent's email app with the enquiry addressed to the school */
export function EnquiryForm() {
  const [sent, setSent] = useState(false)

  const openEmail = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const body = [
      `Parent name: ${name}`,
      `Phone number: ${form.get('phone')}`,
      `Class of interest: ${form.get('class') || 'Not specified'}`,
      '',
      form.get('message')
    ].join('\n')
    const subject = `School enquiry from ${name}`
    window.location.href = `mailto:${INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="info tint-butter" role="status">
        <h3>One more step</h3>
        <p>Your email app should have opened with your message ready. Please press Send there so it reaches us.</p>
        <p>If it did not open, call <a href={INFO.phoneHref}>{INFO.phone}</a> or write to <a href={`mailto:${INFO.email}`}>{INFO.email}</a>.</p>
        <button type="button" className="btn" onClick={() => setSent(false)}>Back to the form</button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={openEmail}>
      <label>Parent name
        <input required name="name" autoComplete="name" />
      </label>
      <label>Phone number
        <input required type="tel" name="phone" autoComplete="tel" />
      </label>
      <label>Class of interest
        <select name="class" defaultValue="">
          <option value="">Select a class</option>
          {classes.map(([c]) => <option key={c}>{c}</option>)}
        </select>
      </label>
      <label>Your message
        <textarea rows="4" name="message" />
      </label>
      <button className="btn">Send by email <Icon name="arrow" size={20} /></button>
    </form>
  )
}
