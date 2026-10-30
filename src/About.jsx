import { SCHOOL, headmistressLeader } from './config'

export default function About() {
  return (
    <div className="about-page">
      {/* Top Hero Section */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="about-eyebrow">OUR PHILOSOPHY</span>
          <h1 className="about-headline">
            A prepared world<br />
            <span className="about-headline-italic">for growing minds.</span>
          </h1>
          <p className="about-subtext">
            Montessori is more than a method here. It is the way we see children: capable, connected and wonderfully full of possibility.
          </p>
        </div>
      </section>

      {/* Middle Body Section */}
      <section className="about-body">
        <div className="about-container">
          <div className="about-grid">
            <div className="about-media-wrap">
              <img
                className="about-arch-img"
                src="/about-montessori-materials.png"
                alt="Montessori wooden puzzle learning materials"
              />
            </div>

            <div className="about-content-wrap">
              <span className="about-tag">THE MONTESSORI DIFFERENCE</span>
              <h2 className="about-section-headline">
                Education that starts with <span className="about-hl-accent">respect.</span>
              </h2>

              <div className="about-paragraphs">
                <p>
                  Our classrooms are calm, beautiful spaces designed for purposeful independence. Children choose work, repeat it until mastery and learn alongside friends of different ages.
                </p>
                <p>
                  We follow the Montessori method created by Dr. Maria Montessori at {SCHOOL}: children learn best when they are free to explore, touch and discover in a carefully prepared space.
                </p>
                <p>
                  From Pre-KG to 5th Standard, our guides support each child&rsquo;s academics, independence, and character, observing closely, stepping in thoughtfully and making space for each child&rsquo;s unique journey.
                </p>
              </div>

              <a className="about-btn" href="#/management">
                Meet our people <span className="arrow">↗</span>
              </a>

              <div className="about-pillars">
                <div className="about-pillar-card">
                  <h4>Our vision</h4>
                  <p>Confident, compassionate lifelong learners.</p>
                </div>
                <div className="about-pillar-card">
                  <h4>Our mission</h4>
                  <p>Nurture every child&rsquo;s natural joy of learning.</p>
                </div>
                <div className="about-pillar-card">
                  <h4>Our values</h4>
                  <p>Respect, independence, curiosity and kindness.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Headmistress Section - Below Meet Our People / Montessori Difference */}
          <div className="about-headmistress-wrap" id="headmistress">
            <div className="about-headmistress-divider">
              <span className="mgmt-eyebrow-dark">SCHOOL LEADERSHIP</span>
              <h3 className="about-headmistress-title">Headmistress&rsquo;s Desk</h3>
              <p className="about-headmistress-subtitle">
                A warm welcome from our Head Mistress guiding young minds with love and purpose.
              </p>
            </div>

            <div className="mgmt-founder-card mgmt-card-founder">
              <div className="mgmt-founder-top">
                <div className="mgmt-founder-photo-wrap">
                  <img
                    src={headmistressLeader.img}
                    alt={headmistressLeader.name}
                    className="mgmt-founder-photo"
                  />
                  <span className="mgmt-founder-badge badge-gold">
                    {headmistressLeader.tag}
                  </span>
                </div>
                <div className="mgmt-founder-meta">
                  <span className="mgmt-role-tag">{headmistressLeader.role}</span>
                  <h2 className="mgmt-founder-name">{headmistressLeader.name}</h2>
                  <p className="mgmt-founder-degrees">{headmistressLeader.degrees}</p>
                  <p className="mgmt-founder-trust">{headmistressLeader.trust}</p>
                </div>
              </div>

              {/* Quote / Highlight Box */}
              <div className="mgmt-founder-quote-box mgmt-quote-green">
                <blockquote>
                  &ldquo;{headmistressLeader.quote.replace(/[\u201c\u201d"]/g, '')}&rdquo;
                </blockquote>
                <cite>— {headmistressLeader.quoteSource}</cite>
              </div>

              {/* Biography / Message Paragraphs */}
              <div className="mgmt-founder-bio">
                <p>
                  <strong style={{ color: '#0f172a', fontSize: '1.05rem' }}>Dear Students and Parents,</strong>
                </p>
                {headmistressLeader.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                <div className="mgmt-founder-signoff">
                  <p>{headmistressLeader.signoff.regards}</p>
                  <p className="mgmt-signoff-name">
                    <strong>{headmistressLeader.signoff.name}</strong>
                  </p>
                  <p className="mgmt-signoff-role">{headmistressLeader.signoff.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Quote Section */}
      <section className="about-quote-section">
        <div className="about-quote-inner">
          <blockquote className="about-quote-text">
            &ldquo;The greatest gifts we can give our children are the roots of responsibility and the wings of independence.&rdquo;
          </blockquote>
          <span className="about-quote-author">Maria Montessori</span>
        </div>
      </section>
    </div>
  )
}
