import { reviewsData, SHOW_REVIEWS } from '../data'
import { SectionHeading } from './SectionHeading'

/* Hidden until SHOW_REVIEWS is set to true in data.js */
export function TestimonialsSection() {
  if (!SHOW_REVIEWS) return null

  return (
    <section className="shell section" id="reviews">
      <SectionHeading title="What parents say" />
      <div className="reviews">
        {reviewsData.map(([n, t, s], idx) => (
          <article className="review" key={idx}>
            <div className="stars">{'★'.repeat(s)}{'☆'.repeat(5 - s)}</div>
            <p>&ldquo;{t}&rdquo;</p>
            <h4>{n}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}
