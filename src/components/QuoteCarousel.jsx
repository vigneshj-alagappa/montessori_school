import { useEffect, useState } from 'react'
import { quotes } from '../data'
import { SectionHeading } from './SectionHeading'

/* Rotating Maria Montessori quotes. Pauses on hover or focus, and stays still for reduced motion. */
export function QuoteCarousel() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [hold, setHold] = useState(false)

  useEffect(() => {
    if (paused || hold) return
    const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 5000)
    return () => clearInterval(t)
  }, [paused, hold])

  return (
    <div>
      <SectionHeading title="Words to grow by" />
      <div className="quote-card" onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
        <blockquote key={i}><p>&ldquo;{quotes[i][0].replace(/[“”]/g, '')}&rdquo;</p><cite>{quotes[i][1]}</cite></blockquote>
        <div className="dots">
          {quotes.map((_, n) => <button key={n} aria-label={`Quote ${n + 1}`} aria-current={n === i} className={n === i ? 'on' : ''} onClick={() => setI(n)} />)}
          <button className="quote-toggle" aria-label={paused ? 'Play quotes' : 'Pause quotes'} onClick={() => setPaused(!paused)}>{paused ? '▶' : '❚❚'}</button>
        </div>
      </div>
    </div>
  )
}
