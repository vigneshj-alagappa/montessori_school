import { reviewsData, Title } from './config'

export default function Reviews() {
  return (
    <div className="page-bg reviews">
      <section className="wrap">
        <Title sub="What parents say about us">Reviews</Title>
        <div className="grid2">{reviewsData.map(([n, t, s]) => (
          <div className="card rev" key={n}>
            <div className="stars">{'★'.repeat(s)}{'☆'.repeat(5 - s)}</div>
            <p>&ldquo;{t}&rdquo;</p>
            <h4>{n}</h4>
          </div>
        ))}</div>
      </section>
    </div>
  )
}
