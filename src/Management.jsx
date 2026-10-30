import { managementLeaders } from './config'

function LeaderTributeCard({ person, isFounder = false }) {
  const bioParagraphs = Array.isArray(person.bio) ? person.bio : [person.bio]

  return (
    <div className={`mgmt-founder-card ${isFounder ? 'mgmt-card-founder' : 'mgmt-card-trustee'}`}>
      <div className="mgmt-founder-top">
        <div className="mgmt-founder-photo-wrap">
          <img src={person.img} alt={person.name} className="mgmt-founder-photo" />
          <span className={`mgmt-founder-badge ${isFounder ? 'badge-gold' : 'badge-blue'}`}>
            {person.tag}
          </span>
        </div>
        <div className="mgmt-founder-meta">
          <span className="mgmt-role-tag">{person.role}</span>
          <h2 className="mgmt-founder-name">{person.name}</h2>
          {person.degrees && <p className="mgmt-founder-degrees">{person.degrees}</p>}
          <p className="mgmt-founder-trust">{person.trust}</p>
        </div>
      </div>

      {/* Quote / Highlight Box */}
      {person.quote && (
        <div className={`mgmt-founder-quote-box ${isFounder ? 'mgmt-quote-green' : 'mgmt-quote-blue'}`}>
          <blockquote>
            &ldquo;{person.quote.replace(/[\u201c\u201d"]/g, '')}&rdquo;
          </blockquote>
          {person.quoteSource && <cite>— {person.quoteSource}</cite>}
        </div>
      )}

      {/* Biography Paragraphs */}
      <div className="mgmt-founder-bio">
        {bioParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  )
}

export default function Management() {
  const { founder, leaders } = managementLeaders

  return (
    <div className="mgmt-page">
      {/* Management Hero Header */}
      <section className="mgmt-hero">
        <div className="mgmt-hero-inner">
          <div className="mgmt-hero-text">
            <span className="mgmt-eyebrow">THE VISION &amp; LEGACY</span>
            <h1 className="mgmt-headline">
              Guided by vision.<br />
              <span className="mgmt-headline-italic">Inspired by legacy.</span>
            </h1>
            <p className="mgmt-subtext">
              Rooted in the timeless educational ideals of Padma Bhushan Dr. R.M. Alagappa Chettiar, empowering young minds across generations.
            </p>
          </div>
          <div className="mgmt-hero-media">
            <img
              src="/management/trust_building.jpg"
              alt="Dr. Alagappa Chettiar Educational Trust, Alagappapuram, Karaikudi"
              className="mgmt-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="mgmt-body">
        <div className="mgmt-container">
          {/* Revered Founder */}
          <div className="mgmt-founder-tribute">
            <LeaderTributeCard person={founder} isFounder={true} />
          </div>

          {/* Section Divider & Heading for Trustees & Leadership */}
          <div className="mgmt-section-header">
            <span className="mgmt-eyebrow-dark">BOARD OF TRUSTEES &amp; LEADERSHIP</span>
            <h3 className="mgmt-section-title">Carrying Forward an Illustrious Tradition</h3>
            <p className="mgmt-section-subtitle">
              Eminent leaders committed to academic excellence, compassionate guidance, and community advancement.
            </p>
          </div>

          {/* Other 3 Leaders in the exact same grand tribute card format */}
          <div className="mgmt-stacked-tributes">
            {leaders.map((leader, idx) => (
              <div className="mgmt-tribute-item" key={idx}>
                <LeaderTributeCard person={leader} isFounder={false} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
