import { useState } from 'react'
import { classes, INFO } from '../data'
import { Icon } from './Icon'

const q = encodeURIComponent

/* Ways to send the enquiry. A mailto: link alone does nothing on computers without
   an email app set up, so Gmail and Outlook open in the browser as well. */
const sendLinks = ({ subject, body }) => [
  ['Gmail', `https://mail.google.com/mail/?view=cm&fs=1&to=${q(INFO.email)}&su=${q(subject)}&body=${q(body)}`],
  ['Outlook', `https://outlook.live.com/mail/0/deeplink/compose?to=${q(INFO.email)}&subject=${q(subject)}&body=${q(body)}`],
  ['Email app', `mailto:${INFO.email}?subject=${q(subject)}&body=${q(body)}`]
]

/* Prepares the parent's enquiry as an email addressed to the school */
export function EnquiryForm() {
  const [message, setMessage] = useState(null)
  const [copied, setCopied] = useState(false)

  const prepare = (e) => {
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
    setCopied(false)
    setMessage({ subject: `School enquiry from ${name}`, body })
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`To: ${INFO.email}\nSubject: ${message.subject}\n\n${message.body}`)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  if (message) {
    return (
      <div className="info tint-butter" role="status">
        <h3>Send your enquiry</h3>
        <p>Your message is ready. Choose how to send it, then press Send in the email that opens.</p>
        <div className="send-options">
          {sendLinks(message).map(([label, href]) => (
            <a key={label} className="btn-outline" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              <Icon name="mail" size={18} /> {label}
            </a>
          ))}
          <button type="button" className="btn-outline" onClick={copy}>
            <Icon name="copy" size={18} /> {copied ? 'Copied' : 'Copy message'}
          </button>
        </div>
        <p>Or call <a href={INFO.phoneHref}>{INFO.phone}</a>, or write to <a href={`mailto:${INFO.email}`}>{INFO.email}</a>.</p>
        <button type="button" className="btn" onClick={() => setMessage(null)}>Back to the form</button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={prepare}>
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
