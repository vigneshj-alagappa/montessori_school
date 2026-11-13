import { SCHOOL } from '../data'

export function Logo({ className }) {
  return (
    <a className="brand" href="/">
      <img src="/logo.png" alt={SCHOOL} className={className} />
    </a>
  )
}
