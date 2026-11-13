import { highlights } from '../data'
import { Icon } from './Icon'

/* White strip of key facts that overlaps the bottom of the home hero */
export function StatsBand() {
  return (
    <div className="shell">
      <ul className="highlights">
        {highlights.map(([icon, title, text, tone]) => (
          <li key={title}>
            <span className={`tone-${tone}`}><Icon name={icon} size={34} /></span>
            <div><strong>{title}</strong><small>{text}</small></div>
          </li>
        ))}
      </ul>
    </div>
  )
}
