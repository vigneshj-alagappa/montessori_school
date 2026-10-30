import { useState, useEffect } from 'react'
import { img, quotes, classes, reviewsData, Title } from './config'

export default function Home() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % quotes.length), 5000); return () => clearInterval(t) }, [])
  return (<>
    <section className="hero">
      <div className="hero-bg"><img src="/school-building.jpg" alt="Alagappa Montessori School Building" /></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Where little minds<br />learn by doing</h1>
          <p>A Montessori school for Pre-KG to 5th Standard, nurturing independent, curious and kind children.</p>
          <div className="hero-buttons">
            <a className="btn" href="#/contact">Book a school visit</a>
            <a className="btn ghost" href="#/about">Our approach</a>
          </div>
        </div>
        <div className="hero-img-wrap"><img src={img('child', 640, 520)} alt="Child learning" /><div className="blob" /></div>
      </div>
    </section>
    <div className="home-sections">
      <div className="home-section">
        <div className="quote-band">
          <blockquote key={i}><p>&ldquo;{quotes[i][0].replace(/[\u201c\u201d]/g, '')}&rdquo;</p><cite>- {quotes[i][1]}</cite></blockquote>
          <div className="dots">{quotes.map((_, n) => <button key={n} aria-label={`Quote ${n + 1}`} className={n === i ? 'on' : ''} onClick={() => setI(n)} />)}</div>
        </div>
      </div>
      <div className="home-section">
        <Title sub="Mixed-age, hands-on classrooms for every stage">Our classes</Title>
        <div className="grid4">{classes.map(([c, a, photo], n) => (
          <div className="card cls" key={c}><img src={photo || img('class' + n, 400, 260)} alt={c} /><h3>{c}</h3><p>Age {a}</p></div>))}</div>
      </div>
      <div className="home-section">
        <Title>Why families choose us</Title>
        <div className="grid3">{[['Child-led learning', 'Children choose their work and move at their own pace.'], ['Prepared environment', 'Calm classrooms with real Montessori materials.'], ['Caring guides', 'Trained teachers who observe, guide and encourage.']].map(([h, t]) => (
          <div className="card feat" key={h}><h3>{h}</h3><p>{t}</p></div>))}</div>
      </div>
      <div className="home-section" id="reviews">
        <Title sub="What parents say about us">Words from our families</Title>
        <div className="grid2">
          {reviewsData.map(([n, t, s]) => (
            <div className="card rev" key={n}>
              <div className="stars">{'★'.repeat(s)}{'☆'.repeat(5 - s)}</div>
              <p>&ldquo;{t}&rdquo;</p>
              <h4>{n}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>)
}
