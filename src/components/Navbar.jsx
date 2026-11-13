import { withBase } from '../paths'
import { useState } from 'react'
import { INFO, pages } from '../data'
import { PAGE_META } from '../seo'
import { Icon } from './Icon'
import { Logo } from './Logo'

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
          {pages.map(([k, l]) => (
            <a key={k} href={withBase(PAGE_META[k].path)} className={page === k ? 'act' : ''} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href={INFO.phoneHref} className="nav-phone"><Icon name="phone" size={18} /> {INFO.phoneShort}</a>
        </nav>
      </div>
    </header>
  )
}
