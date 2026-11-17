import { withBase } from '../paths'
import { useState } from 'react'
import { INFO, MAP_LINK, pages } from '../data'
import { PAGE_META } from '../seo'
import { Icon } from './Icon'
import { Logo } from './Logo'

const NAV_ICONS = { home: 'home', management: 'people', about: 'info', gallery: 'image', contact: 'mail', locate: 'pin' }

export function Navbar({ page }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Logo className="brand-logo" />

        <button className="burger" aria-label="Toggle navigation menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav id="site-nav" className={`nav-links ${open ? 'open' : ''}`}>
          {pages.map(([k, l]) => {
            const link = (
              <a key={k} href={withBase(PAGE_META[k].path)} className={`nav-item ${page === k ? 'act' : ''}`.trim()} onClick={() => setOpen(false)}>
                {k !== 'locate' && <Icon name={NAV_ICONS[k]} size={18} />}
                {l}
              </a>
            )
            if (k !== 'locate') return link
            // The pin opens the school in Google Maps; the words open the Locate Us page
            return (
              <span className="nav-locate" key={k}>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="nav-pin" aria-label="Open in Google Maps" title="Open in Google Maps" onClick={() => setOpen(false)}>
                  <Icon name="pin" size={18} />
                </a>
                {link}
              </span>
            )
          })}
          <a href={INFO.phoneHref} className="nav-phone" aria-label={`Call ${INFO.phoneShort}`} title={`Call ${INFO.phoneShort}`}><Icon name="phone" size={18} /> <span className="nav-phone-text">{INFO.phoneShort}</span></a>
          <a href={INFO.whatsappHref} target="_blank" rel="noopener noreferrer" className="nav-whatsapp" aria-label={`WhatsApp ${INFO.whatsapp}`} title={`WhatsApp ${INFO.whatsapp}`} onClick={() => setOpen(false)}>
            <Icon name="whatsapp" size={22} />
          </a>
        </nav>
      </div>
    </header>
  )
}
