import { useState, useEffect } from 'react'
import { SCHOOL, INFO, pages } from './config'
import Home from './Home'
import Management from './Management'
import About from './About'
import Gallery from './Gallery'
import Contact from './Contact'
import Locate from './Locate'
import Reviews from './Reviews'

function useHash() {
  const get = () => (window.location.hash.replace('#/', '') || 'home')
  const [p, setP] = useState(get)
  useEffect(() => {
    const f = () => { setP(get()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', f); return () => window.removeEventListener('hashchange', f)
  }, [])
  return p
}

const views = { home: Home, management: Management, about: About, gallery: Gallery, contact: Contact, locate: Locate, reviews: Home }

export default function App() {
  const page = useHash()
  const [open, setOpen] = useState(false)
  const View = views[page] || Home

  return (
    <>
      {/* ── TOP HEADER ── */}
      <header className="site-header">
        <a className="brand" href="#/home">
          <img src="/logo.png" alt={SCHOOL} className="brand-logo" />
        </a>

        <button className="burger" aria-label="Toggle navigation menu" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {pages.map(([k, l]) => (
            <a 
              key={k} 
              href={`#/${k}`} 
              className={page === k ? 'act' : ''} 
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href="#/contact" className="nav-enquire" onClick={() => setOpen(false)}>
            Enquire ↗
          </a>
        </nav>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main>
        <View />
      </main>

      {/* ── EXPANDED FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-columns">
            {/* Col 1: Brand & Vision */}
            <div className="footer-col footer-col-brand">
              <a className="brand footer-brand" href="#/home">
                <img src="/logo.png" alt={SCHOOL} className="footer-logo" />
              </a>
              <p className="footer-tagline">
                Where curious minds grow into capable, compassionate citizens.
              </p>
            </div>

            {/* Col 2: Explore */}
            <div className="footer-col">
              <h4>EXPLORE</h4>
              <ul>
                <li><a href="#/about">Our approach</a></li>
                <li><a href="#/gallery">School life</a></li>
                <li><a href="#/management">Our people</a></li>
              </ul>
            </div>

            {/* Col 3: Visit Us */}
            <div className="footer-col">
              <h4>VISIT US</h4>
              <address>
                <p>12 Montessori Avenue</p>
                <p>Karaikudi, Tamil Nadu 630001</p>
                <p><a href="tel:+914562245678">+91 4562 245 678</a></p>
              </address>
            </div>

            {/* Col 4: Follow Along */}
            <div className="footer-col">
              <h4>FOLLOW ALONG</h4>
              <div className="social-links">
                <a href="#/home" aria-label="Instagram" className="social-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#/home" aria-label="Facebook" className="social-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#/home" aria-label="YouTube" className="social-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Alagappa Montessori School</p>
            <p className="footer-motto">Rooted in respect · Growing with purpose</p>
          </div>
        </div>
      </footer>
    </>
  )
}
