import { withBase } from '../paths'
import { INFO, SOCIAL, pages } from '../data'
import { PAGE_META } from '../seo'
import { Icon } from './Icon'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-columns">
          <div>
            <Logo className="footer-logo" />
            <p className="footer-tagline">Where curious minds grow into capable, compassionate citizens.</p>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul className="footer-links">
              {pages.map(([k, l]) => <li key={k}><a href={withBase(PAGE_META[k].path)}>{l}</a></li>)}
            </ul>
          </div>

          <div>
            <h4>Visit us</h4>
            <address className="footer-contact">
              <p><Icon name="pin" size={18} /> {INFO.address}</p>
              <p><Icon name="phone" size={18} /> <a href={INFO.phoneHref}>{INFO.phone}</a></p>
              <p><Icon name="mail" size={18} /> <a href={`mailto:${INFO.email}`}>{INFO.email}</a></p>
            </address>
          </div>

          <div>
            <h4>Follow us</h4>
            <div className="social-links">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><Icon name="instagram" size={20} /></a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon"><Icon name="youtube" size={20} /></a>
            </div>
          </div>
        </div>

        <p className="footer-bottom">© {new Date().getFullYear()} Alagappa Montessori School</p>
      </div>
    </footer>
  )
}
