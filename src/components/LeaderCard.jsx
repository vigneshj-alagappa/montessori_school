/* Profile card used for the founder, trustees and Head Mistress */
export function LeaderCard({ person, tint, greeting }) {
  return (
    <article className="leader">
      <div className="leader-top">
        <div className="leader-photo">
          <img src={person.img} alt={person.name} />
        </div>
        <div>
          <span className="leader-tag">{person.role}</span>
          <h3>{person.name}</h3>
          {person.degrees && <p className="leader-degrees">{person.degrees}</p>}
          <p className="leader-trust">{person.trust}</p>
        </div>
      </div>
      {person.quote && (
        <div className={`leader-quote tint-${tint}`}>
          <blockquote>&ldquo;{person.quote.replace(/[“”"]/g, '')}&rdquo;</blockquote>
          {person.quoteSource && <cite>{person.quoteSource}</cite>}
        </div>
      )}
      <div className="leader-bio">
        {greeting && <p><strong>{greeting}</strong></p>}
        {person.bio.map((para, i) => <p key={i}>{para}</p>)}
        {person.signoff && (
          <div className="leader-signoff">
            <p>{person.signoff.regards}</p>
            <p><strong>{person.signoff.name}</strong></p>
            <p>{person.signoff.role}</p>
          </div>
        )}
      </div>
    </article>
  )
}
