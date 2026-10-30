import { galleryData, Title } from './config'

export default function Gallery() {
  return (
    <div className="page-bg gallery">
      <section className="wrap">
        <Title sub="Moments from our classrooms and campus">Gallery</Title>
        <div className="gal">{galleryData.map(([s, u]) => (
          <img key={s} src={u} alt={s} loading="lazy" />
        ))}</div>
      </section>
    </div>
  )
}
