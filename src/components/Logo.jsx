import { withBase } from '../paths'
import { SCHOOL } from '../data'

export function Logo({ className }) {
  return (
    <a className="brand" href={withBase('/')}>
      <img src={withBase('/logo.png')} alt={SCHOOL} className={className} />
    </a>
  )
}
